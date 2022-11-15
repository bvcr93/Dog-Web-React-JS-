// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGpaiAspIo5YM6hZJoQV43W3QEN3-e7y0",
  authDomain: "dog-website-47464.firebaseapp.com",
  projectId: "dog-website-47464",
  storageBucket: "dog-website-47464.appspot.com",
  messagingSenderId: "460125074563",
  appId: "1:460125074563:web:beaf852a1829a1373217b6",
  measurementId: "G-CT9PZCQ9Q8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()