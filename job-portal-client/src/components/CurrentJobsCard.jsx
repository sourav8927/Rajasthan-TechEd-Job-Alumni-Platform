import React from "react";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const CurrentJobsCard = ({ data }) => {
  const {
    job_id,
    employer_name,
    job_title,
    employer_logo,
    required_experience_in_months,
    maxPrice,
    salaryType,
    job_country,
    job_posted_at_datetime_utc,
    job_employment_type,
    job_description,
    job_highlights,
    Qualifications,
    Responsibilities,
    job_apply_link,
    job_google_link
  } = data;

  return (
    <section className="card h-[50%] card shadow-lg rounded-md bg-white ">
      
        <div >
            <div className="p-5">
        <img src={employer_logo} alt="" className="w-[100px] h-[100px]" />

            </div>
            <div className=" justify-start px-5">
          <h4 className="mb-1 text-3xl text-blue-500 font-bold">{employer_name}</h4>
          <h3 className="text-lg font-semibold mb-2 ">{job_title}</h3>

            </div>
          <div className="md:flex gap-6 my-10">
            <div className="flex-wrap  text-black/70 text-base space-y-5">
              <span className="flex items-center gap-2">
                <FiMapPin className="text-2xl" />
                {job_country}
              </span>
              <span className="flex items-center gap-2">
                <FiClock className="text-2xl"/>
                {job_employment_type}
              </span>
              <span className="flex items-center gap-2">
                <FiDollarSign className="text-2xl" />
                $65,000 - $75,000
                (negotiable)
              </span>
              <span className="flex items-center gap-2">
                <FiCalendar className="text-2xl"/>
                {job_posted_at_datetime_utc}
              </span>
            </div>
            <div className="space-y-4">
            <div>
                <h2 className="font-bold">Job Description: </h2>
              <p className="text-base text-black/70">{job_description}</p>
            </div>
            {/* Qualifications */}
            <div>
            <h3 className="font-bold">Qualifications: </h3>
            <p className="text-base text-black/70">{job_highlights.Qualifications}</p>

            </div>
                {/* requirements */}
            <div >
            <h3 className="font-bold">Responsibilities: </h3>
            <p className="text-base text-black/70">{job_highlights.Responsibilities}</p>
            </div>
            <a href={job_google_link}>
            <div className="bg-blue-500 text-center rounded-md p-2 mt-10">
                <p className="text-base font-bold  text-white ">Click here to apply</p>
                </div>
            </a>
            
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default CurrentJobsCard;
