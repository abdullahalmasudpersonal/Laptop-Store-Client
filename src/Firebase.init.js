// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxC3xeEF4zk9Fe3AyH2TgQQRKH_b1EgWo",
    authDomain: "laptop-stores.firebaseapp.com",
    projectId: "laptop-stores",
    storageBucket: "laptop-stores.appspot.com",
    messagingSenderId: "585108723731",
    appId: "1:585108723731:web:7cca698fd2a38c1601c7e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;