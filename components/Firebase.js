// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
//import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqTi321k5d5tz7bIEIOCcbPambXMVuF24",
  authDomain: "kuka-summer-training.firebaseapp.com",
  projectId: "kuka-summer-training",
  storageBucket: "kuka-summer-training.appspot.com",
  messagingSenderId: "711767982023",
  appId: "1:711767982023:web:f3847ab9dbc20e564ea3e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
