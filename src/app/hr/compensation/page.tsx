'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DollarSign, TrendingUp, Award, Target, BarChart3, Users, AlertCircle, CheckCircle } from 'lucide-react';

export default function CompensationManagement() {
  const [activeTab, setActiveTab] = useState('planning');

  const employees = [
    { id: 1, name: 'Sarah Johnson', position: 'RN - ICU', department: 'Nursing', currentSalary: 87500, marketRate: 89000, compaRatio: 0.98, meritIncrease: 3.5, newSalary: 90562, budget: 'approved' },
    { id: 2, name: 'David Martinez', position: 'Lab Tech', department: 'Laboratory', currentSalary: 65200, marketRate: 68000, compaRatio: 0.96, meritIncrease: 4.0, newSalary: 67808, budget: 'approved' },
    { id: 3, name: 'Emily Rodriguez', position: 'Pharmacist', department: 'Pharmacy', currentSalary: 125000, marketRate: 126000, compaRatio: 0.99, meritIncrease: 3.0, newSalary: 128750, budget: 'pending' },
    { id: 4, name: 'Michael Torres', position: 'Radiology Tech', department: 'Imaging', currentSalary: 72000, marketRate: 76000, compaRatio: 0.95, meritIncrease: 5.0, newSalary: 75600, budget: 'pending' },
    { id: 5, name: 'Jennifer Chen', position: 'RN - ER', department: 'Emergency', currentSalary: 86000, marketRate: 88000, compaRatio: 0.98, meritIncrease: 3.5, newSalary: 89010, budget: 'approved' },
  ];

  const bonuses = [
    { id: 1, name: 'Sarah Johnson', q4Performance: 4.8, targetBonus: 5000, actualBonus: 6000, status: 'approved' },
    { id: 2, name: 'David Martinez', q4Performance: 4.5, targetBonus: 3500, actualBonus: 3850, status: 'approved' },
    { id: 3, name: 'Emily Rodriguez', q4Performance: 4.9, targetBonus: 7500, actualBonus: 8250, status: 'pending' },
  ];

  const marketData = [
    { position: 'RN - ICU', market25: 82000, market50: 89000, market75: 96000, internal: 87500, count: 12 },
    { position: 'RN - ER', market25: 80000, market50: 88000, market75: 94000, internal: 86000, count: 8 },
    { position: 'Lab Tech', market25: 62000, market50: 68000, market75: 74000, internal: 65200, count: 6 },
    { position: 'Pharmacist', market25: 118000, market50: 126000, market75: 134000, internal: 125000, count: 4 },
    { position: 'Radiology Tech', market25: 70000, market50: 76000, market75: 82000, internal: 72000, count: 5 },
  ];

  const totalBudget = {
    allocated: 850000,
    proposed: 812350,
    remaining: 37650,
    avgIncrease: 3.8
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/hr" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-100 mb-4 transition-colors">
            ← Back to HR Center
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200 mb-2"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(16,185,129,0.6)',
                    WebkitTextStroke: '1px rgba(16,185,129,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
                Compensation Management
              </h1>
              <p className="text-emerald-200">Salary planning, market benchmarking & total rewards</p>
            </div>
          </div>
        </div>

        {/* Budget Overview */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-xl p-6 border-2 border-emerald-500/30">
            <div className="text-slate-300 text-sm mb-1">Total Budget</div>
            <div className="text-3xl font-bold text-white">${(totalBudget.allocated / 1000).toFixed(0)}K</div>
            <div className="text-emerald-400 text-xs mt-1">FY 2026 allocation</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-6 border-2 border-blue-500/30">
            <div className="text-slate-300 text-sm mb-1">Proposed</div>
            <div className="text-3xl font-bold text-white">${(totalBudget.proposed / 1000).toFixed(0)}K</div>
            <div className="text-blue-400 text-xs mt-1">{((totalBudget.proposed/totalBudget.allocated)*100).toFixed(1)}% utilized</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-6 border-2 border-purple-500/30">
            <div className="text-slate-300 text-sm mb-1">Remaining</div>
            <div className="text-3xl font-bold text-white">${(totalBudget.remaining / 1000).toFixed(0)}K</div>
            <div className="text-purple-400 text-xs mt-1">{((totalBudget.remaining/totalBudget.allocated)*100).toFixed(1)}% available</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/50 rounded-xl p-6 border-2 border-orange-500/30">
            <div className="text-slate-300 text-sm mb-1">Avg Increase</div>
            <div className="text-3xl font-bold text-white">{totalBudget.avgIncrease}%</div>
            <div className="text-orange-400 text-xs mt-1">Merit raises</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-slate-800/50 p-2 rounded-lg">
          <button
            onClick={() => setActiveTab('planning')}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'planning' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            Merit Planning
          </button>
          <button
            onClick={() => setActiveTab('bonuses')}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'bonuses' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            Bonuses & Incentives
          </button>
          <button
            onClick={() => setActiveTab('market')}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'market' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            Market Benchmarking
          </button>
        </div>

        {/* Merit Planning Tab */}
        {activeTab === 'planning' && (
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-emerald-500/30">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Annual Merit Increase Planning</h2>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold">
                  Export to Excel
                </button>
                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold">
                  Submit for Approval
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-300 font-semibold">Employee</th>
                    <th className="text-left py-3 px-4 text-slate-300 font-semibold">Position</th>
                    <th className="text-center py-3 px-4 text-slate-300 font-semibold">Current</th>
                    <th className="text-center py-3 px-4 text-slate-300 font-semibold">Market</th>
                    <th className="text-center py-3 px-4 text-slate-300 font-semibold">Compa-Ratio</th>
                    <th className="text-center py-3 px-4 text-slate-300 font-semibold">Increase %</th>
                    <th className="text-center py-3 px-4 text-slate-300 font-semibold">New Salary</th>
                    <th className="text-center py-3 px-4 text-slate-300 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map(emp => (
                    <tr key={emp.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                      <td className="py-4 px-4">
                        <div className="text-white font-semibold">{emp.name}</div>
                        <div className="text-xs text-slate-400">{emp.department}</div>
                      </td>
                      <td className="py-4 px-4 text-slate-300">{emp.position}</td>
                      <td className="py-4 px-4 text-center text-white font-semibold">
                        ${emp.currentSalary.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-center text-blue-400 font-semibold">
                        ${emp.marketRate.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={`font-bold ${
                          emp.compaRatio >= 0.98 ? 'text-emerald-400' :
                          emp.compaRatio >= 0.95 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {emp.compaRatio.toFixed(2)}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <input
                          type="number"
                          value={emp.meritIncrease}
                          className="w-20 px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-center focus:ring-2 focus:ring-emerald-500 outline-none"
                          step="0.5"
                        />
                      </td>
                      <td className="py-4 px-4 text-center text-emerald-400 font-bold text-lg">
                        ${emp.newSalary.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          emp.budget === 'approved' ? 'bg-emerald-600 text-white' : 'bg-orange-600 text-white'
                        }`}>
                          {emp.budget.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Bonuses Tab */}
        {activeTab === 'bonuses' && (
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-purple-500/30">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Performance Bonuses</h2>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold">
                Process Payments
              </button>
            </div>
            <div className="space-y-4">
              {bonuses.map(bonus => (
                <div key={bonus.id} className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-5 border border-purple-500/30">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{bonus.name}</h3>
                      <div className="grid grid-cols-4 gap-6">
                        <div>
                          <div className="text-xs text-slate-400 mb-1">Q4 Performance</div>
                          <div className="flex items-center gap-1">
                            <Award className="w-5 h-5 text-yellow-400" />
                            <span className="text-white font-bold text-lg">{bonus.q4Performance}</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 mb-1">Target Bonus</div>
                          <div className="text-white font-semibold">${bonus.targetBonus.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 mb-1">Actual Bonus</div>
                          <div className="text-emerald-400 font-bold text-xl">${bonus.actualBonus.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 mb-1">Variance</div>
                          <div className={`font-bold ${
                            bonus.actualBonus > bonus.targetBonus ? 'text-emerald-400' : 'text-white'
                          }`}>
                            +{((bonus.actualBonus - bonus.targetBonus) / bonus.targetBonus * 100).toFixed(0)}%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className={`px-4 py-2 rounded-lg text-sm font-bold ${
                        bonus.status === 'approved' ? 'bg-emerald-600 text-white' : 'bg-orange-600 text-white'
                      }`}>
                        {bonus.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-900/30 rounded-lg p-6 border-2 border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Bonus Pool Summary</h3>
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <div className="text-slate-400 text-sm mb-1">Total Pool</div>
                  <div className="text-3xl font-bold text-white">$125K</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Allocated</div>
                  <div className="text-3xl font-bold text-blue-400">$98K</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Remaining</div>
                  <div className="text-3xl font-bold text-emerald-400">$27K</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Utilization</div>
                  <div className="text-3xl font-bold text-purple-400">78%</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Market Benchmarking Tab */}
        {activeTab === 'market' && (
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-blue-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">Market Compensation Data</h2>
            <div className="space-y-4">
              {marketData.map((role, idx) => (
                <div key={idx} className="bg-slate-900/50 rounded-lg p-5 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{role.position}</h3>
                      <div className="text-sm text-slate-400">{role.count} employees in role</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400">Our Average</div>
                      <div className="text-2xl font-bold text-white">${role.internal.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  {/* Market Range Visualization */}
                  <div className="relative h-16 bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-emerald-500/20 rounded-lg mb-2">
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                      <div className="text-center">
                        <div className="w-1 h-8 bg-red-500"></div>
                        <div className="text-xs text-slate-300 mt-1">25th</div>
                        <div className="text-xs text-white font-bold">${(role.market25/1000).toFixed(0)}K</div>
                      </div>
                      <div className="text-center">
                        <div className="w-1 h-12 bg-yellow-500"></div>
                        <div className="text-xs text-slate-300 mt-1">50th</div>
                        <div className="text-xs text-white font-bold">${(role.market50/1000).toFixed(0)}K</div>
                      </div>
                      <div className="text-center">
                        <div className="w-1 h-8 bg-emerald-500"></div>
                        <div className="text-xs text-slate-300 mt-1">75th</div>
                        <div className="text-xs text-white font-bold">${(role.market75/1000).toFixed(0)}K</div>
                      </div>
                    </div>
                    
                    {/* Our Position Marker */}
                    <div 
                      className="absolute top-0 h-full flex items-center"
                      style={{left: `${((role.internal - role.market25) / (role.market75 - role.market25)) * 100}%`}}
                    >
                      <div className="w-3 h-3 bg-blue-500 rounded-full border-4 border-white animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-slate-400">
                      {role.internal < role.market50 ? (
                        <span className="text-yellow-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          Below market median
                        </span>
                      ) : (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          At or above market median
                        </span>
                      )}
                    </div>
                    <div className="text-white">
                      Gap to 50th: <span className="font-bold text-blue-400">
                        ${Math.abs(role.market50 - role.internal).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
