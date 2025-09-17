import React, { useState } from 'react';
import './CadastroFornecedores.css'; // CSS separado para fornecedores

function CadastroFornecedores() {
  const [fornecedores, setFornecedores] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [editarIndex, setEditarIndex] = useState(null);

  // Adicionar ou atualizar fornecedor
  const salvarFornecedor = () => {
    if (!nome || !telefone || !email || !endereco) {
      alert('Preencha todos os campos');
      return;
    }

    const novoFornecedor = { nome, telefone, email, endereco };

    if (editarIndex !== null) {
      const listaAtualizada = [...fornecedores];
      listaAtualizada[editarIndex] = novoFornecedor;
      setFornecedores(listaAtualizada);
      setEditarIndex(null);
    } else {
      setFornecedores([...fornecedores, novoFornecedor]);
    }

    setNome('');
    setTelefone('');
    setEmail('');
    setEndereco('');
  };

  // Remover fornecedor
  const removerFornecedor = (index) => {
    const listaAtualizada = fornecedores.filter((_, i) => i !== index);
    setFornecedores(listaAtualizada);
  };

  // Preparar edição
  const editarFornecedor = (index) => {
    const f = fornecedores[index];
    setNome(f.nome);
    setTelefone(f.telefone);
    setEmail(f.email);
    setEndereco(f.endereco);
    setEditarIndex(index);
  };

  return (
    <div className="container-fornecedores">
      <h1>Cadastro de Fornecedores</h1>

      <div className="formulario-fornecedores">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <button onClick={salvarFornecedor}>
          {editarIndex !== null ? 'Atualizar' : 'Adicionar'}
        </button>
      </div>

      <h2>Fornecedores Cadastrados</h2>
      {fornecedores.length === 0 ? (
        <p>Nenhum fornecedor cadastrado.</p>
      ) : (
        <ul>
          {fornecedores.map((fornecedor, index) => (
            <li key={index}>
              {fornecedor.nome} | {fornecedor.telefone} | {fornecedor.email} | {fornecedor.endereco}{' '}
              <button onClick={() => editarFornecedor(index)}>Editar</button>
              <button onClick={() => removerFornecedor(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CadastroFornecedores;
