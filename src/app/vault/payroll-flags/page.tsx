'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle, DollarSign, User, Package, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

interface PayrollDeduction {
  id: string;
  employee: {
    firstName: string;
    lastName: string;
    employeeId: string;
  };
  asset?: {
    name: string;
    assetTag: string;
  };
  deductionType: string;
  amount: number;
  reason: string;
  status: string;
  scheduledDate: string;
  appliedDate?: string;
  createdAt: string;
}

export default function PayrollFlagsPage() {
  const [deductions, setDeductions] = useState<PayrollDeduction[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchDeductions();
  }, []);

  async function fetchDeductions() {
    try {
      const response = await fetch('/api/payroll/deductions');
      if (response.ok) {
        const data = await response.json();
        setDeductions(data);
      }
    } catch (error) {
      console.error('Failed to fetch deductions:', error);
    } finally {
      setLoading(false);
    }
  }

  async function checkOverdueAssets() {
    setLoading(true);
    try {
      const response = await fetch('/api/assets/treasury/overdue');
      if (response.ok) {
        const data = await response.json();
        alert(`✅ Flagged ${data.flaggedCount} overdue assets for payroll deduction`);
        fetchDeductions();
      }
    } catch (error) {
      console.error('Failed to check overdue:', error);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: string) {
    try {
      const response = await fetch('/api/payroll/deductions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deductionId: id, status }),
      });

      if (response.ok) {
        fetchDeductions();
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  }

  const filteredDeductions = deductions.filter(d => 
    filterStatus === 'all' || d.status === filterStatus
  );

  const stats = {
    total: deductions.length,
    pending: deductions.filter(d => d.status === 'PENDING').length,
    approved: deductions.filter(d => d.status === 'APPROVED').length,
    applied: deductions.filter(d => d.status === 'APPLIED').length,
    totalAmount: deductions.filter(d => d.status !== 'CANCELLED').reduce((sum, d) => sum + d.amount, 0),
  };

  function getStatusColor(status: string) {
    switch (status) {
      case 'PENDING': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500';
      case 'APPROVED': return 'bg-blue-500/20 text-blue-400 border-blue-500';
      case 'APPLIED': return 'bg-green-500/20 text-green-400 border-green-500';
      case 'CANCELLED': return 'bg-slate-500/20 text-slate-400 border-slate-500';
      case 'DISPUTED': return 'bg-red-500/20 text-red-400 border-red-500';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500';
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <AlertTriangle className="w-10 h-10 text-orange-400" />
              Payroll Deduction Flags
            </h1>
            <p className="text-slate-400">Unreturned & damaged asset deductions</p>
          </div>
          <button
            onClick={checkOverdueAssets}
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50"
          >
            {loading ? 'Checking...' : 'Check Overdue Assets'}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="w-8 h-8 text-orange-400" />
              <span className="text-3xl font-bold text-white">{stats.total}</span>
            </div>
            <p className="text-slate-300 font-semibold">Total Flags</p>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-yellow-400" />
              <span className="text-3xl font-bold text-yellow-400">{stats.pending}</span>
            </div>
            <p className="text-yellow-300 font-semibold">Pending</p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-blue-400" />
              <span className="text-3xl font-bold text-blue-400">{stats.approved}</span>
            </div>
            <p className="text-blue-300 font-semibold">Approved</p>
          </div>

          <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-green-400" />
              <span className="text-3xl font-bold text-green-400">{stats.applied}</span>
            </div>
            <p className="text-green-300 font-semibold">Applied</p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-purple-400" />
              <span className="text-3xl font-bold text-purple-400">
                ${(stats.totalAmount / 1000).toFixed(1)}K
              </span>
            </div>
            <p className="text-purple-300 font-semibold">Total Amount</p>
          </div>
        </div>

        {/* Filter */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 mb-6">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
          >
            <option value="all">All Status</option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="APPLIED">Applied</option>
            <option value="CANCELLED">Cancelled</option>
            <option value="DISPUTED">Disputed</option>
          </select>
        </div>

        {/* Deductions List */}
        <div className="space-y-4">
          {filteredDeductions.map((deduction) => (
            <div key={deduction.id} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white">
                        {deduction.employee.firstName} {deduction.employee.lastName}
                      </h3>
                      <span className={`px-3 py-1 border rounded-lg text-xs font-semibold ${getStatusColor(deduction.status)}`}>
                        {deduction.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="flex items-center gap-2 text-slate-300">
                        <User className="w-4 h-4 text-slate-500" />
                        <span className="text-sm">{deduction.employee.employeeId}</span>
                      </div>
                      {deduction.asset && (
                        <div className="flex items-center gap-2 text-slate-300">
                          <Package className="w-4 h-4 text-slate-500" />
                          <span className="text-sm">{deduction.asset.name} ({deduction.asset.assetTag})</span>
                        </div>
                      )}
                    </div>

                    <p className="text-slate-400 mb-3">{deduction.reason}</p>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-400">
                          Scheduled: {new Date(deduction.scheduledDate).toLocaleDateString()}
                        </span>
                      </div>
                      {deduction.appliedDate && (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-green-400">
                            Applied: {new Date(deduction.appliedDate).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-red-400 mb-4">
                    -${deduction.amount.toLocaleString()}
                  </div>

                  {deduction.status === 'PENDING' && (
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => updateStatus(deduction.id, 'APPROVED')}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateStatus(deduction.id, 'CANCELLED')}
                        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  )}

                  {deduction.status === 'APPROVED' && (
                    <button
                      onClick={() => updateStatus(deduction.id, 'APPLIED')}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      Mark Applied
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {filteredDeductions.length === 0 && (
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">All Clear!</h3>
              <p className="text-slate-400">No payroll deductions at this time.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
