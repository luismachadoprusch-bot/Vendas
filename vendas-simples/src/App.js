import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastroProdutos from './CadastroProdutos';
import CadastroClientes from './CadastroClientes';
import './App.css';
import './CadastroClientes.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Sistema de Vendas</div>
      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/clientes">Clientes</Link>
      </div>
    </nav>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
