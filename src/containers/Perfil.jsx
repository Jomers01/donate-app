import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase';
import Back from '../common/Back/Back';
import Donaciones from '../components/perfil/Donaciones'
import EliminarCuenta from '../components/perfil/EliminarCuenta';
import Insignias from '../components/perfil/Insignias'
import UserInfo from '../components/perfil/UserInfo'
import '../styles/perfil.css';

function Perfil() {
  const [currDataUser, setCurrDataUser] = useState('');

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, user => {
      getDoc(doc(db, 'usuarios', user.uid))
        .then(data => {
          setCurrDataUser(data.data());
          console.log('Mi data _ Perfil.jsx: ');
          console.log(data.data());
        })
    });

  }, []);


  return (
    <section className='perfil-container'>
      <Back to='/' />
      <UserInfo currDataUser={currDataUser} />
      <Insignias insignias={currDataUser.Insignias} />
      <Donaciones donaciones={currDataUser.donaciones}/>
      <EliminarCuenta />
    </section>
  )
}

export default Perfil
