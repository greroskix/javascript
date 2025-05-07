import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBZhaZFLXo93QcB6MOXhTkkAsnSsYyPTis",

  authDomain: "suzano-124a4.firebaseapp.com",

  databaseURL: "https://suzano-124a4-default-rtdb.firebaseio.com&quot",

  projectId: "suzano-124a4",

  storageBucket: "suzano-124a4.appspot.com",

  messagingSenderId: "162112412626",

  appId: "1:162112412626:web:d41b30fdd68853df61460b",

  measurementId: "G-NHNGMJ3M8K"
  };

const app = initializeApp(firebaseConfig);
export const autenticacao = getAuth(app);