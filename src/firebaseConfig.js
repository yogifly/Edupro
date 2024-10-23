import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import Storage


// Your Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBoNoSe9hu5Ibn4wbWVfCJdOin5DAhQ4A8",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "edupro-614e5.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "edupro-614e5",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "edupro-614e5.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "701872008941",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:701872008941:web:0106d45c7670be1aa126e4"
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Optionally, initialize Firebase services (Auth, Firestore)
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
