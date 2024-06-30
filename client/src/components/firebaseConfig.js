import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log('User Info:', user);
    return user;
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
};
