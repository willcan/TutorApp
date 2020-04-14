import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyB-Yhmfg45A7-z54I0EVlLaNrhc2H47aYY",
  authDomain: "tutorapp-124da.firebaseapp.com",
  databaseURL: "https://tutorapp-124da.firebaseio.com",
  projectId: "tutorapp-124da",
  storageBucket: "tutorapp-124da.appspot.com",
  messagingSenderId: "451368908505",
  appId: "1:451368908505:web:1f8a9c154b32bbfd9af0c8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();

export const storage = firebase.storage();
