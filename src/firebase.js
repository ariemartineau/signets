import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhzsTCb6NEh7f3_ov9IRdhLK0GhSGurQ4",
  authDomain: "panier-achats-alm.firebaseapp.com",
  projectId: "panier-achats-alm",
  storageBucket: "panier-achats-alm.appspot.com",
  messagingSenderId: "561235444569",
  appId: "1:561235444569:web:253f34bfa46174f7048248",
  measurementId: "G-V0WH1T971B"
};

// Initialiser firebase
if(!firebase.apps.lenght) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser firebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser firestore
export const instanceFirestore = firebase.firestore();