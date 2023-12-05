// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzqcgF_PHCr02e8xC6fCRzyVXwcf3Xm6A",
  authDomain: "chatgpt-messenger-github.firebaseapp.com",
  projectId: "chatgpt-messenger-github",
  storageBucket: "chatgpt-messenger-github.appspot.com",
  messagingSenderId: "592889477570",
  appId: "1:592889477570:web:989002b9da9a64cf62be5b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
