// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import the authentication module
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// My import - Firebase Key
import { firebaseConfigKey } from "./firebaseConfigKey.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfigKey);
export const Firestore = getFirestore();

// Initialize Firebase Authentication
export const Auth = getAuth(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfigKey);
}

export { firebase };
