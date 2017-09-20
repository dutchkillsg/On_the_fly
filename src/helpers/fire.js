import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC4M2qQE3noxy4FbHhE3_hm4brzvaLm5GU",
    authDomain: "on-the-fly-893d4.firebaseapp.com",
    databaseURL: "https://on-the-fly-893d4.firebaseio.com",
    projectId: "on-the-fly-893d4",
    storageBucket: "on-the-fly-893d4.appspot.com",
    messagingSenderId: "900885373680"
  };

firebase.initializeApp(config)



export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
