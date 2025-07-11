import LoginPage from './pages/LoginPage';
import ClientesPage from './pages/ClientesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import RedirectIfAuth from './components/RedirectIfAuth';
import ClienteForm from './components/ClienteForm';

function App() {
return (
    <BrowserRouter>
      <Routes>
        {/* Redirigir si ya está autenticado */}
        <Route element={<RedirectIfAuth />}>
          <Route path="/login" element={<login-Form />} />
        </Route>

        {/* Rutas protegidas */}
        <Route element={<PrivateRoute />}>
          <Route path="/clientes" element={<ClienteForm />} />
        </Route>

        {/* Redirección por defecto */}
        <Route path="*" element={<login-Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
