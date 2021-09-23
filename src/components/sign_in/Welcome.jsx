import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/welcome.css';

function Welcome() {
  return (
    <div className="container-welcome">
      <div className="container-title">
        <img className="icon-donate" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632274137/donate-app/icon-donate_qox6fj.png" alt="Logo-donate" />
        <p className="subtitle-app">Regala amor, regala sonrisas</p>
      </div>
      <div className="container-button">
        <Link to="/auth/login"><button className="btn-iniciar">Iniciar Sesión </button></Link>
        <p className="p-singup">¿Aún no tienes cuenta? <Link to="/auth/register">Registrate</Link></p>
      </div>
    </div>
  )
}

export default Welcome;
