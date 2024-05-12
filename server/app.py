# app.py
import pickle as pkl
import os
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

script_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the absolute path to the file
scaler_path = os.path.join(script_dir, 'scaler.pkl')

# Load the scaler
scaler = pkl.load(open(scaler_path, 'rb'))
# Get the absolute path of the script's directory
script_dir = os.path.dirname(os.path.abspath(__file__))
# Load the pre-trained model
file_path = os.path.join(script_dir, 'nb.pkl')
with open(file_path, 'rb') as f:
    model = pkl.load(f)

@app.route('/predict', methods=['GET', 'POST'])
def predictions():
    ans = None
    if request.method == 'POST':
        data = request.get_json()  # Get the JSON data from the request

        Age = data.get('Age')
        Pregnancies = data.get('Pregnancies')
        Glucose = data.get('Glucose')
        BloodPressure = data.get('BloodPressure')
        Insulin = data.get('Insulin')
        Bmi = data.get('BMI')
        SkinThickness = data.get('SkinThickness')
        Dpf = data.get('DPF')

        def predict(Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, Bmi, Dpf, Age):
            input_data = pd.DataFrame([[Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, Bmi, Dpf, Age]])

            # Get the absolute path of the script's directory
            script_dir = os.path.dirname(os.path.abspath(__file__))

            # Construct the absolute path to the file
            scaler_path = os.path.join(script_dir, 'scaler.pkl')

            # Load the scaler
            scaler = pkl.load(open(scaler_path, 'rb'))

            input_data = scaler.transform(input_data)
            model_path = os.path.join(script_dir, 'nb.pkl')
            model = pkl.load(open(model_path, 'rb'))
            prediction = model.predict(input_data)
            if prediction == 1:
                return f"You have high chances of Diabetes! Please consult a Doctor"  # Person is Diabetic
            else:
                return "You have low chances of Diabetes. Please maintain a healthy life style"  # Person is Non-Diabetic

        ans = predict(Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, Bmi, Dpf, Age)
        return ans

    return "Invalid request method"
def predictions():
    ans = None
    if request.method == 'POST':
        Age = request.form.get('Age')
        Pregnancies = request.form.get('Pregnancies')
        Glucose = request.form.get('Glucose')
        BloodPressure = request.form.get('BloodPressure')
        Insulin = request.form.get('Insulin')
        Bmi = request.form.get('BMI')
        SkinThickness = request.form.get('SkinThickness')
        Dpf = request.form.get('DPF')
        
        def predict(Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, Bmi, Dpf, Age):
            input_data = pd.DataFrame([[Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, Bmi, Dpf, Age]])
            scaler = pkl.load(open('scaler.pkl', 'rb'))
            input_data = scaler.transform(input_data)
            model = pkl.load(open('nb.pkl', 'rb'))
            prediction = model.predict(input_data)
            if prediction == 1:
                return f"You have high chances of Diabetes! <br> Please consult a Doctor"  # Person is Diabetic
            else:
                return "You have low chances of Diabetes <br> Please maintain a healthy life style"  # Person is Non-Diabetic

        ans = predict(Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, Bmi, Dpf, Age)
        return redirect(url_for('detailed_predictions', ans = ans))

    return render_template('predictions.html', ans=ans)

if __name__ == '__main__':
    app.run(debug=True)