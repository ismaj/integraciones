import { useState } from 'react';
import { createCliente } from '../api/clientes';

export default function ClienteForm() {
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCliente({ nombre, dni, direccion });
      alert("Cliente creado exitosamente");
      setNombre('');
      setDni('');
      setDireccion('');
    } catch (err) {
      alert("Error al crear cliente");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
      <input type="text" placeholder="DNI" value={dni} onChange={e => setDni(e.target.value)} />
      <input type="text" placeholder="Direccion" value={direccion} onChange={e => setDireccion(e.target.value)} />
      <button type="submit">Guardar Cliente</button>
    </form>
  );
}
