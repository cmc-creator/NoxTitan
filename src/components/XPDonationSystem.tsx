'use client';

import { useState } from 'react';
import { Gift, Heart, Users, TrendingUp, Award, AlertCircle, CheckCircle, DollarSign, Lock } from 'lucide-react';

interface XPDonationSystemProps {
  userId: string;
  userRole: 'employee' | 'manager' | 'admin';
}

export default function XPDonationSystem({ userId, userRole }: XPDonationSystemProps) {
  const [activeTab, setActiveTab] = useState<'give' | 'received' | 'limits'>('give');

  // Current user's donation stats
  const userDonationStats = {
    xpBalance: 847, // User's current XP
    yearlyGiven: 320, // XP donated this year
    yearlyLimit: 500, // Annual donation cap
    yearlyReceived: 180, // XP received as gifts
    lifetimeGiven: 1247,
    lifetimeReceived: 645,
    canDonate: true,
    remainingThisYear: 180, // 500 - 320
  };

  // Recent donations sent
  const recentDonations = [
    {
      id: 1,
      recipient: 'Michael Chen',
      amount: 50,
      reason: 'Thanks for covering my shift!',
      date: '2026-01-10',
      status: 'completed',
    },
    {
      id: 2,
      recipient: 'Amanda Rodriguez',
      amount: 75,
      reason: 'Amazing teamwork on that difficult case',
      date: '2026-01-08',
      status: 'completed',
    },
    {
      id: 3,
      recipient: 'Team - Emergency Dept',
      amount: 100,
      reason: 'Great job during that crazy weekend!',
      date: '2026-01-05',
      status: 'completed',
    },
  ];

  // XP received from others
  const receivedGifts = [
    {
      id: 1,
      sender: 'Sarah Thompson (Manager)',
      amount: 100,
      reason: 'Excellent work on Q4 goals - you crushed it!',
      date: '2026-01-11',
    },
    {
      id: 2,
      sender: 'David Park',
      amount: 50,
      reason: 'Thanks for training me on that new equipment!',
      date: '2026-01-09',
    },
    {
      id: 3,
      sender: 'Jessica Williams',
      amount: 30,
      reason: 'You\'re an amazing teammate 💙',
      date: '2026-01-06',
    },
  ];

  // Donation limits by role
  const roleLimits = {
    employee: {
      yearlyMax: 500,
      singleMax: 100,
      description: 'Employees can donate up to 500 XP per year, max 100 per gift',
    },
    manager: {
      yearlyMax: 1000,
      singleMax: 200,
      description: 'Managers can donate up to 1000 XP per year, max 200 per gift',
    },
    admin: {
      yearlyMax: 2000,
      singleMax: 500,
      description: 'Admins can donate up to 2000 XP per year, max 500 per gift',
    },
  };

  const currentLimit = roleLimits[userRole];

  // Suggested donation amounts
  const quickAmounts = [10, 25, 50, 75, 100];

  const [selectedAmount, setSelectedAmount] = useState(50);
  const [selectedRecipient, setSelectedRecipient] = useState('');
  const [donationReason, setDonationReason] = useState('');

  const handleDonate = () => {
    if (selectedAmount > userDonationStats.remainingThisYear) {
      alert('This would exceed your annual donation limit!');
      return;
    }
    if (selectedAmount > userDonationStats.xpBalance) {
      alert('Insufficient XP balance!');
      return;
    }
    if (selectedAmount > currentLimit.singleMax) {
      alert(`Maximum ${currentLimit.singleMax} XP per gift!`);
      return;
    }
    
    console.log('Donating', selectedAmount, 'XP to', selectedRecipient, 'Reason:', donationReason);
    // In production: API call to process donation
  };

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="bg-[rgba(201,168,76,0.06)]  rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
        <div className="flex items-center gap-3 mb-4">
          <Gift className="w-8 h-8 text-[#9E8F75]" />
          <div>
            <h2 className="text-2xl font-bold text-white">XP Donation System</h2>
            <p className="text-[#9E8F75]">Share your success with teammates who inspire you!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-4 text-center border border-[rgba(201,168,76,0.22)]">
            <DollarSign className="w-6 h-6 text-[#9E8F75] mx-auto mb-1" />
            <p className="text-3xl font-bold text-white">{userDonationStats.xpBalance}</p>
            <p className="text-sm text-[#9E8F75]">Your XP Balance</p>
          </div>
          <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-4 text-center border border-[rgba(201,168,76,0.22)]">
            <Heart className="w-6 h-6 text-green-400 mx-auto mb-1" />
            <p className="text-3xl font-bold text-white">{userDonationStats.remainingThisYear}</p>
            <p className="text-sm text-[#F0EBE0]">Can Donate This Year</p>
          </div>
          <div className="bg-amber-500/20 rounded-lg p-4 text-center border border-amber-500/40/30">
            <TrendingUp className="w-6 h-6 text-amber-400 mx-auto mb-1" />
            <p className="text-3xl font-bold text-white">{userDonationStats.yearlyGiven}</p>
            <p className="text-sm text-[#F0EBE0]/70">Donated This Year</p>
          </div>
          <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-4 text-center border border-[rgba(201,168,76,0.22)]">
            <Award className="w-6 h-6 text-[#C9A84C] mx-auto mb-1" />
            <p className="text-3xl font-bold text-white">{userDonationStats.yearlyReceived}</p>
            <p className="text-sm text-[#F0EBE0]">Received This Year</p>
          </div>
        </div>

        {/* Progress Bar for Annual Limit */}
        <div className="mt-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-white font-semibold">Annual Donation Usage</span>
            <span className="text-sm text-white">
              {userDonationStats.yearlyGiven} / {userDonationStats.yearlyLimit} XP
            </span>
          </div>
          <div className="w-full bg-[rgba(201,168,76,0.04)] rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all ${
                (userDonationStats.yearlyGiven / userDonationStats.yearlyLimit) > 0.8
                  ? 'bg-[rgba(201,168,76,0.08)]'
                  : 'bg-[rgba(201,168,76,0.08)]'
              }`}
              style={{ width: `${(userDonationStats.yearlyGiven / userDonationStats.yearlyLimit) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('give')}
          className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
            activeTab === 'give'
              ? 'bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white'
              : 'bg-[rgba(201,168,76,0.04)] text-[#9E8F75] hover:bg-[#110F0B]'
          }`}
        >
          <Gift className="w-5 h-5" />
          Give XP
        </button>
        <button
          onClick={() => setActiveTab('received')}
          className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
            activeTab === 'received'
              ? 'bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white'
              : 'bg-[rgba(201,168,76,0.04)] text-[#9E8F75] hover:bg-[#110F0B]'
          }`}
        >
          <Heart className="w-5 h-5" />
          Received
        </button>
        <button
          onClick={() => setActiveTab('limits')}
          className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
            activeTab === 'limits'
              ? 'bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white'
              : 'bg-[rgba(201,168,76,0.04)] text-[#9E8F75] hover:bg-[#110F0B]'
          }`}
        >
          <AlertCircle className="w-5 h-5" />
          Limits & Rules
        </button>
      </div>

      {/* Give XP Tab */}
      {activeTab === 'give' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Donation Form */}
          <div className="lux-card/80  rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Gift className="w-6 h-6 text-[#9E8F75]" />
              Donate XP to Someone Special
            </h3>

            <div className="space-y-4">
              {/* Recipient Selection */}
              <div>
                <label className="text-white font-semibold mb-2 block">Who deserves recognition?</label>
                <select
                  value={selectedRecipient}
                  onChange={(e) => setSelectedRecipient(e.target.value)}
                  className="w-full bg-[rgba(201,168,76,0.04)] text-white rounded-lg px-4 py-3 border border-[rgba(201,168,76,0.22)]"
                >
                  <option value="">Select a teammate...</option>
                  <option value="jessica">Jessica Williams - Emergency</option>
                  <option value="michael">Michael Chen - Respiratory</option>
                  <option value="amanda">Amanda Rodriguez - Lab</option>
                  <option value="david">David Park - Surgical</option>
                  <option value="team-emergency">🎯 Entire Emergency Team</option>
                  <option value="team-icu">🎯 Entire ICU Team</option>
                </select>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="text-white font-semibold mb-2 block">How much XP?</label>
                <div className="grid grid-cols-5 gap-2 mb-3">
                  {quickAmounts.map(amount => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`px-3 py-2 rounded-lg font-bold transition-all ${
                        selectedAmount === amount
                          ? 'bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white'
                          : 'bg-[rgba(201,168,76,0.04)] text-[#9E8F75] hover:bg-[rgba(201,168,76,0.08)]'
                      }`}
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <input
                  type="range"
                  min="10"
                  max={Math.min(currentLimit.singleMax, userDonationStats.remainingThisYear)}
                  value={selectedAmount}
                  onChange={(e) => setSelectedAmount(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-[#9E8F75]">10 XP</span>
                  <span className="text-lg font-bold text-[#9E8F75]">{selectedAmount} XP</span>
                  <span className="text-sm text-[#9E8F75]">{currentLimit.singleMax} XP max</span>
                </div>
              </div>

              {/* Reason */}
              <div>
                <label className="text-white font-semibold mb-2 block">Why do they deserve this?</label>
                <textarea
                  value={donationReason}
                  onChange={(e) => setDonationReason(e.target.value)}
                  placeholder="Share why you're recognizing them... (optional but encouraged!)"
                  className="w-full bg-[rgba(201,168,76,0.04)] text-white rounded-lg px-4 py-3 border border-[rgba(201,168,76,0.22)]"
                  rows={3}
                ></textarea>
              </div>

              {/* Warnings */}
              {selectedAmount > userDonationStats.remainingThisYear && (
                <div className="bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded-lg p-3 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#F0EBE0]">
                    This exceeds your annual limit! You can only donate {userDonationStats.remainingThisYear} more XP this year.
                  </p>
                </div>
              )}

              {selectedAmount > userDonationStats.xpBalance && (
                <div className="bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded-lg p-3 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-[#9E8F75] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#9E8F75]">
                    Insufficient XP balance! You only have {userDonationStats.xpBalance} XP available.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleDonate}
                disabled={!selectedRecipient || selectedAmount > userDonationStats.remainingThisYear || selectedAmount > userDonationStats.xpBalance}
                className="w-full px-6 py-4 bg-[rgba(201,168,76,0.08)] disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed rounded-lg font-bold text-white text-lg transition-all flex items-center justify-center gap-2"
              >
                <Gift className="w-6 h-6" />
                Donate {selectedAmount} XP
              </button>
            </div>
          </div>

          {/* Recent Donations */}
          <div className="lux-card/80  rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
            <h3 className="text-xl font-bold text-white mb-4">Recent Donations</h3>
            <div className="space-y-3">
              {recentDonations.map(donation => (
                <div key={donation.id} className="bg-[#110F0B]/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#9E8F75]" />
                      <p className="font-bold text-white">{donation.recipient}</p>
                    </div>
                    <p className="text-xl font-bold text-[#9E8F75]">-{donation.amount} XP</p>
                  </div>
                  <p className="text-sm text-[#9E8F75] italic mb-1">&ldquo;{donation.reason}&rdquo;</p>
                  <p className="text-xs text-[#9E8F75]">{donation.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Received Tab */}
      {activeTab === 'received' && (
        <div className="space-y-4">
          {receivedGifts.map(gift => (
            <div
              key={gift.id}
              className="bg-[rgba(201,168,76,0.06)]  rounded p-6 border-2 border-[rgba(201,168,76,0.22)]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-[#9E8F75] fill-pink-400" />
                  <div>
                    <p className="text-lg font-bold text-white">{gift.sender}</p>
                    <p className="text-sm text-[#9E8F75]">{gift.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-green-400">+{gift.amount} XP</p>
                  <p className="text-xs text-[#F0EBE0]">Gifted</p>
                </div>
              </div>
              <div className="bg-[#110F0B]/50 rounded-lg p-3">
                <p className="text-white italic">&ldquo;{gift.reason}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Limits Tab */}
      {activeTab === 'limits' && (
        <div className="space-y-6">
          {/* Your Limits */}
          <div className="bg-[rgba(201,168,76,0.04)]  rounded p-6 border-2 border-amber-500/40/30">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-amber-400" />
              Your Donation Limits ({userRole.charAt(0).toUpperCase() + userRole.slice(1)})
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-amber-500/20 rounded-lg p-6 text-center border border-amber-500/40/30">
                <p className="text-5xl font-bold text-white mb-2">{currentLimit.yearlyMax}</p>
                <p className="text-[#F0EBE0]/70 font-semibold">Annual Donation Limit</p>
                <p className="text-xs text-[#9E8F75] mt-2">Resets January 1st each year</p>
              </div>
              <div className="bg-[rgba(201,168,76,0.06)] rounded-lg p-6 text-center border border-[rgba(201,168,76,0.22)]">
                <p className="text-5xl font-bold text-white mb-2">{currentLimit.singleMax}</p>
                <p className="text-[#9E8F75] font-semibold">Max Per Single Gift</p>
                <p className="text-xs text-[#9E8F75] mt-2">Per transaction limit</p>
              </div>
            </div>

            <div className="bg-[#110F0B]/50 rounded-lg p-4">
              <p className="text-[#9E8F75]">{currentLimit.description}</p>
            </div>
          </div>

          {/* Rules & Guidelines */}
          <div className="bg-[rgba(201,168,76,0.06)]  rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
            <h3 className="text-xl font-bold text-white mb-4">Donation Rules & Guidelines</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Annual Cap Prevents Gaming</p>
                  <p className="text-sm text-[#9E8F75]">Limited yearly donations prevent XP inflation and maintain system integrity</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Can't Exceed Your Balance</p>
                  <p className="text-sm text-[#9E8F75]">You can only donate XP you've actually earned through work</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">All Donations Are Logged</p>
                  <p className="text-sm text-[#9E8F75]">Timestamp, IP, and reason recorded to prevent abuse</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Team Donations Count as Individual</p>
                  <p className="text-sm text-[#9E8F75]">Donating to a team splits XP among members, counts toward your limit</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Higher Roles = Higher Limits</p>
                  <p className="text-sm text-[#9E8F75]">Managers (1000/year) and Admins (2000/year) can give more than employees (500/year)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">No Refunds or Reversals</p>
                  <p className="text-sm text-[#9E8F75]">Once donated, XP cannot be returned. Double-check before sending!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why These Limits? */}
          <div className="lux-card/80  rounded p-6 border-2 border-[rgba(201,168,76,0.22)]">
            <h3 className="text-xl font-bold text-white mb-4">Why Do We Have Donation Limits?</h3>
            <div className="space-y-3 text-[#9E8F75]">
              <p>💡 <strong>Prevents System Gaming:</strong> Without limits, users could trade XP to artificially boost rankings.</p>
              <p>💡 <strong>Maintains XP Value:</strong> Scarcity keeps XP meaningful and rewards actually valuable.</p>
              <p>💡 <strong>Encourages Earning:</strong> Users should earn XP through work, not just receive gifts.</p>
              <p>💡 <strong>Fair Competition:</strong> Leaderboards stay fair when users can't farm XP through donations.</p>
              <p>💡 <strong>Thoughtful Recognition:</strong> Limited donations mean each gift is more meaningful and intentional.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


