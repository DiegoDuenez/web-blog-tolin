import {React, Component } from "react";
import { Link } from "react-router-dom";

import logo from '../../img/logo.png';

import Input from '../Input/input';
import Button from '../Button/button';
import Background from "../Background/background";

import '../../global/global.css';
import './top-list.css';



class TopList extends Component{

    render(){

        var data = this.props.data

        return ( 

            <div className="top-list">
                <div className="top-list__header">
                    {this.props.title } 
                </div>
                <div className="top-list__item" >
                   <div className="top-list__text" title="Programación chida">Programación chida </div> <div className="top-list__phill top-list__phill--gold" title="255">255</div>
                </div>
                <div className="top-list__item" >
                   <div className="top-list__text" title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. ossimus fugit, voluptat.">Lorem ipsum dolor sit, amet consectetur adipisicing elit. ossimus fugit, voluptat. </div> <div className="top-list__phill top-list__phill--silver" title="40">40</div>
                </div>
                <div className="top-list__item" >
                   <div className="top-list__text" title="Programación">Computadoras</div> <div className="top-list__phill top-list__phill--bronze" title="10">10</div>
                </div>
                <div className="top-list__item" >
                   <div className="top-list__text" title="Otra cosa">Otra cosa </div> <div className="top-list__phill" title="5" >5</div>
                </div>
                <div className="top-list__item" >
                   <div className="top-list__text" title="kaka">kaka </div> <div className="top-list__phill" title="2">2</div>
                </div>
                
            </div>
           
        )
    }

}


export default TopList;