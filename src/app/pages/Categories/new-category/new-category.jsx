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