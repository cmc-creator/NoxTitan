'use client';

import { useState } from 'react';
import { Gamepad2, Brain, Heart, Trophy, Smile, Users, Sparkles, Target, MessageCircle, Star } from 'lucide-react';

export default function TeamCulturePage() {
  const [activeTab, setActiveTab] = useState<'games' | 'personality' | 'recognition' | 'wellness'>('games');

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--page-bg)', color: 'var(--body-text)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
            🎯 Team Culture Hub
          </h1>
          <p className="text-lg opacity-80">
            Build stronger teams through games, insights, and recognition
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('games')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'games'
                ? 'shadow-lg scale-105'
                : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'games' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'games' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Gamepad2 className="h-5 w-5" />
            Team Games
          </button>
          <button
            onClick={() => setActiveTab('personality')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'personality'
                ? 'shadow-lg scale-105'
                : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'personality' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'personality' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Brain className="h-5 w-5" />
            Personality Insights
          </button>
          <button
            onClick={() => setActiveTab('recognition')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'recognition'
                ? 'shadow-lg scale-105'
                : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'recognition' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'recognition' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Trophy className="h-5 w-5" />
            Recognition
          </button>
          <button
            onClick={() => setActiveTab('wellness')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'wellness'
                ? 'shadow-lg scale-105'
                : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'wellness' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'wellness' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Heart className="h-5 w-5" />
            Wellness Hub
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'games' && <TeamGamesSection />}
          {activeTab === 'personality' && <PersonalitySection />}
          {activeTab === 'recognition' && <RecognitionSection />}
          {activeTab === 'wellness' && <WellnessSection />}
        </div>
      </div>
    </div>
  );
}

