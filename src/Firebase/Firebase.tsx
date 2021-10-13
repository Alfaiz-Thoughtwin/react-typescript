import * as firebase from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FirebaseConfig } from './FirebaseConfig';


const app = firebase.initializeApp(FirebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);
