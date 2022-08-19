import {React, Component } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';

import logo from '../../img/logo.png';

import Navbar from '../../components/Navbar/navbar';
import TopList from "../../components/TopList/top-list";
import Card from '../../components/Card/card';
import DocTitle from "../../components/DocTitle/doctitle";

import '../../global/global.css';
import './home.css';
import FloatButton from "../../components/float-button/float-button";

class Home extends Component{
    state = {
        blogs: [],
    }
    async componentWillMount() {
        const res = await axios.get('http://127.0.0.1:8000/api/Post')
        .then((response) => {
            let array_response = [response.data.postList];
            this.setState({
            blogs: array_response[0],
            });
            
           
          });
        
        //this.setState({blogs: res.data});
        //console.log(this.state.blogs);
    }
    render(){
        return(
            <div className="home">
                <DocTitle pageTitle={"Home"}/>
                <Navbar></Navbar>
                <div className="home__container home__container--end">
                    <div className="home__scroll">
                        <h2 className="home__title" >Blogs más recientes <i class="fa-solid fa-sparkles"></i> </h2>
                       {
                        this.state.blogs.map((data) => 
                            (
                            <Card 
                            id={data.id}
                            key={data.id}
                            title={data.title}
                            desc={data.description}
                            date={data.created_at}
                            user={"@"+data.user_id}
                                 />
                            )
                        )
                        
                       }
                       
                    </div>
                </div>
                <FloatButton></FloatButton>
            </div>
        )
    }

}


export default Home;