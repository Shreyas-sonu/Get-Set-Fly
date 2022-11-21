// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//authentication
import {getAuth} from "firebase/auth"
//firebase database
import {getDatabase} from "firebase/database"
//firebase storage
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDV_BCuxDM0vLtUozoze6AJl91I0hQpSYo",
  authDomain: "get-set-fly.firebaseapp.com",
  projectId: "get-set-fly",
  storageBucket: "get-set-fly.appspot.com",
  messagingSenderId: "284520256007",
  appId: "1:284520256007:web:9bb21833dbf072919750a2",
};
// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

export let auth = getAuth(fireBaseApp);
export let dataBase = getDatabase(fireBaseApp);
export let storage = getStorage(fireBaseApp);
export default fireBaseApp;