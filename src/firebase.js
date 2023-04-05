// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSAFU_xiwB19BQSpjdzC6_oTRlvWchxpo",
    authDomain: "secquralseassignmentproject.firebaseapp.com",
    databaseURL: "https://secquralseassignmentproject-default-rtdb.firebaseio.com",
    projectId: "secquralseassignmentproject",
    storageBucket: "secquralseassignmentproject.appspot.com",
    messagingSenderId: "117032438331",
    appId: "1:117032438331:web:781216afcecdb51b0aaa1e"
  };

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();