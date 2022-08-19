import {React, useState} from "react";
import { Button, Form } from 'semantic-ui-react';
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';

import './new-category.css';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function CreateCategory() {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const [categoryName, setCategoryName] = useState('');

    const homePage = () => {
        navigate('/home')
      }

    const postData = () => {
        var token = localStorage.getItem('token')
        var request = {
        "category_name": categoryName,
        };
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };

        axios.post('http://127.0.0.1:8000/api/categorias', request, axiosConfig)
        .then((res) => {
            if(res.status==201)
            {
              MySwal.fire({
                icon: 'success',
                title: 'Se creo correctamente la categoria',
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
                text: 'No se pudo Agregar correctamente!, intenta otro',
              })
        });
    }

    return(
        <div className="div-form-new-category">
            <Form>
                <Form.Field>
                    <input onChange={(e) => setCategoryName(e.target.value)} placeholder='Categoría'/>
                </Form.Field>
                <div className="div-btn-categoria">
                    <Button onClick={postData} className="btn-categoria" type="submit">Añadir</Button>
                </div>
            </Form>
        </div>
    )
}