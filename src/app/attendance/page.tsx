'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, Users, TrendingUp, AlertCircle, CheckCircle, XCircle, MapPin, Camera } from 'lucide-react';

interface AttendanceData {
  entries: any[];
  summary: {
    totalPresent: number;
    totalLate: number;
    totalAbsent: number;
    averageHours: number;
  };
}

export default function AttendancePage() {
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [entries, setEntries] = useState<any[]>([]);
  const [summary, setSummary] = useState<any>(null);
  const [filter, setFilter] = useState<'all' | 'clocked-in' | 'clocked-out'>('all');

  useEffect(() => {
    fetchAttendance();
  }, [selectedDate]);

  async function fetchAttendance() {
    setLoading(true);
    try {
      const startDate = new Date(selectedDate);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(selectedDate);
      endDate.setHours(23, 59, 59, 999);

      const response = await fetch(
        `/api/timeclock?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
      );

      if (response.ok) {
        const data = await response.json();
        setEntries(data);
        
        // Calculate summary
        const present = data.filter((e: any) => e.status === 'CLOCKED_OUT').length;
        const late = data.filter((e: any) => e.isLate).length;
        const activeEntries = data.filter((e: any) => e.status === 'CLOCKED_IN' || e.status === 'ON_BREAK');
        
        setSummary({
          totalPresent: present + activeEntries.length,
          totalLate: late,
          totalActive: activeEntries.length,
          averageHours: data
            .filter((e: any) => e.totalHours)
            .reduce((sum: number, e: any) => sum + e.totalHours, 0) / 
            Math.max(1, data.filter((e: any) => e.totalHours).length),
        });
      }
    } catch (error) {
      console.error('Failed to fetch attendance:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredEntries = entries.filter(entry => {
    if (filter === 'all') return true;
    if (filter === 'clocked-in') return entry.status === 'CLOCKED_IN' || entry.status === 'ON_BREAK';
    if (filter === 'clocked-out') return entry.status === 'CLOCKED_OUT';
    return true;
  });

  function formatDuration(hours: number): string {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}m`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Live Attendance</h1>
          <p className="text-slate-400">Real-time clock-in/out monitoring</p>
        </div>

        {/* Date Picker & Filters */}
        <div className="flex items-center gap-4 mb-6">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          />
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('clocked-in')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'clocked-in'
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              Active Now
            </button>
            <button
              onClick={() => setFilter('clocked-out')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'clocked-out'
                  ? 'bg-slate-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        {summary && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8 text-green-400" />
                <span className="text-3xl font-bold text-white">{summary.totalPresent}</span>
              </div>
              <p className="text-slate-300 font-semibold">Present Today</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-8 h-8 text-blue-400" />
                <span className="text-3xl font-bold text-white">{summary.totalActive}</span>
              </div>
              <p className="text-slate-300 font-semibold">Active Now</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <AlertCircle className="w-8 h-8 text-orange-400" />
                <span className="text-3xl font-bold text-white">{summary.totalLate}</span>
              </div>
              <p className="text-slate-300 font-semibold">Late Arrivals</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-8 h-8 text-purple-400" />
                <span className="text-3xl font-bold text-white">
                  {summary.averageHours.toFixed(1)}h
                </span>
              </div>
              <p className="text-slate-300 font-semibold">Avg. Hours</p>
            </div>
          </div>
        )}

        {/* Attendance List */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Employee</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Clock In</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Clock Out</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Hours</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                      Loading attendance data...
                    </td>
                  </tr>
                ) : filteredEntries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                      No attendance records for this date
                    </td>
                  </tr>
                ) : (
                  filteredEntries.map((entry) => (
                    <tr key={entry.id} className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {entry.photoClockIn ? (
                            <img
                              src={entry.photoClockIn}
                              alt="Employee"
                              className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                              {entry.employee.firstName[0]}{entry.employee.lastName[0]}
                            </div>
                          )}
                          <div>
                            <p className="text-white font-semibold">
                              {entry.employee.firstName} {entry.employee.lastName}
                            </p>
                            <p className="text-xs text-slate-400">{entry.employee.position}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-white">
                          {new Date(entry.clockIn).toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                        {entry.isLate && (
                          <span className="text-xs text-orange-400">
                            +{entry.lateMinutes}min late
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-white">
                        {entry.clockOut ? (
                          <div>
                            {new Date(entry.clockOut).toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                            {entry.isEarlyOut && (
                              <span className="text-xs text-orange-400 block">
                                -{entry.earlyMinutes}min early
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-slate-500">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">
                          {entry.totalHours ? formatDuration(entry.totalHours) : '-'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {entry.status === 'CLOCKED_IN' && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            Active
                          </span>
                        )}
                        {entry.status === 'ON_BREAK' && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full">
                            <Clock className="w-3 h-3" />
                            On Break
                          </span>
                        )}
                        {entry.status === 'CLOCKED_OUT' && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-600/50 text-slate-400 text-xs font-semibold rounded-full">
                            <CheckCircle className="w-3 h-3" />
                            Complete
                          </span>
                        )}
                        {entry.missedMealBreak && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full mt-1">
                            <AlertCircle className="w-3 h-3" />
                            Missed Break
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {entry.clockInLat && entry.clockInLng && (
                            <span className={`inline-flex items-center gap-1 text-xs ${
                              entry.isWithinGeofence ? 'text-green-400' : 'text-red-400'
                            }`}>
                              <MapPin className="w-3 h-3" />
                              {entry.isWithinGeofence ? 'Verified' : 'Outside'}
                            </span>
                          )}
                          {entry.photoClockIn && (
                            <Camera className="w-4 h-4 text-blue-400" />
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
