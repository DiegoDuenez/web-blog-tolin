import {React, Component, useState } from "react";
import './navbar.css';
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
            <a>
                <Link className="navbar__link" to="/categories">Categorías</Link>
            </a>
            <a>
                <Link className="navbar__link" to="/administrator">Administrador</Link>
            </a>
            <div className="navbar__image" onClick={() => showMenuDesplegable(false)}>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" />
                <a className="navbar__link" href="#"  >
                    Diego
                </a>
            </div>
        </nav>)

}


