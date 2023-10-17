import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import App from './App';


const firebaseConfig = {
  apiKey: "AIzaSyBUd0NzHHzfTCOBUP-7rYMxn7MO9qsHGwA",
  authDomain: "proyectoreactjsmatteoli.firebaseapp.com",
  projectId: "proyectoreactjsmatteoli",
  storageBucket: "proyectoreactjsmatteoli.appspot.com",
  messagingSenderId: "796504982551",
  appId: "1:796504982551:web:468aaa9f504abe74c74852"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

