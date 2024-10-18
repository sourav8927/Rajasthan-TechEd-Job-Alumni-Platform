import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../store/Auth";
import { useAuth0 } from "@auth0/auth0-react";
import { IoNotificationsCircle } from "react-icons/io5";
import { FadeLoader } from "react-spinners";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleIsMenuToggler = () => setIsMenuOpen(!isMenuOpen);

  // Custom Auth (useAuth)
  const { User, isLoading: isAuthLoading, isLoggedIn, logOutUser } = useAuth();

  // Auth0 Auth (useAuth0)
  const {
    user,
    loginWithRedirect,
    isAuthenticated,
    logout,
    isLoading: isAuth0Loading,
  } = useAuth0();

  // If either custom auth or Auth0 is loading
  if ((isLoggedIn && isAuthLoading) || (isAuthenticated && isAuth0Loading)) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <FadeLoader className="mb-4" color="#1e40af" loading={true} />
        <h1 className="text-center text-2xl font-bold text-blue-700">
          Wait a minute...
        </h1>
      </div>
    );
  }


  // Determine if the user is authenticated (either via custom Auth or Auth0)
  const isAuthenticatedUser = isLoggedIn || isAuthenticated;

  // Determine the user data (from custom Auth or Auth0)
  const currentUser = User?.username || user?.name || "User";

  // Handle logout based on the authentication method being used
  const handleLogout = () => {
    if (isLoggedIn) {
      logOutUser(); // Custom Auth logout
    } else if (isAuthenticated) {
      logout({ returnTo: window.location.origin }); // Auth0 logout
    }
  };

  return (
    <div className="max-w-full container mx-auto xl:px-24 px-4 fixed top-0 w-full z-10 hover:shadow-md bg-slate-100 drop-shadow-xl">
      <nav className="flex justify-between items-center py-2 ">
        <div className="flex space-x-2">
          <img
            src="/public/images/Logo.svg"
            className="size-[70px]"
            alt="Logo"
          />
          <a
            href="/"
            className="flex items-center text-2xl text-blue-500 font-semibold font-sans"
          >
            JOB FINDER
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 justify-center items-center">
          <NavLink to="/">
            <li>Start a search</li>
          </NavLink>
          <NavLink to="/current-jobs">
            <li>Current Jobs</li>
          </NavLink>
          <NavLink to="/salary-estimate">
            <li>Salary Estimate</li>
          </NavLink>
          {User?.isAdmin ? (
            <NavLink to="/admin">
              <li>Company Dashboard</li>
            </NavLink>
          ) : (
            <NavLink to="/Userdash">
              <li>My Dashboard</li>
            </NavLink>
          )}
          <div className="text-5xl text-blue-500">
            <IoNotificationsCircle />
            <div className="h-2 w-2 rounded-full bg-red-500 relative left-10 bottom-4 right-9 "></div>
          </div>
        </ul>

        {/* User Controls */}
        <div className="text-base font-medium space-x-5  lg:block flex">
          
          {isAuthenticatedUser ? (
            <>
              <span className="text-gray-500">{currentUser}</span>
              <button
                onClick={handleLogout}
                className="py-2 px-5 border rounded text-white bg-blue-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="py-2 px-5 border rounded">
                Log in
              </Link>
              <Link
                to="/registercard"
                className="py-2 px-5 border rounded text-white bg-blue-500"
              >
                Register
              </Link>
            </>
          )}
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden block">
          <button onClick={handleIsMenuToggler}>
            {isMenuOpen ? (
              <RxCross2 className="w-5 h-5" />
            ) : (
              <FaBarsStaggered className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul className="text-white py-1">
          <NavLink to="/">
            <li className="py-1">Home</li>
          </NavLink>
          <NavLink to="/current-jobs">
            <li className="py-1">Current Jobs</li>
          </NavLink>
          <NavLink to="/salary-estimate">
            <li className="py-1">Salary Estimate</li>
          </NavLink>
          {User?.isAdmin ? (
            <NavLink to="/admin">
              <li className="p-[20px]">Company Dashboard</li>
            </NavLink>
          ) : (
            <NavLink to="/Userdash">
              <li>My Dashboard</li>
            </NavLink>
          )}
          <div className="flex py-4 gap-2">
            {isAuthenticatedUser ? (
              <>
                <span>{currentUser}</span>
                <button
                  onClick={handleLogout}
                  className="py-2 px-5 border rounded text-white bg-blue-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="py-2 px-5 border rounded">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/registercard"
                    className="py-2 px-5 border rounded bg-blue-400"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
