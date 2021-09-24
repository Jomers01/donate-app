import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { doc, deleteDoc } from "firebase/firestore";
import db from '../../firebase';
import IsAuthContext from '../../context/isAuthContext';

const MySwal = withReactContent(Swal);

function EliminarCuenta() {
  const authContext = useContext(IsAuthContext);

  const handleClick = e => {
    MySwal.fire({
      title: '¿Está seguro?',
      text: "Esta acción es irrevertible y perderá todos sus datos.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#17b093',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Estoy seguro'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(authContext.activeUser.id);
      }
    });
  }

  const deleteUser = id => {
    deleteDoc(doc(db, 'usuarios', id))
      .then( _ => { authContext.setIsAuth(false) });
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
