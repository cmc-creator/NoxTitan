'use client';

import { useState } from 'react';
import { DollarSign, Clock, Users, TrendingUp, Zap, Gift, Trophy, Plus, AlertCircle, CheckCircle } from 'lucide-react';

interface IncentiveShift {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  department: string;
  bonus: number;
  bonusType: 'flat' | 'hourly';
  urgency: 'high' | 'medium' | 'low';
  reason: string;
  postedBy: string;
  postedTime: string;
  claimedBy?: string;
  claimedTime?: string;
  viewCount: number;
  interestedCount: number;
  status: 'available' | 'claimed' | 'expired';
}

export default function IncentivesPage() {
  const [activeTab, setActiveTab] = useState<'available' | 'claimed' | 'create' | 'leaderboard'>('available');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const incentiveShifts: IncentiveShift[] = [
    {
      id: '1',
      title: 'Server - Dinner Rush',
      date: 'Today',
      time: '5:00 PM - 11:00 PM',
      duration: '6 hours',
      department: 'Service',
      bonus: 50,
      bonusType: 'flat',
      urgency: 'high',
      reason: 'Employee called in sick - need immediate coverage!',
      postedBy: 'Mike Johnson',
      postedTime: '15 minutes ago',
      viewCount: 12,
      interestedCount: 5,
      status: 'available',
    },
    {
      id: '2',
      title: 'Kitchen Prep',
      date: 'Tomorrow',
      time: '6:00 AM - 2:00 PM',
      duration: '8 hours',
      department: 'Kitchen',
      bonus: 15,
      bonusType: 'hourly',
      urgency: 'medium',
      reason: 'Large catering order - need extra hands',
      postedBy: 'Rachel Green',
      postedTime: '1 hour ago',
      viewCount: 8,
      interestedCount: 3,
      status: 'available',
    },
    {
      id: '3',
      title: 'Bartender - Weekend Night',
      date: 'Saturday',
      time: '8:00 PM - 2:00 AM',
      duration: '6 hours',
      department: 'Bar',
      bonus: 75,
      bonusType: 'flat',
      urgency: 'high',
      reason: 'Expected busy night - double coverage needed',
      postedBy: 'Mike Johnson',
      postedTime: '2 hours ago',
      viewCount: 18,
      interestedCount: 8,
      status: 'available',
    },
    {
      id: '4',
      title: 'Host/Hostess',
      date: 'Friday',
      time: '11:00 AM - 3:00 PM',
      duration: '4 hours',
      department: 'Service',
      bonus: 30,
      bonusType: 'flat',
      urgency: 'low',
      reason: 'Weekend lunch rush backup',
      postedBy: 'Sarah Miller',
      postedTime: '3 hours ago',
      viewCount: 6,
      interestedCount: 2,
      status: 'available',
    },
    {
      id: '5',
      title: 'Closing Manager',
      date: 'Today',
      time: '3:00 PM - 11:00 PM',
      duration: '8 hours',
      department: 'Management',
      bonus: 100,
      bonusType: 'flat',
      urgency: 'high',
      reason: 'Manager emergency - immediate coverage needed!',
      postedBy: 'Mike Johnson',
      postedTime: '30 minutes ago',
      claimedBy: 'Alex Thompson',
      claimedTime: '5 minutes ago',
      viewCount: 15,
      interestedCount: 7,
      status: 'claimed',
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Miller', avatar: '👩', bonusEarned: 425, shiftsPickedUp: 12, badge: '🏆' },
    { rank: 2, name: 'Alex Thompson', avatar: '👨', bonusEarned: 380, shiftsPickedUp: 10, badge: '🥈' },
    { rank: 3, name: 'Emma Wilson', avatar: '👩', bonusEarned: 340, shiftsPickedUp: 9, badge: '🥉' },
    { rank: 4, name: 'John Davis', avatar: '👨', bonusEarned: 295, shiftsPickedUp: 8, badge: '⭐' },
    { rank: 5, name: 'David Lee', avatar: '👨', bonusEarned: 250, shiftsPickedUp: 7, badge: '⭐' },
  ];

  const availableShifts = incentiveShifts.filter(s => s.status === 'available');
  const claimedShifts = incentiveShifts.filter(s => s.status === 'claimed');

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--page-bg)', color: 'var(--body-text)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3" style={{ color: 'var(--header-text)' }}>
            <Zap className="h-10 w-10 text-yellow-500" />
            Bonus Shifts
          </h1>
          <p className="text-lg opacity-80">
            Pick up incentive shifts and earn extra cash! ⚡💰
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Available Now</div>
              <Zap className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold" style={{ color: 'var(--header-text)' }}>{availableShifts.length}</div>
            <div className="text-xs text-yellow-500">Grab them fast!</div>
          </div>

          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Total Bonuses</div>
              <DollarSign className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold" style={{ color: 'var(--header-text)' }}>
              ${availableShifts.reduce((sum, s) => sum + s.bonus * (s.bonusType === 'hourly' ? parseInt(s.duration) : 1), 0)}
            </div>
            <div className="text-xs text-green-500">Up for grabs</div>
          </div>

          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Your Earnings</div>
              <Trophy className="h-5 w-5 text-purple-500" />
            </div>
            <div className="text-3xl font-bold" style={{ color: 'var(--header-text)' }}>$425</div>
            <div className="text-xs text-purple-500">This month</div>
          </div>

          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Your Rank</div>
              <TrendingUp className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-3xl font-bold" style={{ color: 'var(--header-text)' }}>#1 🏆</div>
            <div className="text-xs text-blue-500">Top performer!</div>
          </div>
        </div>

        {/* Create Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-lg hover:scale-105 transition-all"
            style={{ background: 'var(--primary-btn)' }}
          >
            <Plus className="h-5 w-5" />
            Post Bonus Shift
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('available')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'available' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'available' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'available' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Zap className="h-5 w-5" />
            Available ({availableShifts.length})
          </button>
          <button
            onClick={() => setActiveTab('claimed')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'claimed' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'claimed' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'claimed' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <CheckCircle className="h-5 w-5" />
            Claimed
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'leaderboard' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'leaderboard' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'leaderboard' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Trophy className="h-5 w-5" />
            Leaderboard
          </button>
        </div>

        {/* Content */}
        {activeTab === 'available' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {availableShifts.map((shift) => (
              <div
                key={shift.id}
                className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-l-4 relative overflow-hidden"
                style={{
                  background: 'var(--card-bg)',
                  borderLeftColor: shift.urgency === 'high' ? '#ef4444' : shift.urgency === 'medium' ? '#f59e0b' : '#10b981',
                }}
              >
                {/* Urgency Badge */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 ${
                      shift.urgency === 'high' ? 'bg-red-500 animate-pulse' :
                      shift.urgency === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                  >
                    <Zap className="h-3 w-3" />
                    {shift.urgency.toUpperCase()}
                  </div>
                </div>

                {/* Bonus Amount - Big and Bold */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <div className="text-5xl font-black text-green-500">
                      ${shift.bonus}
                    </div>
                    <div className="text-lg font-semibold opacity-70">
                      {shift.bonusType === 'hourly' ? '/hour' : 'bonus'}
                    </div>
                  </div>
                  {shift.bonusType === 'hourly' && (
                    <div className="text-sm opacity-60">
                      Total: ${shift.bonus * parseInt(shift.duration)} for {shift.duration}
                    </div>
                  )}
                </div>

                {/* Shift Details */}
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
                  {shift.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span className="font-semibold">{shift.date}</span>
                    <span className="opacity-70">{shift.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4" />
                    <span>{shift.department}</span>
                    <span className="opacity-70">• {shift.duration}</span>
                  </div>
                </div>

                {/* Reason */}
                <div className="mb-4 p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-yellow-500" />
                    <div className="text-sm">{shift.reason}</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm opacity-70">
                  <span>👀 {shift.viewCount} views</span>
                  <span>⚡ {shift.interestedCount} interested</span>
                  <span className="ml-auto">{shift.postedTime}</span>
                </div>

                {/* Claim Button */}
                <button
                  className="w-full py-3 px-6 rounded-xl font-bold text-white text-lg shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                  style={{ background: 'var(--primary-btn)' }}
                >
                  <Zap className="h-5 w-5" />
                  Claim This Shift
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'claimed' && (
          <div className="space-y-4">
            {claimedShifts.map((shift) => (
              <div
                key={shift.id}
                className="p-6 rounded-xl shadow-lg"
                style={{ background: 'var(--card-bg)' }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold" style={{ color: 'var(--header-text)' }}>
                        {shift.title}
                      </h3>
                      <div className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
                        ✓ CLAIMED
                      </div>
                    </div>
                    <div className="space-y-1 text-sm opacity-70 mb-3">
                      <div>{shift.date} • {shift.time}</div>
                      <div>{shift.department} • {shift.duration}</div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-3xl">👤</div>
                      <div>
                        <div className="font-semibold" style={{ color: 'var(--header-text)' }}>
                          Claimed by: {shift.claimedBy}
                        </div>
                        <div className="text-xs opacity-60">{shift.claimedTime}</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-green-500 mb-1">
                      ${shift.bonus}
                    </div>
                    <div className="text-xs opacity-60">{shift.bonusType === 'hourly' ? 'per hour' : 'bonus'}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top 3 Podium */}
            <div className="lg:col-span-2 p-8 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
              <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--header-text)' }}>
                🏆 Top Performers This Month 🏆
              </h2>
              <div className="flex items-end justify-center gap-8">
                {/* 2nd Place */}
                <div className="text-center">
                  <div className="text-6xl mb-2">{leaderboard[1].avatar}</div>
                  <div className="text-5xl mb-2">🥈</div>
                  <div className="font-bold text-lg" style={{ color: 'var(--header-text)' }}>{leaderboard[1].name}</div>
                  <div className="text-3xl font-black text-green-500 mt-2">${leaderboard[1].bonusEarned}</div>
                  <div className="text-sm opacity-60">{leaderboard[1].shiftsPickedUp} shifts</div>
                </div>

                {/* 1st Place */}
                <div className="text-center -mt-8">
                  <div className="text-7xl mb-2">{leaderboard[0].avatar}</div>
                  <div className="text-6xl mb-2">🏆</div>
                  <div className="font-bold text-xl" style={{ color: 'var(--header-text)' }}>{leaderboard[0].name}</div>
                  <div className="text-4xl font-black text-yellow-500 mt-2">${leaderboard[0].bonusEarned}</div>
                  <div className="text-sm opacity-60">{leaderboard[0].shiftsPickedUp} shifts</div>
                </div>

                {/* 3rd Place */}
                <div className="text-center">
                  <div className="text-6xl mb-2">{leaderboard[2].avatar}</div>
                  <div className="text-5xl mb-2">🥉</div>
                  <div className="font-bold text-lg" style={{ color: 'var(--header-text)' }}>{leaderboard[2].name}</div>
                  <div className="text-3xl font-black text-orange-500 mt-2">${leaderboard[2].bonusEarned}</div>
                  <div className="text-sm opacity-60">{leaderboard[2].shiftsPickedUp} shifts</div>
                </div>
              </div>
            </div>

            {/* Full Leaderboard */}
            <div className="lg:col-span-2 p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
                Complete Leaderboard
              </h3>
              <div className="space-y-3">
                {leaderboard.map((person) => (
                  <div
                    key={person.rank}
                    className="p-4 rounded-xl flex items-center gap-4 hover:scale-102 transition-all"
                    style={{ background: 'var(--calendar-bg)' }}
                  >
                    <div className="text-2xl font-bold w-8">{person.badge}</div>
                    <div className="text-4xl">{person.avatar}</div>
                    <div className="flex-1">
                      <div className="font-bold text-lg" style={{ color: 'var(--header-text)' }}>
                        {person.name}
                      </div>
                      <div className="text-sm opacity-60">{person.shiftsPickedUp} bonus shifts claimed</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-green-500">${person.bonusEarned}</div>
                      <div className="text-xs opacity-60">Total earned</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Create Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-3xl rounded-2xl shadow-2xl" style={{ background: 'var(--card-bg)' }}>
              <div className="p-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--header-text)' }}>
                    Post Bonus Shift
                  </h2>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="text-3xl hover:opacity-70 transition-all"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Shift Title</label>
                    <input
                      type="text"
                      placeholder="e.g., Server - Dinner Rush"
                      className="w-full p-3 rounded-lg"
                      style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Department</label>
                    <select className="w-full p-3 rounded-lg" style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}>
                      <option>Service</option>
                      <option>Kitchen</option>
                      <option>Bar</option>
                      <option>Management</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Date</label>
                    <input
                      type="date"
                      className="w-full p-3 rounded-lg"
                      style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Time</label>
                    <input
                      type="text"
                      placeholder="e.g., 5:00 PM - 11:00 PM"
                      className="w-full p-3 rounded-lg"
                      style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Bonus Amount ($)</label>
                    <input
                      type="number"
                      placeholder="50"
                      className="w-full p-3 rounded-lg"
                      style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Bonus Type</label>
                    <select className="w-full p-3 rounded-lg" style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}>
                      <option value="flat">Flat Bonus</option>
                      <option value="hourly">Per Hour</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Urgency Level</label>
                  <div className="flex gap-3">
                    <button className="flex-1 p-3 rounded-lg border-2 border-green-500 bg-green-500/20 font-semibold">
                      🟢 Low
                    </button>
                    <button className="flex-1 p-3 rounded-lg border-2 border-yellow-500 bg-yellow-500/20 font-semibold">
                      🟡 Medium
                    </button>
                    <button className="flex-1 p-3 rounded-lg border-2 border-red-500 bg-red-500/20 font-semibold">
                      🔴 High
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Reason for Bonus</label>
                  <textarea
                    rows={3}
                    placeholder="Explain why this shift needs immediate coverage..."
                    className="w-full p-3 rounded-lg"
                    style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}
                  ></textarea>
                </div>
              </div>
              <div className="p-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <button
                  className="w-full py-3 px-6 rounded-xl font-bold text-white text-lg shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                  style={{ background: 'var(--primary-btn)' }}
                >
                  <Zap className="h-5 w-5" />
                  Post Bonus Shift
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
