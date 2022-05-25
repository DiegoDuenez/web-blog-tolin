import {React, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import logo from '../../img/logo.png';

import Input from '../Input/input';
import Button from '../Button/button';

import Background from "../Background/background";

import '../../global/global.css';
import './blog.css';

/*
export default class Blog extends Component{

    render(){

        return(
           <h5>Blog {this.props.match.params.id}</h5>
        )

    }

}*/


export default function Blog() {
    let { id } = useParams();
    return(
        <h5>Blog {id}</h5>
    )

}
