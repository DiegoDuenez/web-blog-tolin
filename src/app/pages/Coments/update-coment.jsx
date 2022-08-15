import {React, useState} from "react";
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { BrowserRouter as useParams } from "react-router-dom";

import './coment.css';

export default function CreateComent() {
//    let { id } = useParams();

    const [comentName, setComentName] = useState('');
    const [id_post, set_id_post] = useState('');
    const [id_user, set_id_user] = useState('');


    const postData = () => {
        axios.put('http://127.0.0.1:8000/api/Comments/', {
            "description":comentName,
            "id_post":id_post,
            "id_user":id_user
        })
    }

    return(
        <div className="div-form-coment">
            <Form className="form-coment">
                <Form.Field>
                    <input onChange={(e) => setComentName(e.target.value)} placeholder='Comentario'/>
                    <input onChange={(e) => set_id_post(e.target.value)} placeholder='Id post'/>
                    <input onChange={(e) => set_id_user(e.target.value)} placeholder='Id user'/>
                </Form.Field>
                <div className="form-coment-footer">
                    <Button onClick={postData} className="btn-coment" type="submit">Actualizar Comentario</Button>
                </div>
            </Form>
        </div>
    )
}