import {React, Component, useState } from "react";
import { Link } from "react-router-dom";

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
import Modal from "./modal";
function App() {
    const [active,serActive] =useState(false);
}
const toggle = () => {
    
}
class Perfil extends Component{

    
    render(){
        var buttonClasses = "button--verde button--block"

        return(
            <div>
                <DocTitle pageTitle={"Perfil"}/>
                
                <Navbar></Navbar>
                <div className="block2">

                <Button type="submit" classes={buttonClasses} text="Perfil"/>
                <Button type="submit" classes={buttonClasses} text="Blogs"/>
                </div>
                <div className="block">
                    <div className="imagen__container">
                    <form className="register__form">
                        <img className="imagen__redonda"   src="https://i0.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?fit=342%2C200&ssl=1"></img>
                        <Button type="submit" classes={buttonClasses} text="Cambiar Imagen"/>

                        </form>
                     
                     </div>
                     
                    <div className="perfil__container">

                        <form className="register__form">
                            <Input type="text" placeholder="Nombre " focus={true}/>
                            <Input type="text" placeholder="Apellidos"/>
                            <Input type="text" placeholder="Sexo"/>
                            <Input type="number" placeholder="Edad"/>
                            <Input type="email" placeholder="Correo electronico"/>
                            <Button type="submit" classes={buttonClasses} text="Guardar"/>
             
                       </form>
            
                    </div>
              </div>
              
             <div id="portal" className="add">
             <button onClick={toggle} className="button_add">
              <img src={ add } alt="BlogHub" width="60px" height="60px"title="😎🎸" />
                </button>  
             </div>
            </div>
            
        )
    }

}

export default Perfil;