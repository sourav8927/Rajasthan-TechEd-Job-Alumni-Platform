import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
{
  /* <CiCirclePlus className='relative items-center text-center text-6xl justify-center ' /> */
}
{
  /* <MdEdit /> */
}
function User_dash() {
  return (
    <div className="flex h-screen bg-white ">
      <aside className="w-1/4 bg-gray-200 p-4 pt-40">
        <div className="text-center items-center justify-center text-white">
          <div className=" flex">
            <img
              src="../../public/images/new default logo.png"
              alt=""
              className="bg-gray-400 h-[70px] w-[70px] rounded-full mx-auto hover:blur-sm "
            />
          </div>
          <p className="mt-4 text-gray-600">PROFILE NAME</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4">
            Edit Profile
          </button>
          <nav className="mt-8">
            <ul>
              <li className="mb-2">
               <NavLink to="/userDash/applicationStatus"> <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full  text-center">
                  Application Status
                </button></NavLink>
              </li>
              <li className="mb-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full  text-center">
                  Companies List
                </button>
              </li>
              <li>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full  text-center">
                  Statistics
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <Outlet/>
    </div>
  );
}

export default User_dash;
