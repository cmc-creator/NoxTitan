'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mountain, Home, Calendar, Users, MessageSquare, FileText, TrendingUp, Award, Heart, Lightbulb, BookOpen, DollarSign, ShieldCheck, Bell, Settings, LogOut, ChevronRight, Star, Zap, Coffee, Flame, Target, Gift, PartyPopper, Gamepad2, ThumbsUp } from 'lucide-react';

export default function Basecamp() {
  const [userName] = useState('Alex');
  const [showNotifications, setShowNotifications] = useState(false);

  const encouragements = [
    "You're crushing it today! 🔥",
    "Your positive energy is contagious! ✨",
    "You make this place better! 💪",
    "Legend status achieved! 🏆",
    "You're the MVP! 🌟",
    "Absolutely stellar work! ⭐"
  ];

  const dadJokes = [
    "Why don't scientists trust atoms? Because they make up everything! 😄",
    "I told my wife she was drawing her eyebrows too high. She looked surprised! 😂",
    "What do you call a fake noodle? An impasta! 🍝",
    "Why did the scarecrow win an award? He was outstanding in his field! 🌾",
    "I'm reading a book about anti-gravity. It's impossible to put down! 📚",
    "Why don't eggs tell jokes? They'd crack each other up! 🥚",
    "What did the ocean say to the beach? Nothing, it just waved! 🌊",
    "Why did the coffee file a police report? It got mugged! ☕",
    "I used to hate facial hair, but then it grew on me! 🧔",
    "What do you call a bear with no teeth? A gummy bear! 🐻"
  ];

  const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
  const randomDadJoke = dadJokes[Math.floor(Math.random() * dadJokes.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Top Navigation Bar */}
      <nav className="bg-slate-900/80 backdrop-blur-xl border-b-2 border-emerald-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Mountain className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">
                Your Basecamp
              </span>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all"
                >
                  <Bell className="w-6 h-6 text-emerald-400" />
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>

              {/* User Menu */}
              <div className="flex items-center gap-3 bg-slate-800 rounded-lg px-4 py-2">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  {userName.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold">{userName}</div>
                  <div className="text-emerald-400 text-xs">Awesome Human</div>
                </div>
              </div>

              <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all">
                <Settings className="w-6 h-6 text-emerald-400" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 rounded-2xl p-8 mb-6 border-2 border-emerald-400/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Mountain className="w-64 h-64 text-white" />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl font-black text-white mb-2">
              Welcome back, {userName}! 🏕️
            </h1>
            <p className="text-emerald-100 text-xl font-semibold mb-4">
              {randomEncouragement}
            </p>
            <div className="flex items-center gap-2 text-white/90 mb-3">
              <Coffee className="w-5 h-5" />
              <span>Monday, January 5, 2026 • Perfect day to conquer new peaks!</span>
            </div>
            {/* Dad Joke of the Day */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-start gap-3">
                <div className="text-3xl">😂</div>
                <div>
                  <div className="text-white/80 text-xs font-semibold mb-1">DAD JOKE OF THE DAY:</div>
                  <div className="text-white font-medium">{randomDadJoke}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-4 border-2 border-purple-500/30">
            <div className="flex items-center justify-between mb-2">
              <Flame className="w-8 h-8 text-orange-400" />
              <span className="text-2xl font-bold text-white">12</span>
            </div>
            <div className="text-purple-200 font-semibold">Day Streak!</div>
            <div className="text-xs text-purple-300 mt-1">You're on fire! 🔥</div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-4 border-2 border-blue-500/30">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">847</span>
            </div>
            <div className="text-blue-200 font-semibold">Kudos Points</div>
            <div className="text-xs text-blue-300 mt-1">Top 10%! ⭐</div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-xl p-4 border-2 border-emerald-500/30">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-bold text-white">8/10</span>
            </div>
            <div className="text-emerald-200 font-semibold">Goals Complete</div>
            <div className="text-xs text-emerald-300 mt-1">Almost there! 💪</div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-xl p-4 border-2 border-orange-500/30">
            <div className="flex items-center justify-between mb-2">
              <Gift className="w-8 h-8 text-pink-400" />
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <div className="text-orange-200 font-semibold">Rewards Available</div>
            <div className="text-xs text-orange-300 mt-1">Claim them! 🎁</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions Hub */}
            <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-emerald-500/30">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Link href="/timeclock" className="bg-gradient-to-br from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg p-4 text-center transition-all shadow-lg group">
                  <Calendar className="w-8 h-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-semibold text-sm">Clock In/Out</div>
                </Link>
                <Link href="/time-off" className="bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg p-4 text-center transition-all shadow-lg group">
                  <Coffee className="w-8 h-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-semibold text-sm">Request Time Off</div>
                </Link>
                <Link href="/basecamp/games" className="bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg p-4 text-center transition-all shadow-lg group relative">
                  <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">FUN!</div>
                  <Gamepad2 className="w-8 h-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-semibold text-sm">Play Games</div>
                </Link>
                <Link href="/basecamp/kudos" className="bg-gradient-to-br from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 rounded-lg p-4 text-center transition-all shadow-lg group">
                  <ThumbsUp className="w-8 h-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-semibold text-sm">Give Kudos</div>
                </Link>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-emerald-500/30">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-emerald-400" />
                Today's Schedule
              </h2>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-lg p-4 border border-emerald-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold text-lg">Morning Shift</div>
                      <div className="text-emerald-300 text-sm">8:00 AM - 4:00 PM</div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-300 text-sm">Department: Operations</div>
                      <div className="text-emerald-400 text-sm font-semibold">In 2 hours</div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">Team Standup</div>
                      <div className="text-slate-400 text-sm">9:30 AM - 10:00 AM</div>
                    </div>
                    <div className="text-blue-400 text-sm font-semibold">Optional</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Idea Board Preview */}
            <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-emerald-500/30">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  Idea Board
                </h2>
                <Link href="/basecamp/ideas" className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      MK
                    </div>
                    <div>
                      <div className="text-white font-semibold">Maria K.</div>
                      <div className="text-purple-300 text-xs">2 hours ago</div>
                    </div>
                  </div>
                  <div className="text-purple-100 mb-2">"What if we had themed lunch Fridays? 🌮🍕🍜"</div>
                  <div className="flex items-center gap-3 text-sm">
                    <button className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                      <Star className="w-4 h-4" /> 24 votes
                    </button>
                    <button className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" /> 8 comments
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Everything Else */}
          <div className="space-y-6">
            {/* Recognition Wall */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border-2 border-yellow-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Kudos Wall
              </h2>
              <div className="space-y-3">
                <div className="bg-slate-900/50 rounded-lg p-3 border border-yellow-500/20">
                  <div className="text-yellow-300 text-sm mb-1">Sarah gave you kudos!</div>
                  <div className="text-slate-300 text-xs">"Amazing teamwork on the project! 🌟"</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-yellow-500/20">
                  <div className="text-yellow-300 text-sm mb-1">Team achievement!</div>
                  <div className="text-slate-300 text-xs">"100% on-time delivery this month! 🎉"</div>
                </div>
              </div>
            </div>

            {/* All Features Hub */}
            <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-emerald-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Mountain className="w-5 h-5 text-emerald-400" />
                Basecamp Features
              </h2>
              <div className="space-y-2">
                <Link href="/basecamp/profile" className="flex items-center justify-between p-3 bg-slate-900/50 hover:bg-slate-900 rounded-lg transition-all group">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">My Profile</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link href="/basecamp/benefits" className="flex items-center justify-between p-3 bg-slate-900/50 hover:bg-slate-900 rounded-lg transition-all group">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold">Benefits</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link href="/basecamp/learning" className="flex items-center justify-between p-3 bg-slate-900/50 hover:bg-slate-900 rounded-lg transition-all group">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-semibold">Learning Hub</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link href="/basecamp/resources" className="flex items-center justify-between p-3 bg-slate-900/50 hover:bg-slate-900 rounded-lg transition-all group">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold">Resources</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link href="/basecamp/team" className="flex items-center justify-between p-3 bg-slate-900/50 hover:bg-slate-900 rounded-lg transition-all group">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-pink-400" />
                    <span className="text-white font-semibold">Team Directory</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link href="/basecamp/wellness" className="flex items-center justify-between p-3 bg-slate-900/50 hover:bg-slate-900 rounded-lg transition-all group">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-400" />
                    <span className="text-white font-semibold">Wellness Hub</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link href="/merch-store" className="flex items-center justify-between p-3 bg-slate-900/50 hover:bg-slate-900 rounded-lg transition-all group">
                  <div className="flex items-center gap-3">
                    <PartyPopper className="w-5 h-5 text-orange-400" />
                    <span className="text-white font-semibold">Merch Store</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
              </div>
            </div>

            {/* Company Announcements */}
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border-2 border-blue-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5 text-blue-400" />
                Announcements
              </h2>
              <div className="space-y-3">
                <div className="bg-slate-900/50 rounded-lg p-3 border border-blue-500/20">
                  <div className="text-blue-300 text-sm font-semibold mb-1">🎉 Team Outing Friday!</div>
                  <div className="text-slate-300 text-xs">Join us for bowling at 6 PM. Pizza's on us!</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-blue-500/20">
                  <div className="text-blue-300 text-sm font-semibold mb-1">📚 New Training Available</div>
                  <div className="text-slate-300 text-xs">Leadership Development course now live!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
