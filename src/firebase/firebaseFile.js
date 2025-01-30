// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut,onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDzbFic8SM0fWhggxzUM2jaO-S6DC6uX7U",
    authDomain: "frontend-task-64228.firebaseapp.com",
    projectId: "frontend-task-64228",
    storageBucket: "frontend-task-64228.firebasestorage.app",
    messagingSenderId: "415044374508",
    appId: "1:415044374508:web:93593835490651134b7ac9",
    measurementId: "G-VFP13WDNYY"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut,onAuthStateChanged };



