// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY13BXVAEy7lqvZ-Tx2mLjAa6QhoT01hY",
  authDomain: "fir-otp-32e00.firebaseapp.com",
  projectId: "fir-otp-32e00",
  storageBucket: "fir-otp-32e00.appspot.com",
  messagingSenderId: "274985167494",
  appId: "1:274985167494:web:0dfff9b31ada68f1a6bf07",
  measurementId: "G-9VP01NDSXJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
