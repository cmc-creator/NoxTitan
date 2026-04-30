'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mountain, Lightbulb, Star, MessageSquare, Plus, TrendingUp, Filter, Search, ChevronDown, Zap, Heart, Rocket } from 'lucide-react';

export default function IdeaBoard() {
 const [selectedCategory, setSelectedCategory] = useState('all');
 const [sortBy, setSortBy] = useState('votes');

 const ideas = [
 {
 id: 1,
 author: 'Maria K.',
 avatar: 'MK',
 title: 'Themed Lunch Fridays',
 description: 'What if we had themed lunch Fridays? One week could be Taco Tuesday moved to Friday, next week Pizza Party, then International Cuisine! Would make Fridays extra fun! 🌮🍕🍜',
 category: 'Culture',
 votes: 24,
 comments: 8,
 timeAgo: '2 hours ago',
 status: 'hot'
 },
 {
 id: 2,
 author: 'James T.',
 avatar: 'JT',
 title: 'Standing Desks for Everyone',
 description: 'Health and productivity boost! Studies show standing desks improve focus and reduce back pain. Let\'s invest in our team\'s wellbeing! 💪',
 category: 'Workplace',
 votes: 42,
 comments: 15,
 timeAgo: '5 hours ago',
 status: 'trending'
 },
 {
 id: 3,
 author: 'Sarah P.',
 avatar: 'SP',
 title: 'Pet-Friendly Office Days',
 description: 'Once a month, let employees bring their well-behaved pets to work. Reduces stress, boosts morale, and who doesn\'t love office puppies? 🐕🐈',
 category: 'Culture',
 votes: 67,
 comments: 23,
 timeAgo: '1 day ago',
 status: 'hot'
 },
 {
 id: 4,
 author: 'Alex R.',
 avatar: 'AR',
 title: 'Quarterly Innovation Days',
 description: 'Give teams 1 day per quarter to work on passion projects or improvements. Like Google\'s 20% time but more structured. Could lead to amazing innovations! 💡',
 category: 'Process',
 votes: 31,
 comments: 12,
 timeAgo: '2 days ago',
 status: 'new'
 },
 {
 id: 5,
 author: 'Emily C.',
 avatar: 'EC',
 title: 'Mentorship Program',
 description: 'Pair experienced employees with newer team members for career growth. Would help with onboarding and knowledge transfer! 🌱',
 category: 'Development',
 votes: 55,
 comments: 19,
 timeAgo: '3 days ago',
 status: 'trending'
 },
 {
 id: 6,
 author: 'Mike D.',
 avatar: 'MD',
 title: 'Coffee Bar Upgrade',
 description: 'Let\'s get a proper espresso machine and some fancy coffee! Happy employees = caffeinated employees ☕✨',
 category: 'Workplace',
 votes: 89,
 comments: 34,
 timeAgo: '4 days ago',
 status: 'hot'
 },
 {
 id: 7,
 author: 'Lisa W.',
 avatar: 'LW',
 title: 'Remote Work Fridays',
 description: 'Allow teams to work from home on Fridays if they want. Better work-life balance and helps with end-of-week focus time! 🏠',
 category: 'Flexibility',
 votes: 78,
 comments: 41,
 timeAgo: '5 days ago',
 status: 'trending'
 },
 {
 id: 8,
 author: 'Tom H.',
 avatar: 'TH',
 title: 'Wellness Wednesdays',
 description: 'Mid-week yoga, meditation, or fitness classes during lunch. Recharge and refocus for the second half of the week! 🧘‍♀️',
 category: 'Wellness',
 votes: 45,
 comments: 16,
 timeAgo: '1 week ago',
 status: 'new'
 }
 ];

 const categories = ['all', 'Culture', 'Workplace', 'Development', 'Process', 'Flexibility', 'Wellness'];

 const filteredIdeas = selectedCategory === 'all' 
 ? ideas 
 : ideas.filter(idea => idea.category === selectedCategory);

 const sortedIdeas = [...filteredIdeas].sort((a, b) => {
 if (sortBy === 'votes') return b.votes - a.votes;
 if (sortBy === 'comments') return b.comments - a.comments;
 return 0;
 });

 return (
 <div className="min-h-screen bg-[#070604]">
 {/* Top Navigation */}
 <nav className="bg-[#110F0B]/80 border-b-2 border-[rgba(201,168,76,0.22)] sticky top-0 z-50">
 <div className="max-w-7xl mx-auto px-6 py-4">
 <div className="flex items-center justify-between">
 <Link href="/basecamp" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
 <Mountain className="w-8 h-8 text-[#9E8F75]" />
 <span className="text-2xl font-black text-[#C9A84C]">
 Your Basecamp
 </span>
 </Link>
 </div>
 </div>
 </nav>

 <div className="max-w-7xl mx-auto p-6">
 {/* Header */}
 <div className="mb-8">
 <Link href="/basecamp" className="inline-flex items-center gap-2 text-[#9E8F75] hover:text-[#9E8F75] mb-4 transition-colors">
 ← Back to Basecamp
 </Link>
 <div className="flex items-center justify-between">
 <div>
 <h1 className="text-4xl font-black text-[#C9A84C] mb-2"
 style={{
 textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(251,191,36,0.6)',
 WebkitTextStroke: '1px rgba(251,191,36,0.3)',
 filter: 'brightness(1.4)'
 }}>
 💡 Idea Board
 </h1>
 <p className="text-[#9E8F75] text-lg">Share your brilliant ideas and help shape our future!</p>
 </div>
 <button className="px-6 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white rounded-lg font-bold transition-all shadow-lg shadow-[rgba(201,168,76,0.2)] flex items-center gap-2">
 <Plus className="w-5 h-5" />
 Submit Idea
 </button>
 </div>
 </div>

 {/* Stats Banner */}
 <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-5 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center justify-between">
 <div>
 <div className="text-[#F0EBE0] text-sm mb-1">Total Ideas</div>
 <div className="text-3xl font-bold text-white">127</div>
 </div>
 <Lightbulb className="w-12 h-12 text-[#C9A84C] opacity-50" />
 </div>
 </div>
 <div className="bg-[#110F0B] from-REMOVED-900/50 to-emerald-900/50 rounded p-5 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center justify-between">
 <div>
 <div className="text-[#C9A84C] was-green-200 text-sm mb-1">Implemented</div>
 <div className="text-3xl font-bold text-white">23</div>
 </div>
 <Rocket className="w-12 h-12 text-[#C9A84C] was-green-400 opacity-50" />
 </div>
 </div>
 <div className="bg-[rgba(201,168,76,0.04)] rounded p-5 border-2 border-amber-500/40/30">
 <div className="flex items-center justify-between">
 <div>
 <div className="text-[#F0EBE0]/70 text-sm mb-1">This Month</div>
 <div className="text-3xl font-bold text-white">18</div>
 </div>
 <TrendingUp className="w-12 h-12 text-amber-400 opacity-50" />
 </div>
 </div>
 <div className="bg-[#110F0B] from-REMOVED-900/50 to-pink-900/50 rounded p-5 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center justify-between">
 <div>
 <div className="text-[#F0EBE0] text-sm mb-1">Your Ideas</div>
 <div className="text-3xl font-bold text-white">3</div>
 </div>
 <Heart className="w-12 h-12 text-red-400 opacity-50" />
 </div>
 </div>
 </div>

 {/* Filters & Sort */}
 <div className="bg-[rgba(201,168,76,0.06)]/50 rounded p-4 border-2 border-[rgba(201,168,76,0.22)] mb-6">
 <div className="flex flex-wrap items-center gap-4">
 {/* Search */}
 <div className="flex-1 min-w-[300px]">
 <div className="relative">
 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9E8F75]" />
 <input
 type="text"
 placeholder="Search ideas..."
 className="w-full bg-[#110F0B] border-2 border-[rgba(201,168,76,0.22)] rounded-lg pl-10 pr-4 py-2 text-white focus:border-[rgba(201,168,76,0.22)] focus:outline-none"
 />
 </div>
 </div>

 {/* Category Filter */}
 <div className="flex items-center gap-2">
 <Filter className="w-5 h-5 text-[#9E8F75]" />
 <select
 value={selectedCategory}
 onChange={(e) => setSelectedCategory(e.target.value)}
 className="bg-[#110F0B] border-2 border-[rgba(201,168,76,0.22)] rounded-lg px-4 py-2 text-white focus:border-[rgba(201,168,76,0.22)] focus:outline-none"
 >
 {categories.map(cat => (
 <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
 ))}
 </select>
 </div>

 {/* Sort */}
 <div className="flex items-center gap-2">
 <span className="text-[#9E8F75] text-sm">Sort by:</span>
 <select
 value={sortBy}
 onChange={(e) => setSortBy(e.target.value)}
 className="bg-[#110F0B] border-2 border-[rgba(201,168,76,0.22)] rounded-lg px-4 py-2 text-white focus:border-[rgba(201,168,76,0.22)] focus:outline-none"
 >
 <option value="votes">Most Votes</option>
 <option value="comments">Most Comments</option>
 <option value="recent">Most Recent</option>
 </select>
 </div>
 </div>
 </div>

 {/* Ideas List */}
 <div className="space-y-4">
 {sortedIdeas.map(idea => (
 <div key={idea.id} className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)] transition-all">
 <div className="flex gap-6">
 {/* Vote Section */}
 <div className="flex flex-col items-center gap-2">
 <button className="p-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg transition-all">
 <Star className="w-6 h-6 text-white" />
 </button>
 <div className="text-2xl font-bold text-white">{idea.votes}</div>
 <div className="text-xs text-[#9E8F75]">votes</div>
 </div>

 {/* Content */}
 <div className="flex-1">
 <div className="flex items-start justify-between mb-3">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-full flex items-center justify-center text-white font-bold text-sm">
 {idea.avatar}
 </div>
 <div>
 <div className="text-white font-semibold">{idea.author}</div>
 <div className="text-[#9E8F75] text-sm">{idea.timeAgo}</div>
 </div>
 </div>
 <div className="flex items-center gap-2">
 {idea.status === 'hot' && (
 <span className="px-3 py-1 bg-[#110F0B] from-REMOVED-600 to-orange-600 text-white rounded-full text-xs font-bold flex items-center gap-1">
 🔥 HOT
 </span>
 )}
 {idea.status === 'trending' && (
 <span className="px-3 py-1 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white rounded-full text-xs font-bold flex items-center gap-1">
 <TrendingUp className="w-3 h-3" /> TRENDING
 </span>
 )}
 <span className="px-3 py-1 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] text-[#9E8F75] rounded-full text-xs font-semibold">
 {idea.category}
 </span>
 </div>
 </div>

 <h3 className="text-xl font-bold text-white mb-2">{idea.title}</h3>
 <p className="text-[#9E8F75] mb-4">{idea.description}</p>

 <div className="flex items-center gap-4">
 <button className="flex items-center gap-2 px-4 py-2 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] rounded-lg text-white transition-all">
 <MessageSquare className="w-4 h-4" />
 <span>{idea.comments} Comments</span>
 </button>
 <button className="flex items-center gap-2 px-4 py-2 bg-[rgba(201,168,76,0.06)] hover:bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded-lg text-[#9E8F75] transition-all">
 <Zap className="w-4 h-4" />
 <span>Share</span>
 </button>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* Motivation Footer */}
 <div className="mt-8 bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-[rgba(201,168,76,0.22)] text-center">
 <h3 className="text-2xl font-bold text-[#F0EBE0] mb-2">💡 Your Voice Matters!</h3>
 <p className="text-[#F0EBE0] text-lg">Every idea has the power to make our workplace better. Keep them coming!</p>
 </div>
 </div>
 </div>
 );
}


