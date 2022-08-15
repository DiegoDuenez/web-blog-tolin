import {React, useState} from "react";
import { Link, useNavigate} from "react-router-dom";


export default function Login(){

  const navigate = useNavigate()

  const cerrarSesion = () =>
  {
      localStorage.clear();
      navigate('/')
  }

  return (
    <h1></h1>
  )
}

