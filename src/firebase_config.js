import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc9fXtfjcVjrx-IH_Y9T9Ub68ncTgEOo0",
  authDomain: "webbrains-7981a.firebaseapp.com",
  projectId: "webbrains-7981a",
  storageBucket: "webbrains-7981a.appspot.com",
  messagingSenderId: "799821640221",
  appId: "1:799821640221:web:9a57bd05b0a1a0f58a0cf4",
  measurementId: "G-DV108DKXWX"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db }; 