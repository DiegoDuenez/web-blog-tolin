import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Login from './app/components/Login/login';
import Landing from './app/components/LandingPage/landing-page';
import Home from './app/components/Home/home';
import Register from './app/components/Register/register';
import Blog from './app/components/Blog/blog';
import NotFoundPage from './app/components/NotFoundPage/not-found-page.jsx';
import Categories from './app/components/Categories/categories';
import UsersAdministrator from './app/components/Administrator/Users/users';
import BlogsAdministrator from './app/components/Administrator/Blogs/blogs';
import HomeAdministrator from './app/components/Administrator/Home/home';


import { BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index  element={<Landing />}/>
        <Route path='/login' element={<Login />}/>
        <Route path="/registro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/categories" element={<Categories/>} />
        <Route path='*' exact={true} element={<NotFoundPage/> } />
        <Route path='/administrator' element={<HomeAdministrator/>} />
        <Route path='/administrator/blogs' element={<BlogsAdministrator/>} />
        <Route path='/administrator/users' element={<UsersAdministrator/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
