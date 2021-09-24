import React, { useContext } from 'react';
import IsAuthContext from '../../context/isAuthContext';
import moment from 'moment';


function UserInfo() {
  const {activeUser} = useContext(IsAuthContext);
  const now = moment(activeUser.fecha_creacion, 'MMMM DD YYYY, h:mm:ss a').fromNow();

  return (
    <section>
      <div className='user-info'>
        <img
          src={activeUser.imagen}
          alt='mi-image'
          className='user-info__img'
        />
        <div className='user-info__data'>
          <p className='user-info__data__name'> {activeUser.nombre} </p>
          <p className='user-info__data__email' > {activeUser.correo} </p>
        </div>
      </div>

      <p className='user-contact'> <i className="far fa-envelope"></i> {activeUser.contactar} </p>
      <p className='user-time'> <i className="far fa-clock"></i> Te uniste {now} </p>
      {/* <i class="far fa-paper-plane"></i> */}
    </section>
  )
}

export default UserInfo;
