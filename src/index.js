import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



firebase.initializeApp({
  apiKey: "AIzaSyCQfOLwSnDxQLqYcMqE2EJ6v9rPYyE_PCc",
  authDomain: "conecta-d27af.firebaseapp.com",
  databaseURL: "https://conecta-d27af.firebaseio.com",
  projectId: "conecta-d27af",
  storageBucket: "conecta-d27af.appspot.com",
  messagingSenderId: "714031452770",
  appId: "1:714031452770:web:92d7196a3c2927f80ef73b",
  measurementId: "G-MYQNWV4Q8R"
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
