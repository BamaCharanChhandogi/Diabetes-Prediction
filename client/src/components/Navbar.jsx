import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import logo_final from "../assets/logo_final.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const logoStyle = {
    height: "60px",
    width: "60px",
    borderRadius: "50%",
    marginRight: "10px",
  };

  return (
    <nav className="bg-gray-800 sticky z-50 top-0" style={{ height: "5rem" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold flex items-center">
              <img src={logo_final} alt="Logo" style={logoStyle} />
              <span className="ml-2">PreDiaBet</span>
            </Link>
          </div>
          <div className="hidden 850px:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/data-info" onClick={closeMenu}>
                Data Info
              </NavLink>
              <NavLink to="/prediction" onClick={closeMenu}>
                Prediction
              </NavLink>
              <NavLink to="/visualization" onClick={closeMenu}>
                Visualization
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact Us
              </NavLink>
              <NavLink to="/FAQ" onClick={closeMenu}>
                FAQ
              </NavLink>
              <a
                href="https://github.com/BamaCharanChhandogi/Diabetes-Prediction"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                onClick={closeMenu}
              >
                <CiStar className="w-7 h-7 text-yellow-500 font-bold mr-2" />
                <FaGithub className="h-7 w-7" />
              </a>
            </div>
          </div>
          <div className="-mr-2 flex 850px:hidden">
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
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 bg-opacity-90 z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out 850px:hidden`}
      >
        <div className="px-4 pt-5 pb-3 space-y-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white font-bold flex items-center" onClick={closeMenu}>
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <FaTimes className="block h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/data-info" onClick={closeMenu}>
              Data Info
            </NavLink>
            <NavLink to="/prediction" onClick={closeMenu}>
              Prediction
            </NavLink>
            <NavLink to="/visualization" onClick={closeMenu}>
              Visualization
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact Us
            </NavLink>
            <NavLink to="/FAQ" onClick={closeMenu}>
              FAQ
            </NavLink>
            <a
              href="https://github.com/BamaCharanChhandogi/Diabetes-Prediction"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              <CiStar className="w-5 h-5 text-yellow-500 font-bold mr-2" />
              <FaGithub className="h-5 w-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Custom NavLink component for internal links
const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </Link>
);

export default Navbar;
