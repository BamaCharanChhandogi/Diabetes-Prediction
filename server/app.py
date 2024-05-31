import pickle as pkl
import os
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

script_dir = os.path.dirname(os.path.abspath(__file__))
scaler_path = os.path.join(script_dir, 'scaler.pkl')
scaler = pkl.load(open(scaler_path, 'rb'))

file_path = os.path.join(script_dir, 'nb.pkl')
with open(file_path, 'rb') as f:
    model = pkl.load(f)

# Configure logging
logging.basicConfig(level=logging.INFO, 
                    format='%(asctime)s %(levelname)s %(message)s',
                    handlers=[
                        logging.FileHandler("app.log"),
                        logging.StreamHandler()
                    ])

def generate_recommendations(Age, Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, Bmi, Dpf):
    recommendations = []

    if float(Glucose) > 140:
        recommendations.append({
            'metric': 'Glucose',
            'value': Glucose,
            'recommendation': 'Your glucose level is high. Reduce intake of sugary foods and beverages, and consider regular exercise to maintain a healthy glucose level.'
        })
    else:
        recommendations.append({
            'metric': 'Glucose',
            'value': Glucose,
            'recommendation': 'Your glucose level is normal. Maintain a balanced diet to keep it steady.'
        })
    
    if float(Bmi) > 25:
        recommendations.append({
            'metric': 'BMI',
            'value': Bmi,
            'recommendation': 'Your BMI indicates that you are overweight. Incorporate a mix of cardio and strength training exercises and follow a balanced diet to reduce weight.'
        })
    else:
        recommendations.append({
            'metric': 'BMI',
            'value': Bmi,
            'recommendation': 'Your BMI is in a healthy range. Continue maintaining a balanced diet and regular physical activity.'
        })
    
    if float(BloodPressure) > 130:
        recommendations.append({
            'metric': 'BloodPressure',
            'value': BloodPressure,
            'recommendation': 'Your blood pressure is high. Reduce salt intake, avoid alcohol, and engage in regular physical activity to manage blood pressure.'
        })
    else:
        recommendations.append({
            'metric': 'BloodPressure',
            'value': BloodPressure,
            'recommendation': 'Your blood pressure is normal. Continue to monitor it regularly and maintain a healthy lifestyle.'
        })

    if float(Insulin) > 100:
        recommendations.append({
            'metric': 'Insulin',
            'value': Insulin,
            'recommendation': 'Your insulin level is high. Follow a diet low in refined carbs and sugars and engage in regular physical activity.'
        })
    else:
        recommendations.append({
            'metric': 'Insulin',
            'value': Insulin,
            'recommendation': 'Your insulin level is normal. Maintain a healthy lifestyle to keep it stable.'
        })

    return recommendations

def predict(Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, Bmi, Dpf, Age):
    input_data = pd.DataFrame([[Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, Bmi, Dpf, Age]])
    input_data = scaler.transform(input_data)
    prediction = model.predict(input_data)[0]
    
    recommendations = generate_recommendations(Age, Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, Bmi, Dpf)
    
    if prediction == 1:
        result = {
            'prediction': "high",
            'message': "You have high chances of Diabetes! Please consult a Doctor",
            'gif_url': "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZlY2pwcDNtcnNhc2JwdDk4YnVqenRpcXl0OXFxdWRya3U0dmZ4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrebnKWmvx4ZBio/giphy.gif",
            'more_info_url': "https://www.diabetes.org/diabetes",
            'recommendations': recommendations
        }
    else:
        result = {
            'prediction': "low",
            'message': "You have low chances of Diabetes. Please maintain a healthy lifestyle",
            'gif_url': "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2txb242N3pkMmp0ODRiangydm9raDY5OHBhYmw1Y2NobjM0cGZtNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W1GG6RYUcWxoHl3jV9/giphy.gif",
            'more_info_url': "https://www.cdc.gov/chronicdisease/resources/infographic/prevent-diabetes.htm",
            'recommendations': recommendations
        }
    logging.info("Prediction Result: %s", result)
    print("Prediction Result:", result)  # Adding print statement for debugging
    return result

@app.route('/predict', methods=['POST'])
def predictions():
    if request.method == 'POST':
        data = request.get_json()
        Age = data.get('Age')
        Pregnancies = data.get('Pregnancies')
        Glucose = data.get('Glucose')
        BloodPressure = data.get('BloodPressure')
        Insulin = data.get('Insulin')
        Bmi = data.get('BMI')
        SkinThickness = data.get('SkinThickness')
        Dpf = data.get('DPF')
        
        result = predict(float(Pregnancies), float(Glucose), float(BloodPressure), float(SkinThickness), float(Insulin), float(Bmi), float(Dpf), float(Age))
        return jsonify(result)
    
    return "Invalid request method"

if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    app.run(host='0.0.0.0', port=8000, debug=True)
