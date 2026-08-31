import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMkdLRboUuzdDvmzxL43QD1DprmwIZiSQ",
    authDomain: "md-notes-7a59f.firebaseapp.com",
    projectId: "md-notes-7a59f",
    storageBucket: "md-notes-7a59f.firebasestorage.app",
    messagingSenderId: "581590206942",
    appId: "1:581590206942:web:6ede87f775a2b04280f54f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);