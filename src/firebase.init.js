import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClDP-6xWMcV7A8PVJKT8P1Wn_B8FiNEjc",
  authDomain: "rajib-enterprice.firebaseapp.com",
  projectId: "rajib-enterprice",
  storageBucket: "rajib-enterprice.appspot.com",
  messagingSenderId: "395952466878",
  appId: "1:395952466878:web:178b2fc0bb87cedb51e7ef",
  measurementId: "G-K424V9KQWG"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;