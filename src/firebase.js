// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl1q8FbvkF1Y8_JBYoXPrR7v-rfbKcPEk",
  authDomain: "pgpod-e3a2a.firebaseapp.com",
  projectId: "pgpod-e3a2a",
  storageBucket: "pgpod-e3a2a.appspot.com",
  messagingSenderId: "527207183029",
  appId: "1:527207183029:web:9582e0d56bad49492dc4fc",
  measurementId: "G-ESYHWL66TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);