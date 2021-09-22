import React from 'react'

const Login = () => {
    return (
        <div className="container-register">
            <div className="container-back">
                <img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632277154/donate-app/atras_xqhrgc.png" alt="icon-back" />
                <p>Volver</p>
            </div>
            <div className="container-logo">
                <img className="icon-donate-login" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632274137/donate-app/icon-donate_qox6fj.png" alt="Logo-donate" />
            </div>
            <form className="form-login">
                <h1 className="title-login">Nos alegra verte por aqui</h1>
                <input type="email" placeholder="Correo" />
                <input type="password" placeholder="Contraseña" />
                <div className="container-btn-login">
                    <button className="btn-login">Crear Cuenta</button>
                    <p className="text-password"><a href="/">¿Olvidaste la contraseña?</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login
