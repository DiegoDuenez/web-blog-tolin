import {React, Component } from "react";

import '../../global/global.css';
import './MenuDesplegable.css';
import { Link } from "react-router-dom"; 



class MenuDesplegable extends Component{

    render(){

        return ( 
            <div className= { "menu-desplegable " + this.props.classes }>
                <a className="menu-desplegable__option">
                    <Link className="menu-desplegable__link" to="/perfil">Mi perfil</Link>
                </a>
                <a className="menu-desplegable__option">
                    <Link className="menu-desplegable__link--red" to="/">Cerrar Sesión</Link>
                </a>
            </div>
            
        )
    }

}


export default MenuDesplegable;