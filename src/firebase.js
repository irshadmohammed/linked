import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyApqReF3vvpeWlm1sDkNpIG6sOOzVB-Dxw",
  authDomain: "linkedin-clone-6211a.firebaseapp.com",
  projectId: "linkedin-clone-6211a",
  storageBucket: "linkedin-clone-6211a.appspot.com",
  messagingSenderId: "799462798806",
  appId: "1:799462798806:web:3b5c807780b51dcbf5a077"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };