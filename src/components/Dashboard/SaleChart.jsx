import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Electronics', value: 400 },
  { name: 'Apparel', value: 300 },
  { name: 'Home Goods', value: 200 },
  { name: 'Books', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SaleChart = () => {
  return (
    <div className="h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-blur-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
      <div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">Sales Distribution</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
            Monthly sales and expenses
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SaleChart;
