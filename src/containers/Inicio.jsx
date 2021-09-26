import React, { useEffect, useState } from 'react';
import NavbarInicio from '../components/inicio/NavbarInicio';
import Filters from '../components/inicio/Filters';
import CardsContainer from '../components/inicio/CardsContainer';
import MenuInicio from '../components/inicio/MenuInicio';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';
import '../styles/inicio.css';

function Inicio() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getDocs(collection(db, 'productos'));
      const products = [];
      data.forEach(product => { products.push({ id: product.id, ...product.data() }) });
      setProductos(products);
    })();

  }, []);

  return (
    <div className='container-inicio'>
      <div className='inicio-app'>
        <NavbarInicio />
        <Filters />
        <CardsContainer productos={productos} />
      </div>
      <MenuInicio />
    </div>
  )
}

export default Inicio;
