import {React} from "react";
import { useNavigate} from "react-router-dom";


export default function Login(){

  const navigate = useNavigate()

  const cerrarSesion = () =>
  {
      localStorage.clear();
      navigate('/')
  }

  return (
    <div>
      <h1>hola</h1>
      {cerrarSesion}
    </div>
    
  
  )
}

