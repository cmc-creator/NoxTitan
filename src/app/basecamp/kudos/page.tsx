'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mountain, ThumbsUp, Heart, Star, Zap, Award, TrendingUp, Users, Send, Sparkles, Trophy, Target, Rocket, Coffee } from 'lucide-react';

export default function Kudos() {
  const [selectedRecipient, setSelectedRecipient] = useState('');
  const [selectedBadge, setSelectedBadge] = useState('');
  const [message, setMessage] = useState('');

  const badges = [
    { id: 'rockstar', emoji: '🌟', name: 'Rockstar', color: 'from-yellow-600 to-orange-600' },
    { id: 'hero', emoji: '🦸', name: 'Team Hero', color: 'from-blue-600 to-cyan-600' },
    { id: 'genius', emoji: '🧠', name: 'Big Brain', color: 'from-purple-600 to-pink-600' },
    { id: 'helper', emoji: '🤝', name: 'Super Helper', color: 'from-green-600 to-emerald-600' },
    { id: 'innovator', emoji: '💡', name: 'Innovator', color: 'from-orange-600 to-red-600' },
    { id: 'positive', emoji: '😊', name: 'Positivity King/Queen', color: 'from-pink-600 to-red-600' },
    { id: 'mentor', emoji: '🎓', name: 'Amazing Mentor', color: 'from-indigo-600 to-purple-600' },
    { id: 'clutch', emoji: '⚡', name: 'Clutch Player', color: 'from-yellow-600 to-yellow-600' }
  ];

  const recentKudos = [
    {
      id: 1,
      from: 'Michael Torres',
      to: 'You (Alex)',
      badge: '🌟',
      badgeName: 'Rockstar',
      message: 'Your presentation today was INCREDIBLE! You absolutely crushed it! The client was blown away! 🚀',
      time: '2 hours ago',
      likes: 15
    },
    {
      id: 2,
      from: 'Sarah Chen',
      to: 'Emily Rodriguez',
      badge: '🤝',
      badgeName: 'Super Helper',
      message: 'Thank you for helping me with that tricky situation. Your patience and wisdom saved the day! 💚',
      time: '4 hours ago',
      likes: 23
    },
    {
      id: 3,
      from: 'David Park',
      to: 'You (Alex)',
      badge: '🧠',
      badgeName: 'Big Brain',
      message: 'That solution you came up with? *Chef\'s kiss* 👨‍🍳💋 Pure genius! You make complex things look easy!',
      time: '1 day ago',
      likes: 31
    },
    {
      id: 4,
      from: 'Lisa Anderson',
      to: 'Maria Garcia',
      badge: '💡',
      badgeName: 'Innovator',
      message: 'Your creative idea for the campaign is BRILLIANT! This is why you\'re amazing! ✨',
      time: '1 day ago',
      likes: 19
    },
    {
      id: 5,
      from: 'James Wilson',
      to: 'Michael Torres',
      badge: '😊',
      badgeName: 'Positivity King/Queen',
      message: 'Your positive energy every morning is infectious! You make coming to work actually FUN! 🌈',
      time: '2 days ago',
      likes: 27
    }
  ];

  const funnyMessages = [
    "You're so awesome, even your coffee is jealous! ☕",
    "You're not just crushing it, you're pulverizing it! 💪",
    "If there was a Nobel Prize for being amazing, you'd win it! 🏆",
    "You're the secret ingredient that makes this team perfect! ✨",
    "Warning: Your awesomeness may cause spontaneous applause! 👏"
  ];

  const randomFunny = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Top Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-xl border-b-2 border-emerald-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/basecamp" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Mountain className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">
              Your Basecamp
            </span>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <Link href="/basecamp" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-100 mb-4 transition-colors">
            ← Back to Basecamp
          </Link>
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-200 mb-2"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(251,191,36,0.6)',
                WebkitTextStroke: '1px rgba(251,191,36,0.3)',
                filter: 'brightness(1.4)'
              }}>
            👏 Kudos Wall
          </h1>
          <p className="text-emerald-200 text-lg">Spread the love! Recognize your amazing teammates! 💚</p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 rounded-xl p-5 border-2 border-yellow-500/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-yellow-200 text-sm mb-1">Kudos Given</div>
                <div className="text-3xl font-bold text-white">847</div>
              </div>
              <ThumbsUp className="w-12 h-12 text-yellow-400 opacity-50" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-900/50 to-red-900/50 rounded-xl p-5 border-2 border-pink-500/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-pink-200 text-sm mb-1">You Received</div>
                <div className="text-3xl font-bold text-white">23</div>
                <div className="text-pink-400 text-xs mt-1">You're loved! 💕</div>
              </div>
              <Heart className="w-12 h-12 text-pink-400 opacity-50" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-5 border-2 border-purple-500/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-purple-200 text-sm mb-1">You Gave</div>
                <div className="text-3xl font-bold text-white">18</div>
                <div className="text-purple-400 text-xs mt-1">Generous spirit! ✨</div>
              </div>
              <Star className="w-12 h-12 text-purple-400 opacity-50" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-xl p-5 border-2 border-green-500/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-green-200 text-sm mb-1">This Month</div>
                <div className="text-3xl font-bold text-white">156</div>
                <div className="text-green-400 text-xs mt-1">Team record! 🎉</div>
              </div>
              <TrendingUp className="w-12 h-12 text-green-400 opacity-50" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left - Give Kudos */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border-2 border-emerald-500/30 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-emerald-400" />
                Give Kudos!
              </h2>

              <div className="space-y-4">
                {/* Select Recipient */}
                <div>
                  <label className="text-emerald-200 font-semibold block mb-2">Who deserves kudos?</label>
                  <select
                    value={selectedRecipient}
                    onChange={(e) => setSelectedRecipient(e.target.value)}
                    className="w-full bg-slate-900 border-2 border-emerald-500/30 rounded-lg px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
                  >
                    <option value="">Select a teammate...</option>
                    <option value="sarah">Sarah Chen</option>
                    <option value="michael">Michael Torres</option>
                    <option value="emily">Emily Rodriguez</option>
                    <option value="david">David Park</option>
                    <option value="lisa">Lisa Anderson</option>
                    <option value="james">James Wilson</option>
                    <option value="maria">Maria Garcia</option>
                  </select>
                </div>

                {/* Select Badge */}
                <div>
                  <label className="text-emerald-200 font-semibold block mb-2">Pick a badge:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {badges.map(badge => (
                      <button
                        key={badge.id}
                        onClick={() => setSelectedBadge(badge.id)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          selectedBadge === badge.id
                            ? `bg-gradient-to-r ${badge.color} border-white text-white scale-105`
                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-emerald-500/50'
                        }`}
                      >
                        <div className="text-2xl mb-1">{badge.emoji}</div>
                        <div className="text-xs font-semibold">{badge.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-emerald-200 font-semibold block mb-2">Your message:</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={randomFunny}
                    className="w-full bg-slate-900 border-2 border-emerald-500/30 rounded-lg px-4 py-3 text-white focus:border-emerald-400 focus:outline-none resize-none"
                    rows={4}
                  />
                </div>

                {/* Send Button */}
                <button className="w-full px-6 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white rounded-lg font-bold transition-all shadow-lg shadow-yellow-500/30 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Kudos! 🎉
                </button>

                <div className="text-center text-slate-400 text-sm">
                  💡 Tip: Be specific! Tell them exactly what they did that was awesome!
                </div>
              </div>
            </div>
          </div>

          {/* Right - Recent Kudos Feed */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-400" />
                Recent Kudos
              </h2>
              <select className="bg-slate-800 border-2 border-emerald-500/30 rounded-lg px-4 py-2 text-white">
                <option>All Kudos</option>
                <option>My Kudos</option>
                <option>My Team</option>
              </select>
            </div>

            <div className="space-y-4">
              {recentKudos.map(kudos => (
                <div key={kudos.id} className={`rounded-xl p-6 border-2 transition-all hover:scale-[1.02] ${
                  kudos.to.includes('You')
                    ? 'bg-gradient-to-r from-emerald-900/60 to-teal-900/60 border-emerald-500/50 ring-2 ring-emerald-400'
                    : 'bg-gradient-to-r from-slate-800/80 to-slate-900/80 border-yellow-500/30'
                }`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {kudos.from.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-bold">{kudos.from}</span>
                        <span className="text-slate-400">→</span>
                        <span className={`font-bold ${kudos.to.includes('You') ? 'text-emerald-300 text-lg' : 'text-white'}`}>
                          {kudos.to}
                          {kudos.to.includes('You') && <span className="ml-2">🎉</span>}
                        </span>
                      </div>
                      <div className="text-slate-400 text-sm">{kudos.time}</div>
                    </div>
                    <div className="text-5xl">{kudos.badge}</div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4 mb-3 border border-yellow-500/20">
                    <div className="text-yellow-400 text-xs font-bold mb-2">{kudos.badgeName.toUpperCase()}</div>
                    <div className="text-white text-lg">{kudos.message}</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all text-white">
                      <Heart className="w-4 h-4" />
                      <span>{kudos.likes}</span>
                    </button>
                    <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all text-white">
                      Add to this!
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <button className="w-full mt-6 px-6 py-3 bg-slate-800 hover:bg-slate-700 border-2 border-emerald-500/30 text-white rounded-lg font-semibold transition-all">
              Load More Awesome Recognition 👇
            </button>
          </div>
        </div>

        {/* Fun Footer */}
        <div className="mt-8 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border-2 border-yellow-500/30 text-center">
          <h3 className="text-2xl font-bold text-yellow-200 mb-2">🌟 Fun Fact!</h3>
          <p className="text-yellow-100 text-lg mb-2">
            Teams that recognize each other are 5x happier at work!
          </p>
          <p className="text-yellow-200 text-sm">
            (We made that stat up, but it sounds right, doesn't it? 😄)
          </p>
        </div>
      </div>
    </div>
  );
}
