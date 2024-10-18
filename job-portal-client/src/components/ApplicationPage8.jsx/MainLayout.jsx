import React, { useState } from 'react';
import FormContent from './FormContent';
import SideBarJobPost from '../SideProgressBar.jsx/SideBarJobPost';

const MainLayout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSubStep, setCurrentSubStep] = useState(null);

  const handleNextStep = () => {
    if (currentStep === 3 && currentSubStep < 4) {
      // If in step 3 (Application Form) and there are substeps, move to the next substep
      setCurrentSubStep(currentSubStep + 1);
    } else if (currentStep < 5) {
      // Otherwise, move to the next main step
      setCurrentStep(currentStep + 1);
      setCurrentSubStep(null); // Reset substep when going to next main step
    }
  };

  return (
    <div className="min-h-screen max-w-screen-2xl container bg-gray-200 justify-center items-center flex">
            <div className="bg-white shadow-lg rounded-lg  p-8 mt-10 mb-10">
        <div className="flex">
          <SideBarJobPost
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            currentSubStep={currentSubStep}
            setCurrentSubStep={setCurrentSubStep}
          />
          <div className="flex flex-col overflow-hidden flex-1">
            <FormContent
              currentStep={currentStep}
              currentSubStep={currentSubStep}
              handleNextStep={handleNextStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
