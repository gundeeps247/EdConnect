import firebase from "firebase";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "drive-uploader1.firebaseapp.com",
  projectId: "drive-uploader1",
  storageBucket: "drive-uploader1.appspot.com",
  messagingSenderId: "795138075713",
  appId: "1:795138075713:web:245277b4846e9484466ac0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }