import React, { useContext } from 'react';
import { getAuth } from 'firebase/auth';
import IsAuthContext from '../../context/isAuthContext';
import { Link } from 'react-router-dom';

function MenuInicio() {
  const auth = getAuth();
  const authContext = useContext(IsAuthContext);

  const singOut = async () => {
    auth.signOut().then(() => {
      console.log('good bye');
      authContext.setIsAuth(false);
    });
  }

  return (
    <div>
      <Link to='/crear'> <button className='btn btn-primary'> Crear </button> </Link>
      <br />
      <Link to='/mis-donaciones'><button className='btn btn-primary'> Mis Donaciones </button> </Link>
      <br />
      <Link to='/perfil'> <button className='btn btn-secondary'> Perfil </button> </Link>
      <br />
      <button className='btn btn-danger' onClick={singOut}> Cerrar Sesion </button>
    </div>
  )
}

export default MenuInicio;
