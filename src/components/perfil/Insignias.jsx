import React, { useState } from 'react';
import ModalInsignia from './ModalInsignia';

function Insignias() {
  const misLogros = [
    {
      name: 'Corazon de hierro',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu2mA5OgXCUJSKQWsjRbCsq8ZYoCF-nu9cGfG-I7ZMu3UNNvzcis1_yDUNF7sFCjgSrY&usqp=CAU',
      number: 1,
      text: 'Insignia por tener un corazon de hierro. Por ayudar a los demás y ser una persona noble. Estamos muy contentos de otorgarte esta insigna.'
    },
    {
      name: 'Corazon de oro',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu2mA5OgXCUJSKQWsjRbCsq8ZYoCF-nu9cGfG-I7ZMu3UNNvzcis1_yDUNF7sFCjgSrY&usqp=CAU',
      number: 5,
      text: 'Insignia por tener un corazon de hierro. Por ayudar a los demás y ser una persona noble. Estamos muy contentos de otorgarte esta insigna.'
    },
    {
      name: 'Maestro de la felicidad',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu2mA5OgXCUJSKQWsjRbCsq8ZYoCF-nu9cGfG-I7ZMu3UNNvzcis1_yDUNF7sFCjgSrY&usqp=CAU',
      number: 10,
      text: 'Insignia por tener un corazon de hierro. Por ayudar a los demás y ser una persona noble. Estamos muy contentos de otorgarte esta insigna.'
    },
    {
      name: 'Ayudante de santa clous',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu2mA5OgXCUJSKQWsjRbCsq8ZYoCF-nu9cGfG-I7ZMu3UNNvzcis1_yDUNF7sFCjgSrY&usqp=CAU',
      number: 15,
      text: 'Insignia por tener un corazon de hierro. Por ayudar a los demás y ser una persona noble. Estamos muy contentos de otorgarte esta insigna.'
    },
  ];
  /*{
      nombre del logro
      imagen del logro
      puntuacion necesaria para tenerla
    }
 
  */

  const [showModal, setShowModal] = useState(false);
  const [infoInsignia, setInfoInsignia] = useState({
    name: '',
    img: '',
    number: 0,
    text: ''
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
              <p className='insignia-container__number'> {logro.number} </p>
            </div>
          ))}
        </div>
      }
      <ModalInsignia
        handleHideModal={() => setShowModal(false)}
        showModal={showModal}
        infoInsignia={infoInsignia}
      />
      <hr className='line-bottom' />
    </section>
  )
}

export default Insignias;