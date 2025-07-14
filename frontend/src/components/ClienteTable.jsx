import { useEffect, useState } from 'react';
import { getClientes } from '../api/clientes';
import './ClienteForm.css'; // Asegúrate de tener este archivo

export default function TablaClientes({ clientes }) {
  return (
    <div className="tabla-clientes">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c, index) => (
            <tr key={index}>
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
