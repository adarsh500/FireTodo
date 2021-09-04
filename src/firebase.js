import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCF4Uy2WpJUWMpxwF5u6zeCXcZvzYyQCAY",
  authDomain: "todoapp-b770f.firebaseapp.com",
  projectId: "todoapp-b770f",
  storageBucket: "todoapp-b770f.appspot.com",
  messagingSenderId: "909988626084",
  appId: "1:909988626084:web:f573d8e52554c9ca81b031",
  measurementId: "G-GN41XZMWFG",
});

const db = firebaseApp.firestore();

// eslint-disable-next-line import/no-anonymous-default-export
export default db;
