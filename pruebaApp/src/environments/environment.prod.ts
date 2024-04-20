export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDB2euC1jpQjKeFJjFqUPzGcZ2u493deYY",
  authDomain: "prueba-f1d09.firebaseapp.com",
  projectId: "prueba-f1d09",
  storageBucket: "prueba-f1d09.appspot.com",
  messagingSenderId: "880275012802",
  appId: "1:880275012802:web:69d19a77ed898fad6fcf5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
