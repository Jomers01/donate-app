import React from 'react';
import NavbarInicio from '../components/inicio/NavbarInicio';
import Filters from '../components/inicio/Filters';
import CardsContainer from '../components/inicio/CardsContainer';
import MenuInicio from '../components/inicio/MenuInicio';
import '../styles/inicio.css';

function Inicio() {
  return (
    <div className='container-inicio'>
      <div className='inicio-app'>
        <NavbarInicio />
        <Filters />
        <CardsContainer />
      </div>
      <MenuInicio />
    </div>
  )
}

export default Inicio;
