import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
//const firebaseConfig = {
  // apiKey: "AIzaSyD7rnsdx2jSiHFArTSDU3HfW3ZWakY_IeA",
  // authDomain: "blogs-e8354.firebaseapp.com",
  // projectId: "blogs-e8354",
  // storageBucket: "blogs-e8354.appspot.com",
  // messagingSenderId: "138709189791",
  // appId: "1:138709189791:web:b6289f9518f47eeb444eaa",
  // Your web app's Firebase configuration
//};
const firebaseConfig = {
  apiKey: "AIzaSyD4c3wQosE51f5HCMLiV4PATMcrAMgbMg8",
  authDomain: "tldweb-001.firebaseapp.com",
  projectId: "tldweb-001",
  storageBucket: "tldweb-001.appspot.com",
  messagingSenderId: "814819599787",
  appId: "1:814819599787:web:a066fc8d32a57bd04c9eee"
};

// init firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
//  init firestore
const fireStore = firebase.firestore();

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { fireStore, auth, googleProvider, storage };
