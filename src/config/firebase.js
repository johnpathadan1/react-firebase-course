import { GoogleAuthProvider, getAuth } from "firebase/auth";

//to get access to firestore service
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; //added for file storage
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAChqdRUJLicuf3ITjFTw0KCIAgIgCxyXg",
  authDomain: "fir-course-b3ac4.firebaseapp.com",
  projectId: "fir-course-b3ac4",
  storageBucket: "fir-course-b3ac4.appspot.com",
  messagingSenderId: "993795517505",
  appId: "1:993795517505:web:15ea1abd010dcd00be6ac0",
  measurementId: "G-PKTLK59P2H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
