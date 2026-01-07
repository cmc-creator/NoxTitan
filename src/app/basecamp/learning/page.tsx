'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mountain, BookOpen, Award, Clock, TrendingUp, Play, CheckCircle, Star, Filter, Search, Target, Zap } from 'lucide-react';

export default function LearningHub() {
  const [activeTab, setActiveTab] = useState('explore');

  const courses = [
    {
      id: 1,
      title: 'Leadership Development Fundamentals',
      instructor: 'Dr. Sarah Chen',
      duration: '6 hours',
      modules: 12,
      progress: 0,
      category: 'Leadership',
      level: 'Intermediate',
      rating: 4.8,
      enrolled: 127,
      image: '👔'
    },
    {
      id: 2,
      title: 'Effective Communication Skills',
      instructor: 'Michael Torres',
      duration: '4 hours',
      modules: 8,
      progress: 75,
      category: 'Soft Skills',
      level: 'Beginner',
      rating: 4.9,
      enrolled: 243,
      image: '💬'
    },
    {
      id: 3,
      title: 'Project Management Essentials',
      instructor: 'Lisa Anderson',
      duration: '8 hours',
      modules: 16,
      progress: 30,
      category: 'Management',
      level: 'Intermediate',
      rating: 4.7,
      enrolled: 189,
      image: '📊'
    },
    {
      id: 4,
      title: 'Data Analytics for Beginners',
      instructor: 'James Wilson',
      duration: '10 hours',
      modules: 20,
      progress: 0,
      category: 'Technical',
      level: 'Beginner',
      rating: 4.6,
      enrolled: 156,
      image: '📈'
    },
    {
      id: 5,
      title: 'Conflict Resolution & Mediation',
      instructor: 'Dr. Emily Rodriguez',
      duration: '3 hours',
      modules: 6,
      progress: 0,
      category: 'Soft Skills',
      level: 'Advanced',
      rating: 4.9,
      enrolled: 98,
      image: '🤝'
    },
    {
      id: 6,
      title: 'Time Management Mastery',
      instructor: 'David Park',
      duration: '5 hours',
      modules: 10,
      progress: 100,
      category: 'Productivity',
      level: 'Beginner',
      rating: 4.8,
      enrolled: 312,
      image: '⏰'
    }
  ];

  const myLearning = courses.filter(c => c.progress > 0 || c.progress === 100);
  const availableCourses = courses.filter(c => c.progress === 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Top Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-xl border-b-2 border-emerald-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/basecamp" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Mountain className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">
              Your Basecamp
            </span>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <Link href="/basecamp" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-100 mb-4 transition-colors">
            ← Back to Basecamp
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-200 mb-2"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(251,191,36,0.6)',
                    WebkitTextStroke: '1px rgba(251,191,36,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
                📚 Learning Hub
              </h1>
              <p className="text-emerald-200 text-lg">Grow your skills, unlock your potential!</p>
            </div>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-5 border-2 border-blue-500/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-blue-200 text-sm mb-1">Courses Enrolled</div>
                <div className="text-3xl font-bold text-white">3</div>
              </div>
              <BookOpen className="w-12 h-12 text-blue-400 opacity-50" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-xl p-5 border-2 border-green-500/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-green-200 text-sm mb-1">Completed</div>
                <div className="text-3xl font-bold text-white">1</div>
              </div>
              <CheckCircle className="w-12 h-12 text-green-400 opacity-50" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-5 border-2 border-purple-500/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-purple-200 text-sm mb-1">Learning Hours</div>
                <div className="text-3xl font-bold text-white">12.5</div>
              </div>
              <Clock className="w-12 h-12 text-purple-400 opacity-50" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 rounded-xl p-5 border-2 border-yellow-500/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-yellow-200 text-sm mb-1">Certificates</div>
                <div className="text-3xl font-bold text-white">1</div>
              </div>
              <Award className="w-12 h-12 text-yellow-400 opacity-50" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-slate-800/50 rounded-xl p-2 border-2 border-emerald-500/30 mb-6 inline-flex gap-2">
          <button
            onClick={() => setActiveTab('my-learning')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'my-learning'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            My Learning ({myLearning.length})
          </button>
          <button
            onClick={() => setActiveTab('explore')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'explore'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Explore Courses
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'achievements'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Achievements
          </button>
        </div>

        {/* My Learning Tab */}
        {activeTab === 'my-learning' && (
          <div>
            {myLearning.length === 0 ? (
              <div className="bg-slate-800/50 rounded-xl p-12 border-2 border-emerald-500/30 text-center">
                <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No courses yet!</h3>
                <p className="text-slate-400 mb-4">Start learning something new today</p>
                <button
                  onClick={() => setActiveTab('explore')}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg font-semibold transition-all"
                >
                  Explore Courses
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {myLearning.map(course => (
                  <div key={course.id} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border-2 border-emerald-500/30 hover:border-emerald-400/50 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-3xl">
                        {course.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                        <p className="text-slate-400 text-sm">{course.instructor}</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300 text-sm font-semibold">Progress</span>
                        <span className="text-emerald-400 font-bold">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-emerald-600 to-teal-600 h-2 rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4 text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {course.duration}
                      </span>
                      <span>{course.modules} modules</span>
                    </div>

                    <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                      {course.progress === 100 ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Review Course
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5" />
                          Continue Learning
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Explore Courses Tab */}
        {activeTab === 'explore' && (
          <div>
            {/* Search & Filters */}
            <div className="bg-slate-800/50 rounded-xl p-4 border-2 border-emerald-500/30 mb-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex-1 min-w-[300px]">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-400" />
                    <input
                      type="text"
                      placeholder="Search courses..."
                      className="w-full bg-slate-900 border-2 border-emerald-500/30 rounded-lg pl-10 pr-4 py-2 text-white focus:border-emerald-400 focus:outline-none"
                    />
                  </div>
                </div>
                <select className="bg-slate-900 border-2 border-emerald-500/30 rounded-lg px-4 py-2 text-white focus:border-emerald-400 focus:outline-none">
                  <option>All Categories</option>
                  <option>Leadership</option>
                  <option>Soft Skills</option>
                  <option>Technical</option>
                  <option>Management</option>
                </select>
                <select className="bg-slate-900 border-2 border-emerald-500/30 rounded-lg px-4 py-2 text-white focus:border-emerald-400 focus:outline-none">
                  <option>All Levels</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableCourses.map(course => (
                <div key={course.id} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border-2 border-emerald-500/30 hover:border-emerald-400/50 transition-all group">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-6xl mb-4">
                    {course.image}
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-semibold">
                      {course.category}
                    </span>
                    <span className="px-3 py-1 bg-blue-900/50 border border-blue-500/30 text-blue-300 rounded-full text-xs font-semibold">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{course.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{course.instructor}</p>

                  <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" /> {course.rating}
                    </span>
                  </div>

                  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 rounded-xl p-6 border-2 border-yellow-500/30 text-center">
              <div className="text-6xl mb-3">🏆</div>
              <div className="text-yellow-300 font-bold mb-1">Time Master</div>
              <div className="text-slate-400 text-sm">Completed Time Management</div>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-6 border-2 border-slate-700 text-center opacity-50">
              <div className="text-6xl mb-3 grayscale">🎯</div>
              <div className="text-slate-500 font-bold mb-1">Goal Crusher</div>
              <div className="text-slate-600 text-sm">Complete 5 courses</div>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-6 border-2 border-slate-700 text-center opacity-50">
              <div className="text-6xl mb-3 grayscale">📚</div>
              <div className="text-slate-500 font-bold mb-1">Knowledge Seeker</div>
              <div className="text-slate-600 text-sm">20 hours of learning</div>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-6 border-2 border-slate-700 text-center opacity-50">
              <div className="text-6xl mb-3 grayscale">⭐</div>
              <div className="text-slate-500 font-bold mb-1">Rising Star</div>
              <div className="text-slate-600 text-sm">Top 10% learner</div>
            </div>
          </div>
        )}

        {/* Encouragement Banner */}
        <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border-2 border-purple-500/30 text-center">
          <h3 className="text-2xl font-bold text-purple-200 mb-2">🚀 You're doing amazing!</h3>
          <p className="text-purple-100 text-lg">Every course completed is a step toward your best self. Keep learning!</p>
        </div>
      </div>
    </div>
  );
}
