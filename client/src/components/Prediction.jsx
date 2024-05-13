import React, { useState } from 'react';
import axios from 'axios';

const Prediction = () => {
  const [userInput, setUserInput] = useState({
    Age: '',
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    Insulin: '',
    BMI: '',
    SkinThickness: '',
    DPF: '',
  });
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', userInput);
      setPrediction(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 ">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">Enter all details</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mb-4">
                <label htmlFor="Age" className="block text-gray-700 font-bold mb-2">
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
                <label htmlFor="Pregnancies" className="block text-gray-700 font-bold mb-2">
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
                <label htmlFor="Glucose" className="block text-gray-700 font-bold mb-2">
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
                <label htmlFor="BloodPressure" className="block text-gray-700 font-bold mb-2">
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
                <label htmlFor="Insulin" className="block text-gray-700 font-bold mb-2">
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
                <label htmlFor="BMI" className="block text-gray-700 font-bold mb-2">
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
                <label htmlFor="SkinThickness" className="block text-gray-700 font-bold mb-2">
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
                <label htmlFor="DPF" className="block text-gray-700 font-bold mb-2">
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
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            >
              Predict
            </button>
          </div>
        </form>
        {/* {prediction && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-6">
            <p>{prediction}</p>
          </div>
        )} */}
      </div>
      <div className="w-1/2 border-l border-gray-300">
          {!prediction && <img src={"https://media.giphy.com/media/4Zd5CCT47enl32Sx3P/giphy.gif"} alt="Loading" className="mx-auto rounded" />}
          {prediction && (
      <div className="bg-green-100 border flex flex-col gap-5 border-green-400 text-green-700 py-3 rounded mr-4 text-center">
        <img src={prediction.gif_url} alt="Prediction GIF" className="mx-auto pt-4 rounded-md" />
        <p className='font-bold pb-3'>{prediction.prediction}</p>
      </div>
    )}
        </div>
    </div>
  );
};

export default Prediction;