import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

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

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const FIRESTORE_DB = getFirestore(FIREBASE_APP);


