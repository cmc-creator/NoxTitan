'use client';

import { useState, useEffect } from 'react';
import {
  Coffee, Users, Heart, Star, Trophy, Target, Zap, Calendar, MessageCircle,
  ThumbsUp, Camera, Book, Music, Dumbbell, Smile, Lightbulb, Award, Gift,
  PartyPopper, Sparkles, TrendingUp, Clock, Play, CheckCircle2
} from 'lucide-react';

interface TeamActivity {
  id: string;
  name: string;
  description: string;
  category: 'icebreaker' | 'team-bonding' | 'manager-engagement' | 'competition' | 'daily-challenge' | 'social';
  icon: string;
  xpReward: number;
  participants: number;
  frequency: 'daily' | 'weekly' | 'monthly' | 'ongoing';
  difficulty: 'easy' | 'medium' | 'hard';
  featured: boolean;
}

interface ActivityParticipation {
  activityId: string;
  activityName: string;
  completedAt: string;
  xpEarned: number;
  response?: string;
}

const TEAM_ACTIVITIES: TeamActivity[] = [
  // Ice Breakers
  {
    id: 'two-truths-lie',
    name: 'Two Truths and a Lie',
    description: 'Share two true facts and one false fact about yourself. Let your teammates guess which is the lie!',
    category: 'icebreaker',
    icon: '🎭',
    xpReward: 50,
    participants: 0,
    frequency: 'weekly',
    difficulty: 'easy',
    featured: true
  },
  {
    id: 'fun-fact-friday',
    name: 'Fun Fact Friday',
    description: 'Share an interesting or surprising fact about yourself every Friday',
    category: 'icebreaker',
    icon: '✨',
    xpReward: 25,
    participants: 0,
    frequency: 'weekly',
    difficulty: 'easy',
    featured: false
  },
  {
    id: 'would-you-rather',
    name: 'Would You Rather?',
    description: 'Answer fun "would you rather" questions and see what your teammates choose',
    category: 'icebreaker',
    icon: '🤔',
    xpReward: 20,
    participants: 0,
    frequency: 'daily',
    difficulty: 'easy',
    featured: false
  },
  {
    id: 'desert-island',
    name: 'Desert Island',
    description: 'If you were stranded on a desert island, what 3 items would you bring?',
    category: 'icebreaker',
    icon: '🏝️',
    xpReward: 30,
    participants: 0,
    frequency: 'weekly',
    difficulty: 'easy',
    featured: false
  },
  {
    id: 'emoji-story',
    name: 'Emoji Story',
    description: 'Tell a story about your weekend using only emojis, then explain it!',
    category: 'icebreaker',
    icon: '😊',
    xpReward: 40,
    participants: 0,
    frequency: 'weekly',
    difficulty: 'medium',
    featured: false
  },

  // Team Bonding
  {
    id: 'coffee-roulette',
    name: 'Coffee Roulette',
    description: 'Get randomly paired with a teammate for virtual or in-person coffee',
    category: 'team-bonding',
    icon: '☕',
    xpReward: 100,
    participants: 0,
    frequency: 'weekly',
    difficulty: 'easy',
    featured: true
  },
  {
    id: 'lunch-lottery',
    name: 'Lunch Lottery',
    description: 'Random lunch partner matching - get to know someone new over lunch',
    category: 'team-bonding',
    icon: '🍽️',
    xpReward: 100,
    participants: 0,
    frequency: 'weekly',
    difficulty: 'easy',
    featured: true
  },
  {
    id: 'gratitude-wall',
    name: 'Gratitude Wall',
    description: 'Post a thank you or appreciation message for a teammate',
    category: 'team-bonding',
    icon: '💝',
    xpReward: 30,
    participants: 0,
    frequency: 'daily',
    difficulty: 'easy',
    featured: false
  },
  {
    id: 'hobby-showcase',
    name: 'Hobby Showcase',
    description: 'Share photos or videos of your hobbies and passions outside of work',
    category: 'team-bonding',
    icon: '🎨',
    xpReward: 75,
    participants: 0,
    frequency: 'monthly',
    difficulty: 'medium',
    featured: false
  },
  {
    id: 'skills-swap',
    name: 'Skills Swap',
    description: 'Teach a teammate something you\'re good at and learn something from them',
    category: 'team-bonding',
    icon: '🎓',
    xpReward: 150,
    participants: 0,
    frequency: 'monthly',
    difficulty: 'hard',
    featured: false
  },
  {
    id: 'photo-challenge',
    name: 'Photo Challenge',
    description: 'Weekly themed photo challenges - share your best shot!',
    category: 'team-bonding',
    icon: '📸',
    xpReward: 50,
    participants: 0,
    frequency: 'weekly',
    difficulty: 'medium',
    featured: false
  },
  {
    id: 'playlist-party',
    name: 'Playlist Party',
    description: 'Collaborate on team playlists - add your favorite songs',
    category: 'team-bonding',
    icon: '🎵',
    xpReward: 40,
    participants: 0,
    frequency: 'ongoing',
    difficulty: 'easy',
    featured: false
  },
  {
    id: 'book-club',
    name: 'Book Club',
    description: 'Join a mini book club group and discuss books together',
    category: 'team-bonding',
    icon: '📚',
    xpReward: 200,
    participants: 0,
    frequency: 'monthly',
    difficulty: 'hard',
    featured: false
  },

  // Manager Engagement
  {
    id: 'manager-mixer',
    name: 'Manager Mixer',
    description: 'Cross-department manager meetups to share strategies and insights',
    category: 'manager-engagement',
    icon: '👔',
    xpReward: 150,
    participants: 0,
    frequency: 'monthly',
    difficulty: 'medium',
    featured: true
  },
  {
    id: 'leadership-lunch',
    name: 'Leadership Lunch & Learn',
    description: 'Host or attend leadership development sessions over lunch',
    category: 'manager-engagement',
    icon: '🎯',
    xpReward: 200,
    participants: 0,
    frequency: 'monthly',
    difficulty: 'hard',
    featured: false
  },
  {
    id: 'mentorship-match',
    name: 'Mentorship Matching',
    description: 'Connect with another manager as mentor or mentee',
    category: 'manager-engagement',
    icon: '🤝',
    xpReward: 250,
    participants: 0,
    frequency: 'ongoing',
    difficulty: 'hard',
    featured: false
  },
  {
    id: 'innovation-pitch',
    name: 'Innovation Pitch',
    description: 'Pitch creative ideas for process improvements or new initiatives',
    category: 'manager-engagement',
    icon: '💡',
    xpReward: 300,
    participants: 0,
    frequency: 'monthly',
    difficulty: 'hard',
    featured: false
  },
  {
    id: 'problem-solving-jam',
    name: 'Problem-Solving Jam',
    description: 'Collaborative sessions to tackle common management challenges',
    category: 'manager-engagement',
    icon: '🧩',
    xpReward: 175,
    participants: 0,
    frequency: 'monthly',
    difficulty: 'medium',
    featured: false
  },

  // Competitions
  {
    id: 'dept-showdown',
    name: 'Department Showdown',
    description: 'Friendly competitions between departments - trivia, fitness, creativity',
    category: 'competition',
    icon: '⚔️',
    xpReward: 500,
    participants: 0,
    frequency: 'monthly',
    difficulty: 'hard',
    featured: true
  },
  {
    id: 'trivia-night',
    name: 'Team Trivia Night',
    description: 'Weekly trivia competitions with custom questions about your company and pop culture',
    category: 'competition',
    icon: '🧠',
    xpReward: 100,
    participants: 0,
    frequency: 'weekly',
    difficulty: 'medium',
    featured: true
  },
  {
    id: 'fitness-challenge',
    name: 'Fitness Challenge',
    description: 'Track steps, workouts, or activity streaks and compete with teammates',
    category: 'competition',
    icon: '💪',
    xpReward: 75,
    participants: 0,
    frequency: 'daily',
    difficulty: 'medium',
    featured: false
  },
  {
    id: 'scavenger-hunt',
    name: 'Office Scavenger Hunt',
    description: 'Find items or complete tasks around the office for points',
    category: 'competition',
    icon: '🔍',
    xpReward: 150,
    participants: 0,
    frequency: 'monthly',
    difficulty: 'medium',
    featured: false
  },
  {
    id: 'creative-contest',
    name: 'Creative Contest',
    description: 'Monthly themed contests - photography, writing, design, cooking',
    category: 'competition',
    icon: '🏆',
    xpReward: 200,
    participants: 0,
    frequency: 'monthly',
    difficulty: 'hard',
    featured: false
  },

  // Daily Challenges
  {
    id: 'daily-check-in',
    name: 'Daily Check-In',
    description: 'Answer a quick question about your day or mood',
    category: 'daily-challenge',
    icon: '📝',
    xpReward: 10,
    participants: 0,
    frequency: 'daily',
    difficulty: 'easy',
    featured: false
  },
  {
    id: 'compliment-challenge',
    name: 'Compliment Challenge',
    description: 'Give a genuine compliment to a teammate today',
    category: 'daily-challenge',
    icon: '💬',
    xpReward: 25,
    participants: 0,
    frequency: 'daily',
    difficulty: 'easy',
    featured: false
  },
  {
    id: 'random-act-kindness',
    name: 'Random Act of Kindness',
    description: 'Do something nice for a coworker without being asked',
    category: 'daily-challenge',
    icon: '❤️',
    xpReward: 50,
    participants: 0,
    frequency: 'daily',
    difficulty: 'medium',
    featured: false
  },
  {
    id: 'learn-something-new',
    name: 'Learn Something New',
    description: 'Share one new thing you learned today',
    category: 'daily-challenge',
    icon: '🌟',
    xpReward: 35,
    participants: 0,
    frequency: 'daily',
    difficulty: 'easy',
    featured: false
  },

  // Social
  {
    id: 'birthday-brigade',
    name: 'Birthday Brigade',
    description: 'Organize birthday celebrations and surprises for teammates',
    category: 'social',
    icon: '🎂',
    xpReward: 100,
    participants: 0,
    frequency: 'monthly',
    difficulty: 'medium',
    featured: false
  },
  {
    id: 'virtual-happy-hour',
    name: 'Virtual Happy Hour',
    description: 'Join team members for casual after-work hangouts',
    category: 'social',
    icon: '🍹',
    xpReward: 75,
    participants: 0,
    frequency: 'weekly',
    difficulty: 'easy',
    featured: false
  },
  {
    id: 'game-night',
    name: 'Game Night',
    description: 'Play online games together - trivia, Pictionary, Among Us, etc.',
    category: 'social',
    icon: '🎮',
    xpReward: 100,
    participants: 0,
    frequency: 'weekly',
    difficulty: 'easy',
    featured: false
  },
  {
    id: 'pet-parade',
    name: 'Pet Parade',
    description: 'Share photos and stories of your pets',
    category: 'social',
    icon: '🐾',
    xpReward: 30,
    participants: 0,
    frequency: 'weekly',
    difficulty: 'easy',
    featured: false
  }
];

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<TeamActivity[]>(TEAM_ACTIVITIES);
  const [myParticipations, setMyParticipations] = useState<ActivityParticipation[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'browse' | 'my-activities' | 'leaderboard'>('browse');

  const categories = [
    { id: 'all', label: 'All Activities', icon: Sparkles },
    { id: 'icebreaker', label: 'Ice Breakers', icon: Smile },
    { id: 'team-bonding', label: 'Team Bonding', icon: Heart },
    { id: 'manager-engagement', label: 'Manager Engagement', icon: Target },
    { id: 'competition', label: 'Competitions', icon: Trophy },
    { id: 'daily-challenge', label: 'Daily Challenges', icon: Calendar },
    { id: 'social', label: 'Social Events', icon: PartyPopper }
  ];

  const filteredActivities = selectedCategory === 'all'
    ? activities
    : activities.filter(a => a.category === selectedCategory);

  const featuredActivities = activities.filter(a => a.featured);

  const participateInActivity = async (activityId: string) => {
    const activity = activities.find(a => a.id === activityId);
    if (!activity) return;

    const response = prompt(`Participating in "${activity.name}"!\n\n${activity.description}\n\nShare your response or experience:`);
    if (!response) return;

    const participation: ActivityParticipation = {
      activityId,
      activityName: activity.name,
      completedAt: new Date().toISOString(),
      xpEarned: activity.xpReward,
      response
    };

    setMyParticipations([participation, ...myParticipations]);
    alert(`Amazing! You earned ${activity.xpReward} XP! 🎉`);

    // TODO: Call API to record participation and award XP
  };

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === 'easy') return 'text-green-400 bg-green-600/20';
    if (difficulty === 'medium') return 'text-yellow-400 bg-yellow-600/20';
    return 'text-red-400 bg-red-600/20';
  };

  const getFrequencyBadge = (frequency: string) => {
    if (frequency === 'daily') return { color: 'bg-blue-600', label: 'Daily' };
    if (frequency === 'weekly') return { color: 'bg-purple-600', label: 'Weekly' };
    if (frequency === 'monthly') return { color: 'bg-pink-600', label: 'Monthly' };
    return { color: 'bg-slate-600', label: 'Ongoing' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Sparkles className="w-10 h-10 text-yellow-400" />
            Team Engagement Activities
          </h1>
          <p className="text-slate-300">Connect, compete, and build relationships with your teammates</p>
        </div>

        {/* Featured Activities */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" />
            Featured This Week
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredActivities.map(activity => (
              <div key={activity.id} className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 border-2 border-yellow-400">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{activity.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{activity.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${getDifficultyColor(activity.difficulty)}`}>
                      {activity.difficulty.toUpperCase()}
                    </span>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${getFrequencyBadge(activity.frequency).color} text-white`}>
                      {getFrequencyBadge(activity.frequency).label}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-white/90 mb-4 text-center">{activity.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-yellow-300">
                    <Zap className="w-5 h-5" />
                    <span className="font-bold">+{activity.xpReward} XP</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{activity.participants} joined</span>
                  </div>
                </div>
                <button
                  onClick={() => participateInActivity(activity.id)}
                  className="w-full px-4 py-3 bg-white text-purple-600 hover:bg-slate-100 font-bold rounded-lg transition-all"
                >
                  Participate Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {[
            { id: 'browse', label: 'Browse Activities', icon: Sparkles },
            { id: 'my-activities', label: 'My Activities', icon: CheckCircle2 },
            { id: 'leaderboard', label: 'Leaderboard', icon: TrendingUp }
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

        {/* Browse Activities Tab */}
        {activeTab === 'browse' && (
          <div>
            {/* Category Filter */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-800/50 text-slate-400 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </button>
              ))}
            </div>

            {/* Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredActivities.map(activity => (
                <div key={activity.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-2">{activity.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-1">{activity.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${getDifficultyColor(activity.difficulty)}`}>
                        {activity.difficulty.toUpperCase()}
                      </span>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${getFrequencyBadge(activity.frequency).color} text-white`}>
                        {getFrequencyBadge(activity.frequency).label}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 mb-4 min-h-[60px]">{activity.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-yellow-400">
                      <Zap className="w-4 h-4" />
                      <span className="font-bold">+{activity.xpReward} XP</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{activity.participants}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => participateInActivity(activity.id)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg transition-all"
                  >
                    Join Activity
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* My Activities Tab */}
        {activeTab === 'my-activities' && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">My Participation History</h2>
            {myParticipations.length === 0 ? (
              <div className="text-center py-12">
                <Sparkles className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400 text-lg">No activities completed yet</p>
                <p className="text-slate-500">Start participating to see your history here!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {myParticipations.map((participation, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">{participation.activityName}</h3>
                      <div className="flex items-center gap-2 text-yellow-400 font-bold">
                        <Zap className="w-4 h-4" />
                        +{participation.xpEarned}
                      </div>
                    </div>
                    {participation.response && (
                      <p className="text-slate-300 mb-2">{participation.response}</p>
                    )}
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Clock className="w-4 h-4" />
                      {new Date(participation.completedAt).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Activity Leaderboard</h2>
            <p className="text-slate-400 text-center py-12">
              Leaderboard coming soon! Track who's most engaged with team activities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
