import React from 'react'
import { assets, skills } from "../assets/assets";
import { useUser } from "@clerk/clerk-react";
import SkillCard from "./SkillCard.jsx";


const Intro = () => {
    const { user } = useUser();
  return (
    <div>
      <div
        className="h-[20rem] sm:h-[30rem] md:h-[42rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.intro})` }}
      >
        <div className="p-4 sm:px-8 md:px-20 py-35 rounded text-center max-w-2xl flex-col items-center justify-center">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-black mb-4 animate-pulse">
            Welcome {!user ? "to CareerFlow" : user.firstName}
          </h1>
          <h2 className="text-sm sm:text-lg md:text-2xl font-semibold text-black mb-2 animate-pulse">
            Your next job is just a click away
          </h2>
          <h2 className="text-sm sm:text-lg md:text-2xl text-black mb-1 animate-pulse">
            Find your dream job with just a click —
          </h2>
          <h2 className="text-sm sm:text-lg md:text-2xl text-black animate-pulse">
            explore opportunities tailored to your skills and aspirations.
          </h2>
        </div>
      </div>
      
    </div>
  )
}

export default Intro
