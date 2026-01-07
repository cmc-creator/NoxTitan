'use client';

import { useState } from 'react';
import { Megaphone, Bell, AlertCircle, TrendingUp, Gift, FileText, Calendar, Users, CheckCircle, Star, Award, MessageSquare, ThumbsUp, Share2, Pin, Filter, Search, Plus, Edit, Trash2 } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

interface Announcement {
  id: string;
  title: string;
  content: string;
  category: 'urgent' | 'general' | 'celebration' | 'policy' | 'event' | 'benefit';
  priority: 'high' | 'medium' | 'low';
  author: string;
  authorRole: string;
  datePosted: string;
  expiresDate?: string;
  isPinned: boolean;
  readBy: string[];
  likes: number;
  comments: number;
  attachments?: { name: string; type: string; size: string }[];
  targetAudience: 'all' | 'managers' | 'department';
}

export default function AnnouncementsPage() {
  const { user } = useAuth();
  const [activeFilter, setActiveFilter] = useState<'all' | 'urgent' | 'general' | 'celebration' | 'policy' | 'event' | 'benefit'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewAnnouncement, setShowNewAnnouncement] = useState(false);

  const announcements: Announcement[] = [
    {
      id: '1',
      title: '🚨 CRITICAL: Nurse-to-Patient Ratio Compliance Update',
      content: 'Effective January 15, 2026, California is implementing enhanced monitoring and real-time reporting for nurse-to-patient ratios. All charge nurses must complete training on the new state portal by January 10th. Violations now carry $25,000/day penalties. Please review the attached compliance guide immediately.',
      category: 'urgent',
      priority: 'high',
      author: 'Sarah Johnson',
      authorRole: 'Chief Nursing Officer',
      datePosted: '2026-01-01',
      isPinned: true,
      readBy: ['user1', 'user2'],
      likes: 12,
      comments: 8,
      attachments: [
        { name: 'CA_Ratio_Compliance_Guide.pdf', type: 'PDF', size: '2.3 MB' }
      ],
      targetAudience: 'all'
    },
    {
      id: '2',
      title: '🎉 Record-Breaking Patient Satisfaction Scores!',
      content: 'Incredible news team! Our Q4 2025 patient satisfaction scores hit an all-time high of 96.8% - up 4 points from Q3! Special recognition to the night shift nursing team who received perfect scores for three months straight. Thank you for your dedication to exceptional patient care. Celebration lunch scheduled for January 15th in the staff lounge!',
      category: 'celebration',
      priority: 'medium',
      author: 'Michael Chen',
      authorRole: 'CEO',
      datePosted: '2025-12-30',
      isPinned: true,
      readBy: ['user1'],
      likes: 45,
      comments: 18,
      targetAudience: 'all'
    },
    {
      id: '3',
      title: '📋 Updated PTO Policy - Effective February 1st',
      content: 'We are pleased to announce enhancements to our PTO policy. Starting February 1, 2026, all full-time employees will accrue 6.67 hours per pay period (up from 5.33), and the maximum accrual balance increases to 240 hours. Unused PTO over 80 hours will now roll over annually. Please review the full policy document attached and direct questions to HR.',
      category: 'policy',
      priority: 'high',
      author: 'Jennifer Martinez',
      authorRole: 'HR Director',
      datePosted: '2025-12-28',
      expiresDate: '2026-02-01',
      isPinned: false,
      readBy: [],
      likes: 23,
      comments: 12,
      attachments: [
        { name: 'PTO_Policy_2026.pdf', type: 'PDF', size: '1.8 MB' }
      ],
      targetAudience: 'all'
    },
    {
      id: '4',
      title: '💰 Open Enrollment Begins January 15th',
      content: 'Benefits open enrollment for 2026 begins January 15th and runs through January 31st. We have exciting updates this year including enhanced dental coverage, expanded mental health benefits, and a new FSA option. Virtual information sessions will be held on 1/10, 1/17, and 1/24. All enrolled benefits will be effective March 1, 2026.',
      category: 'benefit',
      priority: 'high',
      author: 'Jennifer Martinez',
      authorRole: 'HR Director',
      datePosted: '2025-12-27',
      expiresDate: '2026-01-31',
      isPinned: true,
      readBy: ['user1'],
      likes: 31,
      comments: 24,
      targetAudience: 'all'
    },
    {
      id: '5',
      title: '📅 Mandatory Compliance Training - All Staff',
      content: 'All employees must complete the 2026 Annual Compliance Training by January 31st. Topics include HIPAA updates, workplace safety, anti-harassment, and infection control. The training takes approximately 2 hours and can be completed during scheduled work time. Managers will ensure all direct reports complete this requirement.',
      category: 'policy',
      priority: 'high',
      author: 'David Thompson',
      authorRole: 'Compliance Officer',
      datePosted: '2025-12-26',
      expiresDate: '2026-01-31',
      isPinned: false,
      readBy: [],
      likes: 8,
      comments: 5,
      targetAudience: 'all'
    },
    {
      id: '6',
      title: '🎊 Employee of the Quarter - Maria Rodriguez!',
      content: 'Congratulations to Maria Rodriguez, RN, for being named Q4 2025 Employee of the Quarter! Maria consistently goes above and beyond for her patients and colleagues. She mentored 3 new nurses, led the hand hygiene improvement initiative that achieved 98% compliance, and received 15 patient commendations. Thank you Maria for exemplifying our values every day! $500 bonus and reserved parking for 3 months.',
      category: 'celebration',
      priority: 'medium',
      author: 'Michael Chen',
      authorRole: 'CEO',
      datePosted: '2025-12-23',
      isPinned: false,
      readBy: ['user1', 'user2'],
      likes: 67,
      comments: 34,
      targetAudience: 'all'
    },
    {
      id: '7',
      title: '📢 New Employee Referral Bonus Program',
      content: 'Help us grow our amazing team! We are launching an enhanced referral bonus program. Refer a candidate who gets hired and you will receive $1,500 for RN positions, $1,000 for LPNs/Therapists, and $500 for support staff. Bonus paid after the new hire completes 90 days. Refer unlimited candidates - no cap!',
      category: 'general',
      priority: 'medium',
      author: 'Jennifer Martinez',
      authorRole: 'HR Director',
      datePosted: '2025-12-20',
      isPinned: false,
      readBy: [],
      likes: 19,
      comments: 7,
      targetAudience: 'all'
    },
    {
      id: '8',
      title: '🏥 Facility Renovation Update - West Wing',
      content: 'The west wing renovation project is ahead of schedule! New patient rooms will feature state-of-the-art medical equipment, enhanced infection control features, and improved nurse stations. Phase 1 completion is now projected for February 15th (two weeks early). Minor construction noise may occur 7am-5pm. Thank you for your patience during this exciting upgrade.',
      category: 'general',
      priority: 'low',
      author: 'Robert Kim',
      authorRole: 'Facilities Director',
      datePosted: '2025-12-18',
      isPinned: false,
      readBy: ['user1'],
      likes: 14,
      comments: 3,
      targetAudience: 'all'
    },
    {
      id: '9',
      title: '🎄 Holiday Party Photos & Thank You!',
      content: 'Thank you to everyone who attended our annual holiday party! It was wonderful celebrating together. Photos from the event are now available on the staff portal. Special thanks to the party planning committee for organizing such a memorable evening. Looking forward to more celebrations in 2026!',
      category: 'celebration',
      priority: 'low',
      author: 'Events Committee',
      authorRole: 'Staff',
      datePosted: '2025-12-16',
      isPinned: false,
      readBy: ['user1', 'user2'],
      likes: 42,
      comments: 21,
      targetAudience: 'all'
    },
    {
      id: '10',
      title: '🚗 Parking Lot Resurfacing - January 8-12',
      content: 'The main parking lot will be resurfaced January 8-12. During this time, please use the overflow lot on the north side of the building. Shuttle service will be provided every 10 minutes from 6am-8pm. We apologize for the inconvenience and appreciate your cooperation.',
      category: 'general',
      priority: 'medium',
      author: 'Robert Kim',
      authorRole: 'Facilities Director',
      datePosted: '2025-12-15',
      expiresDate: '2026-01-12',
      isPinned: false,
      readBy: [],
      likes: 5,
      comments: 2,
      targetAudience: 'all'
    }
  ];

  const filteredAnnouncements = announcements
    .filter(a => activeFilter === 'all' || a.category === activeFilter)
    .filter(a => searchQuery === '' || 
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      a.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime();
    });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'urgent': return 'bg-red-500/20 text-red-400 border-red-500';
      case 'celebration': return 'bg-purple-500/20 text-purple-400 border-purple-500';
      case 'policy': return 'bg-blue-500/20 text-blue-400 border-blue-500';
      case 'event': return 'bg-green-500/20 text-green-400 border-green-500';
      case 'benefit': return 'bg-orange-500/20 text-orange-400 border-orange-500';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'urgent': return <AlertCircle className="w-4 h-4" />;
      case 'celebration': return <Award className="w-4 h-4" />;
      case 'policy': return <FileText className="w-4 h-4" />;
      case 'event': return <Calendar className="w-4 h-4" />;
      case 'benefit': return <Gift className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const unreadCount = announcements.filter(a => !a.readBy.includes('currentUser')).length;

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--page-bg)', color: 'var(--body-text)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                <Megaphone className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold" style={{ color: 'var(--header-text)' }}>
                  Company Announcements
                </h1>
                <p className="text-lg opacity-80 mt-1">
                  Stay informed about important updates, news, and celebrations
                </p>
              </div>
            </div>
            {user?.role === 'admin' || user?.role === 'manager' ? (
              <button
                onClick={() => setShowNewAnnouncement(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Plus className="w-5 h-5" />
                New Announcement
              </button>
            ) : null}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm opacity-70 mb-1">Unread</div>
                <div className="text-2xl font-bold text-orange-400">{unreadCount}</div>
              </div>
              <Bell className="w-8 h-8 text-orange-400" />
            </div>
          </div>
          <div className="p-4 rounded-xl" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm opacity-70 mb-1">Pinned</div>
                <div className="text-2xl font-bold text-blue-400">{announcements.filter(a => a.isPinned).length}</div>
              </div>
              <Pin className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="p-4 rounded-xl" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm opacity-70 mb-1">This Month</div>
                <div className="text-2xl font-bold text-green-400">{announcements.length}</div>
              </div>
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="p-4 rounded-xl" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm opacity-70 mb-1">Engagement</div>
                <div className="text-2xl font-bold text-purple-400">92%</div>
              </div>
              <Users className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
            <input
              type="text"
              placeholder="Search announcements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-600 focus:outline-none focus:border-blue-500 transition-all"
              style={{ background: 'var(--card-bg)', color: 'var(--body-text)' }}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {['all', 'urgent', 'general', 'celebration', 'policy', 'event', 'benefit'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Announcements Feed */}
        <div className="space-y-4">
          {filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="p-6 rounded-xl shadow-lg border-l-4 hover:shadow-xl transition-all relative"
              style={{
                background: 'var(--card-bg)',
                borderLeftColor: announcement.category === 'urgent' ? '#ef4444' : 
                                 announcement.category === 'celebration' ? '#a855f7' :
                                 announcement.category === 'policy' ? '#3b82f6' :
                                 announcement.category === 'event' ? '#10b981' :
                                 announcement.category === 'benefit' ? '#f97316' : '#64748b'
              }}
            >
              {announcement.isPinned && (
                <div className="absolute top-4 right-4">
                  <Pin className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
              )}

              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border flex items-center gap-1 ${getCategoryColor(announcement.category)}`}>
                      {getCategoryIcon(announcement.category)}
                      {announcement.category}
                    </span>
                    {announcement.priority === 'high' && (
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase">
                        HIGH PRIORITY
                      </span>
                    )}
                    {!announcement.readBy.includes('currentUser') && (
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold uppercase flex items-center gap-1">
                        <Bell className="w-3 h-3" />
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{announcement.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {announcement.author} • {announcement.authorRole}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(announcement.datePosted)}
                    </span>
                    {announcement.expiresDate && (
                      <span className="flex items-center gap-1 text-orange-400">
                        <AlertCircle className="w-4 h-4" />
                        Expires: {new Date(announcement.expiresDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="text-slate-300 mb-4 leading-relaxed">{announcement.content}</p>

              {/* Attachments */}
              {announcement.attachments && announcement.attachments.length > 0 && (
                <div className="mb-4 p-4 bg-slate-700/30 rounded-lg">
                  <div className="text-sm font-semibold text-slate-400 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Attachments
                  </div>
                  <div className="space-y-2">
                    {announcement.attachments.map((attachment, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-blue-400" />
                          <div>
                            <div className="text-white font-semibold">{attachment.name}</div>
                            <div className="text-xs text-slate-400">{attachment.type} • {attachment.size}</div>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all">
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition-all">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="font-semibold">{announcement.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition-all">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-semibold">{announcement.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition-all">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
                {!announcement.readBy.includes('currentUser') && (
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Mark as Read
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-12 rounded-xl" style={{ background: 'var(--card-bg)' }}>
            <Megaphone className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-xl font-semibold opacity-70">No announcements found</p>
            <p className="text-sm opacity-50 mt-2">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
}
