import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2>Vendas Hoje</h2>
          <p className="text-3xl font-bold text-blue-600">R$ 0</p>
        </div>
        {/* Adicione mais cards */}
      </div>
    </div>
  );
};

export default Dashboard;
