'use client';

import { useState } from 'react';
import { DollarSign, Calendar, Download, Upload, Users, TrendingUp, Clock, FileText, Settings, CheckCircle, AlertCircle, ExternalLink, RefreshCw } from 'lucide-react';

interface PayPeriod {
  id: string;
  startDate: string;
  endDate: string;
  status: 'draft' | 'processing' | 'approved' | 'paid';
  totalHours: number;
  totalPay: number;
  employeeCount: number;
}

interface EmployeePayroll {
  id: string;
  name: string;
  department: string;
  payRate: number;
  payType: 'hourly' | 'salary';
  regularHours: number;
  overtimeHours: number;
  totalHours: number;
  regularPay: number;
  overtimePay: number;
  grossPay: number;
  deductions: number;
  netPay: number;
}

interface PayrollIntegration {
  id: string;
  name: string;
  provider: 'quickbooks' | 'adp' | 'gusto' | 'paychex' | 'paycom' | 'bamboohr' | 'manual';
  status: 'connected' | 'disconnected' | 'error';
  lastSync?: string;
  logo: string;
  description: string;
}

interface EmployeeBenefits {
  employeeId: string;
  employeeName: string;
  department: string;
  healthInsurance: {
    plan: 'none' | 'basic' | 'premium';
    employeeContribution: number;
    employerContribution: number;
  };
  retirement401k: {
    enrolled: boolean;
    employeePercent: number;
    employeeAmount: number;
    employerMatch: number;
  };
  fsa: {
    enrolled: boolean;
    annualElection: number;
    perPayPeriod: number;
  };
  lifeInsurance: {
    coverage: number;
    premium: number;
  };
  ptoAccrual: {
    rate: number; // hours per pay period
    balance: number;
    used: number;
  };
}

