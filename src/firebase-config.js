// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNCzafciL6TcbQxYyn5anUnynPApUeEwY",
  authDomain: "pex-project-68d4e.firebaseapp.com",
  projectId: "pex-project-68d4e",
  storageBucket: "pex-project-68d4e.appspot.com",
  messagingSenderId: "517140568865",
  appId: "1:517140568865:web:8be14786965963fb66fc60",
  measurementId: "G-Q85XNY1F0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { db, auth };
