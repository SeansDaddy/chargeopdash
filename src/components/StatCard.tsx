import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Metric } from '@/src/types';

interface StatCardProps {
  metric: Metric;
}

export const StatCard: React.FC<StatCardProps> = ({ metric }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-gray-400 text-sm mb-2 uppercase font-medium tracking-widest">{metric.label}</span>
      <div className="flex items-baseline space-x-2">
        <span className="text-4xl font-black glow-blue tabular-nums">{metric.value}</span>
      </div>
      <div className={cn(
        "flex items-center text-xs mt-2 px-3 py-1 rounded-full font-bold",
        metric.trend === 'up' ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
      )}>
        {metric.trend === 'up' ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
        <span>{metric.change}</span>
      </div>
    </div>
  );
};
