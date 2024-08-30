import firebase from "firebase/compat/app";

import "firebase/compat/auth"

import "firebase/compat/firestore"

// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAVFBlv-yQZpexTeuD-crKQokHdyBOzvTg",
  authDomain: "studentscool-91f85.firebaseapp.com",
  projectId: "studentscool-91f85",
  storageBucket: "studentscool-91f85.appspot.com",
  messagingSenderId: "74156358722",
  appId: "1:74156358722:web:77ebe3945959d80360c1db"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }