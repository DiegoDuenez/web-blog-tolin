import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

import logo from '../../img/logo.png';

import Input from '../Input/input';
import Button from '../Button/button';
import Navbar from '../Navbar/navbar';
import Card from '../Card/card';

import axios from 'axios';

import Background from "../Background/background";
import FloatButton from "../float-button/float-button";

import '../../global/global.css';
import './blog.css';
import DocTitle from "../DocTitle/doctitle";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

class Blog extends React.Component{

    state = {
        blog: [],
        coments:[],
        total:[],
        coment:''
    }


    async componentWillMount() {
        const id = this.props.params.id;
        const res = await axios.get('http://127.0.0.1:8000/api/Post/'+id)
        .then((response) => {
            //console.log(response)
            let array_response = [response.data.PostList];
            this.setState({
                blog: array_response[0],
            });
            
          });

        const res2 = await axios.get('http://127.0.0.1:8000/api/post/'+id+'/Comments')
        .then((response) => {
            //onsole.log(response)
            let array_response = [response.data.CommentsList];
            let totale = [response.data.total]
            //console.log(totale)
            this.setState({
                coments: array_response[0],
                total: totale[0]
            });
            
          });

          
          //console.log(res);
    }  

    handleSubmit = event => {
        var token = localStorage.getItem('token')
        event.preventDefault();
        const id = this.props.params.id;
        const comentario ={
            "description":this.state.coment
        }
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
          
        console.log(comentario)
        axios.post('http://127.0.0.1:8000/api/post/'+id+'/Comments/?token='+token,comentario,axiosConfig)
        .then((response) => {
            window.location.href = window.location.href;
          /*console.log(response);
          console.log(response.data); 
          console.log(this.state.coment)*/             
          });
        //console.log(this.state.coment)
    }

    handleChange = event =>{
        this.setState({ coment: event.target.value});
      }

   render(){
    //const {id} = this.props.match.params;
    return(
        <div>
            <DocTitle pageTitle={"Blog "  }/>
            <Navbar></Navbar>
            <div className="blog__container">
                
                <div className="blog__main">
                    <div className="blog__header">
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

                <h3>Comentarios ({this.state.total})</h3>

                
                {
			        this.state.coments.map((data) => 
                            (
                    <div key={data.id}>
                        <div className="comentario">
                    <div className="comentario__contenido">
                        <p className="comentario__username">@{data.user_id} <span className="comentario__text--gray">{data.created_at}</span></p>
                        <p>{data.description}</p>
                    </div>
                    </div>
                    </div>
 			            )
                        )
                       }
                
                <form onSubmit={this.handleSubmit}>
                <div className="comentario">
                    <div className="comentario__contenido comentario__contenido--end">
                        <textarea className="comentario__textarea" placeholder="Agrega un comentario..." onChange= {this.handleChange}></textarea>
                        <Button  type="submit" classes="button--verde" text="Comentar"/>
                    </div>
                </div>
                </form>

            </div>
            <FloatButton></FloatButton>
        </div>
    )
   }

}

export default Blog;