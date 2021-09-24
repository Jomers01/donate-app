import React, { useContext } from 'react'
import moment from 'moment';
import IsAuthContext from '../../context/isAuthContext';

function Donaciones() {
  const {activeUser} = useContext(IsAuthContext);
  const allTimes = activeUser.donaciones.length;
  const last30days = activeUser.donaciones.filter(e => isCreateInLast30Days(e)).length;

  const isCreateInLast30Days = donacion => {
    const now = moment();
    const tmp = moment(donacion.fecha, 'MMMM DD YYYY, h:mm:ss a');
    return (now.diff(tmp) >= 30 ? true : false); 
  }

  return (
    <section>
      <h1 className='title'> Donaciones </h1>
      <div className='statistics'>
        <div className='container-statistic'>
          <p className='container-statistic__number'> {last30days} </p>
          <p className='container-statistic__title'> Últimos 30 días </p>
        </div>
        <div className='container-statistic'>
          <p className='container-statistic__number'> {allTimes} </p>
          <p className='container-statistic__title'> Total </p>
        </div>
      </div>
    </section>
  )
}

export default Donaciones;
