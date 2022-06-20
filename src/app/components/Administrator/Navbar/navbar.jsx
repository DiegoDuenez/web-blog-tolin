import { React, Component } from "react";
import './navbar.css';
import { Link } from "react-router-dom"; 

class NavbarAdministrator extends Component{

    render(){
        return (
        <nav className="navbar">
            <a>
                <Link className="navbar__link" to="/administrator/users">Control de usuarios</Link>
            </a>
            <a>
                <Link className="navbar__link" to="/administrator/blogs">Control de blogs</Link>
            </a>

            <div className="navbar__image">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" />
                <a className="navbar__link" href="#">
                    Diego
                </a>
            </div>
        </nav>)
    }

}


export default NavbarAdministrator;