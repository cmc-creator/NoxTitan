'use client';

import { useState } from 'react';
import {
  FileText,
  Plus,
  Search,
  Download,
  Send,
  Eye,
  Copy,
  DollarSign,
  Clock,
  Check,
  AlertTriangle,
  Building2,
  Mail,
  Calendar,
  TrendingUp,
  ChevronRight,
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

type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';

interface Invoice {
  id: string;
  number: string;
  client: string;
  clientEmail: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  status: InvoiceStatus;
  items: number;
  notes?: string;
}

const MOCK_INVOICES: Invoice[] = [
  { id: '1', number: 'INV-2026-041', client: 'Reyes Group LLC', clientEmail: 'billing@reyesgroup.com', issueDate: '2026-04-01', dueDate: '2026-05-01', amount: 12500.00, status: 'paid', items: 3 },
  { id: '2', number: 'INV-2026-042', client: 'Hartwell Industries', clientEmail: 'ap@hartwell.com', issueDate: '2026-04-05', dueDate: '2026-05-05', amount: 8750.00, status: 'sent', items: 2 },
  { id: '3', number: 'INV-2026-043', client: 'Blue Oak Partners', clientEmail: 'finance@blueoak.io', issueDate: '2026-04-10', dueDate: '2026-04-25', amount: 3200.00, status: 'overdue', items: 1, notes: '10 days past due' },
  { id: '4', number: 'INV-2026-044', client: 'Summit Health Group', clientEmail: 'accounts@summithlth.com', issueDate: '2026-04-12', dueDate: '2026-05-12', amount: 22000.00, status: 'sent', items: 5 },
  { id: '5', number: 'INV-2026-045', client: 'Meridian Logistics', clientEmail: 'billing@meridian.co', issueDate: '2026-04-15', dueDate: '2026-05-15', amount: 6400.00, status: 'draft', items: 4 },
  { id: '6', number: 'INV-2026-046', client: 'Clarity Tech Inc.', clientEmail: 'finance@claritytech.com', issueDate: '2026-04-18', dueDate: '2026-05-18', amount: 9875.00, status: 'sent', items: 2 },
  { id: '7', number: 'INV-2026-040', client: 'Vantage Capital', clientEmail: 'ap@vantagecap.com', issueDate: '2026-03-25', dueDate: '2026-04-10', amount: 4500.00, status: 'overdue', items: 1, notes: '18 days past due — follow up required' },
  { id: '8', number: 'INV-2026-039', client: 'Reyes Group LLC', clientEmail: 'billing@reyesgroup.com', issueDate: '2026-03-01', dueDate: '2026-04-01', amount: 11000.00, status: 'paid', items: 3 },
];

const STATUS_CONFIG: Record<InvoiceStatus, { label: string; textColor: string; bg: string; icon: React.ElementType }> = {
  draft: { label: 'Draft', textColor: TEXT_MUTED, bg: 'rgba(201,168,76,0.06)', icon: FileText },
  sent: { label: 'Sent', textColor: GOLD, bg: CARD_ACCENT, icon: Send },
  paid: { label: 'Paid', textColor: 'rgb(74,222,128)', bg: 'rgba(34,197,94,0.1)', icon: Check },
  overdue: { label: 'Overdue', textColor: 'rgb(248,113,113)', bg: 'rgba(239,68,68,0.1)', icon: AlertTriangle },
  cancelled: { label: 'Cancelled', textColor: TEXT_MUTED, bg: 'rgba(201,168,76,0.04)', icon: FileText },
};

const totalPaid = MOCK_INVOICES.filter(i => i.status === 'paid').reduce((s, i) => s + i.amount, 0);
const totalOutstanding = MOCK_INVOICES.filter(i => i.status === 'sent').reduce((s, i) => s + i.amount, 0);
const totalOverdue = MOCK_INVOICES.filter(i => i.status === 'overdue').reduce((s, i) => s + i.amount, 0);
const totalDraft = MOCK_INVOICES.filter(i => i.status === 'draft').reduce((s, i) => s + i.amount, 0);

const SUMMARY = [
  { label: 'Collected (MTD)', value: `$${totalPaid.toLocaleString()}`, icon: Check, color: 'rgb(74,222,128)' },
  { label: 'Outstanding', value: `$${totalOutstanding.toLocaleString()}`, icon: Send, color: GOLD },
  { label: 'Overdue', value: `$${totalOverdue.toLocaleString()}`, icon: AlertTriangle, color: 'rgb(248,113,113)' },
  { label: 'Draft', value: `$${totalDraft.toLocaleString()}`, icon: FileText, color: GOLD_DIM },
];

export default function InvoicesPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<InvoiceStatus | 'all'>('all');
  const [showNew, setShowNew] = useState(false);

  const filtered = MOCK_INVOICES.filter((inv) => {
    const q = search.toLowerCase();
    const matchSearch = inv.client.toLowerCase().includes(q) || inv.number.toLowerCase().includes(q) || inv.clientEmail.toLowerCase().includes(q);
    const matchStatus = statusFilter === 'all' || inv.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="min-h-screen p-6 md:p-8" style={{ backgroundColor: BODY_BG, color: TEXT_PRIMARY }}>
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
              Invoicing
            </h1>
            <p className="mt-1 text-sm" style={{ color: GOLD_DIM }}>
              Create, send, and track professional invoices
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
              style={{ border: `1px solid ${BORDER}`, borderRadius: 4, color: GOLD_DIM, background: CARD_SUBTLE }}>
              <Download size={15} /> Export
            </button>
            <button onClick={() => setShowNew(!showNew)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold"
              style={{ border: `1px solid ${BORDER_HOVER}`, borderRadius: 4, color: GOLD, background: CARD_ACCENT }}>
              <Plus size={15} /> New Invoice
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SUMMARY.map((s) => (
            <div key={s.label} className="p-5" style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4 }}>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2" style={{ background: CARD_MID, borderRadius: 4 }}>
                  <s.icon size={17} style={{ color: s.color }} />
                </div>
              </div>
              <div className="text-2xl font-bold" style={{ color: TEXT_PRIMARY }}>{s.value}</div>
              <div className="text-xs mt-1" style={{ color: GOLD_DIM }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* New Invoice Form */}
        {showNew && (
          <div className="p-6" style={{ background: CARD_BG, border: `1px solid ${BORDER_HOVER}`, borderRadius: 4 }}>
            <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
              Create New Invoice
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {[
                { label: 'Client Name', placeholder: 'Client or company name' },
                { label: 'Client Email', placeholder: 'billing@client.com' },
                { label: 'Invoice #', placeholder: 'INV-2026-047' },
                { label: 'Issue Date', placeholder: 'YYYY-MM-DD' },
                { label: 'Due Date', placeholder: 'YYYY-MM-DD' },
                { label: 'Payment Terms', placeholder: 'Net 30' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-xs font-medium mb-1" style={{ color: GOLD_DIM }}>{f.label}</label>
                  <input type="text" placeholder={f.placeholder} className="w-full px-3 py-2 text-sm outline-none"
                    style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }} />
                </div>
              ))}
            </div>
            {/* Line Items */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold" style={{ color: GOLD_DIM }}>LINE ITEMS</span>
                <button className="text-xs flex items-center gap-1" style={{ color: GOLD }}>
                  <Plus size={11} /> Add Item
                </button>
              </div>
              <div style={{ border: `1px solid ${BORDER}`, borderRadius: 4, overflow: 'hidden' }}>
                <div className="grid grid-cols-12 gap-2 px-3 py-2 text-xs font-medium" style={{ background: CARD_SUBTLE, borderBottom: `1px solid ${BORDER}`, color: GOLD_DIM }}>
                  <span className="col-span-6">Description</span>
                  <span className="col-span-2 text-right">Qty</span>
                  <span className="col-span-2 text-right">Rate</span>
                  <span className="col-span-2 text-right">Amount</span>
                </div>
                <div className="grid grid-cols-12 gap-2 px-3 py-2">
                  <input className="col-span-6 px-2 py-1 text-sm outline-none" placeholder="Service description..."
                    style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }} />
                  <input className="col-span-2 px-2 py-1 text-sm outline-none text-right" placeholder="1"
                    style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }} />
                  <input className="col-span-2 px-2 py-1 text-sm outline-none text-right" placeholder="0.00"
                    style={{ background: CARD_SUBTLE, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }} />
                  <div className="col-span-2 flex items-center justify-end text-sm" style={{ color: GOLD_DIM }}>$0.00</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setShowNew(false)} className="px-4 py-2 text-sm"
                style={{ border: `1px solid ${BORDER}`, borderRadius: 4, color: GOLD_DIM }}>Cancel</button>
              <button className="px-4 py-2 text-sm" style={{ border: `1px solid ${BORDER}`, borderRadius: 4, color: GOLD_DIM, background: CARD_SUBTLE }}>
                Save Draft
              </button>
              <button className="flex items-center gap-2 px-5 py-2 text-sm font-semibold"
                style={{ background: CARD_ACCENT, border: `1px solid ${BORDER_HOVER}`, borderRadius: 4, color: GOLD }}>
                <Send size={14} /> Send Invoice
              </button>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: GOLD_DIM }} />
            <input type="text" placeholder="Search invoices..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-sm outline-none"
              style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4, color: TEXT_PRIMARY }} />
          </div>
          <div className="flex gap-2 flex-wrap">
            {(['all', 'draft', 'sent', 'paid', 'overdue', 'cancelled'] as const).map((s) => (
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
        </div>

        {/* Invoice Table */}
        <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4, overflow: 'hidden' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}`, background: CARD_SUBTLE }}>
                  {['Invoice #', 'Client', 'Issue Date', 'Due Date', 'Amount', 'Items', 'Status', ''].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold" style={{ color: GOLD_DIM }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((inv, i) => {
                  const sc = STATUS_CONFIG[inv.status];
                  return (
                    <tr key={inv.id} style={{ borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? 'transparent' : CARD_SUBTLE }}>
                      <td className="px-4 py-3 font-mono text-xs font-semibold" style={{ color: GOLD }}>{inv.number}</td>
                      <td className="px-4 py-3">
                        <div style={{ color: TEXT_PRIMARY }}>{inv.client}</div>
                        <div className="text-xs flex items-center gap-1 mt-0.5" style={{ color: GOLD_DIM }}>
                          <Mail size={10} />{inv.clientEmail}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: GOLD_DIM }}>{inv.issueDate}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: inv.status === 'overdue' ? 'rgb(248,113,113)' : GOLD_DIM }}>
                        {inv.dueDate}
                        {inv.notes && <div className="text-xs mt-0.5" style={{ color: 'rgb(248,113,113)' }}>{inv.notes}</div>}
                      </td>
                      <td className="px-4 py-3 font-semibold" style={{ color: TEXT_PRIMARY }}>
                        ${inv.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-4 py-3 text-xs text-center" style={{ color: GOLD_DIM }}>{inv.items}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium"
                          style={{ background: sc.bg, borderRadius: 4, color: sc.textColor }}>
                          <sc.icon size={10} />{sc.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button title="View" style={{ color: GOLD_DIM }}><Eye size={14} /></button>
                          <button title="Duplicate" style={{ color: GOLD_DIM }}><Copy size={14} /></button>
                          {inv.status === 'draft' && (
                            <button title="Send" style={{ color: GOLD }}><Send size={14} /></button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && (
                  <tr><td colSpan={8} className="px-4 py-12 text-center text-sm" style={{ color: GOLD_DIM }}>No invoices found</td></tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 flex items-center justify-between" style={{ borderTop: `1px solid ${BORDER}` }}>
            <span className="text-xs" style={{ color: GOLD_DIM }}>{filtered.length} invoices</span>
            <span className="text-sm font-semibold" style={{ color: GOLD }}>
              Total: ${filtered.reduce((s, i) => s + i.amount, 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Aging Report Summary */}
        <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4, overflow: 'hidden' }}>
          <div className="px-5 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
            <h2 className="text-lg font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
              Accounts Receivable — Aging Summary
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 divide-x" style={{ borderColor: BORDER }}>
            {[
              { period: 'Current (0–30d)', amount: totalOutstanding, color: GOLD },
              { period: '31–60 Days', amount: 3200, color: 'rgb(251,191,36)' },
              { period: '61–90 Days', amount: 4500, color: 'rgb(251,146,60)' },
              { period: '90+ Days', amount: 0, color: 'rgb(248,113,113)' },
            ].map((ag) => (
              <div key={ag.period} className="px-5 py-4" style={{ borderRight: `1px solid ${BORDER}` }}>
                <div className="text-xs mb-1" style={{ color: GOLD_DIM }}>{ag.period}</div>
                <div className="text-xl font-bold" style={{ color: ag.amount > 0 ? ag.color : TEXT_MUTED }}>
                  ${ag.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
