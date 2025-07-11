import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function RedirectIfAuth() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/clientes" /> : <Outlet />;
}
// This component checks if the user is authenticated.
// If they are, it redirects them to the "/clientes" page.
