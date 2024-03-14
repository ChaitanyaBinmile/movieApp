// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCarcTkor1Uyf14QWbvMUul-dP5AFGdQwk",
  authDomain: "movieapp-5303d.firebaseapp.com",
  projectId: "movieapp-5303d",
  storageBucket: "movieapp-5303d.appspot.com",
  messagingSenderId: "784705111887",
  appId: "1:784705111887:web:40d42c036717a5e0ebe73a",
  measurementId: "G-XJYF99MBJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
