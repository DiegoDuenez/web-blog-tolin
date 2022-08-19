import {React, useState} from "react";
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import './post.css';

function validateForm(){

    let titulo = document.forms["myForm"]["titulo"].value;
    let descripcion = document.forms["myForm"]["descripcion"].value

    if (titulo == ""){ 
        Swal.fire({title:"Escribe un titulo."})
        return false
    }

    if (descripcion == ""){
        Swal.fire({title:"Escribe una descripción."})
        return false
    }

    return true
}

export default function Createpost() {
    const [title, setpostName] = useState('');
    const [description, set_description] = useState('');
    const [user_id, set_user_id] = useState('');
    const postData = () => {}

    console.log(validateForm())

    if (validateForm() === true){
        postData = () => {
            axios.post('http://127.0.0.1:8000/api/Post', {
                "title":title,
                "description":description,
                "user_id":user_id
            })
        }        
    }


    return(
        <div className="div-form-new-post">
            <Form name="myForm" className="form-new-post" onSubmit={e => validateForm(e)}>
                <Form.Field>
                    <input name="titulo" onChange={(e) => setpostName(e.target.value)} placeholder='Nombre del Post'/>
                    <input name="descripcion" onChange={(e) => set_description(e.target.value)} placeholder='Descripcion'/>
                    <input onChange={(e) => set_user_id(e.target.value)} placeholder='usuario Id'/>
                </Form.Field>
                <div className="form-new-post-footer">
                    <Button onClick={postData} className="btn-post" type="submit">Añadir post</Button>
                </div>
            </Form>
        </div>
    )
}