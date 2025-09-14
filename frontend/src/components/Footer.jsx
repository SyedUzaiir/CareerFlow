import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const SocialIcon = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  );

  return (
    // No positioning classes like 'bottom-0' are needed here anymore.
    // 'w-full' is also not strictly necessary since it's a block-level element.
    <footer className="bg-gray-800 text-white font-sans">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Brand/Logo Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">CareerFlow</h2>

            <p className="text-sm text-gray-400 mt-1">
              Empowering developers with tools and resources to build better
              applications. <br />
              Connect with us and stay updated. Find your dream job today.
            </p>
            <br />
            <p>
              Here to support your journey—whether you're learning, building, or
              growing your career.
            </p>
            <br />
            <div className=" flex gap-10">
              <div className="flex space-x-6">
                <SocialIcon href="https://github.com/maraheem12">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/mohd-abdul-raheem/">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-col items-center mb-6 md:mb-0">
            <h6 className="font-bold ">Quick Links</h6>
            <Link
              to="/home"
              className="text-gray-300 hover:text-white px-4 py-2 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-4 py-2 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white px-4 py-2 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col md:flex-col items-center mb-6 md:mb-0">
            <h6 className="font-bold ">Services</h6>
            <Link
              to="/home"
              className="text-gray-300 hover:text-white px-4 py-2 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/home"
              className="text-gray-300 hover:text-white px-4 py-2 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/home"
              className="text-gray-300 hover:text-white px-4 py-2 transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>

          {/* Social Icons Section */}
        </div>

        <hr className="my-8 border-gray-600" />

        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} CareerFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
