import React from 'react'

const Welcome = () => {
    return (
        <div className="container-welcome">
            <div className="container-title">
                <img className="icon-donate" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632274137/donate-app/icon-donate_qox6fj.png" alt="Logo-donate" />
                <p className="subtitle-app">Regala amor, regala sonrisas</p>
            </div>
            <div className="container-button">
                <button className="btn-iniciar">Iniciar Sesión</button>
                <p className="p-singup">¿Aún no tienes cuenta? <a href="/">Registrate</a> </p>
            </div>
        </div>
    )
}

export default Welcome
