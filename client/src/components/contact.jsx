import React from "react";
import backgroundImage from "../assets/background.jpg";
import contactBackground from "../assets/contact-bg.jpg";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center sm:flex-row sm:justify-center pb-3 md:pb-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-[90%] max-w-[1000px] h-auto my-12 mx-auto grid grid-cols-1 md:grid-cols-2 p-8 rounded-2xl shadow-lg bg-gradient-to-r from-gray-200 to-blue-200 overflow-hidden"
        style={{
          backgroundImage: `url(${contactBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center"></div>
        <div className="flex flex-col justify-center p-5">
          <h2 className="mb-5 text-gray-800 font-sans font-extrabold text-2xl">
            Get in touch!
          </h2>
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
    </div>
  );
};

export default ContactUs;
