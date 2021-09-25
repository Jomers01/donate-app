import React from 'react';
import { Link } from 'react-router-dom';

function NavbarInicio() {
  return (
    <div className='container-nav-top'>
      <h3 className='title-inicio'>Inicio</h3>
      <div className='container-nav-top2'>
        <input type='text' placeholder='Buscar' />
        <img src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632281997/donate-app/information_htgpiy.png' alt='help' />
        <Link to='/perfil'>
          <img src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632282101/donate-app/menu_wo3klb.png' alt='menu' />
        </Link>
      </div>
    </div>
  )
}

export default NavbarInicio;
