// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvdFLNJlhWV1bJ17Eh_IEd_MCzCm89i2k",
  authDomain: "chef-savvy-project.firebaseapp.com",
  projectId: "chef-savvy-project",
  storageBucket: "chef-savvy-project.appspot.com",
  messagingSenderId: "677855246376",
  appId: "1:677855246376:web:0d4c65a91f7500e2515d1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
