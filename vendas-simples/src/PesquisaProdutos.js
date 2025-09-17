import React, { useState } from 'react';
import './PesquisaProdutos.css';

function PesquisaProdutos() {
  // Produtos de exemplo
  const [produtos] = useState([
    { codigo: 'P001', nome: 'Notebook Dell', categoria: 'Informática', preco: 3500 },
    { codigo: 'P002', nome: 'Mouse Gamer', categoria: 'Periféricos', preco: 150 },
    { codigo: 'P003', nome: 'Teclado Mecânico', categoria: 'Periféricos', preco: 450 },
    { codigo: 'P004', nome: 'Cadeira Gamer', categoria: 'Móveis', preco: 1200 },
    { codigo: 'P005', nome: 'Monitor LG 24"', categoria: 'Informática', preco: 950 },
    { codigo: 'P007', nome: 'Monitor LG 28"', categoria: 'Informática', preco: 950 },
    
  ]);

  const [busca, setBusca] = useState('');

  // Filtro dinâmico
  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.codigo.toLowerCase().includes(busca.toLowerCase()) ||
    p.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container-pesquisa">
      <h1>Pesquisa de Produtos</h1>

      <input
        type="text"
        placeholder="Digite nome, código ou categoria..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="input-pesquisa"
      />

      {produtosFiltrados.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <table className="tabela-pesquisa">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço (R$)</th>
            </tr>
          </thead>
          <tbody>
            {produtosFiltrados.map((produto, index) => (
              <tr key={index}>
                <td>{produto.codigo}</td>
                <td>{produto.nome}</td>
                <td>{produto.categoria}</td>
                <td>{produto.preco.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PesquisaProdutos;
