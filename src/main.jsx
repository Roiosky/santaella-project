import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
