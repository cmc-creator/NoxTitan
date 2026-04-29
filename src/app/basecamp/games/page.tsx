'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mountain, Gamepad2, Trophy, Users, Zap, Target, Brain, Smile, Dice1, Heart, Star, Crown } from 'lucide-react';

export default function Games() {
 const [triviaScore, setTriviaScore] = useState(0);
 const [showTriviaAnswer, setShowTriviaAnswer] = useState(false);
 const [emojiPuzzle, setEmojiPuzzle] = useState("🐝 + 🍃 = ?");
 const [showEmojiAnswer, setShowEmojiAnswer] = useState(false);

 const leaderboard = [
 { rank: 1, name: 'Sarah Chen', points: 1247, emoji: '👑' },
 { rank: 2, name: 'Michael Torres', points: 1156, emoji: '🥈' },
 { rank: 3, name: 'You (Alex)', points: 892, emoji: '🥉' },
 { rank: 4, name: 'Emily Rodriguez', points: 784, emoji: '⭐' },
 { rank: 5, name: 'David Park', points: 673, emoji: '💪' }
 ];

 return (
 <div className="min-h-screen bg-[#070604]">
 {/* Top Navigation */}
 <nav className="bg-[#110F0B]/80 border-b-2 border-[rgba(201,168,76,0.22)] sticky top-0 z-50">
 <div className="max-w-7xl mx-auto px-6 py-4">
 <Link href="/basecamp" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
 <Mountain className="w-8 h-8 text-[#9E8F75]" />
 <span className="text-2xl font-black text-[#C9A84C]
 Your Basecamp
 </span>
 </Link>
 </div>
 </nav>

 <div className="max-w-7xl mx-auto p-6">
 {/* Header */}
 <div className="mb-8">
 <Link href="/basecamp" className="inline-flex items-center gap-2 text-[#9E8F75] hover:text-[#9E8F75] mb-4 transition-colors">
 ← Back to Basecamp
 </Link>
 <h1 className="text-4xl font-black text-[#C9A84C] mb-2"
 style={{
 textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(168,85,247,0.6)',
 WebkitTextStroke: '1px rgba(168,85,247,0.3)',
 filter: 'brightness(1.4)'
 }}>
 🎮 Game Zone
 </h1>
 <p className="text-[#9E8F75] text-lg">Take a break, have fun, challenge your teammates! 😄</p>
 </div>

 {/* Leaderboard */}
 <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border-2 border-[rgba(201,168,76,0.22)] mb-6">
 <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
 <Trophy className="w-6 h-6 text-[#C9A84C]" />
 This Month's Champions
 </h2>
 <div className="space-y-3">
 {leaderboard.map((player) => (
 <div key={player.rank} className={`rounded-lg p-4 border-2 ${
 player.rank === 3 ? 'bg-[rgba(201,168,76,0.06)] border-[rgba(201,168,76,0.22)] ring-2 ring-[rgba(201,168,76,0.45)]' :
 player.rank === 1 ? 'bg-[rgba(201,168,76,0.06)] border-[rgba(201,168,76,0.22)]' :
 'bg-[#110F0B]/50 border-[rgba(201,168,76,0.22)]'
 }`}>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-4">
 <div className="text-3xl">{player.emoji}</div>
 <div>
 <div className={`font-bold ${player.rank === 3 ? 'text-[#9E8F75] text-lg' : 'text-white'}`}>
 #{player.rank} {player.name}
 {player.rank === 3 && <span className="ml-2 text-[#9E8F75] text-sm">(That's you! 🎉)</span>}
 </div>
 <div className="text-[#9E8F75] text-sm">{player.points} points</div>
 </div>
 </div>
 {player.rank === 1 && <Crown className="w-8 h-8 text-[#C9A84C]" />}
 </div>
 </div>
 ))}
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
 {/* Trivia Challenge */}
 <div className="lux-card/80 rounded p-6 border-2 border-amber-500/40/30">
 <div className="flex items-center gap-3 mb-4">
 <Brain className="w-8 h-8 text-amber-400" />
 <div>
 <h2 className="text-2xl font-bold text-white">Daily Trivia</h2>
 <p className="text-[#9E8F75] text-sm">Test your knowledge!</p>
 </div>
 </div>

 <div className="bg-[#110F0B] was-blue-900/30 rounded-lg p-5 mb-4 border border-amber-500/40/30">
 <div className="text-amber-400 text-sm font-semibold mb-2">Question of the Day:</div>
 <div className="text-white text-lg font-medium mb-4">
 What's the only food that never spoils? 🤔
 </div>
 <div className="grid grid-cols-2 gap-3 mb-4">
 <button 
 onClick={() => { setShowTriviaAnswer(true); setTriviaScore(0); }}
 className="px-4 py-3 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg transition-all"
 >
 A) Salt
 </button>
 <button 
 onClick={() => { setShowTriviaAnswer(true); setTriviaScore(100); }}
 className="px-4 py-3 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg transition-all"
 >
 B) Honey 🍯
 </button>
 <button 
 onClick={() => { setShowTriviaAnswer(true); setTriviaScore(0); }}
 className="px-4 py-3 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg transition-all"
 >
 C) Rice
 </button>
 <button 
 onClick={() => { setShowTriviaAnswer(true); setTriviaScore(0); }}
 className="px-4 py-3 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg transition-all"
 >
 D) Sugar
 </button>
 </div>
 {showTriviaAnswer && (
 <div className={`rounded-lg p-4 ${triviaScore > 0 ? 'bg-[#110F0B] was-green-900/50 border border-[rgba(201,168,76,0.22)]' : 'bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)]'}`}>
 <div className="text-white font-bold mb-1">
 {triviaScore > 0 ? '🎉 Correct! You\'re a genius!' : '❌ Not quite! But you\'re still awesome!'}
 </div>
 <div className="text-[#9E8F75] text-sm">
 The answer is Honey! Archaeologists have found 3,000-year-old honey that's still edible! 🍯
 </div>
 <div className="text-[#9E8F75] font-bold mt-2">+{triviaScore} points!</div>
 </div>
 )}
 </div>
 </div>

 {/* Emoji Puzzle */}
 <div className="lux-card/80 rounded p-6 border-2 border-amber-500/40/30">
 <div className="flex items-center gap-3 mb-4">
 <Smile className="w-8 h-8 text-amber-400" />
 <div>
 <h2 className="text-2xl font-bold text-white">Emoji Puzzle</h2>
 <p className="text-[#9E8F75] text-sm">Can you solve it?</p>
 </div>
 </div>

 <div className="bg-[#110F0B]/30 rounded-lg p-6 mb-4 border border-amber-500/40/30 text-center">
 <div className="text-6xl mb-4">🐝 + 🍃</div>
 <div className="text-white text-3xl font-bold mb-4">= ?</div>
 <button
 onClick={() => setShowEmojiAnswer(!showEmojiAnswer)}
 className="px-6 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white rounded-lg font-bold transition-all"
 >
 {showEmojiAnswer ? 'Hide Answer' : 'Show Answer'}
 </button>
 {showEmojiAnswer && (
 <div className="mt-4 bg-[#110F0B] was-green-900/50 border border-[rgba(201,168,76,0.22)] rounded-lg p-4">
 <div className="text-white text-2xl font-bold mb-2">BELIEVE! 💚</div>
 <div className="text-[#9E8F75] text-sm">Bee + Leaf = Believe! Get it? 😄</div>
 </div>
 )}
 </div>

 <div className="bg-[#110F0B]/50 rounded-lg p-4 border border-amber-500/40/20">
 <div className="text-[#C9A84C] font-semibold text-sm mb-2">More Puzzles Coming:</div>
 <div className="text-[#9E8F75] text-sm">
 🎨 + 🎵 = ?<br />
 ☀️ + 🌻 = ?<br />
 ⚡ + 💡 = ?
 </div>
 </div>
 </div>

 {/* Two Truths and a Lie */}
 <div className="lux-card/80 rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center gap-3 mb-4">
 <Target className="w-8 h-8 text-[#C9A84C] was-green-400" />
 <div>
 <h2 className="text-2xl font-bold text-white">Two Truths & A Lie</h2>
 <p className="text-[#9E8F75] text-sm">About your CEO, Sarah Chen!</p>
 </div>
 </div>

 <div className="bg-[#110F0B] was-green-900/30 rounded-lg p-5 mb-4 border border-[rgba(201,168,76,0.22)]">
 <div className="text-[#C9A84C] was-green-300 text-sm font-semibold mb-3">Which one is the lie?</div>
 <div className="space-y-3">
 <button className="w-full text-left p-4 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg transition-all">
 1️⃣ She speaks 4 languages fluently
 </button>
 <button className="w-full text-left p-4 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg transition-all">
 2️⃣ She once climbed Mount Kilimanjaro
 </button>
 <button className="w-full text-left p-4 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg transition-all">
 3️⃣ She was a professional chess player
 </button>
 </div>
 </div>
 <div className="text-[#9E8F75] text-sm text-center">
 💡 Hint: She loves hiking but prefers team sports!
 </div>
 </div>

 {/* Would You Rather */}
 <div className="lux-card/80 rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center gap-3 mb-4">
 <Dice1 className="w-8 h-8 text-[#C9A84C] was-pink-400" />
 <div>
 <h2 className="text-2xl font-bold text-white">Would You Rather?</h2>
 <p className="text-[#9E8F75] text-sm">Team edition!</p>
 </div>
 </div>

 <div className="bg-[#110F0B] was-pink-900/30 rounded-lg p-5 mb-4 border border-[rgba(201,168,76,0.22)]">
 <div className="text-[#C9A84C] was-pink-300 text-sm font-semibold mb-3">Today's Question:</div>
 <div className="text-white text-lg font-medium mb-4">
 Would you rather...
 </div>
 <div className="grid grid-cols-1 gap-3">
 <button className="p-4 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white rounded-lg transition-all text-left">
 <div className="font-bold mb-1">🏠 Work from home forever</div>
 <div className="text-sm text-[#C9A84C] was-blue-100">73% of team chose this</div>
 </button>
 <button className="p-4 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white rounded-lg transition-all text-left">
 <div className="font-bold mb-1">🏢 Free lunch at office forever</div>
 <div className="text-sm text-amber-50">27% of team chose this</div>
 </button>
 </div>
 </div>
 </div>

 {/* Quick Draw */}
 <div className="lux-card/80 rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center gap-3 mb-4">
 <Zap className="w-8 h-8 text-[#9E8F75]" />
 <div>
 <h2 className="text-2xl font-bold text-white">Quick Draw</h2>
 <p className="text-[#9E8F75] text-sm">Fastest typer wins!</p>
 </div>
 </div>

 <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-5 mb-4 border border-[rgba(201,168,76,0.22)]">
 <div className="text-[#9E8F75] text-sm font-semibold mb-3">Type this sentence as fast as you can:</div>
 <div className="text-white text-lg font-mono mb-4 bg-[#110F0B] p-4 rounded border border-[rgba(201,168,76,0.22)]">
 "The quick brown fox jumps over the lazy dog"
 </div>
 <input
 type="text"
 placeholder="Start typing here..."
 className="w-full bg-[#110F0B] border-2 border-[rgba(201,168,76,0.22)] rounded-lg px-4 py-3 text-white focus:border-[rgba(201,168,76,0.22)] focus:outline-none mb-3"
 />
 <button className="w-full px-4 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white rounded-lg font-bold transition-all">
 Check Speed!
 </button>
 </div>
 <div className="text-[#9E8F75] text-sm text-center">
 🏆 Current record: 2.3 seconds by Michael Torres
 </div>
 </div>

 {/* Team Challenges */}
 <div className="lux-card/80 rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center gap-3 mb-4">
 <Users className="w-8 h-8 text-[#C9A84C]" />
 <div>
 <h2 className="text-2xl font-bold text-white">Team Challenges</h2>
 <p className="text-[#9E8F75] text-sm">Compete together!</p>
 </div>
 </div>

 <div className="space-y-3">
 <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
 <div className="flex items-center justify-between mb-2">
 <div className="text-[#F0EBE0] font-bold">📸 Photo Scavenger Hunt</div>
 <div className="px-3 py-1 bg-[#110F0B] was-green-600 text-white rounded-full text-xs font-bold">ACTIVE</div>
 </div>
 <div className="text-[#9E8F75] text-sm mb-2">Find and photograph: "Something purple"</div>
 <div className="text-[#C9A84C] text-xs">12 teams participating • 3 days left</div>
 </div>

 <div className="bg-[#110F0B]/50 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
 <div className="text-white font-bold mb-2">🎯 Department Trivia Battle</div>
 <div className="text-[#9E8F75] text-sm mb-2">Weekly quiz championship</div>
 <div className="text-[#9E8F75] text-xs">Starts Friday 2:00 PM</div>
 </div>

 <div className="bg-[#110F0B]/50 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
 <div className="text-white font-bold mb-2">🎨 Meme Contest</div>
 <div className="text-[#9E8F75] text-sm mb-2">Best work-from-home meme wins!</div>
 <div className="text-[#9E8F75] text-xs">Submit by EOD Wednesday</div>
 </div>
 </div>
 </div>
 </div>

 {/* Fun Footer */}
 <div className="mt-8 bg-[rgba(201,168,76,0.04)] rounded p-6 border-2 border-amber-500/40/30 text-center">
 <h3 className="text-2xl font-bold text-[#F0EBE0]/70 mb-2">🎮 Why so serious?</h3>
 <p className="text-[#F0EBE0] text-lg">Remember: All work and no play makes Jack a dull boy. Now go have some fun! 🎉</p>
 </div>
 </div>
 </div>
 );
}


