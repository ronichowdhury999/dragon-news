// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJQrchzpM1L3oY2vTWAK1ehbKXR-micmU",
    authDomain: "dragon-news-7f830.firebaseapp.com",
    projectId: "dragon-news-7f830",
    storageBucket: "dragon-news-7f830.appspot.com",
    messagingSenderId: "1014649337811",
    appId: "1:1014649337811:web:b2a485e18996d21057e126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
