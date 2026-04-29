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
 <div className="min-h-screen bg-[#070604] p-6">
 <div className="max-w-7xl mx-auto">
 {/* Header */}
 <div className="mb-8">
 <Link href="/hr" className="inline-flex items-center gap-2 text-amber-400 hover:text-[#9E8F75] mb-4 transition-colors">
 ← Back to HR Center
 </Link>
 <div className="flex items-center justify-between">
 <div>
 <h1 className="text-4xl font-black text-[#C9A84C] mb-2"
 style={{
 textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(59,130,246,0.6)',
 WebkitTextStroke: '1px rgba(59,130,246,0.3)',
 filter: 'brightness(1.4)'
 }}>
 Applicant Tracking System
 </h1>
 <p className="text-[#9E8F75]">Full-cycle recruiting from job posting to offer acceptance</p>
 </div>
 <button className="px-6 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white rounded-lg font-bold transition-all shadow-lg flex items-center gap-2">
 <Plus className="w-5 h-5" />
 Post New Job
 </button>
 </div>
 </div>

 {/* Stats Cards */}
 <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-4 border-2 border-amber-500/40/30">
 <div className="text-[#9E8F75] text-sm mb-1">Open Positions</div>
 <div className="text-3xl font-bold text-white">7</div>
 <div className="text-[#9E8F75] text-xs mt-1">12 openings total</div>
 </div>
 <div className="bg-[rgba(201,168,76,0.04)] rounded p-4 border-2 border-amber-500/40/30">
 <div className="text-[#9E8F75] text-sm mb-1">Active Candidates</div>
 <div className="text-3xl font-bold text-white">85</div>
 <div className="text-amber-400 text-xs mt-1">↑ 23 this week</div>
 </div>
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-4 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="text-[#9E8F75] text-sm mb-1">Interviews Scheduled</div>
 <div className="text-3xl font-bold text-white">12</div>
 <div className="text-[#9E8F75] text-xs mt-1">3 today</div>
 </div>
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-4 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="text-[#9E8F75] text-sm mb-1">Avg Time-to-Hire</div>
 <div className="text-3xl font-bold text-white">18d</div>
 <div className="text-[#9E8F75] text-xs mt-1">↓ 4 days vs Q4</div>
 </div>
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-4 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="text-[#9E8F75] text-sm mb-1">Cost-per-Hire</div>
 <div className="text-3xl font-bold text-white">$3.2K</div>
 <div className="text-[#9E8F75] text-xs mt-1">↓ $800 vs Q4</div>
 </div>
 </div>

 {/* Tabs */}
 <div className="flex gap-2 mb-6 bg-[rgba(201,168,76,0.06)]/50 p-2 rounded-lg">
 <button
 onClick={() => setActiveTab('pipeline')}
 className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
 activeTab === 'pipeline' ? 'bg-amber-600 text-white' : 'text-[#9E8F75] hover:bg-[#110F0B]'
 }`}
 >
 Candidate Pipeline
 </button>
 <button
 onClick={() => setActiveTab('positions')}
 className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
 activeTab === 'positions' ? 'bg-amber-600 text-white' : 'text-[#9E8F75] hover:bg-[#110F0B]'
 }`}
 >
 Open Positions
 </button>
 <button
 onClick={() => setActiveTab('analytics')}
 className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
 activeTab === 'analytics' ? 'bg-amber-600 text-white' : 'text-[#9E8F75] hover:bg-[#110F0B]'
 }`}
 >
 Analytics
 </button>
 </div>

 {/* Candidate Pipeline View */}
 {activeTab === 'pipeline' && (
 <div className="bg-[rgba(201,168,76,0.06)]/50 rounded p-6 border-2 border-amber-500/40/30">
 <div className="flex items-center justify-between mb-6">
 <h2 className="text-2xl font-bold text-white">Candidate Pipeline</h2>
 <div className="flex gap-3">
 <div className="relative">
 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9E8F75]" />
 <input
 type="text"
 placeholder="Search candidates..."
 className="pl-10 pr-4 py-2 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-lg text-white placeholder-stone-600 focus:ring-2 focus:ring-[rgba(201,168,76,0.45)] outline-none"
 />
 </div>
 <button className="px-4 py-2 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg flex items-center gap-2">
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
 <div key={stage} className="bg-[#110F0B]/50 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center justify-between mb-4">
 <h3 className="font-bold text-white">{stage}</h3>
 <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full">{stageCandidates.length}</span>
 </div>
 <div className="space-y-3">
 {stageCandidates.map(candidate => (
 <div key={candidate.id} className="bg-[rgba(201,168,76,0.04)] rounded-lg p-3 border border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.45)] cursor-pointer transition-all">
 <div className="font-semibold text-white text-sm mb-1">{candidate.name}</div>
 <div className="text-xs text-[#9E8F75] mb-2">{candidate.position}</div>
 <div className="flex items-center gap-1 mb-2">
 <span className="text-[#C9A84C]">★</span>
 <span className="text-xs text-white">{candidate.rating}</span>
 </div>
 <div className="flex items-center gap-2 text-xs text-[#9E8F75]">
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
 <div className="bg-[rgba(201,168,76,0.06)]/50 rounded p-6 border-2 border-amber-500/40/30">
 <h2 className="text-2xl font-bold text-white mb-6">Open Positions</h2>
 <div className="space-y-4">
 {openPositions.map(position => (
 <div key={position.id} className="bg-[#110F0B]/50 rounded-lg p-5 border border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.45)] transition-all">
 <div className="flex items-start justify-between">
 <div className="flex-1">
 <div className="flex items-center gap-3 mb-2">
 <h3 className="text-xl font-bold text-white">{position.title}</h3>
 <span className={`px-3 py-1 rounded-full text-xs font-bold ${
 position.priority === 'high' ? 'bg-red-500 text-white' :
 position.priority === 'medium' ? 'bg-[rgba(201,168,76,0.12)] text-white' :
 'bg-amber-600 text-white'
 }`}>
 {position.priority.toUpperCase()}
 </span>
 </div>
 <div className="text-[#9E8F75] mb-3">{position.department}</div>
 <div className="grid grid-cols-4 gap-4">
 <div>
 <div className="text-xs text-[#9E8F75]">Openings</div>
 <div className="text-lg font-bold text-white">{position.openings}</div>
 </div>
 <div>
 <div className="text-xs text-[#9E8F75]">Applicants</div>
 <div className="text-lg font-bold text-[#9E8F75]">{position.applicants}</div>
 </div>
 <div>
 <div className="text-xs text-[#9E8F75]">Days Open</div>
 <div className="text-lg font-bold text-[#9E8F75]">{position.daysOpen}</div>
 </div>
 <div>
 <div className="text-xs text-[#9E8F75]">Posted</div>
 <div className="text-sm text-[#9E8F75]">{position.datePosted}</div>
 </div>
 </div>
 </div>
 <div className="flex gap-2">
 <button className="px-4 py-2 bg-amber-600 hover:bg-amber-600 text-white rounded-lg font-semibold">
 View Candidates
 </button>
 <button className="px-4 py-2 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg">
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
 <div className="bg-[rgba(201,168,76,0.06)]/50 rounded p-6 border-2 border-amber-500/40/30">
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
 <div className="text-sm text-[#9E8F75]">{item.candidates} candidates • {item.hires} hires</div>
 </div>
 <div className="text-2xl font-bold text-[#9E8F75]">{item.percentage}%</div>
 </div>
 ))}
 </div>
 </div>

 <div className="bg-[rgba(201,168,76,0.06)]/50 rounded p-6 border-2 border-amber-500/40/30">
 <h3 className="text-xl font-bold text-white mb-4">Hiring Funnel</h3>
 <div className="space-y-4">
 {[
 { stage: 'Applied', count: 85, color: 'bg-amber-600', width: '100%' },
 { stage: 'Screened', count: 52, color: 'bg-amber-500', width: '61%' },
 { stage: 'Interviewed', count: 24, color: 'bg-[rgba(201,168,76,0.12)]', width: '28%' },
 { stage: 'Offered', count: 8, color: 'bg-[rgba(201,168,76,0.12)]', width: '9%' },
 { stage: 'Hired', count: 6, color: 'bg-[rgba(201,168,76,0.15)]', width: '7%' },
 ].map(item => (
 <div key={item.stage}>
 <div className="flex items-center justify-between mb-1">
 <span className="text-white font-semibold">{item.stage}</span>
 <span className="text-[#9E8F75]">{item.count}</span>
 </div>
 <div className="w-full bg-[rgba(201,168,76,0.04)] rounded-full h-3">
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


