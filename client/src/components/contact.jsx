import React from "react";
import image from '../assets/contact-form.jpg'

const ContactUs = () => {
  return (
    <div className="w-[90%] max-w-[1000px] h-auto my-12 mx-auto grid grid-cols-1 md:grid-cols-2 p-8 rounded-2xl shadow-lg bg-gradient-to-r from-gray-200 to-blue-200 overflow-hidden">
      <div className="flex justify-center items-center">
        <img src={image} alt="contact-form" className="max-w-full h-auto rounded-2xl" />
      </div>
      <div className="flex flex-col justify-center p-5">
        <h2 className="mb-5 text-gray-800 font-sans font-extrabold text-2xl">Get in touch!</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="w-full p-4 rounded-lg border-2 border-gray-300 text-lg bg-white transition-all duration-300 outline-none focus:border-indigo-400 focus:shadow-md font-sans font-extrabold"
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg border-2 border-gray-300 text-lg bg-white transition-all duration-300 outline-none focus:border-indigo-400 focus:shadow-md font-sans font-extrabold"
            required
          />
          <textarea
            rows="8"
            id="message"
            placeholder="Message"
            className="w-full p-4 rounded-lg border-2 border-gray-300 text-lg bg-white transition-all duration-300 resize-none overflow-auto outline-none focus:border-indigo-400 focus:shadow-md font-sans font-extrabold"
            required
          />
          <button
            type="submit"
            className="mt-5 p-4 text-lg rounded-lg border-none cursor-pointer bg-indigo-500 text-white transition-colors duration-300 hover:bg-indigo-700 font-sans font-extrabold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
