'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle, AlertCircle, CheckCircle, XCircle, Clock, Filter, Calendar } from 'lucide-react';

interface Violation {
  id: string;
  type: string;
  severity: string;
  status: string;
  description: string;
  detectedAt: string;
  resolvedAt?: string;
  resolvedBy?: string;
  resolution?: string;
  timeClockEntry: {
    employee: {
      firstName: string;
      lastName: string;
      position?: string;
    };
    clockIn: string;
    clockOut?: string;
  };
}

export default function ComplianceViolationsPage() {
  const [violations, setViolations] = useState<Violation[]>([]);
  const [loading, setLoading] = useState(true);
  const [severityFilter, setSeverityFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedViolation, setSelectedViolation] = useState<Violation | null>(null);
  const [resolution, setResolution] = useState('');

  useEffect(() => {
    fetchViolations();
  }, []);

  async function fetchViolations() {
    setLoading(true);
    try {
      const response = await fetch('/api/compliance/violations');
      if (response.ok) {
        const data = await response.json();
        setViolations(data);
      }
    } catch (error) {
      console.error('Failed to fetch violations:', error);
    } finally {
      setLoading(false);
    }
  }

  async function resolveViolation(violationId: string) {
    try {
      const response = await fetch('/api/compliance/violations', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          violationId,
          resolution,
        }),
      });

      if (response.ok) {
        fetchViolations();
        setSelectedViolation(null);
        setResolution('');
      }
    } catch (error) {
      console.error('Failed to resolve violation:', error);
    }
  }

  const filteredViolations = violations.filter(v => {
    if (severityFilter !== 'all' && v.severity !== severityFilter) return false;
    if (statusFilter !== 'all' && v.status !== statusFilter) return false;
    return true;
  });

  const stats = {
    total: violations.length,
    critical: violations.filter(v => v.severity === 'CRITICAL' && v.status === 'OPEN').length,
    high: violations.filter(v => v.severity === 'HIGH' && v.status === 'OPEN').length,
    open: violations.filter(v => v.status === 'OPEN').length,
    resolved: violations.filter(v => v.status === 'RESOLVED').length,
  };

  function getSeverityColor(severity: string) {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-500/20 border-red-500';
      case 'HIGH': return 'text-orange-400 bg-orange-500/20 border-orange-500';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500';
      case 'LOW': return 'text-blue-400 bg-blue-500/20 border-blue-500';
      default: return 'text-slate-400 bg-slate-500/20 border-slate-500';
    }
  }

  function getStatusIcon(status: string) {
    switch (status) {
      case 'OPEN': return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'ACKNOWLEDGED': return <Clock className="w-5 h-5 text-yellow-400" />;
      case 'RESOLVED': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'DISMISSED': return <XCircle className="w-5 h-5 text-slate-400" />;
      default: return null;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Compliance Violations</h1>
          <p className="text-slate-400">Monitor and resolve workplace compliance issues</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4">
            <div className="text-3xl font-bold text-white mb-1">{stats.total}</div>
            <div className="text-sm text-slate-400">Total Violations</div>
          </div>
          <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4">
            <div className="text-3xl font-bold text-red-400 mb-1">{stats.critical}</div>
            <div className="text-sm text-red-300">Critical Open</div>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/50 rounded-xl p-4">
            <div className="text-3xl font-bold text-orange-400 mb-1">{stats.high}</div>
            <div className="text-sm text-orange-300">High Priority</div>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-xl p-4">
            <div className="text-3xl font-bold text-yellow-400 mb-1">{stats.open}</div>
            <div className="text-sm text-yellow-300">Open Cases</div>
          </div>
          <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-4">
            <div className="text-3xl font-bold text-green-400 mb-1">{stats.resolved}</div>
            <div className="text-sm text-green-300">Resolved</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-slate-400" />
            <div className="flex gap-2">
              <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Severities</option>
                <option value="CRITICAL">Critical</option>
                <option value="HIGH">High</option>
                <option value="MEDIUM">Medium</option>
                <option value="LOW">Low</option>
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Statuses</option>
                <option value="OPEN">Open</option>
                <option value="ACKNOWLEDGED">Acknowledged</option>
                <option value="RESOLVED">Resolved</option>
                <option value="DISMISSED">Dismissed</option>
              </select>
            </div>
            <div className="ml-auto text-sm text-slate-400">
              Showing {filteredViolations.length} of {violations.length} violations
            </div>
          </div>
        </div>

        {/* Violations List */}
        <div className="space-y-4">
          {loading ? (
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-slate-400">Loading violations...</p>
            </div>
          ) : filteredViolations.length === 0 ? (
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Violations Found</h3>
              <p className="text-slate-400">All employees are in compliance!</p>
            </div>
          ) : (
            filteredViolations.map((violation) => (
              <div
                key={violation.id}
                className={`bg-slate-800/50 backdrop-blur border rounded-xl p-6 hover:border-blue-500/50 transition-colors ${
                  violation.status === 'OPEN' ? 'border-red-500/50' : 'border-slate-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Severity Badge */}
                  <div className={`px-3 py-1 border rounded-lg text-sm font-semibold ${getSeverityColor(violation.severity)}`}>
                    {violation.severity}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{violation.type}</h3>
                        <p className="text-slate-400 text-sm">{violation.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(violation.status)}
                        <span className="text-sm text-slate-400">{violation.status}</span>
                      </div>
                    </div>

                    {/* Employee Info */}
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                          {violation.timeClockEntry.employee.firstName[0]}
                          {violation.timeClockEntry.employee.lastName[0]}
                        </div>
                        <span className="text-white font-semibold">
                          {violation.timeClockEntry.employee.firstName} {violation.timeClockEntry.employee.lastName}
                        </span>
                      </div>
                      {violation.timeClockEntry.employee.position && (
                        <span className="text-slate-500">•</span>
                      )}
                      {violation.timeClockEntry.employee.position && (
                        <span className="text-slate-400">
                          {violation.timeClockEntry.employee.position}
                        </span>
                      )}
                    </div>

                    {/* Time Info */}
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Detected: {new Date(violation.detectedAt).toLocaleString()}</span>
                      </div>
                      {violation.resolvedAt && (
                        <>
                          <span className="text-slate-600">•</span>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Resolved: {new Date(violation.resolvedAt).toLocaleString()}</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Resolution */}
                    {violation.status === 'RESOLVED' && violation.resolution && (
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-3">
                        <div className="text-xs font-semibold text-green-400 mb-1">Resolution:</div>
                        <div className="text-sm text-green-300">{violation.resolution}</div>
                      </div>
                    )}

                    {/* Actions */}
                    {violation.status === 'OPEN' && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedViolation(violation)}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                        >
                          Resolve Violation
                        </button>
                        <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg transition-colors">
                          Acknowledge
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Resolution Modal */}
        {selectedViolation && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full">
              <h2 className="text-2xl font-bold text-white mb-6">Resolve Violation</h2>

              <div className="mb-6">
                <div className={`inline-block px-3 py-1 border rounded-lg text-sm font-semibold mb-3 ${getSeverityColor(selectedViolation.severity)}`}>
                  {selectedViolation.severity}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{selectedViolation.type}</h3>
                <p className="text-slate-400">{selectedViolation.description}</p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Resolution Details *
                </label>
                <textarea
                  value={resolution}
                  onChange={(e) => setResolution(e.target.value)}
                  placeholder="Describe how this violation was resolved..."
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectedViolation(null);
                    setResolution('');
                  }}
                  className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => resolveViolation(selectedViolation.id)}
                  disabled={!resolution.trim()}
                  className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
                >
                  Mark as Resolved
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
