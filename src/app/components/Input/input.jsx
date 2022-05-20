import {React, Component } from "react";

import '../../global/global.css';
import './input.css';


class Input extends Component{

    render(){
        return ( 
            <input type = { this.props.type } className="input" placeholder={ this.props.placeholder } autoFocus={this.props.focus} />
        )
    }

}

export default Input;