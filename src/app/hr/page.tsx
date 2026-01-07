'use client';

import Link from 'next/link';
import { Users, FileText, Calendar, Award, TrendingUp, Clock, DollarSign, AlertCircle, CheckCircle, Shield, Heart, Settings } from 'lucide-react';

export default function HRDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/dashboard"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-4 transition-colors"
          >
            ← Back to Command Center
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 mb-2"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(168,85,247,0.6)',
                    WebkitTextStroke: '1px rgba(168,85,247,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
                HR Management Center
              </h1>
              <p className="text-purple-200 text-lg">Employee lifecycle, benefits, compliance, and culture management</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-violet-500/30 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-5 border-2 border-purple-500/30 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-300 text-sm mb-1">Total Employees</div>
                <div className="text-3xl font-bold text-white">247</div>
                <div className="text-emerald-400 text-xs mt-1">↑ 12 this month</div>
              </div>
              <Users className="w-12 h-12 text-purple-400 opacity-50" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-xl p-5 border-2 border-emerald-500/30 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-300 text-sm mb-1">Open Positions</div>
                <div className="text-3xl font-bold text-white">8</div>
                <div className="text-yellow-400 text-xs mt-1">3 in review</div>
              </div>
              <TrendingUp className="w-12 h-12 text-emerald-400 opacity-50" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 rounded-xl p-5 border-2 border-yellow-500/30 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-300 text-sm mb-1">Pending Actions</div>
                <div className="text-3xl font-bold text-white">23</div>
                <div className="text-red-400 text-xs mt-1">5 urgent</div>
              </div>
              <AlertCircle className="w-12 h-12 text-yellow-400 opacity-50 animate-pulse" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-900/50 to-rose-900/50 rounded-xl p-5 border-2 border-pink-500/30 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-300 text-sm mb-1">Avg Satisfaction</div>
                <div className="text-3xl font-bold text-white">4.7</div>
                <div className="text-emerald-400 text-xs mt-1">↑ 0.3 from Q4</div>
              </div>
              <Award className="w-12 h-12 text-pink-400 opacity-50" />
            </div>
          </div>
        </div>

        {/* Main Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* HR Daily Planner - FEATURED */}
          <Link href="/hr/planner" className="group">
            <div className="bg-gradient-to-br from-violet-900/60 to-purple-900/60 rounded-2xl p-6 border-2 border-violet-500/40 shadow-xl hover:shadow-2xl hover:border-violet-400 transition-all hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-xs font-black transform rotate-12 translate-x-2 -translate-y-1">
                ⭐ NEW
              </div>
              <Calendar className="w-12 h-12 text-violet-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">HR Daily Planner</h3>
              <p className="text-violet-200 text-sm mb-4">Your personal task manager + manager reminder system for daily HR operations</p>
              <div className="flex items-center gap-2 text-violet-300 text-sm">
                <span className="bg-violet-500 px-2 py-1 rounded-full text-white font-bold">6 Tasks Today</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Recruiting/ATS */}
          <Link href="/hr/recruiting" className="group">
            <div className="bg-gradient-to-br from-blue-900/60 to-cyan-900/60 rounded-2xl p-6 border-2 border-blue-500/40 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all hover:scale-105">
              <Users className="w-12 h-12 text-blue-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Applicant Tracking (ATS)</h3>
              <p className="text-blue-200 text-sm mb-4">Full-cycle recruiting from job posting to offer acceptance with candidate pipeline</p>
              <div className="flex items-center gap-2 text-blue-300 text-sm">
                <span className="bg-emerald-500 px-2 py-1 rounded-full text-white font-bold">85 Candidates</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Employee Self-Service */}
          <Link href="/hr/self-service" className="group">
            <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 rounded-2xl p-6 border-2 border-purple-500/40 shadow-xl hover:shadow-2xl hover:border-purple-400 transition-all hover:scale-105">
              <Users className="w-12 h-12 text-purple-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Employee Self-Service</h3>
              <p className="text-purple-200 text-sm mb-4">Portal for pay stubs, tax docs, benefits, profile updates & more</p>
              <div className="flex items-center gap-2 text-purple-300 text-sm">
                <span>Access Portal</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* HR Analytics */}
          <Link href="/hr/analytics" className="group">
            <div className="bg-gradient-to-br from-indigo-900/60 to-blue-900/60 rounded-2xl p-6 border-2 border-indigo-500/40 shadow-xl hover:shadow-2xl hover:border-indigo-400 transition-all hover:scale-105">
              <TrendingUp className="w-12 h-12 text-indigo-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">HR Analytics & Insights</h3>
              <p className="text-indigo-200 text-sm mb-4">Turnover prediction, diversity metrics, compensation equity & flight risk</p>
              <div className="flex items-center gap-2 text-indigo-300 text-sm">
                <span>View Dashboard</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Performance Reviews */}
          <Link href="/hr/performance" className="group">
            <div className="bg-gradient-to-br from-orange-900/60 to-amber-900/60 rounded-2xl p-6 border-2 border-orange-500/40 shadow-xl hover:shadow-2xl hover:border-orange-400 transition-all hover:scale-105">
              <Award className="w-12 h-12 text-orange-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Performance Management</h3>
              <p className="text-orange-200 text-sm mb-4">360° feedback, goal tracking (OKRs), continuous reviews & development plans</p>
              <div className="flex items-center gap-2 text-orange-300 text-sm">
                <span className="bg-red-500 px-2 py-1 rounded-full text-white font-bold">12 Overdue</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Compensation Management */}
          <Link href="/hr/compensation" className="group">
            <div className="bg-gradient-to-br from-emerald-900/60 to-teal-900/60 rounded-2xl p-6 border-2 border-emerald-500/40 shadow-xl hover:shadow-2xl hover:border-emerald-400 transition-all hover:scale-105">
              <DollarSign className="w-12 h-12 text-emerald-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Compensation Management</h3>
              <p className="text-emerald-200 text-sm mb-4">Merit planning, market benchmarking, bonuses & total rewards strategy</p>
              <div className="flex items-center gap-2 text-emerald-300 text-sm">
                <span>Plan Comp Cycles</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Wellness Hub */}
          <Link href="/hr/wellness" className="group">
            <div className="bg-gradient-to-br from-pink-900/60 to-rose-900/60 rounded-2xl p-6 border-2 border-pink-500/40 shadow-xl hover:shadow-2xl hover:border-pink-400 transition-all hover:scale-105">
              <Heart className="w-12 h-12 text-pink-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Wellness Hub</h3>
              <p className="text-pink-200 text-sm mb-4">EAP, wellness challenges, telemedicine, mental health & fitness tracking</p>
              <div className="flex items-center gap-2 text-pink-300 text-sm">
                <span>Access Wellness</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Org Chart */}
          <Link href="/hr/org-chart" className="group">
            <div className="bg-gradient-to-br from-cyan-900/60 to-blue-900/60 rounded-2xl p-6 border-2 border-cyan-500/40 shadow-xl hover:shadow-2xl hover:border-cyan-400 transition-all hover:scale-105">
              <Users className="w-12 h-12 text-cyan-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Organizational Chart</h3>
              <p className="text-cyan-200 text-sm mb-4">Interactive hierarchy, reporting structure & headcount planning</p>
              <div className="flex items-center gap-2 text-cyan-300 text-sm">
                <span>View Org Chart</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Time-Off Management */}
          <Link href="/time-off" className="group">
            <div className="bg-gradient-to-br from-teal-900/60 to-emerald-900/60 rounded-2xl p-6 border-2 border-teal-500/40 shadow-xl hover:shadow-2xl hover:border-teal-400 transition-all hover:scale-105">
              <Calendar className="w-12 h-12 text-teal-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Time-Off & PTO</h3>
              <p className="text-teal-200 text-sm mb-4">Approve requests, track balances, PTO donations & accrual management</p>
              <div className="flex items-center gap-2 text-teal-300 text-sm">
                <span className="bg-red-500 px-2 py-1 rounded-full text-white font-bold animate-pulse">23 Pending</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Compliance */}
          <Link href="/compliance" className="group">
            <div className="bg-gradient-to-br from-red-900/60 to-rose-900/60 rounded-2xl p-6 border-2 border-red-500/40 shadow-xl hover:shadow-2xl hover:border-red-400 transition-all hover:scale-105">
              <Shield className="w-12 h-12 text-red-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Compliance Tracking</h3>
              <p className="text-red-200 text-sm mb-4">OSHA, certifications, I-9, labor law, regulatory compliance & audits</p>
              <div className="flex items-center gap-2 text-red-300 text-sm">
                <span className="bg-orange-500 px-2 py-1 rounded-full text-white font-bold">8 Expiring</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Document Management */}
          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-2xl p-6 border-2 border-slate-500/40 shadow-xl hover:shadow-2xl hover:border-slate-400 transition-all hover:scale-105">
              <FileText className="w-12 h-12 text-slate-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Documents & E-Signatures</h3>
              <p className="text-slate-200 text-sm mb-4">Digital document storage, e-signatures, policies & handbook management</p>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <span>Browse Documents</span>
                <span>→</span>
              </div>
            </div>
          </div>

          {/* Onboarding */}
          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-blue-900/60 to-indigo-900/60 rounded-2xl p-6 border-2 border-blue-500/40 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all hover:scale-105">
              <CheckCircle className="w-12 h-12 text-blue-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Advanced Onboarding</h3>
              <p className="text-blue-200 text-sm mb-4">Pre-boarding portal, equipment ordering, account provisioning & buddy system</p>
              <div className="flex items-center gap-2 text-blue-300 text-sm">
                <span>5 in progress</span>
                <span>→</span>
              </div>
            </div>
          </div>

          {/* HR Automation */}
          <Link href="/hr/automation" className="group">
            <div className="bg-gradient-to-br from-violet-900/60 to-purple-900/60 rounded-2xl p-6 border-2 border-violet-500/40 shadow-xl hover:shadow-2xl hover:border-violet-400 transition-all hover:scale-105">
              <Clock className="w-12 h-12 text-violet-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">HR Automation</h3>
              <p className="text-violet-200 text-sm mb-4">Automate onboarding, reminders, surveys, and recurring HR workflows</p>
              <div className="flex items-center gap-2 text-violet-300 text-sm">
                <span>Configure Automation</span>
                <span>→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Pending Actions Alert */}
        <div className="mt-8 bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border-2 border-yellow-500/50 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-yellow-400 animate-pulse flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-yellow-200 mb-2">Pending HR Actions</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-slate-800/50 rounded p-3">
                  <span className="text-white">Time-off requests awaiting approval</span>
                  <span className="bg-red-500 px-3 py-1 rounded-full text-white font-bold">23</span>
                </div>
                <div className="flex items-center justify-between bg-slate-800/50 rounded p-3">
                  <span className="text-white">Certifications expiring within 60 days</span>
                  <span className="bg-orange-500 px-3 py-1 rounded-full text-white font-bold">8</span>
                </div>
                <div className="flex items-center justify-between bg-slate-800/50 rounded p-3">
                  <span className="text-white">Shift swap requests pending</span>
                  <span className="bg-yellow-500 px-3 py-1 rounded-full text-white font-bold">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
