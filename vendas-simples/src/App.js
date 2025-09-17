import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastroProdutos from './CadastroProdutos';
import CadastroClientes from './CadastroClientes';
import CadastroFornecedores from './CadastroFornecedores';
import ControleEstoque from './ControleEstoque';
import RegistroVendas from './RegistroVendas';
import EmissaoRecibos from './EmissaoRecibos';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Sistema de Vendas</div>
      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/fornecedores">Fornecedores</Link>
        <Link to="/estoque">Estoque</Link>
        <Link to="/vendas">Vendas</Link>
        <Link to="/recibos">Recibos</Link>
      </div>
    </nav>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/produtos" element={<CadastroProdutos />} />
          <Route path="/clientes" element={<CadastroClientes />} />
          <Route path="/fornecedores" element={<CadastroFornecedores />} />
          <Route path="/estoque" element={<ControleEstoque />} />
          <Route path="/vendas" element={<RegistroVendas />} />
          <Route path="/recibos" element={<EmissaoRecibos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
