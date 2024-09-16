import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDgiPJxwx2130I6Z0WzW-ean9mDo3do7mc",
  authDomain: "my-pet-vaccines.firebaseapp.com",
  projectId: "my-pet-vaccines",
  storageBucket: "my-pet-vaccines.appspot.com",
  messagingSenderId: "610582710844",
  appId: "1:610582710844:web:028e40c08a07d213e5d139"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

export const FIREBASE_STORAGE = getStorage(FIREBASE_APP, "gs://my-pet-vaccines.appspot.com");

