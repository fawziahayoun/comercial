import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvRHeCP0gxnASl5uq3DcIHlKaR5vMkPqM",
  authDomain: "commerce-5cf05.firebaseapp.com",
  projectId: "commerce-5cf05",
  storageBucket: "commerce-5cf05.appspot.com",
  messagingSenderId: "901624978753",
  appId: "1:901624978753:web:a057776888d81ec5d195c0",
  measurementId: "G-H2M67DRK43"
};

const app = initializeApp(firebaseConfig);
const  auth= getAuth(app);
export default app;