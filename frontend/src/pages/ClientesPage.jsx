import ClienteForm from "../components/ClienteForm";
import ClienteTable from "../components/ClienteTable";
import '../ClienteForm.css'; // Asegúrate de tener este archivo para estilos

export default function ClientesPage() {
  return (
    <div className="cliente-container">
      <h2>Gestión de Clientes</h2>
      <ClienteForm />
      <ClienteTable />
    </div>
  );
}
