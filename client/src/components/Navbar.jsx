import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 ">
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
              {/* Github Icon */}
              <a
                href="https://github.com/BamaCharanChhandogi/Diabetes-Prediction" // Add your GitHub URL
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium flex gap-2 items-center border-2 border-red-800">
                 <CiStar className="w-7 h-7 text-yellow-500 font-bold"/> <FaGithub className="h-7 w-7"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
