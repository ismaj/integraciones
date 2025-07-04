import { useState } from 'react';
import { login } from '../api/auth';
import './login-form.css'; // Asegúrate de tener este archivo
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      localStorage.setItem('token', data.access_token);
      alert('Login exitoso');
      navigate('/clientes'); // Redirige a la página de clientes
    } catch (err) {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <h2 className="login-title">LOGIN</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="login-input"
          />
          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">LOGIN</button>
          {error && <p className="login-error">{error}</p>}
        </form>
        <p className="login-footer">Not a member? <a href="#">Sign up now</a></p>
      </div>
    </div>
  );
}
