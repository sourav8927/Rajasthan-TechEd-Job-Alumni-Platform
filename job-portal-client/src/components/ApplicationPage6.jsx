import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SideBarJobPost from "./SideProgressBar.jsx/SideBarJobPost";

const ApplicationPage6 = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    eligibility: "",
    backgroundCheck: "",
    startDate: "",
    salary: "",
  });

  // State to track the current step and sub-step
  const [currentStep, setCurrentStep] = useState(4);
  const [currentSubStep, setCurrentSubStep] = useState(3);

  // Validation state
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.eligibility.trim()) {
      newErrors.eligibility = "Eligibility is required.";
    }
    if (!formData.backgroundCheck.trim()) {
      newErrors.backgroundCheck = "Consent for background check is required.";
    }
    if (!formData.startDate.trim()) {
      newErrors.startDate = "Start date is required.";
    }
    if (!formData.salary.trim()) {
      newErrors.salary = "Expected salary is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length===0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // If no errors, proceed with submission
      console.log(formData);

      // Move to the next step or sub-step
      if (currentSubStep < 4) {
        setCurrentSubStep(currentSubStep + 1);
      } else {
        setCurrentStep(currentStep + 1);
        setCurrentSubStep(null3);
      }

      // Navigate to the next route if needed (replace '/next-route' with your desired path)
      navigate("/admin/mainapppage7");
    } else {
      // Set validation errors
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen max-w-screen-2xl container bg-gray-200 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-3/4 p-8 mt-10 mb-10">
        <div className="flex">
          {/* Sidebar */}
          <SideBarJobPost
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            currentSubStep={currentSubStep}
            setCurrentSubStep={setCurrentSubStep}
          />

          {/* Main Form */}
          <div className="w-4/5">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Application Questions</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700">
                    Are you legally eligible to work in the country and location
                    specified?
                  </label>
                  <input
                    type="text"
                    name="eligibility"
                    value={formData.eligibility}
                    onChange={handleChange}
                    className="mt-2 p-3 w-full border rounded-lg"
                  />
                  {errors.eligibility && (
                    <p className="text-red-600">{errors.eligibility}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700">
                    Do you consent for background check?
                  </label>
                  <input
                    type="text"
                    name="backgroundCheck"
                    value={formData.backgroundCheck}
                    onChange={handleChange}
                    className="mt-2 p-3 w-full border rounded-lg"
                  />
                  {errors.backgroundCheck && (
                    <p className="text-red-600">{errors.backgroundCheck}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700">
                    Available date to start position?
                  </label>
                  <input
                    type="month"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="mt-2 p-3 w-full border rounded-lg"
                  />
                  {errors.startDate && (
                    <p className="text-red-600">{errors.startDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700">
                    Expected Salary? (Enter annual range)
                  </label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    className="mt-2 p-3 w-full border rounded-lg"
                  />
                  {errors.salary && (
                    <p className="text-red-600">{errors.salary}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg"
                >
                  Save and Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage6;
