'use client';

import { useState } from 'react';
import {
  Target,
  Plus,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Check,
  DollarSign,
  BarChart3,
  Edit2,
  Building2,
  ChevronRight,
  Minus,
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

type BudgetStatus = 'on-track' | 'at-risk' | 'over-budget' | 'under-utilized';
type Period = 'Q1 2026' | 'Q2 2026' | 'Q3 2026' | 'Q4 2026' | 'FY 2026';

interface Budget {
  id: string;
  department: string;
  category: string;
  allocated: number;
  spent: number;
  committed: number; // pending/approved not yet paid
  period: string;
  status: BudgetStatus;
  manager: string;
}

const MOCK_BUDGETS: Budget[] = [
  { id: '1', department: 'Engineering', category: 'Headcount', allocated: 420000, spent: 298500, committed: 42000, period: 'Q2 2026', status: 'on-track', manager: 'Casey Nguyen' },
  { id: '2', department: 'Engineering', category: 'Software & Tools', allocated: 35000, spent: 28400, committed: 3200, period: 'Q2 2026', status: 'at-risk', manager: 'Casey Nguyen' },
  { id: '3', department: 'Sales', category: 'Headcount', allocated: 310000, spent: 241000, committed: 62000, period: 'Q2 2026', status: 'on-track', manager: 'Marcus Reid' },
  { id: '4', department: 'Sales', category: 'Travel & Entertainment', allocated: 28000, spent: 31200, committed: 1400, period: 'Q2 2026', status: 'over-budget', manager: 'Marcus Reid' },
  { id: '5', department: 'Marketing', category: 'Campaigns', allocated: 85000, spent: 52000, committed: 18000, period: 'Q2 2026', status: 'on-track', manager: 'Jamie Torres' },
  { id: '6', department: 'Marketing', category: 'Software & Tools', allocated: 12000, spent: 4200, committed: 0, period: 'Q2 2026', status: 'under-utilized', manager: 'Jamie Torres' },
  { id: '7', department: 'HR', category: 'Recruiting', allocated: 40000, spent: 38800, committed: 4200, period: 'Q2 2026', status: 'over-budget', manager: 'Jordan Blake' },
  { id: '8', department: 'HR', category: 'Training & Development', allocated: 18000, spent: 9500, committed: 2000, period: 'Q2 2026', status: 'on-track', manager: 'Jordan Blake' },
  { id: '9', department: 'Operations', category: 'Facilities', allocated: 55000, spent: 41200, committed: 8800, period: 'Q2 2026', status: 'on-track', manager: 'Sarah Chen' },
  { id: '10', department: 'Operations', category: 'Equipment', allocated: 30000, spent: 6200, committed: 0, period: 'Q2 2026', status: 'under-utilized', manager: 'Sarah Chen' },
  { id: '11', department: 'Admin', category: 'Office & Supplies', allocated: 8000, spent: 5400, committed: 800, period: 'Q2 2026', status: 'on-track', manager: 'Alex Kim' },
  { id: '12', department: 'Safety', category: 'Compliance & Training', allocated: 22000, spent: 18700, committed: 2000, period: 'Q2 2026', status: 'on-track', manager: 'Jordan Blake' },
];

const STATUS_CONFIG: Record<BudgetStatus, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  'on-track': { label: 'On Track', color: 'rgb(74,222,128)', bg: 'rgba(34,197,94,0.1)', icon: Check },
  'at-risk': { label: 'At Risk', color: 'rgb(251,191,36)', bg: 'rgba(251,191,36,0.1)', icon: AlertTriangle },
  'over-budget': { label: 'Over Budget', color: 'rgb(248,113,113)', bg: 'rgba(239,68,68,0.1)', icon: TrendingUp },
  'under-utilized': { label: 'Under-Utilized', color: GOLD_DIM, bg: CARD_SUBTLE, icon: TrendingDown },
};

