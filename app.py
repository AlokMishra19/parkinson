import numpy as np
import pickle
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS  # For handling Cross-Origin Resource Sharing

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the saved scaler, PCA transformer, and trained model
scaler = pickle.load(open("scaler.pkl", "rb"))
pca = pickle.load(open("pca_transform.pkl", "rb"))
model = pickle.load(open("parkinsons_model.pkl", "rb"))

# Feature names in the exact order expected by the model
FEATURE_NAMES = [
    'mdvp_fo', 'mdvp_fhi', 'mdvp_flo', 'jitter', 'jitter_abs',
    'jitter_rap', 'jitter_ppq5', 'jitter_ddp', 'shimmer', 'shimmer_db',
    'shimmer_apq3', 'shimmer_apq5', 'shimmer_apq11', 'shimmer_dda',
    'nhr', 'hnr', 'rpde', 'dfa', 'spread1', 'spread2', 'd2', 'ppe'
]


@app.route("/")
def home():
    return render_template("index.html")


@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get form data
        form_data = request.form

        # Create input array in the correct order using FEATURE_NAMES
        input_data = np.array([float(form_data[feature]) for feature in FEATURE_NAMES]).reshape(1, -1)

        # Standardize the input
        input_scaled = scaler.transform(input_data)

        # Apply PCA transformation
        input_pca = pca.transform(input_scaled)

        # Make prediction
        prediction = int(model.predict(input_pca)[0])  # 0 or 1

        # Try to get probabilities if available
        try:
            probability = float(model.predict_proba(input_pca)[0][1])
            risk_score = round(probability * 100, 2)
        except AttributeError:
            # Fallback if model doesn't support predict_proba
            probability = float(prediction)
            risk_score = prediction * 100

        return jsonify({
            'status': 'success',
            'prediction': prediction,
            'probability': probability,
            'risk_score': risk_score
        })

    except Exception as e:
        return jsonify({
            'status': 'error',
            'error': str(e)
        }), 500


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
    
