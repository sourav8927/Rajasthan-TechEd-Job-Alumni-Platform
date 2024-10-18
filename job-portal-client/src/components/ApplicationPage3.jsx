import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SideBarJobPost from "./SideProgressBar.jsx/SideBarJobPost";

const ApplicationPage3 = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    collaborator: "",
    hiringManager: "",
    recruiters: "",
    businessUnit: "",
  });

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(2); 
  const [currentSubStep, setCurrentSubStep] = useState(null); 
  const navigate = useNavigate(); // React Router's navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate required fields
  const validateForm = () => {
    let formErrors = {};
    if (!formData.jobTitle) formErrors.jobTitle = "Job Title is required";
    if (!formData.hiringManager) formErrors.hiringManager = "Hiring Manager is required";
    if (!formData.recruiters) formErrors.recruiters = "Recruiters are required";
    if (!formData.collaborator) formErrors.collaborator = "Collaborator is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Proceed to the next step or route if validation passes
      console.log(formData);

      // If using substeps logic:
      if (currentSubStep !== null) {
        setCurrentSubStep((prev) => prev + 1);
        if (currentSubStep >= 4) {
          setCurrentStep((prev) => prev + 1);
          setCurrentSubStep(null);
        }
      } else {
        setCurrentStep((prev) => prev + 1);
      }

      // Navigate to another route (e.g., "/next-page") on successful submission
      navigate("/admin/applicationPage4"); 
    }
  };

  return (
    <div className="min-h-screen max-w-screen-2xl container bg-gray-200 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-3/4 p-8 mt-10 mb-10">
        <div className="flex space-x-8 mb-8">
          <SideBarJobPost
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            currentSubStep={currentSubStep}
            setCurrentSubStep={setCurrentSubStep}
          />
          <div className="w-3/4">
            <form onSubmit={handleSubmit}>
              {/* Job Title */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="jobTitle">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Add position name"
                    required
                  />
                  {errors.jobTitle && <p className="text-red-500 text-sm">{errors.jobTitle}</p>}
                  {/* Job level checkboxes */}
                  <div className="flex space-x-4">
                    {/* Similar checkbox logic here */}
                  </div>
                </div>
              </div>

              {/* Hiring Manager */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="hiringManager">
                  Hiring Manager <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    id="hiringManager"
                    name="hiringManager"
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter hiring manager name and id"
                    required
                  />
                  <button type="button" className="text-gray-500 p-2">
                    {/* SVG button icon */}
                  </button>
                </div>
                {errors.hiringManager && <p className="text-red-500 text-sm">{errors.hiringManager}</p>}
              </div>

              {/* Recruiters */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="recruiters">
                  Recruiters <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    id="recruiters"
                    name="recruiters"
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Choose multiple options if applicable"
                    required
                  />
                  <button type="button" className="text-gray-500 p-2">
                    {/* SVG button icon */}
                  </button>
                </div>
                {errors.recruiters && <p className="text-red-500 text-sm">{errors.recruiters}</p>}
              </div>

              {/* Collaborator */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="collaborator">
                  Collaborator <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    id="collaborator"
                    name="collaborator"
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Choose multiple options if applicable"
                    required
                  />
                  <button type="button" className="text-gray-500 p-2">
                    {/* SVG button icon */}
                  </button>
                </div>
                {errors.collaborator && <p className="text-red-500 text-sm">{errors.collaborator}</p>}
              </div>

              {/* Business Unit */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="businessUnit">
                  Business Unit
                </label>
                <select
                  id="businessUnit"
                  name="businessUnit"
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Choose location</option>
                  <option value="None">None</option>
                </select>
              </div>

              {/* Form Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-md hover:bg-gray-300"
                  onClick={() => {
                    if (currentSubStep) {
                      setCurrentSubStep((prev) => prev - 1);
                    } else {
                      setCurrentStep((prev) => prev - 1);
                    }
                  }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700"
                >
                  Save and continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage3;
