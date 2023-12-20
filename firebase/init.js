import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDq_s75qWM0Z6pkRbpVBw2cEOfXDk7FJjw",
    authDomain: "portfolio-39614.firebaseapp.com",
    databaseURL: "https://portfolio-39614-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfolio-39614",
    storageBucket: "portfolio-39614.appspot.com",
    messagingSenderId: "984293185236",
    appId: "1:984293185236:web:ca2fd8ef1294df65c00d41",
    measurementId: "G-T54QWHYM4S"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()
export default db
