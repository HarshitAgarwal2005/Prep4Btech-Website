// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbKj6Nm4DB2tWnICqPE_DoH80IIrUV3Lg",
  authDomain: "prep4btech-team.firebaseapp.com",
  projectId: "prep4btech-team",
  storageBucket: "prep4btech-team.firebasestorage.app",
  messagingSenderId: "610598527410",
  appId: "1:610598527410:web:d9646c2db5e5eeeed004ab",
  measurementId: "G-LYD3FNH7JW"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getFirestore(app);