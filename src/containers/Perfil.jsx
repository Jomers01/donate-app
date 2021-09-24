import React from 'react'
import Back from '../common/Back/Back';
import Donaciones from '../components/perfil/Donaciones'
import EliminarCuenta from '../components/perfil/EliminarCuenta';
import Insignias from '../components/perfil/Insignias'
import UserInfo from '../components/perfil/UserInfo'
import '../styles/perfil.css';

function Perfil() {
  return (
    <section className='perfil-container'>
      <Back to='/'/>
      <UserInfo />
      <Insignias />
      <Donaciones />
      <EliminarCuenta />
    </section>
  )
}

export default Perfil
