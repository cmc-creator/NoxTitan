'use client';

import { useState, useEffect } from 'react';
import { Zap, Plus, Power, Clock, TrendingUp, Calendar as CalendarIcon } from 'lucide-react';

interface AutomationRule {
  id: string;
  name: string;
  description?: string;
  triggerType: string;
  actionType: string;
  isActive: boolean;
  lastRun?: string;
  nextRun?: string;
  runCount: number;
}

export default function AutomationPage() {
  const [rules, setRules] = useState<AutomationRule[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    triggerType: 'HIRE_DATE',
    triggerDays: 30,
    actionType: 'SEND_SURVEY',
    actionConfig: {
      surveyType: 'ONBOARDING',
      dayMilestone: 30,
    },
  });

  useEffect(() => {
    fetchRules();
  }, []);

  async function fetchRules() {
    try {
      const response = await fetch('/api/hr/automation');
      if (response.ok) {
        const data = await response.json();
        setRules(data);
      }
    } catch (error) {
      console.error('Failed to fetch automation rules:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateRule(e: React.FormEvent) {
    e.preventDefault();

    const triggerConfig = {
      daysAfter: formData.triggerDays,
      triggerOn: formData.triggerType,
    };

    try {
      const response = await fetch('/api/hr/automation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          triggerConfig,
        }),
      });

      if (response.ok) {
        fetchRules();
        setShowModal(false);
        resetForm();
      }
    } catch (error) {
      console.error('Failed to create automation rule:', error);
    }
  }

  async function toggleRule(ruleId: string, isActive: boolean) {
    try {
      const response = await fetch('/api/hr/automation', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ruleId, isActive: !isActive }),
      });

      if (response.ok) {
        fetchRules();
      }
    } catch (error) {
      console.error('Failed to toggle rule:', error);
    }
  }

  function resetForm() {
    setFormData({
      name: '',
      description: '',
      triggerType: 'HIRE_DATE',
      triggerDays: 30,
      actionType: 'SEND_SURVEY',
      actionConfig: {
        surveyType: 'ONBOARDING',
        dayMilestone: 30,
      },
    });
  }

  const templates = [
    {
      name: '30-Day Onboarding Survey',
      description: 'Automatically send satisfaction survey 30 days after hire date',
      triggerType: 'HIRE_DATE',
      triggerDays: 30,
      actionType: 'SEND_SURVEY',
      icon: '📋',
    },
    {
      name: 'Quarterly Check-In Reminders',
      description: 'Remind managers to schedule 1-on-1s every 90 days',
      triggerType: 'TIME_INTERVAL',
      triggerDays: 90,
      actionType: 'SCHEDULE_CHECKIN',
      icon: '👥',
    },
    {
      name: 'Annual Performance Review',
      description: 'Create performance review task on work anniversary',
      triggerType: 'ANNIVERSARY',
      triggerDays: 365,
      actionType: 'CREATE_REVIEW',
      icon: '⭐',
    },
    {
      name: 'New Hire Welcome',
      description: 'Send welcome email and create onboarding tasks on day 1',
      triggerType: 'HIRE_DATE',
      triggerDays: 0,
      actionType: 'SEND_NOTIFICATION',
      icon: '🎉',
    },
  ];

  return (
    <div className="min-h-screen lux-app-bg p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">HR Automation</h1>
            <p className="text-[#9E8F75]">Set up automated workflows to save time</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white font-semibold rounded-lg transition-all"
          >
            <Plus className="w-5 h-5" />
            Create Rule
          </button>
        </div>

        {/* Quick Start Templates */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Start Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setFormData({
                    name: template.name,
                    description: template.description,
                    triggerType: template.triggerType,
                    triggerDays: template.triggerDays,
                    actionType: template.actionType,
                    actionConfig: {
                      surveyType: 'ONBOARDING',
                      dayMilestone: template.triggerDays,
                    },
                  });
                  setShowModal(true);
                }}
                className="lux-card border border-[rgba(201,168,76,0.22)] rounded p-6 hover:border-[rgba(201,168,76,0.45)]/50 cursor-pointer transition-all"
              >
                <div className="text-4xl mb-3">{template.icon}</div>
                <h3 className="text-white font-bold mb-2">{template.name}</h3>
                <p className="text-[#9E8F75] text-sm">{template.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Rules */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Active Automation Rules</h2>
        </div>

        {/* Rules List */}
        <div className="space-y-4">
          {loading ? (
            <div className="bg-[rgba(201,168,76,0.06)]/50 backdrop-blur border border-[rgba(201,168,76,0.22)] rounded p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500/40 mx-auto mb-4"></div>
              <p className="text-[#9E8F75]">Loading automation rules...</p>
            </div>
          ) : rules.length === 0 ? (
            <div className="bg-[rgba(201,168,76,0.06)]/50 backdrop-blur border border-[rgba(201,168,76,0.22)] rounded p-12 text-center">
              <Zap className="w-16 h-16 text-[#9E8F75] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Automation Rules</h3>
              <p className="text-[#9E8F75] mb-6">Create your first automation to save time!</p>
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
              >
                Create Automation
              </button>
            </div>
          ) : (
            rules.map((rule) => (
              <div
                key={rule.id}
                className={`bg-[rgba(201,168,76,0.06)]/50 backdrop-blur border rounded p-6 transition-colors ${
                  rule.isActive ? 'border-amber-500/40/50' : 'border-[rgba(201,168,76,0.22)]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-3 rounded-lg ${
                      rule.isActive ? 'bg-amber-500/20' : 'bg-[rgba(201,168,76,0.06)]/50'
                    }`}>
                      <Zap className={`w-6 h-6 ${
                        rule.isActive ? 'text-amber-400' : 'text-[#9E8F75]'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{rule.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          rule.isActive 
                            ? 'bg-[#110F0B] 500/20 text-[#9E8F75] 400' 
                            : 'bg-[rgba(201,168,76,0.04)] text-[#9E8F75]'
                        }`}>
                          {rule.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      {rule.description && (
                        <p className="text-[#9E8F75] text-sm mb-3">{rule.description}</p>
                      )}
                      <div className="flex items-center gap-4 text-sm text-[#9E8F75]">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Trigger: {rule.triggerType.replace('_', ' ')}</span>
                        </div>
                        <span className="text-[#9E8F75]">→</span>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          <span>Action: {rule.actionType.replace('_', ' ')}</span>
                        </div>
                        <span className="text-[#9E8F75]">•</span>
                        <span>Ran {rule.runCount} times</span>
                      </div>
                      {rule.nextRun && (
                        <div className="mt-2 text-xs text-amber-400">
                          Next run: {new Date(rule.nextRun).toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleRule(rule.id, rule.isActive)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                      rule.isActive
                        ? 'bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-[#9E8F75]'
                        : 'bg-amber-600 hover:bg-amber-700 text-white'
                    }`}
                  >
                    <Power className="w-4 h-4" />
                    {rule.isActive ? 'Disable' : 'Enable'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Create Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Create Automation Rule</h2>

              <form onSubmit={handleCreateRule} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#9E8F75] mb-2">
                    Rule Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., 30-Day Onboarding Survey"
                    className="w-full px-4 py-3 bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded-lg text-white placeholder-stone-600 focus:outline-none focus:border-amber-500/40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#9E8F75] mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe what this automation does..."
                    rows={2}
                    className="w-full px-4 py-3 bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded-lg text-white placeholder-stone-600 focus:outline-none focus:border-amber-500/40"
                  />
                </div>

                <div className="p-4 bg-amber-500/10 border border-amber-500/40/30 rounded-lg">
                  <h4 className="text-sm font-semibold text-white mb-3">Trigger Configuration</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#9E8F75] mb-1">Trigger Type *</label>
                      <select
                        value={formData.triggerType}
                        onChange={(e) => setFormData({ ...formData, triggerType: e.target.value })}
                        className="w-full px-3 py-2 bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded text-white text-sm focus:outline-none focus:border-amber-500/40"
                      >
                        <option value="HIRE_DATE">Hire Date</option>
                        <option value="ANNIVERSARY">Work Anniversary</option>
                        <option value="TIME_INTERVAL">Time Interval</option>
                        <option value="CUSTOM_DATE">Custom Date</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-[#9E8F75] mb-1">Days After *</label>
                      <input
                        type="number"
                        value={formData.triggerDays}
                        onChange={(e) => setFormData({ ...formData, triggerDays: parseInt(e.target.value) })}
                        className="w-full px-3 py-2 bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded text-white text-sm focus:outline-none focus:border-amber-500/40"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-600/10 border border-amber-500/40/30 rounded-lg">
                  <h4 className="text-sm font-semibold text-white mb-3">Action Configuration</h4>
                  <div>
                    <label className="block text-xs text-[#9E8F75] mb-1">Action Type *</label>
                    <select
                      value={formData.actionType}
                      onChange={(e) => setFormData({ ...formData, actionType: e.target.value })}
                      className="w-full px-3 py-2 bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded text-white text-sm focus:outline-none focus:border-amber-500/40"
                    >
                      <option value="SEND_SURVEY">Send Survey</option>
                      <option value="CREATE_TASK">Create Task</option>
                      <option value="SCHEDULE_CHECKIN">Schedule Check-In</option>
                      <option value="SEND_NOTIFICATION">Send Notification</option>
                      <option value="CREATE_REVIEW">Create Performance Review</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                    className="flex-1 px-4 py-3 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white font-semibold rounded-lg transition-all"
                  >
                    Create Automation
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


