// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZ78tVVjnrwCo86JV8JhpUAO-gzKkzKt8',
  authDomain: 'thesyed-wildlife-photographer.firebaseapp.com',
  projectId: 'thesyed-wildlife-photographer',
  storageBucket: 'thesyed-wildlife-photographer.appspot.com',
  messagingSenderId: '352661138492',
  appId: '1:352661138492:web:ac83298123d230d9d66739',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
