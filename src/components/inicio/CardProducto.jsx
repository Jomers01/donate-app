import React from 'react';

function CardProducto() {
  return (
    <div className='container-product-item'>
      <img className='img-product' src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632285887/donate-app/picture_1_unosme.png' alt='product' />
      <div className='container-description'>
        <h2 className='title-product'>Nombre del producto</h2>
        <div className='container-user'>
          <img className='img-usr' src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632284937/donate-app/profile_pkfyif.png' alt='usr' />
          <p className='text-name-user'>Jose Garcia</p>
        </div>
        <div className='container-details'>
          <div className='container-pin'>
            <img className='img-pin' src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632287560/donate-app/pin_nkdoar.png' alt='pin' />
            <p className='text-pin'>3.5Km</p>
          </div>
          <div className='container-view'>
            <img className='img-view' src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632287786/donate-app/view_lapxtx.png' alt='view' />
            <p className='text-view'>804</p>
          </div>
          <p className='text-state'>Nuevo</p>
        </div>
      </div>
    </div>
  )
}

export default CardProducto;
