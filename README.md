Parkinson's Disease Risk Assessment Tool 📌 Overview This web application helps assess the risk of Parkinson's disease by analyzing voice parameters. It includes: ✅ Multi-step form for collecting user data and voice metrics ✅ Machine learning prediction (via Flask backend) ✅ Doctor database with neurologists across India ✅ Interactive results dashboard with risk score visualization

🛠 Technologies Used Frontend:

HTML5, CSS3, JavaScript

Responsive design with Flexbox/Grid

Backend:

Flask (Python) for prediction API

Data:

Pre-trained ML model for Parkinson's risk assessment

JSON-based doctor database

🚀 Features User-Friendly Form

4-step process with progress tracking

Input validation & real-time feedback

Voice Parameter Analysis

Accepts MDVP (Multi-Dimensional Voice Program) metrics:

Jitter, Shimmer, HNR, RPDE, DFA, PPE, etc.

Risk Prediction & Results

Returns a percentage-based risk score

Visualized using an interactive risk meter

Provides actionable recommendations

Doctor Locator

Search neurologists by Indian state

Displays doctor profiles (name, specialty, hospital, contact)

🔍 How It Works User Input

Enters personal details (age, gender, location).

Provides voice measurement values (jitter, shimmer, etc.).

Prediction Request

Frontend sends data to Flask (/predict).

Backend processes input & returns risk score.

Results Display

Low/High risk indication.

Doctor recommendations based on location.

📝 Notes & Improvements ✔ For better accuracy, ensure voice parameters are collected professionally. ✔ Expand doctor database with more cities/specialists. ✔ Add user accounts to track risk over time.
