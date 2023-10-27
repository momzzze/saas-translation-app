import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyBBHNFm9riDQ3LW0jomnpjb8LU6RgkwXGU",
    authDomain: "saas-translator-app-8e3e5.firebaseapp.com",
    projectId: "saas-translator-app-8e3e5",
    storageBucket: "saas-translator-app-8e3e5.appspot.com",
    messagingSenderId: "93713569719",
    appId: "1:93713569719:web:2e813ae89735bc2580ba32"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions }