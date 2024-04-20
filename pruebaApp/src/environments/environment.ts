// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

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
