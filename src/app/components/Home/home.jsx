import {React, Component } from "react";
import { Link } from "react-router-dom";

import logo from '../../img/logo.png';

import Input from '../Input/input';
import Button from '../Button/button';
import Navbar from '../Navbar/navbar';
import Background from "../Background/background";

import '../../global/global.css';
import './home.css';



class Home extends Component{

    render(){
        return(
            <div className="home">
                <Navbar></Navbar>
                <h2>Home</h2>
            </div>
        )
    }

}


export default Home;