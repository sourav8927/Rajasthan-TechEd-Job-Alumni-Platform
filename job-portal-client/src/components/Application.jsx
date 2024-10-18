import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Application = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="sm:p-5  md:p-32 rounded-lg shadow-md ">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-10 mt-28 text-blue-800">
          Apply for this job
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex gap-8 bg-gray-100 p-10  rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", { required: true })}
                className=" flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none "
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  First Name is required
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", { required: true })}
                className="flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none "
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  Last Name is required
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="employmentType"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Student/Employer
              </label>
              <select
                id="employmentType"
                {...register("employmentType", { required: true })}
                className="flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none "
              >
                <option value="">Select</option>
                <option value="Student">Student</option>
                <option value="Employer">Employer</option>
              </select>
              {errors.employmentType && (
                <p className="text-red-500 text-xs mt-1">
                  Employment Type is required
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Currently You working in
              </label>
              <input
                type="text"
                id="company"
                {...register("company")}
                className="flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none "
              />
            </div>
            <div>
              <label
                htmlFor="experience"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Experience (in year)
              </label>
              <input
                type="number"
                id="experience"
                {...register("experience", { required: true })}
                className="flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none "
              />
              {errors.experience && (
                <p className="text-red-500 text-xs mt-1">
                  Last Name is required
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className="flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none "
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.type === "required" && "Email is required"}
                  {errors.email.type === "pattern" &&
                    "Please enter a valid email"}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="jobRole"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Job Role
              </label>
              <input
                type="text"
                id="jobRole"
                {...register("jobRole", { required: true })}
                className="flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none "
              />
              {/* <select
                            id="jobRole"
                            {...register('jobRole', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Data Scientist">Data Scientist</option>
                            <option value="Project Manager">Project Manager</option>
                        </select> */}
              {errors.jobRole && (
                <p className="text-red-500 text-xs mt-1">
                  Job Role is required
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Address
              </label>
              <textarea
                id="address"
                {...register("address", { required: true })}
                className="flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none "
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">Address is required</p>
              )}
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                City Name
              </label>
              <input
                type="text"
                id="city"
                {...register("city", { required: true })}
                className="flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none "
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">City is required</p>
              )}
            </div>
            <div>
              <label
                htmlFor="pincode"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                PinCode
              </label>
              <input
                type="text"
                id="pincode"
                {...register("pincode", { required: true })}
                className="flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none "
              />
              {errors.pincode && (
                <p className="text-red-500 text-xs mt-1">PinCode is required</p>
              )}
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Date of birth
              </label>
              <input
                type="date"
                id="date"
                {...register("date", { required: true })}
                className="flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none "
              />
              {errors.date && (
                <p className="text-red-500 text-xs mt-1">Date is required</p>
              )}
            </div>
            <div>
              <label
                htmlFor="cv"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Upload Your CV
              </label>
              <input
                type="file"
                id="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none "
              />
              {selectedFile && (
                <p className="text-gray-600 text-sm mt-1">
                  {selectedFile.name}
                </p>
              )}
            </div>
          </div>
          <div>
            <div className="shadow-lg bg-red-50 border-gray-600 rounded-md p-8">
              <label
                htmlFor="cv"
                className="block text-gray-700 text-lg font-bold mb-2"
              >
                Write cover letter (Specify how can you best fit for this job
                Role)
              </label>
              <textarea className="h-[500px] flex items-center justify-center w-full p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100   focus:outline-none"></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-700 mt-10 mb-10 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none
                    focus:shadow-outline"
          >
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Application;
