import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastroProdutos from './CadastroProdutos';
import CadastroClientes from './CadastroClientes';
import CadastroFornecedores from './CadastroFornecedores';
import ControleEstoque from './ControleEstoque';
import RegistroVendas from './RegistroVendas';
import EmissaoRecibos from './EmissaoRecibos';
import PesquisaProdutos from './PesquisaProdutos';
import CarrinhoCompras from './CarrinhoCompras';
import RelatoriosVendas from './RelatoriosVendas';
import RelatoriosEstoque from './RelatoriosEstoque';
import GestaoPagamentos from './GestaoPagamentos';
import DescontosPromocoes from './DescontosPromocoes';
import Login from './Login';
import './App.css';

function Navbar() {
  const [showCadastros, setShowCadastros] = useState(false);
  const [showVendas, setShowVendas] = useState(false);
  const [showEstoque, setShowEstoque] = useState(false);
  const [showPagamentos, setShowPagamentos] = useState(false);
  const [showRecibos, setShowRecibos] = useState(false);
  const [showPesquisar, setShowPesquisar] = useState(false);
  const [showRelatorios, setShowRelatorios] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Sistema de Vendas</div>
      <div className="navbar-links">

        <Link to="/">Dashboard</Link>
         <Link to="/login">login</Link>

        {/* Cadastros */}
        <div className="dropdown"
             onMouseEnter={() => setShowCadastros(true)}
             onMouseLeave={() => setShowCadastros(false)}>
          <button className="dropbtn">Cadastros ▾</button>
          {showCadastros && (
            <div className="dropdown-content">
              <Link to="/produtos">Produtos</Link>
              <Link to="/clientes">Clientes</Link>
              <Link to="/fornecedores">Fornecedores</Link>
            </div>
          )}
        </div>

        {/* Vendas */}
        <div className="dropdown"
             onMouseEnter={() => setShowVendas(true)}
             onMouseLeave={() => setShowVendas(false)}>
          <button className="dropbtn">Vendas ▾</button>
          {showVendas && (
            <div className="dropdown-content">
              <Link to="/vendas">Registro de Vendas</Link>
              <Link to="/carrinho">Carrinho</Link>
              <Link to="/descontos">Descontos & Promoções</Link>
            </div>
          )}
        </div>

        {/* Estoque */}
        <div className="dropdown"
             onMouseEnter={() => setShowEstoque(true)}
             onMouseLeave={() => setShowEstoque(false)}>
          <button className="dropbtn">Estoque ▾</button>
          {showEstoque && (
            <div className="dropdown-content">
              <Link to="/estoque">Controle Estoque</Link>
              <Link to="/RelatoriosEstoque">Relatórios Estoque</Link>
            </div>
          )}
        </div>

        {/* Pagamentos */}
        <div className="dropdown"
             onMouseEnter={() => setShowPagamentos(true)}
             onMouseLeave={() => setShowPagamentos(false)}>
          <button className="dropbtn">Pagamentos ▾</button>
          {showPagamentos && (
            <div className="dropdown-content">
              <Link to="/GestaoPagamentos">Gestão de Pagamentos</Link>
            </div>
          )}
        </div>

        {/* Recibos */}
        <div className="dropdown"
             onMouseEnter={() => setShowRecibos(true)}
             onMouseLeave={() => setShowRecibos(false)}>
          <button className="dropbtn">Recibos ▾</button>
          {showRecibos && (
            <div className="dropdown-content">
              <Link to="/recibos">Emissão de Recibos</Link>
            </div>
          )}
        </div>

        {/* Pesquisar */}
        <div className="dropdown"
             onMouseEnter={() => setShowPesquisar(true)}
             onMouseLeave={() => setShowPesquisar(false)}>
          <button className="dropbtn">Pesquisar ▾</button>
          {showPesquisar && (
            <div className="dropdown-content">
              <Link to="/pesquisar">Pesquisa de Produtos</Link>
             
            </div>
          )}
        </div>

        {/* Relatórios */}
        <div className="dropdown"
             onMouseEnter={() => setShowRelatorios(true)}
             onMouseLeave={() => setShowRelatorios(false)}>
          <button className="dropbtn">Relatórios ▾</button>
          {showRelatorios && (
            <div className="dropdown-content">
              <Link to="/relatorios">Vendas</Link>
              <Link to="/RelatoriosEstoque">Estoque</Link>
            </div>
          )}
        </div>

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
          <Route path="/pesquisar" element={<PesquisaProdutos />} />
          <Route path="/carrinho" element={<CarrinhoCompras />} />
          <Route path="/RelatoriosEstoque" element={<RelatoriosEstoque />} />
          <Route path="/GestaoPagamentos" element={<GestaoPagamentos />} />
          <Route path="/relatorios" element={<RelatoriosVendas />} />
          <Route path="/descontos" element={<DescontosPromocoes />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
