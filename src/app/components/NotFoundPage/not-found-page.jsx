import {React, Component } from "react";
import { Link } from "react-router-dom";

import videoPerdido from '../../img/videoPerdido.mp4';
import Button from '../Button/button';
import DocTitle from "../DocTitle/doctitle";
import '../../global/global.css';
import './not-found-page.css';



export default class NotFoundPage extends Component{

    render(){

        return(
           <div className="nfp">
                <DocTitle pageTitle={"404"}/>
                <div className="nfp__container">
                    <h2>404</h2>
                    <h3>OPPS! ESTÁ PAGINA NO FUE ENCONTRADA</h3>

                    <Link to="/home">
                        <Button type="button"  classes=" button--verde button--big" text="Regresar" />
                    </Link>
                </div>
                
           </div>
        )

    }
}
