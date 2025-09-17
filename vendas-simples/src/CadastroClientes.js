import React, { useState } from 'react';
import './App.css'; // Reaproveitando o mesmo CSS do App
import './CadastroClientes.css';


function CadastroClientes() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [editarIndex, setEditarIndex] = useState(null);

  // Adicionar ou atualizar cliente
  const salvarCliente = () => {
    if (!nome || !telefone || !email || !endereco) {
      alert('Preencha todos os campos');
      return;
    }

    const novoCliente = { nome, telefone, email, endereco };

    if (editarIndex !== null) {
      const listaAtualizada = [...clientes];
      listaAtualizada[editarIndex] = novoCliente;
      setClientes(listaAtualizada);
      setEditarIndex(null);
    } else {
      setClientes([...clientes, novoCliente]);
    }

    setNome('');
    setTelefone('');
    setEmail('');
    setEndereco('');
  };

  // Remover cliente
  const removerCliente = (index) => {
    const listaAtualizada = clientes.filter((_, i) => i !== index);
    setClientes(listaAtualizada);
  };

  // Preparar edição
  const editarCliente = (index) => {
    const c = clientes[index];
    setNome(c.nome);
    setTelefone(c.telefone);
    setEmail(c.email);
    setEndereco(c.endereco);
    setEditarIndex(index);
  };

  return (
    <div className="container">
      <h1>Cadastro de Clientes</h1>

      <div className="formulario">
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
        <button onClick={salvarCliente}>
          {editarIndex !== null ? 'Atualizar' : 'Adicionar'}
        </button>
      </div>

      <h2>Clientes Cadastrados</h2>
      {clientes.length === 0 ? (
        <p>Nenhum cliente cadastrado.</p>
      ) : (
        <ul>
          {clientes.map((cliente, index) => (
            <li key={index}>
              {cliente.nome} | {cliente.telefone} | {cliente.email} | {cliente.endereco}{' '}
              <button onClick={() => editarCliente(index)}>Editar</button>{' '}
              <button onClick={() => removerCliente(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CadastroClientes;
