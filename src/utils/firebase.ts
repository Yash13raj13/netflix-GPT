import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Paste your key directly here as a string
  apiKey: "070d0e56d10d8d30a7aafc0fc23c8c88", 
  authDomain: "netflixgpt-f3487.firebaseapp.com",
  projectId: "netflixgpt-f3487",
  storageBucket: "netflixgpt-f3487.firebasestorage.app",
  messagingSenderId: "1056502284168",
  appId: "1:1056502284168:web:7f6f1c76c9d0607d73f915"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);