// src/firebase.ts
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyD_zwEl4H79jV9RE6CXdAT7p9axvUZFsUg",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ra-enterprises-1d97d.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ra-enterprises-1d97d",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ra-enterprises-1d97d.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "735337658961",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:735337658961:web:a1f32e1aa47d7012de5670",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-DYPHE1MRK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

// Firestore Database
const db = getFirestore(app);

// Storage
const storage = getStorage(app);

export { 
  auth, 
  googleProvider, 
  facebookProvider,
  twitterProvider,
  db,
  storage 
};