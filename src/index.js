import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Login from './app/pages/Login/login';
import Landing from './app/components/LandingPage/landing-page';
import Home from './app/pages/Home/home';
import Register from './app/pages/Register/register';
import Blog from './app/components/Blog/blog';
import NotFoundPage from './app/components/NotFoundPage/not-found-page.jsx';
import Categories from './app/pages/Categories/categories';
import UsersAdministrator from './app/components/Administrator/Users/users';
import BlogsAdministrator from './app/components/Administrator/Blogs/blogs';
import HomeAdministrator from './app/components/Administrator/Home/home';

import NewCategory from './app/pages/Categories/new-category/new-category';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Perfil from './app/components/Perfil/perfil';
import Mysblogs from './app/components/mysblogs/mysblogs'

import reportWebVitals from './reportWebVitals';

import Createpost from  './app/pages/Post/new-post/new-post'

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
        <Route path='/administrator' element={<HomeAdministrator/>} />
        <Route path='/mysblogs' element={<Mysblogs/>} />
        <Route path="/create-post" element={<Createpost/>}/>

        <Route path='/perfil' element={<Perfil/>} />
        <Route path='*' exact={true} element={<NotFoundPage/> } />

        <Route path='/administrator/blogs' element={<BlogsAdministrator/>} />
        <Route path='/administrator/users' element={<UsersAdministrator/>} />

        <Route path="/categories/new-category" element={<NewCategory/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
