import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div className="card h-[50%]">
      <div className="mb-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for jobs
        </h3>
        <p className="text-black/75 text-base mb-4">
          hii this is me and if you want to email and feel free then plz do
          email
        </p>

        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue-500 rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
      {/* 2nd section */}
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get noticed faster
        </h3>
        <p className="text-black/75 text-base mb-4">
          hii this is me and if you want to email and feel free then plz do
          email
        </p>

        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload your resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue-500 rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
