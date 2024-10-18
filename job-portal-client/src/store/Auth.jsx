import { createContext, useContext, useState, useEffect } from "react";
import { BASE_URL } from "./Helper";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [User, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const userAuthorization = `Bearer ${token}`;

    // Store token in localStorage
    const storeTokenInLs = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    };

    // Log out the user and clear token and user data
    const logOutUser = () => {
        setToken("");
        setUser("");
        localStorage.removeItem("token");
    };

    // Check if a token is present
    const isLoggedIn = !!token;
    console.log("loggedIn", isLoggedIn);

    // Fetch the current logged-in user's data using JWT authentication
    const userAuthentication = async () => {
        // Skip if no token is available
        if (!token) {
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            const response = await fetch(`${BASE_URL}/api/auth/User`, {
                method: "GET",
                headers: {
                    Authorization: userAuthorization,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Full response data", data);

                // Correct the check for the user data
                if (data && data.userData) {
                    setUser(data.userData);  // Update based on the actual field name
                    console.log("User data", data.userData);
                } else {
                    console.log("User data not found in response");
                }
            } else {
                console.log("Error fetching user data, status:", response.status);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        userAuthentication();
    }, [token]);

    return (
        <AuthContext.Provider
            value={{ User, isLoggedIn, logOutUser, storeTokenInLs, userAuthorization, isLoading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};
