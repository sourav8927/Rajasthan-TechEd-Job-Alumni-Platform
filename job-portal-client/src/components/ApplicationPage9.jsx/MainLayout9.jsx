import React, { useState } from 'react';
import ReviewContent from './ReviewContent';
import SideBarJobPost from '../SideProgressBar.jsx/SideBarJobPost';

const MainLayout9 = () => {
    const [currentStep, setCurrentStep] = useState(5); // Starting from step 5 for Review
    const [currentSubStep, setCurrentSubStep] = useState(null);

    const handleNextStep = () => {
        if (currentStep < 5) {
            setCurrentStep(currentStep + 1);
            setCurrentSubStep(null);
        }
    };

    const handlePreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            setCurrentSubStep(null);
        }
    };

    return (
        <div className="min-h-screen max-w-screen-2xl container bg-gray-200 justify-center items-center flex">
            <div className="bg-white shadow-lg rounded-lg w-[90%]  p-8 mt-10 mb-10">
                <div className="flex">
                    <SideBarJobPost 
                        currentStep={currentStep} 
                        setCurrentStep={setCurrentStep} 
                        currentSubStep={currentSubStep} 
                        setCurrentSubStep={setCurrentSubStep} 
                    />
                    <div className="flex flex-col overflow-hidden flex-1">
                        <ReviewContent 
                            stages={[]} // Pass actual stages if needed
                            onNext={handleNextStep}
                            onBack={handlePreviousStep}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout9;
