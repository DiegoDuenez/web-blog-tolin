import {React, Component, useState } from "react";
import Input from '../Input/input';
import Button from '../Button/button';
import Navbar from '../Navbar/navbar';
import DocTitle from "../DocTitle/doctitle";
import './mysblogs.css'
import add from '../../img/add.GIF';

class mysblogs extends Component{

    render(){
        var buttonClasses = "button--blue button--block"
        var button = "button--white button--block"

        return(
       
       <div className="">
       
                <DocTitle pageTitle={"MysBlogs"}/>
                <Navbar></Navbar>
                <div className="blog__container">
                    <div className="blog__main">
                        <div className="me">
                            <img className="img" src="https://101noticias.com/wp-content/uploads/2022/05/220428154319-mark-zuckerberg-file-2021-super-tease.jpg"></img>
                                <div className="textos">
                                    <h2 className="text">Titulo </h2>
                                
                                    <h2 className="text">Descripcion </h2>
                                </div>
                        </div> 
                                <div className="ajustar__texto">
                                     <p className="nombre"> Yo </p>
                                     <b className="date">09-05-2022</b>
                                </div>
                                <div className="botones">

                                    <Button type="submit" classes={buttonClasses} text="Editar"/>
                                    <Button type="submit" classes={button} text="Borrar"/>
                                </div>  
                               
                    </div>  
                          
                 </div>
                             <button onclick="" className="button_add">
                                     <img src={ add } alt="BlogHub" width="60px" height="60px"title="😎🎸" />
                              </button>  
              </div>
            
         
        
        )
    }

}
export default mysblogs;