// DescontosPromocoes.js
import React, { useState } from 'react';
import './DescontosPromocoes.css';


function DescontosPromocoes() {
  const [produtos] = useState([
    { id: 1, nome: 'Notebook', preco: 3500 },
    { id: 2, nome: 'Mouse Gamer', preco: 150 },
    { id: 3, nome: 'Teclado Mecânico', preco: 400 },
    { id: 4, nome: 'Monitor 24"', preco: 1200 },
  ]);

  const [descontos, setDescontos] = useState({}); // {id: descontoEmPercentual}

  const aplicarDesconto = (id, valor) => {
    if (valor < 0 || valor > 100) {
      alert('Informe um valor entre 0 e 100%');
      return;
    }
    setDescontos({ ...descontos, [id]: valor });
  };

  return (
    <div className="descontos-container">
      <h1>Descontos e Promoções</h1>

      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço Original (R$)</th>
            <th>Desconto (%)</th>
            <th>Preço com Desconto (R$)</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((p) => {
            const desconto = descontos[p.id] || 0;
            const precoFinal = (p.preco * (1 - desconto / 100)).toFixed(2);
            return (
              <tr key={p.id}>
                <td>{p.nome}</td>
                <td>{p.preco.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    value={desconto}
                    onChange={(e) => aplicarDesconto(p.id, Number(e.target.value))}
                    style={{ width: '60px' }}
                  />
                </td>
                <td>{precoFinal}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DescontosPromocoes;
