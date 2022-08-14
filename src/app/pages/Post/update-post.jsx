import {React, useState} from "react";
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

import './post.css';

export default function Createpost() {

    const [title, setpostName] = useState('');
    const [description, set_description] = useState('');
    const [user_id, set_user_id] = useState('');


    const putData = () => {
        axios.put('http://127.0.0.1:8000/api/Post', {
            "title":title,
            "description":description,
            "user_id":user_id
        })
    }

    return(
        <div className="div-form-new-post">
            <Form>
                <Form.Field>
                <input onChange={(e) => setpostName(e.target.value)} placeholder='Nombre del Post'/>
                    <input onChange={(e) => set_description(e.target.value)} placeholder='Descripcion'/>
                    <input onChange={(e) => set_user_id(e.target.value)} placeholder='usuario Id'/>

                </Form.Field>


                <div className="div-btn-post">
                    <Button onClick={putData} className="btn-post" type="submit">Actualizar post</Button>
                </div>
            </Form>
        </div>
    )
}