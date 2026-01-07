'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Award, Star, Target, TrendingUp, MessageSquare, FileText, Calendar, Plus, CheckCircle } from 'lucide-react';

export default function PerformanceReviews() {
  const [activeTab, setActiveTab] = useState('reviews');

  const reviews = [
    { id: 1, employee: 'Sarah Johnson', position: 'RN - ICU', reviewer: 'Dr. Michael Chen', dueDate: '2026-01-15', status: 'in-progress', rating: null, completion: 60 },
    { id: 2, employee: 'David Martinez', position: 'Lab Tech', reviewer: 'Jennifer Park', dueDate: '2026-01-18', status: 'pending', rating: null, completion: 0 },
    { id: 3, employee: 'Emily Rodriguez', position: 'Pharmacist', reviewer: 'Dr. Lisa Wong', dueDate: '2026-01-12', status: 'overdue', rating: null, completion: 20 },
    { id: 4, employee: 'Michael Torres', position: 'Radiology Tech', reviewer: 'Sarah Williams', dueDate: '2025-12-28', status: 'completed', rating: 4.5, completion: 100 },
    { id: 5, employee: 'Jennifer Chen', position: 'RN - ER', reviewer: 'Dr. Michael Chen', dueDate: '2025-12-30', status: 'completed', rating: 4.8, completion: 100 },
  ];

  const goals = [
    { id: 1, employee: 'Sarah Johnson', goal: 'Complete ACLS Certification', type: 'Development', progress: 75, dueDate: '2026-02-01', status: 'on-track' },
    { id: 2, employee: 'Sarah Johnson', goal: 'Mentor 2 new RN hires', type: 'Leadership', progress: 50, dueDate: '2026-03-31', status: 'on-track' },
    { id: 3, employee: 'Sarah Johnson', goal: 'Reduce medication errors by 20%', type: 'Quality', progress: 90, dueDate: '2026-01-31', status: 'exceeding' },
    { id: 4, employee: 'Sarah Johnson', goal: 'Improve patient satisfaction scores', type: 'Patient Care', progress: 30, dueDate: '2026-06-30', status: 'at-risk' },
  ];

  const feedback360 = [
    { from: 'Dr. Michael Chen (Manager)', date: '2026-01-02', rating: 4.5, comment: 'Excellent clinical skills and patient care. Shows great leadership potential.' },
    { from: 'Jennifer Park (Peer)', date: '2026-01-03', rating: 4.8, comment: 'Amazing team player. Always willing to help and mentor others.' },
    { from: 'David Martinez (Peer)', date: '2026-01-03', rating: 4.6, comment: 'Strong technical skills and attention to detail. Great communicator.' },
    { from: 'Patient Family (External)', date: '2026-01-04', rating: 5.0, comment: 'Compassionate and caring. Made a difficult time easier for our family.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/hr" className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-100 mb-4 transition-colors">
            ← Back to HR Center
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-200 to-orange-200 mb-2"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(251,146,60,0.6)',
                    WebkitTextStroke: '1px rgba(251,146,60,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
                Performance Management
              </h1>
              <p className="text-orange-200">360-degree reviews, goal tracking & continuous feedback</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-lg font-bold transition-all shadow-lg flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Start New Review
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-4 border-2 border-blue-500/30">
            <div className="text-slate-300 text-sm mb-1">Total Reviews</div>
            <div className="text-3xl font-bold text-white">87</div>
            <div className="text-blue-400 text-xs mt-1">Q1 2026 cycle</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-xl p-4 border-2 border-emerald-500/30">
            <div className="text-slate-300 text-sm mb-1">Completed</div>
            <div className="text-3xl font-bold text-white">52</div>
            <div className="text-emerald-400 text-xs mt-1">60% complete</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/50 rounded-xl p-4 border-2 border-orange-500/30">
            <div className="text-slate-300 text-sm mb-1">In Progress</div>
            <div className="text-3xl font-bold text-white">23</div>
            <div className="text-orange-400 text-xs mt-1">26% in progress</div>
          </div>
          <div className="bg-gradient-to-br from-red-900/50 to-rose-900/50 rounded-xl p-4 border-2 border-red-500/30">
            <div className="text-slate-300 text-sm mb-1">Overdue</div>
            <div className="text-3xl font-bold text-white">12</div>
            <div className="text-red-400 text-xs mt-1 animate-pulse">Action needed</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-4 border-2 border-purple-500/30">
            <div className="text-slate-300 text-sm mb-1">Avg Rating</div>
            <div className="text-3xl font-bold text-white">4.6</div>
            <div className="text-purple-400 text-xs mt-1">★★★★★</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-slate-800/50 p-2 rounded-lg">
          <button
            onClick={() => setActiveTab('reviews')}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'reviews' ? 'bg-orange-600 text-white' : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => setActiveTab('goals')}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'goals' ? 'bg-orange-600 text-white' : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            Goals & OKRs
          </button>
          <button
            onClick={() => setActiveTab('360')}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === '360' ? 'bg-orange-600 text-white' : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            360 Feedback
          </button>
        </div>

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">Performance Reviews</h2>
            <div className="space-y-4">
              {reviews.map(review => (
                <div key={review.id} className="bg-slate-900/50 rounded-lg p-5 border border-slate-700 hover:border-orange-500 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{review.employee}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          review.status === 'completed' ? 'bg-emerald-600 text-white' :
                          review.status === 'in-progress' ? 'bg-orange-600 text-white' :
                          review.status === 'overdue' ? 'bg-red-600 text-white animate-pulse' :
                          'bg-slate-600 text-white'
                        }`}>
                          {review.status.toUpperCase().replace('-', ' ')}
                        </span>
                        {review.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            <span className="text-white font-bold">{review.rating}</span>
                          </div>
                        )}
                      </div>
                      <div className="text-slate-300 mb-3">{review.position}</div>
                      <div className="grid grid-cols-3 gap-4 mb-3">
                        <div>
                          <div className="text-xs text-slate-400">Reviewer</div>
                          <div className="text-white font-semibold">{review.reviewer}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">Due Date</div>
                          <div className={`font-semibold ${
                            review.status === 'overdue' ? 'text-red-400' : 'text-white'
                          }`}>
                            {review.dueDate}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">Progress</div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-slate-700 rounded-full h-2">
                              <div className={`h-2 rounded-full ${
                                review.completion === 100 ? 'bg-emerald-500' : 'bg-orange-500'
                              }`} style={{width: `${review.completion}%`}}></div>
                            </div>
                            <span className="text-white text-sm font-bold">{review.completion}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-semibold">
                        {review.status === 'completed' ? 'View' : 'Continue'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Goals Tab */}
        {activeTab === 'goals' && (
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-blue-500/30">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Goals & Objectives</h2>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Goal
              </button>
            </div>
            <div className="space-y-4">
              {goals.map(goal => (
                <div key={goal.id} className="bg-slate-900/50 rounded-lg p-5 border border-slate-700 hover:border-blue-500 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{goal.goal}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          goal.status === 'exceeding' ? 'bg-emerald-600 text-white' :
                          goal.status === 'on-track' ? 'bg-blue-600 text-white' :
                          'bg-red-600 text-white'
                        }`}>
                          {goal.status.toUpperCase().replace('-', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {goal.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Due: {goal.dueDate}
                        </span>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-3xl font-bold text-white mb-1">{goal.progress}%</div>
                      <div className="text-xs text-slate-400">Complete</div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className={`h-3 rounded-full ${
                      goal.progress >= 90 ? 'bg-emerald-500' :
                      goal.progress >= 50 ? 'bg-blue-500' :
                      'bg-orange-500'
                    }`} style={{width: `${goal.progress}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 360 Feedback Tab */}
        {activeTab === '360' && (
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-purple-500/30">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">360-Degree Feedback</h2>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm text-slate-400">Overall Rating</div>
                  <div className="text-3xl font-bold text-white">4.7</div>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className={`w-6 h-6 ${star <= 4.7 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {feedback360.map((feedback, idx) => (
                <div key={idx} className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-5 border border-purple-500/30">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-bold mb-1">{feedback.from}</h3>
                      <div className="text-sm text-slate-400">{feedback.date}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(star => (
                        <Star key={star} className={`w-5 h-5 ${star <= feedback.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />
                      ))}
                      <span className="text-white font-bold ml-2">{feedback.rating}</span>
                    </div>
                  </div>
                  <div className="text-slate-200 italic">"{feedback.comment}"</div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-900/30 rounded-lg p-4 border border-blue-500/30">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="text-white font-semibold">Want to provide feedback?</div>
                  <div className="text-sm text-slate-300">Send continuous feedback to colleagues anytime</div>
                </div>
                <button className="ml-auto px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
