'use client';

import InteractiveCalendar from '@/components/InteractiveCalendar';
import ThemeCustomizer from '@/components/ThemeCustomizer';
import DraggableDecorations from '@/components/DraggableDecorations';
import { Calendar, Download, Filter, Info, Home, Settings } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CalendarPage() {
  const [showSettings, setShowSettings] = useState(false);
  
  const handlePrint = () => {
    window.print();
  };

  const handleExportPDF = () => {
    alert('Export to PDF functionality would be implemented here');
  };

  return (
    <div className="p-6 space-y-6 flex flex-col min-h-screen" style={{ minHeight: '200vh' }}>
      <DraggableDecorations />
      <div className="bg-gradient-to-r from-black via-purple-950 to-black border-4 border-purple-600/50 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)] p-6 print:hidden flex-shrink-0">
        <div className="flex items-center gap-4 px-6 py-3 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 shadow-[0_0_20px_rgba(168,85,247,0.4)] mb-3">
          <h1 className="text-4xl font-black mb-0 flex items-center gap-3 tracking-wide uppercase">
            <Calendar className="w-10 h-10 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                    WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
              Titan Scheduler
            </span>
          </h1>
          <button
            onClick={() => setShowSettings(true)}
            className="ml-auto px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-slate-700 to-slate-600 text-purple-200 hover:from-slate-600 hover:to-slate-500 transition-all shadow-lg flex items-center gap-2 border-2 border-purple-400/50"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 10px rgba(168,85,247,0.4)'
            }}
          >
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </div>
        <div className="inline-block px-4 py-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30">
          <p className="flex items-center gap-2 font-semibold mb-0">
            <Info className="w-4 h-4 text-purple-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                    WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
              Drag to move shifts • Resize to adjust duration • Click to create or view details
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 print:hidden flex-shrink-0">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-900 via-purple-700 to-black text-white rounded-lg hover:from-purple-950 hover:via-purple-800 hover:to-black transition-all font-black shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] border-2 border-purple-500 hover:scale-105 uppercase tracking-wider"
        >
          <Home className="w-6 h-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          ← Command Center
        </Link>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-700 via-purple-600 to-black text-white rounded-lg hover:from-purple-800 hover:via-purple-700 hover:to-black transition-all font-semibold shadow-lg hover:shadow-xl border border-purple-500"
        >
          <Calendar className="w-5 h-5" />
          Print Calendar
        </button>
        <button
          onClick={handleExportPDF}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-800 via-purple-900 to-black text-white rounded-lg hover:from-purple-900 hover:via-black hover:to-purple-900 transition-all font-semibold shadow-lg hover:shadow-xl border border-purple-600"
        >
          <Download className="w-5 h-5" />
          Export to PDF
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-semibold">
          <Filter className="w-5 h-5" />
          Filter by Employee
        </button>
        <ThemeCustomizer />
      </div>

      {/* Finance Metrics Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 print:hidden flex-shrink-0">
        <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-2 border-green-600/40 rounded-xl p-4 shadow-lg">
          <p className="text-green-200 text-sm font-semibold mb-1">Budget Hours</p>
          <p className="text-3xl font-bold text-white">2,080</p>
          <p className="text-xs text-green-300 mt-1">This Week</p>
        </div>
        <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-2 border-blue-600/40 rounded-xl p-4 shadow-lg">
          <p className="text-blue-200 text-sm font-semibold mb-1">Used Hours</p>
          <p className="text-3xl font-bold text-white">1,847</p>
          <p className="text-xs text-blue-300 mt-1">88.8% Utilized</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-2 border-purple-600/40 rounded-xl p-4 shadow-lg">
          <p className="text-purple-200 text-sm font-semibold mb-1">FTE Count</p>
          <p className="text-3xl font-bold text-white">52.3</p>
          <p className="text-xs text-purple-300 mt-1">Full-Time Equivalent</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-900/50 to-amber-900/50 border-2 border-yellow-600/40 rounded-xl p-4 shadow-lg">
          <p className="text-yellow-200 text-sm font-semibold mb-1">EPOB</p>
          <p className="text-3xl font-bold text-white">4.2</p>
          <p className="text-xs text-yellow-300 mt-1">Employees/Occupied Bed</p>
        </div>
        <div className="bg-gradient-to-br from-red-900/50 to-rose-900/50 border-2 border-red-600/40 rounded-xl p-4 shadow-lg">
          <p className="text-red-200 text-sm font-semibold mb-1">Labor Cost</p>
          <p className="text-3xl font-bold text-white">$87.5K</p>
          <p className="text-xs text-red-300 mt-1">Weekly Total</p>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-2xl min-h-0">
        <InteractiveCalendar showSettings={showSettings} setShowSettings={setShowSettings} />
      </div>
    </div>
  );
}
