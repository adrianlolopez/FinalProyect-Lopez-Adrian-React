import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdaKGy_6PbcfbOWjeJqWolzSMaH8Mmkhk",
    authDomain: "loperez-design.firebaseapp.com",
    projectId: "loperez-design",
    storageBucket: "loperez-design.appspot.com",
    messagingSenderId: "401275016266",
    appId: "1:401275016266:web:89b4debe058a7efa4c02b3",
    measurementId: "G-XDWVQTTDVH"
};

const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore();

export { app, firestore };