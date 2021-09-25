import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalInsignia({ showModal, handleHideModal, infoInsignia }) {
  return (
    <Modal
      show={showModal}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          <p className='modal-title'> {infoInsignia.nombre} </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='modal-data'>
          <img className='modal-data__logo' src={infoInsignia.img} alt='logo insignia' />
          <p className='modal-data__info'> {infoInsignia.descripcion} </p>
        </div>
        <p className='modal-text'> Donaciones requeridas: {infoInsignia.numero} </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className='btn-insignia-modal'
          onClick={handleHideModal}
          variant='warning'
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalInsignia;
