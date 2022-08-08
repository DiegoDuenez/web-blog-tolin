import { React, Component } from "react";
import NavbarAdministrator from "../Navbar/navbar";

import './users.css';

class UsersAdministrator extends Component{
    render(){
        return (
            <div>
                <NavbarAdministrator></NavbarAdministrator>
                <div className="center-table">
                    <table className="table">
                        <tr className="table-header">
                            <th>Nombre usuario</th>
                            <th>Correo electronico</th>
                            <th>Estatus</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Mr.Bean</td>
                            <td>mr.bean@email.com</td>
                            <td><input type="checkbox" name="usu_estatus"></input><label className="label-checkbox" for="usu_estatus">Activo</label></td>
                            <td><button className="btn-save" type="button">Guardar</button></td>
                        </tr>
                        <tr>
                            <td>PeterParker</td>
                            <td>parker@email.com</td>
                            <td><input type="checkbox" name="usu_estatus"></input><label className="label-checkbox" for="usu_estatus">Activo</label></td>
                            <td><button className="btn-save" type="button">Guardar</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default UsersAdministrator