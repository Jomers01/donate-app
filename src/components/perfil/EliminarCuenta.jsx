import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { getAuth, deleteUser } from "firebase/auth";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import IsAuthContext from '../../context/isAuthContext';

function EliminarCuenta({ currUserId}) {
  const MySwal = withReactContent(Swal);
  const authContext = useContext(IsAuthContext);

  const handleClick = e => {
    MySwal.fire({
      title: '¿Está seguro?',
      text: 'Esta acción es irrevertible y perderá todos sus datos.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#17b093',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Estoy seguro'
    }).then((result) => {
      const auth = getAuth();
      const user = auth.currentUser;

      //TODO: tomar id y borrar todos las donaciones de un usuario
      deleteUser(user).then(() => {
        console.log('usuario eliminado');
        authContext.setIsAuth(false);
      }).catch((error) => {
        console.log('ocurrió un error: ' + error);
      });

    });
  }

  return (
    <section className='deleteAccount'>
      <Button
        variant='danger'
        onClick={handleClick}
      >
        Eliminar mi cuenta
      </Button>
    </section>
  )
}

export default EliminarCuenta;
