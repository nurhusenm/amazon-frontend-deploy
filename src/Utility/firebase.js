// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
//for auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChcDrrM3LuhbsTpicH2Ug_wqAQC8Y4z74",
  authDomain: "clone-c421b.firebaseapp.com",
  projectId: "clone-c421b",
  storageBucket: "clone-c421b.appspot.com",
  messagingSenderId: "229845609487",
  appId: "1:229845609487:web:ab9971c0f932379726477a",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
