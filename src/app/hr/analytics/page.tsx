'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, TrendingDown, Users, DollarSign, Clock, Target, Award, AlertTriangle, BarChart3, PieChart, Activity } from 'lucide-react';

export default function HRAnalytics() {
  const [timeRange, setTimeRange] = useState('quarter');

  const metrics = [
    { label: 'Total Headcount', value: 247, change: '+12', trend: 'up', color: 'from-blue-600 to-cyan-600' },
    { label: 'Turnover Rate', value: '8.2%', change: '-2.1%', trend: 'down', color: 'from-emerald-600 to-teal-600' },
    { label: 'Avg Time-to-Hire', value: '18d', change: '-4d', trend: 'down', color: 'from-purple-600 to-pink-600' },
    { label: 'Cost-per-Hire', value: '$3,200', change: '-$800', trend: 'down', color: 'from-orange-600 to-amber-600' },
  ];

  const departmentData = [
    { name: 'Nursing', headcount: 98, turnover: 7.5, avgTenure: '3.2 years', satisfaction: 4.6 },
    { name: 'Physicians', headcount: 42, turnover: 4.2, avgTenure: '5.8 years', satisfaction: 4.8 },
    { name: 'Allied Health', headcount: 56, turnover: 9.1, avgTenure: '2.9 years', satisfaction: 4.4 },
    { name: 'Administration', headcount: 31, turnover: 6.8, avgTenure: '4.5 years', satisfaction: 4.7 },
    { name: 'Support Services', headcount: 20, turnover: 12.3, avgTenure: '1.8 years', satisfaction: 4.1 },
  ];

  const diversityMetrics = [
    { category: 'Gender', male: 32, female: 68, nonBinary: 0.5 },
    { category: 'Age Groups', '18-25': 12, '26-35': 34, '36-45': 28, '46-55': 18, '56+': 8 },
    { category: 'Ethnicity', white: 58, hispanic: 18, asian: 14, black: 8, other: 2 },
  ];

  const compensationEquity = [
    { role: 'RN - ICU', avgMale: 87500, avgFemale: 86800, gap: 0.8, status: 'good' },
    { role: 'RN - ER', avgMale: 85200, avgFemale: 85900, gap: -0.8, status: 'good' },
    { role: 'Lab Tech', avgMale: 68400, avgFemale: 65200, gap: 4.7, status: 'warning' },
    { role: 'Radiology Tech', avgMale: 74300, avgFemale: 72100, gap: 3.0, status: 'warning' },
  ];

  const flightRisk = [
    { name: 'Jennifer Martinez', department: 'Nursing', riskScore: 87, factors: ['Low satisfaction', 'Passed over for promotion', 'Market comp +15%'] },
    { name: 'David Park', department: 'Lab', riskScore: 76, factors: ['High workload', 'Limited growth', 'Competing offers'] },
    { name: 'Michael Torres', department: 'Radiology', riskScore: 68, factors: ['Below market pay', 'Long commute', 'Skills underutilized'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/hr" className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-100 mb-4 transition-colors">
            ← Back to HR Center
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-blue-200 to-indigo-200 mb-2"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(99,102,241,0.6)',
                    WebkitTextStroke: '1px rgba(99,102,241,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
                HR Analytics & Insights
              </h1>
              <p className="text-indigo-200">Data-driven workforce intelligence and predictive analytics</p>
            </div>
            <div className="flex gap-2">
              {['month', 'quarter', 'year'].map(range => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    timeRange === range
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {range.charAt(0).toUpperCase() + range.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${metric.color} rounded-xl p-6 border-2 border-white/10`}>
              <div className="text-white/80 text-sm mb-1">{metric.label}</div>
              <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
              <div className={`flex items-center gap-1 text-sm ${
                metric.trend === 'up' ? 'text-white' : 'text-emerald-200'
              }`}>
                {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <span>{metric.change} this {timeRange}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Department Analytics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-indigo-500/30 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <BarChart3 className="w-7 h-7 text-indigo-400" />
            Department Performance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-300 font-semibold">Department</th>
                  <th className="text-center py-3 px-4 text-slate-300 font-semibold">Headcount</th>
                  <th className="text-center py-3 px-4 text-slate-300 font-semibold">Turnover Rate</th>
                  <th className="text-center py-3 px-4 text-slate-300 font-semibold">Avg Tenure</th>
                  <th className="text-center py-3 px-4 text-slate-300 font-semibold">Satisfaction</th>
                </tr>
              </thead>
              <tbody>
                {departmentData.map((dept, idx) => (
                  <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="py-4 px-4 text-white font-semibold">{dept.name}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-blue-400 font-bold text-lg">{dept.headcount}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-bold ${
                        dept.turnover < 8 ? 'text-emerald-400' :
                        dept.turnover < 10 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {dept.turnover}%
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-purple-400 font-semibold">
                      {dept.avgTenure}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-white font-bold">{dept.satisfaction}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Diversity Metrics */}
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <PieChart className="w-7 h-7 text-purple-400" />
              Diversity & Inclusion
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Gender Distribution</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-24 text-slate-300">Female</div>
                    <div className="flex-1 bg-slate-700 rounded-full h-6">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-6 rounded-full flex items-center justify-end pr-2" style={{width: '68%'}}>
                        <span className="text-xs font-bold text-white">68%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 text-slate-300">Male</div>
                    <div className="flex-1 bg-slate-700 rounded-full h-6">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-6 rounded-full flex items-center justify-end pr-2" style={{width: '32%'}}>
                        <span className="text-xs font-bold text-white">32%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Age Distribution</h3>
                <div className="grid grid-cols-5 gap-2">
                  {[
                    {range: '18-25', pct: 12, color: 'bg-blue-500'},
                    {range: '26-35', pct: 34, color: 'bg-purple-500'},
                    {range: '36-45', pct: 28, color: 'bg-pink-500'},
                    {range: '46-55', pct: 18, color: 'bg-orange-500'},
                    {range: '56+', pct: 8, color: 'bg-red-500'},
                  ].map(age => (
                    <div key={age.range} className="text-center">
                      <div className={`${age.color} rounded-t-lg h-24 flex items-end justify-center pb-2`} style={{height: `${age.pct * 3}px`, minHeight: '40px'}}>
                        <span className="text-white font-bold text-sm">{age.pct}%</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-1">{age.range}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Compensation Equity */}
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-emerald-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <DollarSign className="w-7 h-7 text-emerald-400" />
              Compensation Equity Analysis
            </h2>
            <div className="space-y-4">
              {compensationEquity.map((role, idx) => (
                <div key={idx} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold">{role.role}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      role.status === 'good' ? 'bg-emerald-600 text-white' : 'bg-yellow-600 text-white'
                    }`}>
                      {Math.abs(role.gap)}% gap
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-slate-400">Male Avg</div>
                      <div className="text-blue-400 font-bold">${role.avgMale.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Female Avg</div>
                      <div className="text-pink-400 font-bold">${role.avgFemale.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Status</div>
                      <div className={role.status === 'good' ? 'text-emerald-400' : 'text-yellow-400'}>
                        {role.status === 'good' ? '✓ Equitable' : '⚠ Review'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flight Risk Prediction */}
        <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-red-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <AlertTriangle className="w-7 h-7 text-red-400 animate-pulse" />
            Predictive Flight Risk Analysis
            <span className="ml-auto text-sm font-normal text-red-300">AI-Powered • High Priority</span>
          </h2>
          <div className="space-y-4">
            {flightRisk.map((employee, idx) => (
              <div key={idx} className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-5 border-2 border-red-500/30">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{employee.name}</h3>
                    <div className="text-slate-300">{employee.department}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-red-400">{employee.riskScore}%</div>
                    <div className="text-xs text-red-300">Flight Risk</div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className={`h-3 rounded-full ${
                      employee.riskScore >= 80 ? 'bg-red-500' :
                      employee.riskScore >= 70 ? 'bg-orange-500' : 'bg-yellow-500'
                    }`} style={{width: `${employee.riskScore}%`}}></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-2">Risk Factors:</div>
                  <div className="flex flex-wrap gap-2">
                    {employee.factors.map((factor, fidx) => (
                      <span key={fidx} className="px-3 py-1 bg-red-600/30 text-red-200 rounded-full text-xs">
                        {factor}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg font-semibold text-sm">
                    Schedule Retention Meeting
                  </button>
                  <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm">
                    View Full Analysis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
