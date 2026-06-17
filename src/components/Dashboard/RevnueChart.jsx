import React from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const data = [
    { name: "Jan", revenue: 4200, expenses: 2100 },
    { name: "Feb", revenue: 3600, expenses: 2500 },
    { name: "Mar", revenue: 5200, expenses: 2800 },
    { name: "Apr", revenue: 4800, expenses: 3200 },
    { name: "May", revenue: 6100, expenses: 3500 },
    { name: "Jun", revenue: 5400, expenses: 2900 },
    { name: "Jul", revenue: 6600, expenses: 4100 },
];

const RevnueChart = () => {
    return (
        <div className="h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-blur-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        Revenue Chart
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Monthly revenue and expenses
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-linear-to-r from-blue-500 to-purple-600"></span>
                        <div className="text-sm text-slate-700 dark:text-slate-400">Revenue</div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-600"></span>
                        <div className="text-sm text-slate-700 dark:text-slate-400">Expenses</div>
                    </div>
                </div>
            </div>
            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="name" stroke="#64748b" />
                        <YAxis stroke="#64748b" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill="#6366f1" barSize={20} />
                        <Bar dataKey="expenses" fill="#f97316" barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevnueChart;