import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 sticky z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold">
              Diabetes Prediction App
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Home
              </Link>
              <Link
                to="/data-info"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Data Info
              </Link>
              <Link
                to="/prediction"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Prediction
              </Link>
              <Link
                to="/visualization"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Visualization
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Contact Us
              </Link>
              <Link
                to="/FAQ"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                FAQ
              </Link>
              <a
                href="https://github.com/BamaCharanChhandogi/Diabetes-Prediction"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium flex gap-2 items-center border-2 border-red-800"
              >
                <CiStar className="w-7 h-7 text-yellow-500 font-bold" />
                <FaGithub className="h-7 w-7" />
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/data-info"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Data Info
          </Link>
          <Link
            to="/prediction"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Prediction
          </Link>
          <Link
            to="/visualization"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Visualization
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
          <Link
            to="/FAQ"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            FAQ
          </Link>
          <a
            href="https://github.com/BamaCharanChhandogi/Diabetes-Prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex gap-2 items-center"
            onClick={closeMenu}
          >
            <CiStar className="w-5 h-5 text-yellow-500 font-bold" />
            <FaGithub className="h-5 w-5" />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
