import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAAOVOLyrL-sQOce7C8wsbFnVWLaAoBjIw",
    authDomain: "finance-tracker-6845e.firebaseapp.com",
    projectId: "finance-tracker-6845e",
    storageBucket: "finance-tracker-6845e.appspot.com",
    messagingSenderId: "294140418769",
    appId: "1:294140418769:web:1592479debb4280f6403f0"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const projectFirestore = firebase.firestore();

// Initialize Auth
const projectAuth = firebase.auth();

export { projectFirestore , projectAuth};