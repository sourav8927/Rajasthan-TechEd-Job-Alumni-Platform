import React, { useState } from "react";
import { useAuth } from "../../store/Auth";
import { FaCalendarAlt, FaHome, FaSlack } from "react-icons/fa"; // Icons for Google Calendar and Slack
import { FaEnvelopesBulk, FaPlus } from "react-icons/fa6";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";

const AdminHome = () => {
  const { User, isLoading } = useAuth();
  console.log("Admin user Data", User);

  // State to toggle the icon color when "Add Job" button is clicked
  const [isIconRed, setIsIconRed] = useState(false);
  const [isBtnBack, setBtnBack] = useState(false);

  // If the user data is still loading, render a loading state
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // Check if the user object exists and if the user is an admin
  if (!User || !User.isAdmin) {
    return <Navigate to="/" />; // Redirect to home if the user is not an admin
  }

  // Function to change the color of the plus icon
  const lightON = () => {
    setIsIconRed(!isIconRed);
    setBtnBack(!isBtnBack);
  };

  return (
    <div className="flex pt-20 max-h-screen-2xl overflow-hidden">
      <div className="w-80 bg-gray-50 p-5">
        {/* Logo Section */}
        <div className="w-full mb-8 mt-10 space-y-2 items-center justify-center text-center ">
          <div className="w-14 h-14 rounded-full bg-gray-400 text-center justify-center items-center p-2 m-auto overflow-hidden">
          <div className="w-3 h-1 rounded-tl-md rounded-tr-md  bg-gray-600 m-auto"></div>
            <div className="w-3 h-3 rounded-bl-lg rounded-br-lg  bg-white m-auto"></div>
            <div className="w-fit flex text-center justify-center items-center m-auto">
            <div className="w-1 h-[2px] rounded-tl-2xl  bg-blue-500 m-auto"></div>
            <div className="w-1.5 h-[2px]   bg-white m-auto"></div>
            <div className="w-1 h-[2px] rounded-tr-2xl  bg-blue-500 m-auto"></div>
            </div>
            
            {/* <div className="w-3 h-[2px]   bg-gray-700 m-auto"></div> */}
            <div className="w-10 bg-blue-700 rounded-tl-lg rounded-tr-lg h-3 m-auto text-center justify-center items-center">
              {/* <div>
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-gray-500"></div>

              </div> */}
               {/* Tie Knot */}
               <div className="flex text-center justify-center items-center">
               
            <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-white m-auto"></div>
            
            </div>
               
               <div className="w-[6px] rounded-bl-lg rounded-br-lg h-1 bg-gray-700 m-auto"></div>
              <div className="h-1 w-[3px] bg-gray-700 m-auto"></div>
              <div className="h-1 w-[2px] bg-gray-700 m-auto"></div>
            </div>
            <div className="justify-around space-x-[1px] flex mb-1">
              <div className="w-2 bg-blue-700  h-6 m-auto"></div>
              <div className="w-6 bg-blue-700 h-6 m-auto text-center justify-center items-center">
                <div className="m-auto flex flex-col items-center text-center justify-center">
                 

                  {/* Tie Shaft */}
                  <div className="h-0.5 w-[3px] bg-gray-700 m-auto"></div>
                  <div className="h-1 w-[5px] bg-gray-700 m-auto"></div>
                  <div className="h-1 w-[7px] bg-gray-700 m-auto"></div>

                  {/* Bottom of Tie (Inverted Triangle) */}
                  <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-700 m-auto"></div>
                  <div className="h-6 w-6 bg-black m-auto"></div>
                </div>
              </div>
              <div className="w-2 bg-blue-700  h-6 m-auto"></div>
            </div>
          </div>
          <h1 className="text-xl font-bold text-gray-800 ">HR Name</h1>
        </div>

        {/* Menu Items */}
        <nav>
          <ul className="space-y-4">
            <div className="text-center m-auto ">
              <NavLink to="/admin">
                <button
                  className={`w-full text-center items-center justify-center bg-blue-800 font-semibold px-4 py-2 rounded-md flex ${
                    isBtnBack ? "bg-gray-200 text-gray-600 " : "text-white"
                  }`}
                  onClick={lightON}
                >
                  <span
                    className={`pr-1 text-xl ${
                      isIconRed ? "text-red-600" : "text-white"
                    }`}
                  >
                    <FaPlus />
                  </span>
                  Add Job
                </button>
              </NavLink>
            </div>
            <li>
              <a
                href="/"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <span className="mr-3"><FaHome /></span> Company home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <span className="mr-3"><MdManageAccounts /></span> Application Managements
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <span className="mr-3"><FaUsers /></span> Users
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <span className="mr-3"><FaEnvelopesBulk /></span> Applications
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <span className="mr-3"><GiProcessor /></span> Company processing
              </a>
            </li>
          </ul>
        </nav>

        {/* App Integrations */}
        <div className="mt-8">
          <h2 className="text-sm font-semibold text-gray-500 mb-2">Apps</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="/"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <FaCalendarAlt className="mr-3" /> Google Calendar{" "}
                <span className="ml-auto bg-blue-500 text-white rounded-full px-2">
                  8
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <FaSlack className="mr-3" /> Slack{" "}
                <span className="ml-auto bg-red-500 text-white rounded-full px-2">
                  9+
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                ➕ Add integration
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminHome;
