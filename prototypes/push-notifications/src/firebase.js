import { initializeApp } from "firebase/app";
import {getMessaging} from "firebase/messaging";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "push-notifications-in-react.firebaseapp.com",
  projectId: "push-notifications-in-react",
  storageBucket: "push-notifications-in-react.appspot.com",
  messagingSenderId: "82708306954",
  appId: "1:82708306954:web:5303ebdb0fa831da1a53f3",
  measurementId: "G-XVMJ2TRF5P"
  };

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
