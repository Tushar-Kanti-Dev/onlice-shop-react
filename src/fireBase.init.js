// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKh8od44sRDp_cmLnsj8Hyw9CltazXmSY",
  authDomain: "ema-john-simple-2-6f360.firebaseapp.com",
  projectId: "ema-john-simple-2-6f360",
  storageBucket: "ema-john-simple-2-6f360.appspot.com",
  messagingSenderId: "883124239053",
  appId: "1:883124239053:web:bbce0663ce437aa1b20784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;