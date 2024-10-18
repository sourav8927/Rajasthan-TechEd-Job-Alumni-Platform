import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/Auth';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { BASE_URL } from '../store/Helper';
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle ,faGithub} from "@fortawesome/free-brands-svg-icons";

const Login = () => {

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("Current User", user);

  const [User, setUser] = useState({
    email:"",
    password:"",
  })  

  const [visible, setvisible] = useState(false)

  const handleInput=(e)=>{
    console.log(e)
    let name=e.target.name
    let value=e.target.value

    setUser({
      ...User,
      [name]:value
    })
  }
// for navigator
const navigate= useNavigate();
// for call the Auth.jsx using useContext
const {storeTokenInLs}=useAuth();


  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(User);

    try {
      const loginURL= `${BASE_URL}/api/auth/login`;
      const response=await fetch(loginURL,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(User),
      });
      console.log(response);

      const res_data= await response.json();
      console.log("response data",res_data);

      if(response.ok){
        console.log("login successful");
        toast.success("Login successfull");
        navigate("/")


        //store in local storage
        // localStorage.setItem("token",res_data.token)
        storeTokenInLs(res_data.token);
      }else{
        console.log("Invalid credentials")
        toast.error(res_data.extraDetails? res_data.extraDetails: res_data.message);
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
    
          {/* for registration form */}
          <div className=" p-5 space-y-6 bg-white shadow-md rounded-2xl  md:w-[30vw]  m-auto">
            <h1 className="text-2xl font-bold text-center text-blue-600">Login form</h1>
            <br />

            <form action="" onSubmit={handleSubmit} className="space-y-6">
              <div>
                
                {/* for email */}
                <label htmlFor="Username" className="block text-sm font-medium text-gray-700">email</label>
                
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id="email"
                  required
                  autoComplete="off"
                  value={User.email}
                  onChange={handleInput}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />

                {/* for password */}
                <label htmlFor="Username">password</label>
                <div>
                <input
                  type={visible?"text":"password"}
                  name="password"
                  placeholder="password"
                  id="password"
                  required
                  autoComplete="off"
                  value={User.password}
                  onChange={handleInput}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <div className="absolute mt-2.5 ml-2 text-gray-600 " onClick={()=>{setvisible(!visible)}}>
                          {visible? <FaEye />:<FaEyeSlash />}
                      </div>
                </div>

              </div>
              <br />
              <button type="submit" className="w-full py-3 px-4 mb-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Login now</button>

              {isAuthenticated ? (
                    <button
                      onClick={(e) => {
                        logout();
                      }}
                    >
                      logout
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        loginWithRedirect();
                      }}
                      className="flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none "
                    >
                      <div className=" flex space-x-2 items-center">

                      <FontAwesomeIcon icon={faGoogle} />

                      <FontAwesomeIcon icon={faGithub} />
                      <span className="text-black font-medium">
                        Continue with Google or Github
                      </span>
                      </div>
                    </button>
                  )}
            </form>
          </div>
        {/* </div>
      </div>
    </main> */}
  </section>
  )
}

export default Login
