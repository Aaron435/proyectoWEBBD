// src/Routes.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import GenerarActa from './components/Formulario.js'; // Asegúrate de que la ruta es correcta
import VerActas from './components/VerActas.js';

const routes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/generar-acta" />} /> {/* Redirige a la ruta principal */}
    <Route path="/generar-acta" element={<GenerarActa />} />
    <Route path="/ver-actas" element={<VerActas />} />
  </Routes>
);

export default routes;
