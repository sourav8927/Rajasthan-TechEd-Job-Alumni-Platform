import React, { useState,useEffect } from 'react'
import PageHeader from './PageHeader'
import { FiSearch } from 'react-icons/fi'


const SalaryPage = () => {
  const [searchText, setsearchText] = useState("")
  const [salary, setSalary] = useState([])
  
  const fetchData = async () => {
    let data = await fetch("salary.json");
    let response = await data.json();
    setSalary(response);
  };

  useEffect(() => {
    fetchData();
  }, [searchText]);

  const handleSearch=()=>{
    const filter= salary.filter(
      (job)=>job.title.toLowerCase().indexOf(searchText.toLowerCase())!==-1
    )
    console.log(filter)
    setSalary(filter)
  }
  console.log(searchText)
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-[#d4dfed] mt-20'>
      <PageHeader title={"Estimate Salary"} path={"Salary"}/>

      <div className='mt-5 '>
        <div className='search-box p-2 text-center mb-2'>
            <input type="text" name='seacrh' id='search' placeholder="Search any Domain to know the salary ! " className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' onChange={(e)=>{setsearchText(e.target.value)}}/>
          
            <button onClick={handleSearch} className='bg-blue-500 text-white font-semibold px-8 py-2 rounded-sm mb-4'>Search</button>
        </div>
      </div>

      {/* salary display Card */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center justify-center'>
        {
          salary.map((data)=>(
            <div key={data.id} className='shadow px-4 py-8 bg-white rounded-lg'>
              <h4 className='font-semibold text-xl'>{data.title}</h4>
              <p className='my-2 font-medium text-blue-500 text-lg'>{data.salary}</p>
              <div className='flex flex-wrap gap-4'>
                <a href="/" className='underline'>{data.status}</a>
                <a href="/" className='underline'>{data.skills}</a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SalaryPage
