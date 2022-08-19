import {React, Component, useState } from "react";
import './navbar.css';
import logo from '../../img/logo.png';
import { Link } from "react-router-dom"; 
import MenuDesplegable  from '../MenuDesplegable/MenuDesplegable';

export default function Navbar() {


        const [hideMenuDesplegable, showMenuDesplegable] = useState(true);

        const shoot = () => {
            alert("Great Shot!");
          }


        return (
        <nav className="navbar">
            <MenuDesplegable  classes={`${hideMenuDesplegable ? "menu-desplegable__close" : ""}`}/>
            <a className="navbar__logo">
                <img src={ logo } alt="BlogHub" title="😎🎸" />
            </a>
            <div className="navbar__image" onClick={() => showMenuDesplegable(false)}>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" />
                <a className="navbar__link" href="#"  >
                    Diego
                </a>
            </div>
        </nav>)

}


