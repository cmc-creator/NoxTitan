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
    <div className="min-h-screen lux-app-bg p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Live Attendance</h1>
          <p className="text-stone-400">Real-time clock-in/out monitoring</p>
        </div>

        {/* Date Picker & Filters */}
        <div className="flex items-center gap-4 mb-6">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 bg-stone-900 border border-stone-700 rounded-lg text-white focus:outline-none focus:border-amber-500/40"
          />
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-900 text-stone-400 hover:bg-stone-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('clocked-in')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'clocked-in'
                  ? 'bg-green-600 text-white'
                  : 'bg-stone-900 text-stone-400 hover:bg-stone-900'
              }`}
            >
              Active Now
            </button>
            <button
              onClick={() => setFilter('clocked-out')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'clocked-out'
                  ? 'bg-stone-600 text-white'
                  : 'bg-stone-900 text-stone-400 hover:bg-stone-900'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        {summary && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div style={{ background: 'linear-gradient(135deg, #131009 0%, #110F0B 100%)', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '4px', padding: '24px' }}>
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8" style={{ color: '#C9A84C' }} />
                <span className="text-3xl font-bold text-white">{summary.totalPresent}</span>
              </div>
              <p className="text-stone-300 font-semibold">Present Today</p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #131009 0%, #110F0B 100%)', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '4px', padding: '24px' }}>
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-8 h-8" style={{ color: '#C9A84C' }} />
                <span className="text-3xl font-bold text-white">{summary.totalActive}</span>
              </div>
              <p className="text-stone-300 font-semibold">Active Now</p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #150C0C 0%, #110F0B 100%)', border: '1px solid rgba(140,40,40,0.35)', borderRadius: '4px', padding: '24px' }}>
              <div className="flex items-center justify-between mb-2">
                <AlertCircle className="w-8 h-8" style={{ color: 'rgba(195,95,95,0.85)' }} />
                <span className="text-3xl font-bold text-white">{summary.totalLate}</span>
              </div>
              <p className="text-stone-300 font-semibold">Late Arrivals</p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #131009 0%, #110F0B 100%)', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '4px', padding: '24px' }}>
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-8 h-8" style={{ color: '#C9A84C' }} />
                <span className="text-3xl font-bold text-white">
                  {summary.averageHours.toFixed(1)}h
                </span>
              </div>
              <p className="text-stone-300 font-semibold">Avg. Hours</p>
            </div>
          </div>
        )}

        {/* Attendance List */}
        <div className="bg-stone-900/50 backdrop-blur border border-stone-700 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-stone-900">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-stone-300">Employee</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-stone-300">Clock In</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-stone-300">Clock Out</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-stone-300">Hours</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-stone-300">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-stone-300">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-stone-400">
                      Loading attendance data...
                    </td>
                  </tr>
                ) : filteredEntries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-stone-400">
                      No attendance records for this date
                    </td>
                  </tr>
                ) : (
                  filteredEntries.map((entry) => (
                    <tr key={entry.id} className="hover:bg-stone-900/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {entry.photoClockIn ? (
                            <img
                              src={entry.photoClockIn}
                              alt="Employee"
                              className="w-10 h-10 rounded-full object-cover border-2 border-amber-500/40"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-700 to-amber-500 flex items-center justify-center text-white font-bold">
                              {entry.employee.firstName[0]}{entry.employee.lastName[0]}
                            </div>
                          )}
                          <div>
                            <p className="text-white font-semibold">
                              {entry.employee.firstName} {entry.employee.lastName}
                            </p>
                            <p className="text-xs text-stone-400">{entry.employee.position}</p>
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
                          <span className="text-xs" style={{ color: 'rgba(195,95,95,0.8)' }}>
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
                              <span className="text-xs block" style={{ color: '#9E8F75' }}>
                                -{entry.earlyMinutes}min early
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-stone-500">-</span>
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
                          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold" style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '4px' }}>
                            <Clock className="w-3 h-3" />
                            On Break
                          </span>
                        )}
                        {entry.status === 'CLOCKED_OUT' && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-stone-600/50 text-stone-400 text-xs font-semibold rounded-full">
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
                            <Camera className="w-4 h-4 text-amber-400" />
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


