'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Users, TrendingUp, Award, Gift, Zap, Crown, Star, Trophy, Shield,
  Target, Clock, Search, Filter, Plus, Edit, Trash2, Download, Upload, Settings
} from 'lucide-react';

interface GuildMember {
  id: string;
  employeeId: string;
  employee: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  currentLevel: number;
  levelName: string;
  totalXP: number;
  currentXP: number;
  xpToNextLevel: number;
  rank: number;
  streak: number;
  badges: string[];
}

interface ActivityLog {
  id: string;
  employeeId: string;
  employee: {
    firstName: string;
    lastName: string;
  };
  amount: number;
  type: string;
  source: string;
  createdAt: string;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  rarity: string;
  xpReward: number;
  unlockCount: number;
}

interface SystemStats {
  totalMembers: number;
  totalXPAwarded: number;
  averageLevel: number;
  activeStreaks: number;
  achievementsUnlocked: number;
  rewardsPurchased: number;
}

export default function GuildAdminPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'achievements' | 'rewards' | 'activity'>('overview');
  const [members, setMembers] = useState<GuildMember[]>([]);
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [stats, setStats] = useState<SystemStats | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    setLoading(true);
    try {
      // Fetch all guild members
      const membersRes = await fetch('/api/guild/admin/members');
      const membersData = await membersRes.json();
      setMembers(membersData);

      // Fetch activity logs
      const activityRes = await fetch('/api/guild/admin/activity');
      const activityData = await activityRes.json();
      setActivityLogs(activityData);

      // Fetch achievement stats
      const achievementsRes = await fetch('/api/guild/admin/achievements');
      const achievementsData = await achievementsRes.json();
      setAchievements(achievementsData);

      // Calculate stats
      const totalXP = membersData.reduce((sum: number, m: GuildMember) => sum + m.totalXP, 0);
      const avgLevel = membersData.reduce((sum: number, m: GuildMember) => sum + m.currentLevel, 0) / membersData.length;
      const activeStreaks = membersData.filter((m: GuildMember) => m.streak > 0).length;
      const totalAchievements = achievementsData.reduce((sum: number, a: Achievement) => sum + a.unlockCount, 0);

      setStats({
        totalMembers: membersData.length,
        totalXPAwarded: totalXP,
        averageLevel: avgLevel,
        activeStreaks,
        achievementsUnlocked: totalAchievements,
        rewardsPurchased: 0 // TODO: fetch from rewards API
      });
    } catch (error) {
      console.error('Failed to fetch admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const grantXP = async (employeeId: string, amount: number, source: string) => {
    try {
      await fetch('/api/guild/admin/grant-xp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ employeeId, amount, source })
      });
      fetchAdminData();
    } catch (error) {
      console.error('Failed to grant XP:', error);
    }
  };

  const getLevelIcon = (levelName: string) => {
    if (levelName === 'Grandmaster') return <Crown className="w-5 h-5 text-yellow-400" />;
    if (levelName === 'Master') return <Star className="w-5 h-5 text-purple-400" />;
    if (levelName === 'Expert') return <Trophy className="w-5 h-5 text-blue-400" />;
    if (levelName === 'Journeyman') return <Shield className="w-5 h-5 text-green-400" />;
    if (levelName === 'Apprentice') return <Target className="w-5 h-5 text-orange-400" />;
    return <Zap className="w-5 h-5 text-slate-400" />;
  };

  const filteredMembers = members.filter(m => {
    const matchesSearch = `${m.employee.firstName} ${m.employee.lastName}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || m.levelName === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading Guild Admin...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Crown className="w-10 h-10 text-yellow-400" />
              Guild Administration
            </h1>
            <p className="text-slate-300">Manage gamification, XP, achievements, and rewards</p>
          </div>
          <Link
            href="/guild/admin/xp-config"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg transition-all"
          >
            <Settings className="w-5 h-5" />
            Configure XP Values
          </Link>
        </div>

        {/* Stats Dashboard */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-slate-400">Members</span>
              </div>
              <div className="text-3xl font-bold text-white">{stats.totalMembers}</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-slate-400">Total XP</span>
              </div>
              <div className="text-3xl font-bold text-yellow-400">{stats.totalXPAwarded.toLocaleString()}</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-sm text-slate-400">Avg Level</span>
              </div>
              <div className="text-3xl font-bold text-green-400">{stats.averageLevel.toFixed(1)}</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="text-sm text-slate-400">Active Streaks</span>
              </div>
              <div className="text-3xl font-bold text-orange-400">{stats.activeStreaks}</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-slate-400">Achievements</span>
              </div>
              <div className="text-3xl font-bold text-purple-400">{stats.achievementsUnlocked}</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-5 h-5 text-pink-400" />
                <span className="text-sm text-slate-400">Rewards</span>
              </div>
              <div className="text-3xl font-bold text-pink-400">{stats.rewardsPurchased}</div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview', icon: TrendingUp },
            { id: 'members', label: 'Members', icon: Users },
            { id: 'achievements', label: 'Achievements', icon: Award },
            { id: 'rewards', label: 'Rewards', icon: Gift },
            { id: 'activity', label: 'Activity Log', icon: Clock }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Top Performers</h2>
              <div className="space-y-3">
                {members.slice(0, 10).map((member, idx) => (
                  <div key={member.id} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        idx < 3 ? 'bg-gradient-to-r from-yellow-600 to-orange-600' : 'bg-slate-700'
                      } text-white`}>
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-white font-bold">{member.employee.firstName} {member.employee.lastName}</div>
                        <div className="flex items-center gap-2 text-sm">
                          {getLevelIcon(member.levelName)}
                          <span className="text-purple-400">{member.levelName}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-400">{member.totalXP.toLocaleString()}</div>
                      <div className="text-sm text-slate-400">XP</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
                <div className="space-y-2">
                  {activityLogs.slice(0, 5).map(log => (
                    <div key={log.id} className="flex items-center justify-between p-3 bg-slate-900/50 rounded">
                      <div>
                        <div className="text-white font-semibold">{log.employee.firstName} {log.employee.lastName}</div>
                        <div className="text-xs text-slate-400">{log.source}</div>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400 font-bold">
                        <Zap className="w-4 h-4" />
                        +{log.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Popular Achievements</h3>
                <div className="space-y-2">
                  {achievements.slice(0, 5).map(achievement => (
                    <div key={achievement.id} className="flex items-center justify-between p-3 bg-slate-900/50 rounded">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{achievement.icon}</span>
                        <div>
                          <div className="text-white font-semibold">{achievement.name}</div>
                          <div className="text-xs text-slate-400">{achievement.category}</div>
                        </div>
                      </div>
                      <div className="text-purple-400 font-bold">{achievement.unlockCount} unlocks</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Members Tab */}
        {activeTab === 'members' && (
          <div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                  />
                </div>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                >
                  <option value="all">All Levels</option>
                  <option value="Novice">Novice</option>
                  <option value="Apprentice">Apprentice</option>
                  <option value="Journeyman">Journeyman</option>
                  <option value="Expert">Expert</option>
                  <option value="Master">Master</option>
                  <option value="Grandmaster">Grandmaster</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {filteredMembers.map(member => (
                <div key={member.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {member.employee.firstName[0]}{member.employee.lastName[0]}
                        </span>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white">{member.employee.firstName} {member.employee.lastName}</div>
                        <div className="text-sm text-slate-400">{member.employee.email}</div>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center gap-1">
                            {getLevelIcon(member.levelName)}
                            <span className="text-purple-400 font-semibold">{member.levelName}</span>
                          </div>
                          <span className="text-slate-400">•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-orange-400" />
                            <span className="text-orange-400 font-semibold">{member.streak} day streak</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-3xl font-bold text-yellow-400">{member.totalXP.toLocaleString()}</div>
                        <div className="text-sm text-slate-400">Total XP</div>
                      </div>
                      <button
                        onClick={() => {
                          const amount = prompt('Enter XP amount to grant:');
                          const source = prompt('Enter source/reason:');
                          if (amount && source) {
                            grantXP(member.employeeId, parseInt(amount), source);
                          }
                        }}
                        className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-lg transition-all"
                      >
                        Grant XP
                      </button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-slate-400 mb-1">
                      <span>Progress to Next Level</span>
                      <span>{member.currentXP} / {member.xpToNextLevel} XP</span>
                    </div>
                    <div className="w-full bg-slate-900/50 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all"
                        style={{ width: `${(member.currentXP / member.xpToNextLevel) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Activity Log Tab */}
        {activeTab === 'activity' && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Activity Log</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
            <div className="space-y-2">
              {activityLogs.map(log => (
                <div key={log.id} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">{log.employee.firstName} {log.employee.lastName}</div>
                      <div className="text-sm text-slate-400">{log.source} • {log.type}</div>
                      <div className="text-xs text-slate-500">{new Date(log.createdAt).toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xl font-bold text-yellow-400">
                    <Zap className="w-5 h-5" />
                    +{log.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Manage Achievements</h2>
              <button className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg transition-all">
                <Plus className="w-5 h-5" />
                Create Achievement
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map(achievement => (
                <div key={achievement.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-2">{achievement.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-1">{achievement.name}</h3>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      achievement.rarity === 'LEGENDARY' ? 'bg-yellow-600' :
                      achievement.rarity === 'EPIC' ? 'bg-purple-600' :
                      achievement.rarity === 'RARE' ? 'bg-blue-600' :
                      achievement.rarity === 'UNCOMMON' ? 'bg-green-600' :
                      'bg-slate-600'
                    } text-white`}>
                      {achievement.rarity}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mb-4 text-center">{achievement.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-yellow-400">
                      <Zap className="w-4 h-4" />
                      <span className="font-bold">+{achievement.xpReward} XP</span>
                    </div>
                    <div className="text-purple-400 font-bold">{achievement.unlockCount} unlocks</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all flex items-center justify-center gap-2">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rewards Tab */}
        {activeTab === 'rewards' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Manage Rewards</h2>
              <button className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg transition-all">
                <Plus className="w-5 h-5" />
                Add Reward
              </button>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <p className="text-slate-300 text-center py-12">
                Reward management interface coming soon. You'll be able to create, edit, and manage XP-based rewards here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
