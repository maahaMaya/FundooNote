import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RegisterNewUser from './Pages/RegisterNewUser/Register';
import UserSignIn from './Pages/SignIn/SignIn';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserSignIn/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
