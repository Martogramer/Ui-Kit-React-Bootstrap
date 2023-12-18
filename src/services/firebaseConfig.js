// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1ZAM-LkiR4TGsiWz58r-CaDjgJ7OKoqM",
  authDomain: "fymimagenes-66381.firebaseapp.com",
  projectId: "fymimagenes-66381",
  storageBucket: "fymimagenes-66381.appspot.com",
  messagingSenderId: "522363744233",
  appId: "1:522363744233:web:6f7e64921f341798df6578",
  measurementId: "G-HYJXYZD1MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)