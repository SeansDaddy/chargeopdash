import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, AlertCircle, Cpu, Wifi, Zap, Settings, User } from 'lucide-react';
import { StatCard } from './components/StatCard';
import { SidebarSection } from './components/SidebarSection';
import { WorldMap } from './components/WorldMap';
import { DonutChart } from './components/DonutChart';
import { RankingList } from './components/RankingList';
import { Metric, SiteStatus, RankingItem } from './types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const topMetrics: Metric[] = [
  { label: '主机在线率', value: '95.2%', trend: 'up', change: '0.3%' },
  { label: '功率满意度', value: '92.2%', trend: 'down', change: '2.3%' },
  { label: '一次充电成功率', value: '95.2%', trend: 'down', change: '3.2%' },
  { label: '枪可用率', value: '96.2%', trend: 'down', change: '1.6%' },
  { label: '异常订单率', value: '8.2%', trend: 'down', change: '0.3%' },
];

const siteStatusData: SiteStatus[] = [
  { name: '正常', count: 1200, percentage: '78.3%', color: '#00e5ff' },
  { name: '提示', count: 178, percentage: '10.2%', color: '#22c55e' },
  { name: '重要', count: 130, percentage: '2.4%', color: '#eab308' },
  { name: '紧急', count: 124, percentage: '1.5%', color: '#f97316' },
  { name: '危急', count: 118, percentage: '1.4%', color: '#ef4444' },
];

const highEnergySites: RankingItem[] = [
  { name: '龙岩东山充电站', value: 85, location: '福建' },
  { name: '中山公园充电站', value: 72, location: '广东' },
  { name: '上海静安充电站', value: 68, location: '上海' },
  { name: '北京西单充电站', value: 65, location: '北京' },
  { name: '成都春熙路站', value: 62, location: '四川' },
];

const alarmStats = [
  { name: '电子锁异常', value: 88, color: '#ef4444' },
  { name: '通信异常', value: 244, color: '#f97316' },
  { name: '桩离线', value: 320, color: '#3b82f6' },
  { name: '其它', value: 278, color: '#22c55e' },
];

const versionHistory = [
  { time: '05/10', count: 240, rate: 65 },
  { time: '05/11', count: 320, rate: 72 },
  { time: '05/12', count: 280, rate: 68 },
  { time: '05/13', count: 360, rate: 80 },
  { time: '05/14', count: 410, rate: 85 },
  { time: '05/15', count: 380, rate: 82 },
  { time: '05/16', count: 500, rate: 95 },
];

