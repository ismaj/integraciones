import ClienteForm from "../components/ClienteForm";
import ClienteTable from "../components/ClienteTable";
import '../components/ClienteForm.css'; // Asegúrate de tener este archivo para estilos
import { getClientes } from '../api/clientes';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClientesPage() {
  const [clientes, setClientes] = useState([]);
 const navigate = useNavigate();
const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina token
    navigate('/login'); // Redirige
  };

  const cargarClientes = async () => {
    const data = await getClientes();
    setClientes(data);
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  return (
    <div className="cliente-container">
      <ClienteForm onClienteCreado={cargarClientes} />
      <ClienteTable clientes={clientes} />
      <button onClick={handleLogout} style={{ margin: '1rem', background: '#f44336', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px' }}>
        Cerrar sesión
      </button>      
    </div>
  );
}


