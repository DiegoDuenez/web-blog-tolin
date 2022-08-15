import {React, useState} from "react";
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { BrowserRouter as useParams } from "react-router-dom";

import './coment.css';

export default function CreateComent() {
//    let { id } = useParams();

    const postData = () => {
        axios.delete('http://127.0.0.1:8000/api/Comments/')
    }

    return(
        <div className="div-form-coment">
            <Form className="form-coment">
                <div className="form-coment-footer">
                    <Button onClick={postData} className="btn-coment" type="submit">Eliminar Comentario</Button>
                </div>
            </Form>
        </div>
    )
}