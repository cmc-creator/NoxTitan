'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Users, Plus, Search, Filter, TrendingUp, Clock, DollarSign, Target, FileText, Calendar, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

export default function RecruitingATS() {
  const [activeTab, setActiveTab] = useState('pipeline');

  const candidates = [
    { id: 1, name: 'Jessica Chen', position: 'RN - ICU', stage: 'Interview', email: 'jchen@email.com', phone: '555-0123', rating: 4.5, daysInStage: 3, source: 'LinkedIn', salary: '$85,000', status: 'active' },
    { id: 2, name: 'Michael Torres', position: 'Radiology Tech', stage: 'Offer', email: 'mtorres@email.com', phone: '555-0124', rating: 4.8, daysInStage: 1, source: 'Indeed', salary: '$72,000', status: 'active' },
    { id: 3, name: 'Sarah Williams', position: 'Lab Technician', stage: 'Screening', email: 'swilliams@email.com', phone: '555-0125', rating: 4.2, daysInStage: 5, source: 'Referral', salary: '$65,000', status: 'active' },
    { id: 4, name: 'David Park', position: 'Pharmacist', stage: 'Interview', email: 'dpark@email.com', phone: '555-0126', rating: 4.6, daysInStage: 2, source: 'Career Site', salary: '$125,000', status: 'active' },
    { id: 5, name: 'Emily Rodriguez', position: 'RN - ER', stage: 'New', email: 'erodriguez@email.com', phone: '555-0127', rating: 4.3, daysInStage: 1, source: 'ZipRecruiter', salary: '$82,000', status: 'active' },
  ];

  const openPositions = [
    { id: 1, title: 'Registered Nurse - ICU', department: 'Critical Care', openings: 3, applicants: 24, status: 'active', priority: 'high', datePosted: '2026-01-01', daysOpen: 4 },
    { id: 2, title: 'Radiology Technician', department: 'Imaging', openings: 2, applicants: 18, status: 'active', priority: 'medium', datePosted: '2025-12-28', daysOpen: 8 },
    { id: 3, title: 'Lab Technician', department: 'Laboratory', openings: 1, applicants: 31, status: 'active', priority: 'low', datePosted: '2025-12-20', daysOpen: 16 },
    { id: 4, title: 'Pharmacist', department: 'Pharmacy', openings: 1, applicants: 12, status: 'active', priority: 'high', datePosted: '2026-01-03', daysOpen: 2 },
  ];

  const stages = ['New', 'Screening', 'Interview', 'Offer', 'Hired', 'Rejected'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/hr" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 mb-4 transition-colors">
            ← Back to HR Center
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 mb-2"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(59,130,246,0.6)',
                    WebkitTextStroke: '1px rgba(59,130,246,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
                Applicant Tracking System
              </h1>
              <p className="text-blue-200">Full-cycle recruiting from job posting to offer acceptance</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-bold transition-all shadow-lg flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Post New Job
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-4 border-2 border-blue-500/30">
            <div className="text-slate-300 text-sm mb-1">Open Positions</div>
            <div className="text-3xl font-bold text-white">7</div>
            <div className="text-emerald-400 text-xs mt-1">12 openings total</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-4 border-2 border-purple-500/30">
            <div className="text-slate-300 text-sm mb-1">Active Candidates</div>
            <div className="text-3xl font-bold text-white">85</div>
            <div className="text-blue-400 text-xs mt-1">↑ 23 this week</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-xl p-4 border-2 border-emerald-500/30">
            <div className="text-slate-300 text-sm mb-1">Interviews Scheduled</div>
            <div className="text-3xl font-bold text-white">12</div>
            <div className="text-orange-400 text-xs mt-1">3 today</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/50 rounded-xl p-4 border-2 border-orange-500/30">
            <div className="text-slate-300 text-sm mb-1">Avg Time-to-Hire</div>
            <div className="text-3xl font-bold text-white">18d</div>
            <div className="text-emerald-400 text-xs mt-1">↓ 4 days vs Q4</div>
          </div>
          <div className="bg-gradient-to-br from-rose-900/50 to-red-900/50 rounded-xl p-4 border-2 border-rose-500/30">
            <div className="text-slate-300 text-sm mb-1">Cost-per-Hire</div>
            <div className="text-3xl font-bold text-white">$3.2K</div>
            <div className="text-emerald-400 text-xs mt-1">↓ $800 vs Q4</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-slate-800/50 p-2 rounded-lg">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'pipeline' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            Candidate Pipeline
          </button>
          <button
            onClick={() => setActiveTab('positions')}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'positions' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            Open Positions
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'analytics' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            Analytics
          </button>
        </div>

        {/* Candidate Pipeline View */}
        {activeTab === 'pipeline' && (
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-blue-500/30">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Candidate Pipeline</h2>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search candidates..."
                    className="pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filter
                </button>
              </div>
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-6 gap-4">
              {stages.map(stage => {
                const stageCandidates = candidates.filter(c => c.stage === stage);
                return (
                  <div key={stage} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-white">{stage}</h3>
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{stageCandidates.length}</span>
                    </div>
                    <div className="space-y-3">
                      {stageCandidates.map(candidate => (
                        <div key={candidate.id} className="bg-slate-800 rounded-lg p-3 border border-slate-600 hover:border-blue-500 cursor-pointer transition-all">
                          <div className="font-semibold text-white text-sm mb-1">{candidate.name}</div>
                          <div className="text-xs text-slate-400 mb-2">{candidate.position}</div>
                          <div className="flex items-center gap-1 mb-2">
                            <span className="text-yellow-400">★</span>
                            <span className="text-xs text-white">{candidate.rating}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <Clock className="w-3 h-3" />
                            <span>{candidate.daysInStage}d in stage</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Open Positions View */}
        {activeTab === 'positions' && (
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-blue-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map(position => (
                <div key={position.id} className="bg-slate-900/50 rounded-lg p-5 border border-slate-700 hover:border-blue-500 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{position.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          position.priority === 'high' ? 'bg-red-600 text-white' :
                          position.priority === 'medium' ? 'bg-orange-600 text-white' :
                          'bg-blue-600 text-white'
                        }`}>
                          {position.priority.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-slate-300 mb-3">{position.department}</div>
                      <div className="grid grid-cols-4 gap-4">
                        <div>
                          <div className="text-xs text-slate-400">Openings</div>
                          <div className="text-lg font-bold text-white">{position.openings}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">Applicants</div>
                          <div className="text-lg font-bold text-emerald-400">{position.applicants}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">Days Open</div>
                          <div className="text-lg font-bold text-orange-400">{position.daysOpen}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">Posted</div>
                          <div className="text-sm text-slate-300">{position.datePosted}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold">
                        View Candidates
                      </button>
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics View */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Source Effectiveness</h3>
                <div className="space-y-3">
                  {[
                    { source: 'LinkedIn', candidates: 34, hires: 8, percentage: 24 },
                    { source: 'Indeed', candidates: 28, hires: 5, percentage: 18 },
                    { source: 'Referrals', candidates: 15, hires: 7, percentage: 47 },
                    { source: 'Career Site', candidates: 8, hires: 2, percentage: 25 },
                  ].map(item => (
                    <div key={item.source} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-white font-semibold">{item.source}</div>
                        <div className="text-sm text-slate-400">{item.candidates} candidates • {item.hires} hires</div>
                      </div>
                      <div className="text-2xl font-bold text-emerald-400">{item.percentage}%</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Hiring Funnel</h3>
                <div className="space-y-4">
                  {[
                    { stage: 'Applied', count: 85, color: 'bg-blue-500', width: '100%' },
                    { stage: 'Screened', count: 52, color: 'bg-purple-500', width: '61%' },
                    { stage: 'Interviewed', count: 24, color: 'bg-pink-500', width: '28%' },
                    { stage: 'Offered', count: 8, color: 'bg-orange-500', width: '9%' },
                    { stage: 'Hired', count: 6, color: 'bg-emerald-500', width: '7%' },
                  ].map(item => (
                    <div key={item.stage}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-semibold">{item.stage}</span>
                        <span className="text-slate-400">{item.count}</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3">
                        <div className={`${item.color} h-3 rounded-full transition-all`} style={{width: item.width}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
