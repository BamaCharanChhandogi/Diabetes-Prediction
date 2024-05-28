import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400 transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-gray-400 transition-colors duration-300"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-gray-400 transition-colors duration-300"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-gray-400 transition-colors duration-300"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="mb-8 md:mb-0 md:w-1/3 md:flex md:flex-col md:items-center">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:text-gray-400 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="text-white hover:text-gray-400 transition-colors duration-300">About</a></li>
            <li><a href="#" className="text-white hover:text-gray-400 transition-colors duration-300">Prediction</a></li>
            <li><a href="#" className="text-white hover:text-gray-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400">123 Street Name, City Name, Country</p>
          <p className="text-gray-400">contact@example.com</p>
          <p className="text-gray-400">+123 456 7890</p>
        </div>
      </div>
      <div className='border-t border-gray-800 mt-5 py-3'>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-center mb-4 md:mb-0">&copy; 2024 Diabetes Prediction. All rights reserved.</p>
          <a href="https://www.github.com/BamaCharanChhandogi" className="text-center text-white hover:text-gray-400 transition-colors duration-300">
            Bama Charan Chhandogi
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
