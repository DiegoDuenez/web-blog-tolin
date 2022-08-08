import {React, Component } from "react";
import NavbarAdministrator from "../Navbar/navbar";

import './blogs.css';


class BlogsAdministrator extends Component{
    render(){
        return (
            <div>
                <NavbarAdministrator></NavbarAdministrator>
                <div className="center-table">
                    <table className="table">
                        <tr className="table-header">
                            <th>Titulo</th>
                            <th>Usuario</th>
                            <th>Comentarios</th>
                            <th>Fecha de publicacion</th>
                            <th>Estatus</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Nuevo sistema operativo</td>
                            <td>mr.bean@email.com</td>
                            <td>10</td>
                            <td>02/08/2022</td>
                            <td><input type="checkbox" name="usu_estatus"></input><label className="label-checkbox" for="usu_estatus">Activo</label></td>
                            <td><button className="btn-deactivate" type="button">Desactivar</button></td>
                        </tr>
                        <tr>
                            <td>Windows</td>
                            <td>parker@email.com</td>
                            <td>2</td>
                            <td>08/08/2022</td>
                            <td><input type="checkbox" name="usu_estatus"></input><label className="label-checkbox" for="usu_estatus">Activo</label></td>
                            <td><button className="btn-deactivate" type="button">Desactivar</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default BlogsAdministrator