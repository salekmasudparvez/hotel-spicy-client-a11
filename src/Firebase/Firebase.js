
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBju8LRXhpz84bZ6rcCsAaVps2Hv2xEDP0",
  authDomain: "hotel-spicy.firebaseapp.com",
  projectId: "hotel-spicy",
  storageBucket: "hotel-spicy.appspot.com",
  messagingSenderId: "1029126438369",
  appId: "1:1029126438369:web:c20096204fdb3de5b0a6a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

