import React from 'react'
import { Link } from 'react-router-dom';
import './Back.css';

function Back({ to }) {
  return (
    <div className='back'>
      <img
        className='back__img'
        src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632277154/donate-app/atras_xqhrgc.png'
        alt='icon-back'
      />
      <Link to={to} className='back__link'> Volver </Link>
    </div>
  )
}

export default Back;
