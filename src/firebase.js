// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACdVlYx-a4k6sDZDx4xioyFz59QwJiaRg",
    authDomain: "wesper-ff707.firebaseapp.com",
    projectId: "wesper-ff707",
    storageBucket: "wesper-ff707.appspot.com",
    messagingSenderId: "836024878028",
    appId: "1:836024878028:web:c4903af5f1c077fdc19369",
    measurementId: "G-RLVH77QLWH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
