import React, { useContext } from 'react';
import { getAuth } from 'firebase/auth';
import IsAuthContext from '../../context/isAuthContext';

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
      <button className='btn btn-danger' onClick={singOut}> Cerrar Sesion </button>
    </div>
  )
}

export default MenuInicio;
