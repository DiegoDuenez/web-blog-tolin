import {React, Component } from "react";
import { Link } from "react-router-dom";

import logo from '../../img/logo.png';

import Input from '../Input/input';
import Button from '../Button/button';
import DocTitle from "../DocTitle/doctitle";
import Background from "../Background/background";

import '../../global/global.css';
import './login.css';



class Login extends Component{

    render(){

        var buttonClasses = "button--verde button--block"

        return ( 
            <div className="login__container">
                <DocTitle pageTitle={"Login"}/>

                <Background/>

                <div className="logo">
                    <Link to="/">
                        <img src={ logo } alt="BlogHub" title="😎🎸" />
                    </Link>
                </div>

                <h2 className="login__title">Iniciar Sesión</h2>
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