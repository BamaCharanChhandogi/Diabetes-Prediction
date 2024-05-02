import React from 'react';

const PredictionResult = ({ prediction }) => {
  const resultText = prediction ? 'Diabetic' : 'Non-diabetic';
  const resultColor = prediction ? 'bg-red-500' : 'bg-green-500';

  return (
    <div className={`text-white text-center p-4 rounded ${resultColor}`}>
      <p>Prediction: {resultText}</p>
    </div>
  );
};
export default PredictionResult;