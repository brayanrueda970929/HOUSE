import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAk92XdJBVg0shVM0rhV6pw-cimJVh6OxM",
    authDomain: "casa-850f1.firebaseapp.com",
    databaseURL: "https://casa-850f1-default-rtdb.firebaseio.com",
    projectId: "casa-850f1",
    storageBucket: "casa-850f1.appspot.com",
    messagingSenderId: "735159759920",
    appId: "1:735159759920:web:1b9e86264da1c4d536a9f5",
    measurementId: "G-MBBC5PBGCD"
  };
  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;