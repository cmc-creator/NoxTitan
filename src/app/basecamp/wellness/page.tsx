'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mountain, Heart, Activity, Brain, Sparkles, Trophy, Target, TrendingUp, Calendar, Phone, Video, Users, Coffee, Smile } from 'lucide-react';

export default function WellnessHub() {
  const [wellnessScore] = useState(82);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Top Navigation */}
      <nav className="bg-stone-950/80 backdrop-blur-xl border-b-2 border-emerald-500/30 sticky top-0 z-50">
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
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-[#110F0B] from-REMOVED-200 via-red-200 to-pink-200 mb-2"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(244,63,94,0.6)',
                WebkitTextStroke: '1px rgba(244,63,94,0.3)',
                filter: 'brightness(1.4)'
              }}>
            💚 Wellness Hub
          </h1>
          <p className="text-emerald-200 text-lg">Your health and happiness are our priority!</p>
        </div>

        {/* Wellness Score Card */}
        <div className="bg-[#110F0B] from-REMOVED-900/50 to-red-900/50 rounded p-8 border-2 border-pink-500/30 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Heart className="w-64 h-64 text-white" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Your Wellness Score</h2>
                <p className="text-[#C9A84C] was-pink-200">You're doing great! Keep it up! 🌟</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-white mb-2">{wellnessScore}</div>
                <div className="text-[#C9A84C] was-pink-200 font-semibold">out of 100</div>
              </div>
            </div>
            <div className="w-full bg-stone-900 rounded-full h-4">
              <div
                className="bg-[#110F0B] from-REMOVED-500 to-red-500 h-4 rounded-full transition-all"
                style={{ width: `${wellnessScore}%` }}
              />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded p-5 border-2 border-orange-500/30">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-8 h-8 text-orange-400" />
              <span className="text-[#C9A84C] was-green-400 text-sm font-bold">↑ 12%</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">8,547</div>
            <div className="text-orange-200 text-sm">Steps Today</div>
          </div>
          <div className="bg-gradient-to-br from-amber-700/50 to-cyan-900/50 rounded p-5 border-2 border-amber-500/40/30">
            <div className="flex items-center justify-between mb-2">
              <Brain className="w-8 h-8 text-amber-400" />
              <span className="text-[#C9A84C] was-green-400 text-sm font-bold">Great!</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">7.5 hrs</div>
            <div className="text-[#C9A84C] was-blue-200 text-sm">Sleep Last Night</div>
          </div>
          <div className="bg-gradient-to-br from-stone-900/50 to-pink-900/50 rounded p-5 border-2 border-amber-500/40/30">
            <div className="flex items-center justify-between mb-2">
              <Smile className="w-8 h-8 text-amber-400" />
              <span className="text-[#C9A84C] was-green-400 text-sm font-bold">Positive</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">85%</div>
            <div className="text-amber-100/70 text-sm">Mood Score</div>
          </div>
          <div className="bg-[#110F0B] from-REMOVED-900/50 to-emerald-900/50 rounded p-5 border-2 border-green-500/30">
            <div className="flex items-center justify-between mb-2">
              <Coffee className="w-8 h-8 text-[#C9A84C] was-green-400" />
              <span className="text-yellow-400 text-sm font-bold">Perfect</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">3</div>
            <div className="text-[#C9A84C] was-green-200 text-sm">Break Time!</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* EAP - Employee Assistance Program */}
            <div className="lux-card/80 rounded p-6 border-2 border-amber-500/40/30">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-amber-400" />
                <div>
                  <h2 className="text-2xl font-bold text-white">Employee Assistance Program (EAP)</h2>
                  <p className="text-stone-300">Confidential support 24/7 - we're here for you!</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-amber-700/40 to-cyan-900/40 rounded-lg p-4 border border-amber-500/40/30">
                  <div className="text-amber-400 font-semibold mb-2">Mental Health Counseling</div>
                  <p className="text-stone-300 text-sm mb-3">Free, confidential sessions with licensed therapists</p>
                  <div className="text-amber-400 text-sm font-bold">📞 1-800-WELLNESS</div>
                </div>
                <div className="bg-gradient-to-r from-stone-900/40 to-pink-900/40 rounded-lg p-4 border border-amber-500/40/30">
                  <div className="text-amber-200 font-semibold mb-2">Financial Counseling</div>
                  <p className="text-stone-300 text-sm mb-3">Get expert advice on budgeting, debt, and planning</p>
                  <div className="text-amber-400 text-sm font-bold">Available 24/7</div>
                </div>
                <div className="bg-[#110F0B] from-REMOVED-900/40 to-emerald-900/40 rounded-lg p-4 border border-green-500/30">
                  <div className="text-[#C9A84C] was-green-300 font-semibold mb-2">Legal Support</div>
                  <p className="text-stone-300 text-sm mb-3">Free consultations on legal matters</p>
                  <div className="text-[#C9A84C] was-green-400 text-sm font-bold">30 mins free</div>
                </div>
                <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 rounded-lg p-4 border border-orange-500/30">
                  <div className="text-orange-300 font-semibold mb-2">Work-Life Balance</div>
                  <p className="text-stone-300 text-sm mb-3">Resources for childcare, eldercare, and more</p>
                  <div className="text-orange-400 text-sm font-bold">Always here</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-700 to-cyan-600 hover:from-amber-700 hover:to-cyan-500 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
                <button className="flex-1 px-4 py-3 bg-stone-900 hover:bg-stone-600 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                  <Video className="w-5 h-5" />
                  Virtual Session
                </button>
              </div>
            </div>

            {/* Wellness Challenges */}
            <div className="lux-card/80 rounded p-6 border-2 border-amber-500/40/30">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  Active Challenges
                </h2>
                <button className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-semibold text-sm">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-[#110F0B] from-REMOVED-900/40 to-emerald-900/40 rounded-lg p-4 border border-green-500/30">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-lg font-bold text-white mb-1">🚶 10,000 Steps Challenge</div>
                      <div className="text-[#C9A84C] was-green-300 text-sm">Hit 10k steps daily for a week</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">5/7</div>
                      <div className="text-[#C9A84C] was-green-400 text-xs font-semibold">days done!</div>
                    </div>
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-2 mb-2">
                    <div className="bg-[#110F0B] from-REMOVED-500 to-emerald-500 h-2 rounded-full" style={{ width: '71%' }} />
                  </div>
                  <div className="text-emerald-400 text-sm">🎁 Reward: $25 Amazon Gift Card</div>
                </div>

                <div className="bg-gradient-to-r from-amber-700/40 to-cyan-900/40 rounded-lg p-4 border border-amber-500/40/30">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-lg font-bold text-white mb-1">💧 Hydration Hero</div>
                      <div className="text-amber-400 text-sm">Drink 8 glasses of water daily</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">6/8</div>
                      <div className="text-amber-400 text-xs font-semibold">today</div>
                    </div>
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-2 mb-2">
                    <div className="bg-gradient-to-r from-amber-700 to-cyan-500 h-2 rounded-full" style={{ width: '75%' }} />
                  </div>
                  <div className="text-cyan-400 text-sm">🎁 Reward: Reusable Water Bottle</div>
                </div>

                <div className="bg-gradient-to-r from-stone-900/40 to-pink-900/40 rounded-lg p-4 border border-amber-500/40/30">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-lg font-bold text-white mb-1">🧘 Mindful Moments</div>
                      <div className="text-amber-200 text-sm">5 minutes of meditation daily</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">3/5</div>
                      <div className="text-amber-400 text-xs font-semibold">this week</div>
                    </div>
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-2 mb-2">
                    <div className="bg-gradient-to-r from-stone-900 to-pink-500 h-2 rounded-full" style={{ width: '60%' }} />
                  </div>
                  <div className="text-[#C9A84C] was-pink-400 text-sm">🎁 Reward: Meditation App Premium</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Gym Membership */}
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded p-6 border-2 border-orange-500/30">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="text-xl font-bold text-white mb-2">Gym Membership</h3>
              <p className="text-orange-200 text-sm mb-4">Company-paid membership at any major gym!</p>
              <div className="bg-stone-950/50 rounded-lg p-3 mb-4">
                <div className="text-stone-400 text-xs mb-1">Your Gym</div>
                <div className="text-white font-semibold">FitLife Fitness Center</div>
              </div>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white rounded-lg font-semibold transition-all">
                View Membership
              </button>
            </div>

            {/* Wellness Resources */}
            <div className="lux-card/80 rounded p-6 border-2 border-emerald-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Quick Resources
              </h3>
              <div className="space-y-3">
                <button className="w-full p-3 bg-stone-950/50 hover:bg-stone-950 rounded-lg transition-all text-left border border-emerald-500/20">
                  <div className="text-white font-semibold text-sm flex items-center justify-between">
                    <span>🧘 Meditation Apps</span>
                    <span className="text-emerald-400">→</span>
                  </div>
                </button>
                <button className="w-full p-3 bg-stone-950/50 hover:bg-stone-950 rounded-lg transition-all text-left border border-emerald-500/20">
                  <div className="text-white font-semibold text-sm flex items-center justify-between">
                    <span>🏃 Fitness Plans</span>
                    <span className="text-emerald-400">→</span>
                  </div>
                </button>
                <button className="w-full p-3 bg-stone-950/50 hover:bg-stone-950 rounded-lg transition-all text-left border border-emerald-500/20">
                  <div className="text-white font-semibold text-sm flex items-center justify-between">
                    <span>🥗 Nutrition Guide</span>
                    <span className="text-emerald-400">→</span>
                  </div>
                </button>
                <button className="w-full p-3 bg-stone-950/50 hover:bg-stone-950 rounded-lg transition-all text-left border border-emerald-500/20">
                  <div className="text-white font-semibold text-sm flex items-center justify-between">
                    <span>😴 Sleep Tips</span>
                    <span className="text-emerald-400">→</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Upcoming Wellness Events */}
            <div className="bg-gradient-to-br from-stone-900/50 to-pink-900/50 rounded p-6 border-2 border-amber-500/40/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-400" />
                Upcoming Events
              </h3>
              <div className="space-y-3">
                <div className="bg-stone-950/50 rounded-lg p-3 border border-amber-500/40/20">
                  <div className="text-amber-200 font-semibold text-sm mb-1">Yoga Session</div>
                  <div className="text-stone-400 text-xs">Wednesday, 12:00 PM</div>
                </div>
                <div className="bg-stone-950/50 rounded-lg p-3 border border-amber-500/40/20">
                  <div className="text-amber-200 font-semibold text-sm mb-1">Mental Health Workshop</div>
                  <div className="text-stone-400 text-xs">Friday, 2:00 PM</div>
                </div>
                <div className="bg-stone-950/50 rounded-lg p-3 border border-amber-500/40/20">
                  <div className="text-amber-200 font-semibold text-sm mb-1">Team Hiking Trip</div>
                  <div className="text-stone-400 text-xs">Saturday, 9:00 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Encouragement Banner */}
        <div className="mt-8 bg-[#110F0B] from-REMOVED-900/30 to-red-900/30 rounded p-6 border-2 border-pink-500/30 text-center">
          <h3 className="text-2xl font-bold text-[#C9A84C] was-pink-200 mb-2">💖 You Matter!</h3>
          <p className="text-[#C9A84C] was-pink-100 text-lg">Taking care of yourself isn't selfish - it's essential. We're proud of you for being here!</p>
        </div>
      </div>
    </div>
  );
}


