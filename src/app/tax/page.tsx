'use client';

import { useState } from 'react';
import {
  Scale,
  FileText,
  Download,
  Calendar,
  AlertTriangle,
  Check,
  Clock,
  Building2,
  DollarSign,
  ChevronRight,
  Info,
  Upload,
  Calculator,
} from 'lucide-react';

const GOLD = '#C9A84C';
const GOLD_DIM = '#9E8F75';
const TEXT_PRIMARY = '#F0EBE0';
const TEXT_MUTED = '#5A5040';
const CARD_BG = '#110F0B';
const BODY_BG = '#070604';
const BORDER = 'rgba(201,168,76,0.22)';
const BORDER_HOVER = 'rgba(201,168,76,0.45)';
const CARD_SUBTLE = 'rgba(201,168,76,0.04)';
const CARD_MID = 'rgba(201,168,76,0.08)';
const CARD_ACCENT = 'rgba(201,168,76,0.12)';

type FilingStatus = 'filed' | 'pending' | 'overdue' | 'upcoming';

interface TaxFiling {
  id: string;
  type: string;
  agency: string;
  period: string;
  dueDate: string;
  amount: number | null;
  status: FilingStatus;
  filedDate?: string;
  confirmationNo?: string;
  notes?: string;
}

const MOCK_FILINGS: TaxFiling[] = [
  { id: '1', type: 'Federal Income Tax (Form 941)', agency: 'IRS', period: 'Q1 2026', dueDate: '2026-04-30', amount: 48200, status: 'pending', notes: 'Due in 2 days' },
  { id: '2', type: 'State Income Tax Withholding', agency: 'State Revenue', period: 'Q1 2026', dueDate: '2026-04-30', amount: 12400, status: 'pending' },
  { id: '3', type: 'FUTA (Form 940)', agency: 'IRS', period: 'Q4 2025', dueDate: '2026-01-31', amount: 3200, status: 'filed', filedDate: '2026-01-28', confirmationNo: 'FUTA-2026-82841' },
  { id: '4', type: 'Sales Tax', agency: 'State Revenue', period: 'March 2026', dueDate: '2026-04-20', amount: 8750, status: 'filed', filedDate: '2026-04-18', confirmationNo: 'ST-2026-40021' },
  { id: '5', type: 'Federal Income Tax (Form 941)', agency: 'IRS', period: 'Q4 2025', dueDate: '2026-01-31', amount: 45100, status: 'filed', filedDate: '2026-01-30', confirmationNo: 'FICA-2026-19203' },
  { id: '6', type: 'Corporate Income Tax (Form 1120)', agency: 'IRS', period: 'FY 2025', dueDate: '2026-04-15', amount: null, status: 'overdue', notes: 'Extension required — contact tax advisor' },
  { id: '7', type: 'State Unemployment Insurance (SUI)', agency: 'State Workforce', period: 'Q1 2026', dueDate: '2026-04-30', amount: 6800, status: 'pending' },
  { id: '8', type: 'Federal Income Tax (Form 941)', agency: 'IRS', period: 'Q2 2026', dueDate: '2026-07-31', amount: null, status: 'upcoming' },
  { id: '9', type: 'Sales Tax', agency: 'State Revenue', period: 'April 2026', dueDate: '2026-05-20', amount: null, status: 'upcoming' },
  { id: '10', type: 'Personal Property Tax', agency: 'County Assessor', period: 'FY 2026', dueDate: '2026-06-01', amount: 4200, status: 'upcoming' },
];

const STATUS_CONFIG: Record<FilingStatus, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  filed: { label: 'Filed', color: 'rgb(74,222,128)', bg: 'rgba(34,197,94,0.1)', icon: Check },
  pending: { label: 'Pending', color: GOLD, bg: CARD_ACCENT, icon: Clock },
  overdue: { label: 'Overdue', color: 'rgb(248,113,113)', bg: 'rgba(239,68,68,0.1)', icon: AlertTriangle },
  upcoming: { label: 'Upcoming', color: GOLD_DIM, bg: CARD_SUBTLE, icon: Calendar },
};

const TAX_RATES = [
  { label: 'Federal Corporate Tax', rate: '21%', description: 'C-Corporations' },
  { label: 'FICA — Employer Share', rate: '7.65%', description: 'Social Security (6.2%) + Medicare (1.45%)' },
  { label: 'FUTA Rate', rate: '6.0%', description: 'First $7,000 per employee (net 0.6% after credit)' },
  { label: 'State Income Tax (Est.)', rate: '5.25%', description: 'Varies by state — review with advisor' },
  { label: 'SUI Rate (Current)', rate: '2.8%', description: 'Updated Q1 2026 — first $15,000 per employee' },
  { label: 'Sales Tax (Default State)', rate: '8.5%', description: 'Review per jurisdiction' },
];

