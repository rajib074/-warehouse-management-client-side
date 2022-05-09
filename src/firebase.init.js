// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClDP-6xWMcV7A8PVJKT8P1Wn_B8FiNEjc",
  authDomain: "rajib-enterprice.firebaseapp.com",
  projectId: "rajib-enterprice",
  storageBucket: "rajib-enterprice.appspot.com",
  messagingSenderId: "395952466878",
  appId: "1:395952466878:web:178b2fc0bb87cedb51e7ef",
  measurementId: "G-K424V9KQWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);
export default auth;