import React from 'react';

// --- SVG Icon Components ---
// To keep everything in one file, we define simple SVG components for icons.
const BriefcaseIcon = ({ className }) => (
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
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const MousePointerClickIcon = ({ className }) => (
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
    <path d="m9 9 5 12 1.8-5.2L21 14Z"></path>
    <path d="M3 3v7a2 2 0 0 0 2 2h4"></path>
    <path d="M12.5 15.5 11 14"></path>
  </svg>
);

const BuildingIcon = ({ className }) => (
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
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
    <path d="M9 22v-4h6v4"></path>
    <path d="M8 6h.01"></path>
    <path d="M16 6h.01"></path>
    <path d="M12 6h.01"></path>
    <path d="M12 10h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M16 10h.01"></path>
    <path d="M16 14h.01"></path>
    <path d="M8 10h.01"></path>
    <path d="M8 14h.01"></path>
  </svg>
);

const BookOpenIcon = ({ className }) => (
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
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const BellIcon = ({ className }) => (
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
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
  </svg>
);

const UsersIcon = ({ className }) => (
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
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);


// --- Main Advantages Component ---
const Advantages = ()  => {
  const advantages = [
    {
      icon: BriefcaseIcon,
      title: 'Vast Job Directory',
      description: 'Explore thousands of job openings across all industries and experience levels to find your perfect fit.',
    },
    {
      icon: MousePointerClickIcon,
      title: 'One-Click Apply',
      description: 'Our streamlined application process allows you to apply for jobs quickly and easily with just a single click.',
    },
    {
      icon: BuildingIcon,
      title: 'Connect with Top Employers',
      description: 'Get discovered by industry-leading companies and startups actively looking for talented candidates like you.',
    },
    {
      icon: BookOpenIcon,
      title: 'Career Growth Resources',
      description: 'Access expert advice, resume-building tools, and interview tips to help you advance in your career.',
    },
    {
      icon: BellIcon,
      title: 'Personalized Job Alerts',
      description: 'Create custom alerts and never miss an opportunity. Get the latest job postings delivered straight to your inbox.',
    },
    {
      icon: UsersIcon,
      title: 'Build Your Network',
      description: 'Connect with professionals in your field, join industry discussions, and build valuable connections.',
    },
  ];

  return (
    <div className="bg-slate-50 font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Everything You Need to Land Your Dream Job
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We're more than just a job board. We provide the tools, insights, and connections to empower your entire career journey.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col items-start"
            >
              <div className="bg-indigo-100 p-3 rounded-xl mb-4">
                <advantage.icon className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
              <p className="mt-2 text-base text-gray-500">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Advantages;  
