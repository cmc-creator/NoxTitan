'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Clock, 
  Users, 
  AlertTriangle,
  Calendar,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Award
} from 'lucide-react';

interface LaborMetric {
  month: string;
  actualCost: number;
  budgetedCost: number;
  hours: number;
  headcount: number;
}

interface DepartmentMetric {
  name: string;
  totalCost: number;
  avgHourlyRate: number;
  totalHours: number;
  overtimeHours: number;
  overtimePercent: number;
  headcount: number;
  costPerEmployee: number;
  efficiency: number; // Productivity score
}

interface SchedulingMetric {
  week: string;
  scheduledHours: number;
  actualHours: number;
  variance: number;
  openShifts: number;
  callouts: number;
  swaps: number;
  coverageRate: number; // Percentage of shifts covered
}

interface ForecastMetric {
  month: string;
  projectedCost: number;
  projectedHours: number;
  confidence: number; // 0-100
  trend: 'increasing' | 'decreasing' | 'stable';
}

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'quarter' | 'year'>('month');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  // Mock data - Last 6 months labor costs
  const laborTrends: LaborMetric[] = [
    { month: 'Jul 2025', actualCost: 285000, budgetedCost: 290000, hours: 8200, headcount: 198 },
    { month: 'Aug 2025', actualCost: 292000, budgetedCost: 290000, hours: 8450, headcount: 200 },
    { month: 'Sep 2025', actualCost: 288000, budgetedCost: 290000, hours: 8300, headcount: 199 },
    { month: 'Oct 2025', actualCost: 295000, budgetedCost: 295000, hours: 8600, headcount: 202 },
    { month: 'Nov 2025', actualCost: 301000, budgetedCost: 295000, hours: 8750, headcount: 205 },
    { month: 'Dec 2025', actualCost: 312000, budgetedCost: 300000, hours: 9100, headcount: 210 },
  ];

  // Department performance metrics
  const departmentMetrics: DepartmentMetric[] = [
    { 
      name: 'Nursing', 
      totalCost: 125000, 
      avgHourlyRate: 35.50, 
      totalHours: 3520, 
      overtimeHours: 180,
      overtimePercent: 5.1,
      headcount: 88,
      costPerEmployee: 1420,
      efficiency: 94
    },
    { 
      name: 'Emergency', 
      totalCost: 98000, 
      avgHourlyRate: 42.00, 
      totalHours: 2330, 
      overtimeHours: 145,
      overtimePercent: 6.2,
      headcount: 58,
      costPerEmployee: 1690,
      efficiency: 91
    },
    { 
      name: 'Radiology', 
      totalCost: 45000, 
      avgHourlyRate: 38.50, 
      totalHours: 1168, 
      overtimeHours: 48,
      overtimePercent: 4.1,
      headcount: 29,
      costPerEmployee: 1552,
      efficiency: 96
    },
    { 
      name: 'Laboratory', 
      totalCost: 38000, 
      avgHourlyRate: 32.00, 
      totalHours: 1187, 
      overtimeHours: 52,
      overtimePercent: 4.4,
      headcount: 30,
      costPerEmployee: 1267,
      efficiency: 93
    },
    { 
      name: 'Administration', 
      totalCost: 32000, 
      avgHourlyRate: 28.00, 
      totalHours: 1143, 
      overtimeHours: 28,
      overtimePercent: 2.4,
      headcount: 28,
      costPerEmployee: 1143,
      efficiency: 88
    },
  ];

  // Scheduling efficiency
  const schedulingMetrics: SchedulingMetric[] = [
    { week: 'Dec 1-7', scheduledHours: 2100, actualHours: 2085, variance: -15, openShifts: 3, callouts: 8, swaps: 12, coverageRate: 98.5 },
    { week: 'Dec 8-14', scheduledHours: 2150, actualHours: 2140, variance: -10, openShifts: 2, callouts: 6, swaps: 15, coverageRate: 99.1 },
    { week: 'Dec 15-21', scheduledHours: 2200, actualHours: 2175, variance: -25, openShifts: 5, callouts: 10, swaps: 18, coverageRate: 97.7 },
    { week: 'Dec 22-28', scheduledHours: 2250, actualHours: 2260, variance: 10, openShifts: 1, callouts: 4, swaps: 8, coverageRate: 99.6 },
  ];

  // 3-month forecast
  const forecast: ForecastMetric[] = [
    { month: 'Jan 2026', projectedCost: 318000, projectedHours: 9300, confidence: 87, trend: 'increasing' },
    { month: 'Feb 2026', projectedCost: 310000, projectedHours: 9050, confidence: 82, trend: 'decreasing' },
    { month: 'Mar 2026', projectedCost: 315000, projectedHours: 9200, confidence: 78, trend: 'stable' },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  // Calculate key metrics
  const currentMonth = laborTrends[laborTrends.length - 1];
  const previousMonth = laborTrends[laborTrends.length - 2];
  const costChange = ((currentMonth.actualCost - previousMonth.actualCost) / previousMonth.actualCost) * 100;
  const totalOvertime = departmentMetrics.reduce((sum, dept) => sum + dept.overtimeHours, 0);
  const totalHours = departmentMetrics.reduce((sum, dept) => sum + dept.totalHours, 0);
  const avgCoverageRate = schedulingMetrics.reduce((sum, week) => sum + week.coverageRate, 0) / schedulingMetrics.length;
  const budgetVariance = ((currentMonth.actualCost - currentMonth.budgetedCost) / currentMonth.budgetedCost) * 100;

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics & Insights</h1>
        <p className="text-gray-600">Workforce analytics, labor cost trends, and forecasting</p>
      </div>

      {/* Period Selector */}
      <div className="mb-6 flex items-center gap-4">
        <label className="text-sm font-medium text-gray-700">Time Period:</label>
        <div className="flex gap-2">
          {(['week', 'month', 'quarter', 'year'] as const).map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedPeriod === period
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div className={`flex items-center gap-1 text-sm font-medium ${costChange >= 0 ? 'text-red-600' : 'text-green-600'}`}>
              {costChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {Math.abs(costChange).toFixed(1)}%
            </div>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Monthly Labor Cost</h3>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(currentMonth.actualCost)}</p>
          <p className="text-xs text-gray-500 mt-1">Budget: {formatCurrency(currentMonth.budgetedCost)}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-amber-100 rounded-lg">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <div className="text-sm font-medium text-amber-600">
              {((totalOvertime / totalHours) * 100).toFixed(1)}%
            </div>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Overtime Hours</h3>
          <p className="text-2xl font-bold text-gray-900">{formatNumber(totalOvertime)}</p>
          <p className="text-xs text-gray-500 mt-1">of {formatNumber(totalHours)} total hours</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div className={`text-sm font-medium ${avgCoverageRate >= 98 ? 'text-green-600' : 'text-amber-600'}`}>
              {avgCoverageRate.toFixed(1)}%
            </div>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Schedule Coverage</h3>
          <p className="text-2xl font-bold text-gray-900">{avgCoverageRate.toFixed(1)}%</p>
          <p className="text-xs text-gray-500 mt-1">Avg. shift fill rate</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className={`text-sm font-medium ${budgetVariance > 0 ? 'text-red-600' : 'text-green-600'}`}>
              {budgetVariance > 0 ? '+' : ''}{budgetVariance.toFixed(1)}%
            </div>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Budget Variance</h3>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(Math.abs(currentMonth.actualCost - currentMonth.budgetedCost))}</p>
          <p className="text-xs text-gray-500 mt-1">{budgetVariance > 0 ? 'Over' : 'Under'} budget</p>
        </div>
      </div>

      {/* Labor Cost Trends Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <LineChart className="w-5 h-5 text-blue-600" />
              Labor Cost Trends
            </h2>
            <p className="text-sm text-gray-600 mt-1">Actual vs. budgeted costs over time</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {laborTrends.map((month, index) => {
            const variance = ((month.actualCost - month.budgetedCost) / month.budgetedCost) * 100;
            const maxCost = Math.max(...laborTrends.map(m => Math.max(m.actualCost, m.budgetedCost)));
            const actualWidth = (month.actualCost / maxCost) * 100;
            const budgetWidth = (month.budgetedCost / maxCost) * 100;
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 w-24">{month.month}</span>
                  <div className="flex-1 flex items-center gap-4">
                    <div className="flex-1 relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                      <div 
                        className="absolute h-full bg-blue-500 rounded-lg transition-all"
                        style={{ width: `${actualWidth}%` }}
                      />
                      <div 
                        className="absolute h-full border-2 border-dashed border-gray-400 rounded-lg"
                        style={{ width: `${budgetWidth}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-900 w-24 text-right">
                      {formatCurrency(month.actualCost)}
                    </span>
                    <span className={`text-xs font-medium w-16 text-right ${variance > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {variance > 0 ? '+' : ''}{variance.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-gray-600">Actual Cost</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-dashed border-gray-400 rounded"></div>
            <span className="text-gray-600">Budgeted Cost</span>
          </div>
        </div>
      </div>

      {/* Department Performance */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              Department Performance
            </h2>
            <p className="text-sm text-gray-600 mt-1">Cost, efficiency, and overtime analysis by department</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Department</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Total Cost</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Avg Rate</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Hours</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">OT %</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Headcount</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Cost/Employee</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Efficiency</th>
              </tr>
            </thead>
            <tbody>
              {departmentMetrics.map((dept, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <span className="font-medium text-gray-900">{dept.name}</span>
                  </td>
                  <td className="text-right py-4 px-4 font-semibold text-gray-900">
                    {formatCurrency(dept.totalCost)}
                  </td>
                  <td className="text-right py-4 px-4 text-gray-700">
                    ${dept.avgHourlyRate.toFixed(2)}
                  </td>
                  <td className="text-right py-4 px-4 text-gray-700">
                    {formatNumber(dept.totalHours)}
                  </td>
                  <td className="text-right py-4 px-4">
                    <span className={`font-medium ${dept.overtimePercent > 5 ? 'text-amber-600' : 'text-green-600'}`}>
                      {dept.overtimePercent.toFixed(1)}%
                    </span>
                  </td>
                  <td className="text-right py-4 px-4 text-gray-700">
                    {dept.headcount}
                  </td>
                  <td className="text-right py-4 px-4 text-gray-700">
                    {formatCurrency(dept.costPerEmployee)}
                  </td>
                  <td className="text-right py-4 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${dept.efficiency >= 95 ? 'bg-green-500' : dept.efficiency >= 90 ? 'bg-blue-500' : 'bg-amber-500'}`}
                          style={{ width: `${dept.efficiency}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900 w-10">{dept.efficiency}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr className="font-bold">
                <td className="py-4 px-4 text-gray-900">Total</td>
                <td className="text-right py-4 px-4 text-gray-900">
                  {formatCurrency(departmentMetrics.reduce((sum, d) => sum + d.totalCost, 0))}
                </td>
                <td className="text-right py-4 px-4 text-gray-700">—</td>
                <td className="text-right py-4 px-4 text-gray-900">
                  {formatNumber(departmentMetrics.reduce((sum, d) => sum + d.totalHours, 0))}
                </td>
                <td className="text-right py-4 px-4 text-gray-700">—</td>
                <td className="text-right py-4 px-4 text-gray-900">
                  {departmentMetrics.reduce((sum, d) => sum + d.headcount, 0)}
                </td>
                <td className="text-right py-4 px-4 text-gray-700">—</td>
                <td className="text-right py-4 px-4 text-gray-700">—</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Scheduling Efficiency & Forecast */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Scheduling Efficiency */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              Scheduling Efficiency
            </h2>
            <p className="text-sm text-gray-600 mt-1">Weekly schedule adherence and coverage</p>
          </div>

          <div className="space-y-4">
            {schedulingMetrics.map((week, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-900">{week.week}</span>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    week.coverageRate >= 99 ? 'bg-green-100 text-green-700' :
                    week.coverageRate >= 97 ? 'bg-blue-100 text-blue-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {week.coverageRate.toFixed(1)}% Coverage
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <span className="text-gray-600">Callouts</span>
                    <p className="font-semibold text-gray-900">{week.callouts}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Open Shifts</span>
                    <p className="font-semibold text-gray-900">{week.openShifts}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Swaps</span>
                    <p className="font-semibold text-gray-900">{week.swaps}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Month Forecast */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              Cost Forecast
            </h2>
            <p className="text-sm text-gray-600 mt-1">Projected labor costs for next quarter</p>
          </div>

          <div className="space-y-4">
            {forecast.map((month, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-semibold text-gray-900">{month.month}</span>
                    <div className="flex items-center gap-2 mt-1">
                      {month.trend === 'increasing' && <TrendingUp className="w-4 h-4 text-red-600" />}
                      {month.trend === 'decreasing' && <TrendingDown className="w-4 h-4 text-green-600" />}
                      {month.trend === 'stable' && <div className="w-4 h-0.5 bg-blue-600" />}
                      <span className="text-xs text-gray-600 capitalize">{month.trend}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">{formatCurrency(month.projectedCost)}</p>
                    <p className="text-xs text-gray-600">{formatNumber(month.projectedHours)} hours</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Confidence Level</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${
                          month.confidence >= 85 ? 'bg-green-500' : 
                          month.confidence >= 75 ? 'bg-blue-500' : 
                          'bg-amber-500'
                        }`}
                        style={{ width: `${month.confidence}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{month.confidence}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-900">Forecast Insights</p>
                <p className="text-xs text-blue-700 mt-1">
                  Projected Q1 2026 total: {formatCurrency(forecast.reduce((sum, m) => sum + m.projectedCost, 0))}
                  <br/>
                  Based on historical trends, seasonal patterns, and current staffing levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts & Recommendations */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl shadow-md border border-amber-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-100 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Recommendations</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">•</span>
                <span><strong>Emergency Department:</strong> Overtime at 6.2% (target: 5%). Consider adding 1-2 PRN staff for peak periods.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">•</span>
                <span><strong>Budget Alert:</strong> December spending exceeded budget by {formatCurrency(currentMonth.actualCost - currentMonth.budgetedCost)}. Review January scheduling.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span><strong>Radiology:</strong> Excellent efficiency (96%) and low overtime (4.1%). Consider this model for other departments.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Coverage Rate:</strong> Strong performance at {avgCoverageRate.toFixed(1)}%. Shift swap system working effectively.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
