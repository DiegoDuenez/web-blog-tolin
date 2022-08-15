import {React, useState, useRef,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import logo from '../../img/logo.png';
import Background from "../../components/Background/background";
import DocTitle from "../../components/DocTitle/doctitle";
import '../../global/global.css';
import './register.css';

import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'

const USER_REGEX = /^[a-zA-Z0-9][a-zA-Z0-9]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]).{8,24}$/;

export default function Register(){
    
    const userRef = useRef();
    const errRef = useRef();
    
    const [userName, setUserName] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);


    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);


    const [errMsg, setErrMsg]=useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        userRef.current.focus();
    }, [])

    useEffect(()=>{
        const result = USER_REGEX.test(userName);
        console.log(result);
        console.log(userName);
        setValidName(result);
    }, [userName])

    useEffect(()=>{
        const result = PWD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidName(result);
        const match = password === matchPwd;
        setValidMatch(match);
    }, [password,matchPwd])

    useEffect(()=>{
        setErrMsg('');
    }, [userName, password,matchPwd])

    const MySwal = withReactContent(Swal);

    const navigate = useNavigate()

    const login = () => {
        navigate('/login')
    }


    const postData = () =>{
        axios.post('http://127.0.0.1:8000/api/auth/register', {
            "name": userName, 
            "email": email,
            "password": password
        }).then( (response) => {
            if(response.status==201)
                  {
                    MySwal.fire({
                        icon: 'success',
                        title: 'Se registro Correctamente',
                        showConfirmButton: false,
                        timer: 1500
                      }).then(() => {
                        login()
                      })
                    
                  }            
        }).catch( (error) => {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo Registrar correctamente!, checabien el email',
              })
        })

        //console.log(userName + " " + email + " " + password)
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
                    
                    <p ref={errRef} className={errMsg ? "errmsg": "offscreen"}>{errMsg}</p>

                    <Form className="register__form">
                        <Form.Field>
                            <label></label>
                            <input onChange={(e) => setUserName(e.target.value)}  type="text" placeholder="Ingresa un nombre de usuario" focus={true}/>
                        </Form.Field>

                        <Form.Field>
                        <label></label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Ingresa tu correo"/>
                        </Form.Field>

                        <Form.Field>
                        <label></label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Ingresa tu contraseña"/>
                        </Form.Field>
                        <input onChange={(e) => setMatchPwd(e.target.value)} type="password" placeholder="Repite tu contraseña"/>
                    </Form>

                    <div className="register__footer">
                        <Button onClick={postData} type="submit" className="btn-registro">Registrarse</Button>
                        <Link to="/login" className="register__link">Ya tengo una cuenta</Link>
                    </div>
                </div>
            </div>
        )
}