'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, MapPin, Camera, User, Coffee, LogOut, AlertCircle, CheckCircle } from 'lucide-react';
import BreakTimer from '@/components/BreakTimer';

interface ActiveEntry {
  id: string;
  clockIn: string;
  employee: {
    firstName: string;
    lastName: string;
  };
  status: string;
  isLate: boolean;
  lateMinutes?: number;
}

interface ActiveBreak {
  id: string;
  breakType: 'MEAL' | 'REST' | 'UNPAID';
  startTime: string;
  isPaid: boolean;
}

export default function TimeClockPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeEntry, setActiveEntry] = useState<ActiveEntry | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [employees, setEmployees] = useState<any[]>([]);
  const [activeBreak, setActiveBreak] = useState<ActiveBreak | null>(null);

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.log('Location access denied:', error)
      );
    }
  }, []);

  // Fetch employees
  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    try {
      const response = await fetch('/api/employees');
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      }
    } catch (error) {
      console.error('Failed to fetch employees:', error);
    }
  }

  async function checkActiveEntry(employeeId: string) {
    try {
      const response = await fetch(`/api/timeclock?employeeId=${employeeId}&status=CLOCKED_IN`);
      if (response.ok) {
        const entries = await response.json();
        if (entries.length > 0) {
          setActiveEntry(entries[0]);
        }
      }
    } catch (error) {
      console.error('Failed to check active entry:', error);
    }
  }

  async function handleClockIn() {
    if (!selectedEmployee) {
      setError('Please select an employee');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/timeclock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          employeeId: selectedEmployee,
          latitude: location?.lat,
          longitude: location?.lng,
          deviceType: 'web',
          photoUrl,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Clocked in successfully!');
        setActiveEntry(data);
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Failed to clock in');
      }
    } catch (error) {
      setError('Failed to clock in');
    } finally {
      setLoading(false);
    }
  }

  async function handleClockOut() {
    if (!activeEntry) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/timeclock', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timeClockEntryId: activeEntry.id,
          latitude: location?.lat,
          longitude: location?.lng,
          photoUrl,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Clocked out successfully!');
        setActiveEntry(null);
        setSelectedEmployee('');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Failed to clock out');
      }
    } catch (error) {
      setError('Failed to clock out');
    } finally {
      setLoading(false);
    }
  }

  async function handleStartBreak(breakType: 'MEAL' | 'REST') {
    if (!activeEntry) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/timeclock/break', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timeClockEntryId: activeEntry.id,
          breakType,
          isPaid: breakType === 'REST',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess(`${breakType === 'MEAL' ? 'Meal' : 'Rest'} break started`);
        setActiveBreak({
          id: data.id,
          breakType,
          startTime: data.startTime,
          isPaid: breakType === 'REST',
        });
        checkActiveEntry(selectedEmployee);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to start break');
      }
    } catch (error) {
      setError('Failed to start break');
    } finally {
      setLoading(false);
    }
  }

  async function handleEndBreak() {
    if (!activeBreak) return;

    setLoading(true);
    try {
      const response = await fetch('/api/timeclock/break', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          breakEntryId: activeBreak.id,
        }),
      });

      if (response.ok) {
        setSuccess('Break ended successfully');
        setActiveBreak(null);
        checkActiveEntry(selectedEmployee);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to end break');
      }
    } catch (error) {
      setError('Failed to end break');
    } finally {
      setLoading(false);
    }
  }

  const clockInTime = activeEntry ? new Date(activeEntry.clockIn) : null;
  const hoursWorked = clockInTime
    ? ((currentTime.getTime() - clockInTime.getTime()) / (1000 * 60 * 60)).toFixed(2)
    : '0.00';

  return (
    <div className="min-h-screen lux-app-bg p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Time Clock</h1>
          <p className="text-[#9E8F75]">Clock in and out of your shifts</p>
        </div>

        {/* Digital Clock Display */}
        <div className="bg-[rgba(201,168,76,0.06)]/50 backdrop-blur border border-[rgba(201,168,76,0.22)] rounded p-8 mb-6 text-center">
          <div className="text-6xl font-bold text-white mb-2">
            {currentTime.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit',
              second: '2-digit' 
            })}
          </div>
          <div className="text-xl text-[#9E8F75]">
            {currentTime.toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric',
              year: 'numeric' 
            })}
          </div>
        </div>

        {/* Status Messages */}
        {error && (
          <div className="bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded-lg p-4 mb-6 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {success && (
          <div className="bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded-lg p-4 mb-6 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <p className="text-green-400 text-sm">{success}</p>
          </div>
        )}

        {/* Active Session */}
        {activeEntry && (
          <div className="bg-[rgba(201,168,76,0.06)] border border-amber-500/40/50 rounded p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Currently Clocked In</h3>
                <p className="text-[#9E8F75]">{activeEntry.employee.firstName} {activeEntry.employee.lastName}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">{hoursWorked} hrs</div>
                <div className="text-sm text-[#9E8F75]">
                  Since {new Date(activeEntry.clockIn).toLocaleTimeString()}
                </div>
              </div>
            </div>

            {activeEntry.isLate && (
              <div className="bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded-lg p-3 mb-4">
                <p className="text-[#9E8F75] text-sm">
                  ⚠️ Clocked in {activeEntry.lateMinutes} minutes late
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleStartBreak('MEAL')}
                disabled={loading || activeEntry.status === 'ON_BREAK'}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg transition-colors disabled:opacity-50"
              >
                <Coffee className="w-5 h-5" />
                <span>Meal Break</span>
              </button>
              <button
                onClick={() => handleStartBreak('REST')}
                disabled={loading || activeEntry.status === 'ON_BREAK'}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg transition-colors disabled:opacity-50"
              >
                <Coffee className="w-5 h-5" />
                <span>Rest Break</span>
              </button>
              <button
                onClick={handleClockOut}
                disabled={loading}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-500 text-white rounded-lg font-semibold transition-colors disabled:opacity-50"
              >
                <LogOut className="w-5 h-5" />
                <span>Clock Out</span>
              </button>
            </div>
          </div>
        )}

        {/* Clock In Form */}
        {!activeEntry && (
          <div className="bg-[rgba(201,168,76,0.06)]/50 backdrop-blur border border-[rgba(201,168,76,0.22)] rounded p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Clock In</h3>

            {/* Employee Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#9E8F75] mb-2">
                Select Employee
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9E8F75]" />
                <select
                  value={selectedEmployee}
                  onChange={(e) => {
                    setSelectedEmployee(e.target.value);
                    checkActiveEntry(e.target.value);
                  }}
                  className="w-full pl-11 pr-4 py-3 bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded-lg text-white focus:outline-none focus:border-amber-500/40 focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
                >
                  <option value="">Choose an employee...</option>
                  {employees.map((emp) => (
                    <option key={emp.id} value={emp.id}>
                      {emp.firstName} {emp.lastName} - {emp.position || 'Employee'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location Status */}
            <div className="mb-6 p-4 bg-[rgba(201,168,76,0.06)]/30 rounded-lg">
              <div className="flex items-center gap-3">
                <MapPin className={`w-5 h-5 ${location ? 'text-green-400' : 'text-[#9E8F75]'}`} />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {location ? 'Location Verified' : 'Getting Location...'}
                  </p>
                  {location && (
                    <p className="text-xs text-[#9E8F75]">
                      {location.lat.toFixed(4)}, {location.lng.toFixed(4)}

        {/* Break Timer Widget */}
        <BreakTimer activeBreak={activeBreak} onEndBreak={handleEndBreak} />
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Clock In Button */}
            <button
              onClick={handleClockIn}
              disabled={loading || !selectedEmployee}
              className="w-full py-4 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Clocking In...' : 'Clock In'}
            </button>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => router.push('/attendance')}
            className="flex-1 px-4 py-3 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.04)] text-white rounded-lg transition-colors"
          >
            View Attendance
          </button>
          <button
            onClick={() => router.push('/timeclock/devices')}
            className="flex-1 px-4 py-3 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.04)] text-white rounded-lg transition-colors"
          >
            Manage Devices
          </button>
        </div>
      </div>
    </div>
  );
}


