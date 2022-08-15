import {React, Component } from "react";
import { Link } from "react-router-dom";

import logo from '../../img/logo.png';

import Navbar from '../../components/Navbar/navbar';
import TopList from "../../components/TopList/top-list";
import Card from '../../components/Card/card';
import DocTitle from "../../components/DocTitle/doctitle";

import '../../global/global.css';
import './home.css';

class Home extends Component{
    render(){
        return(
            <div className="home">
                <DocTitle pageTitle={"Home"}/>
                <Navbar></Navbar>
                <div className="home__container home__container--end">
                    <div className="home__scroll">
                        <h2 className="home__title" >Blogs más recientes <i class="fa-solid fa-sparkles"></i> </h2>
                        <Card 
                            imgUser="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                            title="Ejemplo"
                            desc="Hola soy una descripcion"
                            date="21 - Mayo - 2022"
                            user="@diegoduenez"
                            id="1"
                        />
                        <Card 
                            imgUser="https://101noticias.com/wp-content/uploads/2022/05/220428154319-mark-zuckerberg-file-2021-super-tease.jpg"
                            title="Facebook"
                            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolores quas, ullam doloribus vel illum ex quasi animi odit! Blanditiis ipsa provident, inventore accusantium sapiente natus quibusdam facere reiciendis dolore!                            "
                            date="21 - Mayo - 2022"
                            user="@markZuckenberg"
                            id="2"

                        />
                        <Card 
                            imgUser="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                            title="Ejemplo"
                            desc="Hola soy una descripcion"
                            date="21 - Mayo - 2022"
                            user="@diegoduenez"
                            id="3"

                        />
                        <Card 
                            imgUser="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                            title="Ejemplo"
                            desc="Hola soy una descripcion"
                            date="21 - Mayo - 2022"
                            user="@diegoduenez"
                            id="4"

                        />
                        <Card 
                            imgUser="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                            title="Ejemplo"
                            desc="Hola soy una descripcion"
                            date="21 - Mayo - 2022"
                            user="@diegoduenez"
                            id="5"

                        />
                    </div>
                    <div className="home__container home__container--column">
                        <TopList title="Blogs más populares"/>
                        <TopList title="Categorías más populares"/>
                    </div>

                </div>
                
               
            </div>
        )
    }

}


export default Home;