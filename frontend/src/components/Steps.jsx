import React from 'react';

// --- SVG Icon Components ---
const UserPlusIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <line x1="19" x2="19" y1="8" y2="14"></line>
    <line x1="22" x2="16" y1="11" y2="11"></line>
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
  </svg>
);

const SendIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="22" x2="11" y1="2" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);


// --- Main HowItWorks Component ---
 const Steps =  () => {
  const steps = [
    {
      icon: UserPlusIcon,
      title: 'Create an Account',
      description: 'Sign up for free and build your professional profile. Showcase your skills, experience, and what makes you unique.',
    },
    {
      icon: SearchIcon,
      title: 'Search for Jobs',
      description: 'Use our powerful search and filtering tools to browse through thousands of relevant job listings from top companies.',
    },
    {
      icon: SendIcon,
      title: 'Apply and Get Hired',
      description: 'Apply to your chosen jobs with a single click. Track your applications and connect with employers directly.',
    },
  ];

  return (
    <div className="bg-white font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Get Hired in 3 Easy Steps
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our platform is designed to make your job search as simple and efficient as possible. Follow these steps to get started.
          </p>
        </div>
        
        <div className="mt-20">
          <div className="relative">
            {/* Dotted line for desktop view */}
            <div 
              aria-hidden="true" 
              className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2"
            >
              <div className="w-full h-full bg-repeat-x bg-center" style={{backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {steps.map((step, index) => (
                <div key={index} className="bg-white text-center p-4">
                  <div className="flex justify-center items-center mb-6">
                    <div className="relative z-10 flex items-center justify-center bg-white border-2 border-indigo-500 rounded-full w-20 h-20">
                       <div className="flex items-center justify-center bg-indigo-500 rounded-full w-16 h-16">
                         <step.icon className="w-8 h-8 text-white" />
                       </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;