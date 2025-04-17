# 🧠 Parkinson's Disease Risk Assessment Tool

A web application that helps assess the risk of Parkinson's disease through voice parameter analysis, offering personalized insights and professional guidance.

---

## 📌 Overview

This tool uses clinically relevant voice metrics and a machine learning model to estimate the risk of Parkinson's Disease. It provides:

- ✅ A **multi-step form** for collecting user and voice data
- ✅ **Machine learning prediction** via a Flask backend
- ✅ A **doctor locator** with neurologists across India
- ✅ An **interactive dashboard** displaying the risk score visually

---

## 🛠 Technologies Used

### 💻 Frontend
- HTML5, CSS3, JavaScript
- Responsive layout using Flexbox & Grid

### 🧪 Backend
- Flask (Python) for API and prediction logic

### 📊 Data & Models
- Pre-trained machine learning model for Parkinson's risk prediction
- Doctor database stored in JSON format

---

## 🚀 Features

### 🧾 User-Friendly Multi-Step Form
- 4-step process with progress tracking
- Input validation and real-time feedback

### 🔬 Voice Parameter Analysis
Accepts multiple MDVP (Multi-Dimensional Voice Program) metrics:
- Jitter
- Shimmer
- HNR (Harmonics-to-Noise Ratio)
- RPDE (Recurrence Period Density Entropy)
- DFA (Detrended Fluctuation Analysis)
- PPE (Pitch Period Entropy)
- And more...

### 📈 Risk Prediction & Results
- Returns a percentage-based risk score
- Visualized using an interactive **risk meter**
- Offers recommendations and interpretation based on score

### 🩺 Doctor Locator
- Search for neurologists by **Indian state**
- View doctor profiles:
  - Name
  - Specialty
  - Hospital
  - Contact information

---

## 🔍 How It Works

### 1. User Input
- User provides personal details: age, gender, location
- Enters voice metrics (e.g., jitter, shimmer, etc.)

### 2. Prediction Request
- Frontend sends the data to the Flask API (`/predict`)
- Backend processes input using ML model and returns a risk score

### 3. Results Display
- Shows **Low** or **High** risk indication
- Provides doctor recommendations based on user's location

---

## 📝 Notes & Future Improvements

- ✔ For accurate results, voice parameters should be collected using clinical-grade tools
- ✔ Expand the doctor database with more cities and verified specialists
- ✔ Add user accounts for progress tracking and historical comparisons
- ✔ Include data export or PDF generation of results

---

## 🧪 Disclaimer

This tool is for **educational and informational purposes only**. It is **not a substitute for professional medical diagnosis or treatment**. Always consult a licensed medical practitioner for health concerns.

---

## 📬 Contributions

Feel free to contribute by:
- Adding more doctors or cities to the database
- Improving frontend UX or mobile responsiveness
- Enhancing the ML model with more features or better accuracy

---

## 🧠 Made with purpose to help raise awareness and support early detection of Parkinson’s disease.
