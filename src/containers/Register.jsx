import React from 'react';
import Back from '../common/Back/Back';
import Logo from '../common/Logo/Logo';
import FormRegister from '../components/register/FormRegister';
import '../styles/register.css';

function Register() {
  return (
    <div className='container-register'>
      <Back to='/auth' />
      <Logo />
      <FormRegister />
    </div>
  )
}

export default Register;
