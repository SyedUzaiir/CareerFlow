import React from 'react'
import { Link } from 'react-router-dom';

const AboutSearch = () => {
  return (
    <div class="bg-gradient-to-b from-slate-50 to-white">
  <div class="max-w-5xl mx-auto px-10 py-20 text-center sm:px-8 lg:py-28">
    
    <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
      Advance Your Career with CareerFlow
    </h1>

    <p class="mt-6 max-w-2xl mx-auto text-lg text-slate-600 md:text-xl">
      Join CareerFlow, where innovative tools and expert guidance come together to help you unlock opportunities, sharpen your skills, and achieve your professional goals with ease.
    </p>
    
    <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      
      <Link to="#" class="inline-block w-full sm:w-auto rounded-lg bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Get Started
      </Link>

      <Link to="#" class="inline-block w-full sm:w-auto rounded-lg border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-800 shadow-sm transition-colors duration-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Explore Jobs
      </Link>

    </div>

  </div>
</div>
  )
}

export default AboutSearch
