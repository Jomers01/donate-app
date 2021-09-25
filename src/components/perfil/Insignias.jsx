import React, { useState } from 'react';
import ModalInsignia from './ModalInsignia';

function Insignias({ insignias }) {
  const misLogros = [
    {
      nombre: 'Corazon de hierro',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu2mA5OgXCUJSKQWsjRbCsq8ZYoCF-nu9cGfG-I7ZMu3UNNvzcis1_yDUNF7sFCjgSrY&usqp=CAU',
      numero: 1,
      descripcion: 'Insignia por tener un corazon de hierro. Por ayudar a los demás y ser una persona noble. Estamos muy contentos de otorgarte esta insigna.'
    },
    {
      nombre: 'Corazon de oro',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu2mA5OgXCUJSKQWsjRbCsq8ZYoCF-nu9cGfG-I7ZMu3UNNvzcis1_yDUNF7sFCjgSrY&usqp=CAU',
      numero: 5,
      descripcion: 'Insignia por tener un corazon de hierro. Por ayudar a los demás y ser una persona noble. Estamos muy contentos de otorgarte esta insigna.'
    },
    {
      nombre: 'Maestro de la felicidad',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu2mA5OgXCUJSKQWsjRbCsq8ZYoCF-nu9cGfG-I7ZMu3UNNvzcis1_yDUNF7sFCjgSrY&usqp=CAU',
      numero: 10,
      descripcion: 'Insignia por tener un corazon de hierro. Por ayudar a los demás y ser una persona noble. Estamos muy contentos de otorgarte esta insigna.'
    },
    {
      nombre: 'Ayudante de santa clous',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu2mA5OgXCUJSKQWsjRbCsq8ZYoCF-nu9cGfG-I7ZMu3UNNvzcis1_yDUNF7sFCjgSrY&usqp=CAU',
      numero: 15,
      descripcion: 'Insignia por tener un corazon de hierro. Por ayudar a los demás y ser una persona noble. Estamos muy contentos de otorgarte esta insigna.'
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [infoInsignia, setInfoInsignia] = useState({
    nombre: '',
    img: '',
    numero: 0,
    descripcion: ''
  });

  const handleShowModal = logro => {
    setInfoInsignia(logro);
    setShowModal(true);
  }

  return (
    <section>
      <hr className='line' />
      <h1 className='title'> Insignias </h1>

      {!misLogros.length
        ? <p> Aún no tienes logros </p>
        : <div className='insignias'>
          {misLogros.map((logro, idx) => (
            <div
              key={idx}
              className='insignia-container'
              onClick={() => handleShowModal(logro)}
            >
              <img
                src={logro.img}
                alt='logro-img'
                className='insignia-container__logo'
              />
              <p className='insignia-container__numero'> {logro.numero} </p>
            </div>
          ))}
        </div>
      }
      <ModalInsignia
        handleHideModal={() => setShowModal(false)}
        showModal={showModal}
        infoInsignia={infoInsignia}
      />
      <hr classnombre='line-bottom' />
    </section>
  )
}

export default Insignias;