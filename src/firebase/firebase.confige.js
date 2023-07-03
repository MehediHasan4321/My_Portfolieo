// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANFG2bizG74nypq31Nsfh-qiFzuj336e0",
  authDomain: "my-portfolio-4a52e.firebaseapp.com",
  projectId: "my-portfolio-4a52e",
  storageBucket: "my-portfolio-4a52e.appspot.com",
  messagingSenderId: "529693479369",
  appId: "1:529693479369:web:32777f3f40351ff3a65818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app