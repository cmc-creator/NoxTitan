'use client';

import { useState } from 'react';
import { BookOpen, Heart, Users, TrendingUp, Shield, MessageCircle, Award, CheckCircle, Lock, Play } from 'lucide-react';

export default function ManagerAcademyPage() {
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const modules = [
    {
      id: 'servant-leadership',
      title: 'Servant Leadership Fundamentals',
      icon: <Heart className="w-8 h-8" />,
      duration: '45 min',
      color: 'from-pink-600 to-rose-600',
      lessons: [
        'What is Servant Leadership?',
        'Put People First - Always',
        'Active Listening Skills',
        'Empowerment vs. Micromanagement',
        'Building Trust & Credibility',
      ],
      required: true,
    },
    {
      id: 'people-development',
      title: 'Developing Your Team',
      icon: <Users className="w-8 h-8" />,
      duration: '50 min',
      color: 'from-amber-700 to-cyan-600',
      lessons: [
        'Identifying Strengths & Growth Areas',
        'Setting SMART Goals Together',
        'Coaching vs. Directing',
        'Career Path Planning',
        'Succession Planning',
      ],
      required: true,
    },
    {
      id: 'communication',
      title: 'Effective Communication',
      icon: <MessageCircle className="w-8 h-8" />,
      duration: '40 min',
      color: 'from-amber-700 to-amber-600',
      lessons: [
        'Clear & Transparent Communication',
        'Giving Constructive Feedback',
        'Difficult Conversations',
        'Conflict Resolution',
        'Team Meeting Best Practices',
      ],
      required: true,
    },
    {
      id: 'legal-compliance',
      title: 'Legal & Compliance',
      icon: <Shield className="w-8 h-8" />,
      duration: '60 min',
      color: 'from-red-600 to-orange-600',
      lessons: [
        'Fair Labor Standards Act (FLSA)',
        'Harassment Prevention',
        'Disciplinary Procedures',
        'Documentation Requirements',
        'FMLA, ADA & Leave Management',
      ],
      required: true,
    },
    {
      id: 'performance-management',
      title: 'Performance Management',
      icon: <TrendingUp className="w-8 h-8" />,
      duration: '55 min',
      color: 'from-green-600 to-emerald-600',
      lessons: [
        'Setting Expectations & Standards',
        'Performance Reviews That Work',
        'Addressing Poor Performance',
        'Recognition & Rewards',
        'Performance Improvement Plans',
      ],
      required: true,
    },
    {
      id: 'platform-mastery',
      title: 'NyxTitan Platform Mastery',
      icon: <BookOpen className="w-8 h-8" />,
      duration: '35 min',
      color: 'from-amber-700 to-amber-600',
      lessons: [
        'Schedule Creation & Optimization',
        'Approval Workflows',
        'Analytics & Reporting',
        'Employee Performance Tracking',
        'Automation & Time-Savers',
      ],
      required: false,
    },
  ];

  const handleModuleClick = (moduleId: string) => {
    if (activeModule === moduleId) {
      setActiveModule(null);
    } else {
      setActiveModule(moduleId);
    }
  };

  const handleCompleteModule = (moduleId: string) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const requiredModules = modules.filter(m => m.required);
  const completedRequired = requiredModules.filter(m => completedModules.includes(m.id)).length;
  const progressPercent = (completedRequired / requiredModules.length) * 100;

  return (
    <div className="min-h-screen lux-app-bg p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-white mb-3">
            Manager Academy
          </h1>
          <p className="text-xl text-amber-100/70 max-w-3xl mx-auto">
            Become an exceptional leader with servant leadership principles and best practices
          </p>
        </div>

        {/* Progress Card */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-600 rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center justify-between gap-6">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-2">Your Progress</h2>
              <p className="text-amber-50 text-lg">
                {completedRequired} of {requiredModules.length} required modules completed
              </p>
            </div>
            <div className="relative w-32 h-32 flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="white"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - progressPercent / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{Math.round(progressPercent)}%</span>
              </div>
            </div>
          </div>

          {progressPercent === 100 && (
            <div className="mt-6 bg-stone-950/20 backdrop-blur-sm rounded-xl p-4 text-center">
              <Award className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <p className="text-white font-bold text-lg">🎉 Congratulations! You've completed Manager Academy!</p>
              <p className="text-amber-50 text-sm mt-1">Certificate available in your profile</p>
            </div>
          )}
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-3 gap-6">
          {modules.map((module) => {
            const isCompleted = completedModules.includes(module.id);
            const isActive = activeModule === module.id;

            return (
              <div key={module.id} className="relative">
                <button
                  onClick={() => handleModuleClick(module.id)}
                  className={`w-full bg-stone-900 border-2 rounded-xl p-6 transition-all hover:scale-105 ${
                    isCompleted
                      ? 'border-green-500'
                      : isActive
                      ? 'border-amber-500/40'
                      : 'border-stone-700 hover:border-amber-400/40'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${module.color}`}>
                      {module.icon}
                    </div>
                    {isCompleted ? (
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    ) : module.required ? (
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">REQUIRED</span>
                    ) : (
                      <span className="px-2 py-1 bg-amber-600 text-white text-xs font-bold rounded">OPTIONAL</span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 text-left">{module.title}</h3>
                  <p className="text-amber-200 text-sm mb-4 text-left">⏱️ {module.duration}</p>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-stone-700 text-left space-y-2">
                      {module.lessons.map((lesson, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-amber-100/70">
                          <Play className="w-4 h-4 flex-shrink-0" />
                          <span>{lesson}</span>
                        </div>
                      ))}
                      {!isCompleted && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCompleteModule(module.id);
                          }}
                          className={`mt-4 w-full py-2 bg-gradient-to-r ${module.color} text-white rounded-lg font-semibold hover:opacity-90 transition-all`}
                        >
                          Start Module
                        </button>
                      )}
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Leadership Tips */}
        <div className="mt-12 bg-stone-900 border-2 border-stone-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Heart className="w-8 h-8 text-pink-500" />
            Servant Leadership Core Principles
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🙏</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Put People First</h4>
                  <p className="text-sm text-amber-100/70">Your team's wellbeing and growth come before results</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👂</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Listen Actively</h4>
                  <p className="text-sm text-amber-100/70">Understand before being understood</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💪</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Empower, Don't Control</h4>
                  <p className="text-sm text-amber-100/70">Trust your team and give them autonomy</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌱</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Grow Your Team</h4>
                  <p className="text-sm text-amber-100/70">Invest in development and career growth</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Build Community</h4>
                  <p className="text-sm text-amber-100/70">Foster belonging and collaboration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚖️</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Lead with Integrity</h4>
                  <p className="text-sm text-amber-100/70">Model the behavior you expect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



