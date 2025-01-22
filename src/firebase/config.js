import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWfIxzp1hzR3qYpgXFHw2AguCZJgE5ARQ",
  authDomain: "charm-home-db.firebaseapp.com",
  projectId: "charm-home-db",
  storageBucket: "charm-home-db.firebasestorage.app",
  messagingSenderId: "49024311274",
  appId: "1:49024311274:web:55a74be1afb277971edc93"
};


export const app = initializeApp(firebaseConfig)