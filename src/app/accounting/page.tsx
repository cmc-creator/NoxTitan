import Link from 'next/link';

export default function AccountingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 shadow-2xl">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 mb-4">
             Accounting & Financial Management
          </h1>
          <p className="text-purple-300 text-xl mb-8">
            Comprehensive financial management and accounting tools for your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 hover:bg-purple-900/30 transition-all">
              <h3 className="text-2xl font-bold text-purple-300 mb-3"> Financial Overview</h3>
              <p className="text-purple-200 mb-4">Real-time financial dashboards and reporting</p>
              <Link href="/analytics" className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors">View Dashboard</Link>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 hover:bg-purple-900/30 transition-all">
              <h3 className="text-2xl font-bold text-purple-300 mb-3"> Expense Tracking</h3>
              <p className="text-purple-200 mb-4">Track and categorize business expenses</p>
              <Link href="/expenses" className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors">Manage Expenses</Link>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 hover:bg-purple-900/30 transition-all">
              <h3 className="text-2xl font-bold text-purple-300 mb-3"> Invoicing</h3>
              <p className="text-purple-200 mb-4">Create and manage professional invoices</p>
              <Link href="/invoices" className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors">Create Invoice</Link>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 hover:bg-purple-900/30 transition-all">
              <h3 className="text-2xl font-bold text-purple-300 mb-3"> Budget Management</h3>
              <p className="text-purple-200 mb-4">Set and track departmental budgets</p>
              <Link href="/budgets" className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors">View Budgets</Link>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 hover:bg-purple-900/30 transition-all">
              <h3 className="text-2xl font-bold text-purple-300 mb-3"> Financial Reports</h3>
              <p className="text-purple-200 mb-4">P&L, balance sheets, and custom reports</p>
              <Link href="/reports" className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors">Generate Reports</Link>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 hover:bg-purple-900/30 transition-all">
              <h3 className="text-2xl font-bold text-purple-300 mb-3"> Tax Management</h3>
              <p className="text-purple-200 mb-4">Tax preparation and compliance tools</p>
              <Link href="/tax" className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors">Tax Center</Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white">.00</div>
              <div className="text-green-100 mt-2">Revenue (MTD)</div>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white">.00</div>
              <div className="text-red-100 mt-2">Expenses (MTD)</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white">.00</div>
              <div className="text-blue-100 mt-2">Net Profit (MTD)</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white">0</div>
              <div className="text-purple-100 mt-2">Pending Invoices</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-900/20 border border-yellow-600/30 rounded-xl">
            <p className="text-yellow-300 text-sm">
              <span className="font-bold"> Coming Soon:</span> Full accounting integration with QuickBooks, Xero, and other major accounting platforms. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
