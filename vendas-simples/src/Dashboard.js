import React from 'react';
import Notificacoes from './Notificacoes';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

function Dashboard() {
  // Dados de exemplo
  const vendasData = [
    { mes: 'Jan', vendas: 4000 },
    { mes: 'Fev', vendas: 3000 },
    { mes: 'Mar', vendas: 5000 },
    { mes: 'Abr', vendas: 4500 },
    { mes: 'Mai', vendas: 6000 },
  ];

  const estoqueData = [
    { produto: 'Produto A', quantidade: 10 },
    { produto: 'Produto B', quantidade: 5 },
    { produto: 'Produto C', quantidade: 15 },
  ];

  const clientesData = [
    { name: 'Ativos', value: 70 },
    { name: 'Inativos', value: 30 },
  ];
  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Notificacoes />

      {/* Gráfico de Vendas */}
      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
        <LineChart width={500} height={300} data={vendasData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="vendas" stroke="#007bff" strokeWidth={3} />
        </LineChart>
      </div>

      {/* Gráfico de Estoque */}
      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
        <BarChart width={500} height={300} data={estoqueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="produto" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantidade" fill="#28a745" />
        </BarChart>
      </div>

      {/* Gráfico de Clientes */}
      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
        <PieChart width={400} height={300}>
          <Pie
            data={clientesData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {clientesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default Dashboard;
