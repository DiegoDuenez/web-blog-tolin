import {React,Component} from "react";
import { Link } from "react-router-dom";

import './categories.css';

import pet from '../../img/pet.png';
import art from '../../img/art.png';
import car from '../../img/car.png';
import tecnology from '../../img/tecnology.png';

import Navbar from '../Navbar/navbar';


class Categories extends Component{
    render() {
        return (
          <div>
            <Navbar></Navbar>
            <div className="div-container-category">
              <Link className="btn new-category" to="/categories/new-category">Crear categoría</Link>
            </div>
            <div className="card_list_div">
              <ul className="card_list_ul">
                <li className="card_list_li">
                  <div className="card_categories_div">
                  <a href="#" className="card_categories_a">
                    <img className="card_categories_img" src={ tecnology }  alt="tecnology"/>
                    <p>Tecnologia</p>
                  </a>
                  </div>
                </li>
                <li className="card_list_li">
                  <div className="card_categories_div">
                    <a href="#" className="card_categories_a">
                      <img className="card_categories_img" src={ car }  alt="car"/>
                      <p>Automóviles</p>
                    </a>
                  </div>
                </li>
                <li className="card_list_li">
                  <div className="card_categories_div">
                    <a className="card_categories_a">
                      <img className="card_categories_img" src={ art }  alt="art"/>
                      <p>Arte</p>
                    </a>
                  </div>
                </li>
                <li className="card_list_li">
                  <div className="card_categories_div">
                    <a className="card_categories_a">
                      <img className="card_categories_img" src={ pet }  alt="pet"/>
                      <p>Mascotas</p>
                    </a>
                  </div>
                </li>
                <li className="card_list_li">
                  <div className="card_categories_div">
                    <a className="card_categories_a">
                      <img className="card_categories_img" src={ pet }  alt="pet"/>
                      <p>Mascotas</p>
                    </a>
                  </div>
                </li>

                <li className="card_list_li">
                  <div className="card_categories_div">
                    <a href="#" className="card_categories_a">
                      <img className="card_categories_img" src={ pet }  alt="pet"/>
                      <p>Mascotas</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )
    }
}

export default Categories;
