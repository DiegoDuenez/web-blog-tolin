import {React, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import logo from '../../img/logo.png';

import Input from '../Input/input';
import Button from '../Button/button';
import Navbar from '../Navbar/navbar';
import Card from '../Card/card';

import axios from 'axios';

import Background from "../Background/background";

import '../../global/global.css';
import './blog.css';
import DocTitle from "../DocTitle/doctitle";


class Blog extends Component{

    id =2;
    state = {
        blog: [],
    }

    //const [count, setCount] = useState(0);

    async componentWillMount() {
       
        const res = await axios.get('http://127.0.0.1:8000/api/Post/1')
        .then((response) => {
            console.log(response)
            let array_response = [response.data.PostList];
            this.setState({
                blog: array_response[0],
            });
            
          });
          //console.log(res);
    }  

   render(){
    return(
        <div className="blog">
            <DocTitle pageTitle={"Blog " + this.id }/>
            <Navbar></Navbar>
            <div className="blog__container">
                
                <div className="blog__main">
                    <div className="blog__header">
                        <div className="blog__user">
                        </div>
                        <h2><span style={{color: 'var(--verde)'}}>#</span> Ejemplo </h2> 
                    </div> 
                    <div className="blog__body">
                        {
                              this.state.blog.map((data) => 
                              (
                                console.log("Hola")
                              )
                          )
                        
                       }
                    </div>
                    <div className="blog__footer">
                        <p className="blog__text blog__text--inline">@markzuckenberg</p>
                        <p className="blog__fecha blog__text--inline">26-05-2022</p>
                    </div>
                </div>  

                <h3>Comentarios (1)</h3>

                <div className="comentario">
                    <div className="comentario__user"></div>
                    <div className="comentario__contenido">
                        <p className="comentario__username">@markzuckenberg <span className="comentario__text--gray">1 week ago</span></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio quod explicabo eveniet beatae, a, nobis enim doloribus hic id, eum quibusdam asperiores accusamus rerum vel suscipit blanditiis? Totam, consectetur?</p>
                    </div>
                </div>

                <div className="comentario">
                    <div className="comentario__user"></div>
                    <div className="comentario__contenido comentario__contenido--end">
                        <textarea className="comentario__textarea" placeholder="Agrega un comentario..."></textarea>
                        <Button  type="submit" classes="button--verde" text="Comentar"/>
                    </div>
                </div>




            </div>

        </div>
    )
   }

}

export default Blog;