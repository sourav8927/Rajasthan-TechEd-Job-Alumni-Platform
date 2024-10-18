import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SideBarJobPost from "./SideProgressBar.jsx/SideBarJobPost";

const ApplicationPage5 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    province: "",
    jobTitle: "",
    company: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [currentStep, setCurrentStep] = useState(3);
  const [currentSubStep, setCurrentSubStep] = useState(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, resume: e.target.files[0] }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.province) newErrors.province = "Province is required";
    if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // // Validate form
    // if (validateForm()) {
    //   // If validation passes, navigate to the next page or perform desired action
    //   console.log(formData);
      
    //   // Example of navigating to a different route after validation
    //   navigate("/admin/applicationPage6"); // Replace "/next-route" with your actual route
    // }

    const formErrors = validateForm();
    // If no errors, proceed to submit and navigate
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      // Go to next substep or step
      if (currentSubStep < 4) {
        setCurrentSubStep(currentSubStep + 1);
      } else {
        // setCurrentStep(currentStep + 1);
        setCurrentSubStep(2); // Reset substep to 1 for the new step
      }
      
      // Navigate to a new route if validation passes
      navigate("/admin/applicationPage6"); // Replace with the desired path
    } else {
      setErrors(formErrors); // Set the validation errors
    }
  };

  return (
    <div className="min-h-screen max-w-screen-2xl container bg-gray-200 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-3/4 p-8 mt-10 mb-10">
        <div className="flex">
          <SideBarJobPost
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            currentSubStep={currentSubStep}
            setCurrentSubStep={setCurrentSubStep}
          />

          <div className="w-3/4 p-4">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-semibold">My Experience</h2>
              <div>
                <button className="mr-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                  Preview
                </button>
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  Add Section
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700">Province</label>
                  <input
                    type="text"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.province && <p className="text-red-500 text-xs">{errors.province}</p>}
                </div>

                <div className="col-span-2">
                  <label className="block text-gray-700">Resume</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V16l-8-8z"
                          fill="currentColor"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="resume-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload files</span>
                          <input
                            id="resume-upload"
                            name="resume"
                            type="file"
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, PDF up to 10MB
                      </p>
                    </div>
                  </div>
                  {errors.resume && <p className="text-red-500 text-xs">{errors.resume}</p>}
                </div>

                <div>
                  <label className="block text-gray-700">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.jobTitle && <p className="text-red-500 text-xs">{errors.jobTitle}</p>}
                </div>
                <div>
                  <label className="block text-gray-700">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.company && <p className="text-red-500 text-xs">{errors.company}</p>}
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save and Continue
                </button>
                <button
                  type="button"
                  onClick={() => alert("Section preview not implemented.")}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Preview
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage5;
