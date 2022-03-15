// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcGT9miqi18cFssyv4EHWV-HaDJosC8Bc",
  authDomain: "pruebatecnicageek.firebaseapp.com",
  projectId: "pruebatecnicageek",
  storageBucket: "pruebatecnicageek.appspot.com",
  messagingSenderId: "97509740788",
  appId: "1:97509740788:web:1b2873dab65e4200c9cea1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const facebook = new FacebookAuthProvider()
const db = getFirestore();

export{
    app,
    google,
    db,
    facebook
}