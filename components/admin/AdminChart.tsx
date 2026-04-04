"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// This defines the shape of the data coming from the server
interface ChartProps {
  data: { name: string; leads: number }[];
}

export default function AdminChart({ data }: ChartProps) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#94A3B8" 
            axisLine={false}
            tickLine={false}
            dy={10}
          />
          <YAxis 
            stroke="#94A3B8" 
            axisLine={false}
            tickLine={false}
            dx={-10}
            allowDecimals={false}
          />
          <Tooltip 
            cursor={{ fill: '#334155', opacity: 0.4 }}
            contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #475569', borderRadius: '12px' }}
            itemStyle={{ color: '#FACC15', fontWeight: 'bold' }}
          />
          <Bar dataKey="leads" fill="#FACC15" radius={[6, 6, 0, 0]} maxBarSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}