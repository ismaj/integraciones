import { useEffect, useState } from 'react';
import { getClientes } from '../api/clientes';

export default function ClienteTable() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes().then(setClientes);
  }, []);

  return (
    <table>
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
            <td>{c.correo}</td>
            <td>{c.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
