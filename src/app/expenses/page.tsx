'use client';

import { useState } from 'react';
import {
  CreditCard,
  Plus,
  Search,
  Filter,
  Download,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Check,
  X,
  Clock,
  ChevronDown,
  Receipt,
  Tag,
  Building2,
  User,
} from 'lucide-react';

const GOLD = '#C9A84C';
const GOLD_DIM = '#9E8F75';
const TEXT_PRIMARY = '#F0EBE0';
const CARD_BG = '#110F0B';
const BODY_BG = '#070604';
const BORDER = 'rgba(201,168,76,0.22)';
const BORDER_HOVER = 'rgba(201,168,76,0.45)';
const CARD_SUBTLE = 'rgba(201,168,76,0.04)';
const CARD_MID = 'rgba(201,168,76,0.08)';

type ExpenseStatus = 'approved' | 'pending' | 'rejected';
type Category = 'All' | 'Travel' | 'Meals' | 'Equipment' | 'Software' | 'Office' | 'Training' | 'Other';

interface Expense {
  id: string;
  date: string;
  description: string;
  category: Omit<Category, 'All'>;
  amount: number;
  status: ExpenseStatus;
  submittedBy: string;
  department: string;
  receipt: boolean;
  notes?: string;
}

const MOCK_EXPENSES: Expense[] = [
  { id: 'EXP-001', date: '2026-04-25', description: 'Team lunch — Q2 kickoff', category: 'Meals', amount: 312.50, status: 'approved', submittedBy: 'Sarah Chen', department: 'Operations', receipt: true },
  { id: 'EXP-002', date: '2026-04-24', description: 'Flight — Chicago conference', category: 'Travel', amount: 847.00, status: 'pending', submittedBy: 'Marcus Reid', department: 'Sales', receipt: true },
  { id: 'EXP-003', date: '2026-04-23', description: 'Adobe Creative Cloud (annual)', category: 'Software', amount: 599.88, status: 'approved', submittedBy: 'Jamie Torres', department: 'Marketing', receipt: true },
  { id: 'EXP-004', date: '2026-04-22', description: 'Office supplies — Q2 restock', category: 'Office', amount: 128.40, status: 'approved', submittedBy: 'Alex Kim', department: 'Admin', receipt: false },
  { id: 'EXP-005', date: '2026-04-21', description: 'Leadership training course', category: 'Training', amount: 1200.00, status: 'pending', submittedBy: 'Jordan Blake', department: 'HR', receipt: true },
  { id: 'EXP-006', date: '2026-04-20', description: 'Hotel — 3 nights Nashville', category: 'Travel', amount: 492.00, status: 'approved', submittedBy: 'Marcus Reid', department: 'Sales', receipt: true },
  { id: 'EXP-007', date: '2026-04-19', description: 'Mechanical keyboard (remote)', category: 'Equipment', amount: 189.99, status: 'rejected', submittedBy: 'Casey Nguyen', department: 'Engineering', receipt: false, notes: 'Requires manager pre-approval for hardware over $150' },
  { id: 'EXP-008', date: '2026-04-18', description: 'Client dinner — Reyes Group', category: 'Meals', amount: 560.75, status: 'approved', submittedBy: 'Sarah Chen', department: 'Sales', receipt: true },
  { id: 'EXP-009', date: '2026-04-17', description: 'Zoom Pro — monthly', category: 'Software', amount: 149.90, status: 'approved', submittedBy: 'Alex Kim', department: 'Admin', receipt: true },
  { id: 'EXP-010', date: '2026-04-16', description: 'OSHA compliance workshop', category: 'Training', amount: 350.00, status: 'pending', submittedBy: 'Jordan Blake', department: 'Safety', receipt: true },
];

const CATEGORIES: Category[] = ['All', 'Travel', 'Meals', 'Equipment', 'Software', 'Office', 'Training', 'Other'];

const STATUS_STYLE: Record<ExpenseStatus, { label: string; color: string; bg: string }> = {
  approved: { label: 'Approved', color: 'text-green-400', bg: 'rgba(34,197,94,0.1)' },
  pending: { label: 'Pending', color: 'text-[#C9A84C]', bg: 'rgba(201,168,76,0.12)' },
  rejected: { label: 'Rejected', color: 'text-red-400', bg: 'rgba(239,68,68,0.1)' },
};

