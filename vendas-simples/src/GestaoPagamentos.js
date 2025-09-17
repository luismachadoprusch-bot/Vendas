import React, { useState } from 'react';
import './GestaoPagamentos.css';

function GestaoPagamentos() {
  const [pagamentos, setPagamentos] = useState([]);
  const [cliente, setCliente] = useState('');
  const [valor, setValor] = useState('');
  const [tipoPagamento, setTipoPagamento] = useState('À vista');

  const adicionarPagamento = () => {
    if (!cliente || !valor) {
      alert('Preencha todos os campos!');
      return;
    }

    const novoPagamento = {
      id: Date.now(),
      cliente,
      valor: parseFloat(valor),
      tipoPagamento,
    };

    setPagamentos([...pagamentos, novoPagamento]);
    setCliente('');
    setValor('');
    setTipoPagamento('À vista');
  };

  const removerPagamento = (id) => {
    setPagamentos(pagamentos.filter((p) => p.id !== id));
  };

  return (
    <div className="container-pagamentos">
      <h1>Gestão de Pagamentos</h1>

      <div className="formulario-pagamentos">
        <input
          type="text"
          placeholder="Nome do Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor (R$)"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <select
          value={tipoPagamento}
          onChange={(e) => setTipoPagamento(e.target.value)}
        >
          <option>À vista</option>
          <option>A prazo</option>
        </select>
        <button onClick={adicionarPagamento}>Registrar Pagamento</button>
      </div>

      <h2>Pagamentos Registrados</h2>
      {pagamentos.length === 0 ? (
        <p>Nenhum pagamento registrado.</p>
      ) : (
        <table className="tabela-pagamentos">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Valor (R$)</th>
              <th>Tipo</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {pagamentos.map((p) => (
              <tr key={p.id}>
                <td>{p.cliente}</td>
                <td>{p.valor.toFixed(2)}</td>
                <td>{p.tipoPagamento}</td>
                <td>
                  <button onClick={() => removerPagamento(p.id)}>Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default GestaoPagamentos;
