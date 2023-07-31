import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtyj39yQJxbjvcSBQ9vWPh1hsJJw2U-94",
  authDomain: "miniblog-3f73d.firebaseapp.com",
  projectId: "miniblog-3f73d",
  storageBucket: "miniblog-3f73d.appspot.com",
  messagingSenderId: "539878965380",
  appId: "1:539878965380:web:1e7cb52a702e16021942d1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };