
import React from 'react'
import { Link } from 'react-router-dom';

const Registercard = () => {
    const Card = ({ title, buttonLabel }) => (
          <div className="bg-blue-500 text-white rounded-lg shadow-lg p-6 m-4 w-64">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
              {buttonLabel}
            </button>
          </div>
        );
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
           
          <div className="bg-blue-500 text-white rounded-lg shadow-lg p-6 m-4 w-64">
            <h2 className="text-2xl font-bold mb-4">Hirer</h2>
            <Link to='/hirerregister'><button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
              Job Hirer
            </button></Link>
          </div>

          <div className="bg-blue-500 text-white rounded-lg shadow-lg p-6 m-4 w-64">
            <h2 className="text-2xl font-bold mb-4">Seeker</h2>
            <Link to='/register'><button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
              Job Seeker
            </button></Link>
          </div>
    </div>
  )
}

export default Registercard
