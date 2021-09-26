import React from 'react';
import CardProducto from '../../common/CardProducto/CardProducto';


function CardsContainer({ productos }) {
  console.log(productos);
  return (
    <div className='container-product'>
      {
        productos.map(producto => (
          <CardProducto producto={producto} key={producto.id} />
        ))
      }      
    </div>
  )
}

export default CardsContainer;
