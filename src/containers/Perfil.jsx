import React, { useState, useEffect, useContext } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase';
import Back from '../common/Back/Back';
import Donaciones from '../components/perfil/Donaciones'
import EliminarCuenta from '../components/perfil/EliminarCuenta';
import Insignias from '../components/perfil/Insignias'
import UserInfo from '../components/perfil/UserInfo'
import IsAuthContext from '../context/isAuthContext';
import '../styles/perfil.css';

function Perfil() {
  const [currDataUser, setCurrDataUser] = useState('');
  const authContext = useContext(IsAuthContext);

  useEffect(() => {
    getDoc(doc(db, 'usuarios', authContext.currUserBasicInfo.idUser))
      .then(data => {
        setCurrDataUser(data.data());
      })
  }, []);

  return (
    <section className='perfil-container'>
      <Back to='/' />
      <UserInfo currDataUser={currDataUser} />
      <Insignias insignias={currDataUser.Insignias} />
      <Donaciones donaciones={currDataUser.donaciones} />
      <EliminarCuenta />
    </section>
  )
}

export default Perfil
