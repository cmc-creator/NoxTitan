'use client';

import { useState } from 'react';
import { Star, TrendingUp, Award, Users, BookOpen, MessageSquare, CheckCircle, AlertCircle, ChevronRight, X } from 'lucide-react';

interface TalentIdentificationSystemProps {
  managerId?: string;
  showNotifications?: boolean;
}

export default function TalentIdentificationSystem({ managerId, showNotifications = true }: TalentIdentificationSystemProps) {
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

  // High performers identified by AI
  const topTalent = [
    {
      id: 1,
      name: 'Jessica Williams',
      role: 'RN - Emergency',
      avatar: 'JW',
      metrics: {
        performance: 98,
        consistency: 95,
        patientSatisfaction: 4.9,
        teamRating: 4.8,
        attendanceRate: 99,
      },
      strengths: [
        'Emergency response excellence',
        'Strong clinical judgment',
        'Natural team leader',
        'Excellent communication',
        'Quick decision making'
      ],
      recommendations: {
        recognize: 'Outstanding Q4 performance - 15% above dept average',
        promote: 'Ready for Charge Nurse role - meets all qualifications',
        mentor: 'Ideal mentor for 3 new hires starting next month',
        train: 'Could lead ACLS certification training',
        onboard: 'Excellent onboarding buddy - 92% retention rate with mentees'
      },
      recentAchievements: [
        'Successfully handled 3 critical cases in one shift',
        'Received 12 patient commendations this quarter',
        'Zero errors in 180 consecutive shifts',
        'Helped reduce ER wait times by 18%'
      ],
      tenure: '4 years 3 months',
      certifications: ['RN', 'ACLS', 'PALS', 'TNCC'],
      onboardingSuccess: {
        mentoredEmployees: 8,
        retentionRate: 92,
        avgOnboardingTime: '3.2 weeks',
        satisfaction: 4.8
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Respiratory Therapist',
      avatar: 'MC',
      metrics: {
        performance: 96,
        consistency: 97,
        patientSatisfaction: 4.8,
        teamRating: 4.9,
        attendanceRate: 98,
      },
      strengths: [
        'Advanced ventilator management',
        'Exceptional teaching ability',
        'Process improvement expert',
        'Calm under pressure',
        'Technical expertise'
      ],
      recommendations: {
        recognize: '2 successful protocol improvements implemented',
        promote: 'Consider for RT Supervisor position',
        mentor: 'Perfect for training new RT graduates',
        train: 'Could develop ventilator management course',
        onboard: 'Great for technical onboarding - knows all systems'
      },
      recentAchievements: [
        'Developed new weaning protocol (20% faster)',
        'Trained 15 staff on new equipment',
        'Perfect safety record - 2 years',
        'Created educational video series'
      ],
      tenure: '6 years 1 month',
      certifications: ['RRT', 'NPS', 'ACLS'],
      onboardingSuccess: {
        mentoredEmployees: 15,
        retentionRate: 87,
        avgOnboardingTime: '4.1 weeks',
        satisfaction: 4.7
      }
    },
    {
      id: 3,
      name: 'Amanda Rodriguez',
      role: 'Medical Technologist',
      avatar: 'AR',
      metrics: {
        performance: 94,
        consistency: 98,
        patientSatisfaction: 4.7,
        teamRating: 4.9,
        attendanceRate: 100,
      },
      strengths: [
        'Exceptional accuracy',
        'Strong analytical skills',
        'Quality control expert',
        'Excellent communicator',
        'Detail-oriented'
      ],
      recommendations: {
        recognize: '100% attendance for 18 months straight',
        promote: 'Ready for Lead Tech position',
        mentor: 'Ideal for new lab employees',
        train: 'Could lead quality control training',
        onboard: 'Perfect for explaining lab procedures to new hires'
      },
      recentAchievements: [
        'Zero reporting errors in 500+ tests',
        'Identified equipment calibration issue',
        'Reduced turnaround time by 25%',
        'Trained 6 new techs successfully'
      ],
      tenure: '3 years 8 months',
      certifications: ['MT(ASCP)', 'MLT'],
      onboardingSuccess: {
        mentoredEmployees: 6,
        retentionRate: 100,
        avgOnboardingTime: '2.8 weeks',
        satisfaction: 4.9
      }
    },
  ];

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'recognition',
      priority: 'high',
      employee: 'Jessica Williams',
      message: 'Has maintained 98% performance for 6 consecutive months - time to recognize!',
      action: 'Send Commendation',
      daysAgo: 0
    },
    {
      id: 2,
      type: 'promotion',
      priority: 'high',
      employee: 'Michael Chen',
      message: 'Meets all criteria for RT Supervisor role - consider for upcoming opening',
      action: 'Review for Promotion',
      daysAgo: 2
    },
    {
      id: 3,
      type: 'mentor',
      priority: 'medium',
      employee: 'Jessica Williams',
      message: '3 new Emergency RNs starting Monday - assign as mentor?',
      action: 'Assign Mentorship',
      daysAgo: 1
    },
    {
      id: 4,
      type: 'training',
      priority: 'medium',
      employee: 'Michael Chen',
      message: 'Could lead upcoming ventilator training session (12 staff need certification)',
      action: 'Assign as Trainer',
      daysAgo: 3
    },
    {
      id: 5,
      type: 'onboarding',
      priority: 'high',
      employee: 'Amanda Rodriguez',
      message: '2 new lab techs need onboarding guide - 100% retention rate with previous mentees',
      action: 'Assign as Onboarding Buddy',
      daysAgo: 0
    },
  ]);

  const dismissNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Notifications Section */}
      {showNotifications && notifications.length > 0 && (
        <div className="bg-[rgba(201,168,76,0.06)]  rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-[#C9A84C]" />
            <h3 className="text-xl font-bold text-white">Talent Action Items</h3>
            <span className="px-3 py-1 bg-[rgba(201,168,76,0.06)] rounded-full text-sm font-bold text-[#F0EBE0]">
              {notifications.length} New
            </span>
          </div>

          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="bg-[rgba(201,168,76,0.06)]/50 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {notification.type === 'recognition' && <Award className="w-5 h-5 text-[#C9A84C]" />}
                    {notification.type === 'promotion' && <TrendingUp className="w-5 h-5 text-amber-400" />}
                    {notification.type === 'mentor' && <Users className="w-5 h-5 text-[#9E8F75]" />}
                    {notification.type === 'training' && <BookOpen className="w-5 h-5 text-amber-400" />}
                    {notification.type === 'onboarding' && <Star className="w-5 h-5 text-green-400" />}
                    <div>
                      <p className="text-white font-bold">{notification.employee}</p>
                      <p className="text-sm text-[#9E8F75]">{notification.message}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => dismissNotification(notification.id)}
                    className="text-[#9E8F75] hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    notification.priority === 'high' 
                      ? 'bg-[rgba(201,168,76,0.06)] text-[#F0EBE0]' 
                      : 'bg-[rgba(201,168,76,0.06)] text-[#F0EBE0]'
                  }`}>
                    {notification.priority.toUpperCase()} PRIORITY
                  </span>
                  <div className="flex gap-2">
                    <button className="px-4 py-1 bg-[rgba(201,168,76,0.06)] hover:bg-[rgba(201,168,76,0.06)] text-[#9E8F75] rounded-lg text-sm font-semibold transition-all">
                      {notification.action}
                    </button>
                    <span className="text-xs text-[#9E8F75] self-center">
                      {notification.daysAgo === 0 ? 'Today' : `${notification.daysAgo}d ago`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Top Talent Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {topTalent.map((employee) => (
          <div
            key={employee.id}
            className="lux-card/80  rounded p-6 border-2 border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)] transition-all cursor-pointer"
            onClick={() => setSelectedEmployee(employee)}
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                {employee.avatar}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white">{employee.name}</h4>
                <p className="text-sm text-[#9E8F75]">{employee.role}</p>
                <p className="text-xs text-[#9E8F75]">{employee.tenure}</p>
              </div>
              <Star className="w-6 h-6 text-[#C9A84C] fill-yellow-400" />
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#110F0B]/50 rounded-lg p-3">
                <p className="text-xs text-[#9E8F75]">Performance</p>
                <p className="text-2xl font-bold text-white">{employee.metrics.performance}%</p>
              </div>
              <div className="bg-[#110F0B]/50 rounded-lg p-3">
                <p className="text-xs text-[#9E8F75]">Satisfaction</p>
                <p className="text-2xl font-bold text-white">{employee.metrics.patientSatisfaction}</p>
              </div>
              <div className="bg-[#110F0B]/50 rounded-lg p-3">
                <p className="text-xs text-[#9E8F75]">Team Rating</p>
                <p className="text-2xl font-bold text-white">{employee.metrics.teamRating}</p>
              </div>
              <div className="bg-[#110F0B]/50 rounded-lg p-3">
                <p className="text-xs text-[#9E8F75]">Attendance</p>
                <p className="text-2xl font-bold text-white">{employee.metrics.attendanceRate}%</p>
              </div>
            </div>

            {/* Top Strength */}
            <div className="bg-[rgba(201,168,76,0.04)] rounded-lg p-3 mb-4">
              <p className="text-xs text-[#C9A84C] font-semibold mb-1">TOP STRENGTH</p>
              <p className="text-sm text-white font-bold">{employee.strengths[0]}</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2">
              <button className="px-3 py-2 bg-[rgba(201,168,76,0.06)] hover:bg-[rgba(201,168,76,0.06)] text-[#F0EBE0] rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-1">
                <Award className="w-4 h-4" />
                Recognize
              </button>
              <button className="px-3 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-[#C9A84C] rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4" />
                Promote
              </button>
              <button className="px-3 py-2 bg-[rgba(201,168,76,0.06)] hover:bg-[rgba(201,168,76,0.06)] text-[#9E8F75] rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-1">
                <Users className="w-4 h-4" />
                Mentor
              </button>
              <button className="px-3 py-2 bg-amber-600/20 hover:bg-amber-600/30 text-amber-400 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-1">
                <BookOpen className="w-4 h-4" />
                Train
              </button>
            </div>

            {/* View Details */}
            <button className="w-full mt-3 px-4 py-2 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
              View Full Profile
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Detailed View Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black/70  z-50 flex items-center justify-center p-4">
          <div className="lux-card rounded p-8 max-w-4xl w-full border-2 border-[rgba(201,168,76,0.22)] shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {selectedEmployee.avatar}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{selectedEmployee.name}</h2>
                  <p className="text-lg text-[#9E8F75]">{selectedEmployee.role}</p>
                  <p className="text-sm text-[#9E8F75]">{selectedEmployee.tenure}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedEmployee(null)}
                className="p-2 hover:bg-[rgba(201,168,76,0.04)] rounded-lg transition-all"
              >
                <X className="w-6 h-6 text-[#9E8F75]" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Metrics */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-3">Performance Metrics</h3>
                {Object.entries(selectedEmployee.metrics).map(([key, value]) => (
                  <div key={key} className="bg-[#110F0B]/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm text-[#9E8F75] capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                      <p className="text-xl font-bold text-white">{String(value)}{typeof value === 'number' && value <= 5 ? '' : '%'}</p>
                    </div>
                    <div className="w-full bg-[rgba(201,168,76,0.04)] rounded-full h-2">
                      <div 
                        className="bg-[rgba(201,168,76,0.08)] h-2 rounded-full"
                        style={{ width: `${typeof value === 'number' && value <= 5 ? (value / 5) * 100 : value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendations */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-3">AI Recommendations</h3>
                {Object.entries(selectedEmployee.recommendations).map(([key, value]) => (
                  <div key={key} className="bg-[rgba(201,168,76,0.04)] rounded-lg p-4 border border-amber-500/40/30">
                    <div className="flex items-center gap-2 mb-2">
                      {key === 'recognize' && <Award className="w-5 h-5 text-[#C9A84C]" />}
                      {key === 'promote' && <TrendingUp className="w-5 h-5 text-amber-400" />}
                      {key === 'mentor' && <Users className="w-5 h-5 text-[#9E8F75]" />}
                      {key === 'train' && <BookOpen className="w-5 h-5 text-amber-400" />}
                      {key === 'onboard' && <Star className="w-5 h-5 text-green-400" />}
                      <p className="text-sm font-bold text-white uppercase">{key}</p>
                    </div>
                    <p className="text-sm text-[#9E8F75]">{value as string}</p>
                  </div>
                ))}
              </div>

              {/* Strengths */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Core Strengths</h3>
                <div className="space-y-2">
                  {selectedEmployee.strengths.map((strength: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 bg-[#110F0B]/50 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <p className="text-white">{strength}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Recent Achievements</h3>
                <div className="space-y-2">
                  {selectedEmployee.recentAchievements.map((achievement: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 bg-[#110F0B]/50 rounded-lg p-3">
                      <Star className="w-5 h-5 text-[#C9A84C]" />
                      <p className="text-white text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Onboarding Success */}
              <div className="md:col-span-2 bg-[rgba(201,168,76,0.06)] rounded-lg p-6 border-2 border-[rgba(201,168,76,0.22)]">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-400" />
                  Onboarding & Mentorship Track Record
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">{selectedEmployee.onboardingSuccess.mentoredEmployees}</p>
                    <p className="text-sm text-[#9E8F75]">Employees Mentored</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">{selectedEmployee.onboardingSuccess.retentionRate}%</p>
                    <p className="text-sm text-[#9E8F75]">Retention Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#9E8F75]">{selectedEmployee.onboardingSuccess.avgOnboardingTime}</p>
                    <p className="text-sm text-[#9E8F75]">Avg Onboarding Time</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-amber-400">{selectedEmployee.onboardingSuccess.satisfaction}</p>
                    <p className="text-sm text-[#9E8F75]">Mentee Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
              <button className="px-4 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2">
                <Award className="w-5 h-5" />
                Send Commendation
              </button>
              <button className="px-4 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Consider Promotion
              </button>
              <button className="px-4 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Assign Mentee
              </button>
              <button className="px-4 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Assign Training
              </button>
              <button className="px-4 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


