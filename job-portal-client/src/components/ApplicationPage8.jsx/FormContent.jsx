import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const stages = [
  { title: "Resume Screening" },
  { title: "Screening Call" },
  { title: "In-Person Interview" },
];

const hiringStages = [
  { title: "Resume Screening", icon: faUserFriends },
  { title: "Screening Call", icon: faUserFriends },
  { title: "Assessment / Take home task", icon: faUserFriends },
  { title: "In-Person Interview", icon: faUserFriends },
  { title: "HR Interview", icon: faUserFriends },
  { title: "Background Check", icon: faUserFriends },
  { title: "Reference Check", icon: faUserFriends },
  { title: "Offer", icon: faUserFriends },
];

const FormContent = ({ currentStep, currentSubStep, handleNextStep }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [formData, setFormData] = useState(
    stages.reduce((acc, stage, index) => {
      acc[`collaborator-${index}`] = ""; // Initialize empty collaborator fields
      return acc;
    }, {})
  );

  const handleChange = (e, index) => {
    const name = `collaborator-${index}`;
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  const handleDelete = (index) => {
    const name = `collaborator-${index}`;
    const newFormData = { ...formData };
    delete newFormData[name];
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure all collaborator fields are filled
    const allFieldsFilled = stages.every((_, index) => {
      return formData[`collaborator-${index}`].trim() !== "";
    });

    if (!allFieldsFilled) {
      alert("Please fill out all the collaborator fields before continuing.");
      return;
    }

    console.log(formData); // Log form data for debugging

    // If all fields are filled, navigate to the next route
    navigate("/admin/mainlayout9"); // Replace '/next-route' with your desired path
  };

  return (
    <div className="flex flex-1 gap-8">
      <form action="" onSubmit={handleSubmit} className="w-[600px]">
        <div className="space-y-6">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="border rounded-lg bg-white p-6 shadow-sm relative"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">{stage.title}</h3>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDelete(index)}
                />
              </div>
              <div>
                <a
                  href="#"
                  className="text-indigo-600"
                  onClick={(e) => {
                    e.preventDefault();
                    const name = `collaborator-${index}`;
                    setFormData({ ...formData, [name]: "" });
                  }}
                >
                  Add collaborators
                </a>
                <input
                  type="text"
                  name={`collaborator-${index}`}
                  placeholder="Collaborator"
                  value={formData[`collaborator-${index}`] || ""}
                  onChange={(e) => handleChange(e, index)}
                  className="mt-2 w-full border rounded-lg p-2 bg-gray-100"
                />
              </div>
            </div>
          ))}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-black rounded-md"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md"
            >
              Save and continue
            </button>
          </div>
        </div>
      </form>
      <div className="w-[300px] p-6 bg-white border rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Hiring Stages</h3>
        <div className="space-y-3">
          {hiringStages.map((stage, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 flex items-center"
            >
              <FontAwesomeIcon
                icon={stage.icon}
                className="mr-2 text-indigo-600"
              />
              {stage.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormContent;
