'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mountain, Shield, Heart, DollarSign, Eye, Users, Car, Umbrella, Stethoscope, PiggyBank, LifeBuoy, ChevronRight, Download, ExternalLink } from 'lucide-react';

export default function Benefits() {
  const [selectedPlan, setSelectedPlan] = useState('medical');

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
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 mb-2"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(168,85,247,0.6)',
                WebkitTextStroke: '1px rgba(168,85,247,0.3)',
                filter: 'brightness(1.4)'
              }}>
            Your Benefits
          </h1>
          <p className="text-emerald-200 text-lg">We've got you covered - because you're worth it! 💚</p>
        </div>

        {/* Benefits Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-6 border-2 border-blue-500/30">
            <Shield className="w-12 h-12 text-blue-400 mb-3" />
            <div className="text-2xl font-bold text-white mb-1">Full Coverage</div>
            <div className="text-blue-200">Medical, Dental, Vision</div>
          </div>
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-xl p-6 border-2 border-green-500/30">
            <PiggyBank className="w-12 h-12 text-green-400 mb-3" />
            <div className="text-2xl font-bold text-white mb-1">401(k) Match</div>
            <div className="text-green-200">Up to 6% company match</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-6 border-2 border-purple-500/30">
            <Heart className="w-12 h-12 text-pink-400 mb-3" />
            <div className="text-2xl font-bold text-white mb-1">Wellness</div>
            <div className="text-purple-200">Gym membership & EAP</div>
          </div>
        </div>

        {/* Main Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 rounded-xl p-4 border-2 border-emerald-500/30 sticky top-24">
              <h3 className="text-white font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedPlan('medical')}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                    selectedPlan === 'medical'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-slate-900/50 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Stethoscope className="w-5 h-5" />
                  <span className="font-semibold">Medical Insurance</span>
                </button>
                <button
                  onClick={() => setSelectedPlan('dental')}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                    selectedPlan === 'dental'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-slate-900/50 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Eye className="w-5 h-5" />
                  <span className="font-semibold">Dental & Vision</span>
                </button>
                <button
                  onClick={() => setSelectedPlan('retirement')}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                    selectedPlan === 'retirement'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-slate-900/50 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <PiggyBank className="w-5 h-5" />
                  <span className="font-semibold">401(k) Retirement</span>
                </button>
                <button
                  onClick={() => setSelectedPlan('life')}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                    selectedPlan === 'life'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-slate-900/50 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <LifeBuoy className="w-5 h-5" />
                  <span className="font-semibold">Life & Disability</span>
                </button>
                <button
                  onClick={() => setSelectedPlan('other')}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                    selectedPlan === 'other'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-slate-900/50 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Umbrella className="w-5 h-5" />
                  <span className="font-semibold">Additional Benefits</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Details */}
          <div className="lg:col-span-2">
            {selectedPlan === 'medical' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border-2 border-blue-500/30">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Medical Insurance</h2>
                      <p className="text-slate-300">Comprehensive health coverage for you and your family</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Details
                    </button>
                  </div>

                  {/* Current Plan */}
                  <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-lg p-5 border border-blue-500/30 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-blue-300 text-sm mb-1">Your Current Plan</div>
                        <div className="text-2xl font-bold text-white">Gold PPO Plan</div>
                      </div>
                      <div className="px-4 py-2 bg-green-600 text-white rounded-lg font-bold">
                        ACTIVE
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-slate-400 text-sm">Monthly Premium</div>
                        <div className="text-white font-bold text-lg">$89</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">Deductible</div>
                        <div className="text-white font-bold text-lg">$1,000</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">Out-of-Pocket Max</div>
                        <div className="text-white font-bold text-lg">$5,000</div>
                      </div>
                    </div>
                  </div>

                  {/* Coverage Details */}
                  <h3 className="text-lg font-bold text-white mb-3">What's Covered:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span>Doctor visits - $20 copay</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span>Specialist visits - $40 copay</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span>Prescription drugs - $10/$30/$50 copay</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span>Emergency room - $150 copay</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span>Preventive care - 100% covered</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span>Mental health services - Same as primary care</span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg font-semibold transition-all">
                      Find a Doctor
                    </button>
                    <button className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                      View ID Card <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedPlan === 'retirement' && (
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border-2 border-green-500/30">
                <h2 className="text-2xl font-bold text-white mb-4">401(k) Retirement Plan</h2>
                <p className="text-slate-300 mb-6">Build your future with our generous company match!</p>

                <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-lg p-6 border border-green-500/30 mb-6">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-slate-400 text-sm mb-1">Your Balance</div>
                      <div className="text-3xl font-bold text-white">$47,823</div>
                      <div className="text-green-400 text-sm mt-1">↑ $2,456 this year</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm mb-1">Company Match</div>
                      <div className="text-3xl font-bold text-white">6%</div>
                      <div className="text-emerald-400 text-sm mt-1">You're maxing it out! 🎉</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-green-500/20">
                    <div className="text-center">
                      <div className="text-slate-400 text-sm">Your Contribution</div>
                      <div className="text-white font-bold text-lg">$385/mo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-400 text-sm">Company Match</div>
                      <div className="text-white font-bold text-lg">$385/mo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-400 text-sm">Total Monthly</div>
                      <div className="text-green-400 font-bold text-lg">$770</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-bold text-white">Investment Options:</h3>
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white font-semibold">Target Date 2055 Fund</div>
                      <div className="text-green-400 font-bold">+12.8%</div>
                    </div>
                    <div className="text-slate-400 text-sm">70% allocation</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white font-semibold">S&P 500 Index Fund</div>
                      <div className="text-green-400 font-bold">+14.2%</div>
                    </div>
                    <div className="text-slate-400 text-sm">20% allocation</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white font-semibold">Bond Index Fund</div>
                      <div className="text-blue-400 font-bold">+4.5%</div>
                    </div>
                    <div className="text-slate-400 text-sm">10% allocation</div>
                  </div>
                </div>

                <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg font-semibold transition-all">
                  Manage Your 401(k)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border-2 border-purple-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-slate-900/50 hover:bg-slate-900 p-4 rounded-lg transition-all text-left border border-purple-500/20">
              <div className="text-2xl mb-2">📄</div>
              <div className="text-white font-semibold text-sm">View All Documents</div>
            </button>
            <button className="bg-slate-900/50 hover:bg-slate-900 p-4 rounded-lg transition-all text-left border border-purple-500/20">
              <div className="text-2xl mb-2">🏥</div>
              <div className="text-white font-semibold text-sm">File a Claim</div>
            </button>
            <button className="bg-slate-900/50 hover:bg-slate-900 p-4 rounded-lg transition-all text-left border border-purple-500/20">
              <div className="text-2xl mb-2">💬</div>
              <div className="text-white font-semibold text-sm">Contact HR</div>
            </button>
            <button className="bg-slate-900/50 hover:bg-slate-900 p-4 rounded-lg transition-all text-left border border-purple-500/20">
              <div className="text-2xl mb-2">📞</div>
              <div className="text-white font-semibold text-sm">Benefits Support</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
