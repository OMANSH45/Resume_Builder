import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
let fbObj = {
    apiKey: "AIzaSyCSSEp95EmggHxZzL7xzdNXJ5cvsgujm1k",
    authDomain: "resumebuilder-od.firebaseapp.com",
    projectId: "resumebuilder-od",
    storageBucket: "resumebuilder-od.appspot.com",
    messagingSenderId: "417632908232",
    appId: "1:417632908232:web:4cf7b305744e1b8dcb06fd",
    measurementId: "G-LHJHKK0ZM8"
}
firebase.initializeApp(fbObj);
export default firebase;
