import {React, Component } from "react";
import { Link } from "react-router-dom";

import video from '../../img/video.mp4';
import logo from '../../img/logo.png';

import Input from '../Input/input';
import Button from '../Button/button';
import DocTitle from "../DocTitle/doctitle";
import '../../global/global.css';
import './landing-page.css';



class Landing extends Component{

    render(){
        var buttonClasses = " button--white"

        return ( 
            <div className="landing">
                <DocTitle pageTitle={"Explora y comparte temas de interes"}/>

                <div className="landing__video">
                    <div className="landing__mask"></div>
                    <video src={ video }  loop muted ></video>
                    <div className="landing__content">
                        <div className="landing__logo">
                            <Link to="/">
                                <img src={ logo } alt="BlogHub" title="😎🎸" />
                            </Link>
                        </div>
                        <h1 className="landing__text--center">Explora y comparte temas de interes.</h1>
                        <p className="landing__text landing__text--md landing__text--center">
                            <em>" Lo primero que debe decidir cuando crea su blog es lo que quiere lograr con él y lo que puede hacer si tiene éxito. "</em> 
                        </p>
                        <div className="landing__buttons">
                           <Link to="/login">
                                <Button type="submit"  classes=" button--verde button--big" text="Iniciar Sesión" />
                           </Link>
                           <Link to="/registro">
                                <Button type="submit" classes=" button--white button--big" text="Registrarse"   />
                           </Link>
                        </div>
                    </div>
                </div>
                
            </div>
            
        )
    }

}


export default Landing;