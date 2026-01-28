// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUJeEC-9NbXHBbO2Gh8B9egzq2FwGl2j0",
  authDomain: "netflix-gpt-df1ff.firebaseapp.com",
  projectId: "netflix-gpt-df1ff",
  storageBucket: "netflix-gpt-df1ff.firebasestorage.app",
  messagingSenderId: "886290196820",
  appId: "1:886290196820:web:a7f016299c3a8a511e80c1",
  measurementId: "G-115Q1T16CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


export const auth = getAuth(app);