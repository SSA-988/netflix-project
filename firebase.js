// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIfz1bH0WuuqcR7YQOl5pQpcZSIrFx69o",
  authDomain: "netflix-project-3c346.firebaseapp.com",
  projectId: "netflix-project-3c346",
  storageBucket: "netflix-project-3c346.appspot.com",
  messagingSenderId: "334751596265",
  appId: "1:334751596265:web:ed7f7b3b31b117f8693a78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};