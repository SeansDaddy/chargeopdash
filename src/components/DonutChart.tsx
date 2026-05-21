import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface DonutChartProps {
  data: { name: string; value: number; color: string }[];
  total?: string | number;
}

export const DonutChart: React.FC<DonutChartProps> = ({ data, total }) => {
  return (
    <div className="h-40 flex items-center">
      <div className="w-1/2 h-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={45}
              outerRadius={65}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#030816', border: '1px solid #2d78ff', color: '#fff', fontSize: '12px', borderRadius: '8px' }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
          <span className="text-xl font-black glow-blue leading-tight">{total}</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-tighter">Total</span>
        </div>
      </div>
      <div className="w-1/2 space-y-2 pl-6">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between text-xs">
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-sm mr-2 shadow-sm" style={{ backgroundColor: item.color }} />
              <span className="text-gray-300 font-medium">{item.name}</span>
            </div>
            <span className="font-mono font-bold text-gray-400">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