function ProgressBar({ spent, committed, allocated }: { spent: number; committed: number; allocated: number }) {
  const spentPct = Math.min((spent / allocated) * 100, 100);
  const committedPct = Math.min((committed / allocated) * 100, 100 - spentPct);
  const isOver = spent + committed > allocated;
  return (
    <div className="w-full h-2 rounded-sm overflow-hidden" style={{ background: CARD_MID }}>
      <div className="h-full flex">
        <div className="h-full transition-all" style={{ width: `${spentPct}%`, background: isOver ? 'rgb(248,113,113)' : GOLD }} />
        <div className="h-full transition-all" style={{ width: `${committedPct}%`, background: isOver ? 'rgba(248,113,113,0.4)' : 'rgba(201,168,76,0.4)' }} />
      </div>
    </div>
  );
}

function fmt(n: number) { return '$' + n.toLocaleString('en-US'); }

export default function BudgetsPage() {
  const [period, setPeriod] = useState<Period>('Q2 2026');
  const [deptFilter, setDeptFilter] = useState<string>('All');
  const [showNew, setShowNew] = useState(false);

  const departments = ['All', ...Array.from(new Set(MOCK_BUDGETS.map(b => b.department))).sort()];
  const filtered = MOCK_BUDGETS.filter(b =>
    b.period === period && (deptFilter === 'All' || b.department === deptFilter)
  );

  const totalAllocated = filtered.reduce((s, b) => s + b.allocated, 0);
  const totalSpent = filtered.reduce((s, b) => s + b.spent, 0);
  const totalCommitted = filtered.reduce((s, b) => s + b.committed, 0);
  const totalRemaining = totalAllocated - totalSpent - totalCommitted;
  const overBudgetCount = filtered.filter(b => b.status === 'over-budget').length;
  const atRiskCount = filtered.filter(b => b.status === 'at-risk').length;

  const PERIODS: Period[] = ['Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026', 'FY 2026'];

  return (
    <div className="min-h-screen p-6 md:p-8" style={{ backgroundColor: BODY_BG, color: TEXT_PRIMARY }}>
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
              Budget Management
            </h1>
            <p className="mt-1 text-sm" style={{ color: GOLD_DIM }}>
              Set, monitor, and optimize departmental budgets
            </p>
          </div>
          <button onClick={() => setShowNew(!showNew)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold"
            style={{ border: `1px solid ${BORDER_HOVER}`, borderRadius: 4, color: GOLD, background: CARD_ACCENT }}>
            <Plus size={15} /> New Budget
          </button>
        </div>

        {/* Period Tabs */}
        <div className="flex gap-2 flex-wrap">
          {PERIODS.map((p) => (
            <button key={p} onClick={() => setPeriod(p)}
              className="px-4 py-2 text-sm font-medium transition-colors"
              style={{
                borderRadius: 4,
                border: `1px solid ${period === p ? BORDER_HOVER : BORDER}`,
                color: period === p ? GOLD : GOLD_DIM,
                background: period === p ? CARD_ACCENT : CARD_SUBTLE,
              }}>
              {p}
            </button>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Allocated', value: fmt(totalAllocated), icon: Target, sub: `${period}` },
            { label: 'Spent', value: fmt(totalSpent), icon: DollarSign, sub: `${((totalSpent / totalAllocated) * 100).toFixed(1)}% of budget` },
            { label: 'Committed', value: fmt(totalCommitted), icon: BarChart3, sub: 'Approved, unpaid' },
            { label: 'Remaining', value: fmt(totalRemaining), icon: totalRemaining >= 0 ? TrendingDown : TrendingUp, sub: totalRemaining >= 0 ? 'Available' : 'Over budget' },
          ].map((c) => (
            <div key={c.label} className="p-5" style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4 }}>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2" style={{ background: CARD_MID, borderRadius: 4 }}>
                  <c.icon size={17} style={{ color: GOLD }} />
                </div>
              </div>
              <div className="text-2xl font-bold" style={{ color: totalRemaining < 0 && c.label === 'Remaining' ? 'rgb(248,113,113)' : TEXT_PRIMARY }}>
                {c.value}
              </div>
              <div className="text-xs mt-1" style={{ color: GOLD_DIM }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Alerts */}
        {(overBudgetCount > 0 || atRiskCount > 0) && (
          <div className="flex flex-wrap gap-3">
            {overBudgetCount > 0 && (
              <div className="flex items-center gap-2 px-4 py-3 text-sm"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 4, color: 'rgb(248,113,113)' }}>
                <AlertTriangle size={15} />
                {overBudgetCount} budget{overBudgetCount > 1 ? 's' : ''} over limit — immediate review required
              </div>
            )}
            {atRiskCount > 0 && (
              <div className="flex items-center gap-2 px-4 py-3 text-sm"
                style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)', borderRadius: 4, color: 'rgb(251,191,36)' }}>
                <AlertTriangle size={15} />
                {atRiskCount} budget{atRiskCount > 1 ? 's' : ''} approaching limit
              </div>
            )}
          </div>
        )}

        {/* New Budget Form */}
        {showNew && (
          <div className="p-6" style={{ background: CARD_BG, border: `1px solid ${BORDER_HOVER}`, borderRadius: 4 }}>
            <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
              Create Budget
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Department', type: 'select', opts: ['Admin','Engineering','HR','Marketing','Operations','Safety','Sales'] },
                { label: 'Category', type: 'text', placeholder: 'e.g. Headcount, Software' },
                { label: 'Period', type: 'select', opts: PERIODS },
                { label: 'Allocated Amount ($)', type: 'text', placeholder: '0.00' },
                { label: 'Manager', type: 'text', placeholder: 'Budget owner name' },
                { label: 'Notes', type: 'text', placeholder: 'Optional notes' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-xs font-medium mb-1" style={{ color: GOLD_DIM }}>{f.label}</label>
                  {f.type === 'select' ? (
                    <select className="w-full px-3 py-2 text-sm outline-none"
                      style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }}>
                      {f.opts?.map(o => <option key={o}>{o}</option>)}
                    </select>
                  ) : (
                    <input type="text" placeholder={f.placeholder} className="w-full px-3 py-2 text-sm outline-none"
                      style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowNew(false)} className="px-4 py-2 text-sm"
                style={{ border: `1px solid ${BORDER}`, borderRadius: 4, color: GOLD_DIM }}>Cancel</button>
              <button className="px-5 py-2 text-sm font-semibold"
                style={{ background: CARD_ACCENT, border: `1px solid ${BORDER_HOVER}`, borderRadius: 4, color: GOLD }}>
                Create Budget
              </button>
            </div>
          </div>
        )}

        {/* Department Filter */}
        <div className="flex gap-2 flex-wrap">
          {departments.map((d) => (
            <button key={d} onClick={() => setDeptFilter(d)}
              className="px-3 py-1.5 text-xs font-medium"
              style={{
                borderRadius: 4,
                border: `1px solid ${deptFilter === d ? BORDER_HOVER : BORDER}`,
                color: deptFilter === d ? GOLD : GOLD_DIM,
                background: deptFilter === d ? CARD_ACCENT : CARD_SUBTLE,
              }}>
              {d}
            </button>
          ))}
        </div>

        {/* Budget Rows */}
        <div className="space-y-3">
          {filtered.map((b) => {
            const sc = STATUS_CONFIG[b.status];
            const spentPct = (b.spent / b.allocated) * 100;
            const totalUsed = ((b.spent + b.committed) / b.allocated) * 100;
            const remaining = b.allocated - b.spent - b.committed;
            return (
              <div key={b.id} className="p-5" style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4 }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <Building2 size={14} style={{ color: GOLD_DIM }} />
                        <span className="font-semibold" style={{ color: TEXT_PRIMARY }}>{b.department}</span>
                      </div>
                      <span style={{ color: TEXT_MUTED }}>·</span>
                      <span className="text-sm" style={{ color: GOLD_DIM }}>{b.category}</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium"
                        style={{ background: sc.bg, borderRadius: 4, color: sc.color }}>
                        <sc.icon size={10} />{sc.label}
                      </span>
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: TEXT_MUTED }}>Manager: {b.manager}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-lg font-bold" style={{ color: TEXT_PRIMARY }}>{fmt(b.allocated)}</div>
                    <div className="text-xs" style={{ color: GOLD_DIM }}>allocated</div>
                  </div>
                </div>

                <ProgressBar spent={b.spent} committed={b.committed} allocated={b.allocated} />

                <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                  <div className="flex gap-4 text-xs">
                    <span style={{ color: GOLD_DIM }}>Spent: <span style={{ color: b.status === 'over-budget' ? 'rgb(248,113,113)' : TEXT_PRIMARY }}>{fmt(b.spent)}</span></span>
                    <span style={{ color: GOLD_DIM }}>Committed: <span style={{ color: TEXT_PRIMARY }}>{fmt(b.committed)}</span></span>
                    <span style={{ color: GOLD_DIM }}>Remaining: <span style={{ color: remaining >= 0 ? TEXT_PRIMARY : 'rgb(248,113,113)' }}>{fmt(remaining)}</span></span>
                  </div>
                  <div className="text-xs font-semibold" style={{ color: totalUsed > 100 ? 'rgb(248,113,113)' : GOLD }}>
                    {Math.min(totalUsed, 100).toFixed(1)}% used{totalUsed > 100 ? ` (+${(totalUsed - 100).toFixed(1)}% over)` : ''}
                  </div>
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div className="py-12 text-center text-sm" style={{ color: GOLD_DIM }}>
              No budgets found for the selected filters
            </div>
          )}
        </div>

        {/* Department Summary Table */}
        <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4, overflow: 'hidden' }}>
          <div className="px-5 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
            <h2 className="text-lg font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
              Department Summary — {period}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}`, background: CARD_SUBTLE }}>
                  {['Department', 'Allocated', 'Spent', 'Committed', 'Remaining', 'Utilization'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold" style={{ color: GOLD_DIM }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from(new Set(filtered.map(b => b.department))).sort().map((dept, i) => {
                  const rows = filtered.filter(b => b.department === dept);
                  const dAlloc = rows.reduce((s, b) => s + b.allocated, 0);
                  const dSpent = rows.reduce((s, b) => s + b.spent, 0);
                  const dComm = rows.reduce((s, b) => s + b.committed, 0);
                  const dRem = dAlloc - dSpent - dComm;
                  const dUtil = ((dSpent + dComm) / dAlloc * 100).toFixed(1);
                  return (
                    <tr key={dept} style={{ borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? 'transparent' : CARD_SUBTLE }}>
                      <td className="px-4 py-3 font-medium" style={{ color: TEXT_PRIMARY }}>{dept}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: GOLD_DIM }}>{fmt(dAlloc)}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: TEXT_PRIMARY }}>{fmt(dSpent)}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: GOLD_DIM }}>{fmt(dComm)}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: dRem >= 0 ? TEXT_PRIMARY : 'rgb(248,113,113)' }}>{fmt(dRem)}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 rounded-sm overflow-hidden" style={{ background: CARD_MID, minWidth: 60 }}>
                            <div className="h-full" style={{ width: `${Math.min(parseFloat(dUtil), 100)}%`, background: parseFloat(dUtil) > 100 ? 'rgb(248,113,113)' : GOLD }} />
                          </div>
                          <span className="text-xs font-semibold" style={{ color: parseFloat(dUtil) > 100 ? 'rgb(248,113,113)' : GOLD }}>{dUtil}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
