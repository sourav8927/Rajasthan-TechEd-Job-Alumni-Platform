import React from 'react'

const Jobs = ({result}) => {
  return (
    <div>
      <div className='text-lg font-bold mb-2'>
        <h3>{result.length} Jobs</h3>
      </div>
      <section>{result}</section>
    </div>
  )
}

export default Jobs
