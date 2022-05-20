import {React, Component } from "react";
import { Link } from "react-router-dom";

import Input from '../Input/input';
import Button from '../Button/button';

import '../../global/global.css';
import './login.css';



class Login extends Component{

    render(){
        return ( 
            
            <div className="login__container">

                <h2 className="login__title">Login</h2>
                <form className="login__form">
                    <Input type="text" placeholder="Ingresa tu correo" focus={true}/>
                    <Input type="password" placeholder="Ingresa tu contraseña"/>
                </form>
           
               <div className="login__footer">
                    <Link to="/registro" className="register__link">Crear cuenta</Link>
                    <Button type="submit" text="Iniciar Sesión"/>
               </div>

            </div>
        )
    }

}


export default Login;