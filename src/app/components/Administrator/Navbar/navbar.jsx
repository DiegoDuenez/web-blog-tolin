import { React, Component } from "react";
import './navbar.css';
import { Link } from "react-router-dom"; 

class NavbarAdministrator extends Component{
    
    render(){
        return (
        <nav className="navbar-administrator">
            <ul>
                <li>
                    <Link className="navbar-link" to="/administrator/users">Control de usuarios</Link>
                </li>
                <li>
                    <Link className="navbar-link" to="/administrator/blogs">Control de blogs</Link>
                </li>
                <li>
                    <div className="navbar-image">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" />
                        <a className="navbar-user-link" id="touch" href="#">Diego</a>
                    </div>
                </li>
            </ul>
        </nav>
        )
    }

}


export default NavbarAdministrator;