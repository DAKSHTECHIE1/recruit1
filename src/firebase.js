import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Initialize Firebase
const app = initializeApp ({
 apiKey: "AIzaSyBOX5cflmr38SDlBt4y0BuW_PMRexon3cw",
  authDomain: "recruitment-project-c1003.firebaseapp.com",
  projectId: "recruitment-project-c1003",
  storageBucket: "recruitment-project-c1003.appspot.com",
  messagingSenderId: "1005695205139",
  appId: "1:1005695205139:web:c06044ac4f2db42bb5a4e6"
});
// Firebase storage reference

const storage = getStorage(app);
const db = getFirestore(app);
export {db};
export default storage;
