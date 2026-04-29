'use client';

import { useState } from 'react';
import { Star, Heart, Award, ThumbsUp, CheckCircle, Clock, AlertCircle, Gift, Sparkles } from 'lucide-react';

interface CustomerKudosSystemProps {
  industry?: string;
}

export default function CustomerKudosSystem({ industry = 'healthcare' }: CustomerKudosSystemProps) {
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'standalone'>('pending');

  // Pending customer kudos waiting for approval
  const pendingKudos = [
    {
      id: 1,
      employeeName: 'Jessica Williams',
      employeeId: 'EMP-1043',
      department: 'Emergency',
      customerName: 'Sarah Johnson',
      feedbackType: 'Patient Survey',
      date: '2026-01-11',
      hoursAgo: 14,
      rating: 5,
      xpAwarded: 50,
      comment: 'Jessica went above and beyond during my care. She was compassionate, thorough, and made me feel safe during a scary time. She deserves recognition!',
      specificActions: [
        'Stayed past shift to ensure smooth transition',
        'Explained all procedures clearly',
        'Provided emotional support to family',
      ],
      recommendedBy: 'Patient',
      status: 'pending',
      priority: 'high',
    },
    {
      id: 2,
      employeeName: 'Michael Chen',
      employeeId: 'EMP-2156',
      department: 'Respiratory Therapy',
      customerName: 'Robert Martinez',
      feedbackType: 'Exit Interview',
      date: '2026-01-12',
      hoursAgo: 3,
      rating: 5,
      xpAwarded: 40,
      comment: 'Michael was incredibly patient and knowledgeable. He took extra time to teach me breathing techniques and made sure I felt confident before discharge.',
      specificActions: [
        'Extra patient education session',
        'Created custom exercise plan',
        'Follow-up call scheduled',
      ],
      recommendedBy: 'Patient',
      status: 'pending',
      priority: 'medium',
    },
    {
      id: 3,
      employeeName: 'Amanda Rodriguez',
      employeeId: 'EMP-3421',
      department: 'Laboratory',
      customerName: 'Dr. Lisa Anderson',
      feedbackType: 'Physician Feedback',
      date: '2026-01-12',
      hoursAgo: 1,
      rating: 5,
      xpAwarded: 30,
      comment: 'Amanda caught a critical lab error that could have resulted in wrong treatment. Her attention to detail potentially saved a life.',
      specificActions: [
        'Identified specimen mislabeling',
        'Immediately notified physician',
        'Prevented medication error',
      ],
      recommendedBy: 'Physician',
      status: 'pending',
      priority: 'high',
    },
  ];

  // Already approved kudos
  const approvedKudos = [
    {
      id: 4,
      employeeName: 'David Park',
      department: 'Surgical Services',
      xpAwarded: 45,
      approvedBy: 'Sarah Thompson (Manager)',
      approvedDate: '2026-01-11',
      comment: 'Exceptional care during pre-op preparation',
    },
    {
      id: 5,
      employeeName: 'Emily Foster',
      department: 'Medical Assistant',
      xpAwarded: 35,
      approvedBy: 'Sarah Thompson (Manager)',
      approvedDate: '2026-01-10',
      comment: 'Made anxious patient feel comfortable and safe',
    },
  ];

  // XP ranges based on feedback type
  const xpRanges = {
    'Patient Survey': { min: 20, max: 50, suggested: 30 },
    'Exit Interview': { min: 30, max: 60, suggested: 40 },
    'Physician Feedback': { min: 25, max: 75, suggested: 50 },
    'Family Feedback': { min: 15, max: 40, suggested: 25 },
    'Manager Recommendation': { min: 40, max: 100, suggested: 60 },
    'Peer Recognition': { min: 10, max: 30, suggested: 20 },
  };

  const industryTerms = {
    healthcare: {
      customer: 'Patient',
      feedback: 'Patient Survey',
      exit: 'Discharge Survey',
    },
    restaurant: {
      customer: 'Guest',
      feedback: 'Guest Feedback',
      exit: 'Visit Survey',
    },
    retail: {
      customer: 'Customer',
      feedback: 'Customer Review',
      exit: 'Shopping Experience',
    },
    construction: {
      customer: 'Client',
      feedback: 'Client Feedback',
      exit: 'Project Review',
    },
  };

  const handleApprove = (kudosId: number) => {
    console.log(`Approved kudos ${kudosId} - XP awarded!`);
    // In production: API call to approve and award XP
  };

  const handleReject = (kudosId: number) => {
    console.log(`Rejected kudos ${kudosId}`);
    // In production: API call to reject with reason
  };

  const handleModifyXP = (kudosId: number, newXP: number) => {
    console.log(`Modified kudos ${kudosId} XP to ${newXP}`);
    // In production: Update XP amount before approval
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[rgba(201,168,76,0.06)]  rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
        <div className="flex items-center gap-3 mb-3">
          <Award className="w-8 h-8 text-[#C9A84C]" />
          <div>
            <h2 className="text-2xl font-bold text-white">Customer Recognition System</h2>
            <p className="text-[#F0EBE0]">Customers can award XP to employees who go above and beyond!</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-3 text-center border border-[rgba(201,168,76,0.22)]">
            <p className="text-3xl font-bold text-white">{pendingKudos.length}</p>
            <p className="text-sm text-[#F0EBE0]">Pending Approval</p>
          </div>
          <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-3 text-center border border-[rgba(201,168,76,0.22)]">
            <p className="text-3xl font-bold text-white">{approvedKudos.length}</p>
            <p className="text-sm text-[#F0EBE0]">Approved Today</p>
          </div>
          <div className="bg-amber-500/20 rounded-lg p-3 text-center border border-amber-500/40/30">
            <p className="text-3xl font-bold text-white">1,247</p>
            <p className="text-sm text-[#F0EBE0]/70">Total This Month</p>
          </div>
          <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-3 text-center border border-[rgba(201,168,76,0.22)]">
            <p className="text-3xl font-bold text-white">37,890</p>
            <p className="text-sm text-[#9E8F75]">XP Awarded</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('pending')}
          className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
            activeTab === 'pending'
              ? 'bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white'
              : 'bg-[rgba(201,168,76,0.04)] text-[#9E8F75] hover:bg-[#110F0B]'
          }`}
        >
          <Clock className="w-5 h-5" />
          Pending Approval ({pendingKudos.length})
        </button>
        <button
          onClick={() => setActiveTab('approved')}
          className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
            activeTab === 'approved'
              ? 'bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white'
              : 'bg-[rgba(201,168,76,0.04)] text-[#9E8F75] hover:bg-[#110F0B]'
          }`}
        >
          <CheckCircle className="w-5 h-5" />
          Approved
        </button>
        <button
          onClick={() => setActiveTab('standalone')}
          className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
            activeTab === 'standalone'
              ? 'bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white'
              : 'bg-[rgba(201,168,76,0.04)] text-[#9E8F75] hover:bg-[#110F0B]'
          }`}
        >
          <Sparkles className="w-5 h-5" />
          Give Recognition
        </button>
      </div>

      {/* Pending Tab */}
      {activeTab === 'pending' && (
        <div className="space-y-4">
          {pendingKudos.map(kudos => (
            <div
              key={kudos.id}
              className={`lux-card/80  rounded p-6 border-2 ${
                kudos.priority === 'high' 
                  ? 'border-[rgba(201,168,76,0.22)]' 
                  : 'border-[rgba(201,168,76,0.22)]'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-16 h-16 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {kudos.employeeName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white">{kudos.employeeName}</h3>
                      {kudos.priority === 'high' && (
                        <span className="px-2 py-1 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded text-xs font-bold text-[#F0EBE0]">
                          HIGH IMPACT
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#9E8F75]">{kudos.department} • {kudos.employeeId}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-1 bg-amber-500/20 rounded text-xs font-semibold text-[#C9A84C]">
                        {kudos.feedbackType}
                      </span>
                      <span className="text-xs text-[#9E8F75]">{kudos.hoursAgo}h ago</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(kudos.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#C9A84C] fill-yellow-400" />
                    ))}
                  </div>
                  <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-3 border border-[rgba(201,168,76,0.22)]">
                    <p className="text-3xl font-bold text-[#F0EBE0]">{kudos.xpAwarded}</p>
                    <p className="text-xs text-[#F0EBE0]">XP to Award</p>
                  </div>
                </div>
              </div>

              {/* Customer Feedback */}
              <div className="bg-[#110F0B]/50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-[#9E8F75]" />
                  <p className="text-sm font-semibold text-[#9E8F75]">From: {kudos.customerName} ({kudos.recommendedBy})</p>
                </div>
                <p className="text-white italic mb-3">&ldquo;{kudos.comment}&rdquo;</p>
                
                {/* Specific Actions */}
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-[#9E8F75] mb-2">Specific Actions Recognized:</p>
                  {kudos.specificActions.map((action, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <p className="text-sm text-[#9E8F75]">{action}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* XP Adjustment */}
              <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-4 mb-4 border border-[rgba(201,168,76,0.22)]">
                <p className="text-sm font-semibold text-[#9E8F75] mb-2">Adjust XP Award (Optional)</p>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={xpRanges[kudos.feedbackType as keyof typeof xpRanges]?.min || 10}
                    max={xpRanges[kudos.feedbackType as keyof typeof xpRanges]?.max || 100}
                    defaultValue={kudos.xpAwarded}
                    onChange={(e) => handleModifyXP(kudos.id, parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-white font-bold">{kudos.xpAwarded} XP</span>
                </div>
                <p className="text-xs text-[#9E8F75] mt-1">
                  Suggested range: {xpRanges[kudos.feedbackType as keyof typeof xpRanges]?.min}-
                  {xpRanges[kudos.feedbackType as keyof typeof xpRanges]?.max} XP
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleApprove(kudos.id)}
                  className="flex-1 px-6 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Approve & Award XP
                </button>
                <button
                  onClick={() => handleReject(kudos.id)}
                  className="px-6 py-3 bg-[rgba(201,168,76,0.06)] hover:bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded-lg font-semibold text-[#F0EBE0] transition-all"
                >
                  Reject
                </button>
              </div>

              {/* Anti-Cheating Notice */}
              <div className="mt-3 flex items-start gap-2 text-xs text-[#9E8F75]">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>All customer kudos require manager approval to prevent gaming the system. IP and timestamp logged.</p>
              </div>
            </div>
          ))}

          {pendingKudos.length === 0 && (
            <div className="bg-[rgba(201,168,76,0.06)]/50 rounded p-12 text-center border-2 border-[rgba(201,168,76,0.22)]">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">All Caught Up!</h3>
              <p className="text-[#9E8F75]">No pending customer recognition to review.</p>
            </div>
          )}
        </div>
      )}

      {/* Approved Tab */}
      {activeTab === 'approved' && (
        <div className="space-y-3">
          {approvedKudos.map(kudos => (
            <div
              key={kudos.id}
              className="bg-[rgba(201,168,76,0.06)]  rounded p-4 border-2 border-[rgba(201,168,76,0.22)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="text-lg font-bold text-white">{kudos.employeeName}</p>
                    <p className="text-sm text-[#9E8F75]">{kudos.department}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-400">+{kudos.xpAwarded} XP</p>
                  <p className="text-xs text-[#9E8F75]">Approved by {kudos.approvedBy}</p>
                  <p className="text-xs text-[#9E8F75]">{kudos.approvedDate}</p>
                </div>
              </div>
              <p className="text-sm text-[#9E8F75] mt-2 italic">&ldquo;{kudos.comment}&rdquo;</p>
            </div>
          ))}
        </div>
      )}

      {/* Standalone Recognition Form */}
      {activeTab === 'standalone' && (
        <div className="bg-[rgba(201,168,76,0.04)]  rounded p-6 border-2 border-amber-500/40/30">
          <h3 className="text-2xl font-bold text-white mb-4">Give Recognition</h3>
          <p className="text-[#F0EBE0]/70 mb-6">Managers and admins can give instant recognition, or recommend employees for customer feedback.</p>
          
          <div className="space-y-4">
            <div>
              <label className="text-white font-semibold mb-2 block">Employee</label>
              <select className="w-full bg-[rgba(201,168,76,0.04)] text-white rounded-lg px-4 py-3 border border-[rgba(201,168,76,0.22)]">
                <option>Select employee...</option>
                <option>Jessica Williams - Emergency</option>
                <option>Michael Chen - Respiratory</option>
                <option>Amanda Rodriguez - Lab</option>
              </select>
            </div>

            <div>
              <label className="text-white font-semibold mb-2 block">Recognition Type</label>
              <select className="w-full bg-[rgba(201,168,76,0.04)] text-white rounded-lg px-4 py-3 border border-[rgba(201,168,76,0.22)]">
                <option>Manager Recommendation</option>
                <option>Peer Recognition</option>
                <option>Customer Feedback (Enter on their behalf)</option>
              </select>
            </div>

            <div>
              <label className="text-white font-semibold mb-2 block">What did they do?</label>
              <textarea
                className="w-full bg-[rgba(201,168,76,0.04)] text-white rounded-lg px-4 py-3 border border-[rgba(201,168,76,0.22)]"
                rows={4}
                placeholder="Describe the specific actions that deserve recognition..."
              ></textarea>
            </div>

            <div>
              <label className="text-white font-semibold mb-2 block">XP to Award</label>
              <input
                type="number"
                min="10"
                max="100"
                defaultValue="50"
                className="w-full bg-[rgba(201,168,76,0.04)] text-white rounded-lg px-4 py-3 border border-[rgba(201,168,76,0.22)]"
              />
              <p className="text-xs text-[#9E8F75] mt-1">Range: 10-100 XP based on recognition type</p>
            </div>

            <button className="w-full px-6 py-4 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg font-bold text-white text-lg transition-all">
              Submit Recognition
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


