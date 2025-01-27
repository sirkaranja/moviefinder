// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the getAuth function

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5VxV08pI50lfPzv8H0v9PXJ_hUo0NgPg",
  authDomain: "movies-4b0d1.firebaseapp.com",
  projectId: "movies-4b0d1",
  storageBucket: "movies-4b0d1.firebasestorage.app",
  messagingSenderId: "789855615466",
  appId: "1:789855615466:web:e43d8eb84e88f262391a93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firebase Auth instance
const auth = getAuth(app);

// Export auth to use it in other files
export { auth };
