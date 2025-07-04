import ClienteForm from "../components/ClienteForm";
import ClienteTable from "../components/ClienteTable";

export default function ClientesPage() {
  return (
    <div className="cliente-container">
      <h2>Gestión de Clientes</h2>
      <ClienteForm />
      <ClienteTable />
    </div>
  );
}
