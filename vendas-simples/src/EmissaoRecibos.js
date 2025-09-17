import React, { useState } from 'react';
import './EmissaoRecibos.css';

function EmissaoRecibos() {
  // Vendas mockadas (apenas para teste local)
  const [vendas] = useState([
    { produto: "Notebook Dell", cliente: "João Silva", quantidade: 1, valorTotal: 3500 },
    { produto: "Mouse Gamer", cliente: "Maria Oliveira", quantidade: 2, valorTotal: 200 },
    { produto: "Teclado Mecânico", cliente: "Carlos Souza", quantidade: 1, valorTotal: 450 },
  ]);

  const [reciboSelecionado, setReciboSelecionado] = useState(null);

  // Gera o recibo da venda escolhida
  const gerarRecibo = (venda, index) => {
    const data = new Date().toLocaleString("pt-BR");
    setReciboSelecionado({ ...venda, data, numero: index + 1 });
  };

  return (
    <div className="container-recibos">
      <h1>Emissão de Recibos / Faturas</h1>

      {vendas.length === 0 ? (
        <p>Nenhuma venda registrada.</p>
      ) : (
        <ul className="lista-vendas">
          {vendas.map((venda, index) => (
            <li key={index}>
              <span>
                Produto: {venda.produto} | Cliente: {venda.cliente} | Total: R${" "}
                {venda.valorTotal.toFixed(2)}
              </span>
              <button onClick={() => gerarRecibo(venda, index)}>Gerar Recibo</button>
            </li>
          ))}
        </ul>
      )}

      {reciboSelecionado && (
        <div className="recibo">
          <h2>Recibo Nº {reciboSelecionado.numero}</h2>
          <p><strong>Data:</strong> {reciboSelecionado.data}</p>
          <p><strong>Cliente:</strong> {reciboSelecionado.cliente}</p>
          <p><strong>Produto:</strong> {reciboSelecionado.produto}</p>
          <p><strong>Quantidade:</strong> {reciboSelecionado.quantidade}</p>
          <p><strong>Valor Total:</strong> R$ {reciboSelecionado.valorTotal.toFixed(2)}</p>
          <p className="assinatura">__________________________________ <br/> Assinatura</p>
        </div>
      )}
    </div>
  );
}

export default EmissaoRecibos;
