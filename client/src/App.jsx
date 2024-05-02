import React, { useState } from 'react';
import axios from 'axios';
import PredictionResult from './PredictionResult';

const App = () => {
  const [userInput, setUserInput] = useState({
    age: '',
    bmi: '',
    glucose: '',
  });
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', userInput);
      setPrediction(response.data.prediction);
      console.log(response.data.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={userInput.age}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* Add other input fields */}
        <div className="mb-4">
          <label htmlFor="bmi" className="block text-gray-700 font-bold mb-2">
            BMI
          </label>
          <input
            type="number"
            name="bmi"
            value={userInput.bmi}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="glucose" className="block text-gray-700 font-bold mb-2">
            Glucose
          </label>
          <input
            type="number"
            name="glucose"
            value={userInput.glucose}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Predict
          </button>
        </div>
      </form>
      {prediction !== null && <PredictionResult prediction={prediction} />}
    </div>
  );
}
export default App;