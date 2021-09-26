import React from 'react';
import CardProducto from '../../common/CardProducto/CardProducto';


function CardsContainer({ products }) {
  console.log(products);
  return (
    <div className='container-product'>
      <CardProducto />
      <CardProducto />
      <CardProducto />
    </div>
  )
}

export default CardsContainer;
