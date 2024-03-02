import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "uploader-b88f4.firebaseapp.com",
  projectId: "uploader-b88f4",
  storageBucket: "uploader-b88f4.appspot.com",
  messagingSenderId: "530711664490",
  appId: "1:530711664490:web:c123b370f1b6129c05b713",
  measurementId: "G-556MD4546Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);