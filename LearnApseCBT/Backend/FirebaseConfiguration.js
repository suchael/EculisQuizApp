// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

//import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFQrEF2ryKhJ6IJ2Xp1l5ukvJBX1yoWgU",
  authDomain: "learnapsedb.firebaseapp.com",
  projectId: "learnapsedb",
  storageBucket: "learnapsedb.appspot.com",
  messagingSenderId: "984177983531",
  appId: "1:984177983531:web:f5bdb21a51784122162a6e",
  measurementId: "G-78ELTSBWMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
