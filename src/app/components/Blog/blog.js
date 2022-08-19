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


class Blog extends React.Component{

    state = {
        blog: [],
        coments:[],
        total:[]
    }


    async componentWillMount() {
        const id = this.props.params.id;
       
        const res = await axios.get('http://127.0.0.1:8000/api/Post/'+id)
        .then((response) => {
            console.log(response)
            let array_response = [response.data.PostList];
            this.setState({
                blog: array_response[0],
            });
            
          });

        const res2 = await axios.get('http://127.0.0.1:8000/api/post/'+id+'/Comments')
        .then((response) => {
            console.log(response)
            let array_response = [response.data.CommentsList];
            let totale = [response.data.total]
            console.log(totale)
            this.setState({
                coments: array_response[0],
                total: totale[0]
            });
            
          });
          console.log(this.state.coments)
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

                <h3>Comentarios ({this.state.total})</h3>

                
                {
			        this.state.coments.map((data) => 
                            (
                    <div key={data.id}>
                        <div className="comentario">
                    <div className="comentario__user" ></div>
                    <div className="comentario__contenido">
                        <p className="comentario__username">@{data.user_id} <span className="comentario__text--gray">{data.created_at}</span></p>
                        <p>{data.description}</p>
                    </div>
                    </div>
                    </div>
 			            )
                        )
                       }
                

                <div className="comentario">
                    <div className="comentario__user"></div>
                    <div className="comentario__contenido comentario__contenido--end">
                        <textarea className="comentario__textarea" placeholder="Agrega un comentario..."></textarea>
                        <Button  type="submit" classes="button--verde" text="Comentar"/>
                    </div>
                </div>




            </div>
            <FloatButton></FloatButton>
        </div>
    )
   }

}

export default Blog;