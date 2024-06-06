import React from "react";
import { 
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-12 lg:px-20 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
          <div className="flex space-x-4 text-lg">           
            <a href="https://x.com/BamacharanCh/" className="text-white hover:text-gray-400 transition-colors duration-300"><FaXTwitter /></a>
            <a href="https://www.instagram.com/loving_coding" className="text-white hover:text-gray-400 transition-colors duration-300"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/bama-charan-chhandogi-b63420240/" className="text-white hover:text-gray-400 transition-colors duration-300"><FaLinkedinIn /></a>

          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-lg">
            <li><Link to="/" className="text-white hover:text-gray-400 transition-colors duration-300">Home</Link></li>
            <li><Link to="/FAQ" className="text-white hover:text-gray-400 transition-colors duration-300">FAQ</Link></li>
            <li><Link to="/prediction" className="text-white hover:text-gray-400 transition-colors duration-300">Prediction</Link></li>
            <li><Link to="/contact" className="text-white hover:text-gray-400 transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400 text-lg">
            123 Street Name, City Name, Country
          </p>
          <p className="text-gray-400 text-lg">contact@example.com</p>
          <p className="text-gray-400 text-lg">+123 456 7890</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-20">
        <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2024 Diabetes Prediction. All rights reserved.</p>
        </div>
        <div>
          <a
            href="https://www.github.com/BamaCharanChhandogi"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-center md:text-right"
          >
            <p>Developed by Bama Charan Chhandogi</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
