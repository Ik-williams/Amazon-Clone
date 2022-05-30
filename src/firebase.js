import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCfddw4Z9XHqVTickZ9qOQes35seskFJlQ",
  authDomain: "fir-4b9fa.firebaseapp.com",
  projectId: "fir-4b9fa",
  storageBucket: "fir-4b9fa.appspot.com",
  messagingSenderId: "341434480868",
  appId: "1:341434480868:web:217b467ddd6d8c685f94f1",
  measurementId: "G-RRYR3T4HDY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };