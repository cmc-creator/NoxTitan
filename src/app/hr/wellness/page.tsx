'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Activity, Brain, Moon, Apple, TrendingUp, Award, Users, Target, Zap, Calendar, CheckCircle } from 'lucide-react';

export default function WellnessHub() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const wellnessScore = 78;
  const challenges = [
    { id: 1, name: '10,000 Steps Challenge', participants: 142, progress: 68, endDate: '2026-01-31', reward: '$50 Amazon Gift Card', category: 'physical' },
    { id: 2, name: 'Mindful January', participants: 89, progress: 45, endDate: '2026-01-31', reward: 'Wellness Day Off', category: 'mental' },
    { id: 3, name: 'Hydration Hero', participants: 156, progress: 82, endDate: '2026-01-15', reward: 'Premium Water Bottle', category: 'nutrition' },
  ];

  const eapResources = [
    { title: 'Mental Health Counseling', description: '24/7 confidential support', icon: Brain, sessions: 'Unlimited' },
    { title: 'Financial Wellness', description: 'Financial planning & debt counseling', icon: Target, sessions: '6 per year' },
    { title: 'Legal Consultation', description: 'Free legal advice & document review', icon: CheckCircle, sessions: '3 per year' },
    { title: 'Work-Life Balance', description: 'Childcare & eldercare resources', icon: Heart, sessions: 'Unlimited' },
  ];

  const activityLog = [
    { date: '2026-01-05', activity: 'Morning Yoga Class', points: 50, category: 'Fitness' },
    { date: '2026-01-04', activity: 'Biometric Screening Completed', points: 100, category: 'Health' },
    { date: '2026-01-03', activity: 'Lunch & Learn: Stress Management', points: 25, category: 'Education' },
    { date: '2026-01-02', activity: 'Meditation Session', points: 30, category: 'Mental Health' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/hr" className="inline-flex items-center gap-2 text-[#C9A84C] 300 hover:text-[#C9A84C] 100 mb-4 transition-colors">
            ← Back to HR Center
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-[#110F0B] from-REMOVED-200 via-rose-200 to-pink-200 mb-2"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(236,72,153,0.6)',
                    WebkitTextStroke: '1px rgba(236,72,153,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
                Employee Wellness Hub
              </h1>
              <p className="text-[#C9A84C] 200">Holistic health, mental wellness & work-life balance</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-[#C9A84C] 300 mb-1">Your Wellness Score</div>
              <div className="flex items-center gap-3">
                <div className="w-20 h-20 rounded-full border-4 border-pink-500 flex items-center justify-center bg-[#110F0B] 900/50">
                  <span className="text-3xl font-black text-white">{wellnessScore}</span>
                </div>
                <div>
                  <div className="text-[#C9A84C] 200 text-sm">Top 15% of employees</div>
                  <div className="text-white font-semibold">+8 points this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="bg-gradient-to-br from-amber-700/50 to-cyan-900/50 rounded p-4 border-2 border-amber-500/40/30">
            <Activity className="w-8 h-8 text-amber-400 mb-2" />
            <div className="text-stone-300 text-sm mb-1">Activity Points</div>
            <div className="text-3xl font-bold text-white">1,250</div>
            <div className="text-amber-400 text-xs mt-1">+205 this week</div>
          </div>
          <div className="bg-[#110F0B] from-REMOVED-900/50 to-rose-900/50 rounded p-4 border-2 border-pink-500/30">
            <Heart className="w-8 h-8 text-[#C9A84C] 400 mb-2" />
            <div className="text-stone-300 text-sm mb-1">Health Score</div>
            <div className="text-3xl font-bold text-white">82</div>
            <div className="text-[#C9A84C] 400 text-xs mt-1">Excellent</div>
          </div>
          <div className="bg-gradient-to-br from-stone-900/50 to-amber-800/50 rounded p-4 border-2 border-amber-500/40/30">
            <Brain className="w-8 h-8 text-amber-400 mb-2" />
            <div className="text-stone-300 text-sm mb-1">Mental Wellness</div>
            <div className="text-3xl font-bold text-white">75</div>
            <div className="text-amber-400 text-xs mt-1">Good</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded p-4 border-2 border-emerald-500/30">
            <Apple className="w-8 h-8 text-emerald-400 mb-2" />
            <div className="text-stone-300 text-sm mb-1">Nutrition</div>
            <div className="text-3xl font-bold text-white">68</div>
            <div className="text-emerald-400 text-xs mt-1">Improving</div>
          </div>
          <div className="bg-gradient-to-br from-amber-700/50 to-amber-800/50 rounded p-4 border-2 border-amber-500/40/30">
            <Moon className="w-8 h-8 text-amber-400 mb-2" />
            <div className="text-stone-300 text-sm mb-1">Sleep Quality</div>
            <div className="text-3xl font-bold text-white">7.2h</div>
            <div className="text-amber-400 text-xs mt-1">Avg per night</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-stone-900/50 p-2 rounded-lg">
          {[
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'challenges', label: 'Challenges' },
            { id: 'eap', label: 'EAP Resources' },
            { id: 'telemedicine', label: 'Telemedicine' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === tab.id ? 'bg-[#110F0B] 600 text-white' : 'text-stone-300 hover:bg-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Activity Log */}
            <div className="bg-stone-900/50 rounded p-6 border-2 border-pink-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-3">
                {activityLog.map((log, idx) => (
                  <div key={idx} className="bg-[#110F0B] from-REMOVED-900/30 to-amber-900/30 rounded-lg p-4 border border-pink-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Zap className="w-6 h-6 text-yellow-400" />
                      <div>
                        <div className="text-white font-semibold">{log.activity}</div>
                        <div className="text-sm text-stone-400">{log.date} • {log.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-400">+{log.points}</div>
                      <div className="text-xs text-stone-400">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* HSA Info */}
              <div className="bg-stone-900/50 rounded p-6 border-2 border-emerald-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Health Savings Account</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-stone-400 mb-1">Current Balance</div>
                    <div className="text-4xl font-bold text-emerald-400">$2,450</div>
                  </div>
                  <div>
                    <div className="text-sm text-stone-400 mb-1">2026 Contributions</div>
                    <div className="text-2xl font-bold text-white">$850</div>
                  </div>
                  <div>
                    <div className="text-sm text-stone-400 mb-1">Employer Match</div>
                    <div className="text-xl font-bold text-amber-400">$500 annually</div>
                  </div>
                  <button className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold">
                    Manage HSA
                  </button>
                </div>
              </div>

              {/* Fitness Tracking */}
              <div className="bg-stone-900/50 rounded p-6 border-2 border-amber-500/40/30">
                <h3 className="text-xl font-bold text-white mb-4">This Week's Activity</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-stone-300">Steps</span>
                      <span className="text-white font-bold">42,380 / 70,000</span>
                    </div>
                    <div className="w-full bg-stone-900 rounded-full h-3">
                      <div className="bg-amber-600 h-3 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-stone-300">Active Minutes</span>
                      <span className="text-white font-bold">180 / 300</span>
                    </div>
                    <div className="w-full bg-stone-900 rounded-full h-3">
                      <div className="bg-amber-500 h-3 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-stone-300">Workouts</span>
                      <span className="text-white font-bold">4 / 5</span>
                    </div>
                    <div className="w-full bg-stone-900 rounded-full h-3">
                      <div className="bg-[#110F0B] 500 h-3 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <div className="bg-stone-900/50 rounded p-6 border-2 border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">Active Wellness Challenges</h2>
            <div className="space-y-4">
              {challenges.map(challenge => (
                <div key={challenge.id} className="bg-gradient-to-r from-orange-900/30 to-amber-900/30 rounded-lg p-6 border-2 border-orange-500/30">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{challenge.name}</h3>
                        <Award className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div className="flex items-center gap-4 text-sm text-stone-300 mb-3">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {challenge.participants} participants
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Ends {challenge.endDate}
                        </span>
                      </div>
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-stone-300">Your Progress</span>
                          <span className="text-white font-bold">{challenge.progress}%</span>
                        </div>
                        <div className="w-full bg-stone-900 rounded-full h-4">
                          <div className={`h-4 rounded-full ${
                            challenge.progress >= 80 ? 'bg-emerald-500' :
                            challenge.progress >= 50 ? 'bg-amber-600' : 'bg-orange-500'
                          }`} style={{width: `${challenge.progress}%`}}></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-stone-400">Reward:</span>
                        <span className="px-3 py-1 bg-yellow-600 text-white rounded-full text-sm font-bold">
                          {challenge.reward}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full px-4 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-bold transition-all">
                    View Challenge Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EAP Resources Tab */}
        {activeTab === 'eap' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-stone-900/30 to-pink-900/30 rounded p-6 border-2 border-amber-500/40/30">
              <h2 className="text-2xl font-bold text-white mb-3">Employee Assistance Program (EAP)</h2>
              <p className="text-amber-100/70 mb-4">
                Confidential support for you and your family. All services are free and available 24/7.
              </p>
              <div className="flex items-center gap-4 text-white">
                <div className="px-4 py-2 bg-amber-600 rounded-lg font-bold">
                  📞 1-800-EAP-HELP
                </div>
                <div className="text-sm text-amber-100/70">
                  Available 24/7 • Completely Confidential
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {eapResources.map((resource, idx) => (
                <div key={idx} className="bg-stone-900/50 rounded p-6 border-2 border-pink-500/30 hover:border-pink-400 transition-all group">
                  <resource.icon className="w-12 h-12 text-[#C9A84C] 400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-stone-300 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#C9A84C] 300">{resource.sessions}</span>
                    <button className="px-4 py-2 bg-[#110F0B] 600 hover:bg-[#110F0B] 500 text-white rounded-lg font-semibold text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Telemedicine Tab */}
        {activeTab === 'telemedicine' && (
          <div className="bg-stone-900/50 rounded p-6 border-2 border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">Telemedicine Services</h2>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { name: 'Primary Care', wait: '< 5 min', cost: '$0 copay', available: true },
                { name: 'Mental Health', wait: '< 15 min', cost: '$0 copay', available: true },
                { name: 'Dermatology', wait: '< 30 min', cost: '$20 copay', available: true },
              ].map((service, idx) => (
                <div key={idx} className="bg-gradient-to-br from-cyan-900/50 to-amber-800/50 rounded-lg p-5 border border-cyan-500/30">
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-stone-300">
                      <span className="text-stone-400">Wait time:</span> <span className="text-emerald-400 font-bold">{service.wait}</span>
                    </div>
                    <div className="text-sm text-stone-300">
                      <span className="text-stone-400">Cost:</span> <span className="text-white font-bold">{service.cost}</span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold">
                    Start Visit
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-[#110F0B] 900/30 rounded-lg p-6 border border-amber-500/40/30">
              <h3 className="text-xl font-bold text-white mb-4">Recent Visits</h3>
              <div className="space-y-3">
                {[
                  { date: '2025-12-15', type: 'Primary Care', doctor: 'Dr. Sarah Williams', reason: 'Annual Checkup' },
                  { date: '2025-11-08', type: 'Mental Health', doctor: 'Dr. Michael Chen', reason: 'Stress Management' },
                ].map((visit, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-stone-900 rounded-lg">
                    <div>
                      <div className="text-white font-semibold">{visit.type}</div>
                      <div className="text-sm text-stone-400">{visit.doctor} • {visit.reason}</div>
                    </div>
                    <div className="text-sm text-stone-400">{visit.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


