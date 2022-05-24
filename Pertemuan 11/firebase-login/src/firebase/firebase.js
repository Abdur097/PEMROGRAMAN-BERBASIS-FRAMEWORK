import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDDBgbMZvLqKA-wv8ovkB5uxnYvR_79wrQ",
    authDomain: "fir-login-685ae.firebaseapp.com",
    projectId: "fir-login-685ae",
    storageBucket: "fir-login-685ae.appspot.com",
    messagingSenderId: "1003560095061",
    appId: "1:1003560095061:web:c8cdd58447a725236473dc",
    measurementId: "G-WT6WTZM0G8"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;