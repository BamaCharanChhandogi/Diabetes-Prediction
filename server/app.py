# app.py
import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Load the pre-trained model
with open('diabetes_model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    # Get user input from the request
    user_input = request.get_json()

    # Extract the feature values from the user input
    features = [user_input.get('age', 0),
                user_input.get('bmi', 0),
                user_input.get('glucose', 0)]

    # Convert the features to a numpy array
    feature_array = np.array(features).reshape(1, -1)

    # Make a prediction using the loaded model
    prediction = model.predict(feature_array)

    # Return the prediction result as a JSON response
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)