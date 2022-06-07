import {React, Component } from "react";
import { Link } from "react-router-dom";

import logo from '../../img/logo.png';

import Navbar from '../Navbar/navbar';
import TopList from "../TopList/top-list";
import Card from '../Card/card';
import DocTitle from "../DocTitle/doctitle";

import '../../global/global.css';
import './perfil.css';
import Background from "../Background/background";


class Perfil extends Component{

    
    render(){
        return(
            <div>
                <DocTitle pageTitle={"Perfil"}/>
                <Navbar></Navbar>

                <h2>Perfil works!</h2>
            </div>
        )
    }

}

export default Perfil;