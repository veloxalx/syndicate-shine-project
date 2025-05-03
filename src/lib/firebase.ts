// lib/firebase.js - Firebase initialization for client-side

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration from your existing config
const firebaseConfig = {
    apiKey: "AIzaSyBW-vjE6_fa17-FMSf9_IJT4cna24vnTsw",
    authDomain: "syndicate-b6d7c.firebaseapp.com",
    projectId: "syndicate-b6d7c",
    storageBucket: "syndicate-b6d7c.firebasestorage.app",
    messagingSenderId: "605781472961",
    appId: "1:605781472961:web:cca9be2805dd8a75bb8640",
    measurementId: "G-8L9EXKLMWV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics conditionally (only in browser environment)
let analytics = null;
if (typeof window !== 'undefined') {
  // Check if analytics is supported in the current environment
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, analytics };