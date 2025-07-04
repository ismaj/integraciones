import { useState } from 'react';
import { createCliente } from '../api/clientes';

export default function ClienteForm() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCliente({ nombre, correo, telefono });
      alert("Cliente creado exitosamente");
      setNombre('');
      setCorreo('');
      setTelefono('');
    } catch (err) {
      alert("Error al crear cliente");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
      <input type="email" placeholder="Correo" value={correo} onChange={e => setCorreo(e.target.value)} />
      <input type="text" placeholder="Teléfono" value={telefono} onChange={e => setTelefono(e.target.value)} />
      <button type="submit">Guardar Cliente</button>
    </form>
  );
}
