import React from 'react'
import { VscThreeBars } from "react-icons/vsc";
const UserProfile = () => {
  return (
   
        <div className=" h-screen w-full items-center text-center  bg-gray-50 pt-32">
          <div className="text-center items-center flex gap-8 pl-20 pb-5">
            <VscThreeBars className="text-3xl " />
            <h2 className="text-3xl font-bold  ">Dashboard</h2>
          </div>
          <div className="h-1 w-full  bg-gradient-to-r from-[#ffffff] to-[#056aed]"></div>
          <div className="pl-20 pr-20">

          <div>
            <div className="bg-gray-400 h-24 w-24 rounded-full mx-auto"></div>
            <p className="mt-4">PROFILE NAME</p>
          </div>
          <div className="flex">
            <div className="w-2/3 bg-gray-100 p-4 rounded">
              <h3 className="font-bold mb-2">Skills</h3>
              <p>Details about skills...</p>
              <h3 className="font-bold mb-2 mt-4">Academics</h3>
              <p>Details about academics...</p>
            </div>
            <div className="w-2/3 bg-gray-100 p-4 ml-4 rounded">
              <h3 className="font-bold mb-2">Resume</h3>
              <p>Details about resume...</p>
            </div>
          </div>
          </div>
        </div>
     
 
    
  )
}

export default UserProfile
