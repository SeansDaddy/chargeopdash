import React from 'react';
import { RankingItem } from '@/src/types';

interface RankingListProps {
  items: RankingItem[];
  showLocation?: boolean;
}

export const RankingList: React.FC<RankingListProps> = ({ items, showLocation }) => {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-12 text-xs text-gray-500 pb-2 border-b border-white/10 uppercase font-bold tracking-wider">
        <div className="col-span-6">站点/名称</div>
        {showLocation && <div className="col-span-3 text-center uppercase">区域</div>}
        <div className="col-span-3 text-right uppercase">数值</div>
      </div>
      {items.map((item, idx) => (
        <div key={idx} className="grid grid-cols-12 text-sm py-2 items-center hover:bg-white/5 rounded-lg transition-all duration-300">
          <div className="col-span-6 truncate pr-2 flex items-center" title={item.name}>
            <span className={idx < 3 ? "text-brand-blue font-bold w-6" : "text-gray-500 w-6"}>{idx + 1}</span>
            <span className="truncate">{item.name}</span>
          </div>
          {showLocation && <div className="col-span-3 text-center text-gray-400">{item.location}</div>}
          <div className="col-span-3 text-right text-brand-blue font-mono font-bold">{item.value.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
};
