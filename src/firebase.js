import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyCRPZH94fc5HHlN10CKwSxPWGSyReCGlcQ",
    authDomain: "talkify-c4ade.firebaseapp.com",
    projectId: "talkify-c4ade",
    storageBucket: "talkify-c4ade.appspot.com",
    messagingSenderId: "525892955313",
    appId: "1:525892955313:web:c8c2ab7817d681724c0690"
  }).auth();