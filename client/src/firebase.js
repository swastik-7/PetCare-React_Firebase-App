import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

import dotenv from "dotenv";
//STORED THE FIREBASE DETAILS IN .env.local FILE

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "petcare-33143.firebaseapp.com",
  projectId: "petcare-33143",
  storageBucket: "petcare-33143.appspot.com",
  messagingSenderId: "309875912036",
  appId: process.env.PETCARE_APP_ID,
  measurementId: "G-VZ7GPKCNBY"

};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
