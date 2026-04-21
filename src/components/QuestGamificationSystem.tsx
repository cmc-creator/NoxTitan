'use client';

import { useState } from 'react';
import { Trophy, Star, Gem, Map, Sword, Shield, Crown, Target, TrendingUp, Users, Zap, Award, Flame, ChevronRight, Lock, Unlock } from 'lucide-react';

interface QuestGamificationSystemProps {
  userId: string;
  userRole: 'employee' | 'manager' | 'admin';
  industry?: string;
}

export default function QuestGamificationSystem({ userId, userRole, industry = 'healthcare' }: QuestGamificationSystemProps) {
  const [activeTab, setActiveTab] = useState<'quests' | 'stats' | 'leaderboard' | 'treasure'>('quests');
  
  // Player Stats
  const [playerStats] = useState({
    level: 12,
    xp: 2847,
    xpToNext: 3500,
    totalXP: 18347,
    rank: 'Explorer',
    nextRank: 'Adventurer',
    gems: 247,
    artifacts: 15,
    achievements: 28,
    streakDays: 7,
  });

  // Game themes users can choose
  const [selectedTheme, setSelectedTheme] = useState<'tomb-raider' | 'treasure-hunt' | 'space-explorer' | 'detective' | 'fantasy-quest'>('tomb-raider');

  const themes = {
    'tomb-raider': {
      name: 'Tomb Raider',
      icon: '🗿',
      currency: 'Ancient Gems',
      description: 'Explore ancient temples and uncover lost treasures',
      colors: 'from-amber-700 to-orange-900'
    },
    'treasure-hunt': {
      name: 'Treasure Hunt',
      icon: '🏴‍☠️',
      currency: 'Gold Doubloons',
      description: 'Sail the seas and find buried treasure',
      colors: 'from-yellow-600 to-amber-800'
    },
    'space-explorer': {
      name: 'Space Explorer',
      icon: '🚀',
      currency: 'Star Crystals',
      description: 'Journey through galaxies collecting cosmic artifacts',
      colors: 'from-amber-700 to-amber-500'
    },
    'detective': {
      name: 'Detective',
      icon: '🔍',
      currency: 'Evidence Clues',
      description: 'Solve cases and crack mysteries',
      colors: 'from-slate-700 to-gray-900'
    },
    'fantasy-quest': {
      name: 'Fantasy Quest',
      icon: '⚔️',
      currency: 'Magic Runes',
      description: 'Embark on epic quests and slay dragons',
      colors: 'from-stone-900 to-pink-900'
    }
  };

  // Active Quests - Work tasks gamified!
  const activeQuests = [
    {
      id: 1,
      title: 'Document 5 Patient Encounters',
      description: 'Complete thorough documentation with quality notes',
      progress: 3,
      goal: 5,
      xpReward: 25,
      gemReward: 5,
      difficulty: 'Common',
      category: 'Documentation',
      timeLimit: '8 hours',
      icon: '📝',
      theme: 'You\'ve found 3 ancient scrolls. Find 2 more to unlock the chamber!'
    },
    {
      id: 2,
      title: 'Complete Medication Administration',
      description: 'Administer meds on time with zero errors',
      progress: 8,
      goal: 12,
      xpReward: 35,
      gemReward: 8,
      difficulty: 'Rare',
      category: 'Clinical Care',
      timeLimit: '12 hours',
      icon: '💊',
      theme: 'Each potion brewed perfectly brings you closer to the legendary elixir!'
    },
    {
      id: 3,
      title: 'Mentor New Team Member',
      description: 'Help onboard Sarah Mitchell - teach 3 procedures',
      progress: 1,
      goal: 3,
      xpReward: 50,
      gemReward: 12,
      difficulty: 'Epic',
      category: 'Teamwork',
      timeLimit: '3 days',
      icon: '🎓',
      theme: 'Pass on your wisdom to the apprentice. 1 lesson down, 2 to go!'
    },
    {
      id: 4,
      title: 'Achieve 100% Hand Hygiene',
      description: 'Perfect hand hygiene compliance all shift',
      progress: 7,
      goal: 8,
      xpReward: 20,
      gemReward: 4,
      difficulty: 'Uncommon',
      category: 'Safety',
      timeLimit: 'This shift',
      icon: '🧼',
      theme: 'The ancient temple is almost purified! One more ritual to go.'
    },
    {
      id: 5,
      title: 'Weekly Timesheet Submission',
      description: 'Submit your hours by Friday',
      progress: 0,
      goal: 1,
      xpReward: 15,
      gemReward: 3,
      difficulty: 'Common',
      category: 'Administrative',
      timeLimit: '2 days',
      icon: '⏰',
      theme: 'The time crystal awaits! Submit to unlock its power.'
    },
  ];

  // Completed Quests Today
  const completedToday = [
    { title: 'Clock In On Time', xp: 10, gems: 2, icon: '⏱️' },
    { title: 'Attend Team Huddle', xp: 15, gems: 3, icon: '👥' },
    { title: 'Complete Safety Check', xp: 20, gems: 4, icon: '✅' },
  ];

  // Leaderboard
  const leaderboard = [
    { rank: 1, name: 'Jessica Williams', level: 15, xp: 25489, gems: 412, avatar: 'JW', streak: 21, badge: '👑' },
    { rank: 2, name: 'Michael Chen', level: 14, xp: 23150, gems: 387, avatar: 'MC', streak: 18, badge: '🥈' },
    { rank: 3, name: 'Amanda Rodriguez', level: 13, xp: 21200, gems: 356, avatar: 'AR', streak: 15, badge: '🥉' },
    { rank: 4, name: 'Marcus Johnson', level: 12, xp: 19847, gems: 298, avatar: 'MJ', streak: 12 },
    { rank: 5, name: 'Sarah Mitchell (You)', level: 12, xp: 18347, gems: 247, avatar: 'SM', streak: 7, isCurrentUser: true },
    { rank: 6, name: 'David Park', level: 11, xp: 16523, gems: 219, avatar: 'DP', streak: 9 },
  ];

  // Manager vs Employee Challenge
  const managerChallenge = {
    manager: 'Sarah Thompson',
    managerXP: 8450,
    teamXP: 12380,
    challengeEnds: '3 days',
    prize: '50 bonus gems + Pizza Party!',
    status: 'winning'
  };

  // Achievements/Badges
  const recentAchievements = [
    { id: 1, name: 'Perfect Week', description: '7 days streak', icon: '🔥', unlocked: true },
    { id: 2, name: 'Mentor Master', description: 'Trained 5 employees', icon: '🎓', unlocked: true },
    { id: 3, name: 'Speed Demon', description: 'Complete 10 tasks in one shift', icon: '⚡', unlocked: false, progress: '7/10' },
    { id: 4, name: 'Treasure Hunter', description: 'Collect 100 gems', icon: '💎', unlocked: true },
    { id: 5, name: 'Team Player', description: 'Help 20 coworkers', icon: '🤝', unlocked: false, progress: '14/20' },
  ];

  // Treasure Chest - Special rewards
  const treasureChest = [
    { name: 'Extra Break Time', cost: 50, icon: '☕', category: 'Perks', available: true },
    { name: 'Preferred Parking Spot', cost: 100, icon: '🅿️', category: 'Perks', available: true },
    { name: 'Flexible Schedule Pick', cost: 150, icon: '📅', category: 'Perks', available: false },
    { name: '$25 Gift Card', cost: 200, icon: '🎁', category: 'Rewards', available: true },
    { name: 'Extra PTO Day', cost: 300, icon: '🏖️', category: 'Rewards', available: false },
    { name: 'Team Lunch (Your Choice)', cost: 500, icon: '🍕', category: 'Rewards', available: true },
  ];

  const difficultyColors = {
    'Common': 'bg-stone-500/20 text-stone-300 border-stone-500/30',
    'Uncommon': 'bg-green-500/20 text-green-300 border-green-500/30',
    'Rare': 'bg-amber-600/20 text-amber-400 border-amber-500/40/30',
    'Epic': 'bg-amber-500/20 text-amber-200 border-amber-500/40/30',
    'Legendary': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
  };

  return (
    <div className="space-y-6">
      {/* Player Stats Header */}
      <div className={`bg-gradient-to-r ${themes[selectedTheme].colors} backdrop-blur-xl rounded p-6 border-2 border-white/20 shadow-2xl`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="text-6xl">{themes[selectedTheme].icon}</div>
            <div>
              <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                Level {playerStats.level} {playerStats.rank}
                <Crown className="w-6 h-6 text-yellow-400" />
              </h2>
              <p className="text-white/80">Next: {playerStats.nextRank} (Level {playerStats.level + 1})</p>
            </div>
          </div>
          
          {/* Theme Selector */}
          <select
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value as any)}
            className="bg-stone-950/10 backdrop-blur-sm text-white rounded-lg px-4 py-2 border border-white/20 font-semibold"
          >
            {Object.entries(themes).map(([key, theme]) => (
              <option key={key} value={key} className="bg-stone-900">
                {theme.icon} {theme.name}
              </option>
            ))}
          </select>
        </div>

        {/* XP Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-white font-semibold">Experience Points</span>
            <span className="text-white font-bold">{playerStats.xp} / {playerStats.xpToNext} XP</span>
          </div>
          <div className="w-full bg-black/30 rounded-full h-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 h-4 rounded-full transition-all duration-500 relative"
              style={{ width: `${(playerStats.xp / playerStats.xpToNext) * 100}%` }}
            >
              <div className="absolute inset-0 bg-stone-950/30 animate-pulse"></div>
            </div>
          </div>
          <p className="text-xs text-white/70 mt-1">{playerStats.xpToNext - playerStats.xp} XP needed to level up!</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-stone-950/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <Gem className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
            <p className="text-2xl font-bold text-white">{playerStats.gems}</p>
            <p className="text-xs text-white/70">{themes[selectedTheme].currency}</p>
          </div>
          <div className="bg-stone-950/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <Trophy className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
            <p className="text-2xl font-bold text-white">{playerStats.artifacts}</p>
            <p className="text-xs text-white/70">Artifacts Found</p>
          </div>
          <div className="bg-stone-950/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <Award className="w-6 h-6 text-amber-400 mx-auto mb-1" />
            <p className="text-2xl font-bold text-white">{playerStats.achievements}</p>
            <p className="text-xs text-white/70">Achievements</p>
          </div>
          <div className="bg-stone-950/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <Flame className="w-6 h-6 text-orange-400 mx-auto mb-1" />
            <p className="text-2xl font-bold text-white">{playerStats.streakDays}</p>
            <p className="text-xs text-white/70">Day Streak</p>
          </div>
          <div className="bg-stone-950/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <Star className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
            <p className="text-2xl font-bold text-white">#{leaderboard.find(p => p.isCurrentUser)?.rank}</p>
            <p className="text-xs text-white/70">Team Rank</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setActiveTab('quests')}
          className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
            activeTab === 'quests'
              ? 'bg-gradient-to-r from-stone-900 to-pink-500 text-white'
              : 'bg-stone-900 text-stone-300 hover:bg-stone-900'
          }`}
        >
          <Map className="w-5 h-5" />
          Active Quests ({activeQuests.length})
        </button>
        <button
          onClick={() => setActiveTab('stats')}
          className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
            activeTab === 'stats'
              ? 'bg-gradient-to-r from-stone-900 to-pink-500 text-white'
              : 'bg-stone-900 text-stone-300 hover:bg-stone-900'
          }`}
        >
          <Target className="w-5 h-5" />
          Achievements
        </button>
        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
            activeTab === 'leaderboard'
              ? 'bg-gradient-to-r from-stone-900 to-pink-500 text-white'
              : 'bg-stone-900 text-stone-300 hover:bg-stone-900'
          }`}
        >
          <Trophy className="w-5 h-5" />
          Leaderboard
        </button>
        <button
          onClick={() => setActiveTab('treasure')}
          className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
            activeTab === 'treasure'
              ? 'bg-gradient-to-r from-stone-900 to-pink-500 text-white'
              : 'bg-stone-900 text-stone-300 hover:bg-stone-900'
          }`}
        >
          <Gem className="w-5 h-5" />
          Treasure Chest
        </button>
      </div>

      {/* Active Quests Tab */}
      {activeTab === 'quests' && (
        <div className="space-y-6">
          {/* Completed Today */}
          {completedToday.length > 0 && (
            <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 backdrop-blur-xl rounded p-6 border-2 border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                Quests Completed Today! 🎉
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {completedToday.map((quest, index) => (
                  <div key={index} className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{quest.icon}</span>
                      <div className="flex-1">
                        <p className="text-white font-bold">{quest.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-300 font-bold">+{quest.xp} XP</span>
                      <span className="text-cyan-300 font-bold">+{quest.gems} 💎</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Manager Challenge */}
          <div className={`bg-gradient-to-r ${managerChallenge.status === 'winning' ? 'from-stone-900/40 to-pink-900/40 border-amber-500/40/30' : 'from-red-900/40 to-orange-900/40 border-red-500/30'} backdrop-blur-xl rounded p-6 border-2`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-amber-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Team vs Manager Challenge!</h3>
                  <p className="text-sm text-amber-100/70">Beat {managerChallenge.manager}'s score</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/70">Ends in</p>
                <p className="text-xl font-bold text-white">{managerChallenge.challengeEnds}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-amber-500/20 rounded-lg p-4 text-center">
                <p className="text-sm text-amber-200 mb-1">Your Team</p>
                <p className="text-3xl font-bold text-white">{managerChallenge.teamXP} XP</p>
              </div>
              <div className="bg-red-500/20 rounded-lg p-4 text-center">
                <p className="text-sm text-red-300 mb-1">Manager</p>
                <p className="text-3xl font-bold text-white">{managerChallenge.managerXP} XP</p>
              </div>
            </div>
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 text-center">
              <p className="text-yellow-200 font-semibold">🏆 Prize: {managerChallenge.prize}</p>
            </div>
          </div>

          {/* Quest List */}
          <div className="grid grid-cols-1 gap-4">
            {activeQuests.map(quest => (
              <div key={quest.id} className="lux-card/80 backdrop-blur-xl rounded p-6 border-2 border-cyan-500/30 hover:border-cyan-400/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-5xl">{quest.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{quest.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-bold border ${difficultyColors[quest.difficulty as keyof typeof difficultyColors]}`}>
                          {quest.difficulty}
                        </span>
                      </div>
                      <p className="text-stone-300 mb-2">{quest.description}</p>
                      <p className="text-sm text-amber-200 italic mb-3">🗺️ {quest.theme}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-cyan-400 font-semibold">⏱️ {quest.timeLimit}</span>
                        <span className="text-stone-400">•</span>
                        <span className="text-yellow-400 font-semibold">+{quest.xpReward} XP</span>
                        <span className="text-cyan-400 font-semibold">+{quest.gemReward} 💎</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-white font-semibold">Progress</span>
                    <span className="text-sm text-white font-bold">{quest.progress} / {quest.goal}</span>
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-amber-800 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(quest.progress / quest.goal) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievements Tab */}
      {activeTab === 'stats' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentAchievements.map(achievement => (
            <div
              key={achievement.id}
              className={`rounded p-6 border-2 transition-all ${
                achievement.unlocked
                  ? 'bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border-yellow-500/30'
                  : 'bg-stone-900/50 border-stone-700 opacity-60'
              }`}
            >
              <div className="text-center mb-4">
                <div className="text-6xl mb-3">{achievement.icon}</div>
                {achievement.unlocked ? (
                  <Unlock className="w-8 h-8 text-green-400 mx-auto" />
                ) : (
                  <Lock className="w-8 h-8 text-stone-500 mx-auto" />
                )}
              </div>
              <h4 className="text-lg font-bold text-white text-center mb-1">{achievement.name}</h4>
              <p className="text-sm text-stone-300 text-center mb-3">{achievement.description}</p>
              {!achievement.unlocked && achievement.progress && (
                <div className="bg-stone-950/50 rounded-lg p-2 text-center">
                  <p className="text-xs text-cyan-400 font-semibold">{achievement.progress}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Leaderboard Tab */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-3">
          {leaderboard.map(player => (
            <div
              key={player.rank}
              className={`rounded p-4 border-2 transition-all ${
                player.isCurrentUser
                  ? 'bg-gradient-to-r from-stone-900/60 to-pink-900/60 border-amber-500/40/50 ring-4 ring-purple-500/30'
                  : 'bg-stone-900/50 border-stone-700 hover:border-cyan-500/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-white w-12 text-center">
                    {player.badge || `#${player.rank}`}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-amber-800 rounded-full flex items-center justify-center text-white font-bold">
                    {player.avatar}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{player.name}</p>
                    <p className="text-sm text-stone-400">Level {player.level}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">{player.xp.toLocaleString()}</p>
                    <p className="text-xs text-stone-400">Total XP</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-cyan-400">{player.gems}</p>
                    <p className="text-xs text-stone-400">💎 Gems</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-orange-400">{player.streak} 🔥</p>
                    <p className="text-xs text-stone-400">Streak</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Treasure Chest Tab */}
      {activeTab === 'treasure' && (
        <div>
          <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 backdrop-blur-xl rounded p-6 border-2 border-yellow-500/30 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Your Treasure</h3>
                <p className="text-yellow-200">Spend your gems on rewards!</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-white">{playerStats.gems}</p>
                <p className="text-yellow-300">💎 Available Gems</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {treasureChest.map((item, index) => (
              <div
                key={index}
                className={`rounded p-6 border-2 transition-all ${
                  item.available && playerStats.gems >= item.cost
                    ? 'bg-gradient-to-br from-stone-900/40 to-pink-900/40 border-amber-500/40/30 hover:border-amber-400/40/50'
                    : 'bg-stone-900/50 border-stone-700 opacity-60'
                }`}
              >
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  {item.available ? (
                    <Unlock className="w-6 h-6 text-green-400 mx-auto" />
                  ) : (
                    <Lock className="w-6 h-6 text-stone-500 mx-auto" />
                  )}
                </div>
                <h4 className="text-lg font-bold text-white text-center mb-1">{item.name}</h4>
                <p className="text-sm text-stone-400 text-center mb-3">{item.category}</p>
                <div className="bg-stone-950/50 rounded-lg p-3 text-center mb-3">
                  <p className="text-2xl font-bold text-cyan-400">{item.cost} 💎</p>
                </div>
                {item.available && playerStats.gems >= item.cost && (
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-stone-900 to-pink-500 hover:from-stone-900 hover:to-pink-600 rounded-lg font-bold text-white transition-all">
                    Claim Reward
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


