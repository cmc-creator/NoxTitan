'use client';

import { useState, useEffect } from 'react';
import { Shield, UserCheck, UserX, Clock, AlertTriangle, Bell, TrendingUp, Users, Upload, Eye } from 'lucide-react';

interface VisitorStats {
  currentlyInBuilding: number;
  todayTotal: number;
  overdue: number;
  watchlistAlerts: number;
  avgDuration: number;
}

interface ActiveVisitor {
  id: string;
  visitor: {
    firstName: string;
    lastName: string;
    company?: string;
    isWatchlist: boolean;
  };
  hostName?: string;
  purpose: string;
  checkInTime: string;
  building?: string;
  badgeNumber?: string;
  status: string;
}

export default function SentinelPage() {
  const [stats, setStats] = useState<VisitorStats>({
    currentlyInBuilding: 0,
    todayTotal: 0,
    overdue: 0,
    watchlistAlerts: 0,
    avgDuration: 0,
  });
  const [activeVisitors, setActiveVisitors] = useState<ActiveVisitor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    fetchActiveVisitors();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(() => {
      fetchStats();
      fetchActiveVisitors();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  async function fetchStats() {
    try {
      const response = await fetch('/api/visitors/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  }

  async function fetchActiveVisitors() {
    try {
      const response = await fetch('/api/visitors/active');
      if (response.ok) {
        const data = await response.json();
        setActiveVisitors(data);
      }
    } catch (error) {
      console.error('Failed to fetch active visitors:', error);
    } finally {
      setLoading(false);
    }
  }

  function getTimeInBuilding(checkInTime: string) {
    const now = new Date();
    const checkIn = new Date(checkInTime);
    const diff = now.getTime() - checkIn.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Shield className="w-10 h-10 text-blue-400" />
              Sentinel - Visitor Command Center
            </h1>
            <p className="text-slate-400">Real-time visitor tracking and security management</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => window.location.href = '/sentinel/watchlist'}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <AlertTriangle className="w-5 h-5" />
              Watchlist
            </button>
            <button
              onClick={() => window.location.href = '/sentinel/import'}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Import Data
            </button>
            <button
              onClick={() => window.location.href = '/sentinel/check-in'}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
            >
              <UserCheck className="w-5 h-5" />
              Check In Visitor
            </button>
          </div>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-green-400" />
              <span className="text-4xl font-bold text-green-400">{stats.currentlyInBuilding}</span>
            </div>
            <p className="text-green-300 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              In Building Now
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <span className="text-4xl font-bold text-blue-400">{stats.todayTotal}</span>
            </div>
            <p className="text-blue-300 font-semibold">Today's Total</p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-orange-400" />
              <span className="text-4xl font-bold text-orange-400">{stats.overdue}</span>
            </div>
            <p className="text-orange-300 font-semibold">Overdue Checkouts</p>
          </div>

          <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <span className="text-4xl font-bold text-red-400">{stats.watchlistAlerts}</span>
            </div>
            <p className="text-red-300 font-semibold">Watchlist Alerts</p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-purple-400" />
              <span className="text-4xl font-bold text-purple-400">{stats.avgDuration}</span>
            </div>
            <p className="text-purple-300 font-semibold">Avg Duration (min)</p>
          </div>
        </div>

        {/* Active Visitors Table */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden">
          <div className="bg-slate-800/80 px-6 py-4 border-b border-slate-700">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Eye className="w-6 h-6 text-blue-400" />
              Currently In Building
            </h2>
          </div>

          {loading ? (
            <div className="p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-slate-400">Loading visitors...</p>
            </div>
          ) : activeVisitors.length === 0 ? (
            <div className="p-12 text-center">
              <UserCheck className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Active Visitors</h3>
              <p className="text-slate-400">Building is currently clear.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Visitor</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Host</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Purpose</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Badge</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Time In</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {activeVisitors.map((visit) => (
                    <tr 
                      key={visit.id} 
                      className={`border-t border-slate-700 hover:bg-slate-800/30 transition-colors ${
                        visit.visitor.isWatchlist ? 'bg-red-500/5 border-red-500/30' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <div className="font-semibold text-white flex items-center gap-2">
                              {visit.visitor.firstName} {visit.visitor.lastName}
                              {visit.visitor.isWatchlist && (
                                <AlertTriangle className="w-4 h-4 text-red-500" />
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-300">{visit.visitor.company || '-'}</td>
                      <td className="px-6 py-4 text-slate-300">{visit.hostName || '-'}</td>
                      <td className="px-6 py-4 text-slate-300">{visit.purpose}</td>
                      <td className="px-6 py-4 text-slate-300">{visit.building || '-'}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/50 rounded text-xs font-mono">
                          {visit.badgeNumber || 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-300">
                          {getTimeInBuilding(visit.checkInTime)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => window.location.href = `/sentinel/checkout/${visit.id}`}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors"
                        >
                          Check Out
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