const DEDUCTIONS = [
  { label: 'Section 179 Deduction Cap', value: '$1,160,000', note: '2026 limit' },
  { label: 'Bonus Depreciation', value: '40%', note: 'Phasing down from 80% (2023)' },
  { label: 'QBI Deduction (Pass-Through)', value: '20%', note: 'Subject to income limits' },
  { label: 'Business Meal Deduction', value: '50%', note: 'Ordinary & necessary meals' },
  { label: 'Home Office (Simplified)', value: '$5/sq ft', note: 'Max 300 sq ft' },
];

function fmt(n: number) { return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2 }); }

export default function TaxPage() {
  const [statusFilter, setStatusFilter] = useState<FilingStatus | 'all'>('all');
  const [activeTab, setActiveTab] = useState<'filings' | 'rates' | 'calculator'>('filings');

  const [calcGross, setCalcGross] = useState('');
  const [calcFedRate, setCalcFedRate] = useState('21');
  const [calcStateRate, setCalcStateRate] = useState('5.25');

  const grossNum = parseFloat(calcGross.replace(/,/g, '')) || 0;
  const fedTax = grossNum * (parseFloat(calcFedRate) / 100);
  const stateTax = grossNum * (parseFloat(calcStateRate) / 100);
  const ficaTax = grossNum * 0.0765;
  const totalTax = fedTax + stateTax + ficaTax;
  const effectiveRate = grossNum > 0 ? (totalTax / grossNum * 100).toFixed(2) : '0.00';

  const filtered = MOCK_FILINGS.filter(f => statusFilter === 'all' || f.status === statusFilter);

  const pendingTotal = MOCK_FILINGS.filter(f => f.status === 'pending' && f.amount).reduce((s, f) => s + (f.amount || 0), 0);
  const filedTotal = MOCK_FILINGS.filter(f => f.status === 'filed').reduce((s, f) => s + (f.amount || 0), 0);
  const overdueCount = MOCK_FILINGS.filter(f => f.status === 'overdue').length;

  return (
    <div className="min-h-screen p-6 md:p-8" style={{ backgroundColor: BODY_BG, color: TEXT_PRIMARY }}>
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
            Tax Management
          </h1>
          <p className="mt-1 text-sm" style={{ color: GOLD_DIM }}>
            Track tax filings, deadlines, rates, and compliance obligations
          </p>
        </div>

        {/* Alert Banner */}
        {overdueCount > 0 && (
          <div className="flex items-center gap-3 px-4 py-3"
            style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 4 }}>
            <AlertTriangle size={16} style={{ color: 'rgb(248,113,113)', flexShrink: 0 }} />
            <span className="text-sm" style={{ color: 'rgb(248,113,113)' }}>
              <strong>{overdueCount} overdue filing{overdueCount > 1 ? 's' : ''}</strong> — contact your tax advisor immediately to avoid penalties and interest.
            </span>
          </div>
        )}

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Payments Due', value: fmt(pendingTotal), icon: Clock, color: GOLD, sub: `${MOCK_FILINGS.filter(f => f.status === 'pending').length} filings pending` },
            { label: 'Filed YTD', value: fmt(filedTotal), icon: Check, color: 'rgb(74,222,128)', sub: `${MOCK_FILINGS.filter(f => f.status === 'filed').length} filings complete` },
            { label: 'Overdue', value: `${overdueCount} filing${overdueCount !== 1 ? 's' : ''}`, icon: AlertTriangle, color: overdueCount > 0 ? 'rgb(248,113,113)' : GOLD_DIM, sub: overdueCount > 0 ? 'Requires action' : 'All clear' },
            { label: 'Upcoming (90d)', value: `${MOCK_FILINGS.filter(f => f.status === 'upcoming').length} filings`, icon: Calendar, color: GOLD_DIM, sub: 'Next: Jul 31, 2026' },
          ].map((c) => (
            <div key={c.label} className="p-5" style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4 }}>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2" style={{ background: CARD_MID, borderRadius: 4 }}>
                  <c.icon size={17} style={{ color: c.color }} />
                </div>
              </div>
              <div className="text-2xl font-bold" style={{ color: TEXT_PRIMARY }}>{c.value}</div>
              <div className="text-xs mt-1" style={{ color: GOLD_DIM }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-0" style={{ borderBottom: `1px solid ${BORDER}` }}>
          {([['filings', 'Tax Filings'], ['rates', 'Rates & Deductions'], ['calculator', 'Tax Calculator']] as const).map(([tab, label]) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className="px-5 py-3 text-sm font-medium transition-colors"
              style={{
                borderBottom: activeTab === tab ? `2px solid ${GOLD}` : '2px solid transparent',
                color: activeTab === tab ? GOLD : GOLD_DIM,
                marginBottom: -1,
              }}>
              {label}
            </button>
          ))}
        </div>

        {/* Tab: Filings */}
        {activeTab === 'filings' && (
          <div className="space-y-4">
            {/* Status Filters */}
            <div className="flex gap-2 flex-wrap">
              {(['all', 'pending', 'filed', 'overdue', 'upcoming'] as const).map((s) => (
                <button key={s} onClick={() => setStatusFilter(s)}
                  className="px-3 py-1.5 text-xs font-medium capitalize"
                  style={{
                    borderRadius: 4,
                    border: `1px solid ${statusFilter === s ? BORDER_HOVER : BORDER}`,
                    color: statusFilter === s ? GOLD : GOLD_DIM,
                    background: statusFilter === s ? CARD_ACCENT : CARD_SUBTLE,
                  }}>
                  {s}
                </button>
              ))}
            </div>

            {/* Filings Table */}
            <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4, overflow: 'hidden' }}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${BORDER}`, background: CARD_SUBTLE }}>
                      {['Filing Type', 'Agency', 'Period', 'Due Date', 'Amount', 'Status', 'Details'].map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-semibold" style={{ color: GOLD_DIM }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((f, i) => {
                      const sc = STATUS_CONFIG[f.status];
                      return (
                        <tr key={f.id} style={{ borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? 'transparent' : CARD_SUBTLE }}>
                          <td className="px-4 py-3">
                            <div style={{ color: TEXT_PRIMARY }}>{f.type}</div>
                            {f.notes && <div className="text-xs mt-0.5" style={{ color: f.status === 'overdue' ? 'rgb(248,113,113)' : GOLD_DIM }}>{f.notes}</div>}
                          </td>
                          <td className="px-4 py-3 text-xs" style={{ color: GOLD_DIM }}>{f.agency}</td>
                          <td className="px-4 py-3 text-xs" style={{ color: GOLD_DIM }}>{f.period}</td>
                          <td className="px-4 py-3 text-xs" style={{ color: f.status === 'overdue' ? 'rgb(248,113,113)' : GOLD_DIM }}>
                            {f.dueDate}
                          </td>
                          <td className="px-4 py-3 text-sm font-semibold" style={{ color: f.amount ? TEXT_PRIMARY : TEXT_MUTED }}>
                            {f.amount ? fmt(f.amount) : '—'}
                          </td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium"
                              style={{ background: sc.bg, borderRadius: 4, color: sc.color }}>
                              <sc.icon size={10} />{sc.label}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs" style={{ color: GOLD_DIM }}>
                            {f.confirmationNo && <div>Ref: {f.confirmationNo}</div>}
                            {f.filedDate && <div>Filed: {f.filedDate}</div>}
                            {f.status === 'pending' && (
                              <button className="flex items-center gap-1 mt-1 text-xs" style={{ color: GOLD }}>
                                <Upload size={11} /> File Now
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                    {filtered.length === 0 && (
                      <tr><td colSpan={7} className="px-4 py-12 text-center text-sm" style={{ color: GOLD_DIM }}>No filings match filter</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 flex items-center justify-between" style={{ borderTop: `1px solid ${BORDER}` }}>
                <span className="text-xs" style={{ color: GOLD_DIM }}>{filtered.length} filings shown</span>
                <button className="flex items-center gap-2 text-xs" style={{ color: GOLD_DIM }}>
                  <Download size={12} /> Export to CSV
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Rates & Deductions */}
        {activeTab === 'rates' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4, overflow: 'hidden' }}>
              <div className="px-5 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <h2 className="text-lg font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
                  Current Tax Rates
                </h2>
                <p className="text-xs mt-0.5" style={{ color: GOLD_DIM }}>Reference only — consult a tax professional for advice</p>
              </div>
              {TAX_RATES.map((r, i) => (
                <div key={r.label} className="px-5 py-4 flex items-start justify-between gap-4"
                  style={{ borderBottom: i < TAX_RATES.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                  <div>
                    <div className="text-sm font-medium" style={{ color: TEXT_PRIMARY }}>{r.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: GOLD_DIM }}>{r.description}</div>
                  </div>
                  <div className="text-lg font-bold shrink-0" style={{ color: GOLD }}>{r.rate}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4, overflow: 'hidden' }}>
              <div className="px-5 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <h2 className="text-lg font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
                  Key Deductions & Limits
                </h2>
                <p className="text-xs mt-0.5" style={{ color: GOLD_DIM }}>FY 2026 reference figures</p>
              </div>
              {DEDUCTIONS.map((d, i) => (
                <div key={d.label} className="px-5 py-4 flex items-start justify-between gap-4"
                  style={{ borderBottom: i < DEDUCTIONS.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                  <div>
                    <div className="text-sm font-medium" style={{ color: TEXT_PRIMARY }}>{d.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: GOLD_DIM }}>{d.note}</div>
                  </div>
                  <div className="text-base font-bold shrink-0" style={{ color: GOLD }}>{d.value}</div>
                </div>
              ))}
              <div className="px-5 py-4 flex items-start gap-3"
                style={{ background: CARD_SUBTLE, borderTop: `1px solid ${BORDER}` }}>
                <Info size={14} style={{ color: GOLD_DIM, flexShrink: 0, marginTop: 2 }} />
                <p className="text-xs" style={{ color: GOLD_DIM }}>
                  These figures are estimates for informational purposes. Tax laws change frequently. Always work with a licensed CPA or tax attorney for filing decisions.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Calculator */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6" style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4 }}>
              <div className="flex items-center gap-2 mb-4">
                <Calculator size={18} style={{ color: GOLD }} />
                <h2 className="text-lg font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
                  Business Tax Estimator
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: GOLD_DIM }}>Gross Revenue / Taxable Income ($)</label>
                  <input type="text" value={calcGross} onChange={(e) => setCalcGross(e.target.value)}
                    placeholder="e.g. 500000"
                    className="w-full px-3 py-2 text-sm outline-none"
                    style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: GOLD_DIM }}>Federal Tax Rate (%)</label>
                    <input type="number" value={calcFedRate} onChange={(e) => setCalcFedRate(e.target.value)}
                      className="w-full px-3 py-2 text-sm outline-none"
                      style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: GOLD_DIM }}>State Tax Rate (%)</label>
                    <input type="number" value={calcStateRate} onChange={(e) => setCalcStateRate(e.target.value)}
                      className="w-full px-3 py-2 text-sm outline-none"
                      style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }} />
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 text-xs"
                  style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: GOLD_DIM }}>
                  <Info size={12} style={{ flexShrink: 0 }} />
                  FICA employer share (7.65%) is included automatically. This is a simplified estimate — not tax advice.
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4" style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4 }}>
              <h2 className="text-lg font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
                Estimated Tax Breakdown
              </h2>
              {[
                { label: 'Gross Income', value: grossNum > 0 ? fmt(grossNum) : '—', bold: false },
                { label: `Federal Tax (${calcFedRate}%)`, value: grossNum > 0 ? fmt(fedTax) : '—', bold: false },
                { label: `State Tax (${calcStateRate}%)`, value: grossNum > 0 ? fmt(stateTax) : '—', bold: false },
                { label: 'FICA — Employer (7.65%)', value: grossNum > 0 ? fmt(ficaTax) : '—', bold: false },
              ].map((row, i) => (
                <div key={row.label} className="flex items-center justify-between py-3"
                  style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <span className="text-sm" style={{ color: GOLD_DIM }}>{row.label}</span>
                  <span className="text-sm font-medium" style={{ color: TEXT_PRIMARY }}>{row.value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between py-3"
                style={{ borderBottom: `2px solid ${BORDER_HOVER}` }}>
                <span className="font-semibold" style={{ color: GOLD }}>Total Estimated Tax</span>
                <span className="text-xl font-bold" style={{ color: GOLD }}>
                  {grossNum > 0 ? fmt(totalTax) : '—'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: GOLD_DIM }}>Effective Rate</span>
                <span className="text-lg font-bold" style={{ color: TEXT_PRIMARY }}>{effectiveRate}%</span>
              </div>
              {grossNum > 0 && (
                <div className="pt-2">
                  <div className="text-xs mb-2" style={{ color: GOLD_DIM }}>After-Tax Income</div>
                  <div className="text-2xl font-bold" style={{ color: TEXT_PRIMARY }}>{fmt(grossNum - totalTax)}</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer Notice */}
        <div className="flex items-start gap-3 p-4"
          style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4 }}>
          <Scale size={15} style={{ color: GOLD_DIM, flexShrink: 0, marginTop: 2 }} />
          <p className="text-xs" style={{ color: GOLD_DIM }}>
            <span style={{ color: GOLD, fontWeight: 600 }}>Disclaimer:</span> This tool is for organizational tracking and estimation only.
            Tax laws vary by jurisdiction and change frequently. All filings should be prepared and reviewed by a qualified CPA or licensed tax professional.
            NoxTitan does not provide tax, legal, or accounting advice.
          </p>
        </div>
      </div>
    </div>
  );
}
