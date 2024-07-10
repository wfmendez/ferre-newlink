import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9_mkMqPEaJHku-RvO-iu5-36rsT6TRXQ",
  authDomain: "ferre-newlink.firebaseapp.com",
  projectId: "ferre-newlink",
  storageBucket: "ferre-newlink.appspot.com",
  messagingSenderId: "74773402751",
  appId: "1:74773402751:web:f1a2a19645a9087e62db4a"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const UserDocRef = doc(db, 'users', userAuth.uid);

    console.log(UserDocRef);
}