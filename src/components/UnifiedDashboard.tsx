'use client';

import React from 'react';
import Link from 'next/link';
import { dataHub } from '@/lib/dataIntegration';
import { 
  Users, Calendar, Clock, AlertTriangle, Shield, TrendingUp, 
  CheckCircle, XCircle, Activity, BarChart3, Bell, ArrowRight 
} from 'lucide-react';

export default function UnifiedDashboard() {
  const dashboardData = dataHub.getDashboardData();
  const notifications = dataHub.getNotifications();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Command Center</h1>
              <p className="text-gray-600">Real-time business intelligence and operations hub</p>
            </div>
            <div className="px-6 py-3 rounded-xl bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-2 border-purple-600/40 shadow-lg">
              <p className="text-xs text-purple-200 mb-1">Current Plan</p>
              <p className="text-2xl font-bold text-white">{typeof window !== 'undefined' && localStorage.getItem('tier') || 'PROFESSIONAL'}</p>
            </div>
          </div>
        </div>

        {/* Notifications Banner */}
        {notifications.length > 0 && (
          <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Bell className="w-5 h-5 text-yellow-600" />
              <h2 className="font-bold text-yellow-900">{notifications.length} Active Notifications</h2>
            </div>
            <div className="space-y-2">
              {notifications.map(notif => (
                <div key={notif.id} className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-yellow-900">{notif.title}</p>
                    <p className="text-sm text-yellow-700">{notif.message}</p>
                  </div>
                  {notif.link && (
                    <Link href={notif.link} className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                      View <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Employees */}
          <Link href="/employees" className="block">
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-transparent hover:border-blue-400 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">HR System</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{dashboardData.employees.active}</h3>
              <p className="text-gray-600">Active Employees</p>
              <p className="text-sm text-gray-500 mt-2">Avg Performance: {dashboardData.employees.avgPerformance.toFixed(1)}%</p>
            </div>
          </Link>

          {/* Scheduling */}
          <Link href="/calendar" className="block">
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-transparent hover:border-green-400 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">Scheduling</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{dashboardData.scheduling.coverageRate}%</h3>
              <p className="text-gray-600">Coverage Rate</p>
              <p className="text-sm text-gray-500 mt-2">{dashboardData.scheduling.upcomingShifts} upcoming shifts</p>
            </div>
          </Link>

          {/* Time Off */}
          <Link href="/time-off" className="block">
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-transparent hover:border-purple-400 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">Time Off</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{dashboardData.timeOff.pending}</h3>
              <p className="text-gray-600">Pending Requests</p>
              <p className="text-sm text-gray-500 mt-2">{dashboardData.timeOff.approved} approved this month</p>
            </div>
          </Link>

          {/* Quality & Safety */}
          <Link href="/qapi" className="block">
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-transparent hover:border-red-400 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">QAPI</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{dashboardData.quality.openIncidents}</h3>
              <p className="text-gray-600">Open Incidents</p>
              <p className="text-sm text-gray-500 mt-2">{dashboardData.quality.metricsOnTarget}/{dashboardData.quality.totalMetrics} metrics on target</p>
            </div>
          </Link>
        </div>

        {/* System Status Grid */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">System Integration Status</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'HR Analytics', status: 'Connected', link: '/hr/analytics' },
              { name: 'Scheduling', status: 'Connected', link: '/calendar' },
              { name: 'Time & Attendance', status: 'Connected', link: '/attendance' },
              { name: 'QAPI Portal', status: 'Connected', link: '/qapi' },
              { name: 'Reports Dashboard', status: 'Connected', link: '/reports' },
              { name: 'Policy Center', status: 'Connected', link: '/settings/policies' },
              { name: 'Compliance', status: 'Connected', link: '/compliance' },
              { name: 'Learning Hub', status: 'Connected', link: '/learning' },
            ].map((system) => (
              <Link key={system.name} href={system.link}>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium text-green-700">{system.status}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{system.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Cross-System Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Department Performance */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Department Performance</h2>
            <div className="space-y-3">
              {['Emergency', 'ICU', 'Nursing', 'Radiology', 'Laboratory'].map((dept) => {
                const metrics = dataHub.calculateDepartmentMetrics(dept);
                const score = ((metrics.completedShifts / metrics.totalShifts) * 100) || 95;
                
                return (
                  <div key={dept}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{dept}</span>
                      <span className="text-sm font-bold text-gray-900">{score.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${score >= 90 ? 'bg-green-500' : score >= 75 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link href="/qapi?tab=reports" className="block p-4 bg-white rounded-lg hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Generate Executive Report</p>
                      <p className="text-sm text-gray-600">Pull data from all systems</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </Link>

              <Link href="/time-off" className="block p-4 bg-white rounded-lg hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Review Time Off Requests</p>
                      <p className="text-sm text-gray-600">{dashboardData.timeOff.pending} pending approval</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </Link>

              <Link href="/qapi?tab=incidents" className="block p-4 bg-white rounded-lg hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Review Open Incidents</p>
                      <p className="text-sm text-gray-600">{dashboardData.quality.openIncidents} requiring attention</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </Link>

              <Link href="/compliance" className="block p-4 bg-white rounded-lg hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Compliance Dashboard</p>
                      <p className="text-sm text-gray-600">{dashboardData.compliance.complianceRate}% current</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Data Flow Diagram */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Data Integration Flow</h2>
          <p className="text-gray-600 mb-6">All systems share data through a central integration hub, ensuring consistency and real-time updates across the platform.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-xs font-medium text-gray-700 mt-2">HR System</p>
            </div>

            <ArrowRight className="w-6 h-6 text-gray-400" />

            <div className="flex flex-col items-center">
              <div className="p-4 bg-green-100 rounded-lg">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-xs font-medium text-gray-700 mt-2">Scheduling</p>
            </div>

            <ArrowRight className="w-6 h-6 text-gray-400" />

            <div className="flex flex-col items-center">
              <div className="p-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg border-2 border-purple-400">
                <Activity className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-sm font-bold text-purple-900 mt-2">Data Hub</p>
            </div>

            <ArrowRight className="w-6 h-6 text-gray-400" />

            <div className="flex flex-col items-center">
              <div className="p-4 bg-red-100 rounded-lg">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-xs font-medium text-gray-700 mt-2">QAPI</p>
            </div>

            <ArrowRight className="w-6 h-6 text-gray-400" />

            <div className="flex flex-col items-center">
              <div className="p-4 bg-yellow-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-xs font-medium text-gray-700 mt-2">Reports</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
