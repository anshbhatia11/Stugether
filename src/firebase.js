import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC-ouCMdl2j0Uy4tTVlGoNI_oiT9ZTKy7E",

  authDomain: "stugether-d7b4f.firebaseapp.com",

  projectId: "stugether-d7b4f",

  storageBucket: "stugether-d7b4f.appspot.com",

  messagingSenderId: "863195230595",

  appId: "1:863195230595:web:1d092e8f8a66d70c4846b6"

  // measurementId: "G-9NNJN0E34L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
