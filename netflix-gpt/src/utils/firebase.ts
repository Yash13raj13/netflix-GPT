// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjdiblF02FtNLiQLzXvLwvyBMluwdGpuc",
  authDomain: "netflixgpt-f3487.firebaseapp.com",
  projectId: "netflixgpt-f3487",
  storageBucket: "netflixgpt-f3487.firebasestorage.app",
  messagingSenderId: "813145214124",
  appId: "1:813145214124:web:a0a7cf7a55859659b8a309",
  measurementId: "G-J6ZMFGG85V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);