import React, { useEffect, useState } from 'react';

function Notificacoes() {
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    // Simulação de dados de alerta
    const dados = [
      { id: 1, tipo: 'estoque', mensagem: 'Produto "Arroz" está com estoque baixo!' },
      { id: 2, tipo: 'venda', mensagem: 'Venda nº 123 está em atraso!' },
      { id: 3, tipo: 'vencido', mensagem: 'Produto "Leite" venceu ontem!' },
    ];
    setAlertas(dados);
  }, []);

  return (
    <div className="notificacoes">
      <h3>Alertas</h3>
      {alertas.length === 0 ? (
        <p>Nenhum alerta no momento.</p>
      ) : (
        <ul>
          {alertas.map(alerta => (
            <li key={alerta.id} className={`alerta ${alerta.tipo}`}>
              {alerta.mensagem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notificacoes;
