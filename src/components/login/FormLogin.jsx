import React, { useState, useContext } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import IsAuthContext from '../../context/isAuthContext';
import useForm from '../../hooks/useForm';


function FormLogin() {
  const authContext = useContext(IsAuthContext);
  const [showPsw, setShowPsw] = useState(false);
  const [form, handleInputChange, resetForm] = useForm({ email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, form.email, form.password)
      .then( _ => {
        authContext.setIsAuth(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('No existe (usuario o contraseña incorrecta)');
      });

    resetForm();
  }

  return (
    <form className='form-login' onSubmit={handleSubmit}>
      <h1 className='title-login'>Nos alegra verte por aqui</h1>
      <input
        type='email'
        name='email'
        value={form.email}
        onChange={handleInputChange}
        placeholder='Correo'
        autoComplete='off'
        required
      />
      <input
        type={showPsw ? 'text' : 'password'}
        name='password'
        value={form.password}
        onChange={handleInputChange}
        placeholder='Contraseña'
        autoComplete='off'
        required
      />
      <label> Show
        <input type='checkbox' onChange={(e) => setShowPsw(e.target.checked)} />
      </label>

      <div className='container-btn-login'>
        <button className='btn-login'>Crear Cuenta</button>
        <p className='text-password'><a href='#'>¿Olvidaste la contraseña?</a></p>
      </div>
    </form>
  )
}

export default FormLogin;
