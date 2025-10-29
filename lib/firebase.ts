// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu21KvfvcDhR_laDQHGpxYIZvFfYC83mI",
  authDomain: "iareconsortium25.firebaseapp.com",
  projectId: "iareconsortium25",
  storageBucket: "iareconsortium25.firebasestorage.app",
  messagingSenderId: "463068143629",
  appId: "1:463068143629:web:566cc04765b328188c3544"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;