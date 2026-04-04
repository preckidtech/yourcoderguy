import prisma from "@/lib/prisma";
import { Activity, MousePointer2, Download, Users } from 'lucide-react';
import AdminChart from "@/components/admin/AdminChart";

// This tells Next.js to NEVER cache this page so you always see live data
export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  // 1. Fetch aggregate counts directly from Supabase
  const whatsappLeads = await prisma.eventTracker.count({ where: { eventType: "WHATSAPP_CLICK" } });
  const cvDownloads = await prisma.eventTracker.count({ where: { eventType: "CV_DOWNLOAD" } });
  const totalVisitors = await prisma.eventTracker.count({ where: { eventType: "PAGE_VIEW" } });

  // 2. Fetch the last 7 days of WhatsApp clicks to build the chart
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const recentEvents = await prisma.eventTracker.findMany({
    where: {
      eventType: "WHATSAPP_CLICK",
      createdAt: { gte: sevenDaysAgo }
    },
    select: { createdAt: true }
  });

  // 3. Process the data into the { name: 'Mon', leads: 4 } format
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const chartDataMap = new Map();

  // Initialize the last 7 days with 0 leads so the chart always looks full
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    chartDataMap.set(days[d.getDay()], 0);
  }

  // Populate the map with real database hits
  recentEvents.forEach(event => {
    const dayName = days[event.createdAt.getDay()];
    if (chartDataMap.has(dayName)) {
      chartDataMap.set(dayName, chartDataMap.get(dayName) + 1);
    }
  });

  const chartData = Array.from(chartDataMap, ([name, leads]) => ({ name, leads }));

  return (
    <main className="min-h-screen bg-[#0F172A] pt-32 pb-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-inner">
            <Activity className="text-[#FACC15]" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-[#F8FAFC] tracking-tight">Command Center</h1>
            <p className="text-slate-400 font-medium text-sm mt-1">Real-time platform analytics</p>
          </div>
        </div>

        {/* Live Database Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-[#1E293B]/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FACC15] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">WhatsApp Leads</span>
              <MousePointer2 className="text-[#FACC15]" size={24} />
            </div>
            <p className="text-5xl font-black text-[#F8FAFC] relative z-10">{whatsappLeads}</p>
          </div>

          <div className="bg-[#1E293B]/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">CV Downloads</span>
              <Download className="text-[#FACC15]" size={24} />
            </div>
            <p className="text-5xl font-black text-[#F8FAFC]">{cvDownloads}</p>
          </div>

          <div className="bg-[#1E293B]/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Total Visitors</span>
              <Users className="text-[#FACC15]" size={24} />
            </div>
            <p className="text-5xl font-black text-[#F8FAFC]">{totalVisitors}</p>
          </div>
        </div>

        {/* Live Chart Injected Here */}
        <div className="bg-[#1E293B]/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-[#F8FAFC]">Conversion Spikes</h2>
            <span className="text-xs font-bold text-[#0F172A] bg-[#FACC15] px-3 py-1 rounded-full uppercase tracking-widest">Last 7 Days</span>
          </div>
          
          {/* We pass the formatted Supabase data into our Client Component */}
          <AdminChart data={chartData} />
          
        </div>
      </div>
    </main>
  );
}