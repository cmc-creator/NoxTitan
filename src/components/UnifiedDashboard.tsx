'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { dataHub } from '@/lib/dataIntegration';
import SettingsPanel from '@/components/SettingsPanel';
import OnboardingWalkthrough from '@/components/OnboardingWalkthrough';
import { 
  Users, Calendar, Clock, AlertTriangle, Shield, TrendingUp, 
  CheckCircle, XCircle, Activity, BarChart3, Bell, ArrowRight, Settings,
  DollarSign, Award, Target, Briefcase, TrendingDown, MessageSquare,
  Star, Trophy, Zap, UserCheck, AlertCircle, FileText, Repeat,
  UserMinus, CloudRain, Cake, Brain, Send, RefreshCw, Package,
  Video, Percent, ThumbsUp, ClipboardList, Mail, Inbox, FolderOpen,
  AlertOctagon, BarChart2, ExternalLink, TrendingDown as ChartDown
} from 'lucide-react';

export default function UnifiedDashboard() {
  const dashboardData = dataHub.getDashboardData();
  const notifications = dataHub.getNotifications();
  const [userTier, setUserTier] = useState('PROFESSIONAL');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsComponent, setSettingsComponent] = useState('');
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const tier = localStorage.getItem('tier') || 'PROFESSIONAL';
    setUserTier(tier);
    // Ensure dark mode is default
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('dark');
    }
    
    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem('onboardingCompleted');
    if (!hasCompletedOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboardingCompleted', 'true');
    setShowOnboarding(false);
  };

  const handleOnboardingSkip = () => {
    localStorage.setItem('onboardingCompleted', 'true');
    setShowOnboarding(false);
  };

  const handleSettingsClick = (e: React.MouseEvent, componentName: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSettingsComponent(componentName);
    setSettingsOpen(true);
  };

  return (
    <div className="min-h-screen bg-transparent p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">Command Center</h1>
            <p className="text-base sm:text-lg" style={{ color: '#9E8F75' }}>Real-time business intelligence and operations hub</p>
          </div>
        </div>

        {/* Active Notifications - Enhanced */}
        <div className="glass-tile glass-tile-gold mb-6 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 relative z-10">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 rounded-sm flex-shrink-0" style={{ background: 'rgba(201,168,76,0.1)' }}>
                <Bell className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#C9A84C' }} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white">2 Active Notifications</h2>
            </div>
            <Link href="/notifications" className="text-[#F0EBE0] hover:text-[#F0EBE0] text-sm flex items-center gap-1 ml-auto sm:ml-0">
              View All <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-3 relative z-10">
            {/* Open Incidents Notification */}
            <Link href="/qapi?filter=open" className="block">
              <div className="p-3 sm:p-4 bg-[rgba(201,168,76,0.06)] backdrop-blur-sm rounded-lg border border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)] transition-all cursor-pointer group min-h-[44px]">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <AlertOctagon className="w-5 h-5 text-[#F0EBE0] flex-shrink-0" />
                      <p className="font-bold text-white group-hover:text-[#F0EBE0] transition-colors">Open Incidents</p>
                      <span className="px-2 py-0.5 bg-[rgba(201,168,76,0.06)] rounded-full text-xs font-bold text-[#F0EBE0] whitespace-nowrap">HIGH PRIORITY</span>
                    </div>
                    <p className="text-sm text-[#F0EBE0] mb-2">2 incidents requiring immediate attention</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-[#F0EBE0]">• Patient Fall - Room 304 (2 hours ago)</p>
                      <p className="text-xs text-[#F0EBE0]">• Medication Near Miss - ICU (5 hours ago)</p>
                    </div>
                    <p className="text-xs text-[#F0EBE0] mt-2 font-semibold">Action required: Investigation & documentation</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#F0EBE0] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Expiring Certifications Notification */}
            <Link href="/employees?filter=expiring-certs" className="block">
              <div className="p-4 backdrop-blur-sm rounded-sm transition-all cursor-pointer group" style={{ background: 'rgba(42,28,8,0.55)', border: '1px solid rgba(140,90,15,0.32)' }}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5" style={{ color: '#C9A84C' }} />
                      <p className="font-bold text-white transition-colors">Expiring Certifications</p>
                      <span className="px-2 py-0.5 rounded-sm text-xs font-bold" style={{ background: 'rgba(140,90,15,0.25)', color: '#9E8F75', letterSpacing: '0.05em' }}>URGENT</span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: '#9E8F75' }}>1 certification expiring within 30 days</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs" style={{ color: '#9E8F75' }}>• Jennifer Lee - BLS Certification (Expires: Feb 8, 2026)</p>
                    </div>
                    <p className="text-xs mt-2 font-semibold" style={{ color: '#C9A84C' }}>Action required: Schedule renewal training</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#F0EBE0] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Employees */}
          <Link href="/employees" className="block">
            <div className="glass-tile glass-tile-gold p-6 cursor-pointer group transition-all">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="p-3 rounded-sm transition-all" style={{ background: 'rgba(201,168,76,0.08)' }}>
                  <Users className="w-6 h-6" style={{ color: '#C9A84C' }} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 relative z-10">{dashboardData.employees.active}</h3>
              <p className="text-[#F0EBE0] font-semibold relative z-10">Active Employees</p>
              <p className="text-sm text-gray-200 mt-2 relative z-10">Avg Performance: {dashboardData.employees.avgPerformance.toFixed(1)}%</p>
              <p className="text-xs text-[#C9A84C] mt-1 relative z-10">{dashboardData.employees.total - dashboardData.employees.active} on leave</p>
            </div>
          </Link>

          {/* Scheduling */}
          <Link href="/calendar" className="block">
            <div className="glass-tile glass-tile-gold p-6 cursor-pointer group transition-all">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="p-3 rounded-sm transition-all" style={{ background: 'rgba(201,168,76,0.08)' }}>
                  <Calendar className="w-6 h-6" style={{ color: '#C9A84C' }} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 relative z-10">{dashboardData.scheduling.upcomingShifts}</h3>
              <p className="text-[#F0EBE0] font-semibold relative z-10">Upcoming Shifts</p>
              <p className="text-sm text-gray-200 mt-2 relative z-10">Coverage: {dashboardData.scheduling.coverageRate}%</p>
              <p className="text-xs text-[#C9A84C] mt-1 relative z-10">{dashboardData.scheduling.totalShifts - dashboardData.scheduling.completedShifts} open shifts</p>
            </div>
          </Link>

          {/* Time Off */}
          <Link href="/time-off" className="block">
            <div className="glass-tile glass-tile-gold p-6 cursor-pointer group transition-all">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="p-3 rounded-sm transition-all" style={{ background: 'rgba(201,168,76,0.08)' }}>
                  <Clock className="w-6 h-6" style={{ color: '#C9A84C' }} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 relative z-10">{dashboardData.timeOff.pending}</h3>
              <p className="text-[#F0EBE0] font-semibold relative z-10">Pending Requests</p>
              <p className="text-sm text-gray-200 mt-2 relative z-10">{dashboardData.timeOff.approved} approved this month</p>
              <p className="text-xs text-[#C9A84C] mt-1 relative z-10">{dashboardData.timeOff.denied || 2} denied</p>
            </div>
          </Link>

          {/* Quality & Safety */}
          <Link href="/qapi" className="block">
            <div className="glass-tile glass-tile-red p-6 cursor-pointer group transition-all">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="p-3 rounded-sm transition-all" style={{ background: 'rgba(160,40,40,0.12)' }}>
                  <AlertTriangle className="w-6 h-6" style={{ color: 'rgba(195,95,95,0.9)' }} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 relative z-10">{dashboardData.quality.openIncidents}</h3>
              <p className="text-[#F0EBE0] font-semibold relative z-10">Open Incidents</p>
              <p className="text-sm text-gray-200 mt-2 relative z-10">{dashboardData.quality.totalIncidents} total incidents</p>
              <p className="text-xs text-[#C9A84C] mt-1 relative z-10">45 resolved</p>
            </div>
          </Link>
        </div>

        {/* Shift Handoff/Report - Critical for 24/7 Operations */}
        <div className="glass-tile glass-tile-gold mb-8 p-6">
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <ClipboardList className="w-6 h-6 text-amber-400" />
              <h2 className="text-xl font-bold text-white">Last Shift Report</h2>
              <span className="px-3 py-1 bg-amber-600/20 border border-amber-600/30 rounded-full text-xs font-semibold text-amber-400">Night Shift 11PM-7AM</span>
            </div>
            <div className="flex gap-3">
              <Link href="/shift-logs" className="text-amber-400 hover:text-[#E8C060] text-sm flex items-center gap-1">
                View History <FolderOpen className="w-4 h-4" />
              </Link>
              <button className="px-4 py-2 bg-amber-600/20 border border-amber-600/30 rounded-lg text-sm font-semibold text-amber-400 hover:bg-amber-600/30 transition-all">
                Submit Report
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {/* Report Summary */}
            <div className="lg:col-span-2 space-y-4">
              <div className="p-4 bg-[#110F0B]/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="font-semibold text-white">Submitted by: Sarah Johnson, RN (Night Supervisor)</p>
                  <span className="text-xs text-[#C9A84C]">6:45 AM</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-semibold text-amber-400">Patient Census:</p>
                    <p className="text-sm text-amber-50">32 patients (2 admissions, 1 discharge, 0 transfers)</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-amber-400">Key Events:</p>
                    <p className="text-sm text-amber-50">• Room 304 patient fall - assessed, no injuries, incident report filed</p>
                    <p className="text-sm text-amber-50">• Equipment: Ventilator 3 sent for maintenance</p>
                    <p className="text-sm text-amber-50">• Staffing: All positions filled, no call-offs</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-amber-400">Follow-up Needed:</p>
                    <p className="text-sm text-[#F0EBE0]">• Room 208: Patient requires mental health eval (psychiatry consult requested)</p>
                    <p className="text-sm text-[#F0EBE0]">• Pharmacy: 3 medication orders pending day shift verification</p>
                  </div>
                </div>
              </div>
              <Link href="/shift-logs" className="block p-4 bg-[rgba(201,168,76,0.06)] rounded-lg border border-amber-600/30 hover:border-[rgba(201,168,76,0.45)] transition-all">
                <div className="flex items-center justify-center gap-2 text-amber-400">
                  <FileText className="w-5 h-5" />
                  <span className="font-semibold">Write Day Shift Report</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            {/* Department Status */}
            <div className="space-y-3">
              <p className="font-semibold text-white text-sm">Department Status</p>
              <div className="space-y-2">
                <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Emergency</span>
                    <CheckCircle className="w-4 h-4 text-[#F0EBE0]" />
                  </div>
                  <p className="text-xs text-gray-200 mt-1">Quiet night, all stable</p>
                </div>
                <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">ICU</span>
                    <AlertCircle className="w-4 h-4 text-[#F0EBE0]" />
                  </div>
                  <p className="text-xs text-gray-200 mt-1">1 critical - needs monitoring</p>
                </div>
                <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Med-Surg</span>
                    <CheckCircle className="w-4 h-4 text-[#F0EBE0]" />
                  </div>
                  <p className="text-xs text-gray-200 mt-1">No issues to report</p>
                </div>
                <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Psych Unit</span>
                    <CheckCircle className="w-4 h-4 text-[#F0EBE0]" />
                  </div>
                  <p className="text-xs text-gray-200 mt-1">All calm, no incidents</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Overview - Critical Manager Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* FTE (Full Time Equivalent) */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="p-3 rounded-sm" style={{ background: 'rgba(201,168,76,0.08)' }}>
                <Briefcase className="w-6 h-6" style={{ color: '#C9A84C' }} />
              </div>
              <TrendingUp className="w-5 h-5" style={{ color: '#C9A84C' }} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1 relative z-10">147.8</h3>
            <p className="text-[#F0EBE0] font-semibold relative z-10">Total FTE</p>
            <p className="text-sm text-gray-200 mt-2 relative z-10">Target: 150 FTE</p>
            <p className="text-xs mt-1 relative z-10" style={{ color: 'rgba(130,175,110,0.9)' }}>Within budget ✓</p>
          </div>

          {/* EPOB (Employee Per Occupied Bed) */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="p-3 bg-amber-500/20 rounded-lg">
                <Activity className="w-6 h-6 text-[#E8C060]" />
              </div>
              <TrendingUp className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1 relative z-10">4.2</h3>
            <p className="text-[#F0EBE0] font-semibold relative z-10">EPOB Ratio</p>
            <p className="text-sm text-gray-200 mt-2 relative z-10">Industry avg: 4.5</p>
            <p className="text-xs text-[#E8C060] mt-1 relative z-10">Above standard ✓</p>
          </div>

          {/* Labor Cost */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="p-3 rounded-sm" style={{ background: 'rgba(201,168,76,0.08)' }}>
                <DollarSign className="w-6 h-6" style={{ color: '#9E8F75' }} />
              </div>
              <TrendingDown className="w-5 h-5" style={{ color: 'rgba(195,100,100,0.9)' }} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1 relative z-10">$127K</h3>
            <p className="text-[#F0EBE0] font-semibold relative z-10">Weekly Labor Cost</p>
            <p className="text-sm text-gray-200 mt-2 relative z-10">Budget: $135K/week</p>
            <p className="text-xs mt-1 relative z-10" style={{ color: '#9E8F75' }}>12% overtime this week</p>
          </div>
        </div>

        {/* Real-Time Staff & Guild Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Live Staff Status */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <h2 className="text-xl font-bold text-white">Staff On Duty</h2>
              <Link href="/employees" className="text-amber-400 hover:text-[#E8C060] text-sm flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between p-3 bg-[#110F0B]/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-white">42 Clocked In</p>
                    <p className="text-xs text-gray-200">Current shift</p>
                  </div>
                </div>
                <UserCheck className="w-5 h-5 text-[#F0EBE0]" />
              </div>
              <div className="flex items-center justify-between p-3 bg-[#110F0B]/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-white">18 Available</p>
                    <p className="text-xs text-gray-200">Not scheduled</p>
                  </div>
                </div>
                <Users className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex items-center justify-between p-3 bg-[#110F0B]/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[rgba(201,168,76,0.12)] rounded-full"></div>
                  <div>
                    <p className="font-semibold text-white">5 On Break</p>
                    <p className="text-xs text-gray-200">Return in 15-30 min</p>
                  </div>
                </div>
                <Clock className="w-5 h-5 text-[#F0EBE0]" />
              </div>
            </div>
          </div>

          {/* Guild Leaderboard */}
          <Link href="/guild" className="block">
            <div className="glass-tile glass-tile-gold p-6 cursor-pointer transition-transform">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-[#C9A84C]" />
                  <h2 className="text-xl font-bold text-white">Guild Leaderboard</h2>
                </div>
                <ArrowRight className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-3 p-3 bg-[rgba(201,168,76,0.08)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                  <div className="flex items-center justify-center w-8 h-8 bg-[rgba(201,168,76,0.06)] rounded-full">
                    <span className="text-lg font-bold text-[#F0EBE0]">1</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Sarah Johnson</p>
                    <p className="text-xs text-gray-200">Emergency Dept</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#C9A84C] fill-yellow-400" />
                    <span className="font-bold text-white">2,450</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#110F0B]/5 rounded-lg border border-white/10">
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-300/20 rounded-full">
                    <span className="text-sm font-bold text-[#9E8F75]">2</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Michael Chen</p>
                    <p className="text-xs text-gray-200">ICU</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#9E8F75]" />
                    <span className="font-bold text-white">2,180</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#110F0B]/5 rounded-lg border border-white/10">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ background: 'rgba(150,120,60,0.15)' }}>
                    <span className="text-sm font-bold" style={{ color: '#9E8F75' }}>3</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Emily Rodriguez</p>
                    <p className="text-xs text-gray-200">Nursing</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" style={{ color: '#9E8F75' }} />
                    <span className="font-bold text-white">1,920</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Shoutout & Basecamp Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Quick Shoutout Widget */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Zap className="w-6 h-6 text-amber-400" />
              <h2 className="text-xl font-bold text-white">Quick Shoutout</h2>
            </div>
            <div className="space-y-4 relative z-10">
              <textarea
                placeholder="Recognize an employee's great work..."
                className="w-full h-24 bg-[#110F0B]/5 border border-white/20 rounded-lg p-3 text-white placeholder-amber-900/50 focus:border-amber-400 focus:outline-none resize-none"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Employee name"
                  className="flex-1 bg-[#110F0B]/5 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-amber-900/50 focus:border-amber-400 focus:outline-none"
                />
                <button className="px-6 py-2 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg font-semibold text-white transition-all flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Send
                </button>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-amber-600/20 border border-amber-600/30 rounded-full text-xs text-amber-400 hover:bg-amber-600/30 transition-all">
                  🎯 Great Teamwork
                </button>
                <button className="px-3 py-1 rounded-full text-xs transition-all" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', color: '#9E8F75' }}>
                  ⭐ Excellent Care
                </button>
                <button className="px-3 py-1 bg-amber-500/20 border border-amber-400/40/30 rounded-full text-xs text-[#C9A84C] hover:bg-amber-500/30 transition-all">
                  💪 Above & Beyond
                </button>
              </div>
            </div>
          </div>

          {/* Basecamp Activity Feed */}
          <Link href="/guild?tab=basecamps" className="block">
            <div className="glass-tile glass-tile-gold p-6 cursor-pointer transition-transform">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-amber-400" />
                  <h2 className="text-xl font-bold text-white">Basecamp Activity</h2>
                </div>
                <ArrowRight className="w-5 h-5 text-[#E8C060]" />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="p-3 bg-[#110F0B]/5 rounded-lg border border-white/10 hover:border-[rgba(201,168,76,0.45)] transition-all">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#E8C060] mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-white text-sm">Emergency Team completed Challenge</p>
                      <p className="text-xs text-gray-200 mt-1">"Perfect Week" - 7 days no tardiness</p>
                      <p className="text-xs text-[#E8C060] mt-1">+500 points • 2 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-[#110F0B]/5 rounded-lg border border-white/10 hover:border-[rgba(201,168,76,0.45)] transition-all">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-[#C9A84C] mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-white text-sm">ICU Basecamp leveled up!</p>
                      <p className="text-xs text-gray-200 mt-1">Now Level 8 - Unlocked custom badges</p>
                      <p className="text-xs text-[#E8C060] mt-1">4 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-[#110F0B]/5 rounded-lg border border-white/10 hover:border-[rgba(201,168,76,0.45)] transition-all">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-amber-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-white text-sm">New basecamp created</p>
                      <p className="text-xs text-gray-200 mt-1">"Night Shift Warriors" by Maria Garcia</p>
                      <p className="text-xs text-[#E8C060] mt-1">12 members • 1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Certifications & Compliance Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Expiring Certifications */}
          <div className="glass-tile glass-tile-red p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <AlertCircle className="w-6 h-6 text-red-400" />
              <h2 className="text-lg font-bold text-white">Cert Expirations</h2>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                <p className="font-semibold text-white text-sm">3 expire this week</p>
                <p className="text-xs text-gray-200 mt-1">BLS, ACLS renewals needed</p>
              </div>
              <Link href="/employees?filter=expiring-certs" className="block p-3 bg-[#110F0B]/5 rounded-lg border border-white/10 hover:border-[rgba(201,168,76,0.22)] transition-all text-center">
                <p className="text-sm font-semibold text-[#F0EBE0]">View Details →</p>
              </Link>
            </div>
          </div>

          {/* Budget Status */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Target className="w-6 h-6" style={{ color: '#C9A84C' }} />
              <h2 className="text-lg font-bold text-white">Budget Health</h2>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                <p className="font-semibold text-white text-sm">94% of monthly budget</p>
                <p className="text-xs text-gray-200 mt-1">$8.1K remaining this period</p>
              </div>
              <Link href="/payroll" className="block p-3 bg-[#110F0B]/5 rounded-lg border border-white/10 transition-all text-center" style={{ '--hover-border': 'rgba(201,168,76,0.45)' } as React.CSSProperties}>
                <p className="text-sm font-semibold" style={{ color: '#C9A84C' }}>View Payroll →</p>
              </Link>
            </div>
          </div>

          {/* Training Progress */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <FileText className="w-6 h-6 text-amber-400" />
              <h2 className="text-lg font-bold text-white">Training Status</h2>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="p-3 bg-amber-600/10 rounded-lg border border-amber-600/30">
                <p className="font-semibold text-white text-sm">87% completion rate</p>
                <p className="text-xs text-gray-200 mt-1">15 modules in progress</p>
              </div>
              <Link href="/learning" className="block p-3 bg-[#110F0B]/5 rounded-lg border border-white/10 hover:border-[rgba(201,168,76,0.45)] transition-all text-center">
                <p className="text-sm font-semibold text-amber-400">View Training →</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Today's Operations Critical Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Call-Offs Today */}
          <div className="glass-tile glass-tile-red p-6">
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="p-2 rounded-sm" style={{ background: 'rgba(160,40,40,0.12)' }}>
                <UserMinus className="w-5 h-5" style={{ color: 'rgba(195,95,95,0.9)' }} />
              </div>
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <p className="text-[#F0EBE0] font-semibold mb-1 relative z-10">Call-Offs Today</p>
            <p className="text-xs text-gray-200 relative z-10">ER: 2, ICU: 1</p>
            <Link href="/calendar?view=replacements" className="text-xs text-[#F0EBE0] hover:text-[#F0EBE0] mt-2 inline-block relative z-10">
              Find coverage →
            </Link>
          </div>

          {/* Overtime Hours */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="p-2 rounded-sm" style={{ background: 'rgba(201,168,76,0.08)' }}>
                <TrendingUp className="w-5 h-5" style={{ color: '#9E8F75' }} />
              </div>
              <span className="text-2xl font-bold text-white">127</span>
            </div>
            <p className="text-[#F0EBE0] font-semibold mb-1 relative z-10">OT Hours (Week)</p>
            <p className="text-xs text-gray-200 relative z-10">$4,826 additional cost</p>
            <div className="mt-2 relative z-10">
              <div className="w-full h-2 bg-[#110F0B]/10 rounded-full overflow-hidden">
                <div className="h-full bg-[rgba(201,168,76,0.12)]" style={{ width: '84%' }}></div>
              </div>
            </div>
          </div>

          {/* Shift Swap Requests */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="p-2 bg-amber-500/20 rounded-lg">
                <Repeat className="w-5 h-5 text-[#E8C060]" />
              </div>
              <span className="text-2xl font-bold text-white">7</span>
            </div>
            <p className="text-[#F0EBE0] font-semibold mb-1 relative z-10">Swap Requests</p>
            <p className="text-xs text-gray-200 relative z-10">4 pending approval</p>
            <Link href="/calendar?tab=swaps" className="text-xs text-[#E8C060] hover:text-[#E8C060] mt-2 inline-block relative z-10">
              Review swaps →
            </Link>
          </div>

          {/* Break Compliance */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="p-2 rounded-sm" style={{ background: 'rgba(201,168,76,0.08)' }}>
                <CheckCircle className="w-5 h-5" style={{ color: '#C9A84C' }} />
              </div>
              <span className="text-2xl font-bold text-white">96%</span>
            </div>
            <p className="text-[#F0EBE0] font-semibold mb-1 relative z-10">Break Compliance</p>
            <p className="text-xs text-gray-200 relative z-10">2 missed breaks today</p>
            <Link href="/attendance?view=breaks" className="text-xs mt-2 inline-block relative z-10" style={{ color: '#C9A84C' }}>
              View details →
            </Link>
          </div>
        </div>

        {/* Oracle Predictions & Recent Incidents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Oracle AI Predictions */}
          <Link href="/oracle" className="block">
            <div className="glass-tile glass-tile-gold p-6 cursor-pointer transition-transform">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-amber-400" />
                  <h2 className="text-xl font-bold text-white">Oracle Predictions</h2>
                </div>
                <ArrowRight className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-400/40/30">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#C9A84C] mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">15% volume increase predicted</p>
                      <p className="text-sm text-gray-200 mt-1">Next week - Consider adding 3 FTE</p>
                      <p className="text-xs text-[#C9A84C] mt-1">92% confidence</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#F0EBE0] mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Call-off risk: High</p>
                      <p className="text-sm text-gray-200 mt-1">Friday - Flu season peak expected</p>
                      <p className="text-xs text-[#C9A84C] mt-1">Suggest backup staffing</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-[#F0EBE0] mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Optimal staffing achieved</p>
                      <p className="text-sm text-gray-200 mt-1">This week - On track for budget goals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Recent Incidents & Safety */}
          <div className="glass-tile glass-tile-red p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-red-400" />
                <h2 className="text-xl font-bold text-white">Recent Incidents</h2>
              </div>
              <Link href="/qapi" className="text-[#F0EBE0] hover:text-[#F0EBE0] text-sm flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm">Patient Fall - Room 304</p>
                    <p className="text-xs text-gray-200 mt-1">Under investigation</p>
                    <p className="text-xs text-[#F0EBE0] mt-1">2 hours ago</p>
                  </div>
                  <span className="px-2 py-1 bg-[rgba(201,168,76,0.06)] rounded text-xs text-[#F0EBE0] font-semibold">HIGH</span>
                </div>
              </div>
              <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm">Medication Near Miss</p>
                    <p className="text-xs text-gray-200 mt-1">Corrective action in progress</p>
                    <p className="text-xs text-[#F0EBE0] mt-1">5 hours ago</p>
                  </div>
                  <span className="px-2 py-1 bg-[rgba(201,168,76,0.06)] rounded text-xs text-[#F0EBE0] font-semibold">MED</span>
                </div>
              </div>
              <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm">Equipment Maintenance</p>
                    <p className="text-xs text-gray-200 mt-1">Completed successfully</p>
                    <p className="text-xs text-[#F0EBE0] mt-1">1 day ago</p>
                  </div>
                  <span className="px-2 py-1 bg-[rgba(201,168,76,0.06)] rounded text-xs text-[#F0EBE0] font-semibold">LOW</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Milestones & Hiring Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Employee Milestones */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Cake className="w-6 h-6 text-amber-400" />
              <h2 className="text-xl font-bold text-white">This Week's Milestones</h2>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-600/30 hover:border-[rgba(201,168,76,0.45)] transition-all">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎂</div>
                  <div>
                    <p className="font-semibold text-white">3 Birthdays This Week</p>
                    <p className="text-sm text-gray-200 mt-1">Jennifer Lee (Wed), Tom Baker (Thu), Lisa Kim (Fri)</p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-400/40/30 hover:border-[rgba(201,168,76,0.45)]/60 transition-all">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎉</div>
                  <div>
                    <p className="font-semibold text-white">Work Anniversaries</p>
                    <p className="text-sm text-gray-200 mt-1">Dr. Sarah Martinez - 5 years (Monday)</p>
                    <p className="text-sm text-gray-200">Marcus Johnson - 10 years (Friday) 🏆</p>
                  </div>
                </div>
              </div>
              <button className="w-full p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-amber-600/30 hover:border-[rgba(201,168,76,0.45)] transition-all text-center">
                <p className="text-sm font-semibold text-[#E8C060] flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Group Recognition
                </p>
              </button>
            </div>
          </div>

          {/* Hiring Pipeline */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-amber-400" />
                <h2 className="text-xl font-bold text-white">Hiring Pipeline</h2>
              </div>
              <Link href="/hr" className="text-amber-400 hover:text-[#E8C060] text-sm flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between p-3 bg-amber-600/10 rounded-lg border border-amber-600/30">
                <div>
                  <p className="font-semibold text-white">5 Open Positions</p>
                  <p className="text-xs text-gray-200 mt-1">2 RN, 2 CNA, 1 Lab Tech</p>
                </div>
                <Briefcase className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex items-center justify-between p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                <div>
                  <p className="font-semibold text-white">8 Active Candidates</p>
                  <p className="text-xs text-gray-200 mt-1">3 interviews scheduled this week</p>
                </div>
                <Video className="w-5 h-5 text-[#F0EBE0]" />
              </div>
              <div className="flex items-center justify-between p-3 bg-amber-500/10 rounded-lg border border-amber-400/40/30">
                <div>
                  <p className="font-semibold text-white">2 Offers Extended</p>
                  <p className="text-xs text-gray-200 mt-1">Awaiting responses</p>
                </div>
                <FileText className="w-5 h-5 text-[#C9A84C]" />
              </div>
            </div>
          </div>
        </div>

        {/* Asset Vault & Quick Comms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Asset Vault Status */}
          <Link href="/vault" className="block">
            <div className="glass-tile glass-tile-yellow p-6 cursor-pointer transition-transform">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <Package className="w-6 h-6 text-[#C9A84C]" />
                  <h2 className="text-xl font-bold text-white">Equipment Status</h2>
                </div>
                <ArrowRight className="w-5 h-5 text-[#F0EBE0]" />
              </div>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)] text-center">
                  <p className="text-2xl font-bold text-white">147</p>
                  <p className="text-xs text-gray-200 mt-1">Available</p>
                </div>
                <div className="p-3 bg-amber-600/10 rounded-lg border border-amber-600/30 text-center">
                  <p className="text-2xl font-bold text-white">23</p>
                  <p className="text-xs text-gray-200 mt-1">In Use</p>
                </div>
                <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)] text-center">
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="text-xs text-gray-200 mt-1">Maintenance</p>
                </div>
                <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)] text-center">
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-xs text-gray-200 mt-1">Out of Service</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Quick Team Message */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <MessageSquare className="w-6 h-6 text-amber-400" />
              <h2 className="text-xl font-bold text-white">Quick Message</h2>
            </div>
            <div className="space-y-3 relative z-10">
              <textarea
                placeholder="Send a message to your team..."
                className="w-full h-28 bg-[#110F0B]/5 border border-white/20 rounded-lg p-3 text-white placeholder-amber-900/50 focus:border-amber-400 focus:outline-none resize-none"
              />
              <div className="flex gap-3">
                <select className="flex-1 bg-[#110F0B]/5 border border-white/20 rounded-lg px-3 py-2 text-white focus:border-amber-400 focus:outline-none">
                  <option>All Staff</option>
                  <option>Emergency Dept</option>
                  <option>ICU</option>
                  <option>Nursing</option>
                  <option>Night Shift</option>
                  <option>Day Shift</option>
                </select>
                <button className="px-6 py-2 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg font-semibold text-white transition-all flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-amber-600/20 border border-amber-600/30 rounded-full text-xs text-amber-400 hover:bg-amber-600/30 transition-all">
                  📢 Announcement
                </button>
                <button className="px-3 py-1 bg-amber-500/20 border border-amber-400/40/30 rounded-full text-xs text-[#C9A84C] hover:bg-amber-500/30 transition-all">
                  ⚠️ Urgent
                </button>
                <button className="px-3 py-1 rounded-full text-xs transition-all" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', color: '#9E8F75' }}>
                  👍 Good News
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payroll & Approval Center */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Pending Approvals */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <RefreshCw className="w-6 h-6 text-amber-400" />
              <h2 className="text-lg font-bold text-white">Pending Approvals</h2>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-400/40/30">
                <p className="font-semibold text-white text-sm">12 items need review</p>
                <p className="text-xs text-gray-200 mt-1">Timesheets, expenses, requests</p>
              </div>
              <Link href="/dashboard?tab=approvals" className="block p-3 bg-[#110F0B]/5 rounded-lg border border-white/10 hover:border-[rgba(201,168,76,0.45)] transition-all text-center">
                <p className="text-sm font-semibold text-[#C9A84C]">Review All →</p>
              </Link>
            </div>
          </div>

          {/* This Week's Payroll */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <DollarSign className="w-6 h-6" style={{ color: '#C9A84C' }} />
              <h2 className="text-lg font-bold text-white">Payroll Preview</h2>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                <p className="font-semibold text-white text-sm">$156,340</p>
                <p className="text-xs text-gray-200 mt-1">Estimated this period</p>
              </div>
              <Link href="/payroll" className="block p-3 bg-[#110F0B]/5 rounded-lg border border-white/10 transition-all text-center">
                <p className="text-sm font-semibold" style={{ color: '#C9A84C' }}>View Breakdown →</p>
              </Link>
            </div>
          </div>

          {/* Team Satisfaction */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <ThumbsUp className="w-6 h-6 text-amber-400" />
              <h2 className="text-lg font-bold text-white">Team Morale</h2>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-600/30">
                <p className="font-semibold text-white text-sm">4.2 / 5.0</p>
                <p className="text-xs text-gray-200 mt-1">This month's avg rating</p>
              </div>
              <Link href="/team-culture" className="block p-3 bg-[#110F0B]/5 rounded-lg border border-white/10 hover:border-[rgba(201,168,76,0.22)] transition-all text-center">
                <p className="text-sm font-semibold text-[#E8C060]">View Insights →</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Patient Satisfaction & Grievances - Healthcare Critical */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Patient Satisfaction Scores */}
          <div className="glass-tile glass-tile-green p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-6 h-6 text-green-400" />
                <h2 className="text-xl font-bold text-white">Patient Satisfaction</h2>
              </div>
              <Link href="/patient-surveys" className="text-[#F0EBE0] hover:text-[#F0EBE0] text-sm flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold text-white">4.6 / 5.0</p>
                  <p className="text-sm text-gray-200 mt-1">This month average</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-[#F0EBE0]">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-2xl font-bold">+8%</span>
                  </div>
                  <p className="text-xs text-[#C9A84C]">vs last month</p>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-amber-50">Care Quality</span>
                    <span className="text-sm font-bold text-white">4.8</span>
                  </div>
                  <div className="w-full h-2 bg-[#110F0B]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '96%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-amber-50">Staff Communication</span>
                    <span className="text-sm font-bold text-white">4.5</span>
                  </div>
                  <div className="w-full h-2 bg-[#110F0B]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-amber-50">Facility Cleanliness</span>
                    <span className="text-sm font-bold text-white">4.7</span>
                  </div>
                  <div className="w-full h-2 bg-[#110F0B]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-white/10">
                <p className="text-xs text-[#C9A84C]">142 surveys completed this month</p>
              </div>
            </div>
          </div>

          {/* Grievances & Complaints */}
          <div className="glass-tile glass-tile-red p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <AlertOctagon className="w-6 h-6 text-red-400" />
                <h2 className="text-xl font-bold text-white">Grievances & Complaints</h2>
              </div>
              <Link href="/grievances" className="text-[#F0EBE0] hover:text-[#F0EBE0] text-sm flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)] text-center">
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-xs text-gray-200 mt-1">Open</p>
                </div>
                <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)] text-center">
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="text-xs text-gray-200 mt-1">In Review</p>
                </div>
                <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)] text-center">
                  <p className="text-2xl font-bold text-white">18</p>
                  <p className="text-xs text-gray-200 mt-1">Resolved</p>
                </div>
              </div>

              {/* Recent Grievances */}
              <div className="space-y-2">
                <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)] transition-all cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-[rgba(201,168,76,0.06)] rounded text-xs font-bold text-[#F0EBE0]">NEW</span>
                        <p className="font-semibold text-white text-sm">Patient Family Complaint</p>
                      </div>
                      <p className="text-xs text-gray-200">Room 212 - Concerns about response time</p>
                      <p className="text-xs text-[#F0EBE0] mt-1">Filed: 1 hour ago • Response due: 24 hours</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)] transition-all cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-[rgba(201,168,76,0.06)] rounded text-xs font-bold text-[#F0EBE0]">REVIEW</span>
                        <p className="font-semibold text-white text-sm">Staff Grievance</p>
                      </div>
                      <p className="text-xs text-gray-200">Anonymous - Scheduling concerns</p>
                      <p className="text-xs text-[#F0EBE0] mt-1">Filed: 3 days ago • HR reviewing</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full p-3 rounded-sm transition-all" style={{ background: 'rgba(48,10,10,0.4)', border: '1px solid rgba(105,32,32,0.38)' }}>
                <p className="text-sm font-semibold text-[#F0EBE0] flex items-center justify-center gap-2">
                  <AlertOctagon className="w-4 h-4" />
                  File New Grievance
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Communication Integration & ORYX Reporting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Email & Communication Hub */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-amber-400" />
                <h2 className="text-xl font-bold text-white">Communication Hub</h2>
              </div>
              <Link href="/messages" className="text-[#E8C060] hover:text-[#E8C060] text-sm flex items-center gap-1">
                Open Inbox <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-amber-600/10 rounded-lg border border-amber-600/30 hover:border-[rgba(201,168,76,0.45)] transition-all cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <Inbox className="w-5 h-5 text-amber-400" />
                    <p className="font-semibold text-white">Inbox</p>
                  </div>
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-xs text-gray-200">unread messages</p>
                </div>
                <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)] transition-all cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-[#F0EBE0]" />
                    <p className="font-semibold text-white">Outlook</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-[#F0EBE0]" />
                  <p className="text-xs text-gray-200">Connected</p>
                </div>
              </div>

              <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-400/40/30">
                <p className="font-semibold text-white text-sm mb-3">Available Integrations</p>
                <div className="space-y-2">
                  <button className="w-full p-2 bg-[#110F0B]/5 rounded border border-white/10 hover:border-[rgba(201,168,76,0.45)] transition-all flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-amber-400" />
                      <span className="text-sm text-white">Microsoft Outlook</span>
                    </div>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </button>
                  <button className="w-full p-2 bg-[#110F0B]/5 rounded border border-white/10 hover:border-[rgba(201,168,76,0.22)] transition-all flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#F0EBE0]" />
                      <span className="text-sm text-white">Gmail</span>
                    </div>
                    <span className="text-xs text-[#C9A84C]">Connect</span>
                  </button>
                  <button className="w-full p-2 bg-[#110F0B]/5 rounded border border-white/10 hover:border-[rgba(201,168,76,0.45)] transition-all flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#C9A84C]" />
                      <span className="text-sm text-white">Slack</span>
                    </div>
                    <span className="text-xs text-[#C9A84C]">Connect</span>
                  </button>
                </div>
              </div>

              <Link href="/settings/integrations" className="block p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)] transition-all text-center">
                <p className="text-sm font-semibold text-[#E8C060]">Manage Integrations →</p>
              </Link>
            </div>
          </div>

          {/* ORYX Performance Measures */}
          <div className="glass-tile glass-tile-gold p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-amber-400" />
                <h2 className="text-xl font-bold text-white">ORYX Reporting</h2>
              </div>
              <Link href="/qapi?tab=oryx" className="text-[#C9A84C] hover:text-gray-200 text-sm flex items-center gap-1">
                Full Report <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-400/40/30">
                <p className="font-semibold text-white mb-2">Upcoming Deadlines</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Q1 Core Measures</p>
                      <p className="text-xs text-gray-200">IMM-2, STK-4, SEP-1</p>
                    </div>
                    <span className="px-2 py-1 bg-[rgba(201,168,76,0.06)] rounded text-xs font-bold text-[#F0EBE0]">Due: Jan 31</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-600/10 rounded-lg border border-amber-600/30">
                <p className="font-semibold text-white mb-3">Data Collection Status</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-amber-50">Heart Attack Care</span>
                      <span className="text-sm font-bold text-white">87%</span>
                    </div>
                    <div className="w-full h-2 bg-[#110F0B]/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-amber-50">Stroke Care</span>
                      <span className="text-sm font-bold text-white">92%</span>
                    </div>
                    <div className="w-full h-2 bg-[#110F0B]/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-amber-50">Sepsis Management</span>
                      <span className="text-sm font-bold text-white">78%</span>
                    </div>
                    <div className="w-full h-2 bg-[#110F0B]/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[rgba(201,168,76,0.12)]" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link href="/qapi/oryx/enter-data" className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)] transition-all text-center">
                  <FileText className="w-5 h-5 text-[#F0EBE0] mx-auto mb-1" />
                  <p className="text-xs font-semibold text-[#F0EBE0]">Enter Data</p>
                </Link>
                <Link href="/qapi/oryx/instructions" className="p-3 bg-amber-600/10 rounded-lg border border-amber-600/30 hover:border-[rgba(201,168,76,0.45)] transition-all text-center">
                  <FileText className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <p className="text-xs font-semibold text-amber-400">Instructions</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-System Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Department Performance */}
          <div className="glass-tile glass-tile-gold p-6">
            <h2 className="text-xl font-bold text-white mb-4 relative z-10">Department Performance</h2>
            <div className="space-y-3 relative z-10">
              {['Emergency', 'ICU', 'Nursing', 'Radiology', 'Laboratory'].map((dept) => {
                const metrics = dataHub.calculateDepartmentMetrics(dept);
                const score = ((metrics.completedShifts / metrics.totalShifts) * 100) || 95;
                
                return (
                  <div key={dept}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-amber-50">{dept}</span>
                      <span className="text-sm font-bold text-white">{score.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-3 bg-[#110F0B]/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${score >= 90 ? 'bg-green-500' : score >= 75 ? 'bg-[rgba(201,168,76,0.12)]' : 'bg-red-500'}`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-tile glass-tile-yellow p-6">
            <h2 className="text-xl font-bold text-white mb-4 relative z-10">Quick Actions</h2>
            <div className="space-y-3 relative z-10">
              <Link href="/qapi?tab=reports" className="block p-4 bg-[#110F0B]/5 backdrop-blur-sm rounded-lg hover:bg-[#110F0B]/10 border border-white/10 hover:border-[rgba(201,168,76,0.45)] transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-amber-400" />
                    <div>
                      <p className="font-semibold text-white">Generate Executive Report</p>
                      <p className="text-sm text-gray-200">Pull data from all systems</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#C9A84C]" />
                </div>
              </Link>

              <Link href="/time-off" className="block p-4 bg-[#110F0B]/5 backdrop-blur-sm rounded-lg hover:bg-[#110F0B]/10 border border-white/10 hover:border-[rgba(201,168,76,0.45)] transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#C9A84C]" />
                    <div>
                      <p className="font-semibold text-white">Review Time Off Requests</p>
                      <p className="text-sm text-gray-200">{dashboardData.timeOff.pending} pending approval</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#C9A84C]" />
                </div>
              </Link>

              <Link href="/qapi?tab=incidents" className="block p-4 bg-[#110F0B]/5 backdrop-blur-sm rounded-lg hover:bg-[#110F0B]/10 border border-white/10 hover:border-[rgba(201,168,76,0.22)] transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#F0EBE0]" />
                    <div>
                      <p className="font-semibold text-white">Review Open Incidents</p>
                      <p className="text-sm text-gray-200">{dashboardData.quality.openIncidents} requiring attention</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#C9A84C]" />
                </div>
              </Link>

              <Link href="/compliance" className="block p-4 bg-[#110F0B]/5 backdrop-blur-sm rounded-lg hover:bg-[#110F0B]/10 border border-white/10 hover:border-[rgba(201,168,76,0.22)] transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F0EBE0]" />
                    <div>
                      <p className="font-semibold text-white">Compliance Dashboard</p>
                      <p className="text-sm text-gray-200">{dashboardData.compliance.complianceRate}% current</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#C9A84C]" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Manager Notifications & Alerts */}
        <div className="glass-tile glass-tile-gold p-6">
          <h2 className="text-xl font-bold text-white mb-4 relative z-10">Notifications & Alerts</h2>
          <div className="space-y-3 relative z-10">
            <div className="p-4 bg-[rgba(201,168,76,0.06)] backdrop-blur-sm rounded-lg border border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)] transition-all">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#F0EBE0] mt-0.5" />
                <div>
                  <p className="font-semibold text-white">3 Shifts Need Coverage</p>
                  <p className="text-sm text-gray-200 mt-1">Emergency Dept - Today 3PM-11PM</p>
                  <p className="text-xs text-[#C9A84C] mt-1">2 hours ago</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[rgba(201,168,76,0.06)] backdrop-blur-sm rounded-lg border border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)] transition-all">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#F0EBE0] mt-0.5" />
                <div>
                  <p className="font-semibold text-white">8 Time Off Requests Pending</p>
                  <p className="text-sm text-gray-200 mt-1">Approval needed for next week's schedule</p>
                  <p className="text-xs text-[#C9A84C] mt-1">5 hours ago</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-600/10 backdrop-blur-sm rounded-lg border border-amber-600/30 hover:border-[rgba(201,168,76,0.45)] transition-all">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-amber-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">5 New Employee Onboarding</p>
                  <p className="text-sm text-gray-200 mt-1">Orientation scheduled for Monday</p>
                  <p className="text-xs text-[#C9A84C] mt-1">1 day ago</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[rgba(201,168,76,0.06)] backdrop-blur-sm rounded-lg border border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)] transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#F0EBE0] mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Weekly Schedule Published</p>
                  <p className="text-sm text-gray-200 mt-1">All departments confirmed</p>
                  <p className="text-xs text-[#C9A84C] mt-1">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {settingsOpen && (
        <SettingsPanel
          componentName={settingsComponent}
          onClose={() => setSettingsOpen(false)}
        />
      )}

      {showOnboarding && (
        <OnboardingWalkthrough
          onComplete={handleOnboardingComplete}
          onSkip={handleOnboardingSkip}
        />
      )}
    </div>
  );
}


