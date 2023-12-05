// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";


// My import - Firebase Key
import {firebaseConfigKey} from "./firebaseConfigKey.js"



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfigKey);
//const analytics = getAnalytics(app);
export const Firestore = getFirestore();



