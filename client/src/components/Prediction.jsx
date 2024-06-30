import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Prediction = () => {
  const [userInput, setUserInput] = useState({
    Age: "",
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    Insulin: "",
    BMI: "",
    SkinThickness: "",
    DPF: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    try {
      const response = await axios.post(
        "https://diabetes-prediction-1-6a5i.onrender.com/predict",
        userInput
      );
      console.log("API Response:", response.data);
      setPrediction(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    setButtonDisabled(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-600 flex flex-col items-center justify-center sm:flex-row sm:justify-center pb-3 md:pb-0">
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
        className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 sm:p-6 md:p-8 w-full sm:w-auto sm:order-1"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">
          Enter all details
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="mb-4">
                <label
                  htmlFor="Age"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Age
                </label>
                <input
                  type="number"
                  name="Age"
                  value={userInput.Age}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Pregnancies"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Pregnancies
                </label>
                <input
                  type="number"
                  name="Pregnancies"
                  value={userInput.Pregnancies}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Glucose"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Glucose
                </label>
                <input
                  type="number"
                  name="Glucose"
                  value={userInput.Glucose}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="BloodPressure"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Blood Pressure
                </label>
                <input
                  type="number"
                  name="BloodPressure"
                  value={userInput.BloodPressure}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label
                  htmlFor="Insulin"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Insulin
                </label>
                <input
                  type="number"
                  name="Insulin"
                  value={userInput.Insulin}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="BMI"
                  className="block text-gray-700 font-bold mb-2"
                >
                  BMI
                </label>
                <input
                  type="number"
                  name="BMI"
                  value={userInput.BMI}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="SkinThickness"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Skin Thickness
                </label>
                <input
                  type="number"
                  name="SkinThickness"
                  value={userInput.SkinThickness}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="DPF"
                  className="block text-gray-700 font-bold mb-2"
                >
                  DPF
                </label>
                <input
                  type="number"
                  name="DPF"
                  value={userInput.DPF}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ${
                buttonDisabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-purple-500 hover:bg-purple-700 text-white font-bold"
              }`}
              disabled={buttonDisabled}
            >
              Predict
            </button>
          </div>
        </form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
        className="w-full sm:w-1/2 sm:ml-8 mt-8 sm:mt-0 sm:order-2 flex justify-center"
      >
        {!prediction && (
          <div className="hidden sm:block">
            <img
              src="https://media.giphy.com/media/4Zd5CCT47enl32Sx3P/giphy.gif"
              alt="Loading"
              className="mx-auto rounded"
            />
          </div>
        )}
        {prediction && (
          
          <div className="bg-green-100 w-full w-2/3 md:w-fit border mx-auto flex flex-col gap-5 border-green-400  py-2 rounded md:mr-4 text-center">
            <img
              src={prediction.gif_url || ""}
              alt="Prediction GIF"
              className="mx-auto pt-4 rounded-md"
            />
            <h3 className="font-bold text-2xl text-black-800">
              {prediction.message || "No message"}
            </h3>
            <div className="px-6 mx-4 text-left  text-green-800">
              {prediction.recommendations && Array.isArray(prediction.recommendations) && prediction.recommendations.map((rec, index) => (
                <p key={index} className="text-lg font-medium mb-2">
                  • {rec.recommendation}
                </p>
              ))}
            </div>
            <a href={prediction.more_info_url} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                Click here for more information
              </button>
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Prediction;
