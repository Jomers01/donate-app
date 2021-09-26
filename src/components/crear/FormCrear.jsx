import React from 'react';
import { collection, addDoc } from "firebase/firestore";
import db from '../../firebase';


function FormCrear({
  form,
  handleInputChange,
  handleFileChange,
  resetForm,
  idUser,
  autor
}) {
  /**
   * Nombre
   * Descripcion
   * Usuario (automativo)
   * Imagen
   * Ubicacion
   * Votos (definidos por otros usuarios)
   */


  const handleSubmit = e => {
    e.preventDefault();
    upProductToFirebase();
    resetForm();
  }

  const upProductToFirebase = async () => {
    try {
      await addDoc(collection(db, 'productos'), {
        autor: autor,
        descripcion: form.descripcion,
        disponible: true,
        idAutor: idUser,
        imagen: form.imagen,
        nombre: form.nombre,
        ubicacion: form.ubicacion,
        votos: 0
      });

    } catch (e) {
      console.error("Error al intentar agregar un producto: ", e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='nombre'
        value={form.nombre}
        onChange={handleInputChange}
        placeholder='Nombre del producto'
        required
      />
      <input
        type='file'
        accept='image/*'
        name='imagen'
        onChange={handleFileChange}
        required
      />
      <textarea
        name='descripcion'
        value={form.descripcion}
        onChange={handleInputChange}
        placeholder='Cuentale a los demás un poco sobre este producto'
        required
      />
      <input type='submit' value='crear donacion' />
    </form>
  )
}

export default FormCrear;
