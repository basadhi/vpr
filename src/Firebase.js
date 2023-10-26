// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCDrayk1DIgppla33t96B4kuoeZ-UfI5L0",
  authDomain: "vprimagesearch.firebaseapp.com",
  projectId: "vprimagesearch",
  storageBucket: "vprimagesearch.appspot.com",
  messagingSenderId: "72471203239",
  appId: "1:72471203239:web:3de2ed7c4f0787ce0efa82",
  measurementId: "G-231H9208ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);