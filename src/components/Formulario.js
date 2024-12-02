import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputDatosPersonales from './InputDatosPersonales';
import InputDatosPadre from './InputDatosPadre';
import InputDatosMadre from './InputDatosMadre';
import InputDatosAdministrativos from './InputDatosAdministrativos';
import { generatePDF } from './utils/pdfUtils';
import { insertActa } from './services/actasService';

const Formulario = () => {
  const [step, setStep] = useState(1);
  const [datosPersonales, setDatosPersonales] = useState({});
  const [datosPadre, setDatosPadre] = useState({});
  const [datosMadre, setDatosMadre] = useState({});
  const [datosAdministrativos, setDatosAdministrativos] = useState({});
  const navigate = useNavigate();

  const handleDatosPersonalesSubmit = (datos) => {
    setDatosPersonales(datos);
    setStep(2);
  };

  const handleDatosPadreSubmit = (datos) => {
    setDatosPadre(datos);
    setStep(3);
  };

  const handleDatosMadreSubmit = (datos) => {
    setDatosMadre(datos);
    setStep(4);
  };

  const handleDatosAdministrativosSubmit = async (datos) => {
    setDatosAdministrativos(datos);

    
    const acta = {
      DatosPersonales: datosPersonales,
      DatosPadre: datosPadre,
      DatosMadre: datosMadre,
      DatosAdministrativos: datos,
    };
    

    
    generatePDF(acta);

    
    try {
      await insertActa(acta);
      alert('Acta insertada exitosamente.');
    } catch (error) {
      alert(actabd);
      alert('Error al insertar el acta:', error.message);
    }

    // Navegar
    navigate('/ver-actas');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <InputDatosPersonales onSubmit={handleDatosPersonalesSubmit} />;
      case 2:
        return <InputDatosPadre onSubmit={handleDatosPadreSubmit} />;
      case 3:
        return <InputDatosMadre onSubmit={handleDatosMadreSubmit} />;
      case 4:
        return (
          <InputDatosAdministrativos onSubmit={handleDatosAdministrativosSubmit} />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Formulario</h1>
      {renderStep()}
    </div>
  );
};

export default Formulario;
