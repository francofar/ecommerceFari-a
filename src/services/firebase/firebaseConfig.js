
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDgnkKSkflMIX9xrel4CrIaKnNXgECvpMY",
    authDomain: "ecommercefar-966a2.firebaseapp.com",
    projectId: "ecommercefar-966a2",
    storageBucket: "ecommercefar-966a2.appspot.com",
    messagingSenderId: "1075538511512",
    appId: "1:1075538511512:web:c8b17e88db3dce39c4f2ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)