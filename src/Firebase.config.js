// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClB_ou9J8ptwti2bedNFSAy-brV_qk53A",
    authDomain: "music-events-1de2b.firebaseapp.com",
    projectId: "music-events-1de2b",
    storageBucket: "music-events-1de2b.appspot.com",
    messagingSenderId: "287947338751",
    appId: "1:287947338751:web:05dbd1976bc3956c2aadca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;