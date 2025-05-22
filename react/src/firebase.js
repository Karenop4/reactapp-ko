// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq2l89fVD6zSIzGF5b7fE_DVyv4O-oTho",
  authDomain: "evaortiz2025-cc458.firebaseapp.com",
  projectId: "evaortiz2025-cc458",
  storageBucket: "evaortiz2025-cc458.firebasestorage.app",
  messagingSenderId: "268140892533",
  appId: "1:268140892533:web:41b894ac8f08dbe4c6433c",
  measurementId: "G-ES4TEBHD09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default app;
export { db };