import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//firestore config
export const firebaseConfig = {
  apiKey: "AIzaSyANNy_nk94uuedXEq4nIJcJDU-cEAinPbM",
  authDomain: "balto-s-shop.firebaseapp.com",
  projectId: "balto-s-shop",
  storageBucket: "balto-s-shop.appspot.com",
  messagingSenderId: "1065914717413",
  appId: "1:1065914717413:web:e853c7da2a569c8174300c",
  measurementId: "G-H5KMGR8M03",
};

const app = initializeApp(firebaseConfig);
export const authTokken = getAuth(app);
