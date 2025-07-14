import { useState } from 'react';
import { createCliente } from '../api/clientes';
import './ClienteForm.css'; // Asegúrate de tener este archivo
import { showSuccess,showError } from '../utils/alerts';


export default function ClienteForm({ onClienteCreado }) {
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCliente({ nombre, dni, direccion });
      showSuccess('Cliente creado exitosamente'); // ✅ Muestra mensaje de éxito
      // Limpia los campos del formulario
      setNombre('');
      setDni('');
      setDireccion('');
      if (onClienteCreado) onClienteCreado(); // ✅ Recarga la tabla
    } catch (err) {
      showError('Error al crear el cliente'); // ❌ Muestra mensaje de error
      console.error('Error al crear el cliente:', err); // Log del error para depuración  
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className='formulario-clientes'>
        <h2>Nuevo Cliente</h2>
        <label>Nombre:</label>
        <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
        <label>DNI:</label>
        <input type="text" placeholder="DNI" value={dni} onChange={e => setDni(e.target.value)} />
        <label>Dirección:</label>
        <input type="text" placeholder="Direccion" value={direccion} onChange={e => setDireccion(e.target.value)} />
        <button type="submit">Guardar Cliente</button>
      </div>
    </form>
  );
}
