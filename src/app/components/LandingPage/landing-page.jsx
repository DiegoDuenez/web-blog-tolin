import {React, Component } from "react";
import { Link } from "react-router-dom";

import video from '../../img/video.mp4';

import Input from '../Input/input';
import Button from '../Button/button';

import '../../global/global.css';
import './landing-page.css';



class Landing extends Component{

    render(){
        return ( 
            <div className="landing">

                <div className="landing__video">
                    <div className="landing__mask"></div>
                    <video src={video} autoPlay loop muted ></video>
                    <div className="landing__content">
                        <h1>Welcome to ...</h1>
                    </div>
                </div>
                
                <h2>Ola</h2>
                
            </div>
            
        )
    }

}


export default Landing;