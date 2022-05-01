// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfN81u2mDtYxTOY44wNI2Ix6pt-w3CsJ8",
    authDomain: "warehouse-car-parts.firebaseapp.com",
    projectId: "warehouse-car-parts",
    storageBucket: "warehouse-car-parts.appspot.com",
    messagingSenderId: "198177105524",
    appId: "1:198177105524:web:75bedb4fb856f42f5c9321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;