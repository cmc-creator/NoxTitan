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
      <div className="bg-gradient-to-r from-black via-stone-950 to-black border-4 border-amber-600/40/50 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)] p-6 print:hidden flex-shrink-0">
        <div className="flex items-center gap-4 px-6 py-3 rounded-lg border-2 border-amber-500/40/40 bg-gradient-to-b from-stone-900/30 via-black/50 to-amber-900/30 shadow-[0_0_20px_rgba(168,85,247,0.4)] mb-3">
          <h1 className="text-4xl font-black mb-0 flex items-center gap-3 tracking-wide uppercase">
            <Calendar className="w-10 h-10 text-amber-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-stone-900 via-slate-300 to-amber-900"
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
            className="ml-auto px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-slate-700 to-slate-600 text-amber-100/70 hover:from-slate-600 hover:to-slate-500 transition-all shadow-lg flex items-center gap-2 border-2 border-amber-400/40/50"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 10px rgba(168,85,247,0.4)'
            }}
          >
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </div>
        <div className="inline-block px-4 py-2 rounded-lg border-2 border-amber-500/40/40 bg-gradient-to-b from-stone-900/30 via-black/50 to-amber-900/30">
          <p className="flex items-center gap-2 font-semibold mb-0">
            <Info className="w-4 h-4 text-amber-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-stone-900 via-slate-300 to-amber-900"
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

      {/* Weather & Quick Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:hidden flex-shrink-0">
        <div className="bg-gradient-to-br from-cyan-900/50 to-amber-800/50 border-2 border-cyan-600/40 rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cyan-200 text-sm font-semibold mb-1">Today's Weather</p>
              <p className="text-3xl font-bold text-white">72°F</p>
              <p className="text-xs text-cyan-300 mt-1">Partly Cloudy</p>
            </div>
            <div className="text-5xl">⛅</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-stone-900/50 to-violet-900/50 border-2 border-amber-600/40/40 rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-100/70 text-sm font-semibold mb-1">Scheduled Today</p>
              <p className="text-3xl font-bold text-white">24</p>
              <p className="text-xs text-amber-200 mt-1">Employees Clocked In</p>
            </div>
            <div className="text-5xl">👥</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-amber-900/50 to-yellow-900/50 border-2 border-amber-600/40 rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-200 text-sm font-semibold mb-1">Open Shifts</p>
              <p className="text-3xl font-bold text-white">3</p>
              <p className="text-xs text-amber-300 mt-1">Need Coverage</p>
            </div>
            <div className="text-5xl">📋</div>
          </div>
        </div>
      </div>

      {/* THE CALENDAR - Main Focus */}
      <div className="flex-1 overflow-auto lux-card rounded-2xl p-6 border border-stone-700 shadow-2xl min-h-0">
        <InteractiveCalendar showSettings={showSettings} setShowSettings={setShowSettings} />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 print:hidden flex-shrink-0">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-stone-900 via-stone-900 to-black text-white rounded-lg hover:from-stone-900 hover:via-stone-900 hover:to-black transition-all font-black shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] border-2 border-amber-500/40 hover:scale-105 uppercase tracking-wider"
        >
          <Home className="w-6 h-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          ← Command Center
        </Link>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-stone-900 via-stone-900 to-black text-white rounded-lg hover:from-stone-900 hover:via-stone-900 hover:to-black transition-all font-semibold shadow-lg hover:shadow-xl border border-amber-500/40"
        >
          <Calendar className="w-5 h-5" />
          Print Calendar
        </button>
        <button
          onClick={handleExportPDF}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-stone-900 via-stone-900 to-black text-white rounded-lg hover:from-stone-900 hover:via-black hover:to-amber-900 transition-all font-semibold shadow-lg hover:shadow-xl border border-amber-600/40"
        >
          <Download className="w-5 h-5" />
          Export to PDF
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-600 transition-all font-semibold">
          <Filter className="w-5 h-5" />
          Filter by Employee
        </button>
        <ThemeCustomizer />
      </div>

      {/* Finance Metrics Dashboard - Supporting Info */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 print:hidden flex-shrink-0">
        <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-2 border-green-600/40 rounded-xl p-4 shadow-lg">
          <p className="text-green-200 text-sm font-semibold mb-1">Budget Hours</p>
          <p className="text-3xl font-bold text-white">2,080</p>
          <p className="text-xs text-green-300 mt-1">This Week</p>
        </div>
        <div className="bg-gradient-to-br from-amber-700/50 to-cyan-900/50 border-2 border-amber-600/40/40 rounded-xl p-4 shadow-lg">
          <p className="text-blue-200 text-sm font-semibold mb-1">Used Hours</p>
          <p className="text-3xl font-bold text-white">1,847</p>
          <p className="text-xs text-amber-400 mt-1">88.8% Utilized</p>
        </div>
        <div className="bg-gradient-to-br from-stone-900/50 to-violet-900/50 border-2 border-amber-600/40/40 rounded-xl p-4 shadow-lg">
          <p className="text-amber-100/70 text-sm font-semibold mb-1">FTE Count</p>
          <p className="text-3xl font-bold text-white">52.3</p>
          <p className="text-xs text-amber-200 mt-1">Full-Time Equivalent</p>
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
    </div>
  );
}


