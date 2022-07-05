import {React, Component } from "react";
import NavbarAdministrator from "../Navbar/navbar";

import './blogs.css';


class BlogsAdministrator extends Component{
    render(){
        return (
            <div>
                <NavbarAdministrator></NavbarAdministrator>
                <div className="table-center">
                    <table className="table-border">
                        <tr>
                            <th className="table-head">Nombre usuario</th>
                            <th className="table-head">Correo electronico</th>
                            <th className="table-head">Estatus</th>
                        </tr>
                        <tr>
                            <td className="table-border">Mr.Bean</td>
                            <td className="table-border">mr.bean@email.com</td>
                            <td className="table-border"><input type="checkbox" name="usu_estatus"></input><label className="label-checkbox" for="usu_estatus">Activo</label></td>
                        </tr>
                        <tr>
                            <td className="table-border">PeterParker</td>
                            <td className="table-border">parker@email.com</td>
                            <td className="table-border"><input type="checkbox" name="usu_estatus"></input><label className="label-checkbox" for="usu_estatus">Activo</label></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default BlogsAdministrator