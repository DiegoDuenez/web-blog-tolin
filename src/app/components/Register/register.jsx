import {React, Component } from "react";
import { Link } from "react-router-dom";

import logo from '../../img/logo.png';

import Input from '../Input/input';
import Button from '../Button/button';
import Background from "../Background/background";
import DocTitle from "../DocTitle/doctitle";
import '../../global/global.css';
import './register.css';



class Register extends Component{

    render(){

        var buttonClasses = "button--verde button--block"

        return ( 
           <div className="register__container">
                <DocTitle pageTitle={"Registro"}/>

                <Background/>

               <div className="logo">
                    <Link to="/">
                        <img src={ logo } alt="BlogHub" title="😎🎸" />
                    </Link>
                </div>

                <h2 className="register__title">Crear cuenta nueva</h2>
                <form className="register__form">
                    <Input type="text" placeholder="Ingresa un nombre de usuario" focus={true}/>
                    <Input type="email" placeholder="Ingresa tu correo"/>
                    <Input type="password" placeholder="Ingresa tu contraseña"/>
                    <Input type="password" placeholder="Repite tu contraseña"/>
                </form>
               <div className="register__footer">
                    <Button type="submit" classes={buttonClasses} text="Registrarse"/>
                    <Link to="/login" className="register__link">Ya tengo una cuenta</Link>
               </div>


            </div>
        )
    }

}


export default Register;