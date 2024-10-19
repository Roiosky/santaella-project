import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa las utilidades de Router
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Ruta por defecto que muestra Login */}
        <Route path="/" element={<Login />} />
        {/* Ruta para el componente Register */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </StrictMode>
);
