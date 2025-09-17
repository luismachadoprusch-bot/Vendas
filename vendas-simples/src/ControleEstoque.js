import React, { useState } from 'react';
import './ControleEstoque.css';

function ControleEstoque() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [editarIndex, setEditarIndex] = useState(null);

  // Adicionar ou atualizar produto
  const salvarProduto = () => {
    if (!nome || !quantidade) {
      alert('Preencha todos os campos');
      return;
    }

    const novoProduto = { nome, quantidade: parseInt(quantidade) };

    if (editarIndex !== null) {
      const listaAtualizada = [...produtos];
      listaAtualizada[editarIndex] = novoProduto;
      setProdutos(listaAtualizada);
      setEditarIndex(null);
    } else {
      setProdutos([...produtos, novoProduto]);
    }

    setNome('');
    setQuantidade('');
  };

  // Registrar entrada (aumentar quantidade)
  const adicionarEstoque = (index) => {
    const valor = parseInt(prompt('Quantidade a adicionar:'));
    if (!isNaN(valor) && valor > 0) {
      const listaAtualizada = [...produtos];
      listaAtualizada[index].quantidade += valor;
      setProdutos(listaAtualizada);
    }
  };

  // Registrar saída (diminuir quantidade)
  const removerEstoque = (index) => {
    const valor = parseInt(prompt('Quantidade a remover:'));
    if (!isNaN(valor) && valor > 0) {
      const listaAtualizada = [...produtos];
      listaAtualizada[index].quantidade -= valor;
      if (listaAtualizada[index].quantidade < 0) listaAtualizada[index].quantidade = 0;
      setProdutos(listaAtualizada);
    }
  };

  // Preparar edição
  const editarProduto = (index) => {
    setNome(produtos[index].nome);
    setQuantidade(produtos[index].quantidade);
    setEditarIndex(index);
  };

  // Remover produto
  const removerProduto = (index) => {
    const listaAtualizada = produtos.filter((_, i) => i !== index);
    setProdutos(listaAtualizada);
  };

  return (
    <div className="container-estoque">
      <h1>Controle de Estoque</h1>

      <div className="formulario-estoque">
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <button onClick={salvarProduto}>
          {editarIndex !== null ? 'Atualizar' : 'Adicionar'}
        </button>
      </div>

      <h2>Produtos em Estoque</h2>
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul>
          {produtos.map((produto, index) => (
            <li key={index}>
              {produto.nome} | Quantidade: {produto.quantidade}{' '}
              <button onClick={() => adicionarEstoque(index)}>Entrada</button>
              <button onClick={() => removerEstoque(index)}>Saída</button>
              <button onClick={() => editarProduto(index)}>Editar</button>
              <button onClick={() => removerProduto(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ControleEstoque;
