import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const FormSection = () => {
    const navigate = useNavigate(); // Initialize navigate
    const [formData, setFormData] = useState({
        form_checkbox: false
    });
    const [currentStep, setCurrentStep] = useState(1);
    const [currentSubStep, setCurrentSubStep] = useState(null);

    const handleSaveAndContinue = () => {
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

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the checkbox is checked
        if (!formData.form_checkbox) {
            alert("Please agree with the terms and conditions before continuing.");
            return;
        }

        // Log form data for debugging
        console.log(formData);

        // Handle form submission and go to the next step/sub-step
        if (currentSubStep < 4) {
            setCurrentSubStep(currentSubStep + 1);
        } else {
            setCurrentStep(currentStep + 1);
            setCurrentSubStep(null);
        }

        // Navigate to the desired route if the checkbox is checked
        navigate("/admin/mainlayout8"); // Replace '/next-route' with your desired path
    };

    return (
        <div className="w-[600px] pl-5 pr-5 pt-10">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
                <div className="flex space-x-2">
                    <button className="text-indigo-600">
                        <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <p className="text-gray-700 mb-4">
                    HireEasy, an important part of our commitment to you, is respect for your privacy and protecting 
                    your personal information in our care. By providing information requested on this site to 
                    HireEasy, you consent to HireEasy collecting, using, disclosing, and retaining your 
                    information for the purposes of recruitment and selection, general statistical analysis/reporting, 
                    and, where applicable, for new hire administration or purposes reasonably ancillary to your 
                    employment with HireEasy. If you have any further questions or concerns about how we maintain 
                    the privacy of your personal information during the recruitment and selection process, 
                    <a href="#" className="text-indigo-600"> click here</a>.
                </p>
                <label className="flex items-center">
                    <input 
                        type="checkbox" 
                        name="form_checkbox" 
                        onChange={handleChange} 
                        id="form_checkbox" 
                        className="form_checkbox h-5 w-5 text-indigo-600" 
                        checked={formData.form_checkbox}
                    />
                    <span className="ml-2 text-gray-700">I agree with the terms and conditions</span>
                </label>
                <div className="flex justify-end mt-4">
                    <button type='submit' className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                        Save and Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormSection;
