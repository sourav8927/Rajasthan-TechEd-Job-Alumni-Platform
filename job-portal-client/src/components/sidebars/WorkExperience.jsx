
import React from "react";
import InputField from "../InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>

      <div>
        <label htmlFor="test4" className="sidebar-label-container">
          <input
            type="radio"
            name="test4"
            id="test4"
            value=""
            onChange={handleChange}
            checked={true}
          />
          <span className="checkmark"></span>Any experience
        </label>
        <InputField
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="test5"
        />
        <InputField
          handleChange={handleChange}
          value="Work remotely"
          title="Work remotely"
          name="test6"
        />
       
      </div>
    </div>
  );
};

export default WorkExperience;
