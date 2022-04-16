// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiIWzb65qvoMZaZSmDQTQ_AwetpN1z84I",
  authDomain: "independent-service-prov-327fa.firebaseapp.com",
  projectId: "independent-service-prov-327fa",
  storageBucket: "independent-service-prov-327fa.appspot.com",
  messagingSenderId: "499988295815",
  appId: "1:499988295815:web:105a586910c6593b6dc822"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;