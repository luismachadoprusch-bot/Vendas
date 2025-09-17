import React, { useState } from 'react';
import './CadastroProdutos.css';

function CadastroProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [editarIndex, setEditarIndex] = useState(null);

  const salvarProduto = () => {
    if (!nome || !preco) {
      alert('Preencha todos os campos');
      return;
    }

    const novoProduto = { nome, preco };

    if (editarIndex !== null) {
      const listaAtualizada = [...produtos];
      listaAtualizada[editarIndex] = novoProduto;
      setProdutos(listaAtualizada);
      setEditarIndex(null);
    } else {
      setProdutos([...produtos, novoProduto]);
    }

    setNome('');
    setPreco('');
  };

  const removerProduto = (index) => {
    const listaAtualizada = produtos.filter((_, i) => i !== index);
    setProdutos(listaAtualizada);
  };

  const editarProduto = (index) => {
    setNome(produtos[index].nome);
    setPreco(produtos[index].preco);
    setEditarIndex(index);
  };

  return (
    <div className="container-produtos">
      <h1>Cadastro de Produtos</h1>

      <div className="formulario-produtos">
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <button onClick={salvarProduto}>
          {editarIndex !== null ? 'Atualizar' : 'Adicionar'}
        </button>
      </div>

      <h2>Produtos Cadastrados</h2>
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul>
          {produtos.map((produto, index) => (
            <li key={index}>
              {produto.nome} - R$ {produto.preco}{' '}
              <button onClick={() => editarProduto(index)}>Editar</button>
              <button onClick={() => removerProduto(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CadastroProdutos;
