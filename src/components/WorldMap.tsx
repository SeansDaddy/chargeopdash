import React from 'react';
import { motion } from 'motion/react';

// Highly-detailed styled world map coordinates for major regions
const globalRegions = [
  { id: 'apac_east', name: '亚太东脑东部', x: '78%', y: '45%', status: '95.2%', level: 'TOP 1', color: '#00e5ff' },
  { id: 'emea_central', name: '欧洲智算中心', x: '50%', y: '35%', status: '92.1%', level: 'TOP 2', color: '#00e5ff' },
  { id: 'na_west', name: '北美智云前哨', x: '22%', y: '38%', status: '84.2%', level: 'TOP 3', color: '#fbbf24' },
  { id: 'sa_east', name: '拉美数据网关', x: '35%', y: '72%', status: '78.3%', level: 'TOP 4', color: '#ef4444' },
  { id: 'apac_south', name: '南亚计算节点', x: '70%', y: '58%', status: '65.5%', level: 'TOP 5', color: '#f97316' },
];

export const WorldMap: React.FC = () => {
  return (
    <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden bg-radial from-[#0a192f]/40 to-transparent">
      {/* Decorative World Grid Overlay */}
      <svg
        viewBox="0 0 1000 500"
        className="absolute w-full h-full opacity-20 fill-none stroke-brand-blue/30"
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#00e5ff" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="1000" height="500" fill="url(#grid)" />
      </svg>

      {/* Styled World Map Continents in Futuristic Tech-Outline SVG */}
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full opacity-35 fill-brand-blue/10 stroke-brand-blue/30 transition-all duration-700 hover:opacity-50"
        style={{ filter: 'drop-shadow(0 0 25px rgba(0, 229, 255, 0.15))' }}
      >
        {/* North America */}
        <path
          d="M120,120 L160,110 L230,120 L280,150 L260,200 L220,240 L190,260 L170,230 L160,240 L150,230 L140,240 L110,210 Z"
          strokeWidth="1.5"
          className="fill-brand-blue/5 hover:fill-brand-blue/20 transition-all duration-300"
        />
        {/* South America */}
        <path
          d="M210,280 L250,290 L280,330 L310,380 L320,410 L290,460 L280,470 L260,450 L240,400 L210,350 L200,310 Z"
          strokeWidth="1.5"
          className="fill-brand-blue/5 hover:fill-brand-blue/20 transition-all duration-300"
        />
        {/* Greenland */}
        <path
          d="M280,50 L350,60 L330,110 L260,95 Z"
          strokeWidth="1"
          className="fill-brand-blue/5"
        />
        {/* Africa */}
        <path
          d="M420,240 L440,225 L490,230 L540,260 L570,300 L560,340 L530,400 L510,430 L505,400 L470,360 L440,320 L415,280 Z"
          strokeWidth="1.5"
          className="fill-brand-blue/5 hover:fill-brand-blue/20 transition-all duration-300"
        />
        {/* Europe & Asia (Eurasia) */}
        <path
          d="M400,160 L440,120 L500,100 L580,100 L650,90 L750,110 L840,110 L860,140 L880,170 L840,220 L800,240 L750,280 L730,320 L720,330 L660,320 L620,290 L560,270 L520,250 L460,260 L430,220 Z"
          strokeWidth="1.5"
          className="fill-brand-blue/5 hover:fill-brand-blue/20 transition-all duration-300"
        />
        {/* Australia */}
        <path
          d="M740,360 L790,360 L830,390 L810,430 L760,420 L730,390 Z"
          strokeWidth="1.5"
          className="fill-brand-blue/5 hover:fill-brand-blue/20 transition-all duration-300"
        />
      </svg>

      {/* Decorative Tech Rings / Crosshairs */}
      <div className="absolute top-12 left-12 w-28 h-28 border border-brand-blue/25 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center pointer-events-none">
        <div className="w-20 h-20 border border-dashed border-brand-blue/20 rounded-full" />
        <div className="absolute top-0 w-2 h-2 bg-brand-blue rounded-full" />
      </div>
      <div className="absolute bottom-12 right-12 w-36 h-36 border border-brand-blue/25 rounded-full animate-[spin_25s_linear_infinite_reverse] flex items-center justify-center pointer-events-none">
        <div className="w-24 h-24 border border-dashed border-brand-blue/20 rounded-full" />
        <div className="absolute bottom-0 w-2.5 h-2.5 bg-brand-blue rounded-full" />
      </div>

      {/* Region Markers */}
      {globalRegions.map((region) => (
        <motion.div
          key={region.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute"
          style={{ left: region.x, top: region.y }}
        >
          <div className="relative flex flex-col items-center group cursor-pointer">
            {/* Pulsing ring indicator */}
            <span className="absolute inline-flex h-8 w-8 rounded-full opacity-40 animate-ping" style={{ backgroundColor: region.color }} />
            
            {/* Core monitoring dot */}
            <div 
              className="w-4 h-4 rounded-full border-2 border-white relative z-10 transition-all duration-300 group-hover:scale-125 shadow-[0_0_20px_rgba(0,229,255,0.8)]" 
              style={{ backgroundColor: region.color }} 
            />
            
            {/* Glow halo */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue to-purple-600 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-all duration-500" />
            
            {/* Popover Card */}
            <div className="absolute bottom-10 whitespace-nowrap bg-black/95 border border-brand-blue/60 p-3 rounded-xl text-xs opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 panel-blur z-30 shadow-[0_0_30px_rgba(0,229,255,0.3)]">
              <div className="font-black text-white text-sm mb-1">{region.name}</div>
              <div className="text-gray-400">运行阶梯: <span className="text-brand-blue font-bold">{region.level}</span></div>
              <div className="text-brand-blue font-black mt-1">主线可用率: {region.status}</div>
            </div>
            
            {/* Floating Banner (Static UI Element from mockup) */}
            <div className="mt-3 px-3 py-1 bg-brand-blue/20 border border-brand-blue/40 rounded-full text-xs backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center space-x-1.5 transition-all duration-300 group-hover:border-brand-blue/70">
              <span className="text-gray-300 font-bold tracking-tight">{region.level}</span>
              <span className="w-1 h-3 bg-white/20" />
              <span className="text-brand-blue font-black">{region.status}</span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Decorative Grid Metrics */}
      <div className="absolute bottom-6 left-8 text-[11px] font-mono text-gray-400 space-y-1 bg-black/30 p-2.5 rounded-lg border border-white/5 backdrop-blur-sm pointer-events-none">
        <div>SYS_GRID_PING: 14ms</div>
        <div>SYS_NODES_ONLINE: 1,748/1,748</div>
        <div>SCANNER_FREQ: 60Hz</div>
      </div>
      
      <div className="absolute bottom-6 right-8 text-[11px] font-mono text-gray-400 space-y-1 bg-black/30 p-2.5 rounded-lg border border-white/5 backdrop-blur-sm pointer-events-none text-right">
        <div>GLOBAL_SECURE_MODE: ON</div>
        <div>LAT_UPDATE: JUST NOW</div>
        <div>ENCRYPT_SCHEME: SHA-256</div>
      </div>

      {/* Decorative flight/link routes (Curved SVG arcs connecting regions) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-brand-blue/15 stroke-dasharray-[10_10] fill-none animate-[dash_30s_linear_infinite]">
        <style>{`
          @keyframes dash {
            to {
              stroke-dashoffset: -1000;
            }
          }
        `}</style>
        {/* APAC to EMEA */}
        <path d="M 780,225 Q 640,150 500,175" strokeWidth="1" strokeDasharray="5,5" />
        {/* EMEA to NA */}
        <path d="M 500,175 Q 360,140 220,190" strokeWidth="1" strokeDasharray="5,5" />
        {/* APAC to NA */}
        <path d="M 780,225 Q 500,100 220,190" strokeWidth="1" strokeDasharray="5,5" />
        {/* APAC to APAC_South */}
        <path d="M 780,225 L 700,290" strokeWidth="1" strokeDasharray="5,5" />
      </svg>
    </div>
  );
};
