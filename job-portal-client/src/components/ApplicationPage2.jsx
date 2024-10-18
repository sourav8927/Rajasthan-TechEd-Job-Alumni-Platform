import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import SideBarJobPost from "./SideProgressBar.jsx/SideBarJobPost";

const ApplicationPage = () => {
  const navigate = useNavigate(); // Hook to handle routing

  const [formData, setFormData] = useState({
    jobName: "",
    jobDescription: "",
    jobType: "",
    jobLocation: "",
    recruitmentQuota: "",
  });

  const [errors, setErrors] = useState({}); // State to store form validation errors
  const [currentStep, setCurrentStep] = useState(1); // State to track the current step
  const [currentSubStep, setCurrentSubStep] = useState(null); // State to track the current substep (if any)

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.jobName) newErrors.jobName = "Job Name is required";
    if (!formData.jobDescription) newErrors.jobDescription = "Job Description is required";
    if (!formData.jobType) newErrors.jobType = "Job Type is required";
    if (!formData.jobLocation) newErrors.jobLocation = "Job Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length===0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // const formErrors = validateForm();
    // if (Object.keys(formErrors).length > 0) {
    //   setErrors(formErrors);
    // } else {
    //   setErrors({});

    //   // If form is valid, move to next step or navigate to next page
    //   if (currentStep === 3 && currentSubStep !== null) {
    //     if (currentSubStep < 4) {
    //       setCurrentSubStep(currentSubStep + 1);
    //     } else {
    //       setCurrentStep(currentStep + 1);
    //       setCurrentSubStep(null);
    //     }
    //   } else if (currentStep < 5) {
    //     setCurrentStep(currentStep + 1);
    //   } else {
    //     console.log("Form submission complete", formData);
    //     // Navigate to another route if all fields are correctly filled
    //     navigate("/admin/applicationPage3"); // Replace "/next-page" with the desired route path
    //   }
    // }

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
      navigate("/admin/applicationPage3"); 
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
              {/* Job Name */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="jobName">
                  Job Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="jobName"
                  name="jobName"
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Add position name"
                  required
                />
                {errors.jobName && <span className="text-red-500">{errors.jobName}</span>}
              </div>

              {/* Job Description */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="jobDescription">
                  Job Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="jobDescription"
                  name="jobDescription"
                  className="w-full p-2 border rounded-md"
                  onChange={handleChange}
                  placeholder="Enter job description"
                  rows="4"
                  required
                ></textarea>
                {errors.jobDescription && (
                  <span className="text-red-500">{errors.jobDescription}</span>
                )}
              </div>

              {/* Job Type */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Job Type <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="jobType"
                      value="Full-Time"
                      onChange={handleChange}
                    />
                    <span>Full-Time</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="jobType"
                      value="Part-Time"
                      onChange={handleChange}
                    />
                    <span>Part-Time</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="jobType"
                      value="Internship"
                      onChange={handleChange}
                    />
                    <span>Internship</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="jobType"
                      value="Temporary"
                      onChange={handleChange}
                    />
                    <span>Temporary</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="jobType"
                      value="Contract"
                      onChange={handleChange}
                    />
                    <span>Contract</span>
                  </label>
                </div>
                {errors.jobType && <span className="text-red-500">{errors.jobType}</span>}
              </div>

              {/* Job Location */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="jobLocation">
                  Job Location <span className="text-red-500">*</span>
                </label>
                <select
                  id="jobLocation"
                  name="jobLocation"
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Choose location</option>
                  <option value="Burdhaman">Burdhaman</option>
                </select>
                {errors.jobLocation && (
                  <span className="text-red-500">{errors.jobLocation}</span>
                )}
              </div>

              {/* Recruitment Quota */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Recruitment Quota</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="recruitmentQuota"
                      onChange={handleChange}
                      value="0-10 Candidates"
                    />
                    <span>0 - 10 Candidates</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="recruitmentQuota"
                      onChange={handleChange}
                      value="10-50 Candidates"
                    />
                    <span>10 - 50 Candidates</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="recruitmentQuota"
                      onChange={handleChange}
                      value=">50 Candidates"
                    />
                    <span> 50 Candidates</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
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

export default ApplicationPage;
