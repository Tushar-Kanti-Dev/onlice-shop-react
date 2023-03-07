// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH5KQsLwClRiDyac97ZMwXnDrzRg1zCGo",
  authDomain: "ema-john-simple-2-47633.firebaseapp.com",
  projectId: "ema-john-simple-2-47633",
  storageBucket: "ema-john-simple-2-47633.appspot.com",
  messagingSenderId: "654597535691",
  appId: "1:654597535691:web:5fb4c02a387f5f61ef284e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app;