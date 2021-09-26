import React, { useContext } from 'react';
import FormCrear from '../components/crear/FormCrear'
import Back from  '../common/Back/Back';
import useForm from '../hooks/useForm';
import CardProducto from '../common/CardProducto/CardProducto';
import IsAuthContext from '../context/isAuthContext';


function Crear() {
  const authContext = useContext(IsAuthContext);
  const [form, handleInputChange, resetForm, handleFileChange] = useForm({
    nombre: '',
    descripcion: '',
    imagen: 'https://res.cloudinary.com/dpkaiokho/image/upload/v1632285887/donate-app/picture_1_unosme.png',
    ubicacion: '',
    votos: 0
  });


  return (
    <div>
      <Back to='/' />
      <FormCrear
        form={form}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
        resetForm={resetForm}
        idUser={authContext.currUserBasicInfo.idUser}
        autor={authContext.currUserBasicInfo.nombre}
      />
      <CardProducto producto={{...form, autor: authContext.currUserBasicInfo.nombre}} />
    </div>
  )
}

export default Crear