function TeamGamesSection() {
  const games = [
    {
      id: 'icebreaker',
      title: '❄️ Quick Icebreaker',
      description: '5-minute game to learn fun facts about teammates',
      players: '2-10 players',
      time: '5 min',
      icon: '🎲',
    },
    {
      id: 'two-truths',
      title: '🎭 Two Truths & a Lie',
      description: 'Guess which statement is false',
      players: '3-8 players',
      time: '10 min',
      icon: '🤔',
    },
    {
      id: 'emoji-story',
      title: '😊 Emoji Story Chain',
      description: 'Build a story together using only emojis',
      players: '2-15 players',
      time: '7 min',
      icon: '📖',
    },
    {
      id: 'word-association',
      title: '💭 Word Association Race',
      description: 'Fast-paced word connection game',
      players: '2-6 players',
      time: '5 min',
      icon: '⚡',
    },
    {
      id: 'team-trivia',
      title: '🧠 Team Trivia',
      description: 'Test knowledge about your workplace and team',
      players: '4-20 players',
      time: '15 min',
      icon: '🎯',
    },
    {
      id: 'virtual-scavenger',
      title: '🔍 Office Scavenger Hunt',
      description: 'Find items around the workplace',
      players: '2-30 players',
      time: '10 min',
      icon: '🏆',
    },
  ];

  return (
    <div>
      <div className="mb-6 p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
          🎮 Team Building Games
        </h2>
        <p className="opacity-80">
          Quick, fun games to strengthen team bonds and improve communication. Perfect for shift changes, breaks, or team meetings!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
            style={{ background: 'var(--card-bg)' }}
          >
            <div className="text-5xl mb-4">{game.icon}</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
              {game.title}
            </h3>
            <p className="opacity-80 mb-4">{game.description}</p>
            <div className="flex justify-between text-sm opacity-70">
              <span>👥 {game.players}</span>
              <span>⏱️ {game.time}</span>
            </div>
            <button
              className="mt-4 w-full py-2 px-4 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
              style={{ background: 'var(--primary-btn)' }}
            >
              Start Game
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonalitySection() {
  const assessments = [
    {
      title: '🎨 Work Style Profile',
      description: 'Discover if you\'re a Planner, Creator, Analyzer, or Connector',
      questions: 12,
      time: '5 min',
      insight: 'Helps match employees to ideal roles and team dynamics',
    },
    {
      title: '⭐ Strengths Finder',
      description: 'Identify your top 5 professional strengths',
      questions: 20,
      time: '10 min',
      insight: 'Perfect for career development and role optimization',
    },
    {
      title: '🤝 Team Chemistry Analyzer',
      description: 'See how your work style meshes with teammates',
      questions: 15,
      time: '7 min',
      insight: 'Creates optimal team pairings for shifts',
    },
    {
      title: '🎯 Leadership Potential',
      description: 'Assess readiness for leadership roles',
      questions: 18,
      time: '8 min',
      insight: 'Identifies future supervisors and managers',
    },
  ];

  return (
    <div>
      <div className="mb-6 p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
          🧠 Personality & Work Style Assessments
        </h2>
        <p className="opacity-80">
          Science-backed assessments to understand employee strengths, optimize team placement, and boost satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assessments.map((assessment, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl shadow-lg"
            style={{ background: 'var(--card-bg)' }}
          >
            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--header-text)' }}>
              {assessment.title}
            </h3>
            <p className="opacity-80 mb-4">{assessment.description}</p>
            
            <div className="flex gap-4 mb-4 text-sm">
              <span className="px-3 py-1 rounded-full" style={{ background: 'var(--today-highlight)', color: '#fff' }}>
                {assessment.questions} questions
              </span>
              <span className="px-3 py-1 rounded-full opacity-70" style={{ background: 'var(--border-color)' }}>
                ⏱️ {assessment.time}
              </span>
            </div>

            <div className="p-4 rounded-lg mb-4 border-l-4" style={{ 
              background: 'rgba(var(--today-highlight-rgb), 0.1)',
              borderColor: 'var(--today-highlight)'
            }}>
              <p className="text-sm">
                <strong>💡 Insight:</strong> {assessment.insight}
              </p>
            </div>

            <button
              className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
              style={{ background: 'var(--primary-btn)' }}
            >
              Take Assessment
            </button>
          </div>
        ))}
      </div>

      {/* Team Chemistry Dashboard */}
      <div className="mt-8 p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
          🔬 Team Chemistry Dashboard
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg text-center" style={{ background: 'rgba(34, 197, 94, 0.2)' }}>
            <div className="text-3xl mb-2">92%</div>
            <div className="text-sm opacity-80">Overall Team Compatibility</div>
          </div>
          <div className="p-4 rounded-lg text-center" style={{ background: 'rgba(59, 130, 246, 0.2)' }}>
            <div className="text-3xl mb-2">4.8/5</div>
            <div className="text-sm opacity-80">Average Job Satisfaction</div>
          </div>
          <div className="p-4 rounded-lg text-center" style={{ background: 'rgba(168, 85, 247, 0.2)' }}>
            <div className="text-3xl mb-2">87%</div>
            <div className="text-sm opacity-80">Role-Match Score</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecognitionSection() {
  const recentRecognitions = [
    { from: 'Sarah M.', to: 'Alex K.', badge: '⭐', reason: 'Exceptional customer service', time: '2 hours ago' },
    { from: 'Mike R.', to: 'Jordan P.', badge: '🚀', reason: 'Going above and beyond', time: '5 hours ago' },
    { from: 'Emma L.', to: 'Team', badge: '🏆', reason: 'Amazing teamwork last week', time: '1 day ago' },
  ];

  const badges = [
    { emoji: '⭐', name: 'Star Performer', count: 45 },
    { emoji: '🚀', name: 'Go-Getter', count: 32 },
    { emoji: '🤝', name: 'Team Player', count: 58 },
    { emoji: '💡', name: 'Problem Solver', count: 28 },
    { emoji: '🎯', name: 'Goal Crusher', count: 41 },
    { emoji: '❤️', name: 'Heart of Gold', count: 36 },
  ];

  return (
    <div>
      <div className="mb-6 p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
          🏆 Employee Recognition System
        </h2>
        <p className="opacity-80">
          Celebrate wins, give kudos, and build a culture of appreciation. Recognition increases retention by 31%!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Give Recognition */}
        <div className="lg:col-span-2 p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
            ✨ Give Recognition
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Who deserves recognition?</label>
              <select className="w-full p-3 rounded-lg" style={{ background: 'var(--calendar-bg)', color: 'var(--body-text)' }}>
                <option>Select employee...</option>
                <option>Alex K.</option>
                <option>Jordan P.</option>
                <option>Sarah M.</option>
                <option>The whole team!</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2">Choose a badge</label>
              <div className="grid grid-cols-3 gap-3">
                {badges.map((badge, idx) => (
                  <button
                    key={idx}
                    className="p-3 rounded-lg hover:scale-110 transition-all text-center"
                    style={{ background: 'var(--calendar-bg)' }}
                  >
                    <div className="text-3xl mb-1">{badge.emoji}</div>
                    <div className="text-xs opacity-70">{badge.name}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Why are they awesome?</label>
              <textarea
                className="w-full p-3 rounded-lg h-24"
                style={{ background: 'var(--calendar-bg)', color: 'var(--body-text)' }}
                placeholder="Share what they did that made a difference..."
              />
            </div>

            <button
              className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
              style={{ background: 'var(--primary-btn)' }}
            >
              Send Recognition 🎉
            </button>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
            🏅 This Month's Leaders
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
              <div className="text-2xl">🥇</div>
              <div className="flex-1">
                <div className="font-bold">Sarah M.</div>
                <div className="text-sm opacity-70">12 badges</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
              <div className="text-2xl">🥈</div>
              <div className="flex-1">
                <div className="font-bold">Alex K.</div>
                <div className="text-sm opacity-70">10 badges</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
              <div className="text-2xl">🥉</div>
              <div className="flex-1">
                <div className="font-bold">Jordan P.</div>
                <div className="text-sm opacity-70">9 badges</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Recognition */}
      <div className="mt-6 p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
          💬 Recent Recognition
        </h3>
        <div className="space-y-3">
          {recentRecognitions.map((rec, idx) => (
            <div key={idx} className="p-4 rounded-lg flex items-start gap-4" style={{ background: 'var(--calendar-bg)' }}>
              <div className="text-3xl">{rec.badge}</div>
              <div className="flex-1">
                <div>
                  <strong>{rec.from}</strong> recognized <strong>{rec.to}</strong>
                </div>
                <div className="opacity-80 mt-1">"{rec.reason}"</div>
                <div className="text-sm opacity-50 mt-2">{rec.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WellnessSection() {
  return (
    <div>
      <div className="mb-6 p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
          ❤️ Wellness & Mood Tracking
        </h2>
        <p className="opacity-80">
          Monitor team wellbeing, prevent burnout, and create a supportive work environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Daily Mood Check-in */}
        <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
            😊 Daily Mood Check
          </h3>
          <p className="opacity-80 mb-4 text-sm">How are you feeling today?</p>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {['😫', '😕', '😐', '🙂', '😄'].map((emoji, idx) => (
              <button
                key={idx}
                className="text-4xl p-3 rounded-lg hover:scale-125 transition-all"
                style={{ background: 'var(--calendar-bg)' }}
              >
                {emoji}
              </button>
            ))}
          </div>
          <button
            className="w-full py-2 px-4 rounded-lg font-semibold text-white"
            style={{ background: 'var(--primary-btn)' }}
          >
            Submit Check-in
          </button>
        </div>

        {/* Team Wellness Score */}
        <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
            📊 Team Wellness Score
          </h3>
          <div className="text-center mb-4">
            <div className="text-6xl font-bold mb-2" style={{ color: 'var(--today-highlight)' }}>
              8.2
            </div>
            <div className="text-sm opacity-70">out of 10</div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>😄 Very Happy</span>
              <span className="font-bold">45%</span>
            </div>
            <div className="flex justify-between">
              <span>🙂 Content</span>
              <span className="font-bold">32%</span>
            </div>
            <div className="flex justify-between">
              <span>😐 Neutral</span>
              <span className="font-bold">18%</span>
            </div>
            <div className="flex justify-between">
              <span>😕 Stressed</span>
              <span className="font-bold text-red-500">5%</span>
            </div>
          </div>
        </div>

        {/* Wellness Challenges */}
        <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
            🎯 Wellness Challenges
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
              <div className="font-bold mb-1">💧 Hydration Hero</div>
              <div className="text-sm opacity-70 mb-2">Drink 8 glasses of water</div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
              <div className="font-bold mb-1">👟 Step Master</div>
              <div className="text-sm opacity-70 mb-2">10,000 steps today</div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
              <div className="font-bold mb-1">🧘 Mindful Minute</div>
              <div className="text-sm opacity-70 mb-2">5 min meditation</div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Anonymous Feedback */}
        <div className="md:col-span-2 p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
            📮 Anonymous Feedback Box
          </h3>
          <p className="opacity-80 mb-4 text-sm">Share concerns, suggestions, or appreciation anonymously.</p>
          <textarea
            className="w-full p-4 rounded-lg h-32 mb-4"
            style={{ background: 'var(--calendar-bg)', color: 'var(--body-text)' }}
            placeholder="Your voice matters. Share your thoughts here..."
          />
          <button
            className="py-2 px-6 rounded-lg font-semibold text-white"
            style={{ background: 'var(--primary-btn)' }}
          >
            Submit Anonymously
          </button>
        </div>

        {/* Burnout Prevention */}
        <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
            🔥 Burnout Alert
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg border-l-4 border-yellow-500" style={{ background: 'rgba(234, 179, 8, 0.1)' }}>
              <div className="font-bold">⚠️ Sarah M.</div>
              <div className="text-sm opacity-70">Working 6 days straight</div>
            </div>
            <div className="p-3 rounded-lg border-l-4 border-green-500" style={{ background: 'rgba(34, 197, 94, 0.1)' }}>
              <div className="font-bold">✅ Team Average</div>
              <div className="text-sm opacity-70">Healthy work-life balance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
