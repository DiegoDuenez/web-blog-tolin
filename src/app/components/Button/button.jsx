import {React, Component } from "react";

import '../../global/global.css';
import './button.css';


class Button extends Component{

    render(){
        return ( 
            <button type={ this.props.type} className= { "button " + this.props.classes } >{ this.props.text}</button>
        )
    }

}

export default Button;