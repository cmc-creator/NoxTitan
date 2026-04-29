'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Users, FileText, Calendar, Award, TrendingUp, Clock, DollarSign, AlertCircle, CheckCircle, Shield, Heart, Settings, Star, Target, Palette } from 'lucide-react';
import TalentIdentificationSystem from '@/components/TalentIdentificationSystem';
import OnboardingRetentionHub from '@/components/OnboardingRetentionHub';
import ThemeStudioCustomizer from '@/components/ThemeStudioCustomizer';

export default function HRDashboard() {
  const [showThemeStudio, setShowThemeStudio] = useState(false);
  return (
    <div className="min-h-screen lux-app-bg p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/dashboard"
            className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#F0EBE0] mb-4 transition-colors"
          >
            ← Back to Command Center
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E8C060] to-[#C9A84C] mb-2"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(168,85,247,0.6)',
                    WebkitTextStroke: '1px rgba(168,85,247,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
                HR Management Center
              </h1>
              <p className="text-[#F0EBE0]/70 text-lg">Employee lifecycle, benefits, compliance, and culture management</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowThemeStudio(true)}
                className="px-6 py-3 font-semibold transition-colors flex items-center gap-2"
              >
                <Palette className="w-5 h-5" />
                Theme Studio
              </button>
              <button className="px-6 py-3 font-semibold transition-colors flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Settings
              </button>
            </div>
          </div>
        </div>

        {/* FEATURED: Talent Identification System */}
        <div className="mb-8 bg-[rgba(201,168,76,0.06)] backdrop-blur-xl rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-8 h-8 text-[#C9A84C] fill-yellow-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">High Performers & Talent Pipeline</h2>
              <p className="text-[#F0EBE0] text-sm">AI-identified strong employees ready for recognition, promotion, mentorship & onboarding roles</p>
            </div>
          </div>
          <TalentIdentificationSystem managerId="current-manager" showNotifications={true} />
        </div>

        {/* FEATURED: Onboarding & Retention Hub */}
        <div className="mb-8 bg-[rgba(201,168,76,0.06)] backdrop-blur-xl rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-[#9E8F75]" />
            <div>
              <h2 className="text-2xl font-bold text-white">Onboarding & Retention Excellence</h2>
              <p className="text-[#9E8F75] text-sm">Track new hire progress, identify retention risks, and implement research-backed retention strategies</p>
            </div>
          </div>
          <OnboardingRetentionHub role="hr" />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[rgba(201,168,76,0.04)] rounded p-5 border-2 border-amber-500/40/30 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#9E8F75] text-sm mb-1">Total Employees</div>
                <div className="text-3xl font-bold text-white">247</div>
                <div className="text-[#9E8F75] text-xs mt-1">↑ 12 this month</div>
              </div>
              <Users className="w-12 h-12 text-amber-400 opacity-50" />
            </div>
          </div>

          <div className="bg-[rgba(201,168,76,0.06)] rounded p-5 border-2 border-[rgba(201,168,76,0.22)] shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#9E8F75] text-sm mb-1">Open Positions</div>
                <div className="text-3xl font-bold text-white">8</div>
                <div className="text-[#C9A84C] text-xs mt-1">3 in review</div>
              </div>
              <TrendingUp className="w-12 h-12 text-[#9E8F75] opacity-50" />
            </div>
          </div>

          <div className="bg-[rgba(201,168,76,0.06)] rounded p-5 border-2 border-[rgba(201,168,76,0.22)] shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#9E8F75] text-sm mb-1">Pending Actions</div>
                <div className="text-3xl font-bold text-white">23</div>
                <div className="text-[#9E8F75] 400 text-xs mt-1">5 urgent</div>
              </div>
              <AlertCircle className="w-12 h-12 text-[#C9A84C] opacity-50" />
            </div>
          </div>

          <div className="bg-[#110F0B] from-REMOVED-900/50 to-rose-900/50 rounded p-5 border-2 border-[rgba(201,168,76,0.22)] shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#9E8F75] text-sm mb-1">Avg Satisfaction</div>
                <div className="text-3xl font-bold text-white">4.7</div>
                <div className="text-[#9E8F75] text-xs mt-1">↑ 0.3 from Q4</div>
              </div>
              <Award className="w-12 h-12 text-[#C9A84C] 400 opacity-50" />
            </div>
          </div>
        </div>

        {/* Main Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* HR Daily Planner - FEATURED */}
          <Link href="/hr/planner" className="group">
            <div className="bg-[#110F0B] rounded p-6 border-2 border-[rgba(201,168,76,0.22)] 500/40 shadow-xl hover:shadow-2xl hover:border-[rgba(201,168,76,0.22)] 400 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[rgba(201,168,76,0.12)] text-black px-3 py-1 text-xs font-black transform rotate-12 translate-x-2 -translate-y-1">
                ⭐ NEW
              </div>
              <Calendar className="w-12 h-12 text-[#C9A84C] 300 mb-4 group- transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">HR Daily Planner</h3>
              <p className="text-[#C9A84C] 200 text-sm mb-4">Your personal task manager + manager reminder system for daily HR operations</p>
              <div className="flex items-center gap-2 text-[#C9A84C] 300 text-sm">
                <span className="bg-[#110F0B] 500 px-2 py-1 rounded-full text-white font-bold">6 Tasks Today</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Recruiting/ATS */}
          <Link href="/hr/recruiting" className="group">
            <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-amber-500/40/40 shadow-xl hover:shadow-2xl hover:border-[rgba(201,168,76,0.22)] 400 transition-all">
              <Users className="w-12 h-12 text-amber-400 mb-4 group- transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Applicant Tracking (ATS)</h3>
              <p className="text-[#C9A84C] 200 text-sm mb-4">Full-cycle recruiting from job posting to offer acceptance with candidate pipeline</p>
              <div className="flex items-center gap-2 text-amber-400 text-sm">
                <span className="bg-[rgba(201,168,76,0.15)] px-2 py-1 rounded-full text-white font-bold">85 Candidates</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Employee Self-Service */}
          <Link href="/hr/self-service" className="group">
            <div className="bg-[rgba(201,168,76,0.04)] rounded p-6 border-2 border-amber-500/40/40 shadow-xl hover:shadow-2xl hover:border-[rgba(201,168,76,0.45)] transition-all">
              <Users className="w-12 h-12 text-[#C9A84C] mb-4 group- transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Employee Self-Service</h3>
              <p className="text-[#F0EBE0]/70 text-sm mb-4">Portal for pay stubs, tax docs, benefits, profile updates & more</p>
              <div className="flex items-center gap-2 text-[#C9A84C] text-sm">
                <span>Access Portal</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* HR Analytics */}
          <Link href="/hr/analytics" className="group">
            <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-amber-500/40/40 shadow-xl hover:shadow-2xl hover:border-[rgba(201,168,76,0.22)] transition-all">
              <TrendingUp className="w-12 h-12 text-amber-400 mb-4 group- transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">HR Analytics & Insights</h3>
              <p className="text-[#9E8F75] text-sm mb-4">Turnover prediction, diversity metrics, compensation equity & flight risk</p>
              <div className="flex items-center gap-2 text-amber-400 text-sm">
                <span>View Dashboard</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Performance Reviews */}
          <Link href="/hr/performance" className="group">
            <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-[rgba(201,168,76,0.22)] shadow-xl hover:shadow-2xl hover:border-[rgba(201,168,76,0.22)] transition-all">
              <Award className="w-12 h-12 text-[#9E8F75] mb-4 group- transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Performance Management</h3>
              <p className="text-[#9E8F75] text-sm mb-4">360° feedback, goal tracking (OKRs), continuous reviews & development plans</p>
              <div className="flex items-center gap-2 text-[#9E8F75] text-sm">
                <span className="bg-[#110F0B] 500 px-2 py-1 rounded-full text-white font-bold">12 Overdue</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Compensation Management */}
          <Link href="/hr/compensation" className="group">
            <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-[rgba(201,168,76,0.22)] shadow-xl hover:shadow-2xl hover:border-[rgba(201,168,76,0.22)] transition-all">
              <DollarSign className="w-12 h-12 text-[#9E8F75] mb-4 group- transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Compensation Management</h3>
              <p className="text-[#9E8F75] text-sm mb-4">Merit planning, market benchmarking, bonuses & total rewards strategy</p>
              <div className="flex items-center gap-2 text-[#9E8F75] text-sm">
                <span>Plan Comp Cycles</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Wellness Hub */}
          <Link href="/hr/wellness" className="group">
            <div className="bg-[#110F0B] from-REMOVED-900/60 to-rose-900/60 rounded p-6 border-2 border-[rgba(201,168,76,0.22)] shadow-xl hover:shadow-2xl hover:border-[rgba(201,168,76,0.22)] transition-all">
              <Heart className="w-12 h-12 text-[#C9A84C] 300 mb-4 group- transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Wellness Hub</h3>
              <p className="text-[#C9A84C] 200 text-sm mb-4">EAP, wellness challenges, telemedicine, mental health & fitness tracking</p>
              <div className="flex items-center gap-2 text-[#C9A84C] 300 text-sm">
                <span>Access Wellness</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Org Chart */}
          <Link href="/hr/org-chart" className="group">
            <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-[rgba(201,168,76,0.22)] shadow-xl hover:shadow-2xl hover:border-[rgba(201,168,76,0.22)] transition-all">
              <Users className="w-12 h-12 text-[#9E8F75] mb-4 group- transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Organizational Chart</h3>
              <p className="text-[#9E8F75] text-sm mb-4">Interactive hierarchy, reporting structure & headcount planning</p>
              <div className="flex items-center gap-2 text-[#9E8F75] text-sm">
                <span>View Org Chart</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Time-Off Management */}
          <Link href="/time-off" className="group">
            <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-[rgba(201,168,76,0.22)] shadow-xl hover:shadow-2xl hover:border-[rgba(201,168,76,0.22)] transition-all">
              <Calendar className="w-12 h-12 text-[#9E8F75] mb-4 group- transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Time-Off & PTO</h3>
              <p className="text-[#9E8F75] text-sm mb-4">Approve requests, track balances, PTO donations & accrual management</p>
              <div className="flex items-center gap-2 text-[#9E8F75] text-sm">
                <span className="bg-[#110F0B] 500 px-2 py-1 rounded-full text-white font-bold">23 Pending</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Compliance */}
          <Link href="/compliance" className="group">
            <div className="bg-[#110F0B] from-REMOVED-900/60 to-rose-900/60 rounded p-6 border-2 border-[rgba(201,168,76,0.22)] 500/40 shadow-xl hover:shadow-2xl hover:border-[rgba(201,168,76,0.22)] 400 transition-all">
              <Shield className="w-12 h-12 text-[#9E8F75] 300 mb-4 group- transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Compliance Tracking</h3>
              <p className="text-[#9E8F75] 200 text-sm mb-4">OSHA, certifications, I-9, labor law, regulatory compliance & audits</p>
              <div className="flex items-center gap-2 text-[#9E8F75] 300 text-sm">
                <span className="bg-[rgba(201,168,76,0.12)] px-2 py-1 rounded-full text-white font-bold">8 Expiring</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Document Management */}
          <div className="group cursor-pointer">
            <div className="lux-card/60 rounded p-6 border-2 border-[rgba(201,168,76,0.22)] shadow-xl hover:shadow-2xl hover:border-[rgba(201,168,76,0.22)] transition-all">
              <FileText className="w-12 h-12 text-[#9E8F75] mb-4 group- transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Documents & E-Signatures</h3>
              <p className="text-[#9E8F75] text-sm mb-4">Digital document storage, e-signatures, policies & handbook management</p>
              <div className="flex items-center gap-2 text-[#9E8F75] text-sm">
                <span>Browse Documents</span>
                <span>→</span>
              </div>
            </div>
          </div>

          {/* Onboarding */}
          <div className="group cursor-pointer">
            <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-amber-500/40/40 shadow-xl hover:shadow-2xl hover:border-[rgba(201,168,76,0.22)] 400 transition-all">
              <CheckCircle className="w-12 h-12 text-amber-400 mb-4 group- transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Advanced Onboarding</h3>
              <p className="text-[#C9A84C] 200 text-sm mb-4">Pre-boarding portal, equipment ordering, account provisioning & buddy system</p>
              <div className="flex items-center gap-2 text-amber-400 text-sm">
                <span>5 in progress</span>
                <span>→</span>
              </div>
            </div>
          </div>

          {/* HR Automation */}
          <Link href="/hr/automation" className="group">
            <div className="bg-[#110F0B] rounded p-6 border-2 border-[rgba(201,168,76,0.22)] 500/40 shadow-xl hover:shadow-2xl hover:border-[rgba(201,168,76,0.22)] 400 transition-all">
              <Clock className="w-12 h-12 text-[#C9A84C] 300 mb-4 group- transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">HR Automation</h3>
              <p className="text-[#C9A84C] 200 text-sm mb-4">Automate onboarding, reminders, surveys, and recurring HR workflows</p>
              <div className="flex items-center gap-2 text-[#C9A84C] 300 text-sm">
                <span>Configure Automation</span>
                <span>→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Pending Actions Alert */}
        <div className="mt-8 bg-[rgba(201,168,76,0.06)] border-2 border-[rgba(201,168,76,0.22)] rounded p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-[#C9A84C] flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#F0EBE0] mb-2">Pending HR Actions</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-[rgba(201,168,76,0.06)]/50 rounded p-3">
                  <span className="text-white">Time-off requests awaiting approval</span>
                  <span className="bg-[#110F0B] 500 px-3 py-1 rounded-full text-white font-bold">23</span>
                </div>
                <div className="flex items-center justify-between bg-[rgba(201,168,76,0.06)]/50 rounded p-3">
                  <span className="text-white">Certifications expiring within 60 days</span>
                  <span className="bg-[rgba(201,168,76,0.12)] px-3 py-1 rounded-full text-white font-bold">8</span>
                </div>
                <div className="flex items-center justify-between bg-[rgba(201,168,76,0.06)]/50 rounded p-3">
                  <span className="text-white">Shift swap requests pending</span>
                  <span className="bg-[rgba(201,168,76,0.12)] px-3 py-1 rounded-full text-white font-bold">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Studio Modal */}
      {showThemeStudio && (
        <ThemeStudioCustomizer onClose={() => setShowThemeStudio(false)} />
      )}
    </div>
  );
}


