import logo from './logo.svg';
import DisenoFormulario from './components/DisenoFormulario.js';
import VerActas from './components/VerActas.js';
import VerActaDetalle from './components/VerActaDetalle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import routes from './routes.js';
import './App.css';

function App() {
  return (
    
    <Router>
      <div className="min-h-screen flex">
        
        <Sidebar />
        
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <Routes>
            
            <Route path="/generar-acta" element={<DisenoFormulario />} />
            <Route path="/ver-actas" element={<VerActas />} />
            <Route path="/ver-actas/:nombre" element={<VerActaDetalle />} /> {/* Ruta para mostrar el detalle de un acta */}
            <Route path="*" element={<DisenoFormulario />} /> 

          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
