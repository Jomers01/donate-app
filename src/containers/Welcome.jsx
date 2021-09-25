import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo/Logo';
import '../styles/welcome.css';

function Welcome() {
  return (
    <div className='container-welcome'>
      <Logo />
      <p className='subtitle-app'>Regala amor, regala sonrisas</p>
      <div className='container-button'>
        <Link to='/auth/login'><button className='btn-iniciar'>Iniciar Sesión </button></Link>
        <p className='p-singup'>¿Aún no tienes cuenta? <Link to='/auth/register'>Registrate</Link></p>
      </div>
    </div>
  )
}

export default Welcome;
