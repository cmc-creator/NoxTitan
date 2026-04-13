'use client';

import { useState } from 'react';
import { Target, CheckCircle, Clock, Users, BookOpen, Heart, TrendingUp, AlertTriangle, Award, Calendar, MessageSquare, FileText, Sparkles } from 'lucide-react';

interface OnboardingRetentionHubProps {
  role?: 'manager' | 'hr' | 'admin';
}

export default function OnboardingRetentionHub({ role = 'manager' }: OnboardingRetentionHubProps) {
  const [activeTab, setActiveTab] = useState<'onboarding' | 'retention' | 'analytics'>('onboarding');

  // Active onboarding employees
  const activeOnboarding = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Emergency RN',
      startDate: '2026-01-06',
      daysIn: 6,
      buddy: 'Jessica Williams',
      progress: 45,
      completedTasks: 18,
      totalTasks: 40,
      upcomingMilestone: '30-day check-in',
      daysToMilestone: 24,
      status: 'on-track',
      recentActivity: 'Completed HIPAA training module',
      satisfactionScore: 4.5,
      concernFlags: 0
    },
    {
      id: 2,
      name: 'David Park',
      role: 'Lab Technician',
      startDate: '2026-01-02',
      daysIn: 10,
      buddy: 'Amanda Rodriguez',
      progress: 72,
      completedTasks: 29,
      totalTasks: 40,
      upcomingMilestone: '2-week check-in',
      daysToMilestone: 4,
      status: 'excellent',
      recentActivity: 'Shadowed lead tech on complex cases',
      satisfactionScore: 4.8,
      concernFlags: 0
    },
    {
      id: 3,
      name: 'Emily Foster',
      role: 'Medical Assistant',
      startDate: '2025-12-28',
      daysIn: 15,
      buddy: 'Not Assigned',
      progress: 35,
      completedTasks: 14,
      totalTasks: 40,
      upcomingMilestone: '30-day check-in',
      daysToMilestone: 15,
      status: 'needs-attention',
      recentActivity: 'Missed scheduled training session',
      satisfactionScore: 3.2,
      concernFlags: 3
    },
  ];

  // Retention risk analysis
  const retentionRisks = [
    {
      id: 1,
      name: 'Marcus Johnson',
      role: 'RN - Med-Surg',
      tenure: '8 months',
      riskLevel: 'high',
      riskScore: 78,
      concerns: [
        'Below-average engagement scores (2.8/5)',
        'Missed 3 recent team meetings',
        'No career development plan on file',
        'Working overtime 6 consecutive weeks'
      ],
      recommendations: [
        'Schedule immediate 1:1 check-in',
        'Review workload and scheduling',
        'Discuss career growth opportunities',
        'Consider rotation to different unit'
      ],
      lastCheckIn: '47 days ago',
      satisfactionTrend: 'declining'
    },
    {
      id: 2,
      name: 'Lisa Chen',
      role: 'Respiratory Therapist',
      tenure: '14 months',
      riskLevel: 'medium',
      riskScore: 52,
      concerns: [
        'Reported burnout in last mood check-in',
        'Performance slightly below average (82%)',
        'Limited interaction with team activities'
      ],
      recommendations: [
        'Offer flexible scheduling options',
        'Suggest wellness program enrollment',
        'Pair with mentor for support'
      ],
      lastCheckIn: '12 days ago',
      satisfactionTrend: 'stable'
    },
  ];

  // Successful onboarding cohorts
  const successMetrics = {
    current90DayRetention: 94,
    current1YearRetention: 87,
    industryAvg90Day: 78,
    industryAvg1Year: 72,
    avgOnboardingTime: 4.2,
    targetOnboardingTime: 4.0,
    employeesSinceLaunch: 47,
    currentlyOnboarding: 12,
    buddyProgramSuccess: 92,
  };

  // Onboarding checklist template
  const onboardingChecklist = [
    {
      category: 'Pre-Day 1',
      tasks: [
        'Send welcome email with first day details',
        'Complete I-9 and tax forms',
        'Set up email and system access',
        'Ship equipment (if remote)',
        'Assign onboarding buddy'
      ]
    },
    {
      category: 'Week 1',
      tasks: [
        'Complete orientation and facility tour',
        'Meet with manager for expectations discussion',
        'Review job description and goals',
        'Complete safety training',
        'HIPAA and compliance training',
        'Shadow buddy for 2 shifts',
        'End of week check-in'
      ]
    },
    {
      category: 'Week 2-4',
      tasks: [
        'Begin supervised patient care',
        'Complete department-specific training',
        'Attend team meetings',
        'Review policies and procedures',
        '2-week formal check-in',
        'Continue buddy shadowing (reduced)',
        '30-day performance conversation'
      ]
    },
    {
      category: 'Day 31-90',
      tasks: [
        'Transition to independent work',
        'Set 90-day goals',
        'Enroll in continuing education',
        'Complete specialty certifications',
        '60-day check-in',
        '90-day formal review',
        'Buddy program completion'
      ]
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-xl p-4 border-2 border-green-500/30">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-6 h-6 text-green-400" />
            <TrendingUp className="w-5 h-5 text-green-300" />
          </div>
          <p className="text-3xl font-bold text-white">{successMetrics.current90DayRetention}%</p>
          <p className="text-sm text-stone-300">90-Day Retention</p>
          <p className="text-xs text-green-400 mt-1">+{successMetrics.current90DayRetention - successMetrics.industryAvg90Day}% vs industry</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/20 to-amber-800/20 backdrop-blur-xl rounded-xl p-4 border-2 border-cyan-500/30">
          <div className="flex items-center justify-between mb-2">
            <Heart className="w-6 h-6 text-cyan-400" />
            <TrendingUp className="w-5 h-5 text-cyan-300" />
          </div>
          <p className="text-3xl font-bold text-white">{successMetrics.current1YearRetention}%</p>
          <p className="text-sm text-stone-300">1-Year Retention</p>
          <p className="text-xs text-cyan-400 mt-1">+{successMetrics.current1YearRetention - successMetrics.industryAvg1Year}% vs industry</p>
        </div>

        <div className="bg-gradient-to-br from-stone-900/20 to-pink-500/20 backdrop-blur-xl rounded-xl p-4 border-2 border-amber-500/40/30">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-6 h-6 text-amber-400" />
          </div>
          <p className="text-3xl font-bold text-white">{successMetrics.avgOnboardingTime} <span className="text-lg">weeks</span></p>
          <p className="text-sm text-stone-300">Avg Time to Productivity</p>
          <p className="text-xs text-stone-400 mt-1">Target: {successMetrics.targetOnboardingTime} weeks</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-xl p-4 border-2 border-yellow-500/30">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-6 h-6 text-yellow-400" />
          </div>
          <p className="text-3xl font-bold text-white">{successMetrics.currentlyOnboarding}</p>
          <p className="text-sm text-stone-300">Currently Onboarding</p>
          <p className="text-xs text-stone-400 mt-1">{successMetrics.employeesSinceLaunch} total since launch</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('onboarding')}
          className={`px-6 py-3 rounded-lg font-bold transition-all ${
            activeTab === 'onboarding'
              ? 'bg-gradient-to-r from-cyan-500 to-amber-800 text-white'
              : 'bg-stone-900 text-stone-300 hover:bg-stone-900'
          }`}
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Active Onboarding
          </div>
        </button>
        <button
          onClick={() => setActiveTab('retention')}
          className={`px-6 py-3 rounded-lg font-bold transition-all ${
            activeTab === 'retention'
              ? 'bg-gradient-to-r from-cyan-500 to-amber-800 text-white'
              : 'bg-stone-900 text-stone-300 hover:bg-stone-900'
          }`}
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Retention Risks
          </div>
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-6 py-3 rounded-lg font-bold transition-all ${
            activeTab === 'analytics'
              ? 'bg-gradient-to-r from-cyan-500 to-amber-800 text-white'
              : 'bg-stone-900 text-stone-300 hover:bg-stone-900'
          }`}
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Analytics & Best Practices
          </div>
        </button>
      </div>

      {/* Active Onboarding Tab */}
      {activeTab === 'onboarding' && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {activeOnboarding.map((employee) => (
            <div
              key={employee.id}
              className={`bg-gradient-to-br backdrop-blur-xl rounded-xl p-6 border-2 ${
                employee.status === 'excellent'
                  ? 'from-green-500/20 to-emerald-500/20 border-green-500/30'
                  : employee.status === 'needs-attention'
                  ? 'from-red-500/20 to-orange-500/20 border-red-500/30'
                  : 'from-cyan-500/20 to-amber-800/20 border-cyan-500/30'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{employee.name}</h3>
                  <p className="text-cyan-400">{employee.role}</p>
                  <p className="text-sm text-stone-400">Started: {employee.startDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">{employee.daysIn}</p>
                  <p className="text-sm text-stone-300">Days In</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white font-semibold">Onboarding Progress</span>
                  <span className="text-sm text-white font-bold">{employee.progress}%</span>
                </div>
                <div className="w-full bg-stone-900 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      employee.status === 'excellent'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                        : employee.status === 'needs-attention'
                        ? 'bg-gradient-to-r from-red-500 to-orange-500'
                        : 'bg-gradient-to-r from-cyan-500 to-amber-800'
                    }`}
                    style={{ width: `${employee.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-stone-400 mt-1">
                  {employee.completedTasks} of {employee.totalTasks} tasks completed
                </p>
              </div>

              {/* Buddy Assignment */}
              <div className="bg-stone-950/50 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-amber-400" />
                  <p className="text-sm font-semibold text-white">Onboarding Buddy</p>
                </div>
                {employee.buddy !== 'Not Assigned' ? (
                  <p className="text-white font-bold">{employee.buddy}</p>
                ) : (
                  <div className="flex items-center justify-between">
                    <p className="text-red-400 font-bold">Not Assigned ⚠️</p>
                    <button className="px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 rounded text-xs font-semibold">
                      Assign Now
                    </button>
                  </div>
                )}
              </div>

              {/* Status Indicators */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-stone-950/50 rounded-lg p-3">
                  <p className="text-xs text-stone-400">Satisfaction</p>
                  <p className="text-xl font-bold text-white">{employee.satisfactionScore}/5.0</p>
                </div>
                <div className="bg-stone-950/50 rounded-lg p-3">
                  <p className="text-xs text-stone-400">Concern Flags</p>
                  <p className={`text-xl font-bold ${employee.concernFlags > 0 ? 'text-red-400' : 'text-green-400'}`}>
                    {employee.concernFlags}
                  </p>
                </div>
              </div>

              {/* Upcoming Milestone */}
              <div className="bg-amber-500/20 rounded-lg p-3 mb-4 border border-amber-500/40/30">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <p className="text-sm font-semibold text-amber-200">Upcoming Milestone</p>
                </div>
                <p className="text-white font-bold">{employee.upcomingMilestone}</p>
                <p className="text-xs text-stone-400">In {employee.daysToMilestone} days</p>
              </div>

              {/* Recent Activity */}
              <div className="bg-stone-950/50 rounded-lg p-3 mb-4">
                <p className="text-xs text-stone-400 mb-1">Recent Activity</p>
                <p className="text-sm text-white">{employee.recentActivity}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-lg font-semibold transition-all">
                  View Progress
                </button>
                <button className="flex-1 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 rounded-lg font-semibold transition-all">
                  Check In
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Retention Risks Tab */}
      {activeTab === 'retention' && (
        <div className="space-y-4">
          {retentionRisks.map((employee) => (
            <div
              key={employee.id}
              className={`bg-gradient-to-br backdrop-blur-xl rounded-xl p-6 border-2 ${
                employee.riskLevel === 'high'
                  ? 'from-red-500/20 to-orange-500/20 border-red-500/30'
                  : 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{employee.name}</h3>
                  <p className="text-lg text-cyan-400">{employee.role}</p>
                  <p className="text-sm text-stone-400">Tenure: {employee.tenure}</p>
                </div>
                <div className="text-right">
                  <span className={`px-4 py-2 rounded-lg font-bold text-sm ${
                    employee.riskLevel === 'high'
                      ? 'bg-red-500/30 text-red-300'
                      : 'bg-yellow-500/30 text-yellow-300'
                  }`}>
                    {employee.riskLevel.toUpperCase()} RISK
                  </span>
                  <p className="text-2xl font-bold text-white mt-2">{employee.riskScore}%</p>
                  <p className="text-xs text-stone-400">Risk Score</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Concerns */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    Identified Concerns
                  </h4>
                  <div className="space-y-2">
                    {employee.concerns.map((concern, index) => (
                      <div key={index} className="bg-stone-950/50 rounded-lg p-3 border-l-4 border-red-500">
                        <p className="text-sm text-white">{concern}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Recommendations */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    AI Recommendations
                  </h4>
                  <div className="space-y-2">
                    {employee.recommendations.map((rec, index) => (
                      <div key={index} className="bg-stone-950/50 rounded-lg p-3 border-l-4 border-amber-500/40">
                        <p className="text-sm text-white">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-amber-800 hover:from-cyan-600 hover:to-amber-800 rounded-lg font-bold text-white transition-all">
                  Schedule 1:1
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-stone-900 to-pink-500 hover:from-stone-900 hover:to-pink-600 rounded-lg font-bold text-white transition-all">
                  Review Workload
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-lg font-bold text-white transition-all">
                  Career Planning
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-lg font-bold text-white transition-all">
                  Send Message
                </button>
              </div>
            </div>
          ))}

          {retentionRisks.length === 0 && (
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-xl p-12 border-2 border-green-500/30 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No High-Risk Employees!</h3>
              <p className="text-stone-300">Your team retention is looking excellent. Keep up the great work!</p>
            </div>
          )}
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Onboarding Checklist */}
          <div className="lux-card/80 backdrop-blur-xl rounded-xl p-6 border-2 border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-cyan-400" />
              Onboarding Checklist Template
            </h3>
            <div className="space-y-4">
              {onboardingChecklist.map((phase, index) => (
                <div key={index} className="bg-stone-950/50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-white mb-3">{phase.category}</h4>
                  <div className="space-y-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-stone-300">{task}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices & Insights */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-stone-900/20 to-pink-500/20 backdrop-blur-xl rounded-xl p-6 border-2 border-amber-500/40/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-400" />
                Best Practices
              </h3>
              <div className="space-y-3">
                <div className="bg-stone-950/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Buddy System Impact</h4>
                  <p className="text-sm text-stone-300 mb-2">Employees with assigned buddies show {successMetrics.buddyProgramSuccess}% higher retention at 1 year.</p>
                  <div className="w-full bg-stone-900 rounded-full h-2">
                    <div className="bg-gradient-to-r from-stone-900 to-pink-500 h-2 rounded-full" style={{ width: `${successMetrics.buddyProgramSuccess}%` }}></div>
                  </div>
                </div>

                <div className="bg-stone-950/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Early Check-In Frequency</h4>
                  <p className="text-sm text-stone-300">Weekly check-ins during first 30 days reduce turnover by 34%.</p>
                </div>

                <div className="bg-stone-950/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Career Path Discussion</h4>
                  <p className="text-sm text-stone-300">Employees with documented career plans are 2.5x more likely to stay beyond 2 years.</p>
                </div>

                <div className="bg-stone-950/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Recognition Timing</h4>
                  <p className="text-sm text-stone-300">Recognition within first 90 days improves engagement scores by 42%.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-amber-800/20 backdrop-blur-xl rounded-xl p-6 border-2 border-cyan-500/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
                Your Performance vs Industry
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">90-Day Retention</span>
                    <span className="text-white font-bold">{successMetrics.current90DayRetention}%</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full bg-stone-900 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: `${successMetrics.current90DayRetention}%` }}></div>
                    </div>
                    <div className="w-full bg-stone-900 rounded-full h-2">
                      <div className="bg-gradient-to-r from-slate-400 to-slate-500 h-2 rounded-full" style={{ width: `${successMetrics.industryAvg90Day}%` }}></div>
                    </div>
                    <p className="text-xs text-stone-400">Industry avg: {successMetrics.industryAvg90Day}%</p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">1-Year Retention</span>
                    <span className="text-white font-bold">{successMetrics.current1YearRetention}%</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full bg-stone-900 rounded-full h-3">
                      <div className="bg-gradient-to-r from-cyan-500 to-amber-800 h-3 rounded-full" style={{ width: `${successMetrics.current1YearRetention}%` }}></div>
                    </div>
                    <div className="w-full bg-stone-900 rounded-full h-2">
                      <div className="bg-gradient-to-r from-slate-400 to-slate-500 h-2 rounded-full" style={{ width: `${successMetrics.industryAvg1Year}%` }}></div>
                    </div>
                    <p className="text-xs text-stone-400">Industry avg: {successMetrics.industryAvg1Year}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


