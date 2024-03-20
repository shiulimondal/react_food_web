
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDgTcg7xN0PL7qXT0s6-gsocIMAEl-uyJA",
    authDomain: "hungerfood-f2854.firebaseapp.com",
    projectId: "hungerfood-f2854",
    storageBucket: "hungerfood-f2854.appspot.com",
    messagingSenderId: "546658228977",
    appId: "1:546658228977:web:b4e65106ae38f38a4ce750"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)

export { auth, fireDB }