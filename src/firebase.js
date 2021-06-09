import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCCosYiNVGI4gjv-PhKo04i_Q5d7gI40Rc",
  authDomain: "rock-paper-scissor-game-e1b59.firebaseapp.com",
  projectId: "rock-paper-scissor-game-e1b59",
  storageBucket: "rock-paper-scissor-game-e1b59.appspot.com",
  messagingSenderId: "9215615201",
  appId: "1:9215615201:web:2a3fc4fd7eba6dd3de97a0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
