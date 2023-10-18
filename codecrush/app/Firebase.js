// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCmCdksiiFMM0P7I8lblAt_RYMnGD8snxM",
authDomain: "codecrush-auth.firebaseapp.com",
projectId: "codecrush-auth",
storageBucket: "codecrush-auth.appspot.com",
messagingSenderId: "385687984284",
appId: "1:385687984284:web:f974880d6f4469573a3559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);