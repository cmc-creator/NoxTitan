'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { dataHub } from '@/lib/dataIntegration';
import SettingsPanel from '@/components/SettingsPanel';
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

  useEffect(() => {
    const tier = localStorage.getItem('tier') || 'PROFESSIONAL';
    setUserTier(tier);
    // Ensure dark mode is default
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleSettingsClick = (e: React.MouseEvent, componentName: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSettingsComponent(componentName);
    setSettingsOpen(true);
  };

  return (
    <div className="min-h-screen bg-transparent p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">Command Center</h1>
            <p className="text-lg text-purple-300">Real-time business intelligence and operations hub</p>
          </div>
        </div>

        {/* Active Notifications - Enhanced */}
        <div className="glass-tile glass-tile-yellow mb-6 p-6">
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Bell className="w-6 h-6 text-yellow-300 animate-pulse" />
              </div>
              <h2 className="text-xl font-bold text-white">2 Active Notifications</h2>
            </div>
            <Link href="/notifications" className="text-yellow-300 hover:text-yellow-200 text-sm flex items-center gap-1">
              View All <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-3 relative z-10">
            {/* Open Incidents Notification */}
            <Link href="/qapi?filter=open" className="block">
              <div className="p-4 bg-red-500/10 backdrop-blur-sm rounded-lg border border-red-400/30 hover:border-red-400/60 transition-all cursor-pointer group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertOctagon className="w-5 h-5 text-red-300" />
                      <p className="font-bold text-white group-hover:text-red-200 transition-colors">Open Incidents</p>
                      <span className="px-2 py-0.5 bg-red-500/30 rounded-full text-xs font-bold text-red-200">HIGH PRIORITY</span>
                    </div>
                    <p className="text-sm text-yellow-100 mb-2">2 incidents requiring immediate attention</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-yellow-200">• Patient Fall - Room 304 (2 hours ago)</p>
                      <p className="text-xs text-yellow-200">• Medication Near Miss - ICU (5 hours ago)</p>
                    </div>
                    <p className="text-xs text-red-300 mt-2 font-semibold">Action required: Investigation & documentation</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-yellow-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Expiring Certifications Notification */}
            <Link href="/employees?filter=expiring-certs" className="block">
              <div className="p-4 bg-orange-500/10 backdrop-blur-sm rounded-lg border border-orange-400/30 hover:border-orange-400/60 transition-all cursor-pointer group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5 text-orange-300" />
                      <p className="font-bold text-white group-hover:text-orange-200 transition-colors">Expiring Certifications</p>
                      <span className="px-2 py-0.5 bg-orange-500/30 rounded-full text-xs font-bold text-orange-200">URGENT</span>
                    </div>
                    <p className="text-sm text-yellow-100 mb-2">1 certification expiring within 30 days</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-yellow-200">• Jennifer Lee - BLS Certification (Expires: Feb 8, 2026)</p>
                    </div>
                    <p className="text-xs text-orange-300 mt-2 font-semibold">Action required: Schedule renewal training</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-yellow-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Employees */}
          <Link href="/employees" className="block">
            <div className="glass-tile glass-tile-blue p-6 cursor-pointer group transition-all">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Users className="w-6 h-6 text-blue-300" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 relative z-10">{dashboardData.employees.active}</h3>
              <p className="text-purple-100 font-semibold relative z-10">Active Employees</p>
              <p className="text-sm text-purple-200 mt-2 relative z-10">Avg Performance: {dashboardData.employees.avgPerformance.toFixed(1)}%</p>
              <p className="text-xs text-purple-300 mt-1 relative z-10">{dashboardData.employees.total - dashboardData.employees.active} on leave</p>
            </div>
          </Link>

          {/* Scheduling */}
          <Link href="/calendar" className="block">
            <div className="glass-tile glass-tile-green p-6 cursor-pointer group transition-all">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <Calendar className="w-6 h-6 text-green-300" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 relative z-10">{dashboardData.scheduling.upcomingShifts}</h3>
              <p className="text-purple-100 font-semibold relative z-10">Upcoming Shifts</p>
              <p className="text-sm text-purple-200 mt-2 relative z-10">Coverage: {dashboardData.scheduling.coverageRate}%</p>
              <p className="text-xs text-purple-300 mt-1 relative z-10">{dashboardData.scheduling.totalShifts - dashboardData.scheduling.completedShifts} open shifts</p>
            </div>
          </Link>

          {/* Time Off */}
          <Link href="/time-off" className="block">
            <div className="glass-tile glass-tile-purple p-6 cursor-pointer group transition-all">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <Clock className="w-6 h-6 text-purple-300" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 relative z-10">{dashboardData.timeOff.pending}</h3>
              <p className="text-purple-100 font-semibold relative z-10">Pending Requests</p>
              <p className="text-sm text-purple-200 mt-2 relative z-10">{dashboardData.timeOff.approved} approved this month</p>
              <p className="text-xs text-purple-300 mt-1 relative z-10">{dashboardData.timeOff.denied || 2} denied</p>
            </div>
          </Link>

          {/* Quality & Safety */}
          <Link href="/qapi" className="block">
            <div className="glass-tile glass-tile-red p-6 cursor-pointer group transition-all">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                  <AlertTriangle className="w-6 h-6 text-red-300" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 relative z-10">{dashboardData.quality.openIncidents}</h3>
              <p className="text-purple-100 font-semibold relative z-10">Open Incidents</p>
              <p className="text-sm text-purple-200 mt-2 relative z-10">{dashboardData.quality.totalIncidents} total incidents</p>
              <p className="text-xs text-purple-300 mt-1 relative z-10">45 resolved</p>
            </div>
          </Link>
        </div>

        {/* Shift Handoff/Report - Critical for 24/7 Operations */}
        <div className="glass-tile glass-tile-blue mb-8 p-6">
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <ClipboardList className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-bold text-white">Last Shift Report</h2>
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs font-semibold text-blue-300">Night Shift 11PM-7AM</span>
            </div>
            <div className="flex gap-3">
              <Link href="/shift-reports?view=all" className="text-blue-300 hover:text-blue-200 text-sm flex items-center gap-1">
                View History <FolderOpen className="w-4 h-4" />
              </Link>
              <button className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg text-sm font-semibold text-blue-300 hover:bg-blue-500/30 transition-all">
                Submit Report
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {/* Report Summary */}
            <div className="lg:col-span-2 space-y-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="font-semibold text-white">Submitted by: Sarah Johnson, RN (Night Supervisor)</p>
                  <span className="text-xs text-purple-300">6:45 AM</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-semibold text-blue-300">Patient Census:</p>
                    <p className="text-sm text-purple-100">32 patients (2 admissions, 1 discharge, 0 transfers)</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-300">Key Events:</p>
                    <p className="text-sm text-purple-100">• Room 304 patient fall - assessed, no injuries, incident report filed</p>
                    <p className="text-sm text-purple-100">• Equipment: Ventilator 3 sent for maintenance</p>
                    <p className="text-sm text-purple-100">• Staffing: All positions filled, no call-offs</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-300">Follow-up Needed:</p>
                    <p className="text-sm text-yellow-200">• Room 208: Patient requires mental health eval (psychiatry consult requested)</p>
                    <p className="text-sm text-yellow-200">• Pharmacy: 3 medication orders pending day shift verification</p>
                  </div>
                </div>
              </div>
              <Link href="/shift-reports/write" className="block p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-400/30 hover:border-blue-400/60 transition-all">
                <div className="flex items-center justify-center gap-2 text-blue-300">
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
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-400/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Emergency</span>
                    <CheckCircle className="w-4 h-4 text-green-300" />
                  </div>
                  <p className="text-xs text-purple-200 mt-1">Quiet night, all stable</p>
                </div>
                <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-400/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">ICU</span>
                    <AlertCircle className="w-4 h-4 text-yellow-300" />
                  </div>
                  <p className="text-xs text-purple-200 mt-1">1 critical - needs monitoring</p>
                </div>
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-400/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Med-Surg</span>
                    <CheckCircle className="w-4 h-4 text-green-300" />
                  </div>
                  <p className="text-xs text-purple-200 mt-1">No issues to report</p>
                </div>
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-400/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Psych Unit</span>
                    <CheckCircle className="w-4 h-4 text-green-300" />
                  </div>
                  <p className="text-xs text-purple-200 mt-1">All calm, no incidents</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Overview - Critical Manager Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* FTE (Full Time Equivalent) */}
          <div className="glass-tile glass-tile-green p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Briefcase className="w-6 h-6 text-green-300" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1 relative z-10">147.8</h3>
            <p className="text-purple-100 font-semibold relative z-10">Total FTE</p>
            <p className="text-sm text-purple-200 mt-2 relative z-10">Target: 150 FTE</p>
            <p className="text-xs text-green-300 mt-1 relative z-10">Within budget ✓</p>
          </div>

          {/* EPOB (Employee Per Occupied Bed) */}
          <div className="glass-tile glass-tile-cyan p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <Activity className="w-6 h-6 text-cyan-300" />
              </div>
              <TrendingUp className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1 relative z-10">4.2</h3>
            <p className="text-purple-100 font-semibold relative z-10">EPOB Ratio</p>
            <p className="text-sm text-purple-200 mt-2 relative z-10">Industry avg: 4.5</p>
            <p className="text-xs text-cyan-300 mt-1 relative z-10">Above standard ✓</p>
          </div>

          {/* Labor Cost */}
          <div className="glass-tile glass-tile-yellow p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <DollarSign className="w-6 h-6 text-yellow-300" />
              </div>
              <TrendingDown className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1 relative z-10">$127K</h3>
            <p className="text-purple-100 font-semibold relative z-10">Weekly Labor Cost</p>
            <p className="text-sm text-purple-200 mt-2 relative z-10">Budget: $135K/week</p>
            <p className="text-xs text-yellow-300 mt-1 relative z-10">12% overtime this week</p>
          </div>
        </div>

        {/* Real-Time Staff & Guild Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Live Staff Status */}
          <div className="glass-tile glass-tile-blue p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <h2 className="text-xl font-bold text-white">Staff On Duty</h2>
              <Link href="/employees" className="text-blue-300 hover:text-blue-200 text-sm flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-semibold text-white">42 Clocked In</p>
                    <p className="text-xs text-purple-200">Current shift</p>
                  </div>
                </div>
                <UserCheck className="w-5 h-5 text-green-300" />
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-white">18 Available</p>
                    <p className="text-xs text-purple-200">Not scheduled</p>
                  </div>
                </div>
                <Users className="w-5 h-5 text-blue-300" />
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-white">5 On Break</p>
                    <p className="text-xs text-purple-200">Return in 15-30 min</p>
                  </div>
                </div>
                <Clock className="w-5 h-5 text-yellow-300" />
              </div>
            </div>
          </div>

          {/* Guild Leaderboard */}
          <Link href="/guild" className="block">
            <div className="glass-tile glass-tile-purple p-6 cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-xl font-bold text-white">Guild Leaderboard</h2>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-300" />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-lg border border-yellow-400/30">
                  <div className="flex items-center justify-center w-8 h-8 bg-yellow-500/30 rounded-full">
                    <span className="text-lg font-bold text-yellow-200">1</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Sarah Johnson</p>
                    <p className="text-xs text-purple-200">Emergency Dept</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-white">2,450</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-300/20 rounded-full">
                    <span className="text-sm font-bold text-gray-300">2</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Michael Chen</p>
                    <p className="text-xs text-purple-200">ICU</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-gray-400" />
                    <span className="font-bold text-white">2,180</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center justify-center w-8 h-8 bg-orange-300/20 rounded-full">
                    <span className="text-sm font-bold text-orange-300">3</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Emily Rodriguez</p>
                    <p className="text-xs text-purple-200">Nursing</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-orange-400" />
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
          <div className="glass-tile glass-tile-pink p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Zap className="w-6 h-6 text-pink-400" />
              <h2 className="text-xl font-bold text-white">Quick Shoutout</h2>
            </div>
            <div className="space-y-4 relative z-10">
              <textarea
                placeholder="Recognize an employee's great work..."
                className="w-full h-24 bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-purple-300 focus:border-pink-400 focus:outline-none resize-none"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Employee name"
                  className="flex-1 bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-purple-300 focus:border-pink-400 focus:outline-none"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold text-white hover:from-pink-600 hover:to-purple-600 transition-all flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Send
                </button>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-300 hover:bg-blue-500/30 transition-all">
                  🎯 Great Teamwork
                </button>
                <button className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-xs text-green-300 hover:bg-green-500/30 transition-all">
                  ⭐ Excellent Care
                </button>
                <button className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs text-purple-300 hover:bg-purple-500/30 transition-all">
                  💪 Above & Beyond
                </button>
              </div>
            </div>
          </div>

          {/* Basecamp Activity Feed */}
          <Link href="/guild?tab=basecamps" className="block">
            <div className="glass-tile glass-tile-cyan p-6 cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-xl font-bold text-white">Basecamp Activity</h2>
                </div>
                <ArrowRight className="w-5 h-5 text-cyan-300" />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-cyan-300 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-white text-sm">Emergency Team completed Challenge</p>
                      <p className="text-xs text-purple-200 mt-1">"Perfect Week" - 7 days no tardiness</p>
                      <p className="text-xs text-cyan-300 mt-1">+500 points • 2 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-white text-sm">ICU Basecamp leveled up!</p>
                      <p className="text-xs text-purple-200 mt-1">Now Level 8 - Unlocked custom badges</p>
                      <p className="text-xs text-cyan-300 mt-1">4 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-white text-sm">New basecamp created</p>
                      <p className="text-xs text-purple-200 mt-1">"Night Shift Warriors" by Maria Garcia</p>
                      <p className="text-xs text-cyan-300 mt-1">12 members • 1 day ago</p>
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
              <div className="p-3 bg-red-500/10 rounded-lg border border-red-400/30">
                <p className="font-semibold text-white text-sm">3 expire this week</p>
                <p className="text-xs text-purple-200 mt-1">BLS, ACLS renewals needed</p>
              </div>
              <Link href="/employees?filter=expiring-certs" className="block p-3 bg-white/5 rounded-lg border border-white/10 hover:border-red-400 transition-all text-center">
                <p className="text-sm font-semibold text-red-300">View Details →</p>
              </Link>
            </div>
          </div>

          {/* Budget Status */}
          <div className="glass-tile glass-tile-green p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Target className="w-6 h-6 text-green-400" />
              <h2 className="text-lg font-bold text-white">Budget Health</h2>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="p-3 bg-green-500/10 rounded-lg border border-green-400/30">
                <p className="font-semibold text-white text-sm">94% of monthly budget</p>
                <p className="text-xs text-purple-200 mt-1">$8.1K remaining this period</p>
              </div>
              <Link href="/payroll" className="block p-3 bg-white/5 rounded-lg border border-white/10 hover:border-green-400 transition-all text-center">
                <p className="text-sm font-semibold text-green-300">View Payroll →</p>
              </Link>
            </div>
          </div>

          {/* Training Progress */}
          <div className="glass-tile glass-tile-blue p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <FileText className="w-6 h-6 text-blue-400" />
              <h2 className="text-lg font-bold text-white">Training Status</h2>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-400/30">
                <p className="font-semibold text-white text-sm">87% completion rate</p>
                <p className="text-xs text-purple-200 mt-1">15 modules in progress</p>
              </div>
              <Link href="/learning" className="block p-3 bg-white/5 rounded-lg border border-white/10 hover:border-blue-400 transition-all text-center">
                <p className="text-sm font-semibold text-blue-300">View Training →</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Today's Operations Critical Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Call-Offs Today */}
          <div className="glass-tile glass-tile-red p-6">
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <UserMinus className="w-5 h-5 text-red-300" />
              </div>
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <p className="text-purple-100 font-semibold mb-1 relative z-10">Call-Offs Today</p>
            <p className="text-xs text-purple-200 relative z-10">ER: 2, ICU: 1</p>
            <Link href="/calendar?view=replacements" className="text-xs text-red-300 hover:text-red-200 mt-2 inline-block relative z-10">
              Find coverage →
            </Link>
          </div>

          {/* Overtime Hours */}
          <div className="glass-tile glass-tile-yellow p-6">
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <TrendingUp className="w-5 h-5 text-yellow-300" />
              </div>
              <span className="text-2xl font-bold text-white">127</span>
            </div>
            <p className="text-purple-100 font-semibold mb-1 relative z-10">OT Hours (Week)</p>
            <p className="text-xs text-purple-200 relative z-10">$4,826 additional cost</p>
            <div className="mt-2 relative z-10">
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500" style={{ width: '84%' }}></div>
              </div>
            </div>
          </div>

          {/* Shift Swap Requests */}
          <div className="glass-tile glass-tile-cyan p-6">
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Repeat className="w-5 h-5 text-cyan-300" />
              </div>
              <span className="text-2xl font-bold text-white">7</span>
            </div>
            <p className="text-purple-100 font-semibold mb-1 relative z-10">Swap Requests</p>
            <p className="text-xs text-purple-200 relative z-10">4 pending approval</p>
            <Link href="/calendar?tab=swaps" className="text-xs text-cyan-300 hover:text-cyan-200 mt-2 inline-block relative z-10">
              Review swaps →
            </Link>
          </div>

          {/* Break Compliance */}
          <div className="glass-tile glass-tile-green p-6">
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-300" />
              </div>
              <span className="text-2xl font-bold text-white">96%</span>
            </div>
            <p className="text-purple-100 font-semibold mb-1 relative z-10">Break Compliance</p>
            <p className="text-xs text-purple-200 relative z-10">2 missed breaks today</p>
            <Link href="/attendance?view=breaks" className="text-xs text-green-300 hover:text-green-200 mt-2 inline-block relative z-10">
              View details →
            </Link>
          </div>
        </div>

        {/* Oracle Predictions & Recent Incidents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Oracle AI Predictions */}
          <Link href="/oracle" className="block">
            <div className="glass-tile glass-tile-purple p-6 cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-purple-400" />
                  <h2 className="text-xl font-bold text-white">Oracle Predictions</h2>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-300" />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-400/30">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-300 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">15% volume increase predicted</p>
                      <p className="text-sm text-purple-200 mt-1">Next week - Consider adding 3 FTE</p>
                      <p className="text-xs text-purple-300 mt-1">92% confidence</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-red-500/10 rounded-lg border border-red-400/30">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-300 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Call-off risk: High</p>
                      <p className="text-sm text-purple-200 mt-1">Friday - Flu season peak expected</p>
                      <p className="text-xs text-purple-300 mt-1">Suggest backup staffing</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-400/30">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-green-300 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Optimal staffing achieved</p>
                      <p className="text-sm text-purple-200 mt-1">This week - On track for budget goals</p>
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
              <Link href="/qapi" className="text-red-300 hover:text-red-200 text-sm flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="p-3 bg-red-500/10 rounded-lg border border-red-400/30">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm">Patient Fall - Room 304</p>
                    <p className="text-xs text-purple-200 mt-1">Under investigation</p>
                    <p className="text-xs text-red-300 mt-1">2 hours ago</p>
                  </div>
                  <span className="px-2 py-1 bg-red-500/20 rounded text-xs text-red-300 font-semibold">HIGH</span>
                </div>
              </div>
              <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-400/30">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm">Medication Near Miss</p>
                    <p className="text-xs text-purple-200 mt-1">Corrective action in progress</p>
                    <p className="text-xs text-yellow-300 mt-1">5 hours ago</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-500/20 rounded text-xs text-yellow-300 font-semibold">MED</span>
                </div>
              </div>
              <div className="p-3 bg-green-500/10 rounded-lg border border-green-400/30">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm">Equipment Maintenance</p>
                    <p className="text-xs text-purple-200 mt-1">Completed successfully</p>
                    <p className="text-xs text-green-300 mt-1">1 day ago</p>
                  </div>
                  <span className="px-2 py-1 bg-green-500/20 rounded text-xs text-green-300 font-semibold">LOW</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Milestones & Hiring Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Employee Milestones */}
          <div className="glass-tile glass-tile-pink p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Cake className="w-6 h-6 text-pink-400" />
              <h2 className="text-xl font-bold text-white">This Week's Milestones</h2>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="p-3 bg-pink-500/10 rounded-lg border border-pink-400/30 hover:border-pink-400/60 transition-all">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎂</div>
                  <div>
                    <p className="font-semibold text-white">3 Birthdays This Week</p>
                    <p className="text-sm text-purple-200 mt-1">Jennifer Lee (Wed), Tom Baker (Thu), Lisa Kim (Fri)</p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-400/30 hover:border-purple-400/60 transition-all">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎉</div>
                  <div>
                    <p className="font-semibold text-white">Work Anniversaries</p>
                    <p className="text-sm text-purple-200 mt-1">Dr. Sarah Martinez - 5 years (Monday)</p>
                    <p className="text-sm text-purple-200">Marcus Johnson - 10 years (Friday) 🏆</p>
                  </div>
                </div>
              </div>
              <button className="w-full p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg border border-pink-400/30 hover:border-pink-400/60 transition-all text-center">
                <p className="text-sm font-semibold text-pink-300 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Group Recognition
                </p>
              </button>
            </div>
          </div>

          {/* Hiring Pipeline */}
          <div className="glass-tile glass-tile-blue p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-bold text-white">Hiring Pipeline</h2>
              </div>
              <Link href="/hr/recruitment" className="text-blue-300 hover:text-blue-200 text-sm flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg border border-blue-400/30">
                <div>
                  <p className="font-semibold text-white">5 Open Positions</p>
                  <p className="text-xs text-purple-200 mt-1">2 RN, 2 CNA, 1 Lab Tech</p>
                </div>
                <Briefcase className="w-5 h-5 text-blue-300" />
              </div>
              <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-400/30">
                <div>
                  <p className="font-semibold text-white">8 Active Candidates</p>
                  <p className="text-xs text-purple-200 mt-1">3 interviews scheduled this week</p>
                </div>
                <Video className="w-5 h-5 text-green-300" />
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg border border-purple-400/30">
                <div>
                  <p className="font-semibold text-white">2 Offers Extended</p>
                  <p className="text-xs text-purple-200 mt-1">Awaiting responses</p>
                </div>
                <FileText className="w-5 h-5 text-purple-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Asset Vault & Quick Comms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Asset Vault Status */}
          <Link href="/vault" className="block">
            <div className="glass-tile glass-tile-yellow p-6 cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <Package className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-xl font-bold text-white">Equipment Status</h2>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-300" />
              </div>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-400/30 text-center">
                  <p className="text-2xl font-bold text-white">147</p>
                  <p className="text-xs text-purple-200 mt-1">Available</p>
                </div>
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-400/30 text-center">
                  <p className="text-2xl font-bold text-white">23</p>
                  <p className="text-xs text-purple-200 mt-1">In Use</p>
                </div>
                <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-400/30 text-center">
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="text-xs text-purple-200 mt-1">Maintenance</p>
                </div>
                <div className="p-3 bg-red-500/10 rounded-lg border border-red-400/30 text-center">
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-xs text-purple-200 mt-1">Out of Service</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Quick Team Message */}
          <div className="glass-tile glass-tile-cyan p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Quick Message</h2>
            </div>
            <div className="space-y-3 relative z-10">
              <textarea
                placeholder="Send a message to your team..."
                className="w-full h-28 bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-purple-300 focus:border-cyan-400 focus:outline-none resize-none"
              />
              <div className="flex gap-3">
                <select className="flex-1 bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:outline-none">
                  <option>All Staff</option>
                  <option>Emergency Dept</option>
                  <option>ICU</option>
                  <option>Nursing</option>
                  <option>Night Shift</option>
                  <option>Day Shift</option>
                </select>
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-300 hover:bg-blue-500/30 transition-all">
                  📢 Announcement
                </button>
                <button className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs text-purple-300 hover:bg-purple-500/30 transition-all">
                  ⚠️ Urgent
                </button>
                <button className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-xs text-green-300 hover:bg-green-500/30 transition-all">
                  👍 Good News
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payroll & Approval Center */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Pending Approvals */}
          <div className="glass-tile glass-tile-purple p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <RefreshCw className="w-6 h-6 text-purple-400" />
              <h2 className="text-lg font-bold text-white">Pending Approvals</h2>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-400/30">
                <p className="font-semibold text-white text-sm">12 items need review</p>
                <p className="text-xs text-purple-200 mt-1">Timesheets, expenses, requests</p>
              </div>
              <Link href="/dashboard?tab=approvals" className="block p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-400 transition-all text-center">
                <p className="text-sm font-semibold text-purple-300">Review All →</p>
              </Link>
            </div>
          </div>

          {/* This Week's Payroll */}
          <div className="glass-tile glass-tile-green p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <DollarSign className="w-6 h-6 text-green-400" />
              <h2 className="text-lg font-bold text-white">Payroll Preview</h2>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="p-3 bg-green-500/10 rounded-lg border border-green-400/30">
                <p className="font-semibold text-white text-sm">$156,340</p>
                <p className="text-xs text-purple-200 mt-1">Estimated this period</p>
              </div>
              <Link href="/payroll" className="block p-3 bg-white/5 rounded-lg border border-white/10 hover:border-green-400 transition-all text-center">
                <p className="text-sm font-semibold text-green-300">View Breakdown →</p>
              </Link>
            </div>
          </div>

          {/* Team Satisfaction */}
          <div className="glass-tile glass-tile-pink p-6">
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <ThumbsUp className="w-6 h-6 text-pink-400" />
              <h2 className="text-lg font-bold text-white">Team Morale</h2>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="p-3 bg-pink-500/10 rounded-lg border border-pink-400/30">
                <p className="font-semibold text-white text-sm">4.2 / 5.0</p>
                <p className="text-xs text-purple-200 mt-1">This month's avg rating</p>
              </div>
              <Link href="/team-culture" className="block p-3 bg-white/5 rounded-lg border border-white/10 hover:border-pink-400 transition-all text-center">
                <p className="text-sm font-semibold text-pink-300">View Insights →</p>
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
              <Link href="/patient-surveys" className="text-green-300 hover:text-green-200 text-sm flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold text-white">4.6 / 5.0</p>
                  <p className="text-sm text-purple-200 mt-1">This month average</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-green-300">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-2xl font-bold">+8%</span>
                  </div>
                  <p className="text-xs text-purple-300">vs last month</p>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-purple-100">Care Quality</span>
                    <span className="text-sm font-bold text-white">4.8</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '96%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-purple-100">Staff Communication</span>
                    <span className="text-sm font-bold text-white">4.5</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-purple-100">Facility Cleanliness</span>
                    <span className="text-sm font-bold text-white">4.7</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-white/10">
                <p className="text-xs text-purple-300">142 surveys completed this month</p>
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
              <Link href="/grievances" className="text-red-300 hover:text-red-200 text-sm flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-red-500/10 rounded-lg border border-red-400/30 text-center">
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-xs text-purple-200 mt-1">Open</p>
                </div>
                <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-400/30 text-center">
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="text-xs text-purple-200 mt-1">In Review</p>
                </div>
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-400/30 text-center">
                  <p className="text-2xl font-bold text-white">18</p>
                  <p className="text-xs text-purple-200 mt-1">Resolved</p>
                </div>
              </div>

              {/* Recent Grievances */}
              <div className="space-y-2">
                <div className="p-3 bg-red-500/10 rounded-lg border border-red-400/30 hover:border-red-400/60 transition-all cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-red-500/30 rounded text-xs font-bold text-red-200">NEW</span>
                        <p className="font-semibold text-white text-sm">Patient Family Complaint</p>
                      </div>
                      <p className="text-xs text-purple-200">Room 212 - Concerns about response time</p>
                      <p className="text-xs text-red-300 mt-1">Filed: 1 hour ago • Response due: 24 hours</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-400/30 hover:border-yellow-400/60 transition-all cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-yellow-500/30 rounded text-xs font-bold text-yellow-200">REVIEW</span>
                        <p className="font-semibold text-white text-sm">Staff Grievance</p>
                      </div>
                      <p className="text-xs text-purple-200">Anonymous - Scheduling concerns</p>
                      <p className="text-xs text-yellow-300 mt-1">Filed: 3 days ago • HR reviewing</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full p-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border border-red-400/30 hover:border-red-400/60 transition-all">
                <p className="text-sm font-semibold text-red-300 flex items-center justify-center gap-2">
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
          <div className="glass-tile glass-tile-cyan p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-bold text-white">Communication Hub</h2>
              </div>
              <Link href="/messages" className="text-cyan-300 hover:text-cyan-200 text-sm flex items-center gap-1">
                Open Inbox <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-400/30 hover:border-blue-400/60 transition-all cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <Inbox className="w-5 h-5 text-blue-300" />
                    <p className="font-semibold text-white">Inbox</p>
                  </div>
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-xs text-purple-200">unread messages</p>
                </div>
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-all cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-green-300" />
                    <p className="font-semibold text-white">Outlook</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <p className="text-xs text-purple-200">Connected</p>
                </div>
              </div>

              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-400/30">
                <p className="font-semibold text-white text-sm mb-3">Available Integrations</p>
                <div className="space-y-2">
                  <button className="w-full p-2 bg-white/5 rounded border border-white/10 hover:border-blue-400 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-300" />
                      <span className="text-sm text-white">Microsoft Outlook</span>
                    </div>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </button>
                  <button className="w-full p-2 bg-white/5 rounded border border-white/10 hover:border-red-400 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-red-300" />
                      <span className="text-sm text-white">Gmail</span>
                    </div>
                    <span className="text-xs text-purple-300">Connect</span>
                  </button>
                  <button className="w-full p-2 bg-white/5 rounded border border-white/10 hover:border-purple-400 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-purple-300" />
                      <span className="text-sm text-white">Slack</span>
                    </div>
                    <span className="text-xs text-purple-300">Connect</span>
                  </button>
                </div>
              </div>

              <Link href="/settings/integrations" className="block p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all text-center">
                <p className="text-sm font-semibold text-cyan-300">Manage Integrations →</p>
              </Link>
            </div>
          </div>

          {/* ORYX Performance Measures */}
          <div className="glass-tile glass-tile-purple p-6">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-bold text-white">ORYX Reporting</h2>
              </div>
              <Link href="/qapi?tab=oryx" className="text-purple-300 hover:text-purple-200 text-sm flex items-center gap-1">
                Full Report <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-400/30">
                <p className="font-semibold text-white mb-2">Upcoming Deadlines</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Q1 Core Measures</p>
                      <p className="text-xs text-purple-200">IMM-2, STK-4, SEP-1</p>
                    </div>
                    <span className="px-2 py-1 bg-yellow-500/20 rounded text-xs font-bold text-yellow-300">Due: Jan 31</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-400/30">
                <p className="font-semibold text-white mb-3">Data Collection Status</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-purple-100">Heart Attack Care</span>
                      <span className="text-sm font-bold text-white">87%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-purple-100">Stroke Care</span>
                      <span className="text-sm font-bold text-white">92%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-purple-100">Sepsis Management</span>
                      <span className="text-sm font-bold text-white">78%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link href="/qapi/oryx/enter-data" className="p-3 bg-green-500/10 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-all text-center">
                  <FileText className="w-5 h-5 text-green-300 mx-auto mb-1" />
                  <p className="text-xs font-semibold text-green-300">Enter Data</p>
                </Link>
                <Link href="/qapi/oryx/instructions" className="p-3 bg-blue-500/10 rounded-lg border border-blue-400/30 hover:border-blue-400/60 transition-all text-center">
                  <FileText className="w-5 h-5 text-blue-300 mx-auto mb-1" />
                  <p className="text-xs font-semibold text-blue-300">Instructions</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-System Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Department Performance */}
          <div className="glass-tile glass-tile-cyan p-6">
            <h2 className="text-xl font-bold text-white mb-4 relative z-10">Department Performance</h2>
            <div className="space-y-3 relative z-10">
              {['Emergency', 'ICU', 'Nursing', 'Radiology', 'Laboratory'].map((dept) => {
                const metrics = dataHub.calculateDepartmentMetrics(dept);
                const score = ((metrics.completedShifts / metrics.totalShifts) * 100) || 95;
                
                return (
                  <div key={dept}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-purple-100">{dept}</span>
                      <span className="text-sm font-bold text-white">{score.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${score >= 90 ? 'bg-green-500' : score >= 75 ? 'bg-yellow-500' : 'bg-red-500'}`}
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
              <Link href="/qapi?tab=reports" className="block p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 border border-white/10 hover:border-blue-400 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-blue-300" />
                    <div>
                      <p className="font-semibold text-white">Generate Executive Report</p>
                      <p className="text-sm text-purple-200">Pull data from all systems</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-purple-300" />
                </div>
              </Link>

              <Link href="/time-off" className="block p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 border border-white/10 hover:border-purple-400 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-300" />
                    <div>
                      <p className="font-semibold text-white">Review Time Off Requests</p>
                      <p className="text-sm text-purple-200">{dashboardData.timeOff.pending} pending approval</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-purple-300" />
                </div>
              </Link>

              <Link href="/qapi?tab=incidents" className="block p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 border border-white/10 hover:border-red-400 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-300" />
                    <div>
                      <p className="font-semibold text-white">Review Open Incidents</p>
                      <p className="text-sm text-purple-200">{dashboardData.quality.openIncidents} requiring attention</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-purple-300" />
                </div>
              </Link>

              <Link href="/compliance" className="block p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 border border-white/10 hover:border-green-400 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <div>
                      <p className="font-semibold text-white">Compliance Dashboard</p>
                      <p className="text-sm text-purple-200">{dashboardData.compliance.complianceRate}% current</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-purple-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Manager Notifications & Alerts */}
        <div className="glass-tile glass-tile-pink p-6">
          <h2 className="text-xl font-bold text-white mb-4 relative z-10">Notifications & Alerts</h2>
          <div className="space-y-3 relative z-10">
            <div className="p-4 bg-red-500/10 backdrop-blur-sm rounded-lg border border-red-400/30 hover:border-red-400/60 transition-all">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-300 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">3 Shifts Need Coverage</p>
                  <p className="text-sm text-purple-200 mt-1">Emergency Dept - Today 3PM-11PM</p>
                  <p className="text-xs text-purple-300 mt-1">2 hours ago</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-500/10 backdrop-blur-sm rounded-lg border border-yellow-400/30 hover:border-yellow-400/60 transition-all">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-300 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">8 Time Off Requests Pending</p>
                  <p className="text-sm text-purple-200 mt-1">Approval needed for next week's schedule</p>
                  <p className="text-xs text-purple-300 mt-1">5 hours ago</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 backdrop-blur-sm rounded-lg border border-blue-400/30 hover:border-blue-400/60 transition-all">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-300 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">5 New Employee Onboarding</p>
                  <p className="text-sm text-purple-200 mt-1">Orientation scheduled for Monday</p>
                  <p className="text-xs text-purple-300 mt-1">1 day ago</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-500/10 backdrop-blur-sm rounded-lg border border-green-400/30 hover:border-green-400/60 transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-300 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Weekly Schedule Published</p>
                  <p className="text-sm text-purple-200 mt-1">All departments confirmed</p>
                  <p className="text-xs text-purple-300 mt-1">2 days ago</p>
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
    </div>
  );
}
