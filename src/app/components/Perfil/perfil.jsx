import {React, Component, useState } from "react";
import { Link } from "react-router-dom";
import FloatButton from "../../components/float-button/float-button";

import Input from '../Input/input';
import Button from '../Button/button';
import add from '../../img/add.GIF';
import Navbar from '../Navbar/navbar';
import TopList from "../TopList/top-list";
import Card from '../Card/card';
import DocTitle from "../DocTitle/doctitle";

import '../../global/global.css';
import './perfil.css';
import Background from "../Background/background";

class Perfil extends Component{

    
    render(){
        var buttonClasses = "button--verde button--block"

        return(
            <div>
                <DocTitle pageTitle={"Perfil"}/>
                <Navbar></Navbar>
                <h3 className="title">Mi perfil</h3>
                <div className="block">
                    <div className="perfil__container">
                        <form className="register__form">
                            <Input type="text" placeholder="Nombre " focus={true}/>
                            <Input type="email" placeholder="Correo electronico"/>
                            <Button type="submit" classes={buttonClasses} text="Guardar"/>
                       </form>
                    </div>
                </div>
                <FloatButton></FloatButton>
            </div>
            
        )
    }

}

export default Perfil;