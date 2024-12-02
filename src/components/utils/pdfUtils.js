import jsPDF from 'jspdf';

export const generatePDF = (acta) => {
  const img = new Image();
  img.src =
    'https://res.cloudinary.com/dhhvxnam9/image/upload/v1725846689/Acta_gaordm.jpg';

  const doc = new jsPDF();
  doc.addImage(img, 'JPEG', 0, 0, 210, 297);

  const { DatosPersonales, DatosPadre, DatosMadre, DatosAdministrativos } = acta;
  console.log('Datos del Padre:', DatosPadre);
  console.log('Datos de la Madre:', DatosMadre);
  console.log('Datos Personales:', DatosPersonales);
  console.log('Datos Administrativos:', DatosAdministrativos);

  
  // Función para validar texto
  const safeText = (value) => (value ? String(value) : '');

  // Datos Personales
  doc.setFontSize(14);
  doc.text(safeText(DatosPersonales.curp), 132, 43);
  doc.text(safeText(DatosPersonales.nombre), 20, 105);
  doc.text(safeText(DatosPersonales.apellidoPaterno), 93, 105);
  doc.text(safeText(DatosPersonales.apellidoMaterno), 155, 105);
  doc.text(safeText(DatosPersonales.sexo), 40, 123);
  doc.text(safeText(DatosPersonales.fechaNacimiento), 93, 123);
  doc.text(safeText(DatosPersonales.lugarNacimiento), 155, 123);

  // Datos Administrativos
  doc.text(safeText(DatosAdministrativos.numeroCertificadoNacimiento), 132, 55);
  doc.text(safeText(DatosAdministrativos.entidadRegistro), 132, 66);
  doc.text(safeText(DatosAdministrativos.municipioRegistro), 132, 77);
  doc.setFontSize(7);
  doc.text(safeText(DatosAdministrativos.oficialia), 130, 87);
  doc.text(safeText(DatosAdministrativos.fechaRegistro), 146, 87);
  doc.text(safeText(DatosAdministrativos.libro), 162, 87);
  doc.text(safeText(DatosAdministrativos.numeroActa), 180, 87);
  doc.setFontSize(14);
  doc.text(safeText(DatosAdministrativos.anotacionesMarginales), 20, 200);
  doc.text(safeText(DatosAdministrativos.certificaciones), 125, 200);

  // Datos del Padre
  doc.setFontSize(10);
  doc.text(safeText(DatosPadre.padre.curp), 158, 152);
  doc.text(safeText(DatosPadre.padre.nombre), 15, 152);
  doc.text(safeText(DatosPadre.padre.apellidoPaterno), 53, 152);
  doc.text(safeText(DatosPadre.padre.apellidoMaterno), 93, 152);
  doc.text(safeText(DatosPadre.padre.nacionalidad), 130, 152);

  // Datos de la Madre
  doc.text(safeText(DatosMadre.madre.curp), 158, 174);
  doc.text(safeText(DatosMadre.madre.nombre), 15, 174);
  doc.text(safeText(DatosMadre.madre.apellidoPaterno), 53, 174);
  doc.text(safeText(DatosMadre.madre.apellidoMaterno), 93, 174);
  doc.text(safeText(DatosMadre.madre.nacionalidad), 130, 174);

  // Guardar PDF
  doc.save('acta_nacimiento.pdf');
};
