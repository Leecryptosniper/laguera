// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBj_rbonUD6ChFAN3vlsp-P4fjsbmTvbRE",
    authDomain: "marketshooping-c271f.firebaseapp.com",
    projectId: "marketshooping-c271f",
    storageBucket: "marketshooping-c271f.appspot.com",
    messagingSenderId: "498400367275",
    appId: "1:498400367275:web:2e229a4814887ee424ddee",
    measurementId: "G-FP1ZE84XD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };