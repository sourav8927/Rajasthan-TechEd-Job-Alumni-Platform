import React from "react";

function ApplicationStatus() {
  return (
    <div className="flex h-screen w-full items-center text-center justify-center bg-gray-300">
      
      <div className="w-3/4 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">APPLICATION STATUS</h1>
          
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-200 h-24 flex items-center justify-center">Applied Jobs</div>
          <div className="bg-gray-200 h-24 flex items-center justify-center">Favourite Jobs</div>
          <div className="bg-gray-200 h-24 flex items-center justify-center">Job Alerts</div>
        </div>

        <div className="bg-gray-200 h-48 flex items-center justify-center">Application Status</div>
      </div>
    </div>
  );
}

export default ApplicationStatus;