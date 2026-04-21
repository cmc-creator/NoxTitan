import Link from 'next/link';

const GOLD = '#C9A84C';
const GOLD_DIM = '#9E8F75';
const TEXT_PRIMARY = '#F0EBE0';
const CARD_BG = '#110F0B';
const BORDER = 'rgba(201,168,76,0.22)';
const BORDER_HOVER = 'rgba(201,168,76,0.45)';

const modules = [
  { href: '/analytics', icon: '📊', title: 'Financial Overview', desc: 'Real-time financial dashboards and reporting', cta: 'View Dashboard' },
  { href: '/expenses', icon: '💳', title: 'Expense Tracking', desc: 'Track and categorize business expenses', cta: 'Manage Expenses' },
  { href: '/invoices', icon: '🧾', title: 'Invoicing', desc: 'Create and manage professional invoices', cta: 'Create Invoice' },
  { href: '/budgets', icon: '📋', title: 'Budget Management', desc: 'Set and track departmental budgets', cta: 'View Budgets' },
  { href: '/reports', icon: '📈', title: 'Financial Reports', desc: 'P&L, balance sheets, and custom reports', cta: 'Generate Reports' },
  { href: '/tax', icon: '🏛️', title: 'Tax Management', desc: 'Tax preparation and compliance tools', cta: 'Tax Center' },
];

const metrics = [
  { label: 'Revenue (MTD)', value: '$0.00' },
  { label: 'Expenses (MTD)', value: '$0.00' },
  { label: 'Net Profit (MTD)', value: '$0.00' },
  { label: 'Pending Invoices', value: '0' },
];

export default function AccountingPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#070604', color: TEXT_PRIMARY }}>
      <div className="max-w-7xl mx-auto">
        <div className="p-8" style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4 }}>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}>
            Accounting &amp; Financial Management
          </h1>
          <p className="text-lg mb-10" style={{ color: GOLD_DIM }}>
            Comprehensive financial management and accounting tools for your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {modules.map((m) => (
              <div key={m.href} className="p-6 transition-colors" style={{ background: 'rgba(201,168,76,0.04)', border: `1px solid ${BORDER}`, borderRadius: 4 }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: GOLD }}>{m.icon} {m.title}</h3>
                <p className="mb-4 text-sm" style={{ color: GOLD_DIM }}>{m.desc}</p>
                <Link href={m.href} className="inline-block px-4 py-2 text-sm font-semibold transition-colors" style={{ border: `1px solid ${BORDER}`, borderRadius: 4, color: GOLD, background: 'transparent' }}>
                  {m.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
            {metrics.map((m) => (
              <div key={m.label} className="p-6 text-center" style={{ background: 'rgba(201,168,76,0.06)', border: `1px solid ${BORDER}`, borderRadius: 4 }}>
                <div className="text-3xl font-bold" style={{ color: GOLD }}>{m.value}</div>
                <div className="mt-2 text-sm" style={{ color: GOLD_DIM }}>{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5" style={{ background: 'rgba(201,168,76,0.04)', border: `1px solid ${BORDER}`, borderRadius: 4 }}>
            <p className="text-sm" style={{ color: GOLD_DIM }}>
              <span className="font-semibold" style={{ color: GOLD }}>Coming Soon:</span> Full accounting integration with QuickBooks, Xero, and other major accounting platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


