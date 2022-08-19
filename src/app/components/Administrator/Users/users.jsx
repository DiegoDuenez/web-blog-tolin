import { React, Component } from "react";
import NavbarAdministrator from "../Navbar/navbar";

import axios from 'axios';

import './users.css';

class UsersAdministrator extends Component{
    state = {
        users: [],
    }
    async componentDidMount() {
        var token = localStorage.getItem('token')
        const res = await axios.get('http://127.0.0.1:8000/api/admin/users/?token='+token)
        .then((response) => {
            let array_response = [response.data.data];
            this.setState({
            users: array_response[0],
            });
          });
    }
    render(){
        return (
            <div>
                <NavbarAdministrator></NavbarAdministrator>
                <div className="center-table">
                    <table className="table">
                    <thead>
                        <tr className="table-header">
                            <th>Nombre usuario</th>
                            <th>Correo electronico</th>
                            <th>Estatus</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.users.map((data) => 
                            (<tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td><input type="checkbox" name="usu_estatus"></input></td>
                                <td><button className="btn-save" type="button">Guardar</button></td>
                        </tr>))
                       }
                       </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UsersAdministrator