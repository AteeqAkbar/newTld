import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

let firebaseConfig;
if (process.env.NODE_ENV === "development") {
  firebaseConfig = {
    apiKey: "AIzaSyD7rnsdx2jSiHFArTSDU3HfW3ZWakY_IeA",
    authDomain: "blogs-e8354.firebaseapp.com",
    projectId: "blogs-e8354",
    storageBucket: "blogs-e8354.appspot.com",
    messagingSenderId: "138709189791",
    appId: "1:138709189791:web:b6289f9518f47eeb444eaa",
  };
} else if (process.env.NODE_ENV === "production") {
  firebaseConfig = {
    apiKey: "AIzaSyDdC4or6Fde87crqMCb37r2WTP1g0-RFTU",
    authDomain: "dao-app-f170b.firebaseapp.com",
    projectId: "dao-app-f170b",
    storageBucket: "dao-app-f170b.appspot.com",
    messagingSenderId: "729053054019",
    appId: "1:729053054019:web:be6e3bb5b3e58d20d9c0f6",

    // apiKey: "AIzaSyD1U3a0aKscQzTY1y40YqVZ-8FeFqVnmeE",
    // authDomain: "users-337f1.firebaseapp.com",
    // databaseURL: "https://users-337f1-default-rtdb.firebaseio.com",
    // projectId: "users-337f1",
    // storageBucket: "users-337f1.appspot.com",
    // messagingSenderId: "936869001543",
    // appId: "1:936869001543:web:d41962670147d69edb7462",
  };
}
// for dev
// const firebaseConfig = {
//   apiKey: "AIzaSyD7rnsdx2jSiHFArTSDU3HfW3ZWakY_IeA",
//   authDomain: "blogs-e8354.firebaseapp.com",
//   projectId: "blogs-e8354",
//   storageBucket: "blogs-e8354.appspot.com",
//   messagingSenderId: "138709189791",
//   appId: "1:138709189791:web:b6289f9518f47eeb444eaa",
// };

// for production
// const firebaseConfig = {
//   apiKey: "AIzaSyD4c3wQosE51f5HCMLiV4PATMcrAMgbMg8",
//   authDomain: "tldweb-001.firebaseapp.com",
//   projectId: "tldweb-001",
//   storageBucket: "tldweb-001.appspot.com",
//   messagingSenderId: "814819599787",
//   appId: "1:814819599787:web:a066fc8d32a57bd04c9eee",
// };
// init firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
//  init firestore
const fireStore = firebase.firestore();

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { fireStore, auth, googleProvider, storage };
