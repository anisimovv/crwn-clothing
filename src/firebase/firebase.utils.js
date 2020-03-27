import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAIEjvZ9tOHJvxxaXUwJ_05u9Pk-Zj3skU",
  authDomain: "crwn-db-5c724.firebaseapp.com",
  databaseURL: "https://crwn-db-5c724.firebaseio.com",
  projectId: "crwn-db-5c724",
  storageBucket: "crwn-db-5c724.appspot.com",
  messagingSenderId: "245934283399",
  appId: "1:245934283399:web:3b1f28a6c313f341fff622",
  measurementId: "G-H832379JN9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;