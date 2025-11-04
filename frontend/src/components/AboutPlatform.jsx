

import React, { useState } from 'react';

// SVG Icons for Check and Cross
const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const CrossIcon = () => (
  <svg className="w-6 h-6 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

const PartialIcon = () => (
    <svg className="w-6 h-6 text-yellow-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);


// The main comparison data
const comparisonData = [
//   {
//     feature: 'AI-Powered Resume & Cover Letter Builder',
//     CareerFlow: { supported: true, text: 'Advanced AI suggestions' },
//     LinkedIn: { supported: false, text: 'Not available' },
//     Internshala: { supported: false, text: 'Not available' },
//     Indeed: { supported: 'partial', text: 'Basic resume builder' },
//     Naukri: { supported: 'partial', text: 'Basic resume builder' },
//   },
//   {
//     feature: 'AI Mock Interviews with Instant Feedback',
//     CareerFlow: { supported: true, text: 'Personalized feedback' },
//     LinkedIn: { supported: false, text: 'Not available' },
//     Internshala: { supported: false, text: 'Not available' },
//     Indeed: { supported: false, text: 'Not available' },
//     Naukri: { supported: false, text: 'Not available' },
//   },
  {
    feature: 'Personalized Career Path Suggestions',
    CareerFlow: { supported: true, text: 'Based on skills & interests' },
    LinkedIn: { supported: 'partial', text: 'Limited suggestions' },
    Internshala: { supported: false, text: 'Not available' },
    Indeed: { supported: false, text: 'Not available' },
    Naukri: { supported: false, text: 'Not available' },
  },
  {
    feature: 'Direct Chat with Hiring Managers',
    CareerFlow: { supported: true, text: 'Instant communication' },
    LinkedIn: { supported: 'partial', text: 'Premium/InMail required' },
    Internshala: { supported: false, text: 'Not available' },
    Indeed: { supported: 'partial', text: 'Limited messaging' },
    Naukri: { supported: 'partial', text: 'Limited messaging' },
  },
  {
    feature: 'Transparent Company Culture Insights',
    CareerFlow: { supported: true, text: 'Verified employee reviews' },
    LinkedIn: { supported: 'partial', text: 'Basic company pages' },
    Internshala: { supported: false, text: 'Not available' },
    Indeed: { supported: true, text: 'User-submitted reviews' },
    Naukri: { supported: true, text: 'User-submitted reviews' },
  },
  {
    feature: 'Zero Cost for All Core Features',
    CareerFlow: { supported: true, text: 'Completely free for job seekers' },
    LinkedIn: { supported: false, text: 'Premium subscription needed for many features' },
    Internshala: { supported: true, text: 'Free for students' },
    Indeed: { supported: true, text: 'Largely free' },
    Naukri: { supported: false, text: 'Paid services for visibility' },
  },
  {
    feature: 'Real-time Application Tracking',
    CareerFlow: { supported: true, text: 'Live status updates' },
    LinkedIn: { supported: false, text: 'Depends on recruiter action' },
    Internshala: { supported: true, text: 'Good tracking for internships' },
    Indeed: { supported: 'partial', text: 'Varies by employer' },
    Naukri: { supported: 'partial', text: 'Varies by employer' },
  },
];

const platformLogos = {
    CareerFlow: 'https://placehold.co/150x40/000000/FFFFFF?text=CareerFlow&font=inter',
    LinkedIn: 'https://placehold.co/150x40/0A66C2/FFFFFF?text=LinkedIn&font=inter',
    Internshala: 'https://placehold.co/150x40/1295D8/FFFFFF?text=Internshala&font=inter',
    Indeed: 'https://placehold.co/150x40/003A9B/FFFFFF?text=Indeed&font=inter',
    Naukri: 'https://placehold.co/150x40/F79521/FFFFFF?text=Naukri.com&font=inter',
};

const CompetitorCell = ({ platform }) => (
    <div className="p-4 text-center">
      <img src={platformLogos[platform]} alt={`${platform} logo`} className="h-8 mx-auto mb-2 object-contain" />
    </div>
);


const FeatureCell = ({ data, platform }) => {
    const status = data[platform];
    return (
        <div className="p-4 text-center group relative">
            {status.supported === true && <CheckIcon />}
            {status.supported === false && <CrossIcon />}
            {status.supported === 'partial' && <PartialIcon />}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-gray-800 text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg pointer-events-none">
                {status.text}
                 <svg className="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
            </div>
        </div>
    );
};


const AboutPlatform = ()=> {
  const platforms = ['CareerFlow', 'LinkedIn', 'Internshala', 'Indeed', 'Naukri'];
  const [featuredPlatform, setFeaturedPlatform] = useState('CareerFlow');

  return (
    <div className="bg-gray-50 min-h-screen font-inter p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">US VS. THEM</h1>
          <p className="text-lg text-gray-500 mt-2">Compare top job platforms to find your perfect match.</p>
          <div className="mt-6 flex justify-center items-center">
            <label htmlFor="featured-platform" className="text-sm font-medium text-gray-700 mr-3">Featured Platform:</label>
            <select
              id="featured-platform"
              value={featuredPlatform}
              onChange={(e) => setFeaturedPlatform(e.target.value)}
              className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
            >
              {platforms.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </header>

        <main className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-full align-middle">
              {/* Table Header */}
              <div className="grid grid-cols-6 bg-gray-100">
                <div className="p-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider sticky left-0 bg-gray-100 z-10 col-span-2 sm:col-span-1">Feature</div>
                {platforms.map((platform) => (
                   <div key={platform} className={`p-4 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider ${platform === featuredPlatform ? 'bg-indigo-100' : ''}`}>
                       <img src={platformLogos[platform]} alt={`${platform} logo`} className="h-6 mx-auto object-contain" />
                   </div>
                ))}
              </div>

              {/* Table Body */}
              <div>
                {comparisonData.map((item, index) => (
                  <div key={item.feature} className={`grid grid-cols-6 items-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="p-4 text-sm font-medium text-gray-800 sticky left-0 z-10 col-span-2 sm:col-span-1" style={{ background: index % 2 === 0 ? '#fff' : '#f9fafb' }}>{item.feature}</div>
                    {platforms.map((platform) => (
                        <div key={platform} className={`p-4 text-center ${platform === featuredPlatform ? 'bg-indigo-50' : ''}`}>
                            <FeatureCell data={item} platform={platform} />
                        </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        
        <footer className="text-center mt-8">
            <p className="text-xs text-gray-400">Data based on standard features available as of September 2025. Feature sets of competitor platforms may change.</p>
        </footer>

      </div>
    </div>
  );
}

export default AboutPlatform;
