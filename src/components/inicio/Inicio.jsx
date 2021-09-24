import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/inicio.css';

function Inicio() {
  return (
    <div className="container-inicio">
      <div className="container-nav-top">
        <h3 className="title-inicio">Inicio</h3>
        <div className="container-nav-top2">
          <input type="text" placeholder="Buscar" />
          <img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632281997/donate-app/information_htgpiy.png" alt="help" />
          <Link to="/perfil">
            <img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632282101/donate-app/menu_wo3klb.png" alt="menu" />
          </Link>
        </div>
      </div>
      <div className="container-setting">
        <div className="setting"><img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632283568/donate-app/filter_aqz7qu.png" alt="setting" /></div>
        <div className="filter-food"><img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632283816/donate-app/apple-black-silhouette-with-a-leaf_imqgm9.png" alt="apple" /><p>Comida</p></div>
        <div className="filter-object"><img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632284168/donate-app/adjustable-lamp_cshqav.png" alt="object" /><p>No-comida</p></div>
        <div className="filter-available"><p>Disponible</p></div>
      </div>
      <div className="container-product">
        <div className="container-product-item">
          <img className="img-product" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632285887/donate-app/picture_1_unosme.png" alt="product" />
          <div className="container-description">
            <h2 className="title-product">Nombre del producto</h2>
            <div className="container-user">
              <img className="img-usr" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632284937/donate-app/profile_pkfyif.png" alt="usr" />
              <p className="text-name-user">Jose Garcia</p>
            </div>
            <div className="container-details">
              <div className="container-pin">
                <img className="img-pin" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632287560/donate-app/pin_nkdoar.png" alt="pin" />
                <p className="text-pin">3.5Km</p>
              </div>
              <div className="container-view">
                <img className="img-view" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632287786/donate-app/view_lapxtx.png" alt="view" />
                <p className="text-view">804</p>
              </div>
              <p className="text-state">Nuevo</p>
            </div>
          </div>
        </div>
        <div className="container-product-item">
          <img className="img-product" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632285887/donate-app/picture_1_unosme.png" alt="product" />
          <div className="container-description">
            <h2 className="title-product">Nombre del producto</h2>
            <div className="container-user">
              <img className="img-usr" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632284937/donate-app/profile_pkfyif.png" alt="usr" />
              <p className="text-name-user">Jose Garcia</p>
            </div>
            <div className="container-details">
              <div className="container-pin">
                <img className="img-pin" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632287560/donate-app/pin_nkdoar.png" alt="pin" />
                <p className="text-pin">3.5Km</p>
              </div>
              <div className="container-view">
                <img className="img-view" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632287786/donate-app/view_lapxtx.png" alt="view" />
                <p className="text-view">804</p>
              </div>
              <p className="text-state">Nuevo</p>
            </div>
          </div>
        </div>
        <div className="container-product-item">
          <img className="img-product" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632285887/donate-app/picture_1_unosme.png" alt="product" />
          <div className="container-description">
            <h2 className="title-product">Nombre del producto</h2>
            <div className="container-user">
              <img className="img-usr" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632284937/donate-app/profile_pkfyif.png" alt="usr" />
              <p className="text-name-user">Jose Garcia</p>
            </div>
            <div className="container-details">
              <div className="container-pin">
                <img className="img-pin" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632287560/donate-app/pin_nkdoar.png" alt="pin" />
                <p className="text-pin">3.5Km</p>
              </div>
              <div className="container-view">
                <img className="img-view" src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632287786/donate-app/view_lapxtx.png" alt="view" />
                <p className="text-view">804</p>
              </div>
              <p className="text-state">Nuevo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio;
