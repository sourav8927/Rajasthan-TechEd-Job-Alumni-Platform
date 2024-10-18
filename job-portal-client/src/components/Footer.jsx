import React from 'react'

const Footer = () => {
  return (
    <footer className=" bottom-0 w-full bg-blue-500 text-white p-4 flex flex-col justify-center items-center sm:flex-row sm:justify-between">
    <div className="text-center sm:text-left">
      <h1 className="text-xl font-bold">Job finder</h1>
      <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved @Sourav karmakar.</p>
    </div>
    <nav className="mt-4 sm:mt-0 flex space-x-4">
      <a href="#" className="hover:underline">Home</a>
      <a href="#" className="hover:underline">About</a>
      <a href="#" className="hover:underline">Contact</a>
    </nav>
  </footer>
  )
}

export default Footer
