import ClienteForm from "../components/ClienteForm";
import ClienteTable from "../components/ClienteTable";
import '../components/ClienteForm.css'; // Asegúrate de tener este archivo para estilos
import { obtenerClientes } from '../api/clientes';
import React, { useEffect, useState } from 'react';

export default function ClientesPage() {
  const [clientes, setClientes] = useState([]);

  const cargarClientes = async () => {
    const data = await obtenerClientes();
    setClientes(data);
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  return (
    <div className="clientes-layout">
      <ClienteForm onClienteCreado={cargarClientes} />
      <ClienteTable clientes={clientes} />
    </div>
  );
}


