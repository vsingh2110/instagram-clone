import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyDUaCJB7W1KmWdVWlu159Mk_2B1MLjkNRA",
    authDomain: "instagram-yt-49f92.firebaseapp.com",
    projectId: "instagram-yt-49f92",
    storageBucket: "instagram-yt-49f92.appspot.com",
    messagingSenderId: "721630663077",
    appId: "1:721630663077:web:28d2e49912f4115981d84c"

};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

seedDatabase(firebase);

export { firebase, FieldValue };