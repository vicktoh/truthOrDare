import { initializeApp } from "firebase/app";
import { getAnalytics,  } from "firebase/analytics";
import { getDatabase  } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbL1nKeQPC6IGSVNLzZoEZGNon95ESQBE",
  authDomain: "truthordare-ee0c3.firebaseapp.com",
  databaseURL: "https://truthordare-ee0c3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "truthordare-ee0c3",
  storageBucket: "truthordare-ee0c3.appspot.com",
  messagingSenderId: "484313695798",
  appId: "1:484313695798:web:4a2c59cd65a65b08eeba97",
  measurementId: "G-0TPK8CL0ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);