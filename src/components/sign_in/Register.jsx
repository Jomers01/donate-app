import React from 'react';
import '../../styles/register.css';

function Register() {
  return (
    <div className="container-register">
      <div className="container-back">
        <img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632277154/donate-app/atras_xqhrgc.png" alt="icon-back" />
        <p>Volver</p>
      </div>
      <div className="container-logo">
        <img className="icon-donate-register" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632274137/donate-app/icon-donate_qox6fj.png" alt="Logo-donate" />
      </div>
      <form className="form-register">
        <h1 className="title-register">Bienvenido a este hogar</h1>
        <input type="text" placeholder="Nombre Completo" />
        <input type="tel" placeholder="Teléfono" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <div className="container-btn-register">
          <button className="btn-register">Crear Cuenta</button>
          <p className="text-term">Al crear una cuenta acepta nuestros <a href="/">Terminos y condiciones</a> </p>
        </div>
      </form>
    </div>
  )
}

export default Register;
