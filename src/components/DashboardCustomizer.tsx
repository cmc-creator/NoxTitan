'use client';

import { useState } from 'react';
import { Settings, Sparkles, X, Plus, Eye, EyeOff, Move, CheckCircle } from 'lucide-react';

interface DashboardCustomizerProps {
  onClose: () => void;
  userType: 'employee' | 'manager';
}

export default function DashboardCustomizer({ onClose, userType }: DashboardCustomizerProps) {
  const [activeTab, setActiveTab] = useState<'layout' | 'suggestions'>('layout');

  const availableTiles = {
    employee: [
      { id: 'clock-status', name: 'Clock-In Status', icon: '⏰', category: 'Essential', enabled: true },
      { id: 'schedule', name: 'My Schedule', icon: '📅', category: 'Essential', enabled: true },
      { id: 'schedule-changes', name: 'Schedule Changes', icon: '🔔', category: 'Essential', enabled: true },
      { id: 'coworkers', name: 'Today\'s Coworkers', icon: '👥', category: 'Essential', enabled: true },
      { id: 'personal-calendar', name: 'Personal Calendar', icon: '📆', category: 'Personal', enabled: true },
      { id: 'team-messages', name: 'Team Messages', icon: '💬', category: 'Communication', enabled: true },
      { id: 'titan-chat', name: 'Titan Assistant', icon: '🤖', category: 'AI', enabled: true },
      { id: 'kudos', name: 'Kudos Wall', icon: '🏆', category: 'Recognition', enabled: true },
      { id: 'goals', name: 'My Goals', icon: '🎯', category: 'Personal', enabled: false },
      { id: 'certifications', name: 'My Certifications', icon: '📜', category: 'Professional', enabled: false },
      { id: 'paystubs', name: 'Pay Stubs', icon: '💰', category: 'Financial', enabled: false },
      { id: 'benefits', name: 'Benefits Summary', icon: '🛡️', category: 'Professional', enabled: false },
      { id: 'wellness', name: 'Wellness Tracker', icon: '💚', category: 'Wellness', enabled: false },
      { id: 'pto-balance', name: 'PTO Balance', icon: '🏖️', category: 'Financial', enabled: false },
      { id: 'shift-reports', name: 'Shift Reports', icon: '📋', category: 'Professional', enabled: false },
    ],
    manager: [
      { id: 'financial-fte', name: 'FTE Tracking', icon: '💼', category: 'Financial', enabled: true },
      { id: 'financial-labor', name: 'Labor Costs', icon: '💵', category: 'Financial', enabled: true },
      { id: 'staff-status', name: 'Staff On Duty', icon: '👥', category: 'Operations', enabled: true },
      { id: 'shift-handoff', name: 'Shift Reports', icon: '📋', category: 'Operations', enabled: true },
      { id: 'oracle-predictions', name: 'Oracle Predictions', icon: '🔮', category: 'AI', enabled: true },
      { id: 'incidents', name: 'Recent Incidents', icon: '⚠️', category: 'Safety', enabled: true },
      { id: 'patient-satisfaction', name: 'Patient Satisfaction', icon: '📊', category: 'Quality', enabled: true },
      { id: 'grievances', name: 'Grievances & Complaints', icon: '🚨', category: 'HR', enabled: true },
      { id: 'guild-leaderboard', name: 'Guild Leaderboard', icon: '🏆', category: 'Recognition', enabled: true },
      { id: 'oryx-reporting', name: 'ORYX Reporting', icon: '📈', category: 'Compliance', enabled: true },
      { id: 'approvals', name: 'Pending Approvals', icon: '✅', category: 'Operations', enabled: false },
      { id: 'hiring', name: 'Hiring Pipeline', icon: '🎯', category: 'HR', enabled: false },
      { id: 'equipment', name: 'Equipment Status', icon: '📦', category: 'Operations', enabled: false },
      { id: 'team-morale', name: 'Team Morale', icon: '👍', category: 'Culture', enabled: false },
      { id: 'compliance-alerts', name: 'Compliance Alerts', icon: '🔔', category: 'Compliance', enabled: false },
      { id: 'budget-variance', name: 'Budget Variance', icon: '📉', category: 'Financial', enabled: false },
    ]
  };

  const aiSuggestions = {
    employee: [
      { tile: 'certifications', reason: 'You have 2 certifications expiring in the next 60 days', priority: 'high' },
      { tile: 'wellness', reason: 'Based on your recent mood check-ins, tracking wellness might help', priority: 'medium' },
      { tile: 'pto-balance', reason: 'You haven\'t checked your PTO balance in 30 days', priority: 'low' },
    ],
    manager: [
      { tile: 'compliance-alerts', reason: 'You have 3 pending compliance issues requiring attention', priority: 'high' },
      { tile: 'budget-variance', reason: 'Labor costs are trending 8% over budget this month', priority: 'high' },
      { tile: 'team-morale', reason: '5 team members reported feeling stressed this week', priority: 'medium' },
    ]
  };

  const [tiles, setTiles] = useState(availableTiles[userType]);

  const toggleTile = (tileId: string) => {
    setTiles(tiles.map(tile => 
      tile.id === tileId ? { ...tile, enabled: !tile.enabled } : tile
    ));
  };

  const enableSuggestion = (tileId: string) => {
    setTiles(tiles.map(tile => 
      tile.id === tileId ? { ...tile, enabled: true } : tile
    ));
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 max-w-6xl w-full border-2 border-purple-500/30 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Settings className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-white">Customize Your Dashboard</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-all"
          >
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab('layout')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'layout'
                ? 'bg-purple-500 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Layout & Tiles
          </button>
          <button
            onClick={() => setActiveTab('suggestions')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'suggestions'
                ? 'bg-purple-500 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            AI Suggestions
          </button>
        </div>

        {/* Layout Tab */}
        {activeTab === 'layout' && (
          <div>
            <div className="mb-6 p-4 bg-purple-500/10 border border-purple-400/30 rounded-lg">
              <p className="text-purple-200 text-sm">
                🎨 Drag and drop tiles to rearrange, or toggle visibility. Your layout is saved automatically.
              </p>
            </div>

            {/* Group by Category */}
            {Array.from(new Set(tiles.map(t => t.category))).map(category => (
              <div key={category} className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {tiles.filter(t => t.category === category).map(tile => (
                    <div
                      key={tile.id}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        tile.enabled
                          ? 'bg-slate-700/50 border-purple-500/30'
                          : 'bg-slate-800/30 border-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{tile.icon}</div>
                          <span className="font-semibold text-white">{tile.name}</span>
                        </div>
                        <button
                          onClick={() => toggleTile(tile.id)}
                          className={`p-2 rounded-lg transition-all ${
                            tile.enabled
                              ? 'bg-green-500/20 hover:bg-green-500/30'
                              : 'bg-slate-600 hover:bg-slate-500'
                          }`}
                        >
                          {tile.enabled ? (
                            <Eye className="w-4 h-4 text-green-300" />
                          ) : (
                            <EyeOff className="w-4 h-4 text-slate-400" />
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-slate-400">
                        {tile.enabled ? 'Visible' : 'Hidden'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AI Suggestions Tab */}
        {activeTab === 'suggestions' && (
          <div>
            <div className="mb-6 p-4 bg-cyan-500/10 border border-cyan-400/30 rounded-lg">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-cyan-200 font-semibold mb-1">AI-Powered Recommendations</p>
                  <p className="text-cyan-300 text-sm">
                    Based on your usage patterns and current needs, we suggest adding these tiles to your dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {aiSuggestions[userType].map((suggestion, idx) => {
                const tile = tiles.find(t => t.id === suggestion.tile);
                if (!tile || tile.enabled) return null;

                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-xl border-2 ${
                      suggestion.priority === 'high'
                        ? 'bg-red-500/10 border-red-400/30'
                        : suggestion.priority === 'medium'
                        ? 'bg-yellow-500/10 border-yellow-400/30'
                        : 'bg-blue-500/10 border-blue-400/30'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="text-4xl">{tile.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-xl font-bold text-white">{tile.name}</h4>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                              suggestion.priority === 'high'
                                ? 'bg-red-500/30 text-red-200'
                                : suggestion.priority === 'medium'
                                ? 'bg-yellow-500/30 text-yellow-200'
                                : 'bg-blue-500/30 text-blue-200'
                            }`}>
                              {suggestion.priority.toUpperCase()} PRIORITY
                            </span>
                          </div>
                          <p className="text-slate-300 mb-3">{suggestion.reason}</p>
                          <button
                            onClick={() => enableSuggestion(tile.id)}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg font-semibold text-white transition-all flex items-center gap-2"
                          >
                            <Plus className="w-4 h-4" />
                            Add to Dashboard
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {aiSuggestions[userType].every(s => {
                const tile = tiles.find(t => t.id === s.tile);
                return !tile || tile.enabled;
              }) && (
                <div className="p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <p className="text-xl font-bold text-white mb-2">You're all set!</p>
                  <p className="text-slate-300">No new suggestions at this time. We'll notify you when we have more recommendations.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* HIPAA & Legal Compliance */}
        <div className="mt-6 p-4 bg-red-500/10 border border-red-400/30 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="text-red-400 text-xl">⚠️</div>
            <div>
              <p className="text-red-300 font-semibold mb-1">Privacy & Compliance</p>
              <p className="text-red-200 text-sm">
                All customizations must comply with HIPAA regulations, state laws, and federal guidelines. 
                Patient health information (PHI) must never be shared in customizable fields. 
                The system automatically prevents violations of privacy and security policies.
              </p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg font-bold text-white transition-all"
          >
            Save Customizations
          </button>
        </div>
      </div>
    </div>
  );
}
