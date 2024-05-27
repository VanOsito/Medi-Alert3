import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import CargaImagen from './CargaImagen';

const LectorOcr = () => {
  const [texto, setTexto] = useState('');
  const [procesando, setProcesando] = useState(false);

  const handleImageUpload = (imagen) => {
    setProcesando(true);
    Tesseract.recognize(
      imagen,
      'spa', // Para español
      {
        logger: m => console.log(m) // Loguea el progreso
      }
    ).then(({ data: { text } }) => {
      setTexto(text);
      setProcesando(false);
    }).catch(err => {
      console.error(err);
      setProcesando(false);
    });
  };

  return (
    <div>
      <CargaImagen onImageUpload={handleImageUpload} />
      {procesando && <p>Procesando...</p>}
      <textarea value={texto} readOnly rows={10} cols={50} />
    </div>
  );
};

export default LectorOcr;
