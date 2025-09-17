import React, { useState } from 'react';
import './RelatoriosEstoque.css';

function RelatoriosEstoque() {
  // Produtos de exemplo
  const [produtos] = useState([
    { id: 1, nome: 'Notebook Dell', quantidade: 3, limiteMinimo: 2 },
    { id: 2, nome: 'Mouse Gamer', quantidade: 0, limiteMinimo: 5 },
    { id: 3, nome: 'Teclado Mecânico', quantidade: 1, limiteMinimo: 3 },
    { id: 4, nome: 'Monitor LG 24"', quantidade: 6, limiteMinimo: 4 },
  ]);

  // Filtrando produtos em alerta
  const produtosAlerta = produtos.filter(
    (p) => p.quantidade === 0 || p.quantidade <= p.limiteMinimo
  );

  return (
    <div className="container-estoque">
      <h1>Relatórios de Estoque</h1>

      {produtosAlerta.length === 0 ? (
        <p>Todos os produtos estão com estoque suficiente.</p>
      ) : (
        <table className="tabela-estoque">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Limite Mínimo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {produtosAlerta.map((p) => (
              <tr key={p.id}>
                <td>{p.nome}</td>
                <td>{p.quantidade}</td>
                <td>{p.limiteMinimo}</td>
                <td style={{ color: p.quantidade === 0 ? 'red' : 'orange' }}>
                  {p.quantidade === 0 ? 'Em falta' : 'Próximo do limite'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RelatoriosEstoque;
