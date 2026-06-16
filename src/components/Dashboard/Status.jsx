import React from "react";

const Status = ({stats}) => {

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
               {stats.map((stat, index) => {
                   const Icon = stat.icon;

    return (
      <div
        key={index}
        className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/5 rounded-full blur-3xl"></div>

        <div className="relative flex justify-between items-start">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {stat.title}
            </p>

            <h2 className="text-3xl font-bold mt-2 text-slate-600 dark:text-white">
              {stat.value}
            </h2>

            <p className="mt-3 text-sm text-emerald-500 font-medium">
              {stat.growth}
            </p>
          </div>

          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>
    );
  })}
</div>
        </div>
    )
};

export default Status