const SUMMARY_CARDS = [
  { label: 'Total This Month', value: '$4,830.42', icon: DollarSign, delta: '+8.3%', up: true },
  { label: 'Pending Review', value: '$2,397.00', icon: Clock, delta: '3 items', up: null },
  { label: 'Approved', value: '$2,033.42', icon: Check, delta: '-12.1%', up: false },
  { label: 'Rejected', value: '$189.99', icon: X, delta: '1 item', up: null },
];

export default function ExpensesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>('All');
  const [statusFilter, setStatusFilter] = useState<ExpenseStatus | 'all'>('all');
  const [showForm, setShowForm] = useState(false);

  const filtered = MOCK_EXPENSES.filter((e) => {
    const matchSearch = e.description.toLowerCase().includes(search.toLowerCase()) ||
      e.submittedBy.toLowerCase().includes(search.toLowerCase()) ||
      e.id.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'All' || e.category === category;
    const matchStatus = statusFilter === 'all' || e.status === statusFilter;
    return matchSearch && matchCat && matchStatus;
  });

  return (
    <div className="min-h-screen p-6 md:p-8" style={{ backgroundColor: BODY_BG, color: TEXT_PRIMARY }}>
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
              Expense Tracking
            </h1>
            <p className="mt-1 text-sm" style={{ color: GOLD_DIM }}>
              Submit, review, and manage business expenses
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors"
              style={{ border: `1px solid ${BORDER}`, borderRadius: 4, color: GOLD_DIM, background: CARD_SUBTLE }}
            >
              <Download size={15} /> Export
            </button>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors"
              style={{ border: `1px solid ${BORDER_HOVER}`, borderRadius: 4, color: GOLD, background: 'rgba(201,168,76,0.12)' }}
            >
              <Plus size={15} /> New Expense
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SUMMARY_CARDS.map((card) => (
            <div key={card.label} className="p-5" style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4 }}>
              <div className="flex items-start justify-between mb-3">
                <div className="p-2" style={{ background: CARD_MID, borderRadius: 4 }}>
                  <card.icon size={18} style={{ color: GOLD }} />
                </div>
                {card.up !== null && (
                  <span className="flex items-center gap-1 text-xs" style={{ color: card.up ? 'rgb(74,222,128)' : 'rgb(248,113,113)' }}>
                    {card.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {card.delta}
                  </span>
                )}
                {card.up === null && (
                  <span className="text-xs" style={{ color: GOLD_DIM }}>{card.delta}</span>
                )}
              </div>
              <div className="text-2xl font-bold" style={{ color: TEXT_PRIMARY }}>{card.value}</div>
              <div className="text-xs mt-1" style={{ color: GOLD_DIM }}>{card.label}</div>
            </div>
          ))}
        </div>

        {/* New Expense Form */}
        {showForm && (
          <div className="p-6" style={{ background: CARD_BG, border: `1px solid ${BORDER_HOVER}`, borderRadius: 4 }}>
            <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
              Submit New Expense
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'Description', placeholder: 'Expense description...', wide: true },
                { label: 'Amount ($)', placeholder: '0.00' },
                { label: 'Date', placeholder: 'YYYY-MM-DD' },
              ].map((field) => (
                <div key={field.label} className={field.wide ? 'lg:col-span-1' : ''}>
                  <label className="block text-xs font-medium mb-1" style={{ color: GOLD_DIM }}>{field.label}</label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 text-sm outline-none"
                    style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: GOLD_DIM }}>Category</label>
                <select
                  className="w-full px-3 py-2 text-sm outline-none"
                  style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }}
                >
                  {CATEGORIES.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: GOLD_DIM }}>Department</label>
                <select
                  className="w-full px-3 py-2 text-sm outline-none"
                  style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }}
                >
                  {['Admin','Engineering','HR','Marketing','Operations','Safety','Sales'].map(d => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: GOLD_DIM }}>Notes (optional)</label>
                <input type="text" placeholder="Additional notes..." className="w-full px-3 py-2 text-sm outline-none"
                  style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }} />
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: GOLD_DIM }}>
                <input type="checkbox" className="accent-[#C9A84C]" />
                Receipt attached
              </label>
              <div className="flex-1" />
              <button onClick={() => setShowForm(false)} className="px-4 py-2 text-sm"
                style={{ border: `1px solid ${BORDER}`, borderRadius: 4, color: GOLD_DIM }}>
                Cancel
              </button>
              <button className="px-5 py-2 text-sm font-semibold"
                style={{ background: 'rgba(201,168,76,0.15)', border: `1px solid ${BORDER_HOVER}`, borderRadius: 4, color: GOLD }}>
                Submit Expense
              </button>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: GOLD_DIM }} />
            <input
              type="text"
              placeholder="Search expenses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-sm outline-none"
              style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className="px-3 py-1.5 text-xs font-medium transition-colors"
                style={{
                  borderRadius: 4,
                  border: `1px solid ${category === c ? BORDER_HOVER : BORDER}`,
                  color: category === c ? GOLD : GOLD_DIM,
                  background: category === c ? 'rgba(201,168,76,0.12)' : CARD_SUBTLE,
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {(['all', 'pending', 'approved', 'rejected'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className="px-3 py-1.5 text-xs font-medium capitalize transition-colors"
                style={{
                  borderRadius: 4,
                  border: `1px solid ${statusFilter === s ? BORDER_HOVER : BORDER}`,
                  color: statusFilter === s ? GOLD : GOLD_DIM,
                  background: statusFilter === s ? 'rgba(201,168,76,0.12)' : CARD_SUBTLE,
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Expense Table */}
        <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4, overflow: 'hidden' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}`, background: CARD_SUBTLE }}>
                  {['ID', 'Date', 'Description', 'Category', 'Department', 'Submitted By', 'Amount', 'Receipt', 'Status'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold" style={{ color: GOLD_DIM }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((exp, i) => {
                  const s = STATUS_STYLE[exp.status];
                  return (
                    <tr
                      key={exp.id}
                      style={{ borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? 'transparent' : CARD_SUBTLE }}
                    >
                      <td className="px-4 py-3 font-mono text-xs" style={{ color: GOLD_DIM }}>{exp.id}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: GOLD_DIM }}>{exp.date}</td>
                      <td className="px-4 py-3">
                        <div style={{ color: TEXT_PRIMARY }}>{exp.description}</div>
                        {exp.notes && <div className="text-xs mt-0.5" style={{ color: 'rgb(248,113,113)' }}>{exp.notes}</div>}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs"
                          style={{ background: CARD_MID, borderRadius: 4, color: GOLD }}>
                          <Tag size={10} />{exp.category}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: GOLD_DIM }}>
                        <span className="inline-flex items-center gap-1"><Building2 size={11} />{exp.department}</span>
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: GOLD_DIM }}>
                        <span className="inline-flex items-center gap-1"><User size={11} />{exp.submittedBy}</span>
                      </td>
                      <td className="px-4 py-3 font-semibold" style={{ color: TEXT_PRIMARY }}>
                        ${exp.amount.toFixed(2)}
                      </td>
                      <td className="px-4 py-3">
                        {exp.receipt
                          ? <span className="text-xs text-green-400 flex items-center gap-1"><Check size={12} />Yes</span>
                          : <span className="text-xs text-red-400 flex items-center gap-1"><X size={12} />No</span>}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium"
                          style={{ borderRadius: 4, background: s.bg, color: s.color.replace('text-', '') === 'green-400' ? 'rgb(74,222,128)' : s.color.replace('text-', '') === 'red-400' ? 'rgb(248,113,113)' : GOLD }}>
                          {s.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={9} className="px-4 py-12 text-center text-sm" style={{ color: GOLD_DIM }}>
                      No expenses match your filters
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 flex items-center justify-between" style={{ borderTop: `1px solid ${BORDER}` }}>
            <span className="text-xs" style={{ color: GOLD_DIM }}>{filtered.length} of {MOCK_EXPENSES.length} expenses</span>
            <span className="text-sm font-semibold" style={{ color: GOLD }}>
              Total: ${filtered.reduce((sum, e) => sum + e.amount, 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(
            MOCK_EXPENSES.reduce((acc, e) => {
              acc[e.category as string] = (acc[e.category as string] || 0) + e.amount;
              return acc;
            }, {} as Record<string, number>)
          ).sort((a, b) => b[1] - a[1]).map(([cat, total]) => (
            <div key={cat} className="p-4 flex items-center gap-3"
              style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4 }}>
              <div className="p-2 shrink-0" style={{ background: CARD_MID, borderRadius: 4 }}>
                <Receipt size={16} style={{ color: GOLD }} />
              </div>
              <div>
                <div className="text-xs" style={{ color: GOLD_DIM }}>{cat}</div>
                <div className="font-semibold" style={{ color: TEXT_PRIMARY }}>${total.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
