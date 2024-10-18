import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../store/Helper";
import { FaDotCircle } from "react-icons/fa";
import { VscGitStashApply } from "react-icons/vsc";

function Job_details() {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [company, setCompany] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}/api/jobs/job/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        fetch(`${BASE_URL}/api/companies/${data.companyId}`) // Assuming an endpoint to fetch company details
          .then((res) => res.json())
          .then((companyData) => setCompany(companyData))
          .catch((error) =>
            console.error("Error fetching company details:", error)
          );
      })
      .catch((error) => console.error("Error fetching job details:", error));
  }, [id]);

  // Function to format date from ISO string to readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to format salary range
  const formatSalaryRange = (min, max) => {
    if (min && max) {
      return `₹ ${min} - ₹ ${max} / month`;
    } else if (min) {
      return `₹ ${min} / month`;
    } else {
      return "Salary not specified";
    }
  };

  return (
    <div className="bg-white rounded-lg mt-20 shadow-md pl-24 pr-24 pt-10 pb-10">
      {/* Job Title, Company Logo, and Apply Button */}
      <div className="flex justify-between items-center mb-6">
        <div className=" items-center">
          <div className="flex items-center ">
            {job.companyLogo && (
              <img
                src={job.companyLogo}
                alt="Company Logo"
                className="h-12 w-12 object-contain mr-4"
              />
            )}
            <p className="text-gray-800 font-bold text-lg">{job.companyName}</p>
          </div>
          <div className="mt-3">
            <h2 className="text-3xl font-bold text-gray-900">{job.jobTitle}</h2>
          </div>
        </div>
        <div>
          <Link to="/details/apply">
            <button className=" items-center  flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Apply Now <VscGitStashApply className="pl-2 text-3xl size-8" />
            </button>
          </Link>
        </div>
      </div>

      <hr className="my-4" />

      {/* Experience Level and Employment Type */}
      <div className="flex gap-6">
        <div className="flex items-center">
  
          <div className="pt-2 pb-2 pl-4 pr-4 items-center justify-center  rounded-lg border border-gray-300   focus:outline-none bg-orange-500 ">

          <p className=" text-sm text-white">{job.experienceLevel}</p>
          </div>
        </div>
        <div className="flex items-center">
        <div className="pt-2 pb-2 pl-4 pr-4 items-center justify-center  rounded-lg border border-gray-300 bg-white   focus:outline-none ">

          <p className=" text-sm text-gray-600">{job.employmentType}</p>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      {/* Job Description and Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">About the Job</h3>
        <p className="text-gray-700">{job.description}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Skills Required</h3>
        <ul className="list-disc list-inside text-gray-700 flex gap-4">
          {job.skills &&
            job.skills.map((skill, index) => (
              <li key={index} className="flex items-center"><FaDotCircle className="text-sm mr-2 text-gray-500" />{skill.label}</li>
            ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">Roles & Responsibilities</h3>
        <p>
          <div className="flex items-center ">

          <FaDotCircle className="text-sm mr-2 text-gray-500" />
          Collaborate with cross-functional teams to understand project
          requirements and translate them into technical specifications. 
          </div>
          <div className="flex items-center ">

          <FaDotCircle className="text-sm mr-2  text-gray-500"/>Developfront-end components using React.js and integrate them with back-end
          services built with Node.js and Express.js. 
          </div>
          <div className="flex items-center ">

          <FaDotCircle className="text-sm mr-2 text-gray-500"/>Design and implement
          RESTful APIs to facilitate communication between the front-end and
          back-end systems.
          </div>
          <div className="flex items-center ">

          <FaDotCircle className="text-sm mr-2 text-gray-500"/> Utilize MongoDB or other databases to store and
          retrieve data efficiently. 
          </div>
          <div className="flex items-center ">

          <FaDotCircle className="text-sm mr-2 text-gray-500"/>Implement AI and machine learning
          algorithms to enhance product functionality and user experience. 
          </div>
          <div className="flex items-center ">

          <FaDotCircle className="text-sm mr-2 text-gray-500"/>Write
          clean, maintainable, and well-documented code following best practices
          and coding standards.
          </div>
          <div className="flex items-center ">

          <FaDotCircle className="text-sm mr-2 text-gray-500"/> Perform code reviews, debugging, and
          troubleshooting to ensure the quality and reliability of the software.
          </div>
        </p>
      </div>
      <hr className="my-4" />

      {/* Salary Range and Posting Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z"
              clipRule="evenodd"
            />
          </svg>
          <p className="ml-2 text-sm text-gray-600">
            {formatSalaryRange(job.minPrice, job.maxPrice)}
          </p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">
            Posted: {formatDate(job.postingDate)}
          </p>
        </div>
      </div>

      <hr className="my-4" />

      {/* Location and Duration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z"
            />
          </svg>
          <p className="ml-2 text-sm text-gray-600">
            Location: {job.jobLocation}
          </p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z"
            />
          </svg>
          <p className="ml-2 text-sm text-gray-600">Duration: {job.duration}</p>
        </div>
      </div>

      <hr className="my-4" />

      {/* Posted Date and Expires Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">
            Posted by: {job.postedBy}
          </p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">
            Expires: {formatDate(job.expiresDate)}
          </p>
        </div>
      </div>

      <hr className="my-4" />

      {/* Number of Applicants */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Number of Applicants</h3>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">
            {job.applicantsCount}+ applicants
          </p>
        </div>
      </div>
    </div>
  );
}

export default Job_details;
