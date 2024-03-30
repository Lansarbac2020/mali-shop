// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIyzrnjAJMSU_EVWsIwq0YaGn1jSuNPyY",
  authDomain: "e-shop-nextjs-de9ed.firebaseapp.com",
  projectId: "e-shop-nextjs-de9ed",
  storageBucket: "e-shop-nextjs-de9ed.appspot.com",
  messagingSenderId: "465656031235",
  appId: "1:465656031235:web:7800702a55af5056e68636"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp ;