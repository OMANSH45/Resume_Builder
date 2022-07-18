import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
let fbObj = {
    apiKey: "AIzaSyCttf7oNLMMsox5MI4i8F3RKcJymoCA3Vw",
    authDomain: "resumebuilder-7e879.firebaseapp.com",
    projectId: "resumebuilder-7e879",
    storageBucket: "resumebuilder-7e879.appspot.com",
    messagingSenderId: "1050838208778",
    appId: "1:1050838208778:web:f35ba5fe5136024dfa2af3",
    measurementId: "G-7185WB2W44"
}
firebase.initializeApp(fbObj);
export default firebase;
