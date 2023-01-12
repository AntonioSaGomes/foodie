import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

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
const firebaseInstance = firebase.initializeApp(firebaseConfig);
const firestore = firebaseInstance.firestore();
const auth = getAuth(firebaseInstance);
const app = createApp(App)

app.use(router);
app.use(firestore);
app.use(auth);

app.config.globalProperties.$firestore = firestore;
app.config.globalProperties.$auth = auth;


app.mount('#app')
