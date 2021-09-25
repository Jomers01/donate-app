import React from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function EliminarCuenta() {
  const MySwal = withReactContent(Swal);

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
      alert('ELIMINAR USER');
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
