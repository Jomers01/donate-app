import React from 'react';

function Filters() {
  return (
    <div className='container-setting'>
      <div className='setting'><img src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632283568/donate-app/filter_aqz7qu.png' alt='setting' /></div>
      <div className='filter-food'><img src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632283816/donate-app/apple-black-silhouette-with-a-leaf_imqgm9.png' alt='apple' /><p>Comida</p></div>
      <div className='filter-object'><img src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632284168/donate-app/adjustable-lamp_cshqav.png' alt='object' /><p>No-comida</p></div>
      <div className='filter-available'><p>Disponible</p></div>
    </div>
  )
}

export default Filters;
