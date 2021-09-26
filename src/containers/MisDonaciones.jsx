import React, { useContext, useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import db from '../firebase';
import IsAuthContext from '../context/isAuthContext';
import CardProducto from '../common/CardProducto/CardProducto';
import Back from '../common/Back/Back';

function MisDonaciones() {
  const [myProducts, setMyProducts] = useState([]);
  const authContext = useContext(IsAuthContext);

  useEffect(() => {
    (async () => {
      const q = query(collection(db, 'productos'), where('idAutor', '==', authContext.currUserBasicInfo.idUser));
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setMyProducts(data);
    })();
  }, [])

  return (
    <div>
      <Back to='/' />
      <h1> Mis donaciones </h1>
      {
        myProducts.map(product => (
          <CardProducto producto={product} />
        ))
      }
    </div>
  )
}

export default MisDonaciones;
