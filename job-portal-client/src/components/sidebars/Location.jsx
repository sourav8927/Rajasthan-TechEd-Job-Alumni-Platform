

import React from 'react';
import InputField from '../InputField';

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>

      <div>
        <label htmlFor="test1" className='sidebar-label-container'>
          <input type="radio" name='test1' id='test1' value="" onChange={handleChange} checked={true}/>
          <span className='checkmark'></span>All
        </label>
        <InputField key="london" handleChange={handleChange} value="london" title="London" name="test2"/>
        <InputField key="japan" handleChange={handleChange} value="japan" title="Japan" name="test3"/>
        <InputField key="seattle" handleChange={handleChange} value="seattle" title="Seattle" name="test4"/>
        <InputField key="boston" handleChange={handleChange} value="boston" title="Boston" name="test5"/>
      </div>
    </div>
  );
};

export default Location;
