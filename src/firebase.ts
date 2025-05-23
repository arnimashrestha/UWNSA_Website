// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzzagTjniTQnrfLs762i_WOa58R3Tfat8",
  authDomain: "nsa-site-fedee.firebaseapp.com",
  projectId: "nsa-site-fedee",
  storageBucket: "nsa-site-fedee.firebasestorage.app",
  messagingSenderId: "982989402532",
  appId: "1:982989402532:web:05462c53de84a9c787d131",
  measurementId: "G-EGDWQZWTKF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
