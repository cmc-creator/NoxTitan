'use client';

import { useState, useEffect } from 'react';
import { ClipboardCheck, Send, TrendingUp, Calendar, Filter, Plus } from 'lucide-react';

interface Survey {
  id: string;
  surveyType: string;
  dayMilestone: number;
  scheduledDate: string;
  sentAt?: string;
  completedAt?: string;
  score?: number;
  feedback?: string;
  employee: {
    firstName: string;
    lastName: string;
    hireDate?: string;
  };
}

export default function EmployeeSurveysPage() {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [employees, setEmployees] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    employeeId: '',
    surveyType: 'ONBOARDING',
    dayMilestone: 30,
  });

  useEffect(() => {
    fetchSurveys();
    fetchEmployees();
  }, []);

  async function fetchSurveys() {
    try {
      const response = await fetch('/api/hr/surveys');
      if (response.ok) {
        const data = await response.json();
        setSurveys(data);
      }
    } catch (error) {
      console.error('Failed to fetch surveys:', error);
    } finally {
      setLoading(false);
    }
  }

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

  async function handleCreateSurvey(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch('/api/hr/surveys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchSurveys();
        setShowCreateModal(false);
        resetForm();
      }
    } catch (error) {
      console.error('Failed to create survey:', error);
    }
  }

  async function sendSurvey(surveyId: string) {
    try {
      const response = await fetch('/api/hr/surveys', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ surveyId, action: 'send' }),
      });

      if (response.ok) {
        fetchSurveys();
      }
    } catch (error) {
      console.error('Failed to send survey:', error);
    }
  }

  function resetForm() {
    setFormData({
      employeeId: '',
      surveyType: 'ONBOARDING',
      dayMilestone: 30,
    });
  }

  const filteredSurveys = surveys.filter(survey => {
    if (filterType !== 'all' && survey.surveyType !== filterType) return false;
    if (filterStatus === 'pending' && survey.completedAt) return false;
    if (filterStatus === 'completed' && !survey.completedAt) return false;
    return true;
  });

  const stats = {
    total: surveys.length,
    pending: surveys.filter(s => !s.completedAt).length,
    completed: surveys.filter(s => s.completedAt).length,
    avgScore: surveys.filter(s => s.score).reduce((sum, s) => sum + (s.score || 0), 0) / 
              Math.max(1, surveys.filter(s => s.score).length),
  };

  function getScoreColor(score: number) {
    if (score >= 8) return 'text-green-400';
    if (score >= 6) return 'text-yellow-400';
    return 'text-red-400';
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Employee Surveys</h1>
            <p className="text-slate-400">Track 30/60/90 day satisfaction and engagement</p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all"
          >
            <Plus className="w-5 h-5" />
            Schedule Survey
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <ClipboardCheck className="w-8 h-8 text-blue-400" />
              <span className="text-3xl font-bold text-white">{stats.total}</span>
            </div>
            <p className="text-slate-300 font-semibold">Total Surveys</p>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Send className="w-8 h-8 text-yellow-400" />
              <span className="text-3xl font-bold text-yellow-400">{stats.pending}</span>
            </div>
            <p className="text-yellow-300 font-semibold">Pending</p>
          </div>

          <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <ClipboardCheck className="w-8 h-8 text-green-400" />
              <span className="text-3xl font-bold text-green-400">{stats.completed}</span>
            </div>
            <p className="text-green-300 font-semibold">Completed</p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-purple-400" />
              <span className="text-3xl font-bold text-purple-400">{stats.avgScore.toFixed(1)}/10</span>
            </div>
            <p className="text-purple-300 font-semibold">Avg. Score</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-slate-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Types</option>
              <option value="ONBOARDING">Onboarding</option>
              <option value="SATISFACTION">Satisfaction</option>
              <option value="ENGAGEMENT">Engagement</option>
              <option value="PULSE">Pulse</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Surveys List */}
        <div className="space-y-4">
          {loading ? (
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-slate-400">Loading surveys...</p>
            </div>
          ) : filteredSurveys.length === 0 ? (
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-12 text-center">
              <ClipboardCheck className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Surveys Found</h3>
              <p className="text-slate-400 mb-6">Schedule your first employee survey!</p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Schedule Survey
              </button>
            </div>
          ) : (
            filteredSurveys.map((survey) => (
              <div
                key={survey.id}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white">
                        {survey.employee.firstName} {survey.employee.lastName}
                      </h3>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">
                        {survey.dayMilestone}-Day {survey.surveyType}
                      </span>
                      {survey.completedAt && survey.score && (
                        <span className={`text-2xl font-bold ${getScoreColor(survey.score)}`}>
                          {survey.score}/10
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Scheduled: {new Date(survey.scheduledDate).toLocaleDateString()}</span>
                      </div>
                      {survey.sentAt && (
                        <>
                          <span className="text-slate-600">•</span>
                          <span>Sent: {new Date(survey.sentAt).toLocaleDateString()}</span>
                        </>
                      )}
                      {survey.completedAt && (
                        <>
                          <span className="text-slate-600">•</span>
                          <span className="text-green-400">
                            Completed: {new Date(survey.completedAt).toLocaleDateString()}
                          </span>
                        </>
                      )}
                    </div>

                    {survey.feedback && (
                      <div className="bg-slate-700/30 rounded-lg p-3 text-sm text-slate-300">
                        <p className="font-semibold text-white mb-1">Feedback:</p>
                        <p>{survey.feedback}</p>
                      </div>
                    )}
                  </div>

                  {!survey.sentAt && (
                    <button
                      onClick={() => sendSurvey(survey.id)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Now
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Create Survey Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full">
              <h2 className="text-2xl font-bold text-white mb-6">Schedule Employee Survey</h2>

              <form onSubmit={handleCreateSurvey} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Employee *
                  </label>
                  <select
                    required
                    value={formData.employeeId}
                    onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select an employee...</option>
                    {employees.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.firstName} {emp.lastName} - {emp.position || 'Employee'}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Survey Type *
                    </label>
                    <select
                      value={formData.surveyType}
                      onChange={(e) => setFormData({ ...formData, surveyType: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="ONBOARDING">Onboarding</option>
                      <option value="SATISFACTION">Satisfaction</option>
                      <option value="ENGAGEMENT">Engagement</option>
                      <option value="PULSE">Pulse Check</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Day Milestone *
                    </label>
                    <select
                      value={formData.dayMilestone}
                      onChange={(e) => setFormData({ ...formData, dayMilestone: parseInt(e.target.value) })}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="30">30 Days</option>
                      <option value="60">60 Days</option>
                      <option value="90">90 Days</option>
                      <option value="180">180 Days</option>
                      <option value="365">1 Year</option>
                    </select>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm text-blue-300">
                    💡 <strong>Auto-Schedule:</strong> The survey will automatically be scheduled based on the employee's hire date + {formData.dayMilestone} days.
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowCreateModal(false);
                      resetForm();
                    }}
                    className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all"
                  >
                    Schedule Survey
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
