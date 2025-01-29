// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMiEYTQruecwJlYBvTB90p4Oszn4dvmmw",
  authDomain: "miniblog-react-11f23.firebaseapp.com",
  projectId: "miniblog-react-11f23",
  storageBucket: "miniblog-react-11f23.firebasestorage.app",
  messagingSenderId: "930004894703",
  appId: "1:930004894703:web:e10c6732e0c6ebc69a2c1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
