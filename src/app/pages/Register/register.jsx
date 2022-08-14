import {React, useState } from "react";
import { Link } from "react-router-dom";

import logo from '../../img/logo.png';
import Background from "../../components/Background/background";
import DocTitle from "../../components/DocTitle/doctitle";
import '../../global/global.css';
import './register.css';

import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'

export default function Register(){ 

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const postData = () =>{
        axios.post('http://127.0.0.1:8000/api/auth/register', {
            "name": userName, 
            "email": email,
            "password": password
        })

        console.log(userName + " " + email + " " + password)
    }

        return (
            <div>
                <Background/>
                <div className="logo">
                    <Link to="/"><img src={ logo } alt="BlogHub" title="😎🎸" /></Link>
                </div>
                <div className="register__container">
                    <DocTitle pageTitle={"Registro"}/>
                    <h2 className="register__title">Crear cuenta nueva</h2>
                    <Form className="register__form">
                        <Form.Field>
                            <input onChange={(e) => setUserName(e.target.value)}  type="text" placeholder="Ingresa un nombre de usuario" focus={true}/>
                        </Form.Field>
                        <Form.Field>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Ingresa tu correo"/>
                        </Form.Field>
                        <Form.Field>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Ingresa tu contraseña"/>
                        </Form.Field>
                        <input type="password" placeholder="Repite tu contraseña"/>
                    </Form>
                    <div className="register__footer">
                        <Button onClick={postData} type="submit" className="btn-registro">Registrarse</Button>
                        <Link to="/login" className="register__link">Ya tengo una cuenta</Link>
                    </div>
                </div>
            </div>
        )
}