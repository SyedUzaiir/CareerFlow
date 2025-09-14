import React from 'react'
import TechStack from '../components/TechStack'
import AboutIntro from '../components/AboutIntro'
import AboutPlatform from '../components/AboutPlatform'
import AboutSearch from '../components/AboutSearch'



const About = () => {
  return (
    <div>
      <AboutIntro/>
      <AboutPlatform/>
      <TechStack/>
      <AboutSearch/>
    </div>
  )
}

export default About
