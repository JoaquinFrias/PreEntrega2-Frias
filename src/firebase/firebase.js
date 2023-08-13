// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVeV_xkY56O9hMyLO7PYJKkhziJq1d9pQ",
  authDomain: "ogro-bikes.firebaseapp.com",
  projectId: "ogro-bikes",
  storageBucket: "ogro-bikes.appspot.com",
  messagingSenderId: "264296490343",
  appId: "1:264296490343:web:2ed0c79b520b09a5dc3bc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)