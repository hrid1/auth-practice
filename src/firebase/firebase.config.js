// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE7Kz2EV-t2J1frfANsbz0PUMkTn4oVJ0",
  authDomain: "auth-context-e4edc.firebaseapp.com",
  projectId: "auth-context-e4edc",
  storageBucket: "auth-context-e4edc.appspot.com",
  messagingSenderId: "372367094708",
  appId: "1:372367094708:web:a04cc4fdcfc2095fa178e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);