import React from 'react';
import CardProducto from './CardProducto';

function CardsContainer() {
  return (
    <div className='container-product'>
      <CardProducto />
      <CardProducto />
      <CardProducto />
    </div>
  )
}

export default CardsContainer;
