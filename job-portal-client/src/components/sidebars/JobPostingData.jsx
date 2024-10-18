import React from "react";
import InputField from "../InputField";

const JobPostingData = ({ handleChange }) => {
  const now = new Date();
  // console.log(now)
  const twentyFourHrAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 *24* 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30*24 * 60 * 60 * 1000);
  // console.log(twentyFourHrAgo)

  //conversion data to string
  const twentyFourHrAgoData = twentyFourHrAgo.toISOString().slice(0, 10);
  const sevenDaysAgoData = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoData = thirtyDaysAgo.toISOString().slice(0, 10);
  // console.log(twentyFourHrAgoData)
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Postings information</h4>

      <div>
        <label htmlFor="test3" className="sidebar-label-container">
          <input
            type="radio"
            name="test3"
            id="test3"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All time
        </label>
        <InputField
          handleChange={handleChange}
          value={twentyFourHrAgoData}
          title="Last 24 hours"
          name="test3"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoData}
          title="Last 7 days"
          name="test3"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoData}
          title="Last month"
          name="test3"
        />
        
      </div>
    </div>
  );
};

export default JobPostingData;
