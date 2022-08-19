import {React, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import logo from '../../img/logo.png';
import Background from "../Background/background";
import Navbar from '../Navbar/navbar';
import DocTitle from "../DocTitle/doctitle";
import FloatButton from "../../components/float-button/float-button";

import './blog.css';
import './style2.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from "axios";
import { Button, Form } from 'semantic-ui-react'



export default function NBlog(){
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [title, setTitle] = useState('');
  const [blog, setBlog] = useState('');
  

  const homePage = () => {
    navigate('/home')
  }
  
  const postData = () =>{
    var token = localStorage.getItem('token')
    var request = {
      "title": title,
      "description": blog
    };

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };

    axios.post('http://127.0.0.1:8000/api/Post/?token='+token, request, axiosConfig)
        .then((res) => {
          if(res.status==200)
          {
            MySwal.fire({
              icon: 'success',
              title: 'Se creo correctamente el blog',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              homePage()
            })
          }
        })
        .catch( (error) => {
          MySwal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No se pudo Agregar correctamente!',
            })
      });
  }

  return (
    <div className="body-form">
      <Navbar></Navbar>
       <div className="contact_form">

<div className="formulario">      
          <Form className="login__form">       
            <p>
              <label for="titulo" className="colocar_nombre">Titulo
                <span className="obligatorio span1">*</span>
              </label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" name="introducir_nombre" id="titulo" required="obligatorio" placeholder="Escribe tu Titulo" className="input1" />
            </p>
        
            <p>
              <label for="mensaje" className="colocar_mensaje">Mensaje
                <span className="obligatorio">*</span>
              </label>                     
                                <textarea name="introducir_mensaje" className="texto_mensaje textarea1" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..." onChange={(e) => setBlog(e.target.value)}></textarea> 
                            </p>                    
          
            <button type="submit" name="enviar_formulario" id="enviar" onClick={postData} className="button2"><p>Enviar</p></button>

            </Form>
</div>  
</div>
  <FloatButton></FloatButton>
    </div>
  )
}