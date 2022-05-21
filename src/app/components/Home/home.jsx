import {React, Component } from "react";
import { Link } from "react-router-dom";

import logo from '../../img/logo.png';

import Navbar from '../Navbar/navbar';
import Card from '../Card/card';

import '../../global/global.css';
import './home.css';



class Home extends Component{

    render(){
        return(
            <div className="home">
                <Navbar></Navbar>
                <div className="home__scroll">
                    <Card 
                        imgUser="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        title="Ejemplo"
                        desc="Hola soy una descripcion"
                        date="21 - Mayo - 2022"
                        user="@diegoduenez"
                    />
                    <Card 
                        imgUser="https://101noticias.com/wp-content/uploads/2022/05/220428154319-mark-zuckerberg-file-2021-super-tease.jpg"
                        title="Facebook"
                        desc="Hola soy Mark, depositame $5000"
                        date="21 - Mayo - 2022"
                        user="@markZuckenberg"
                    />
                    <Card 
                        imgUser="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        title="Ejemplo"
                        desc="Hola soy una descripcion"
                        date="21 - Mayo - 2022"
                        user="@diegoduenez"
                    />

                    
                </div>
               
            </div>
        )
    }

}


export default Home;