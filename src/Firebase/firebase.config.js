import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBaN-yjybtZGvhQDiXaMi2S6fWNSAAHfUw",
    authDomain: "fire-express-router-pr.firebaseapp.com",
    databaseURL: "https://fire-express-router-pr-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fire-express-router-pr",
    storageBucket: "fire-express-router-pr.appspot.com",
    messagingSenderId: "888463642440",
    appId: "1:888463642440:web:674ba9e76b76e8bdd8ad7d"
};

export const app = initializeApp(firebaseConfig);