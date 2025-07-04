import LoginPage from './pages/LoginPage';
import ClientesPage from './pages/ClientesPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
