import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlKHohgIwcYlq_XE5IeCNTLinwSnTL3fQ",
  authDomain: "chatgpt-clone-49697.firebaseapp.com",
  projectId: "chatgpt-clone-49697",
  storageBucket: "chatgpt-clone-49697.appspot.com",
  messagingSenderId: "236553389225",
  appId: "1:236553389225:web:36cc60520c6913870ad5b8",
  measurementId: "G-5QRKXZQZZL"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
