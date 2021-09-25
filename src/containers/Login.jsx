import React from 'react';
import Back from '../common/Back/Back';
import Logo from '../common/Logo/Logo';
import FormLogin from '../components/login/FormLogin';
import '../styles/login.css';

function Login() {
  return (
    <div className='container-register'>
      <Back to='/path' />
      <Logo />
      <FormLogin />
    </div>
  )
}

export default Login;
