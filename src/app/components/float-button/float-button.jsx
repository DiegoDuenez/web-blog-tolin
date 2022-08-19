import {React, Component } from "react";
import { Link } from "react-router-dom"; 
import { MdForum, MdHomeFilled, MdTravelExplore } from "react-icons/md";

import './float-button.css';

class FloatButton extends Component {
    render(){
        return(
            <div id="container-floating">                              
                <div class="nd1 nds">
                    <Link to="/">
                        <MdForum color="white" class="reminder"/>
                    </Link>
                </div>

                <div class="nd3 nds">
                    <Link to="/categories">
                        <MdTravelExplore color="white" class="reminder"></MdTravelExplore>
                    </Link>
                </div>

                <div id="floating-button">
                    <p class="plus">+</p>
                    <Link to="/home">
                        <MdHomeFilled color="white" class="edit"/>
                    </Link>
                </div>
            </div>
        )
    }
}

export default FloatButton;