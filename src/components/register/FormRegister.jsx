import React, { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import db from '../../firebase';
import moment from 'moment';
import useForm from '../../hooks/useForm';


function FormRegister() {
  const [showPsw, setShowPsw] = useState(false);
  const [form, handleInputChange, resetForm] = useForm({
    name: '',
    tel: '',
    email: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    addUserToFirebase();
    resetForm();
  }

  const addUserToFirebase = async () => {
    const auth = getAuth();

    try {
      const newUser = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await setDoc(doc(collection(db, 'usuarios'), newUser.user.uid), {
        nombre: form.name,
        telefono: form.tel,
        contactar: '_RED SOCIAL PARA CONTACTAR_',
        fecha_creacion: moment().format('MMMM DD YYYY, h:mm:ss a'),
        imagen: 'https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=20',
        donaciones: 0,
        insignias: []
      });

    } catch (error) {
      //TODO: dependendiendo del error mostrarlo o no
      console.error('Ha ocurrido un error: ' + error);
    }
  }

  return (
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
        maxLength='15'
        required
      />
      <input
        type='email'
        name='email'
        value={form.email}
        onChange={handleInputChange}
        placeholder='Correo'
        autoComplete='off'
        maxLength='60'
        required
      />
      <input
        type={showPsw ? 'text' : 'password'}
        name='password'
        value={form.password}
        onChange={handleInputChange}
        placeholder='Contraseña'
        autoComplete='off'
        minLength='7'
        maxLength='30'
        required
      />
      <label> Show
        <input type='checkbox' onChange={(e) => setShowPsw(e.target.checked)} />
      </label>

      <div className='container-btn-register'>
        <button className='btn-register' type='submit'>Crear Cuenta</button>
        <p className='text-term'>Al crear una cuenta acepta nuestros <a href='/'>Terminos y condiciones</a> </p>
      </div>
    </form>
  )
}

export default FormRegister;
