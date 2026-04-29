'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mountain, Home, Calendar, Users, MessageSquare, FileText, TrendingUp, Award, Heart, Lightbulb, BookOpen, DollarSign, ShieldCheck, Bell, Settings, LogOut, ChevronRight, Star, Zap, Coffee, Flame, Target, Gift, PartyPopper, Gamepad2, ThumbsUp, CheckCircle, Clock, AlertCircle, Send, UserCheck, Bot, ExternalLink, Mail } from 'lucide-react';

export default function Basecamp() {
 const [userName] = useState('Alex');
 const [showNotifications, setShowNotifications] = useState(false);
 const [clockedIn, setClockedIn] = useState(false);
 const [lastClockAction, setLastClockAction] = useState<string | null>(null);
 const [showTitanChat, setShowTitanChat] = useState(false);
 const [lateNotificationSent, setLateNotificationSent] = useState(false);
 const [showTeamMessage, setShowTeamMessage] = useState(false);
 const [teamMessage, setTeamMessage] = useState('');
 const [selectedTeamMembers, setSelectedTeamMembers] = useState<string[]>([]);
 const [titanPersonality, setTitanPersonality] = useState('smart');
 const [showPersonalityPicker, setShowPersonalityPicker] = useState(false);
 const [showMoodCheckIn, setShowMoodCheckIn] = useState(true);
 const [selectedMood, setSelectedMood] = useState<string | null>(null);
 const [moodAlertSent, setMoodAlertSent] = useState(false);
 const [showCoworkers, setShowCoworkers] = useState(true);

 const encouragements = [
 "You're crushing it today! 🔥",
 "Your positive energy is contagious! ✨",
 "You make this place better! 💪",
 "Legend status achieved! 🏆",
 "You're the MVP! 🌟",
 "Absolutely stellar work! ⭐"
 ];

 const dadJokes = [
 "Why don't scientists trust atoms? Because they make up everything! 😄",
 "I told my wife she was drawing her eyebrows too high. She looked surprised! 😂",
 "What do you call a fake noodle? An impasta! 🍝",
 "Why did the scarecrow win an award? He was outstanding in his field! 🌾",
 "I'm reading a book about anti-gravity. It's impossible to put down! 📚",
 "Why don't eggs tell jokes? They'd crack each other up! 🥚",
 "What did the ocean say to the beach? Nothing, it just waved! 🌊",
 "Why did the coffee file a police report? It got mugged! ☕",
 "I used to hate facial hair, but then it grew on me! 🧔",
 "What do you call a bear with no teeth? A gummy bear! 🐻"
 ];

 const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
 const randomDadJoke = dadJokes[Math.floor(Math.random() * dadJokes.length)];

 const titanPersonalities = {
 smart: {
 name: '🧠 Smart',
 greeting: 'Hi Alex! I\'m here to optimize your workflow and provide data-driven insights.',
 style: 'Professional, analytical, efficient'
 },
 funny: {
 name: '😂 Funny',
 greeting: 'Yo Alex! Ready to crush this shift? I promise not to make too many terrible jokes... okay maybe a few 😎',
 style: 'Humorous, casual, dad jokes included'
 },
 sassy: {
 name: '💅 Sassy',
 greeting: 'Well well well, look who decided to show up! Let\'s get this show on the road, honey.',
 style: 'Confident, playful attitude, witty comebacks'
 },
 witty: {
 name: '🎭 Witty',
 greeting: 'Ah, Alex returns! Ready for another thrilling episode of "Workplace Adventures"?',
 style: 'Clever wordplay, subtle humor, quick responses'
 },
 goofy: {
 name: '🤪 Goofy',
 greeting: 'HEYYYY ALEX!!! 🎉 LET\'S DO THIS THING!!! *does happy dance* 💃',
 style: 'Enthusiastic, silly, lots of emojis and energy'
 },
 vulgar: {
 name: '🔥 Vulgar',
 greeting: 'Yo Alex, let\'s get this sh&t done! No time for bull$#%t today, am I right?',
 style: 'Edgy, censored profanity (f^%k, sh&t, d@mn), blunt'
 }
 };

 const moodOptions = [
 { emoji: '😊', label: 'Great!', value: 'great', color: 'green' },
 { emoji: '😌', label: 'Good', value: 'good', color: 'blue' },
 { emoji: '😐', label: 'Okay', value: 'okay', color: 'yellow' },
 { emoji: '😓', label: 'Stressed', value: 'stressed', color: 'orange', alert: true },
 { emoji: '😫', label: 'Burnt Out', value: 'burnout', color: 'red', alert: true },
 { emoji: '😢', label: 'Struggling', value: 'struggling', color: 'red', alert: true },
 { emoji: '😤', label: 'Frustrated', value: 'frustrated', color: 'orange', alert: true },
 { emoji: '🤒', label: 'Not Well', value: 'sick', color: 'purple', alert: true }
 ];

 const todaysCoworkers = [
 // My Department (Emergency)
 { name: 'Sarah Johnson', role: 'Nurse Supervisor', dept: 'Emergency', status: 'clocked-in', shift: '7AM-3PM' },
 { name: 'Michael Chen', role: 'RN', dept: 'Emergency', status: 'clocked-in', shift: '7AM-7PM' },
 { name: 'Jennifer Lee', role: 'CNA', dept: 'Emergency', status: 'clocked-in', shift: '7AM-3PM' },
 { name: 'Tom Baker', role: 'Physician', dept: 'Emergency', status: 'on-break', shift: '6AM-6PM' },
 // Other Departments
 { name: 'Dr. Martinez', role: 'Psychiatrist', dept: 'Mental Health', status: 'clocked-in', shift: '8AM-5PM' },
 { name: 'Lisa Rodriguez', role: 'Therapist', dept: 'Mental Health', status: 'scheduled', shift: '9AM-5PM' },
 { name: 'David Park', role: 'Charge Nurse', dept: 'ICU', status: 'clocked-in', shift: '7AM-7PM' },
 { name: 'Emily Watson', role: 'RN', dept: 'Med-Surg', status: 'clocked-in', shift: '7AM-3PM' },
 { name: 'Carlos Garcia', role: 'Lab Tech', dept: 'Laboratory', status: 'clocked-in', shift: '6AM-2PM' },
 { name: 'Amanda Foster', role: 'X-Ray Tech', dept: 'Radiology', status: 'scheduled', shift: '8AM-4PM' }
 ];

 const handleMoodSelection = (mood: any) => {
 setSelectedMood(mood.value);
 if (mood.alert) {
 setMoodAlertSent(true);
 // This would send alert to manager/HR
 }
 setTimeout(() => setShowMoodCheckIn(false), 3000);
 };

 return (
 <div className="min-h-screen bg-[#070604]">
 {/* Top Navigation Bar */}
 <nav className="bg-[#110F0B]/80 border-b-2 border-[rgba(201,168,76,0.22)] sticky top-0 z-50">
 <div className="max-w-7xl mx-auto px-6 py-4">
 <div className="flex items-center justify-between">
 {/* Logo */}
 <div className="flex items-center gap-3">
 <Mountain className="w-8 h-8 text-[#9E8F75]" />
 <span className="text-2xl font-black text-[#C9A84C]
 Your Basecamp
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
 <Bell className="w-6 h-6 text-[#9E8F75]" />
 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
 3
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
 <div className="text-[#9E8F75] text-xs">Awesome Human</div>
 </div>
 </div>

 <button className="p-2 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.04)] rounded-lg transition-all">
 <Settings className="w-6 h-6 text-[#9E8F75]" />
 </button>
 </div>
 </div>
 </div>
 </nav>

 <div className="max-w-7xl mx-auto p-6">
 {/* Welcome Banner */}
 <div className="bg-[rgba(201,168,76,0.08)] rounded p-8 mb-6 border-2 border-[rgba(201,168,76,0.22)] shadow-2xl relative overflow-hidden">
 <div className="absolute top-0 right-0 opacity-10">
 <Mountain className="w-64 h-64 text-white" />
 </div>
 <div className="relative z-10">
 <h1 className="text-4xl font-black text-white mb-2">
 Welcome back, {userName}! 🏕️
 </h1>
 <p className="text-[#9E8F75] text-xl font-semibold mb-4">
 {randomEncouragement}
 </p>
 <div className="flex items-center gap-2 text-white/90 mb-3">
 <Coffee className="w-5 h-5" />
 <span>Monday, January 5, 2026 • Perfect day to conquer new peaks!</span>
 </div>
 {/* Dad Joke of the Day */}
 <div className="bg-[#110F0B]/10 rounded-lg p-4 border border-white/20">
 <div className="flex items-start gap-3">
 <div className="text-3xl">😂</div>
 <div>
 <div className="text-white/80 text-xs font-semibold mb-1">DAD JOKE OF THE DAY:</div>
 <div className="text-white font-medium">{randomDadJoke}</div>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Mood Check-In Modal */}
 {showMoodCheckIn && (
 <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
 <div className="lux-card rounded p-8 max-w-2xl w-full border-2 border-[rgba(201,168,76,0.22)] shadow-2xl">
 <h2 className="text-3xl font-bold text-white mb-2 text-center">How are you feeling today, {userName}?</h2>
 <p className="text-[#9E8F75] text-center mb-6">Your wellbeing matters to us 💚</p>
 
 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
 {moodOptions.map((mood) => (
 <button
 key={mood.value}
 onClick={() => handleMoodSelection(mood)}
 className={`p-4 rounded border-2 transition-all ${
 mood.color === 'green' ? 'bg-[#110F0B] was-green-500/10 border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)]' :
 mood.color === 'blue' ? 'bg-amber-600/10 border-amber-500/40/30 hover:border-[rgba(201,168,76,0.45)]/60' :
 mood.color === 'yellow' ? 'bg-[rgba(201,168,76,0.06)] border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)]' :
 mood.color === 'orange' ? 'bg-[rgba(201,168,76,0.06)] border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)]' :
 mood.color === 'red' ? 'bg-[rgba(201,168,76,0.06)] border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)]' :
 'bg-amber-500/10 border-amber-500/40/30 hover:border-[rgba(201,168,76,0.45)]/60'
 }`}
 >
 <div className="text-4xl mb-2">{mood.emoji}</div>
 <div className="text-white font-semibold text-sm">{mood.label}</div>
 </button>
 ))}
 </div>

 {moodAlertSent && (
 <div className="p-4 bg-amber-600/20 border border-[rgba(201,168,76,0.22)] rounded-lg mb-4">
 <div className="flex items-start gap-3">
 <Bell className="w-5 h-5 text-amber-400 mt-0.5" />
 <div>
 <p className="text-[#C9A84C] was-blue-200 font-semibold">Thank you for sharing</p>
 <p className="text-amber-400 text-sm mt-1">HR and your manager have been notified and will reach out to support you. You're not alone. 💙</p>
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

 {/* Today's Coworkers - Critical for Medical/Mental Health */}
 {showCoworkers && (
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 mb-6 border-2 border-[rgba(201,168,76,0.22)] shadow-xl">
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-2">
 <Users className="w-6 h-6 text-[#9E8F75]" />
 <h2 className="text-2xl font-bold text-white">Working With You Today</h2>
 </div>
 <button
 onClick={() => setShowCoworkers(!showCoworkers)}
 className="text-[#9E8F75] hover:text-[#9E8F75] text-sm font-semibold"
 >
 {showCoworkers ? 'Hide' : 'Show'}
 </button>
 </div>

 {/* My Department */}
 <div className="mb-6">
 <h3 className="text-lg font-bold text-[#9E8F75] mb-3 flex items-center gap-2">
 <div className="w-3 h-3 bg-[rgba(201,168,76,0.15)] rounded-full"></div>
 Your Department: Emergency
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
 {todaysCoworkers.filter(c => c.dept === 'Emergency').map((coworker, idx) => (
 <div key={idx} className="bg-[#110F0B]/50 rounded-lg p-3 border border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)] transition-all">
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
 coworker.status === 'clocked-in' ? 'bg-[#110F0B] from-REMOVED-500 to-emerald-500' :
 coworker.status === 'on-break' ? 'bg-[rgba(201,168,76,0.08)]' :
 'bg-[rgba(201,168,76,0.08)]'
 }`}>
 {coworker.name.split(' ').map(n => n[0]).join('')}
 </div>
 <div>
 <p className="font-semibold text-white">{coworker.name}</p>
 <p className="text-xs text-[#9E8F75]">{coworker.role}</p>
 </div>
 </div>
 <div className="text-right">
 <div className={`flex items-center gap-1 text-xs font-semibold mb-1 ${
 coworker.status === 'clocked-in' ? 'text-[#C9A84C] was-green-300' :
 coworker.status === 'on-break' ? 'text-[#F0EBE0]' :
 'text-[#9E8F75]'
 }`}>
 <div className={`w-2 h-2 rounded-full ${
 coworker.status === 'clocked-in' ? 'bg-[#110F0B] was-green-400' :
 coworker.status === 'on-break' ? 'bg-[rgba(201,168,76,0.12)]' :
 'bg-[rgba(201,168,76,0.08)]'
 }`}></div>
 {coworker.status === 'clocked-in' ? 'Active' :
 coworker.status === 'on-break' ? 'On Break' :
 'Scheduled'}
 </div>
 <p className="text-xs text-[#9E8F75]">{coworker.shift}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Other Departments */}
 <div>
 <h3 className="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">
 <div className="w-3 h-3 bg-[#110F0B] was-blue-400 rounded-full"></div>
 Other Departments
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
 {todaysCoworkers.filter(c => c.dept !== 'Emergency').map((coworker, idx) => (
 <div key={idx} className="bg-[#110F0B]/50 rounded-lg p-3 border border-amber-500/40/20 hover:border-[rgba(201,168,76,0.45)]/40 transition-all">
 <div className="flex items-center gap-2 mb-2">
 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${
 coworker.status === 'clocked-in' ? 'bg-[rgba(201,168,76,0.08)]' :
 'bg-[rgba(201,168,76,0.08)]'
 }`}>
 {coworker.name.split(' ').map(n => n[0]).join('')}
 </div>
 <div className="flex-1 min-w-0">
 <p className="font-semibold text-white text-sm truncate">{coworker.name}</p>
 <p className="text-xs text-[#9E8F75]">{coworker.role}</p>
 </div>
 </div>
 <div className="flex items-center justify-between">
 <span className="text-xs text-amber-400 font-semibold">{coworker.dept}</span>
 <div className={`flex items-center gap-1 text-xs ${
 coworker.status === 'clocked-in' ? 'text-[#C9A84C] was-green-300' : 'text-[#9E8F75]'
 }`}>
 <div className={`w-1.5 h-1.5 rounded-full ${
 coworker.status === 'clocked-in' ? 'bg-[#110F0B] was-green-400' : 'bg-[rgba(201,168,76,0.08)]'
 }`}></div>
 {coworker.shift}
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>

 <div className="mt-4 p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
 <p className="text-[#9E8F75] text-sm">
 💡 <strong>Tip:</strong> Click on any coworker to send them a quick message or see their full profile
 </p>
 </div>
 </div>
 )}

 {/* Quick Stats Row */}
 <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
 {/* Clock-In Status - CRITICAL */}
 <div className={`${clockedIn ? 'bg-[#110F0B] from-REMOVED-900/50 to-emerald-900/50 border-[rgba(201,168,76,0.22)]' : 'bg-[#110F0B] from-REMOVED-900/50 to-orange-900/50 border-[rgba(201,168,76,0.22)]'} rounded p-4 border-2`}>
 <div className="flex items-center justify-between mb-2">
 {clockedIn ? (
 <CheckCircle className="w-8 h-8 text-[#C9A84C] was-green-400" />
 ) : (
 <AlertCircle className="w-8 h-8 text-red-400" />
 )}
 <button 
 onClick={() => {
 setClockedIn(!clockedIn);
 setLastClockAction(new Date().toLocaleTimeString());
 }}
 className={`px-3 py-1 rounded-lg font-semibold text-sm ${clockedIn ? 'bg-red-500 hover:bg-red-500' : 'bg-[#110F0B] was-green-500 hover:bg-[#110F0B] was-green-600'} text-white transition-all`}
 >
 {clockedIn ? 'Clock Out' : 'Clock In'}
 </button>
 </div>
 <div className={clockedIn ? 'text-[#C9A84C] was-green-200' : 'text-[#F0EBE0]'}>
 <div className="font-bold text-lg">{clockedIn ? 'CLOCKED IN' : 'NOT CLOCKED IN'}</div>
 {lastClockAction && (
 <div className="text-xs mt-1">Last action: {lastClockAction}</div>
 )}
 {!clockedIn && (
 <div className="text-xs mt-2 font-semibold text-[#F0EBE0]">⚠️ Fix immediately!</div>
 )}
 </div>
 </div>

 <div className="bg-[rgba(201,168,76,0.04)] rounded p-4 border-2 border-amber-500/40/30">
 <div className="flex items-center justify-between mb-2">
 <Flame className="w-8 h-8 text-[#9E8F75]" />
 <span className="text-2xl font-bold text-white">12</span>
 </div>
 <div className="text-[#F0EBE0]/70 font-semibold">Day Streak!</div>
 <div className="text-xs text-[#C9A84C] mt-1">You're on fire! 🔥</div>
 </div>

 <div className="bg-[rgba(201,168,76,0.06)] rounded p-4 border-2 border-amber-500/40/30">
 <div className="flex items-center justify-between mb-2">
 <Star className="w-8 h-8 text-[#C9A84C]" />
 <span className="text-2xl font-bold text-white">847</span>
 </div>
 <div className="text-[#C9A84C] was-blue-200 font-semibold">Kudos Points</div>
 <div className="text-xs text-amber-400 mt-1">Top 10%! ⭐</div>
 </div>

 <div className="bg-[rgba(201,168,76,0.06)] rounded p-4 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center justify-between mb-2">
 <Target className="w-8 h-8 text-[#9E8F75]" />
 <span className="text-2xl font-bold text-white">8/10</span>
 </div>
 <div className="text-[#9E8F75] font-semibold">Goals Complete</div>
 <div className="text-xs text-[#9E8F75] mt-1">Almost there! 💪</div>
 </div>

 <div className="bg-[rgba(201,168,76,0.06)] rounded p-4 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center justify-between mb-2">
 <Gift className="w-8 h-8 text-[#C9A84C] was-pink-400" />
 <span className="text-2xl font-bold text-white">3</span>
 </div>
 <div className="text-[#9E8F75] font-semibold">Rewards Available</div>
 <div className="text-xs text-[#9E8F75] mt-1">Claim them! 🎁</div>
 </div>
 </div>

 {/* Main Content Grid */}
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 {/* Left Column - Quick Actions */}
 <div className="lg:col-span-2 space-y-6">
 {/* Schedule Change Notifications */}
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-[rgba(201,168,76,0.22)] shadow-xl">
 <div className="flex items-center gap-2 mb-4">
 <Bell className="w-6 h-6 text-[#9E8F75]" />
 <h2 className="text-2xl font-bold text-white">Schedule Changes</h2>
 <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">NEW</span>
 </div>
 <div className="space-y-3">
 <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
 <div className="flex items-start justify-between">
 <div className="flex-1">
 <div className="flex items-center gap-2 mb-2">
 <AlertCircle className="w-5 h-5 text-[#F0EBE0]" />
 <p className="font-bold text-white">Your shift was changed!</p>
 </div>
 <p className="text-sm text-[#9E8F75] mb-2">Tomorrow (Tue, Jan 13) • 3:00 PM - 11:00 PM</p>
 <p className="text-xs text-[#9E8F75]"><strong>Was:</strong> 8:00 AM - 4:00 PM</p>
 <p className="text-xs text-[#9E8F75]"><strong>Now:</strong> 3:00 PM - 11:00 PM (Evening Shift)</p>
 <p className="text-xs text-[#F0EBE0] mt-2 font-semibold">Changed by: Manager Sarah • 30 minutes ago</p>
 </div>
 </div>
 </div>
 <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
 <div className="flex items-start gap-3">
 <AlertCircle className="w-5 h-5 text-[#F0EBE0] mt-0.5" />
 <div className="flex-1">
 <p className="font-semibold text-white">Coverage needed: Friday</p>
 <p className="text-sm text-[#F0EBE0] mt-1">Can you pick up an extra shift? 11:00 AM - 7:00 PM</p>
 <p className="text-xs text-[#F0EBE0] mt-1">2 hours ago</p>
 <div className="flex gap-2 mt-3">
 <button className="px-4 py-2 bg-[#110F0B] was-green-500 hover:bg-[#110F0B] was-green-600 rounded-lg text-sm font-semibold text-white transition-all">
 I can help!
 </button>
 <button className="px-4 py-2 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] rounded-lg text-sm font-semibold text-white transition-all">
 Not available
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Running Late Notification */}
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center gap-2 mb-4">
 <Clock className="w-6 h-6 text-[#C9A84C]" />
 <h2 className="text-2xl font-bold text-white">Running Late?</h2>
 </div>
 <div className="space-y-4">
 <div className="bg-[#110F0B]/50 rounded-lg p-4">
 <p className="text-white mb-3">Let your manager know immediately</p>
 <div className="flex gap-3">
 <input
 type="number"
 placeholder="Minutes late"
 className="w-32 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-lg px-3 py-2 text-white focus:border-[rgba(201,168,76,0.22)] focus:outline-none"
 />
 <button
 onClick={() => setLateNotificationSent(true)}
 className="flex-1 px-4 py-2 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2"
 >
 <Send className="w-4 h-4" />
 Notify Manager
 </button>
 </div>
 {lateNotificationSent && (
 <div className="mt-3 p-3 bg-[#110F0B] was-green-500/20 border border-[rgba(201,168,76,0.22)] rounded-lg flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-[#C9A84C] was-green-400" />
 <div>
 <p className="text-[#C9A84C] was-green-300 font-semibold text-sm">Manager notified!</p>
 <p className="text-[#C9A84C] was-green-400 text-xs flex items-center gap-1 mt-1">
 <span className="w-2 h-2 bg-[#110F0B] was-green-400 rounded-full"></span>
 Read by Manager Sarah at {new Date().toLocaleTimeString()}
 </p>
 </div>
 </div>
 )}
 </div>
 </div>
 </div>

 {/* Team Messaging */}
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-amber-500/40/30">
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-2">
 <MessageSquare className="w-6 h-6 text-amber-400" />
 <h2 className="text-2xl font-bold text-white">Team Messages</h2>
 </div>
 <button
 onClick={() => setShowTeamMessage(!showTeamMessage)}
 className="px-4 py-2 bg-amber-600 hover:bg-amber-600 rounded-lg font-semibold text-white transition-all"
 >
 New Message
 </button>
 </div>

 {showTeamMessage && (
 <div className="mb-4 p-4 bg-[#110F0B]/50 rounded-lg border border-amber-500/40/30">
 <textarea
 value={teamMessage}
 onChange={(e) => setTeamMessage(e.target.value)}
 placeholder="Urgent message to your team..."
 className="w-full h-24 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-lg p-3 text-white placeholder-stone-600 focus:border-amber-500 focus:outline-none resize-none mb-3"
 />
 <div className="mb-3">
 <p className="text-sm text-[#9E8F75] mb-2">Select recipients:</p>
 <div className="flex flex-wrap gap-2">
 {['All Team', 'Day Shift', 'Night Shift', 'Emergency Dept', 'ICU', 'Custom'].map((group) => (
 <button
 key={group}
 onClick={() => {
 if (selectedTeamMembers.includes(group)) {
 setSelectedTeamMembers(selectedTeamMembers.filter(g => g !== group));
 } else {
 setSelectedTeamMembers([...selectedTeamMembers, group]);
 }
 }}
 className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all ${
 selectedTeamMembers.includes(group)
 ? 'bg-amber-600 text-white'
 : 'bg-[rgba(201,168,76,0.04)] text-[#9E8F75] hover:bg-[rgba(201,168,76,0.08)]'
 }`}
 >
 {group}
 </button>
 ))}
 </div>
 </div>
 <button className="w-full px-4 py-2 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2">
 <Send className="w-4 h-4" />
 Send Urgent Message
 </button>
 </div>
 )}

 <div className="space-y-3">
 <div className="bg-[#110F0B]/50 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
 <div className="flex items-start gap-3">
 <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
 ME
 </div>
 <div className="flex-1">
 <div className="flex items-center gap-2 mb-1">
 <p className="font-semibold text-white">You</p>
 <span className="text-xs text-[#9E8F75]">15 min ago</span>
 </div>
 <p className="text-[#9E8F75] text-sm mb-2">"Flat tire on way to work, will be 20 min late 🚗"</p>
 <div className="flex items-center gap-2 text-xs">
 <div className="flex items-center gap-1 text-[#C9A84C] was-green-400">
 <UserCheck className="w-3 h-3" />
 <span>Read by 3 people</span>
 </div>
 <button className="text-amber-400 hover:text-amber-400">View receipts</button>
 </div>
 <div className="mt-2 p-2 bg-[#110F0B] was-green-500/10 border border-[rgba(201,168,76,0.22)] rounded text-xs">
 <div className="flex items-center gap-1 text-[#C9A84C] was-green-300">
 <CheckCircle className="w-3 h-3" />
 ✓✓ Read by Manager Sarah at 8:15 AM
 </div>
 <div className="flex items-center gap-1 text-[#C9A84C] was-green-300 mt-1">
 <CheckCircle className="w-3 h-3" />
 ✓ Read by Tom (Team Lead) at 8:17 AM
 </div>
 <div className="flex items-center gap-1 text-[#C9A84C] was-green-300 mt-1">
 <CheckCircle className="w-3 h-3" />
 ✓ Read by Jennifer at 8:18 AM
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Personal Calendar Integration */}
 <div className="bg-[rgba(201,168,76,0.04)] rounded p-6 border-2 border-amber-500/40/30">
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-2">
 <Calendar className="w-6 h-6 text-amber-400" />
 <h2 className="text-2xl font-bold text-white">My Calendar</h2>
 </div>
 <div className="flex gap-2">
 <button className="px-3 py-1 bg-amber-500/20 border border-amber-400/40/30 rounded-lg text-sm text-[#C9A84C] hover:bg-amber-500/30 transition-all flex items-center gap-1">
 <Mail className="w-3 h-3" />
 Outlook
 </button>
 <button className="px-3 py-1 bg-amber-500/20 border border-amber-400/40/30 rounded-lg text-sm text-[#C9A84C] hover:bg-amber-500/30 transition-all flex items-center gap-1">
 <Calendar className="w-3 h-3" />
 Google
 </button>
 </div>
 </div>
 <div className="space-y-3">
 <div className="p-4 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center gap-2 mb-2">
 <div className="w-3 h-3 bg-[rgba(201,168,76,0.15)] rounded"></div>
 <p className="font-semibold text-white">Work: Morning Shift</p>
 </div>
 <p className="text-sm text-[#9E8F75]">Tomorrow • 8:00 AM - 4:00 PM</p>
 <p className="text-xs text-[#9E8F75] mt-1">Department: Emergency</p>
 </div>
 <div className="p-4 bg-amber-600/10 rounded-lg border border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center gap-2 mb-2">
 <div className="w-3 h-3 bg-[#110F0B] was-blue-400 rounded"></div>
 <p className="font-semibold text-white">Personal: Dentist Appointment</p>
 </div>
 <p className="text-sm text-[#9E8F75]">Wed, Jan 14 • 2:00 PM - 3:00 PM</p>
 <p className="text-xs text-amber-400 mt-1">From: Google Calendar</p>
 </div>
 <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-400/40/30">
 <div className="flex items-center gap-2 mb-2">
 <div className="w-3 h-3 bg-amber-400 rounded"></div>
 <p className="font-semibold text-white">Reminder: Mom's Birthday</p>
 </div>
 <p className="text-sm text-[#9E8F75]">Sat, Jan 17 • All Day</p>
 <p className="text-xs text-[#C9A84C] mt-1">Personal reminder</p>
 </div>
 <Link href="/calendar?view=personal" className="block p-3 bg-[rgba(201,168,76,0.04)] rounded-lg border border-amber-400/40/30 hover:border-[rgba(201,168,76,0.45)]/60 transition-all text-center">
 <p className="text-sm font-semibold text-[#C9A84C] flex items-center justify-center gap-2">
 <ExternalLink className="w-4 h-4" />
 Manage All Events
 </p>
 </Link>
 </div>
 </div>

 {/* Quick Actions Hub */}
 <div className="bg-[rgba(201,168,76,0.06)]/50 rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
 <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
 <Zap className="w-6 h-6 text-[#C9A84C]" />
 Quick Actions
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
 <Link href="/timeclock" className="bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg p-4 text-center transition-all shadow-lg group">
 <Calendar className="w-8 h-8 text-white mx-auto mb-2 group- transition-transform" />
 <div className="text-white font-semibold text-sm">Clock In/Out</div>
 </Link>
 <Link href="/time-off" className="bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg p-4 text-center transition-all shadow-lg group">
 <Coffee className="w-8 h-8 text-white mx-auto mb-2 group- transition-transform" />
 <div className="text-white font-semibold text-sm">Request Time Off</div>
 </Link>
 <Link href="/basecamp/games" className="bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg p-4 text-center transition-all shadow-lg group relative">
 <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">FUN!</div>
 <Gamepad2 className="w-8 h-8 text-white mx-auto mb-2 group- transition-transform" />
 <div className="text-white font-semibold text-sm">Play Games</div>
 </Link>
 <Link href="/basecamp/kudos" className="bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg p-4 text-center transition-all shadow-lg group">
 <ThumbsUp className="w-8 h-8 text-white mx-auto mb-2 group- transition-transform" />
 <div className="text-white font-semibold text-sm">Give Kudos</div>
 </Link>
 </div>
 </div>

 {/* Today's Schedule */}
 <div className="bg-[rgba(201,168,76,0.06)]/50 rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
 <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
 <Calendar className="w-6 h-6 text-[#9E8F75]" />
 Today's Schedule
 </h2>
 <div className="space-y-3">
 <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center justify-between">
 <div>
 <div className="text-white font-semibold text-lg">Morning Shift</div>
 <div className="text-[#9E8F75] text-sm">8:00 AM - 4:00 PM</div>
 </div>
 <div className="text-right">
 <div className="text-[#9E8F75] text-sm">Department: Operations</div>
 <div className="text-[#9E8F75] text-sm font-semibold">In 2 hours</div>
 </div>
 </div>
 </div>
 <div className="bg-[#110F0B]/50 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center justify-between">
 <div>
 <div className="text-white font-semibold">Team Standup</div>
 <div className="text-[#9E8F75] text-sm">9:30 AM - 10:00 AM</div>
 </div>
 <div className="text-amber-400 text-sm font-semibold">Optional</div>
 </div>
 </div>
 </div>
 </div>

 {/* Idea Board Preview */}
 <div className="bg-[rgba(201,168,76,0.06)]/50 rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center justify-between mb-4">
 <h2 className="text-2xl font-bold text-white flex items-center gap-2">
 <Lightbulb className="w-6 h-6 text-[#C9A84C]" />
 Idea Board
 </h2>
 <Link href="/basecamp/ideas" className="text-[#9E8F75] hover:text-[#9E8F75] font-semibold flex items-center gap-1">
 View All <ChevronRight className="w-4 h-4" />
 </Link>
 </div>
 <div className="space-y-3">
 <div className="bg-[rgba(201,168,76,0.04)] rounded-lg p-4 border border-amber-500/40/30">
 <div className="flex items-center gap-3 mb-2">
 <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
 MK
 </div>
 <div>
 <div className="text-white font-semibold">Maria K.</div>
 <div className="text-[#C9A84C] text-xs">2 hours ago</div>
 </div>
 </div>
 <div className="text-[#F0EBE0] mb-2">"What if we had themed lunch Fridays? 🌮🍕🍜"</div>
 <div className="flex items-center gap-3 text-sm">
 <button className="text-[#9E8F75] hover:text-[#9E8F75] flex items-center gap-1">
 <Star className="w-4 h-4" /> 24 votes
 </button>
 <button className="text-amber-400 hover:text-amber-400 flex items-center gap-1">
 <MessageSquare className="w-4 h-4" /> 8 comments
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Right Column - Everything Else */}
 <div className="space-y-6">
 {/* Titan Employee Assistant Chatbot */}
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-amber-500/40/30 shadow-xl">
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-2">
 <Bot className="w-6 h-6 text-[#9E8F75]" />
 <h2 className="text-xl font-bold text-white">Titan Assistant</h2>
 <span className="text-xs text-[#9E8F75]">({titanPersonalities[titanPersonality as keyof typeof titanPersonalities].name})</span>
 </div>
 <div className="flex gap-2">
 <button
 onClick={() => setShowPersonalityPicker(!showPersonalityPicker)}
 className="px-3 py-1 bg-amber-500/20 border border-amber-400/40/30 rounded-lg text-xs font-semibold text-[#C9A84C] hover:bg-amber-500/30 transition-all"
 >
 Personality
 </button>
 <button
 onClick={() => setShowTitanChat(!showTitanChat)}
 className="px-3 py-1 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded-lg text-sm font-semibold text-[#9E8F75] hover:bg-[rgba(201,168,76,0.06)] transition-all"
 >
 {showTitanChat ? 'Close' : 'Chat'}
 </button>
 </div>
 </div>

 {/* Personality Picker */}
 {showPersonalityPicker && (
 <div className="mb-4 p-4 bg-[#110F0B]/50 rounded-lg border border-amber-400/40/30">
 <h3 className="text-sm font-bold text-white mb-3">Choose Titan's Personality:</h3>
 <div className="grid grid-cols-2 gap-2 mb-3">
 {Object.entries(titanPersonalities).map(([key, personality]) => (
 <button
 key={key}
 onClick={() => {
 setTitanPersonality(key);
 setShowPersonalityPicker(false);
 }}
 className={`p-3 rounded-lg border-2 transition-all text-left ${
 titanPersonality === key
 ? 'bg-[rgba(201,168,76,0.06)] border-[rgba(201,168,76,0.22)]'
 : 'bg-[rgba(201,168,76,0.04)] border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)]'
 }`}
 >
 <div className="font-bold text-white mb-1">{personality.name}</div>
 <div className="text-xs text-[#9E8F75]">{personality.style}</div>
 </button>
 ))}
 </div>
 <p className="text-xs text-[#9E8F75]">💡 Pick the vibe that works for you!</p>
 </div>
 )}

 <div className="mb-3 p-3 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
 <p className="text-sm text-[#9E8F75]">
 <strong>Your personal AI assistant!</strong> I can help with:
 </p>
 <ul className="text-xs text-[#9E8F75] mt-2 space-y-1">
 <li>• Shift swap requests</li>
 <li>• Time-off questions</li>
 <li>• Benefits information</li>
 <li>• Schedule inquiries</li>
 <li>• Policy lookups</li>
 </ul>
 </div>

 {showTitanChat && (
 <div className="space-y-3">
 <div className="h-64 bg-[#110F0B]/50 rounded-lg p-3 overflow-y-auto space-y-2">
 <div className="flex gap-2">
 <div className="w-8 h-8 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-full flex items-center justify-center flex-shrink-0">
 <Bot className="w-5 h-5 text-white" />
 </div>
 <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-3 border border-[rgba(201,168,76,0.22)]">
 <p className="text-white text-sm">
 {titanPersonalities[titanPersonality as keyof typeof titanPersonalities].greeting}
 </p>
 </div>
 </div>
 <div className="flex gap-2 justify-end">
 <div className="bg-amber-600/20 rounded-lg p-3 border border-[rgba(201,168,76,0.22)] max-w-xs">
 <p className="text-white text-sm">
 How do I request a shift swap?
 </p>
 </div>
 <div className="w-8 h-8 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-full flex items-center justify-center flex-shrink-0">
 A
 </div>
 </div>
 <div className="flex gap-2">
 <div className="w-8 h-8 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-full flex items-center justify-center flex-shrink-0">
 <Bot className="w-5 h-5 text-white" />
 </div>
 <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-3 border border-[rgba(201,168,76,0.22)]">
 <p className="text-white text-sm">
 {titanPersonality === 'funny' && 'Alright, shift swapping time! It\'s like trading Pokemon cards but with your work schedule 😂 Here\'s how:'}
 {titanPersonality === 'sassy' && 'Oh honey, shift swaps are easy peasy! Let me break it down for you:'}
 {titanPersonality === 'witty' && 'Ah, the ancient art of the shift swap. Allow me to illuminate:'}
 {titanPersonality === 'goofy' && 'OOOOH SHIFT SWAPS!!! 🎉 THIS IS GONNA BE SO COOL!!! Here\'s what ya do:'}
 {titanPersonality === 'vulgar' && 'Shift swaps? Hell yeah, let\'s get this sh&t sorted:'}
 {titanPersonality === 'smart' && 'Excellent question. The shift swap protocol involves:'}
 <br/>1. Navigate to Calendar → Shift Swaps
 <br/>2. Select your target shift
 <br/>3. Choose swap partner
 <br/>4. Submit for approval
 <br/><br/>
 <a href="/calendar?tab=swaps" className="text-[#9E8F75] hover:text-[#9E8F75] underline">
 {titanPersonality === 'goofy' ? 'LET\'S GOOOOO →' : 
 titanPersonality === 'vulgar' ? 'F^%k yeah, take me there →' :
 titanPersonality === 'sassy' ? 'Show me the way, darling →' :
 'Take me there →'}
 </a>
 </p>
 </div>
 </div>
 </div>
 <div className="flex gap-2">
 <input
 type="text"
 placeholder={
 titanPersonality === 'goofy' ? 'TELL ME ANYTHING!!!' :
 titanPersonality === 'vulgar' ? 'What\'s up?' :
 titanPersonality === 'sassy' ? 'Spill the tea...' :
 titanPersonality === 'witty' ? 'Inquire within...' :
 'Ask Titan anything...'
 }
 className="flex-1 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-lg px-3 py-2 text-white placeholder-stone-600 focus:border-[rgba(201,168,76,0.22)] focus:outline-none text-sm"
 />
 <button className="px-4 py-2 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg font-semibold text-white transition-all">
 <Send className="w-4 h-4" />
 </button>
 </div>
 <div className="flex flex-wrap gap-2">
 <button className="px-3 py-1 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-full text-xs text-[#9E8F75] hover:bg-[rgba(201,168,76,0.04)] transition-all">
 Request time off
 </button>
 <button className="px-3 py-1 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-full text-xs text-[#9E8F75] hover:bg-[rgba(201,168,76,0.04)] transition-all">
 My benefits
 </button>
 <button className="px-3 py-1 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-full text-xs text-[#9E8F75] hover:bg-[rgba(201,168,76,0.04)] transition-all">
 Upcoming shifts
 </button>
 </div>
 </div>
 )}
 </div>

 {/* Recognition Wall */}
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
 <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
 <Award className="w-5 h-5 text-[#C9A84C]" />
 Kudos Wall
 </h2>
 <div className="space-y-3">
 <div className="bg-[#110F0B]/50 rounded-lg p-3 border border-[rgba(201,168,76,0.22)]">
 <div className="text-[#F0EBE0] text-sm mb-1">Sarah gave you kudos!</div>
 <div className="text-[#9E8F75] text-xs">"Amazing teamwork on the project! 🌟"</div>
 </div>
 <div className="bg-[#110F0B]/50 rounded-lg p-3 border border-[rgba(201,168,76,0.22)]">
 <div className="text-[#F0EBE0] text-sm mb-1">Team achievement!</div>
 <div className="text-[#9E8F75] text-xs">"100% on-time delivery this month! 🎉"</div>
 </div>
 </div>
 </div>

 {/* All Features Hub */}
 <div className="bg-[rgba(201,168,76,0.06)]/50 rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
 <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
 <Mountain className="w-5 h-5 text-[#9E8F75]" />
 Basecamp Features
 </h2>
 <div className="space-y-2">
 <Link href="/basecamp/profile" className="flex items-center justify-between p-3 bg-[#110F0B]/50 hover:bg-[#110F0B] rounded-lg transition-all group">
 <div className="flex items-center gap-3">
 <Users className="w-5 h-5 text-amber-400" />
 <span className="text-white font-semibold">My Profile</span>
 </div>
 <ChevronRight className="w-5 h-5 text-[#9E8F75] group-hover:text-[#9E8F75] transition-colors" />
 </Link>
 <Link href="/basecamp/benefits" className="flex items-center justify-between p-3 bg-[#110F0B]/50 hover:bg-[#110F0B] rounded-lg transition-all group">
 <div className="flex items-center gap-3">
 <ShieldCheck className="w-5 h-5 text-amber-400" />
 <span className="text-white font-semibold">Benefits</span>
 </div>
 <ChevronRight className="w-5 h-5 text-[#9E8F75] group-hover:text-[#9E8F75] transition-colors" />
 </Link>
 <Link href="/basecamp/learning" className="flex items-center justify-between p-3 bg-[#110F0B]/50 hover:bg-[#110F0B] rounded-lg transition-all group">
 <div className="flex items-center gap-3">
 <BookOpen className="w-5 h-5 text-[#C9A84C]" />
 <span className="text-white font-semibold">Learning Hub</span>
 </div>
 <ChevronRight className="w-5 h-5 text-[#9E8F75] group-hover:text-[#9E8F75] transition-colors" />
 </Link>
 <Link href="/basecamp/resources" className="flex items-center justify-between p-3 bg-[#110F0B]/50 hover:bg-[#110F0B] rounded-lg transition-all group">
 <div className="flex items-center gap-3">
 <FileText className="w-5 h-5 text-[#C9A84C] was-green-400" />
 <span className="text-white font-semibold">Resources</span>
 </div>
 <ChevronRight className="w-5 h-5 text-[#9E8F75] group-hover:text-[#9E8F75] transition-colors" />
 </Link>
 <Link href="/basecamp/team" className="flex items-center justify-between p-3 bg-[#110F0B]/50 hover:bg-[#110F0B] rounded-lg transition-all group">
 <div className="flex items-center gap-3">
 <Users className="w-5 h-5 text-[#C9A84C] was-pink-400" />
 <span className="text-white font-semibold">Team Directory</span>
 </div>
 <ChevronRight className="w-5 h-5 text-[#9E8F75] group-hover:text-[#9E8F75] transition-colors" />
 </Link>
 <Link href="/basecamp/wellness" className="flex items-center justify-between p-3 bg-[#110F0B]/50 hover:bg-[#110F0B] rounded-lg transition-all group">
 <div className="flex items-center gap-3">
 <Heart className="w-5 h-5 text-red-400" />
 <span className="text-white font-semibold">Wellness Hub</span>
 </div>
 <ChevronRight className="w-5 h-5 text-[#9E8F75] group-hover:text-[#9E8F75] transition-colors" />
 </Link>
 <Link href="/merch-store" className="flex items-center justify-between p-3 bg-[#110F0B]/50 hover:bg-[#110F0B] rounded-lg transition-all group">
 <div className="flex items-center gap-3">
 <PartyPopper className="w-5 h-5 text-[#9E8F75]" />
 <span className="text-white font-semibold">Merch Store</span>
 </div>
 <ChevronRight className="w-5 h-5 text-[#9E8F75] group-hover:text-[#9E8F75] transition-colors" />
 </Link>
 </div>
 </div>

 {/* Company Announcements */}
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-amber-500/40/30">
 <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
 <Bell className="w-5 h-5 text-amber-400" />
 Announcements
 </h2>
 <div className="space-y-3">
 <div className="bg-[#110F0B]/50 rounded-lg p-3 border border-amber-500/40/20">
 <div className="text-amber-400 text-sm font-semibold mb-1">🎉 Team Outing Friday!</div>
 <div className="text-[#9E8F75] text-xs">Join us for bowling at 6 PM. Pizza's on us!</div>
 </div>
 <div className="bg-[#110F0B]/50 rounded-lg p-3 border border-amber-500/40/20">
 <div className="text-amber-400 text-sm font-semibold mb-1">📚 New Training Available</div>
 <div className="text-[#9E8F75] text-xs">Leadership Development course now live!</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}



