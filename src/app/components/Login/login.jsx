import {React, Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


import logo from '../../img/logo.png';

import Input from '../Input/input';
import Button from '../Button/button';
import DocTitle from "../DocTitle/doctitle";
import Background from "../Background/background";

import '../../global/global.css';
import './login.css';


const Url="http://127.0.0.1:8000/api/auth/login"
class Login extends Component{

    state={
        form:{

            email:'',
            password:''
        },
        error:false,
        errorMsg:""
    }

    handleChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    iniciarSession=async()=>{
        axios.post(Url, {params:
            {
            "email"    : this.state.form.email,
            "password" : this.state.form.password
          }
        })
        .then((response) =>{
            console.log(response);
        })
        .catch((error) =>{
            console.log(error);
        });
        
        console.log("Enviado");
    }


    enviSubmit=e=>{
        e.preventDefault();
    }

    

    
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

                <form className="login__form" onSubmit={this.enviSubmit}>

                    <Input type="text" name="email" placeholder="Correo Electronico" focus={true} onChange={this.handleChange} />
                    <Input type="password" name="password" placeholder="Ingresa tu contraseña" onChange={this.handleChange}/>

                    <div className="login__footer">
                        <input type="submit" classes={buttonClasses} value="Log In" text="Iniciar Sesión" onClick={()=>this.iniciarSession()}/>
                        <Link to="/registro" className="register__link">Crear cuenta</Link>
                    </div>

                </form>

            </div>
        )
    }

}

export default Login;