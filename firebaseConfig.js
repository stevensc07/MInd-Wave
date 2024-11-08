// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDodnlkIJFGtLYUlIabrW-mwVIVqlSQUNQ",
  authDomain: "mindwave-87cd4.firebaseapp.com",
  projectId: "mindwave-87cd4",
  storageBucket: "mindwave-87cd4.firebasestorage.app",
  messagingSenderId: "1074560503906",
  appId: "1:1074560503906:web:87a67d1f6815591491013b",
  measurementId: "G-5RFQKXJEEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
