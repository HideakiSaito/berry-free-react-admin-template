// firebase.js
// こちらはコピーしてそのままガツンと貼り付けてください

import { initializeApp } from 'firebase/app';
// import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };
const firebaseConfig = {
    apiKey: 'AIzaSyCiE36wFVxfMrZed-V88DphYIqUQtCFAxQ',
    authDomain: 'react-tetlis.firebaseapp.com',
    projectId: 'react-tetlis',
    storageBucket: 'react-tetlis.appspot.com',
    messagingSenderId: '114082670396',
    appId: '1:114082670396:web:c20460c5a8ac06862f6039',
    measurementId: 'G-CWVLMJNR4N'
};
// initializeApp(firebaseConfig);

// export const auth = getAuth();

const auth = getAuth();
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();
const analytics = getAnalytics(app);

export default auth;
