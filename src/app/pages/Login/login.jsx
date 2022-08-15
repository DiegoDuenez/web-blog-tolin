import {React, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


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
    var id = null
    var username = null

    const navigate = useNavigate()
    const MySwal = withReactContent(Swal);

    const homePage = () => {
        navigate('/home')
    }

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
            id =  res["data"]["id"]
            username = res["data"]["username"]

            if (token !== null || token !== ""){
                
                localStorage.setItem('token', token)
                localStorage.setItem('idUsername', id)
                localStorage.setItem('username', username)

                MySwal.fire({
                    icon: 'success',
                    title: 'Se logueo correctamente',
                    showConfirmButton: false,
                    timer: 1500
                  }).then(() => {
                    homePage()
                  })
                  .catch( (error) => {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo logear correctamente!',
              })
        })
                //console.log(token)
            }
        })
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
