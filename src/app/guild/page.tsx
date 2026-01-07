'use client';

import { useState, useEffect } from 'react';
import { Trophy, Zap, Gift, Award, Target, TrendingUp, Star, Crown, Shield, Flame, Users, Clock } from 'lucide-react';

interface GuildMember {
  id: string;
  employee: {
    firstName: string;
    lastName: string;
  };
  currentLevel: number;
  levelName: string;
  totalXP: number;
  currentXP: number;
  xpToNextLevel: number;
  rank?: number;
  streak: number;
  badges: string[];
}

interface XPActivity {
  id: string;
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
  unlocked?: boolean;
  unlockedAt?: string;
}

interface Reward {
  id: string;
  name: string;
  description: string;
  category: string;
  xpCost: number;
  stockQuantity?: number;
  imageUrl?: string;
}

interface Leaderboard {
  rank: number;
  employee: {
    firstName: string;
    lastName: string;
  };
  levelName: string;
  totalXP: number;
}

export default function GuildPage() {
  const [profile, setProfile] = useState<GuildMember | null>(null);
  const [recentActivity, setRecentActivity] = useState<XPActivity[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [leaderboard, setLeaderboard] = useState<Leaderboard[]>([]);
  const [activeTab, setActiveTab] = useState<'profile' | 'shop' | 'achievements' | 'leaderboard'>('profile');
  const [selectedEmployee, setSelectedEmployee] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGuildData();
  }, [selectedEmployee]);

  async function fetchGuildData() {
    try {
      const params = selectedEmployee ? `?employeeId=${selectedEmployee}` : '';
      const [profileRes, activityRes, achievementsRes, rewardsRes, leaderboardRes] = await Promise.all([
        fetch(`/api/guild/profile${params}`),
        fetch(`/api/guild/activity${params}`),
        fetch('/api/guild/achievements'),
        fetch('/api/guild/rewards'),
        fetch('/api/guild/leaderboard'),
      ]);

      if (profileRes.ok) setProfile(await profileRes.json());
      if (activityRes.ok) setRecentActivity(await activityRes.json());
      if (achievementsRes.ok) setAchievements(await achievementsRes.json());
      if (rewardsRes.ok) setRewards(await rewardsRes.json());
      if (leaderboardRes.ok) setLeaderboard(await leaderboardRes.json());
    } catch (error) {
      console.error('Failed to fetch guild data:', error);
    } finally {
      setLoading(false);
    }
  }

  async function purchaseReward(rewardId: string) {
    try {
      const response = await fetch('/api/guild/rewards/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rewardId, employeeId: selectedEmployee }),
      });

      if (response.ok) {
        alert('🎉 Reward purchased successfully!');
        fetchGuildData();
      } else {
        const error = await response.json();
        alert(`Failed to purchase: ${error.error}`);
      }
    } catch (error) {
      console.error('Purchase failed:', error);
    }
  }

  function getLevelIcon(levelName: string) {
    switch (levelName) {
      case 'Grandmaster': return <Crown className="w-6 h-6 text-yellow-400" />;
      case 'Master': return <Star className="w-6 h-6 text-purple-400" />;
      case 'Expert': return <Trophy className="w-6 h-6 text-blue-400" />;
      case 'Journeyman': return <Shield className="w-6 h-6 text-green-400" />;
      case 'Apprentice': return <Target className="w-6 h-6 text-orange-400" />;
      default: return <Zap className="w-6 h-6 text-slate-400" />;
    }
  }

  function getRarityColor(rarity: string) {
    switch (rarity) {
      case 'LEGENDARY': return 'from-yellow-600 to-orange-600 border-yellow-500';
      case 'EPIC': return 'from-purple-600 to-pink-600 border-purple-500';
      case 'RARE': return 'from-blue-600 to-cyan-600 border-blue-500';
      case 'UNCOMMON': return 'from-green-600 to-emerald-600 border-green-500';
      default: return 'from-slate-600 to-slate-700 border-slate-500';
    }
  }

  function getXPTypeIcon(type: string) {
    if (type.includes('CLOCK_IN')) return <Clock className="w-4 h-4" />;
    if (type.includes('TRAINING')) return <Award className="w-4 h-4" />;
    if (type.includes('SHIFT')) return <Users className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Epic Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-6">
            <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-50 animate-pulse"></div>
            <Trophy className="w-20 h-20 text-yellow-300 relative animate-bounce" />
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 mb-4">
            The Guild
          </h1>
          <p className="text-xl text-purple-200 mb-6">Gamified Learning & Culture • Level Up Your Career</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {[
            { id: 'profile', label: 'Profile', icon: Trophy },
            { id: 'shop', label: 'Reward Shop', icon: Gift },
            { id: 'achievements', label: 'Achievements', icon: Award },
            { id: 'leaderboard', label: 'Leaderboard', icon: TrendingUp },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-105'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && profile && (
          <div className="space-y-6">
            {/* Level Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-purple-500/50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
                    {getLevelIcon(profile.levelName)}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1">
                      {profile.employee.firstName} {profile.employee.lastName}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-purple-400">{profile.levelName}</span>
                      <span className="text-slate-400">• Level {profile.currentLevel}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-yellow-400">{profile.totalXP.toLocaleString()}</div>
                  <div className="text-sm text-slate-400">Total XP</div>
                </div>
              </div>

              {/* XP Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>{profile.currentXP} XP</span>
                  <span>{profile.xpToNextLevel} XP to Level {profile.currentLevel + 1}</span>
                </div>
                <div className="h-6 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 transition-all duration-500 flex items-center justify-center"
                    style={{ width: `${(profile.currentXP / profile.xpToNextLevel) * 100}%` }}
                  >
                    <span className="text-xs font-bold text-white">
                      {Math.round((profile.currentXP / profile.xpToNextLevel) * 100)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-700/50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <span className="text-2xl font-bold text-white">{profile.streak}</span>
                  </div>
                  <div className="text-sm text-slate-400">Day Streak</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <span className="text-2xl font-bold text-white">#{profile.rank || '-'}</span>
                  </div>
                  <div className="text-sm text-slate-400">Rank</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="text-2xl font-bold text-white">{profile.badges.length}</span>
                  </div>
                  <div className="text-sm text-slate-400">Badges</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                Recent XP Activity
              </h3>
              <div className="space-y-3">
                {recentActivity.slice(0, 10).map(activity => (
                  <div key={activity.id} className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-600/20 rounded-lg text-purple-400">
                        {getXPTypeIcon(activity.type)}
                      </div>
                      <div>
                        <div className="text-white font-medium">{activity.source}</div>
                        <div className="text-xs text-slate-400">
                          {new Date(activity.createdAt).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className={`text-xl font-bold ${activity.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {activity.amount > 0 ? '+' : ''}{activity.amount} XP
                    </div>
                  </div>
                ))}
                {recentActivity.length === 0 && (
                  <div className="text-center py-8 text-slate-400">
                    No activity yet. Start earning XP!
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Reward Shop Tab */}
        {activeTab === 'shop' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Gift className="w-8 h-8 text-pink-400" />
                Reward Shop
              </h2>
              {profile && (
                <div className="text-right">
                  <div className="text-3xl font-bold text-yellow-400">{profile.totalXP.toLocaleString()}</div>
                  <div className="text-sm text-slate-400">Available XP</div>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rewards.map(reward => (
                <div key={reward.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                  <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mb-4 flex items-center justify-center">
                    <Gift className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{reward.name}</h3>
                  <p className="text-sm text-slate-400 mb-4">{reward.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="text-2xl font-bold text-yellow-400">{reward.xpCost}</span>
                    </div>
                    {reward.stockQuantity !== null && (
                      <span className="text-sm text-slate-400">{reward.stockQuantity} left</span>
                    )}
                  </div>
                  <button
                    onClick={() => purchaseReward(reward.id)}
                    disabled={!profile || profile.totalXP < reward.xpCost}
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Purchase
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-400" />
              Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map(achievement => (
                <div
                  key={achievement.id}
                  className={`rounded-xl p-6 border-2 ${
                    achievement.unlocked
                      ? `bg-gradient-to-br ${getRarityColor(achievement.rarity)}`
                      : 'bg-slate-800/30 border-slate-700 grayscale opacity-50'
                  }`}
                >
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-2">{achievement.icon}</div>
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
                  <p className="text-sm text-white/90 mb-4 text-center">{achievement.description}</p>
                  <div className="flex items-center justify-center gap-2 text-yellow-400">
                    <Zap className="w-4 h-4" />
                    <span className="font-bold">+{achievement.xpReward} XP</span>
                  </div>
                  {achievement.unlocked && achievement.unlockedAt && (
                    <div className="text-xs text-white/70 text-center mt-3">
                      Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-400" />
              Guild Leaderboard
            </h2>
            <div className="space-y-3">
              {leaderboard.map((entry, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-6 rounded-xl ${
                    idx < 3
                      ? 'bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-2 border-yellow-500/50'
                      : 'bg-slate-800/50 border border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl ${
                      idx === 0 ? 'bg-yellow-600 text-white' :
                      idx === 1 ? 'bg-slate-400 text-white' :
                      idx === 2 ? 'bg-orange-600 text-white' :
                      'bg-slate-700 text-slate-300'
                    }`}>
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">
                        {entry.employee.firstName} {entry.employee.lastName}
                      </div>
                      <div className="flex items-center gap-2">
                        {getLevelIcon(entry.levelName)}
                        <span className="text-purple-400 font-semibold">{entry.levelName}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-yellow-400">{entry.totalXP.toLocaleString()}</div>
                    <div className="text-sm text-slate-400">Total XP</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
