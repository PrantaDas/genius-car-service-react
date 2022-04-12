// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4HfxPw8FCgQZnGGxNey7fgB_uKSYSK3k",
  authDomain: "genius-car-services-9756e.firebaseapp.com",
  projectId: "genius-car-services-9756e",
  storageBucket: "genius-car-services-9756e.appspot.com",
  messagingSenderId: "1055792507848",
  appId: "1:1055792507848:web:b53c681a9e4bdfa1c86efd",
  measurementId: "G-11J69YH17F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app);

const analytics = getAnalytics(app);

export default auth;