import React, { useState } from 'react';
import './RegistroVendas.css';

function RegistroVendas({ produtos = [], clientes = [] }) {
  const [vendas, setVendas] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [clienteSelecionado, setClienteSelecionado] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const registrarVenda = () => {
    if (!produtoSelecionado || !clienteSelecionado || !quantidade) {
      alert('Preencha todos os campos');
      return;
    }

    const produto = produtos.find(p => p.nome === produtoSelecionado);
    if (!produto) {
      alert('Produto não encontrado');
      return;
    }

    const valorTotal = parseFloat(produto.preco) * parseInt(quantidade);

    const novaVenda = {
      produto: produto.nome,
      cliente: clienteSelecionado,
      quantidade: parseInt(quantidade),
      valorTotal
    };

    setVendas([...vendas, novaVenda]);
    setProdutoSelecionado('');
    setClienteSelecionado('');
    setQuantidade('');
  };

  return (
    <div className="container-vendas">
      <h1>Registro de Vendas</h1>

      <div className="formulario-vendas">
        <select
          value={produtoSelecionado}
          onChange={(e) => setProdutoSelecionado(e.target.value)}
        >
          <option value="">Selecione o Produto</option>
          {produtos.map((p, i) => (
            <option key={i} value={p.nome}>{p.nome} - R$ {p.preco}</option>
          ))}
        </select>

        <select
          value={clienteSelecionado}
          onChange={(e) => setClienteSelecionado(e.target.value)}
        >
          <option value="">Selecione o Cliente</option>
          {clientes.map((c, i) => (
            <option key={i} value={c.nome}>{c.nome}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />

        <button onClick={registrarVenda}>Registrar Venda</button>
      </div>

      <h2>Vendas Registradas</h2>
      {vendas.length === 0 ? (
        <p>Nenhuma venda registrada.</p>
      ) : (
        <ul>
          {vendas.map((venda, index) => (
            <li key={index}>
              Produto: {venda.produto} | Cliente: {venda.cliente} | Quantidade: {venda.quantidade} | Total: R$ {venda.valorTotal.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegistroVendas;
