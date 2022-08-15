import {React, useState} from "react";
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { BrowserRouter as useParams } from "react-router-dom";

import './post.css';

export default function DeletePost() {
//    let { id } = useParams();


    const postData = () => {
        axios.put('http://127.0.0.1:8000/api/Post/')
    }

    return(
        <div className="div-form-new-post">
            <Form className="form-new-post">
                <div className="form-new-post-footer">
                    <Button onClick={postData} className="btn-post" type="submit">Eliminar post</Button>
                </div>
            </Form>
        </div>
    )
}