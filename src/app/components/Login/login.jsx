import {React, Component } from "react";

import '../../global/global.css';
import './login.css';

class Login extends Component{

    render(){
        return ( 
            <div className="login__container">
                
                <form className="login__form">
                    <input type="text" className="login__input" placeholder="Ingresa tu correo" />
                    <input type="password" className="login__input" placeholder="Ingresa tu contraseña" />
                </form>
           
               <div className="login__footer">
                    <a href="#" className="login__link">Crear una cuenta</a>
                    <button type="submit" className="login__button">Iniciar Sesión</button>
               </div>

            </div>
        )
    }

}


export default Login;