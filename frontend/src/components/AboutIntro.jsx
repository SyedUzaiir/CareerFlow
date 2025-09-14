import React from 'react'
import { Link } from 'react-router-dom';

const AboutIntro = () => {
  return (
    <div className="bg-white w-full max-w-6xl mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20 rounded-xl sm:flex sm:justify-start sm:items-start">

      <div className="max-w-2xl space-y-8">
        
        {/* Main Heading */}
        <h1 className=" font-bold leading-tight md:text-7xl">
          Effortless Job Searchs
          & Career Growth
        </h1>
        
        {/* Subheading Paragraph */}
        <p className="max-w-lg text-lg text-slate-600 md:text-xl">
          A cutting-edge job portal that brings together top opportunities and advanced search tools, providing an exceptional experience for job seekers and employers alike.
        </p>
        
        {/* Call to Action Button */}
        <div>
          <Link
            to="#"
            className="inline-block rounded-lg bg-indigo-600 px-8 py-3 font-medium text-white shadow-md transition-colors duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Find Jobs
          </Link>
        </div>

      </div>
    </div>
  )
}

export default AboutIntro
