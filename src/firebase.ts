// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getDatabase, ref, push, set, onValue, update, remove } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBlaEXQp4cMSWbYfJ-d6Gg07Ge9Q0VVjao",
    authDomain: "fir-dlqkr.firebaseapp.com",
    projectId: "fir-dlqkr",
    storageBucket: "fir-dlqkr.firebasestorage.app",
    messagingSenderId: "818684156502",
    appId: "1:818684156502:web:de8c709e107671a43079f7"
  };
  console.log('firebaseConfig');

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export { Timestamp };
export { ref, push, set, onValue, update, remove };