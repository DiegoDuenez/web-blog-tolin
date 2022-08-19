import {React,Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import './categories.css';

import pet from '../../img/pet.png';
import art from '../../img/art.png';
import car from '../../img/car.png';
import tecnology from '../../img/tecnology.png';

import Navbar from '../../components/Navbar/navbar';
import FloatButton from "../../components/float-button/float-button";


class Categories extends Component{
  state = {
    categories: []
  }
  async componentWillMount() {
    const res = await axios.get('http://127.0.0.1:8000/api/categorias')
    .then((response) => {
        console.log(response)
        let array_response = [response.data.data];
        console.log(array_response);
        this.setState({
          categories: array_response[0],
        });
        
      });
      console.log(this.state.categories)
      //console.log(res);
    }
    render() {
        return (
          <div>
            <Navbar></Navbar>
            <div className="div-container-category">
              <Link className="btn new-category" to="/categories/new-category">Crear categoría</Link>
            </div>
            <div className="card_list_div">
              <ul className="card_list_ul">
                
              {
                        this.state.categories.map((data) => 
                            (
                            <li className="card_list_li" key={data.id}>
                            <div className="card_categories_div">
                            <a href="#" className="card_categories_a">
                              <img className="card_categories_img" src={ tecnology }  alt="tecnology"/>
                              <p>{data.category_name}</p>
                            </a>
                            </div>
                          </li>
                            )
                        )
                        
                       }
              </ul>
            </div>
            <FloatButton></FloatButton>
          </div>
        )
    }
}

export default Categories;
