import {React, useState} from "react";
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

import './coment.css';

function validateForm(){
    let comentario = document.forms["myForm"]["comentario"].value;

    if (comentario == ""){
        alert("El titulo es necesario.");
        return
    }

    return true
}

export default function CreateComent() {

    const [comentName, setComentName] = useState('');
    const [id_post, set_id_post] = useState('');
    const [id_user, set_id_user] = useState('');


    const postData = () => {
        axios.post('http://127.0.0.1:8000/api/Comments', {
            "description":comentName,
            "id_post":id_post,
            "id_user":id_user
        })
    }

    return(
        <div className="div-form-coment">
            <Form className="form-coment" onSubmit={e => validateForm(e)}>
                <Form.Field>
                    <input name="comentario" onChange={(e) => setComentName(e.target.value)} placeholder='Comentario'/>
                    <input onChange={(e) => set_id_post(e.target.value)} placeholder='Id post'/>
                    <input onChange={(e) => set_id_user(e.target.value)} placeholder='Id user'/>
                </Form.Field>
                <div className="form-coment-footer">
                    <Button onClick={postData} className="btn-coment" type="submit">Añadir Comentario</Button>
                </div>
            </Form>
        </div>
    )
}