import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
import Navbar from './app/components/Navbar/navbar';
import Login from './app/components/Login/login';
import Landing from './app/components/LandingPage/landing-page';

import Register from './app/components/Register/register';

import { BrowserRouter,Routes,Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index  element={<Landing />}/>
        <Route path='/login' element={<Login />}/>
        <Route path="/registro" element={<Register />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
