import firebase from "firebase/app"
require('firebase/auth')

var firebaseConfig = {
        apiKey: "AIzaSyB3-suDYoRfQ669HS3-7NjuF-Dl8sdW8gQ",
        authDomain: "weather-app-57730.firebaseapp.com",
        projectId: "weather-app-57730",
        storageBucket: "weather-app-57730.appspot.com",
        messagingSenderId: "454157535276",
        appId: "1:454157535276:web:1aaf77c15a9414fa8ae989",
        measurementId: "G-VZJLMGXGT3"
}

firebase.initializeApp(firebaseConfig);

export default firebase;