import React from 'react';
import moment from 'moment';

function UserInfo({ currDataUser }) {
  const now = moment(currDataUser.fecha_creacion, 'MMMM DD YYYY, h:mm:ss a').fromNow();

  return (
    <section>
      <div className='user-info'>
        <img
          src={currDataUser.imagen}
          alt='mi imagen'
          className='user-info__img'
        />
        <div className='user-info__data'>
          <p className='user-info__data__name'> {currDataUser.nombre} </p>
          <p className='user-info__data__email' > {currDataUser.correo} </p>
        </div>
      </div>

      <p className='user-contact'>
        <i className='far fa-paper-plane'></i>
        {currDataUser.contactar}
      </p>
      <p className='user-time'>
        <i className='far fa-envelope'></i>
        Te uniste {now}
      </p>
    </section>
  )
}

export default UserInfo;
