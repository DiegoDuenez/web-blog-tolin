import {React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import logo from '../../img/logo.png';
import DocTitle from "../../components/DocTitle/doctitle";
import Background from "../../components/Background/background";

import { Button, Form } from 'semantic-ui-react'

import '../../global/global.css';
import './login.css';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    var token = null

    const postData = () =>{
        var request = {
            "email": email,
            "password": password
          };
          
    
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
          
        axios.post('http://127.0.0.1:8000/api/auth/login', request, axiosConfig)
        .then((res) => {
            token = res["data"]["access_token"]
        })
        console.log(token)
    }

    

    return (
        <div>
            <Background/>
            <div className="logo">
                <Link to="/"><img src={ logo } alt="BlogHub" title="😎🎸" /></Link>
            </div>
            <div className="login__container">
            <DocTitle pageTitle={"Login"}/>
            <h2 className="login__title">Iniciar Sesión</h2>
            <Form className="login__form">
                <input  onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Ingresa tu correo"/>
                <input  onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Ingresa tu contraseña"/>
            </Form>
            <div className="login__footer">
                <Button onClick={postData} type="submit">Iniciar Sesión</Button>
                <Link to="/registro" className="register__link">Crear cuenta</Link>
            </div>
        </div>
        </div>

    )
}
