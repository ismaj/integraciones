import { useEffect, useState } from 'react';
import { getClientes } from '../api/clientes';
import './ClienteForm.css'; // Asegúrate de tener este archivo

export default function ClienteTable() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes().then(setClientes);
  }, []);

  return (
    <div className='clientes-container'>
    <table className='tabla-clientes'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map(c => (
          <tr key={c.id}>
            <td>{c.nombre}</td>
            <td>{c.dni}</td>
            <td>{c.direccion}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