export default function PayrollPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'current-period' | 'employees' | 'history' | 'benefits' | 'integrations'>('overview');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('current');

  // Mock data for current pay period
  const currentPeriod: PayPeriod = {
    id: '1',
    startDate: '2025-12-16',
    endDate: '2025-12-31',
    status: 'processing',
    totalHours: 3240,
    totalPay: 89650,
    employeeCount: 45
  };

  // Mock payroll data
  const employeePayroll: EmployeePayroll[] = [
    {
      id: '1',
      name: 'John Doe',
      department: 'Nursing',
      payRate: 32.50,
      payType: 'hourly',
      regularHours: 80,
      overtimeHours: 8,
      totalHours: 88,
      regularPay: 2600,
      overtimePay: 390,
      grossPay: 2990,
      deductions: 598,
      netPay: 2392
    },
    {
      id: '2',
      name: 'Jane Smith',
      department: 'Nursing',
      payRate: 28.00,
      payType: 'hourly',
      regularHours: 72,
      overtimeHours: 0,
      totalHours: 72,
      regularPay: 2016,
      overtimePay: 0,
      grossPay: 2016,
      deductions: 403,
      netPay: 1613
    },
    {
      id: '3',
      name: 'Mike Johnson',
      department: 'Emergency',
      payRate: 38.00,
      payType: 'hourly',
      regularHours: 40,
      overtimeHours: 4,
      totalHours: 44,
      regularPay: 1520,
      overtimePay: 228,
      grossPay: 1748,
      deductions: 350,
      netPay: 1398
    },
    {
      id: '4',
      name: 'Sarah Williams',
      department: 'Radiology',
      payRate: 65000,
      payType: 'salary',
      regularHours: 80,
      overtimeHours: 0,
      totalHours: 80,
      regularPay: 2500,
      overtimePay: 0,
      grossPay: 2500,
      deductions: 500,
      netPay: 2000
    },
  ];

  // Mock pay period history
  const payPeriods: PayPeriod[] = [
    currentPeriod,
    {
      id: '2',
      startDate: '2025-12-01',
      endDate: '2025-12-15',
      status: 'paid',
      totalHours: 3180,
      totalPay: 87240,
      employeeCount: 45
    },
    {
      id: '3',
      startDate: '2025-11-16',
      endDate: '2025-11-30',
      status: 'paid',
      totalHours: 3220,
      totalPay: 88430,
      employeeCount: 44
    },
  ];

  // Mock benefits data
  const employeeBenefits: EmployeeBenefits[] = [
    {
      employeeId: '1',
      employeeName: 'John Doe',
      department: 'Nursing',
      healthInsurance: {
        plan: 'premium',
        employeeContribution: 180,
        employerContribution: 520
      },
      retirement401k: {
        enrolled: true,
        employeePercent: 6,
        employeeAmount: 195,
        employerMatch: 97.50
      },
      fsa: {
        enrolled: true,
        annualElection: 2600,
        perPayPeriod: 100
      },
      lifeInsurance: {
        coverage: 100000,
        premium: 15
      },
      ptoAccrual: {
        rate: 6.67,
        balance: 120,
        used: 40
      }
    },
    {
      employeeId: '2',
      employeeName: 'Jane Smith',
      department: 'Nursing',
      healthInsurance: {
        plan: 'basic',
        employeeContribution: 95,
        employerContribution: 380
      },
      retirement401k: {
        enrolled: true,
        employeePercent: 5,
        employeeAmount: 100.80,
        employerMatch: 50.40
      },
      fsa: {
        enrolled: false,
        annualElection: 0,
        perPayPeriod: 0
      },
      lifeInsurance: {
        coverage: 50000,
        premium: 8
      },
      ptoAccrual: {
        rate: 5.33,
        balance: 95,
        used: 32
      }
    },
    {
      employeeId: '3',
      employeeName: 'Mike Johnson',
      department: 'Emergency',
      healthInsurance: {
        plan: 'premium',
        employeeContribution: 180,
        employerContribution: 520
      },
      retirement401k: {
        enrolled: true,
        employeePercent: 8,
        employeeAmount: 139.84,
        employerMatch: 69.92
      },
      fsa: {
        enrolled: true,
        annualElection: 3000,
        perPayPeriod: 115.38
      },
      lifeInsurance: {
        coverage: 150000,
        premium: 22
      },
      ptoAccrual: {
        rate: 8.00,
        balance: 160,
        used: 24
      }
    },
    {
      employeeId: '4',
      employeeName: 'Sarah Williams',
      department: 'Radiology',
      healthInsurance: {
        plan: 'basic',
        employeeContribution: 95,
        employerContribution: 380
      },
      retirement401k: {
        enrolled: true,
        employeePercent: 10,
        employeeAmount: 250,
        employerMatch: 125
      },
      fsa: {
        enrolled: false,
        annualElection: 0,
        perPayPeriod: 0
      },
      lifeInsurance: {
        coverage: 100000,
        premium: 15
      },
      ptoAccrual: {
        rate: 9.23,
        balance: 180,
        used: 16
      }
    },
  ];

  // Mock integrations
  const integrations: PayrollIntegration[] = [
    {
      id: '1',
      name: 'QuickBooks Payroll',
      provider: 'quickbooks',
      status: 'connected',
      lastSync: '2025-12-28',
      logo: '💼',
      description: 'Sync hours and process payroll automatically'
    },
    {
      id: '2',
      name: 'ADP Workforce Now',
      provider: 'adp',
      status: 'disconnected',
      logo: '🔷',
      description: 'Enterprise payroll and HR management'
    },
    {
      id: '3',
      name: 'Gusto',
      provider: 'gusto',
      status: 'disconnected',
      logo: '🚀',
      description: 'Modern payroll, benefits, and HR'
    },
    {
      id: '4',
      name: 'Paychex',
      provider: 'paychex',
      status: 'disconnected',
      logo: '📊',
      description: 'Comprehensive payroll solutions'
    },
    {
      id: '5',
      name: 'Paycom',
      provider: 'paycom',
      status: 'disconnected',
      logo: '💰',
      description: 'Complete payroll and HR solution with time tracking'
    },
    {
      id: '6',
      name: 'BambooHR',
      provider: 'bamboohr',
      status: 'disconnected',
      logo: '🎋',
      description: 'HR software with payroll integration'
    },
    {
      id: '7',
      name: 'Manual Export',
      provider: 'manual',
      status: 'connected',
      logo: '📥',
      description: 'Export hours to CSV/Excel for any payroll system'
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--page-bg)', color: 'var(--body-text)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3" style={{ color: 'var(--header-text)' }}>
            <DollarSign className="h-10 w-10" style={{ color: 'var(--today-highlight)' }} />
            Payroll Management
          </h1>
          <p className="text-lg opacity-80">
            Process payroll from scheduled hours or integrate with your existing payroll system
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Current Period Total</div>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>
              {formatCurrency(currentPeriod.totalPay)}
            </div>
            <div className="text-xs opacity-60">{currentPeriod.totalHours.toLocaleString()} hours</div>
          </div>

          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Active Employees</div>
              <Users className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>
              {currentPeriod.employeeCount}
            </div>
            <div className="text-xs opacity-60">This pay period</div>
          </div>

          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Avg Hours/Employee</div>
              <Clock className="h-5 w-5 text-purple-500" />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>
              {(currentPeriod.totalHours / currentPeriod.employeeCount).toFixed(1)}
            </div>
            <div className="text-xs opacity-60">Per pay period</div>
          </div>

          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Integration Status</div>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>
              Connected
            </div>
            <div className="text-xs text-green-500">QuickBooks synced</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:scale-105 transition-all"
            style={{ background: 'var(--primary-btn)' }}
          >
            <CheckCircle className="h-4 w-4" />
            Approve Pay Period
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:scale-105 transition-all"
            style={{ background: 'var(--secondary-btn)' }}
          >
            <Download className="h-4 w-4" />
            Export Hours
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:scale-105 transition-all"
            style={{ background: 'var(--secondary-btn)' }}
          >
            <RefreshCw className="h-4 w-4" />
            Sync with QuickBooks
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'overview' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'overview' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'overview' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <TrendingUp className="h-5 w-5" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('current-period')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'current-period' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'current-period' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'current-period' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Calendar className="h-5 w-5" />
            Current Period
          </button>
          <button
            onClick={() => setActiveTab('employees')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'employees' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'employees' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'employees' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Users className="h-5 w-5" />
            Employees
          </button>
          <button
            onClick={() => setActiveTab('benefits')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'benefits' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'benefits' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'benefits' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <CheckCircle className="h-5 w-5" />
            Benefits
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'history' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'history' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'history' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <FileText className="h-5 w-5" />
            History
          </button>
          <button
            onClick={() => setActiveTab('integrations')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'integrations' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'integrations' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'integrations' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Settings className="h-5 w-5" />
            Integrations
          </button>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Current Pay Period Card */}
            <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold" style={{ color: 'var(--header-text)' }}>
                  Current Pay Period
                </h2>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                  {currentPeriod.status.toUpperCase()}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm opacity-70 mb-1">Period</p>
                  <p className="font-semibold">
                    {formatDate(currentPeriod.startDate)} - {formatDate(currentPeriod.endDate)}
                  </p>
                </div>
                <div>
                  <p className="text-sm opacity-70 mb-1">Total Hours</p>
                  <p className="font-semibold">{currentPeriod.totalHours.toLocaleString()} hours</p>
                </div>
                <div>
                  <p className="text-sm opacity-70 mb-1">Total Pay</p>
                  <p className="font-semibold text-green-500">{formatCurrency(currentPeriod.totalPay)}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveTab('current-period')}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white hover:scale-105 transition-all"
                  style={{ background: 'var(--primary-btn)' }}
                >
                  <FileText className="h-4 w-4" />
                  View Details
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
                >
                  <Download className="h-4 w-4" />
                  Export
                </button>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Overtime Summary */}
              <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-400" />
                  Overtime Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="opacity-70">Employees with OT</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-70">Total OT Hours</span>
                    <span className="font-semibold text-amber-400">48 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-70">OT Cost</span>
                    <span className="font-semibold text-amber-400">{formatCurrency(3420)}</span>
                  </div>
                </div>
              </div>

              {/* Department Breakdown */}
              <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  Department Breakdown
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="opacity-70">Nursing</span>
                    <span className="font-semibold">{formatCurrency(35200)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-70">Emergency</span>
                    <span className="font-semibold">{formatCurrency(28500)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-70">Other</span>
                    <span className="font-semibold">{formatCurrency(25950)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'current-period' && (
          <div className="space-y-6">
            <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
                Employee Payroll Details
              </h2>
              <p className="opacity-70 mb-6">
                {formatDate(currentPeriod.startDate)} - {formatDate(currentPeriod.endDate)}
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                      <th className="text-left py-3 px-2">Employee</th>
                      <th className="text-left py-3 px-2">Department</th>
                      <th className="text-right py-3 px-2">Pay Rate</th>
                      <th className="text-right py-3 px-2">Reg Hours</th>
                      <th className="text-right py-3 px-2">OT Hours</th>
                      <th className="text-right py-3 px-2">Gross Pay</th>
                      <th className="text-right py-3 px-2">Deductions</th>
                      <th className="text-right py-3 px-2">Net Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeePayroll.map((emp) => (
                      <tr key={emp.id} className="border-b hover:bg-white/5" style={{ borderColor: 'var(--border-color)' }}>
                        <td className="py-3 px-2 font-semibold">{emp.name}</td>
                        <td className="py-3 px-2 opacity-70">{emp.department}</td>
                        <td className="py-3 px-2 text-right">
                          {emp.payType === 'hourly' ? `${formatCurrency(emp.payRate)}/hr` : `${formatCurrency(emp.payRate)}/yr`}
                        </td>
                        <td className="py-3 px-2 text-right">{emp.regularHours}</td>
                        <td className="py-3 px-2 text-right">
                          {emp.overtimeHours > 0 ? (
                            <span className="text-amber-400">{emp.overtimeHours}</span>
                          ) : (
                            <span className="opacity-50">0</span>
                          )}
                        </td>
                        <td className="py-3 px-2 text-right font-semibold">{formatCurrency(emp.grossPay)}</td>
                        <td className="py-3 px-2 text-right text-red-400">-{formatCurrency(emp.deductions)}</td>
                        <td className="py-3 px-2 text-right font-bold text-green-500">{formatCurrency(emp.netPay)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2" style={{ borderColor: 'var(--border-color)' }}>
                      <td colSpan={5} className="py-3 px-2 font-bold">TOTALS</td>
                      <td className="py-3 px-2 text-right font-bold">
                        {formatCurrency(employeePayroll.reduce((sum, emp) => sum + emp.grossPay, 0))}
                      </td>
                      <td className="py-3 px-2 text-right font-bold text-red-400">
                        -{formatCurrency(employeePayroll.reduce((sum, emp) => sum + emp.deductions, 0))}
                      </td>
                      <td className="py-3 px-2 text-right font-bold text-green-500">
                        {formatCurrency(employeePayroll.reduce((sum, emp) => sum + emp.netPay, 0))}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'employees' && (
          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
              Employee Pay Rates
            </h2>
            <p className="opacity-70 mb-6">Manage pay rates for all employees</p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                    <th className="text-left py-3 px-2">Employee</th>
                    <th className="text-left py-3 px-2">Department</th>
                    <th className="text-left py-3 px-2">Pay Type</th>
                    <th className="text-right py-3 px-2">Pay Rate</th>
                    <th className="text-right py-3 px-2">OT Rate</th>
                    <th className="text-right py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employeePayroll.map((emp) => (
                    <tr key={emp.id} className="border-b hover:bg-white/5" style={{ borderColor: 'var(--border-color)' }}>
                      <td className="py-3 px-2 font-semibold">{emp.name}</td>
                      <td className="py-3 px-2">{emp.department}</td>
                      <td className="py-3 px-2">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-semibold uppercase">
                          {emp.payType}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right font-semibold">
                        {emp.payType === 'hourly' ? `${formatCurrency(emp.payRate)}/hr` : `${formatCurrency(emp.payRate)}/yr`}
                      </td>
                      <td className="py-3 px-2 text-right">
                        {emp.payType === 'hourly' ? formatCurrency(emp.payRate * 1.5) : 'N/A'}
                      </td>
                      <td className="py-3 px-2 text-right">
                        <button className="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded text-sm transition-all">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-4">
            <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--header-text)' }}>
                Pay Period History
              </h2>
              
              {payPeriods.map((period) => (
                <div 
                  key={period.id}
                  className="p-4 mb-4 rounded-lg hover:bg-white/5 transition-all cursor-pointer border"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-bold">
                        {formatDate(period.startDate)} - {formatDate(period.endDate)}
                      </h3>
                      <p className="text-sm opacity-70">{period.employeeCount} employees</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      period.status === 'paid' ? 'bg-green-500/20 text-green-400' :
                      period.status === 'approved' ? 'bg-blue-500/20 text-blue-400' :
                      period.status === 'processing' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {period.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm opacity-70">Total Hours</p>
                      <p className="font-semibold">{period.totalHours.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-70">Total Pay</p>
                      <p className="font-semibold text-green-500">{formatCurrency(period.totalPay)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'benefits' && (
          <div className="space-y-6">
            <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
                Employee Benefits Administration
              </h2>
              <p className="opacity-70 mb-6">
                Manage health insurance, retirement plans, FSA/HSA, life insurance, and PTO accruals
              </p>

              {/* Benefits Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-lg" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                  <div className="text-sm opacity-70 mb-1">Health Insurance</div>
                  <div className="text-2xl font-bold" style={{ color: 'var(--header-text)' }}>
                    {employeeBenefits.filter(e => e.healthInsurance.plan !== 'none').length}
                  </div>
                  <div className="text-xs opacity-60">Employees enrolled</div>
                </div>
                <div className="p-4 rounded-lg" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                  <div className="text-sm opacity-70 mb-1">401(k) Participants</div>
                  <div className="text-2xl font-bold" style={{ color: 'var(--header-text)' }}>
                    {employeeBenefits.filter(e => e.retirement401k.enrolled).length}
                  </div>
                  <div className="text-xs opacity-60">Active savers</div>
                </div>
                <div className="p-4 rounded-lg" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
                  <div className="text-sm opacity-70 mb-1">FSA Enrollment</div>
                  <div className="text-2xl font-bold" style={{ color: 'var(--header-text)' }}>
                    {employeeBenefits.filter(e => e.fsa.enrolled).length}
                  </div>
                  <div className="text-xs opacity-60">Pre-tax savings</div>
                </div>
                <div className="p-4 rounded-lg" style={{ background: 'rgba(139, 92, 246, 0.1)' }}>
                  <div className="text-sm opacity-70 mb-1">Avg PTO Balance</div>
                  <div className="text-2xl font-bold" style={{ color: 'var(--header-text)' }}>
                    {(employeeBenefits.reduce((sum, e) => sum + e.ptoAccrual.balance, 0) / employeeBenefits.length).toFixed(0)}
                  </div>
                  <div className="text-xs opacity-60">Hours available</div>
                </div>
              </div>

              {/* Benefits Details Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                      <th className="text-left py-3 px-4 font-semibold">Employee</th>
                      <th className="text-left py-3 px-4 font-semibold">Health Plan</th>
                      <th className="text-right py-3 px-4 font-semibold">Employee Cost</th>
                      <th className="text-right py-3 px-4 font-semibold">401(k) %</th>
                      <th className="text-right py-3 px-4 font-semibold">Employer Match</th>
                      <th className="text-right py-3 px-4 font-semibold">FSA/Period</th>
                      <th className="text-right py-3 px-4 font-semibold">Life Insurance</th>
                      <th className="text-right py-3 px-4 font-semibold">PTO Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeBenefits.map((employee, index) => (
                      <tr key={index} className="border-b hover:bg-opacity-50" style={{ 
                        borderColor: 'var(--border-color)',
                        background: 'transparent'
                      }}>
                        <td className="py-4 px-4">
                          <div className="font-semibold" style={{ color: 'var(--header-text)' }}>
                            {employee.employeeName}
                          </div>
                          <div className="text-sm opacity-60">{employee.department}</div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            employee.healthInsurance.plan === 'premium' ? 'bg-purple-500/20 text-purple-400' :
                            employee.healthInsurance.plan === 'basic' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {employee.healthInsurance.plan === 'none' ? 'Not Enrolled' : 
                             employee.healthInsurance.plan.charAt(0).toUpperCase() + employee.healthInsurance.plan.slice(1)}
                          </span>
                        </td>
                        <td className="text-right py-4 px-4">
                          <div className="font-semibold text-red-400">
                            {formatCurrency(employee.healthInsurance.employeeContribution)}
                          </div>
                          <div className="text-xs opacity-60">
                            +{formatCurrency(employee.healthInsurance.employerContribution)} employer
                          </div>
                        </td>
                        <td className="text-right py-4 px-4">
                          {employee.retirement401k.enrolled ? (
                            <>
                              <div className="font-semibold text-green-400">
                                {employee.retirement401k.employeePercent}%
                              </div>
                              <div className="text-xs opacity-60">
                                {formatCurrency(employee.retirement401k.employeeAmount)}
                              </div>
                            </>
                          ) : (
                            <span className="text-gray-500">—</span>
                          )}
                        </td>
                        <td className="text-right py-4 px-4">
                          {employee.retirement401k.enrolled ? (
                            <div className="font-semibold text-blue-400">
                              {formatCurrency(employee.retirement401k.employerMatch)}
                            </div>
                          ) : (
                            <span className="text-gray-500">—</span>
                          )}
                        </td>
                        <td className="text-right py-4 px-4">
                          {employee.fsa.enrolled ? (
                            <>
                              <div className="font-semibold text-amber-400">
                                {formatCurrency(employee.fsa.perPayPeriod)}
                              </div>
                              <div className="text-xs opacity-60">
                                {formatCurrency(employee.fsa.annualElection)}/year
                              </div>
                            </>
                          ) : (
                            <span className="text-gray-500">Not enrolled</span>
                          )}
                        </td>
                        <td className="text-right py-4 px-4">
                          <div className="font-semibold">
                            {formatCurrency(employee.lifeInsurance.coverage / 1000)}k
                          </div>
                          <div className="text-xs opacity-60">
                            {formatCurrency(employee.lifeInsurance.premium)}/period
                          </div>
                        </td>
                        <td className="text-right py-4 px-4">
                          <div className="font-semibold text-purple-400">
                            {employee.ptoAccrual.balance}h
                          </div>
                          <div className="text-xs opacity-60">
                            +{employee.ptoAccrual.rate}h/period
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Benefits Cost Summary */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="text-sm opacity-70 mb-2">Total Employer Health Costs</div>
                  <div className="text-xl font-bold text-blue-400">
                    {formatCurrency(employeeBenefits.reduce((sum, e) => sum + e.healthInsurance.employerContribution, 0))}
                  </div>
                  <div className="text-xs opacity-60 mt-1">Per pay period</div>
                </div>
                <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="text-sm opacity-70 mb-2">Total 401(k) Match</div>
                  <div className="text-xl font-bold text-green-400">
                    {formatCurrency(employeeBenefits.reduce((sum, e) => sum + e.retirement401k.employerMatch, 0))}
                  </div>
                  <div className="text-xs opacity-60 mt-1">Per pay period</div>
                </div>
                <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="text-sm opacity-70 mb-2">Total Life Insurance Premium</div>
                  <div className="text-xl font-bold text-purple-400">
                    {formatCurrency(employeeBenefits.reduce((sum, e) => sum + e.lifeInsurance.premium, 0))}
                  </div>
                  <div className="text-xs opacity-60 mt-1">Per pay period</div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1" style={{ color: 'var(--header-text)' }}>
                      Benefits Deductions Applied Automatically
                    </p>
                    <p className="text-sm opacity-70">
                      All benefit deductions (health insurance, 401(k), FSA) are automatically calculated and applied to employee paychecks. 
                      Employer contributions are tracked separately for accounting and compliance reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'integrations' && (
          <div className="space-y-6">
            <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
                Payroll System Integrations
              </h2>
              <p className="opacity-70 mb-6">
                Connect TeamPulse™ with your payroll system to automatically sync hours and streamline payroll processing
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrations.map((integration) => (
                  <div
                    key={integration.id}
                    className="p-6 rounded-lg border hover:border-opacity-50 transition-all"
                    style={{ 
                      borderColor: integration.status === 'connected' ? 'var(--today-highlight)' : 'var(--border-color)',
                      background: integration.status === 'connected' ? 'rgba(59, 130, 246, 0.1)' : 'transparent'
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{integration.logo}</span>
                        <div>
                          <h3 className="font-bold">{integration.name}</h3>
                          <p className="text-sm opacity-70">{integration.description}</p>
                        </div>
                      </div>
                      {integration.status === 'connected' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : integration.status === 'error' ? (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      ) : null}
                    </div>

                    {integration.lastSync && (
                      <p className="text-xs opacity-60 mb-3">
                        Last synced: {formatDate(integration.lastSync)}
                      </p>
                    )}

                    <div className="flex gap-2">
                      {integration.status === 'connected' ? (
                        <>
                          <button className="flex-1 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                            <RefreshCw className="h-4 w-4" />
                            Sync Now
                          </button>
                          <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg font-semibold transition-all">
                            Disconnect
                          </button>
                        </>
                      ) : (
                        <button className="flex-1 px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105"
                          style={{ background: 'var(--primary-btn)', color: '#ffffff' }}
                        >
                          {integration.provider === 'manual' ? 'Configure Export' : 'Connect'}
                        </button>
                      )}
                    </div>

                    {integration.provider !== 'manual' && integration.status === 'disconnected' && (
                      <a 
                        href="#" 
                        className="text-sm opacity-70 hover:opacity-100 flex items-center gap-1 mt-2 transition-all"
                      >
                        Learn more about {integration.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Export Settings */}
            <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
                Export Settings
              </h3>
              <p className="opacity-70 mb-4">Configure how hours and payroll data are exported</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Export Format</label>
                  <select className="w-full md:w-64 px-4 py-2 rounded-lg border" style={{ 
                    background: 'var(--card-bg)', 
                    borderColor: 'var(--border-color)',
                    color: 'var(--body-text)'
                  }}>
                    <option>CSV (Comma Separated)</option>
                    <option>Excel (XLSX)</option>
                    <option>QuickBooks IIF</option>
                    <option>ADP Format</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Include in Export</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span>Regular Hours</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span>Overtime Hours</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span>Pay Rates</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Department Information</span>
                    </label>
                  </div>
                </div>

                <button 
                  className="px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-all"
                  style={{ background: 'var(--primary-btn)', color: '#ffffff' }}
                >
                  Save Export Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
