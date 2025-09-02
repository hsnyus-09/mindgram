// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getDatabase, ref, push, set, onValue, update, remove } from "firebase/database";

const firebaseConfig = {
    apiKey: {test},
    authDomain: {test},
    projectId: {test},
    storageBucket: {test},
    messagingSenderId: {test},
    appId: {test}
  };
  console.log('firebaseConfig');

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export { Timestamp };

export { ref, push, set, onValue, update, remove };
