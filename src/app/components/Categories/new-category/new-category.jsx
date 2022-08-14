import {React, useState} from "react";
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

import './new-category.css';

export default function CreateCategory() {

    const [categoryName, setCategoryName] = useState('');

    const postData = () => {
        axios.post('http://127.0.0.1:8000/api/categorias', {
            "category_name":categoryName
        })
    }

    /*const postData = () =>{
        console.log(categoryName);
    }*/

    return(
        <div className="div-form-new-category">
            <Form>
                <Form.Field>
                    <input placeholder='Categoría' onChange={(e) => setCategoryName(e.target.value)}/>
                </Form.Field>
                <div className="div-btn-guardar">
                    <Button onClick={postData} className="btn-guardar" type="submit">Añadir</Button>
                </div>
            </Form>
        </div>
    )
}