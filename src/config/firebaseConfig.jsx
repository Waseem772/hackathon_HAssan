// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCknN7qAXINZGSvFk0kyPJidRbgxX_z35w",
  authDomain: "bloodywebapp.firebaseapp.com",
  projectId: "bloodywebapp",
  storageBucket: "bloodywebapp.appspot.com",
  messagingSenderId: "291896958712",
  appId: "1:291896958712:web:c73c902f23416b3c28650d",
  measurementId: "G-Q14XMVG8ZB",
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
