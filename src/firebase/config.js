import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRqFLhGX-4WG0u2rpIUNVsX7HVoAHjixQ",
  authDomain: "projectmanagement-385a0.firebaseapp.com",
  projectId: "projectmanagement-385a0",
  storageBucket: "projectmanagement-385a0.appspot.com",
  messagingSenderId: "345871317819",
  appId: "1:345871317819:web:937fa7a312c0d2503ad51e",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
