'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mountain, Calendar, Users, MessageSquare, TrendingUp, Award, Bell, Settings, ChevronRight, Star, Zap, Target, BarChart3, Shield, Bot, CheckCircle, Clock, AlertCircle, Send, UserCheck, ExternalLink, Mail, Briefcase } from 'lucide-react';
import ChatbotCustomizer from '@/components/ChatbotCustomizer';
import DashboardCustomizer from '@/components/DashboardCustomizer';

export default function ManagerBasecamp() {
 const [userName] = useState('Sarah Johnson');
 const [showNotifications, setShowNotifications] = useState(false);
 const [showNoxChat, setShowNoxChat] = useState(false);
 const [showChatCustomizer, setShowChatCustomizer] = useState(false);
 const [showDashboardCustomizer, setShowDashboardCustomizer] = useState(false);
 const [noxPersonality, setNoxPersonality] = useState('smart');
 const [noxAvatar, setNoxAvatar] = useState('robot-blue');
 const [showMoodCheckIn, setShowMoodCheckIn] = useState(true);
 const [selectedMood, setSelectedMood] = useState<string | null>(null);
 const [moodAlertSent, setMoodAlertSent] = useState(false);

 const noxPersonalities = {
 smart: {
 name: '🧠 Smart',
 greeting: 'Good morning, Sarah. I\'ve analyzed today\'s operations and have insights ready for you.',
 style: 'Professional, data-driven, strategic'
 },
 supportive: {
 name: '💙 Supportive',
 greeting: 'Hey Sarah! You\'ve got this today. I\'m here to support you and your team.',
 style: 'Encouraging, empathetic, team-focused'
 },
 efficient: {
 name: '⚡ Efficient',
 greeting: 'Morning, Sarah. Let\'s optimize your workflow and crush today\'s goals.',
 style: 'Quick, actionable, time-focused'
 },
 strategic: {
 name: '♟️ Strategic',
 greeting: 'Sarah, I\'ve identified 3 key opportunities for improvement today.',
 style: 'Big picture, proactive, insightful'
 },
 friendly: {
 name: '😊 Friendly',
 greeting: 'Good morning, Sarah! Ready for another awesome day of leadership?',
 style: 'Warm, conversational, positive'
 },
 direct: {
 name: '🎯 Direct',
 greeting: 'Sarah. Here\'s what needs your attention right now.',
 style: 'No-nonsense, straightforward, priority-focused'
 }
 };

 const moodOptions = [
 { emoji: '😊', label: 'Great!', value: 'great', color: 'green' },
 { emoji: '😌', label: 'Good', value: 'good', color: 'blue' },
 { emoji: '😐', label: 'Okay', value: 'okay', color: 'yellow' },
 { emoji: '😓', label: 'Stressed', value: 'stressed', color: 'orange', alert: true },
 { emoji: '😫', label: 'Overwhelmed', value: 'overwhelmed', color: 'red', alert: true },
 { emoji: '😤', label: 'Frustrated', value: 'frustrated', color: 'orange', alert: true },
 { emoji: '🤯', label: 'Burnt Out', value: 'burnout', color: 'red', alert: true },
 ];

 const handleMoodSelection = (mood: any) => {
 setSelectedMood(mood.value);
 if (mood.alert) {
 setMoodAlertSent(true);
 }
 setTimeout(() => setShowMoodCheckIn(false), 3000);
 };

 return (
 <div className="min-h-screen bg-[#070604]">
 {/* Mood Check-In Modal */}
 {showMoodCheckIn && (
 <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
 <div className="lux-card rounded p-8 max-w-2xl w-full border-2 border-amber-500/40/30 shadow-2xl">
 <h2 className="text-3xl font-bold text-white mb-2 text-center">How are you feeling today, {userName}?</h2>
 <p className="text-[#C9A84C] 200 text-center mb-6">Your wellbeing matters - even as a leader 💙</p>
 
 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
 {moodOptions.map((mood) => (
 <button
 key={mood.value}
 onClick={() => handleMoodSelection(mood)}
 className={`p-4 rounded border-2 transition-all ${
 mood.color === 'green' ? 'bg-[#C9A84C]/10 border-[rgba(201,168,76,0.22)] 500/30 hover:border-[rgba(201,168,76,0.22)] 500/60' :
 mood.color === 'blue' ? 'bg-amber-600/10 border-amber-500/40/30 hover:border-[rgba(201,168,76,0.45)]/60' :
 mood.color === 'yellow' ? 'bg-[rgba(201,168,76,0.06)] border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)]' :
 mood.color === 'orange' ? 'bg-[rgba(201,168,76,0.06)] border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)]' :
 'bg-[#110F0B] 500/10 border-[rgba(201,168,76,0.22)] 500/30 hover:border-[rgba(201,168,76,0.22)] 500/60'
 }`}
 >
 <div className="text-4xl mb-2">{mood.emoji}</div>
 <div className="text-white font-semibold text-sm">{mood.label}</div>
 </button>
 ))}
 </div>

 {moodAlertSent && (
 <div className="p-4 bg-amber-600/20 border border-[rgba(201,168,76,0.22)] 400/30 rounded-lg mb-4">
 <div className="flex items-start gap-3">
 <Bell className="w-5 h-5 text-amber-400 mt-0.5" />
 <div>
 <p className="text-[#C9A84C] 200 font-semibold">Your executive team has been notified</p>
 <p className="text-amber-400 text-sm mt-1">Leadership support will reach out. Remember - taking care of yourself helps you take care of your team. 💙</p>
 </div>
 </div>
 </div>
 )}

 <button
 onClick={() => setShowMoodCheckIn(false)}
 className="w-full py-2 text-[#9E8F75] hover:text-white text-sm transition-colors"
 >
 Skip for now
 </button>
 </div>
 </div>
 )}

 {/* Customizers */}
 {showChatCustomizer && (
 <ChatbotCustomizer />
 )}

 {showDashboardCustomizer && (
 <DashboardCustomizer
 userType="manager"
 onClose={() => setShowDashboardCustomizer(false)}
 />
 )}

 {/* Top Navigation Bar */}
 <nav className="bg-[#110F0B]/80 border-b-2 border-amber-500/40/30 sticky top-0 z-40">
 <div className="max-w-7xl mx-auto px-6 py-4">
 <div className="flex items-center justify-between">
 {/* Logo */}
 <div className="flex items-center gap-3">
 <Mountain className="w-8 h-8 text-amber-400" />
 <span className="text-2xl font-black text-[#C9A84C]">
 Manager Basecamp
 </span>
 </div>

 {/* Right Side */}
 <div className="flex items-center gap-4">
 {/* Notifications */}
 <div className="relative">
 <button
 onClick={() => setShowNotifications(!showNotifications)}
 className="relative p-2 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.04)] rounded-lg transition-all"
 >
 <Bell className="w-6 h-6 text-amber-400" />
 <span className="absolute -top-1 -right-1 bg-[#110F0B] 600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
 5
 </span>
 </button>
 </div>

 {/* User Menu */}
 <div className="flex items-center gap-3 bg-[rgba(201,168,76,0.04)] rounded-lg px-4 py-2">
 <div className="w-10 h-10 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-full flex items-center justify-center text-white font-bold">
 {userName.charAt(0)}
 </div>
 <div>
 <div className="text-white font-semibold">{userName}</div>
 <div className="text-amber-400 text-xs">Manager • RN Supervisor</div>
 </div>
 </div>

 <button
 onClick={() => setShowDashboardCustomizer(true)}
 className="p-2 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.04)] rounded-lg transition-all"
 >
 <Settings className="w-6 h-6 text-amber-400" />
 </button>
 </div>
 </div>
 </div>
 </nav>

 <div className="max-w-7xl mx-auto p-6">
 {/* Welcome Banner */}
 <div className="bg-[rgba(201,168,76,0.08)] rounded p-8 mb-6 border-2 border-[rgba(201,168,76,0.22)] 400/50 shadow-2xl relative overflow-hidden">
 <div className="absolute top-0 right-0 opacity-10">
 <Mountain className="w-64 h-64 text-white" />
 </div>
 <div className="relative z-10">
 <h1 className="text-4xl font-black text-white mb-2">
 Welcome back, {userName}! 👔
 </h1>
 <p className="text-[#C9A84C] 100 text-xl font-semibold mb-4">
 Leadership Dashboard • Your team depends on you
 </p>
 <div className="flex items-center gap-2 text-white/90 mb-3">
 <Briefcase className="w-5 h-5" />
 <span>Monday, January 12, 2026 • 42 staff members working today</span>
 </div>
 </div>
 </div>

 {/* Quick Stats Row */}
 <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
 <div className="bg-[#110F0B] from-REMOVED-900/50 to-emerald-900/50 rounded p-4 border-2 border-[rgba(201,168,76,0.22)] 500/30">
 <div className="flex items-center justify-between mb-2">
 <CheckCircle className="w-8 h-8 text-[#C9A84C] 400" />
 <span className="text-2xl font-bold text-white">96%</span>
 </div>
 <div className="text-[#C9A84C] 200 font-semibold">Team Attendance</div>
 <div className="text-xs text-[#C9A84C] 300 mt-1">2 call-offs today</div>
 </div>

 <div className="bg-[rgba(201,168,76,0.06)] rounded p-4 border-2 border-amber-500/40/30">
 <div className="flex items-center justify-between mb-2">
 <Target className="w-8 h-8 text-[#C9A84C] 400" />
 <span className="text-2xl font-bold text-white">$127K</span>
 </div>
 <div className="text-[#C9A84C] 200 font-semibold">Labor Cost (Week)</div>
 <div className="text-xs text-amber-400 mt-1">Under budget! 💪</div>
 </div>

 <div className="bg-[rgba(201,168,76,0.04)] rounded p-4 border-2 border-amber-500/40/30">
 <div className="flex items-center justify-between mb-2">
 <Star className="w-8 h-8 text-[#C9A84C]" />
 <span className="text-2xl font-bold text-white">4.6</span>
 </div>
 <div className="text-[#F0EBE0]/70 font-semibold">Patient Satisfaction</div>
 <div className="text-xs text-[#C9A84C] mt-1">+8% vs last month</div>
 </div>

 <div className="bg-[rgba(201,168,76,0.06)] rounded p-4 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center justify-between mb-2">
 <AlertCircle className="w-8 h-8 text-[#9E8F75]" />
 <span className="text-2xl font-bold text-white">12</span>
 </div>
 <div className="text-[#9E8F75] font-semibold">Needs Attention</div>
 <div className="text-xs text-[#9E8F75] mt-1">Action items pending</div>
 </div>
 </div>

 {/* Main Content Grid */}
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 {/* Left Column */}
 <div className="lg:col-span-2 space-y-6">
 {/* Quick access links to Command Center */}
 <div className="bg-[rgba(201,168,76,0.06)]/50 rounded p-6 border-2 border-amber-500/40/30">
 <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
 <Zap className="w-6 h-6 text-[#C9A84C]" />
 Quick Actions
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
 <Link href="/dashboard" className="bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg p-4 text-center transition-all shadow-lg group">
 <BarChart3 className="w-8 h-8 text-white mx-auto mb-2 group- transition-transform" />
 <div className="text-white font-semibold text-sm">Command Center</div>
 </Link>
 <Link href="/employees" className="bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg p-4 text-center transition-all shadow-lg group">
 <Users className="w-8 h-8 text-white mx-auto mb-2 group- transition-transform" />
 <div className="text-white font-semibold text-sm">Manage Team</div>
 </Link>
 <Link href="/calendar" className="bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg p-4 text-center transition-all shadow-lg group">
 <Calendar className="w-8 h-8 text-white mx-auto mb-2 group- transition-transform" />
 <div className="text-white font-semibold text-sm">Schedule</div>
 </Link>
 <Link href="/qapi" className="bg-[#110F0B] from-REMOVED-600 to-orange-600 hover:from-[#110F0B] 500 rounded-lg p-4 text-center transition-all shadow-lg group">
 <Shield className="w-8 h-8 text-white mx-auto mb-2 group- transition-transform" />
 <div className="text-white font-semibold text-sm">QAPI</div>
 </Link>
 </div>
 </div>

 {/* Your Reports (You have a boss too!) */}
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
 <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
 <TrendingUp className="w-6 h-6 text-[#C9A84C] 400" />
 Report to Leadership
 </h2>
 <div className="space-y-3">
 <div className="bg-[#110F0B]/50 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center justify-between mb-3">
 <div className="flex items-center gap-3">
 <div className="w-12 h-12 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-full flex items-center justify-center text-white font-bold">
 JD
 </div>
 <div>
 <p className="font-semibold text-white">Jennifer Davis</p>
 <p className="text-sm text-[#C9A84C] 300">Chief Nursing Officer</p>
 </div>
 </div>
 <Link href="/messages" className="px-3 py-1 bg-[#110F0B] 500/20 border border-[rgba(201,168,76,0.22)] rounded-lg text-sm text-[#C9A84C] 300 hover:bg-[#110F0B] 500/30 transition-all">
 Message
 </Link>
 </div>
 <div className="text-sm text-[#9E8F75]">
 <p className="mb-1"><strong>Next 1:1:</strong> Friday 2:00 PM</p>
 <p><strong>Pending:</strong> Weekly report due tomorrow</p>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Right Column */}
 <div className="space-y-6">
 {/* Nox Manager Assistant */}
 <div className="bg-[rgba(201,168,76,0.04)] rounded p-6 border-2 border-amber-500/40/30 shadow-xl">
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-2">
 <Bot className="w-6 h-6 text-amber-400" />
 <h2 className="text-xl font-bold text-white">Nox Assistant</h2>
 </div>
 <div className="flex gap-2">
 <button
 onClick={() => setShowChatCustomizer(true)}
 className="px-3 py-1 bg-[#110F0B] 500/20 border border-[rgba(201,168,76,0.22)] rounded-lg text-xs font-semibold text-[#C9A84C] 300 hover:bg-[#110F0B] 500/30 transition-all"
 >
 Avatar
 </button>
 <button
 onClick={() => setShowNoxChat(!showNoxChat)}
 className="px-3 py-1 bg-amber-500/20 border border-amber-400/40/30 rounded-lg text-sm font-semibold text-[#C9A84C] hover:bg-amber-500/30 transition-all"
 >
 {showNoxChat ? 'Close' : 'Chat'}
 </button>
 </div>
 </div>

 <div className="mb-3 p-3 bg-amber-500/10 rounded-lg border border-amber-400/40/30">
 <p className="text-sm text-amber-50">
 <strong>Your leadership AI partner!</strong> I can help with:
 </p>
 <ul className="text-xs text-[#F0EBE0]/70 mt-2 space-y-1">
 <li>• Team analytics & insights</li>
 <li>• Schedule optimization</li>
 <li>• Budget analysis</li>
 <li>• Compliance tracking</li>
 <li>• Performance reports</li>
 </ul>
 </div>
 </div>

 {/* Team Status */}
 <div className="bg-[rgba(201,168,76,0.06)]/50 rounded p-6 border-2 border-amber-500/40/30">
 <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
 <Users className="w-5 h-5 text-amber-400" />
 Team Status
 </h2>
 <div className="space-y-2">
 <Link href="/employees" className="flex items-center justify-between p-3 bg-[#110F0B]/50 hover:bg-[#110F0B] rounded-lg transition-all group">
 <div className="flex items-center gap-3">
 <CheckCircle className="w-5 h-5 text-[#C9A84C] 400" />
 <span className="text-white font-semibold">42 Active Staff</span>
 </div>
 <ChevronRight className="w-5 h-5 text-[#9E8F75] group-hover:text-amber-400 transition-colors" />
 </Link>
 <Link href="/time-off" className="flex items-center justify-between p-3 bg-[#110F0B]/50 hover:bg-[#110F0B] rounded-lg transition-all group">
 <div className="flex items-center gap-3">
 <Clock className="w-5 h-5 text-[#C9A84C]" />
 <span className="text-white font-semibold">8 Time-Off Requests</span>
 </div>
 <ChevronRight className="w-5 h-5 text-[#9E8F75] group-hover:text-amber-400 transition-colors" />
 </Link>
 <Link href="/qapi" className="flex items-center justify-between p-3 bg-[#110F0B]/50 hover:bg-[#110F0B] rounded-lg transition-all group">
 <div className="flex items-center gap-3">
 <AlertCircle className="w-5 h-5 text-[#9E8F75] 400" />
 <span className="text-white font-semibold">3 Open Incidents</span>
 </div>
 <ChevronRight className="w-5 h-5 text-[#9E8F75] group-hover:text-amber-400 transition-colors" />
 </Link>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}


