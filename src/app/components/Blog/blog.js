import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

import logo from '../../img/logo.png';
import Swal from 'sweetalert2'

import Input from '../Input/input';
import Button from '../Button/button';
import Navbar from '../Navbar/navbar';
import Card from '../Card/card';

import axios from 'axios';

import Background from "../Background/background";

import '../../global/global.css';
import './blog.css';
import DocTitle from "../DocTitle/doctitle";
import { Form } from 'semantic-ui-react'


class Blog extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
          blog:[],
          value: 'Escribe algo.',
          coments:[],
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        
        this.new_comment(this.state.value)
        event.preventDefault();
      }
    
      async new_comment(description) {
        const id_user =localStorage.getItem("idUsername")
        const blog_id = this.props.params.id;
        axios.post('http://127.0.0.1:8000/api/Comments', {
            
            "description":description,
            'post_id':blog_id,
            'user_id':id_user
        }).then((res) => {
            Swal.fire({
                    icon: 'success',
                    title: 'Se Inserto Correctamente',
                    showConfirmButton: false,
                    timer: 1500
                  }).then(() => {
                    window.location.reload();
                  })
                
        
                //console.log(token)
            })
        console.log("texto"+description);
        console.log("usuario"+id_user)
        console.log( "blog"+blog_id)
    }
    async componentWillMount() {

        const blog_id = this.props.params.id;
        const res = await axios.get('http://127.0.0.1:8000/api/Post/'+blog_id)
        .then((response) => {
            console.log(response)
            let array_response = [response.data.PostList];
            this.setState({
                blog: array_response[0],
            });
            
          });
          console.log(this.state.blog)
           
         
          
          //console.log(res);
    }
   
   
    

   render(){
    
    //const {id} = this.props.match.params;
    return(
        <div className="blog">
            <DocTitle pageTitle={"Blog "  }/>
            <Navbar></Navbar>
            <div className="blog__container">
                
                <div className="blog__main">
                    <div className="blog__header">
                        <div className="blog__user">
                        </div>
                        <h2><span style={{color: 'var(--verde)'}}>#</span> {this.state.blog.title} </h2> 
                    </div> 
                    <div className="blog__body">
                        <p>
                            {this.state.blog.description}
                         </p>
                     </div>
                    <div className="blog__footer">
                        <p className="blog__text blog__text--inline">@{this.state.blog.user_id}</p>
                        <p className="blog__fecha blog__text--inline">{this.state.blog.created_at}</p>
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
                    <form onSubmit={this.handleSubmit}>
                        <textarea value={this.state.value} onChange={this.handleChange}  className="comentario__textarea" placeholder="Agrega un comentario..." />
                        <Button  type="submit" value="Submit" classes="button--verde" text="Comentar"/>
                    </form>

                    </div>
                </div>

              
              
            </div>

        </div>
    )
   }

}

export default Blog;

