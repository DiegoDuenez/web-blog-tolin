import {React, useState} from "react";
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

import './coment.css';

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
        <div className="div-form-new-coment">
            <Form>
                <Form.Field>
                    <input onChange={(e) => setComentName(e.target.value)} placeholder='Comentario'/>
                    <input onChange={(e) => set_id_post(e.target.value)} placeholder='Id post'/>
                    <input onChange={(e) => set_id_user(e.target.value)} placeholder='Id user'/>

                </Form.Field>


                <div className="div-btn-comentario">
                    <Button onClick={postData} className="btn-comentario" type="submit">Actualizar Comentario</Button>
                </div>
            </Form>
        </div>
    )
}