import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // databaseURL: process.env.DATABASE_URL,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGE_SENDER_ID,
  // appId: process.env.APP_ID,
  apiKey: "AIzaSyB3A1BXX8GhEBJiIlM_EnRL4kl0aT3O5vk",
  authDomain: "pizygroup.firebaseapp.com",
  projectId: "pizygroup",
  storageBucket: "pizygroup.appspot.com",
  messagingSenderId: "696883173358",
  appId: "1:696883173358:web:04231f379ef09d1553e0ff",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();
const timestamp = firebase.firestore.Timestamp;

const storage = firebase.storage();

export { firebase, auth, db, timestamp, storage };
