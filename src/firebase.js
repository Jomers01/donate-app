import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjDH2VLwcAWz2qGvWvgCk9B5TQ-Bq_OvU",
  authDomain: "donate-app-cc00a.firebaseapp.com",
  databaseURL: "https://donate-app-cc00a-default-rtdb.firebaseio.com/",
  projectId: "donate-app-cc00a",
  storageBucket: "donate-app-cc00a.appspot.com",
  messagingSenderId: "418712485292",
  appId: "1:418712485292:web:3144e20fb357215112ce09"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)

// export default db;
