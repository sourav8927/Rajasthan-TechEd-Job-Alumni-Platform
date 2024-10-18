import React from 'react'
import InputField from '../InputField'


const EmploymentType = ({handleChange}) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Type of employment</h4>

      <div>
        <label htmlFor="test5" className="sidebar-label-container">
          <input
            type="radio"
            name="test5"
            id="test5"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any experience
        </label>
        <InputField
          handleChange={handleChange}
          value="Temporary"
          title="Temporary"
          name="test5"
        />
        <InputField
          handleChange={handleChange}
          value="Part-time"
          title="Part-time"
          name="test5"
        />
        <InputField
          handleChange={handleChange}
          value="Full-time"
          title="Full-time"
          name="test5"
        />
       
      </div>
    </div>
  )
}

export default EmploymentType
