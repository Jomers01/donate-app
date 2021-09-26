import React from 'react';
import CardProducto from '../../common/CardProducto/CardProducto';


function CardsContainer({ productos }) {
  console.log(productos);
  return (
    <div className='container-product'>
      {
        productos.map((producto, idx) => (
          <CardProducto producto={producto} key={idx} />
        ))
      }      
    </div>
  )
}

export default CardsContainer;
