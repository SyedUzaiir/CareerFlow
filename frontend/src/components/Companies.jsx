import React from 'react'
import { assets } from '../assets/assets';

const Companies = () => {
const companies = [
  { name: 'Accenture', src: assets.accenture_logo },
  { name: 'Adobe', src: assets.adope_logo },
  { name: 'Amazon', src: assets.amazon_logo },
  { name: 'Meta', src: assets.meta_logo },
  { name: 'Microsoft', src: assets.microsoft_logo },
  { name: 'Netflix', src: assets.netflix_logo },
  { name: 'Salesforce', src: assets.salesforce_logo },
  { name: 'Spotify', src: assets.spotify_logo },
  { name: 'Tesla', src: assets.tesla_logo },
  { name: 'Google', src: assets.google_logo },
  { name: 'IBM', src: assets.ibm_logo },
  { name: 'Intel', src: assets.intel_logo },
];
    
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by over 30+ leading companies and startups
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We partner with innovative businesses to bring you the best career opportunities.
          </p>
        </div>
        
        {/* Scrolling Marquee Container */}
        <div className="mt-16 relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          {/* The `group` class is used to pause animation on hover */}
          <div className="group flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {/* We render the logos twice for a seamless loop */}
            {companies.map((company, index) => (
              <div key={`company-a-${index}`} className="mx-8 flex-shrink-0">
                <img
                  className="h-12 w-auto object-contain transition-all duration-300 filter opacity-75 hover:opacity-100"
                  src={company.src}
                  alt={company.name}
                />
              </div>
            ))}
            {/* Duplicate set of logos for seamless scroll */}
             {companies.map((company, index) => (
              <div key={`company-b-${index}`} className="mx-8 flex-shrink-0">
                <img
                  className="h-12 w-auto object-contain transition-all duration-300 filter grayscale hover:grayscale-0 opacity-75 hover:opacity-100"
                  src={company.src}
                  alt={company.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Companies
