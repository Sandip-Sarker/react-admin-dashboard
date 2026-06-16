import { User, DollarSign, Folder, BarChart2 } from 'lucide-react'
import React from 'react'
import Status from './Status'
import ChartSection from './ChartSection';

const Dashboard = () => {

    const stats = [
      {
        title: "Total Users",
        value: "12,540",
        growth: "+12.5%",
        icon: User,
        color: "from-blue-500 to-indigo-600",
      },
      {
        title: "Revenue",
        value: "$48,200",
        growth: "+8.2%",
        icon: DollarSign,
        color: "from-emerald-500 to-green-600",
      },
      {
        title: "Projects",
        value: "245",
        growth: "+18%",
        icon: Folder,
        color: "from-purple-500 to-pink-600",
      },
      {
        title: "Analytics",
        value: "89K",
        growth: "+24%",
        icon: BarChart2,
        color: "from-orange-500 to-red-600",
      },
    ];

    return (
        <div className="p-6 space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Dashboard</h2>
                <p className="text-slate-600 dark:text-slate-300">Welcome to your dashboard! Here you can find an overview of your activities and insights.</p>
            </div>

            <Status stats={stats}/>
            <ChartSection />
            
        </div> 
    )
}

export default Dashboard