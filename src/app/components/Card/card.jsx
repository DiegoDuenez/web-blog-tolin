import {React, Component } from "react";
import { Link } from "react-router-dom";

import Background from "../Background/background";

import '../../global/global.css';
import './card.css';



class Home extends Component{

    render(){
        return(
            <div className="card">
                <div className="card__header">
                    <div className="card__user">
                        <img src={ this.props.imgUser } alt="imgUser" />
                        <p>{ this.props.user }</p>
                    </div>
                    <div className="card__info">
                        <h3>{ this.props.title }</h3>
                        <p>{ this.props.desc }</p>
                    </div>
                </div>
                <div className="card__footer">
                    <p>{ this.props.date }</p>
                </div>
            </div>
        )
    }

}


export default Home;