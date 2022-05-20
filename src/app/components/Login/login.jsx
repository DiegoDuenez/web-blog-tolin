import {React, Component } from "react";
import { Link } from "react-router-dom";

import Input from '../Input/input';
import Button from '../Button/button';

import '../../global/global.css';
import './login.css';



class Login extends Component{

    render(){

        var buttonClasses = " button--block"

        return ( 
            <div className="login__container">

                <h2 className="login__title">Login</h2>
                <form className="login__form">
                    <Input type="text" placeholder="Ingresa tu correo" focus={true}/>
                    <Input type="password" placeholder="Ingresa tu contraseña"/>
                </form>
        
            <div className="login__footer">
                    <Button type="submit" classes={buttonClasses} text="Iniciar Sesión"/>
                    <Link to="/registro" className="register__link">Crear cuenta</Link>
            </div>

            </div>

        )
    }

}


export default Login;