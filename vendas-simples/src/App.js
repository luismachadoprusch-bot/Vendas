// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
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
import Dashboard from './Dashboard';
import Login from './Login';
import './App.css';
import FeatureComponentA from './components/FeatureComponentA';
import FeatureComponentB from './components/FeatureComponentB';
import { isFeatureEnabled } from './services/featureFlags';



function Navbar({ usuario, onLogout }) {
  const [menuAberto, setMenuAberto] = useState(null);

  const toggleMenu = (menu) => setMenuAberto(menu);
  const closeMenu = () => setMenuAberto(null);

  // Definição centralizada dos menus
  const menus = [
    {
      titulo: "Cadastros",
      links: [
        { to: "/produtos", label: "Produtos" },
        { to: "/clientes", label: "Clientes" },
        { to: "/fornecedores", label: "Fornecedores" },
      ],
    },
    {
      titulo: "Vendas",
      links: [
        { to: "/vendas", label: "Registro de Vendas" },
        { to: "/carrinho", label: "Carrinho" },
        { to: "/descontos", label: "Descontos & Promoções" },
      ],
    },
    {
      titulo: "Estoque",
      links: [
        { to: "/estoque", label: "Controle Estoque" },
        { to: "/RelatoriosEstoque", label: "Relatórios Estoque" },
      ],
    },
    {
      titulo: "Recibos",
      links: [{ to: "/recibos", label: "Emissão de Recibos" }],
    },
    {
      titulo: "Pesquisar",
      links: [{ to: "/pesquisar", label: "Pesquisa de Produtos" }],
    },
    {
      titulo: "Relatórios",
      links: [
        { to: "/relatorios", label: "Vendas" },
        { to: "/RelatoriosEstoque", label: "Estoque" },
      ],
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">Sistema de Vendas</div>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>


      <div>
        <h1>POC feacture ativada</h1>
        {isFeatureEnabled('featureA') && <FeatureComponentA />}
      {isFeatureEnabled('featureB') && <FeatureComponentB />}
      </div>



        {!usuario ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <span>Olá, {usuario.nome}</span>
            <button onClick={onLogout}>Logout</button>
          </>
        )}

        {/* Menus dinâmicos */}
        {menus.map((menu) => (
          <div
            key={menu.titulo}
            className="dropdown"
            onMouseEnter={() => toggleMenu(menu.titulo)}
            onMouseLeave={closeMenu}
          >
            <button className="dropbtn">{menu.titulo} ▾</button>
            {menuAberto === menu.titulo && (
              <div className="dropdown-content">
                {menu.links.map((link) => (
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Pagamentos direto (sem dropdown, mais intuitivo) */}
        <Link to="/GestaoPagamentos" className="pagamentos-link">💳 Pagamentos</Link>
      </div>
    </nav>
  );
}

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const handleLogin = (user) => setUsuarioLogado(user);
  const handleLogout = () => setUsuarioLogado(null);

  return (
    <Router>
      <Navbar usuario={usuarioLogado} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
