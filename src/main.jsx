import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyB5COxX_B_qh6EQn_zyXytgPSQnoz3kSTY",
  authDomain: "e-commerce-react-2de55.firebaseapp.com",
  projectId: "e-commerce-react-2de55",
  storageBucket: "e-commerce-react-2de55.appspot.com",
  messagingSenderId: "795955064614",
  appId: "1:795955064614:web:9e21e0bcc09479ce02dbe7"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
