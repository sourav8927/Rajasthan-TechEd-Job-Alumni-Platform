import React, { useState } from 'react';

import FormSection from './FormSection';
import FrequentlyUsedFields from './FrequentlyUsedFields';
import SideBarJobPost from '../SideProgressBar.jsx/SideBarJobPost';

const MainAppPage7 = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [currentSubStep, setCurrentSubStep] = useState(null);

    const handleSaveAndContinue = () => {
        // If on the last substep, go to the next main step
        if (currentSubStep !== null) {
            const subStepCount = 4; // Update this if the number of substeps changes
            if (currentSubStep < subStepCount) {
                setCurrentSubStep(currentSubStep + 1);
            } else {
                setCurrentStep(currentStep + 1);
                setCurrentSubStep(null); // Reset substep
            }
        } else {
            setCurrentStep(currentStep + 1);
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
                    <div className="flex-grow overflow-hidden flex">
                        <FormSection />
                        <FrequentlyUsedFields />
                    </div>
                </div>
                {/* <button
                    className="mt-8 bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={handleSaveAndContinue}
                >
                    Save and Continue
                </button> */}
            </div>
        </div>
    );
};

export default MainAppPage7;
