import {React, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import logo from '../../img/logo.png';

import Input from '../Input/input';
import Button from '../Button/button';
import Navbar from '../Navbar/navbar';
import Card from '../Card/card';

import Background from "../Background/background";

import '../../global/global.css';
import './blog.css';


export default function Blog() {
    let { id } = useParams();
    return(
        <div className="blog">
            <Navbar></Navbar>
            <div className="blog__container">
                <h5>Blog {id}</h5>
                
                <div className="blog__main">
                    <div className="blog__header">
                        <div className="blog__user">
                        </div>
                        <h2><span style={{color: 'var(--verde)'}}>#</span> Ejemplo </h2> 
                    </div> 
                    <div className="blog__body">
                        <p className="blog__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse temporibus nesciunt velit dolore optio quo facilis necessitatibus incidunt? Totam velit quod esse aliquam possimus assumenda dolorum sed enim odit.</p>
                    </div>
                    <div className="blog__footer">
                        <p className="blog__text blog__text--inline">@markzuckenberg</p>
                        <p className="blog__fecha blog__text--inline">26-05-2022</p>
                    </div>
                </div>  

                <h3>Comentarios (50)</h3>

            </div>

        </div>
    )

}
