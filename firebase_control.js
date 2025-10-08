// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlhdSJEXszG8bODsWlXnRKTo4go80bRNc",
  authDomain: "ecommerce-e4c3a.firebaseapp.com",
  projectId: "ecommerce-e4c3a",
  storageBucket: "ecommerce-e4c3a.firebasestorage.app",
  messagingSenderId: "471018577727",
  appId: "1:471018577727:web:b2b144862267f88253bd8a",
  measurementId: "G-9ERBHBR181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);