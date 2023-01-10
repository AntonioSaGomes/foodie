// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSYJpI16xyOe0I1DRGy2qmzr17ug_eLW8",
  authDomain: "foodie-ag.firebaseapp.com",
  projectId: "foodie-ag",
  storageBucket: "foodie-ag.appspot.com",
  messagingSenderId: "761944687900",
  appId: "1:761944687900:web:f43b321bc545b5fbbae6d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
