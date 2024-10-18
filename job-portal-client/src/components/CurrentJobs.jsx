import React, { useState, useEffect } from "react";
import Jobs from "./Jobs";
import RightSideBar from "./sidebars/RightSideBar";
import CurrentJobsCard from "./CurrentJobsCard";


const CurrentJobs = () => {
    const [selectedCatagory, setselectedCatagory] = useState(null);
  const [jobs, setjobs] = useState([]);
  const [query, setquery] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 1;

const fetchData= async()=>{
  const url = 'https://jsearch.p.rapidapi.com/search?query=Python developer in Texas, USA&page=1&num_pages=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '661f736b71msh871f9962ad42d4dp1ef5cajsnc81cfbfd4695',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

  const jobTitles = result.data.map(job => job.job_title); // Extract job titles
  // console.log(jobTitles)

  setjobs(result.data);
} catch (error) {
	console.error(error);
}
}

  useEffect(() => {
    setisLoading(true);
    fetchData();
    setisLoading(false);
  }, []);

  
  //filter jobs by title
  // const filteredItems = jobs.filter(
  //   (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // );

  const filteredItems = jobs.filter(
    (job) => job.job_title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );


  //Those are some unused function
  
  const handleInputChange = (event) => {
    setquery(event.target.value);
  };

  //Radio filtering
  const handleChange = (event) => {
    setselectedCatagory(event.target.value);
  };

  //button based filtering
  const handleClick = (event) => {
    setselectedCatagory(event.target.value);
  };

//unused function finished

  //calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };
  //fn for next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setcurrentPage(currentPage + 1);
    }
  };

  //fn for previous page
  const previousPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  //main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }

    //catagory filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          job_country,
          maxPrice,
          experienceLevel,
          salaryType,
          job_employment_type,
          job_posted_at_datetime_utc,
        }) =>
         job_country.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          job_offer_expiration_datetime_utc >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase()===selected.toLowerCase()||
         job_employment_type.toLowerCase() === selected.toLowerCase() 
      );
      console.log(filteredJobs);
    }
    //slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <CurrentJobsCard key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCatagory, query);
      
  return (
    <div className='mt-20 mb-0'>
      <div>
    
      <div className="bg-gradient-to-r from-[#62cff4] to-[#2c67f2] md:grid grid-cols-3 gap-8 lg:px-24 px-4 py-12">
    
        {/* job cards */}
        <div className="col-span-2  rounded-sm">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <p className="font-medium">Loading...</p>
              
            </>
          )}
          {/* pagination here */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={previousPage} className="hover:underline">
                Previous
              </button>
              <span>
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* right side  */}
        <div className="bg-white p-4 rounded"><RightSideBar/></div>
      </div>
    </div>
    </div>
  )
}

export default CurrentJobs
