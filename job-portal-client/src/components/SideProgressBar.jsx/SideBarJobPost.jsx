import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import an icon for the checkmark
import { FaArrowLeftLong } from "react-icons/fa6";

const SideBarJobPost = ({
  currentStep,
  setCurrentStep,
  currentSubStep,
  setCurrentSubStep,
}) => {
  const steps = [
    { number: 1, label: "Basic Information" },
    { number: 2, label: "Hiring Details" },
    {
      number: 3,
      label: "Application Form",
      subSteps: [
        { number: 1, label: "My Information" },
        { number: 2, label: "My Experience" },
        { number: 3, label: "Application Questions" },
        { number: 4, label: "Terms & Conditions" },
      ],
    },
    { number: 4, label: "Stages" },
    { number: 5, label: "Review & Submit" },
  ];

  return (
    <div className="w-1/4 relative">
      <div className="flex items-center gap-4">
        <FaArrowLeftLong className="text-lg" />
        <h2 className="text-2xl font-bold text-gray-700 ">New Job</h2>
      </div>
      <div className="pt-20">
        <ul className="space-y-4">
          {steps.map((step, index) => (
            <li key={step.number} className="relative">
              {/* Vertical Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`absolute left-2 top-5 h-full w-0.5 items-center justify-center text-center ${
                    currentStep > step.number ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              )}
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => {
                  setCurrentStep(step.number);
                  if (!step.subSteps) {
                    setCurrentSubStep(null); // Reset substeps if not in Application Form
                  }
                }}
              >
                <span>
                  {currentStep > step.number ? (
                    <FaCheckCircle className="text-blue-500" /> // Checkmark for completed steps
                  ) : currentStep === step.number ? (
                    <span className="text-blue-500">▶</span> // Arrow for the current step
                  ) : (
                    <span className="text-gray-500">{step.number}</span> // Step number
                  )}
                </span>
                <span
                  className={`font-medium ${
                    currentStep === step.number
                      ? "text-gray-700"
                      : currentStep > step.number
                      ? "text-blue-500"
                      : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Render substeps if this is the Application Form step */}
              {step.subSteps && currentStep === step.number && (
                <ul className="ml-8 space-y-2 mt-2">
                  {step.subSteps.map((subStep) => (
                    <li
                      key={subStep.number}
                      className="flex items-center space-x-2 cursor-pointer"
                      onClick={() => setCurrentSubStep(subStep.number)}
                    >
                      <span className="text-gray-500">---</span>
                      <span
                        className={`font-medium ${
                          currentSubStep === subStep.number
                            ? "text-gray-700"
                            : currentSubStep > subStep.number
                            ? "text-blue-500"
                            : "text-gray-500"
                        }`}
                      >
                        {subStep.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarJobPost;
