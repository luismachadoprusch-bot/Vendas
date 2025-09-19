// Login.js
import React, { useState } from 'react';
import './Login.css';

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(31, h) + str.charCodeAt(i) | 0;
  }

  return h.toString();
}


const sanitizeInput = (input) => {
    return input.trim().replace(/[<>"'`;]/g, '');
  };


function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  // Usuários autorizados (pode vir de backend depois)
  const usuariosAutorizados = [
    { username: 'admin', password: '1234', nome: 'Administrador' },
    { username: 'vendedor', password: 'abcd', nome: 'Vendedor' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const user = usuariosAutorizados.find(
      u => u.username === usuario && u.password === senha
    );

    if (user) {
      onLogin(user);
      setErro('');
      setUsuario('');
      setSenha('');
    } else {
      setErro('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="login-container">
      <h2>Login do Sistema</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      {erro && <p className="erro">{erro}</p>}
    </div>
  );
}

export default Login;
