import '../../Styles/Auth.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-container">
      <form className="login-form">
        <h2>Iniciar Sesión</h2>
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
