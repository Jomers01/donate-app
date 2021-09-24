import React, { useState, useContext } from 'react';
import useForm from '../../hooks/useForm';
import IsAuthContext from '../../context/isAuthContext';
import generateHash from '../../helpers/generateHash';
import Back from '../../common/Back/Back';
import '../../styles/login.css';


function Login({ usersDb }) {
  const authContext = useContext(IsAuthContext);
  const [showPsw, setShowPsw] = useState(false);
  const [form, handleInputChange, resetForm] = useForm({
    email: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    const userInfoDb = userExist();

    if (userInfoDb === undefined) {
      alert("No existe (usuario o contraseña incorrecta)"); //TODO:  eliminar
    } else {
      authContext.setIsAuth(true);
      authContext.setActiveUser(userInfoDb);
    }

    resetForm();
  }

  const handleShowPswChange = e => {
    setShowPsw(e.target.checked);
  }

  const userExist = () => {
    const hashingPsw = generateHash(form.password);
    console.log("Hash generado: " + hashingPsw);
    return usersDb.find(user => user.correo === form.email &&
      user.clave === hashingPsw);
  }

  return (
    <div className='container-register'>
      <div className='container-bacsk'>
        {/* <img src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632277154/donate-app/atras_xqhrgc.png' alt='icon-back' />
        <Link to='/auth'> Volver </Link> */}
        <Back to='/path' />
      </div>
      <div className='container-logo'>
        <img className='icon-donate-login' src='https://res.cloudinary.com/dpkaiokho/image/upload/v1632274137/donate-app/icon-donate_qox6fj.png' alt='Logo-donate' />
      </div>

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
          <input type='checkbox' onChange={handleShowPswChange} />
        </label>

        <div className='container-btn-login'>
          <button className='btn-login'>Crear Cuenta</button>
          <p className='text-password'><a href='#'>¿Olvidaste la contraseña?</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login;
