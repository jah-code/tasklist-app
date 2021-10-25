import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCsudGpvobuZzigu3b3nQMO618lNHOJnYk",
    authDomain: "my-task-app-caf5e.firebaseapp.com",
    projectId: "my-task-app-caf5e",
    storageBucket: "my-task-app-caf5e.appspot.com",
    messagingSenderId: "212187833375",
    appId: "1:212187833375:web:1f4d9159b2a32f625d212a",
    measurementId: "G-YL9PZ21568"
  };
  
  firebase.initializeApp(config);
  const db = firebase.firestore();
  firebase.firestore().settings({ timestampsInSnapshots: true });
  db.settings({ timestampsInSnapshots: true });
  
  export default firebase 