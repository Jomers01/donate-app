import React from 'react';
import moment from 'moment';


function CardProducto({ producto }) {
  const testing = producto || {
    nombre: 'nombre del producto',
    autor: 'Jose Garcia',
    descripcion: '',
    disponible: true,
    idAutor: 'asasssadasdasdasasd',
    imagen: 'https://res.cloudinary.com/dpkaiokho/image/upload/v1632285887/donate-app/picture_1_unosme.png',
    fecha: '',
    votos: 0
  }

  const isNew = fecha => {
    const now = moment();
    const tmp = moment(fecha, 'MMMM DD YYYY, h:mm:ss a');
    return (now.diff(tmp, 'days') <= 2 ? true : false);
  }


  return (
    <div className='container-product-item'>
      <img className='img-product' src={testing.imagen} alt='product' />

      <div className='container-description'>
        <h2 className='title-product'> {testing.nombre}</h2>
        <div className='container-user'>
          <img className='img-usr' src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632284937/donate-app/profile_pkfyif.png' alt='usr' />
          <p className='text-name-user'> {testing.autor} </p>
        </div>

        <div className='container-details'>
          {/* <div className='container-pin'>
            <img className='img-pin' src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632287560/donate-app/pin_nkdoar.png' alt='pin' />
            <p className='text-pin'>3.5Km</p>
          </div> */}
          <div className='container-view'>
            <img className='img-view' src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632287786/donate-app/view_lapxtx.png' alt='view' />
            <p className='text-view'> VOTOS: {testing.votos} </p>
          </div>
          <p className='text-state' > {(isNew ? 'nuevo' : 'viejo')} </p>
        </div>
      </div>
    </div>
  )
}

export default CardProducto;