export default function App() {
  return (
    <div className="flex h-screen bg-brand-bg text-white overflow-hidden p-4 space-x-4">
      {/* Mini Sidebar Nav */}
      <div className="w-12 flex flex-col items-center py-4 space-y-6 bg-panel-bg/20 rounded-xl border border-white/5">
        <div className="p-2 bg-brand-blue/20 rounded-lg text-brand-blue"><LayoutGrid size={20} /></div>
        <div className="text-gray-500 hover:text-brand-blue cursor-pointer transition-colors"><AlertCircle size={20} /></div>
        <div className="text-gray-500 hover:text-brand-blue cursor-pointer transition-colors"><Cpu size={20} /></div>
        <div className="text-gray-500 hover:text-brand-blue cursor-pointer transition-colors"><Wifi size={20} /></div>
        <div className="mt-auto space-y-6">
          <div className="text-gray-500 hover:text-brand-blue cursor-pointer transition-colors"><Settings size={20} /></div>
          <div className="text-gray-500 hover:text-brand-blue cursor-pointer transition-colors"><User size={20} /></div>
        </div>
      </div>

      {/* Left Sidebar */}
      <div className="w-96 flex flex-col space-y-5">
        <SidebarSection title="站点状态" titleExtra={<span className="text-xs text-brand-blue font-bold bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">LIVE</span>}>
          <DonutChart 
            data={siteStatusData.map(s => ({ name: s.name, value: s.count, color: s.color }))}
            total="1,748"
          />
        </SidebarSection>

        <SidebarSection title="高能耗站点排行">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={highEnergySites} layout="vertical" margin={{ left: 10, right: 30 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={100} style={{ fontSize: '11px', fill: '#9ca3af', fontWeight: 'bold' }} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#030816', border: '1px solid #2d78ff', borderRadius: '8px', fontSize: '11px' }} />
                <Bar dataKey="value" fill="#00e5ff" radius={[0, 6, 6, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SidebarSection>

        <SidebarSection title="设备实时状态" className="flex-1 overflow-hidden flex flex-col">
          <div className="flex justify-around items-center mb-6 px-4 py-3 bg-white/5 rounded-xl border border-white/5">
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500 mb-1 uppercase font-bold">在线设备</span>
              <span className="text-2xl font-black text-green-400 glow-blue">2,568</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500 mb-1 uppercase font-bold">离线设备</span>
              <span className="text-2xl font-black text-red-500">132</span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto pr-1">
            <RankingList items={highEnergySites.map(s => ({ ...s, value: Math.floor(Math.random() * 100) }))} showLocation />
          </div>
        </SidebarSection>
      </div>

      {/* Central Content */}
      <div className="flex-1 flex flex-col space-y-5">
        {/* Top KPI Header */}
        <div className="grid grid-cols-5 gap-5 bg-panel-bg/30 border border-panel-border/50 rounded-2xl p-8 panel-blur shadow-2xl">
          {topMetrics.map((m, idx) => (
            <StatCard key={idx} metric={m} />
          ))}
        </div>

        {/* Central Map Area */}
        <div className="flex-1 relative bg-panel-bg/10 rounded-2xl overflow-hidden border border-white/5">
          <div className="absolute top-8 left-8 z-10 space-y-3">
            <div className="flex items-center space-x-3 bg-black/60 px-4 py-2 rounded-full border border-brand-blue/30 text-sm backdrop-blur-md">
              <span className="text-brand-blue font-black tracking-widest">TOP 5 运维恶化指数</span>
              <div className="h-4 w-px bg-white/20" />
              <span className="text-gray-400 font-medium">从低至高分布</span>
            </div>
          </div>
          <WorldMap />
        </div>

        {/* Bottom Version Panel */}
        <SidebarSection title="系统版本及性能趋势" className="h-64 overflow-hidden">
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={versionHistory} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                <XAxis dataKey="time" axisLine={false} tickLine={false} style={{ fontSize: '11px', fill: '#6b7280', fontWeight: 'bold' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} style={{ fontSize: '11px', fill: '#6b7280', fontWeight: 'bold' }} />
                <Tooltip contentStyle={{ backgroundColor: '#030816', border: '1px solid #2d78ff', color: '#fff', fontSize: '12px', borderRadius: '12px', padding: '12px' }} />
                <Line type="monotone" dataKey="count" stroke="#00e5ff" strokeWidth={4} dot={{ r: 4, fill: '#00e5ff', strokeWidth: 2, stroke: '#030816' }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="rate" stroke="#2d78ff" strokeWidth={4} dot={{ r: 4, fill: '#2d78ff', strokeWidth: 2, stroke: '#030816' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </SidebarSection>
      </div>

      {/* Right Sidebar */}
      <div className="w-96 flex flex-col space-y-5">
        <SidebarSection title="监控告警统计">
          <DonutChart 
            data={alarmStats}
            total="930"
          />
        </SidebarSection>

        <SidebarSection title="实时高频告警排行">
          <RankingList items={[
            { name: '电子锁异常', value: 48 },
            { name: 'BCU软件版本不一致', value: 32 },
            { name: '系统自检失败', value: 12 },
            { name: 'BMS辅助电源故障', value: 10 },
            { name: '终端与主机互通错误', value: 6 },
          ]} />
        </SidebarSection>

        <SidebarSection title="TOP 异常根因分析" className="flex-1 overflow-hidden flex flex-col">
          <div className="flex justify-center mb-4">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[{ name: '正常', value: 87.3, color: '#22c55e' }, { name: '异常', value: 12.7, color: '#ef4444' }]}
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                    stroke="none"
                  >
                    <Cell fill="#22c55e" />
                    <Cell fill="#ef4444" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute flex flex-col items-center">
                <span className="text-xl font-black text-white glow-blue">22,850</span>
                <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">Total Signals</span>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto pr-1">
            <RankingList items={highEnergySites.map(s => ({ ...s, value: Math.floor(Math.random() * 50) }))} showLocation />
          </div>
        </SidebarSection>
      </div>
    </div>
  );
}
