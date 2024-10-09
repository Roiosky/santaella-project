import '../../Styles/Auth.css';

const Register = () => {
  return (
    <div className="auth-container">
      <form className="register-form">
        <h2>Registro Santaella</h2>
        <input type="text" placeholder="Usuario" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
};

export default Register;
