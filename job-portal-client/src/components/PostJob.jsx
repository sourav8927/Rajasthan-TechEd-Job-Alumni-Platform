import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import CreatableSelect from "react-select/creatable";
import { ToastContainer, toast } from 'react-toastify';
import { BASE_URL } from "../store/Helper";

const PostJob = () => {
  const [selectedOption, setselectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // for navigate to another page
  const navigate= useNavigate();
  //for posting the job to database
  const fetchData= async(data)=>{
    const url = `${BASE_URL}/api/jobs/addJob`;
  const options = {
    method: 'POST',
    headers: {
      "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    if(result.acknowledged){
        navigate("/")
    }
    
    if(response.ok){
      console.log("Job posted Successfully");
      toast.success("Job posted Successfully");
    }
  } catch (error) {
    console.error(error);
  }
  }
  
  const onSubmit = (data) => {
     data.skills=selectedOption;
    // console.log(data);
    fetchData(data)

  };
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "NodeJs", label: "NodeJs" },
    { value: "Express js", label: "Express js" },
  ];

  console.log(watch("example"));
  return (
    <div className="  max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20 ">
      {/* form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg">
                Job Title
              </label>
              {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
                text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
              <input
                type="text"
                defaultValue={"Web Development"}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg">
                Company Name
              </label>
              {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
                text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
              <input
                type="text"
                placeholder="Ex: Microsoft"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg">
                Minimum Salary
              </label>
              {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
                text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
              <input
                type="text"
                placeholder="$20k"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg">
                Maximum Salary
              </label>
              {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
                text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
              <input
                type="text"
                placeholder="$120k"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg">
                Salary Type
              </label>
              {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
                text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg">
                Job Location
              </label>
              {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
                text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
              <input
                type="text"
                placeholder="Ex: New York"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg">
                Job Posting Date
              </label>
              {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
                text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
              <input
                type="date"
                placeholder="Ex: 2023-10-28"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg">
                Experience Level
              </label>
              {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
                text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value="">Select your Experience Level</option>
                <option value="NoExperience">No experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          <div>
            <label htmlFor="" className="block mb-2 text-lg">
              Required Skills:
            </label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setselectedOption}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg">
                Company Logo
              </label>
              {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
                text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
              <input
                type="url"
                placeholder="Paste the company logo URL"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg">
                Employment Type
              </label>
              {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
                text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value="">Select Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className="w-full">
          <label htmlFor="" className="block mb-2 text-lg">
              Job Description
              </label>
            <textarea  {...register("description")} className="w-full pl-3 py-1.5 focus:outline-none "
            rows={6}
            defaultValue={"This is the Job description , read the description properly after that apply for the job"}
            placeholder="Job Description"
            />
          </div>

          {/* 8th row */}
          <div className="w-full">
          <label htmlFor="" className="block mb-2 text-lg">
              Job Posted By
              </label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("postedBy")}
                className="create-job-input"
              />
          </div>
          <div className="">
          <input
            type="submit"
            className="block mt-12 bg-blue-700 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer  "
          />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
