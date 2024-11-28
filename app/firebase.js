// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNKWDMFgB5XG310BqMYQTIQya-EZ7UReo",
  authDomain: "zonvoiretaskapp.firebaseapp.com",
  projectId: "zonvoiretaskapp",
  storageBucket: "zonvoiretaskapp.firebasestorage.app",
  messagingSenderId: "642952650732",
  appId: "1:642952650732:web:e15658fae1fd7c0c0feac9",
  measurementId: "G-S6DV4JN19P"
};
// firebase.js


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

export { auth };


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);