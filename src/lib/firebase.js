import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { seedDatabase } from '../seed';


const config = {
  apiKey: "AIzaSyDUaCJB7W1KmWdVWlu159Mk_2B1MLjkNRA",
  authDomain: "instagram-yt-49f92.firebaseapp.com",
  databaseURL: "https://instagram-yt-49f92-default-rtdb.firebaseio.com",
  projectId: "instagram-yt-49f92",
  storageBucket: "instagram-yt-49f92.appspot.com",
  messagingSenderId: "721630663077",
  appId: "1:721630663077:web:8fb4165e85d0852481d84c"

};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

seedDatabase(firebase);

export { firebase, FieldValue };

seedDatabase(firebase);

seedDatabase(firebase);