import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDv5SrJrhz52K1VVMOoRG9hpXAjDH6HiCc",
    authDomain: "mysite-33137.firebaseapp.com",
    projectId: "mysite-33137",
    storageBucket: "mysite-33137.appspot.com",
    messagingSenderId: "279296518500",
    appId: "1:279296518500:web:7577b17acbc21efa0f7271",
    measurementId: "G-0QQPRBC0B3"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const db = firebase.firestore()
  export const storage = firebase.storage()
  export const USER_COLLECTION = db.collection('users')