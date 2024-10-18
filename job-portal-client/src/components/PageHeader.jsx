import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = ({title, path}) => {
  return (
    <div className='py-24 mt-3 bg-[#FAFAFA] rounded  items-center justify-center'>
      <div className='text-3xl text-blue-500 font-medium mb-1 text-center sm:p-4 '>{title}</div>
      <p className='text-sm text-center'><Link to="/">Home</Link> / {path}</p>
    </div>
  )
}

export default PageHeader
