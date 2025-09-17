import React, { useState } from 'react';
import './RelatoriosVendas.css';

function RelatoriosVendas() {
  // Vendas de exemplo
  const [vendas] = useState([
    { id: 1, produto: 'Notebook Dell', cliente: 'João Silva', data: '2025-09-15', quantidade: 1, valor: 3500 },
    { id: 2, produto: 'Mouse Gamer', cliente: 'Maria Oliveira', data: '2025-09-16', quantidade: 2, valor: 300 },
    { id: 3, produto: 'Teclado Mecânico', cliente: 'Carlos Souza', data: '2025-09-17', quantidade: 1, valor: 450 },
    { id: 4, produto: 'Monitor LG 24"', cliente: 'João Silva', data: '2025-09-17', quantidade: 1, valor: 950 },
  ]);

  const [filtroCliente, setFiltroCliente] = useState('');
  const [filtroProduto, setFiltroProduto] = useState('');
  const [filtroData, setFiltroData] = useState('');

  const vendasFiltradas = vendas.filter((venda) => {
    return (
      (filtroCliente === '' || venda.cliente.toLowerCase().includes(filtroCliente.toLowerCase())) &&
      (filtroProduto === '' || venda.produto.toLowerCase().includes(filtroProduto.toLowerCase())) &&
      (filtroData === '' || venda.data === filtroData)
    );
  });

  const totalGeral = vendasFiltradas.reduce((soma, v) => soma + v.valor, 0);

  return (
    <div className="container-relatorios">
      <h1>Relatórios de Vendas</h1>

      <div className="filtros">
        <input
          type="text"
          placeholder="Filtrar por cliente"
          value={filtroCliente}
          onChange={(e) => setFiltroCliente(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filtrar por produto"
          value={filtroProduto}
          onChange={(e) => setFiltroProduto(e.target.value)}
        />
        <input
          type="date"
          value={filtroData}
          onChange={(e) => setFiltroData(e.target.value)}
        />
      </div>

      <table className="tabela-relatorios">
        <thead>
          <tr>
            <th>Data</th>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>
        <tbody>
          {vendasFiltradas.length === 0 ? (
            <tr>
              <td colSpan="5">Nenhuma venda encontrada.</td>
            </tr>
          ) : (
            vendasFiltradas.map((v) => (
              <tr key={v.id}>
                <td>{v.data}</td>
                <td>{v.cliente}</td>
                <td>{v.produto}</td>
                <td>{v.quantidade}</td>
                <td>{v.valor.toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <h3>Total Geral: R$ {totalGeral.toFixed(2)}</h3>
    </div>
  );
}

export default RelatoriosVendas;
