import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyBUd0NzHHzfTCOBUP-7rYMxn7MO9qsHGwA",
  authDomain: "proyectoreactjsmatteoli.firebaseapp.com",
  projectId: "proyectoreactjsmatteoli",
  storageBucket: "proyectoreactjsmatteoli.appspot.com",
  messagingSenderId: "796504982551",
  appId: "1:796504982551:web:468aaa9f504abe74c74852"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = createRoot(document.getElementById('root')); // Utiliza createRoot desde react-dom/client
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
