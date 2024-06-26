// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCRjGdGYouoYopbNeux5OhThWXQljPflI",
  authDomain: "diabetics-prediction-app.firebaseapp.com",
  projectId: "diabetics-prediction-app",
  storageBucket: "diabetics-prediction-app.appspot.com",
  messagingSenderId: "461288539169",
  appId: "1:461288539169:web:6b7542ddf931e9538ecf60",
  measurementId: "G-WQL0STDBLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);