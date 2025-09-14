import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 shadow py-4 bg-white/80 backdrop-blur z-50">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        
        <Link to="/" onClick={handleMenuClose} className="text-2xl flex font-bold  " >
          {/* <img src={assets.logo} width="90" alt="Logo" /> */}
          <p className=" = " >Career</p>
          <p className=" text-fuchsia-700 " >Flow</p>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link className="hover:bg-gray-200 px-4 py-2 rounded-full" to="/home">
            Home
          </Link>
          <Link className="hover:bg-gray-200 px-4 py-2 rounded-full" to="/about">
            About
          </Link>
          <Link className="hover:bg-gray-200 px-4 py-2 rounded-full" to="/contact">
            Contact
          </Link>
        </div>

        
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link
                className="hover:bg-gray-200 rounded-full px-4 py-2"
                to="/applications"
              >
                Applied Jobs
              </Link>
              <p>|</p>
              <p>Hi {user.firstName}</p>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <button className="text-gray-600 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-full">
                Recruiter Login
              </button>
              <button
                onClick={() => openSignIn()}
                className="bg-fuchsia-600  cursor-pointer text-white px-6 sm:px-9 py-2 rounded-full hover:bg-fuchsia-700 "
              >
                Login
              </button>
            </>
          )}
        </div>

        {/* Hamburger Menu Mobile */ }
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col items-center gap-4">
            {/* Mobile Links */}
            <Link
              className="hover:bg-gray-200 px-4 py-2 rounded-full w-full text-center"
              to="/"
              onClick={handleMenuClose}
            >
              Home
            </Link>
            <Link
              className="hover:bg-gray-200 px-4 py-2 rounded-full w-full text-center"
              to="/about"
              onClick={handleMenuClose}
            >
              About
            </Link>
            <Link
              className="hover:bg-gray-200 px-4 py-2 rounded-full w-full text-center"
              to="/contact"
              onClick={handleMenuClose}
            >
              Contact
            </Link>

            <hr className="w-full my-2" />

            {/* Mobile User/Auth Buttons */}
            {user ? (
              <div className="flex flex-col items-center gap-4 w-full">
                <Link
                  className="hover:bg-gray-200 rounded-full px-4 py-2 w-full text-center"
                  to="/applications"
                  onClick={handleMenuClose}
                >
                  Applied Jobs
                </Link>
                <div className="flex items-center gap-4">
                  <p>Hi {user.firstName}</p>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 w-full">
                <button className="text-gray-600 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-full w-full text-center">
                  Recruiter Login
                </button>
                <button
                  onClick={() => {
                    openSignIn();
                    handleMenuClose();
                  }}
                  className="bg-blue-600 cursor-pointer text-white px-9 py-2 rounded-full w-full hover:bg-blue-700"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;  
















