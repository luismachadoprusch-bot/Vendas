import React, { useState } from 'react';
import './carrinhoCompras.css';

function CarrinhoCompras() {
  const [produtos] = useState([
    { id: 1, nome: 'Notebook', preco: 3500 },
    { id: 2, nome: 'Mouse Gamer', preco: 150 },
    { id: 3, nome: 'Teclado Mecânico', preco: 400 },
    { id: 4, nome: 'Monitor 24"', preco: 1200 },
  ]);

  const [carrinho, setCarrinho] = useState([]);

  const adicionarCarrinho = (produto) => {
    const existente = carrinho.find((item) => item.id === produto.id);

    if (existente) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerItem = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  return (
    <div className="carrinho-container">
      <h1>Carrinho de Compras</h1>

      <h2>Produtos Disponíveis</h2>
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>
            {p.nome} - R$ {p.preco.toFixed(2)}
            <button onClick={() => adicionarCarrinho(p)}>Adicionar</button>
          </li>
        ))}
      </ul>

      <h2>Meu Carrinho</h2>
      {carrinho.length === 0 ? (
        <p>Nenhum produto no carrinho.</p>
      ) : (
        <ul>
          {carrinho.map((item) => (
            <li key={item.id}>
              {item.nome} | Quantidade: {item.quantidade} | Preço: R${' '}
              {(item.preco * item.quantidade).toFixed(2)}
              <button onClick={() => removerItem(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total: R$ {total.toFixed(2)}</h3>
      <button disabled={carrinho.length === 0}>Finalizar Compra</button>
    </div>
  );
}

export default CarrinhoCompras;
