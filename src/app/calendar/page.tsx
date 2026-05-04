'use client';

import InteractiveCalendar from '@/components/InteractiveCalendar';
import ThemeCustomizer from '@/components/ThemeCustomizer';
import DraggableDecorations from '@/components/DraggableDecorations';
import { Calendar, Download, Filter, Info, Home, Settings } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const GOLD = 'rgba(201,168,76,0.22)';
const GOLD_HOVER = 'rgba(201,168,76,0.45)';
const CARD_BG = '#110F0B';

const metrics = [
  { label: 'Budget Hours', value: '2,080', sub: 'This Week' },
  { label: 'Used Hours', value: '1,847', sub: '88.8% Utilized' },
  { label: 'FTE Count', value: '52.3', sub: 'Full-Time Equivalent' },
  { label: 'EPOB', value: '4.2', sub: 'Employees/Occupied Bed' },
  { label: 'Labor Cost', value: '$87.5K', sub: 'Weekly Total' },
];

export default function CalendarPage() {
  const [showSettings, setShowSettings] = useState(false);
  const [scheduledToday, setScheduledToday] = useState<number | null>(null);
  const [totalEmployees, setTotalEmployees] = useState<number | null>(null);

  useEffect(() => {
    // Fetch today's shifts to count scheduled employees
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59).toISOString();
    fetch(`/api/shifts?startDate=${startOfDay}&endDate=${endOfDay}`)
      .then(r => r.json())
      .then((data: any[]) => {
        if (Array.isArray(data)) {
          const uniqueEmployees = new Set(data.map(s => s.employeeId)).size;
          setScheduledToday(uniqueEmployees);
        }
      })
      .catch(() => {});

    // Fetch total employees for context
    fetch('/api/employees')
      .then(r => r.json())
      .then((data: any[]) => {
        if (Array.isArray(data)) setTotalEmployees(data.length);
      })
      .catch(() => {});
  }, []);

  const quickInfo = [
    { label: "Today's Date", value: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), sub: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric' }), icon: '📅' },
    { label: 'Scheduled Today', value: scheduledToday !== null ? String(scheduledToday) : '—', sub: totalEmployees !== null ? `of ${totalEmployees} Employees` : 'Employees with shifts', icon: '👥' },
    { label: 'Total Employees', value: totalEmployees !== null ? String(totalEmployees) : '—', sub: 'Active Staff', icon: '📋' },
  ];

  const handlePrint = () => window.print();
  const handleExportPDF = () => alert('Export to PDF functionality would be implemented here');

  return (
    <div className="p-6 space-y-6 flex flex-col min-h-screen" style={{ minHeight: '200vh' }}>
      <DraggableDecorations />

      {/* Header */}
      <div className="print:hidden flex-shrink-0" style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1.5rem' }}>
        <div className="flex items-center gap-4 mb-3">
          <h1 className="flex items-center gap-3 m-0"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 700, color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <Calendar className="w-8 h-8" style={{ color: '#C9A84C' }} />
            Titan Scheduler
          </h1>
          <button
            onClick={() => setShowSettings(true)}
            className="ml-auto flex items-center gap-2 transition-colors"
            style={{ background: 'rgba(201,168,76,0.08)', border: `1px solid ${GOLD}`, borderRadius: 4, padding: '0.5rem 1rem', color: '#C9A84C', fontWeight: 600, fontSize: '0.875rem' }}
          >
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>
        <p className="flex items-center gap-2 m-0" style={{ color: '#9E8F75', fontSize: '0.8125rem' }}>
          <Info className="w-4 h-4 flex-shrink-0" style={{ color: '#C9A84C' }} />
          Drag to move shifts • Resize to adjust duration • Click to create or view details
        </p>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:hidden flex-shrink-0">
        {quickInfo.map((item) => (
          <div key={item.label} style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1rem' }}>
            <div className="flex items-center justify-between">
              <div>
                <p style={{ color: '#9E8F75', fontSize: '0.75rem', fontWeight: 600, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</p>
                <p style={{ fontSize: '1.875rem', fontWeight: 700, color: '#F0EBE0', margin: 0 }}>{item.value}</p>
                <p style={{ fontSize: '0.75rem', color: '#5A5040', marginTop: 4 }}>{item.sub}</p>
              </div>
              <div style={{ fontSize: '2.5rem' }}>{item.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* THE CALENDAR - Main Focus */}
      <div className="flex-1 overflow-auto min-h-0" style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1.5rem' }}>
        <InteractiveCalendar showSettings={showSettings} setShowSettings={setShowSettings} />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 print:hidden flex-shrink-0">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 transition-colors"
          style={{ background: 'rgba(201,168,76,0.1)', border: `1px solid ${GOLD_HOVER}`, borderRadius: 4, padding: '0.625rem 1.25rem', color: '#C9A84C', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.8125rem' }}
        >
          <Home className="w-5 h-5" />
          ← Command Center
        </Link>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 transition-colors"
          style={{ background: 'transparent', border: `1px solid ${GOLD}`, borderRadius: 4, padding: '0.625rem 1rem', color: '#9E8F75', fontWeight: 600, fontSize: '0.875rem' }}
        >
          <Calendar className="w-4 h-4" />
          Print Calendar
        </button>
        <button
          onClick={handleExportPDF}
          className="flex items-center gap-2 transition-colors"
          style={{ background: 'transparent', border: `1px solid ${GOLD}`, borderRadius: 4, padding: '0.625rem 1rem', color: '#9E8F75', fontWeight: 600, fontSize: '0.875rem' }}
        >
          <Download className="w-4 h-4" />
          Export to PDF
        </button>
        <button
          className="flex items-center gap-2 transition-colors"
          style={{ background: 'transparent', border: `1px solid ${GOLD}`, borderRadius: 4, padding: '0.625rem 1rem', color: '#9E8F75', fontWeight: 600, fontSize: '0.875rem' }}
        >
          <Filter className="w-4 h-4" />
          Filter by Employee
        </button>
        <ThemeCustomizer />
      </div>

      {/* Finance Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 print:hidden flex-shrink-0">
        {metrics.map((m) => (
          <div key={m.label} style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1rem' }}>
            <p style={{ color: '#9E8F75', fontSize: '0.75rem', fontWeight: 600, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.label}</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F0EBE0', margin: 0 }}>{m.value}</p>
            <p style={{ fontSize: '0.75rem', color: '#5A5040', marginTop: 4 }}>{m.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


