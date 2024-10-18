import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router hook
import SideBarJobPost from "./SideProgressBar.jsx/SideBarJobPost";

const ApplicationPage4 = () => {
  const navigate = useNavigate(); // React Router navigate hook
  
  // State to manage the current step and substep
  const [currentStep, setCurrentStep] = useState(3); // Assuming this page is step 3
  const [currentSubStep, setCurrentSubStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    province: "",
  });

  const [errors, setErrors] = useState({}); // To track validation errors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.addressLine1) newErrors.addressLine1 = "Address is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length===0;
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    // If no errors, proceed to submit and navigate
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      // Go to next substep or step
      if (currentSubStep < 4) {
        setCurrentSubStep(currentSubStep + 1);
      } else {
        // setCurrentStep(currentStep + 1);
        setCurrentSubStep(1); // Reset substep to 1 for the new step
      }
      
      // Navigate to a new route if validation passes
      navigate("/admin/applicationPage5"); // Replace with the desired path
    } else {
      setErrors(formErrors); // Set the validation errors
    }

    // if (validateForm()) {
    //   // Proceed to the next step or route if validation passes
    //   console.log(formData);

    //   // If using substeps logic:
    //   if (currentSubStep !== null) {
    //     setCurrentSubStep((prev) => prev + 1);
    //     if (currentSubStep >= 4) {
    //       setCurrentStep((prev) => prev + 1);
    //       setCurrentSubStep(null);
    //     }
    //   } else {
    //     setCurrentStep((prev) => prev + 1);
    //   }

    //   // Navigate to another route (e.g., "/next-page") on successful submission
    //   navigate("/admin/applicationPage4"); 
    // }
  };

  return (
    <div className="min-h-screen max-w-screen-2xl container bg-gray-200 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-4/5 p-8 mt-10 mb-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">
              Preview
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-300">
              + Add Section
            </button>
          </div>
        </div>

        {/* Sidebar and Form */}
        <div className="flex space-x-8">
          {/* Sidebar */}
          <SideBarJobPost
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            currentSubStep={currentSubStep}
            setCurrentSubStep={setCurrentSubStep}
          />

          {/* Form Area */}
          <div className="w-3/4 bg-white shadow-md rounded-md p-6">
            <form onSubmit={handleSubmit}>
              {/* My Information Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    My Information
                  </h3>
                  <div className="flex space-x-2">
                    <button className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M17.293 3.293a1 1 0 00-1.414 0L7 12.586V15h2.414l8.879-8.879a1 1 0 000-1.414zM3 9a1 1 0 011-1h3v2H5v8h8v-2h2v3a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" />
                      </svg>
                    </button>
                    <button className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.293 16.707a1 1 0 010-1.414L13.586 11 9.293 6.707a1 1 0 011.414-1.414L15 9.586 19.293 5.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0L10 9.414 6.707 12.707a1 1 0 01-1.414 0L2.707 10.414a1 1 0 111.414-1.414L9 13.586 13.293 9.293a1 1 0 011.414 1.414l-4.293 4.293 4.293 4.293a1 1 0 01-1.414 1.414L9.293 16.707z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="firstName"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="First Name"
                      required
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-sm">{errors.firstName}</span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="addressLine1"
                  >
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Address Line 1"
                    required
                  />
                  {errors.addressLine1 && (
                    <span className="text-red-500 text-sm">{errors.addressLine1}</span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="province"
                    >
                      Province
                    </label>
                    <select
                      id="province"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">Choose Province</option>
                      <option value="None">None</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-md hover:bg-gray-300"
                  onClick={() => {
                    if (currentSubStep > 1) {
                      setCurrentSubStep(currentSubStep - 1);
                    } else if (currentStep > 1) {
                      setCurrentStep(currentStep - 1);
                      setCurrentSubStep(4); // Go to last substep of previous step
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

          {/* Right Sidebar */}
          <div className="w-1/4">
            <div className="p-4 bg-white shadow-md rounded-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Frequently used fields
              </h3>
              <div className="space-y-4">
                <button className="w-full bg-gray-200 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-300">
                  Full name
                </button>
                <button className="w-full bg-gray-200 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-300">
                  Phone
                </button>
                <button className="w-full bg-gray-200 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-300">
                  Email
                </button>
                <button className="w-full bg-gray-200 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-300">
                  Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage4;
