import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import useForm from '../../hooks/useForm';
import generateHash from '../../helpers/generateHash';
import db from '../../firebase';
import '../../styles/register.css';

function Register({ usersDb }) {
  const [showPsw, setShowPsw] = useState(false);
  const [form, handleInputChange, resetForm] = useForm({
    name: '',
    tel: '',
    email: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (userExist()) alert('usuario ya existe');
    else addUserToFirebase();

    resetForm();
  }

  const addUserToFirebase = async () => {
    try {
      const docRef = await addDoc(collection(db, 'usuarios'), {
        nombre: form.name,
        telefono: form.tel,
        correo: form.email,
        clave: form.password,
        productos: []
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  const handleShowPswChange = e => {
    setShowPsw(e.target.checked);
  }

  const userExist = () => {
    const hashingPsw = generateHash(form.password);
    console.log('Hash generado: ' + hashingPsw);
    return usersDb.some(user => user.correo === form.email &&
      user.clave === hashingPsw);
  }

  return (
    <div className='container-register'>
      <div className='container-back'>
        <img src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632277154/donate-app/atras_xqhrgc.png' alt='icon-back' />
        <Link to='/auth'> Volver </Link>
      </div>
      <div className='container-logo'>
        <img className='icon-donate-register' src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632274137/donate-app/icon-donate_qox6fj.png' alt='Logo-donate' />
      </div>
      <form className='form-register' onSubmit={handleSubmit}>
        <h1 className='title-register'>Bienvenido a este hogar</h1>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleInputChange}
          placeholder='Nombre Completo'
          autoComplete='off'
          required
        />
        <input
          type='tel'
          name='tel'
          value={form.tel}
          onChange={handleInputChange}
          placeholder='Teléfono'
          autoComplete='off'
          required
        />
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
          <input type='checkbox' onChange={handleShowPswChange} />
        </label>

        <div className='container-btn-register'>
          <button className='btn-register' type='submit'>Crear Cuenta</button>
          <p className='text-term'>Al crear una cuenta acepta nuestros <a href='/'>Terminos y condiciones</a> </p>
        </div>
      </form>
    </div>
  )
}

export default Register;
