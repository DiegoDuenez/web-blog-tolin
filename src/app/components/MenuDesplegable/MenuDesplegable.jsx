import {React, Component } from "react";

import '../../global/global.css';
import './MenuDesplegable.css';
import { Link } from "react-router-dom"; 



class MenuDesplegable extends Component{

    logout(){
        localStorage.clear();
        window.location.href = '/'
    }

    render(){

        return ( 
            <div className= { "menu-desplegable " + this.props.classes }>
                <a className="menu-desplegable__option">
                    <Link className="menu-desplegable__link" to="/perfil">Mi perfil</Link>
                </a>
                <a className="menu-desplegable__option" onClick={this.logout}>
                  Cerrar Sesión
                </a>
            </div>
            
        )
    }

}


export default MenuDesplegable;