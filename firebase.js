import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeZwUOGHQaFvu85e7vfZfZAkA2HgVd-HM",
  authDomain: "uber-clone-f2a45.firebaseapp.com",
  projectId: "uber-clone-f2a45",
  storageBucket: "uber-clone-f2a45.appspot.com",
  messagingSenderId: "314461355786",
  appId: "1:314461355786:web:809cad4b109c4e7fc144f3",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
