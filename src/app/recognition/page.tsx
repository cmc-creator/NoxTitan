'use client';

import { useState } from 'react';
import { 
  Award, 
  Star, 
  Heart, 
  TrendingUp, 
  Users, 
  Zap, 
  Trophy, 
  Target,
  Sparkles,
  Gift,
  Crown,
  Flame,
  ThumbsUp,
  Coffee,
  Rocket,
  PartyPopper,
  Plus,
  Send,
  Filter,
  Calendar,
  BarChart3,
  Download,
  Share2
} from 'lucide-react';

const GOLD = 'rgba(201,168,76,0.22)';
const GOLD_HOVER = 'rgba(201,168,76,0.45)';
const GOLD_FG = '#C9A84C';
const CARD_BG = '#110F0B';
const TEXT_PRIMARY = '#F0EBE0';
const TEXT_DIM = '#9E8F75';
const TEXT_MUTED = '#5A5040';
const GOLD_FILL = 'rgba(201,168,76,0.12)';

interface Recognition {
  id: string;
  type: 'badge' | 'award' | 'shoutout' | 'bonus' | 'certificate';
  recipient: string;
  recipientType: 'individual' | 'team' | 'department';
  givenBy: string;
  badge?: string;
  title: string;
  message: string;
  date: string;
  points?: number;
  public: boolean;
  category: string;
}

interface RecognitionTemplate {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  message: string;
  points: number;
  category: string;
}

export default function RecognitionPage() {
  const [activeTab, setActiveTab] = useState<'give' | 'feed' | 'leaderboard' | 'analytics'>('give');
  const [showRecognitionModal, setShowRecognitionModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<RecognitionTemplate | null>(null);
  const [recipientType, setRecipientType] = useState<'individual' | 'team' | 'department'>('individual');

  const templates: RecognitionTemplate[] = [
    { id: '1', icon: <Star className="w-6 h-6" />, title: 'Star Performer', description: 'Consistently exceeds expectations', message: 'Your dedication and excellent work consistently exceed expectations. Thank you for being a star performer on our team!', points: 100, category: 'performance' },
    { id: '2', icon: <Heart className="w-6 h-6" />, title: 'Team Player', description: 'Goes above and beyond to help others', message: 'Thank you for always being willing to help your teammates. Your collaborative spirit makes our team stronger!', points: 75, category: 'teamwork' },
    { id: '3', icon: <Rocket className="w-6 h-6" />, title: 'Innovation Champion', description: 'Brings creative solutions and new ideas', message: 'Your creative thinking and innovative solutions are moving us forward. Keep those great ideas coming!', points: 100, category: 'innovation' },
    { id: '4', icon: <Target className="w-6 h-6" />, title: 'Goal Crusher', description: 'Achieved or exceeded important goals', message: 'Congratulations on crushing your goals! Your hard work and determination are truly impressive.', points: 100, category: 'achievement' },
    { id: '5', icon: <Users className="w-6 h-6" />, title: 'Mentor Excellence', description: 'Outstanding mentorship and guidance', message: "Thank you for taking the time to mentor and develop others. Your guidance is helping build the next generation of leaders!", points: 90, category: 'leadership' },
    { id: '6', icon: <Zap className="w-6 h-6" />, title: 'Quick Thinker', description: 'Handled urgent situation brilliantly', message: 'Your quick thinking and decisive action in a critical moment made all the difference. Exceptional work!', points: 85, category: 'problem-solving' },
    { id: '7', icon: <Coffee className="w-6 h-6" />, title: 'Culture Builder', description: 'Makes the workplace more positive', message: 'Your positive attitude and friendly demeanor make our workplace better every day. Thank you for being you!', points: 60, category: 'culture' },
    { id: '8', icon: <Trophy className="w-6 h-6" />, title: 'Customer Hero', description: 'Exceptional customer service', message: 'You went above and beyond for our customers. Your dedication to excellent service is truly appreciated!', points: 95, category: 'service' },
    { id: '9', icon: <Flame className="w-6 h-6" />, title: 'On Fire!', description: 'Incredible productivity streak', message: "You've been absolutely crushing it lately! Your productivity and energy are inspiring to everyone around you.", points: 80, category: 'productivity' },
    { id: '10', icon: <Crown className="w-6 h-6" />, title: 'Leadership Star', description: 'Demonstrated exceptional leadership', message: 'Your leadership during this project was outstanding. You inspire and bring out the best in others!', points: 100, category: 'leadership' },
    { id: '11', icon: <ThumbsUp className="w-6 h-6" />, title: 'Great Job!', description: 'General appreciation for good work', message: 'Just wanted to say great job on your recent work. Your efforts are noticed and appreciated!', points: 50, category: 'appreciation' },
    { id: '12', icon: <Gift className="w-6 h-6" />, title: 'Extra Mile', description: 'Went beyond what was asked', message: "Thank you for going the extra mile! Your willingness to do more than what's asked sets a great example.", points: 70, category: 'initiative' },
  ];

  const recognitions: Recognition[] = [
    { id: '1', type: 'badge', recipient: 'Sarah Johnson', recipientType: 'individual', givenBy: 'Mike Thompson, Nurse Manager', badge: 'Star Performer', title: 'Star Performer', message: "Sarah consistently goes above and beyond in patient care. Her dedication during the holiday rush was exceptional!", date: '2026-01-01', points: 100, public: true, category: 'performance' },
    { id: '2', type: 'shoutout', recipient: 'Emergency Department Team', recipientType: 'department', givenBy: 'Dr. Emily Chen, Director', title: 'Team Excellence', message: 'The entire ED team handled the busiest week of the year with professionalism and teamwork. You all are amazing!', date: '2025-12-30', points: 500, public: true, category: 'teamwork' },
    { id: '3', type: 'award', recipient: 'Marcus Williams', recipientType: 'individual', givenBy: 'Lisa Anderson, HR Director', badge: 'Innovation Champion', title: 'Innovation Champion', message: 'Marcus developed a new scheduling system that reduced overtime by 15%. Incredible innovation!', date: '2025-12-28', points: 100, public: true, category: 'innovation' },
    { id: '4', type: 'certificate', recipient: 'Radiology Team', recipientType: 'team', givenBy: 'Robert Lee, Department Head', title: 'Safety Excellence', message: 'Zero incidents for 365 consecutive days! Your commitment to safety protocols is outstanding.', date: '2025-12-27', points: 300, public: true, category: 'achievement' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Johnson', department: 'Nursing', points: 850, badges: 12, trend: 'up' },
    { rank: 2, name: 'Marcus Williams', department: 'IT', points: 720, badges: 10, trend: 'up' },
    { rank: 3, name: 'Dr. Emily Chen', department: 'Emergency', points: 680, badges: 9, trend: 'same' },
    { rank: 4, name: 'Lisa Thompson', department: 'Administration', points: 650, badges: 8, trend: 'up' },
    { rank: 5, name: 'John Martinez', department: 'Laboratory', points: 590, badges: 7, trend: 'down' },
  ];

  const quickStats = [
    { icon: <Award className="w-6 h-6" />, value: '247', label: 'Recognitions This Month', sub: '↑ 18% from last month' },
    { icon: <Star className="w-6 h-6" />, value: '15.2k', label: 'Points Awarded', sub: 'Across all employees' },
    { icon: <Users className="w-6 h-6" />, value: '89%', label: 'Participation Rate', sub: 'Employees recognized' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '4.8', label: 'Avg per Employee', sub: 'Recognitions received' },
  ];

  const getBadgeIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      performance: <Star className="w-8 h-8" />,
      teamwork: <Users className="w-8 h-8" />,
      innovation: <Rocket className="w-8 h-8" />,
      achievement: <Trophy className="w-8 h-8" />,
      leadership: <Crown className="w-8 h-8" />,
      'problem-solving': <Zap className="w-8 h-8" />,
      culture: <Heart className="w-8 h-8" />,
      service: <Award className="w-8 h-8" />,
      productivity: <Flame className="w-8 h-8" />,
      appreciation: <ThumbsUp className="w-8 h-8" />,
      initiative: <Gift className="w-8 h-8" />,
    };
    return icons[category] || <Star className="w-8 h-8" />;
  };

  const tabStyle = (tab: string): React.CSSProperties =>
    activeTab === tab
      ? { background: GOLD_FILL, border: `1px solid ${GOLD_HOVER}`, borderRadius: 4, padding: '0.625rem 1.25rem', color: GOLD_FG, fontWeight: 600, cursor: 'pointer' }
      : { background: 'transparent', border: `1px solid ${GOLD}`, borderRadius: 4, padding: '0.625rem 1.25rem', color: TEXT_DIM, fontWeight: 500, cursor: 'pointer' };

  const typeStyle = (type: string): React.CSSProperties =>
    recipientType === type
      ? { background: GOLD_FILL, border: `2px solid ${GOLD_HOVER}`, borderRadius: 4, padding: '1.5rem', cursor: 'pointer', textAlign: 'center' as const }
      : { background: 'transparent', border: `2px solid ${GOLD}`, borderRadius: 4, padding: '1.5rem', cursor: 'pointer', textAlign: 'center' as const };

  return (
    <div className="min-h-screen p-8" style={{ background: '#070604' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="flex items-center gap-3 mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.25rem', fontWeight: 700, color: GOLD_FG, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <Award className="w-9 h-9" style={{ color: GOLD_FG }} />
            Employee Recognition
          </h1>
          <p style={{ color: TEXT_DIM, fontSize: '0.9375rem' }}>Celebrate achievements, build culture, and motivate your team</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {quickStats.map((s) => (
            <div key={s.label} style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1.5rem' }}>
              <div className="flex items-center justify-between mb-2">
                <span style={{ color: GOLD_FG }}>{s.icon}</span>
                <span style={{ fontSize: '1.875rem', fontWeight: 700, color: TEXT_PRIMARY }}>{s.value}</span>
              </div>
              <p style={{ color: TEXT_DIM, fontSize: '0.875rem', fontWeight: 600, marginBottom: 4 }}>{s.label}</p>
              <p style={{ color: TEXT_MUTED, fontSize: '0.75rem' }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {(['give', 'feed', 'leaderboard', 'analytics'] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={tabStyle(tab)} className="flex items-center gap-2 transition-colors">
              {tab === 'give' && <Gift className="w-4 h-4" />}
              {tab === 'feed' && <Sparkles className="w-4 h-4" />}
              {tab === 'leaderboard' && <Trophy className="w-4 h-4" />}
              {tab === 'analytics' && <BarChart3 className="w-4 h-4" />}
              {tab === 'give' ? 'Give Recognition' : tab === 'feed' ? 'Recognition Feed' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Give Recognition Tab */}
        {activeTab === 'give' && (
          <div className="space-y-8">
            {/* Hero */}
            <div style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '2rem' }}>
              <div className="flex items-center gap-4">
                <div style={{ background: GOLD_FILL, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1rem' }}>
                  <PartyPopper className="w-10 h-10" style={{ color: GOLD_FG }} />
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.75rem', fontWeight: 700, color: TEXT_PRIMARY, marginBottom: 8 }}>
                    Recognize Your Team in Seconds
                  </h2>
                  <p style={{ color: TEXT_DIM }}>
                    Choose from ready-made templates or create a custom recognition. Make someone's day!
                  </p>
                </div>
              </div>
            </div>

            {/* Who to recognize */}
            <div style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1.5rem' }}>
              <h3 style={{ color: TEXT_PRIMARY, fontWeight: 700, fontSize: '1.125rem', marginBottom: '1rem' }}>Who are you recognizing?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { type: 'individual' as const, icon: <Star className="w-7 h-7" />, label: 'Individual Employee', desc: "Recognize one person's achievement" },
                  { type: 'team' as const, icon: <Users className="w-7 h-7" />, label: 'Team', desc: "Celebrate a specific team's success" },
                  { type: 'department' as const, icon: <Trophy className="w-7 h-7" />, label: 'Entire Department', desc: 'Recognize department-wide excellence' },
                ].map((opt) => (
                  <button key={opt.type} onClick={() => setRecipientType(opt.type)} style={typeStyle(opt.type)} className="transition-colors">
                    <div style={{ color: GOLD_FG, marginBottom: 12, display: 'flex', justifyContent: 'center' }}>{opt.icon}</div>
                    <p style={{ fontWeight: 700, color: TEXT_PRIMARY, marginBottom: 4 }}>{opt.label}</p>
                    <p style={{ fontSize: '0.8125rem', color: TEXT_DIM }}>{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Templates */}
            <div style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1.5rem' }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 style={{ color: TEXT_PRIMARY, fontWeight: 700, fontSize: '1.125rem', marginBottom: 4 }}>⚡ Quick Recognition Templates</h3>
                  <p style={{ color: TEXT_DIM, fontSize: '0.875rem' }}>Click any template to use it instantly</p>
                </div>
                <button style={{ color: GOLD_FG, fontWeight: 600, fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                  View All →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => { setSelectedTemplate(template); setShowRecognitionModal(true); }}
                    className="text-left transition-colors"
                    style={{ background: 'rgba(201,168,76,0.04)', border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1.25rem' }}
                    onMouseOver={(e) => (e.currentTarget.style.borderColor = GOLD_HOVER)}
                    onMouseOut={(e) => (e.currentTarget.style.borderColor = GOLD)}
                  >
                    <div style={{ display: 'inline-flex', padding: '0.625rem', background: GOLD_FILL, border: `1px solid ${GOLD}`, borderRadius: 4, color: GOLD_FG, marginBottom: 12 }}>
                      {template.icon}
                    </div>
                    <h4 style={{ fontWeight: 700, color: TEXT_PRIMARY, marginBottom: 8, fontSize: '0.9375rem' }}>{template.title}</h4>
                    <p style={{ fontSize: '0.8125rem', color: TEXT_DIM, marginBottom: 12 }}>{template.description}</p>
                    <div className="flex items-center gap-2">
                      <span style={{ padding: '2px 10px', background: GOLD_FILL, border: `1px solid ${GOLD}`, borderRadius: 4, color: GOLD_FG, fontSize: '0.75rem', fontWeight: 600 }}>
                        ★ {template.points} pts
                      </span>
                      <span style={{ color: TEXT_MUTED, fontSize: '0.75rem' }}>•</span>
                      <span style={{ color: TEXT_MUTED, fontSize: '0.75rem', textTransform: 'capitalize' }}>{template.category}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Recognition */}
            <div style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1.5rem' }}>
              <h3 className="flex items-center gap-2" style={{ color: TEXT_PRIMARY, fontWeight: 700, fontSize: '1.125rem', marginBottom: 8 }}>
                <Sparkles className="w-5 h-5" style={{ color: GOLD_FG }} />
                Create Custom Recognition
              </h3>
              <p style={{ color: TEXT_DIM, marginBottom: 16 }}>Want to craft a personalized message? Create your own unique recognition.</p>
              <button style={{ width: '100%', padding: '0.875rem', background: GOLD_FILL, border: `1px solid ${GOLD_HOVER}`, borderRadius: 4, color: GOLD_FG, fontWeight: 700, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <Plus className="w-5 h-5" />
                Create Custom Recognition
              </button>
            </div>
          </div>
        )}

        {/* Recognition Feed Tab */}
        {activeTab === 'feed' && (
          <div>
            <div style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1.5rem' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 700, color: TEXT_PRIMARY }}>Recognition Wall</h2>
                <div className="flex gap-2">
                  <button style={{ background: 'transparent', border: `1px solid ${GOLD}`, borderRadius: 4, padding: '0.5rem 0.875rem', color: TEXT_DIM, fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button style={{ background: GOLD_FILL, border: `1px solid ${GOLD_HOVER}`, borderRadius: 4, padding: '0.5rem 0.875rem', color: GOLD_FG, fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {recognitions.map((recognition) => (
                  <div key={recognition.id} style={{ background: 'rgba(201,168,76,0.04)', border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1.5rem' }}>
                    <div className="flex items-start gap-4">
                      <div style={{ flexShrink: 0, padding: '0.875rem', background: GOLD_FILL, border: `1px solid ${GOLD}`, borderRadius: 4, color: GOLD_FG }}>
                        {getBadgeIcon(recognition.category)}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: TEXT_PRIMARY, marginBottom: 4 }}>{recognition.title}</h3>
                            <p style={{ color: TEXT_DIM, fontSize: '0.875rem' }}>
                              <span style={{ fontWeight: 600, color: GOLD_FG }}>{recognition.recipient}</span>
                              {recognition.recipientType !== 'individual' && (
                                <span style={{ marginLeft: 8, padding: '2px 8px', background: GOLD_FILL, border: `1px solid ${GOLD}`, borderRadius: 4, fontSize: '0.75rem', color: GOLD_FG, fontWeight: 600 }}>
                                  {recognition.recipientType}
                                </span>
                              )}
                            </p>
                          </div>
                          {recognition.points && (
                            <span style={{ padding: '4px 12px', background: GOLD_FILL, border: `1px solid ${GOLD}`, borderRadius: 4, color: GOLD_FG, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                              <Star className="w-3 h-3" />
                              {recognition.points}
                            </span>
                          )}
                        </div>
                        <p style={{ color: TEXT_DIM, marginBottom: 16, lineHeight: 1.6 }}>{recognition.message}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4" style={{ fontSize: '0.8125rem', color: TEXT_MUTED }}>
                            <span>From: <strong style={{ color: TEXT_DIM }}>{recognition.givenBy}</strong></span>
                            <span>•</span>
                            <span>{new Date(recognition.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex gap-2">
                            <button style={{ padding: '0.375rem 0.75rem', background: 'transparent', border: `1px solid ${GOLD}`, borderRadius: 4, color: TEXT_DIM, fontSize: '0.8125rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                              <ThumbsUp className="w-3 h-3" />
                              <span style={{ fontWeight: 600 }}>24</span>
                            </button>
                            <button style={{ padding: '0.375rem 0.75rem', background: 'transparent', border: `1px solid ${GOLD}`, borderRadius: 4, color: TEXT_DIM, fontSize: '0.8125rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                              <Share2 className="w-3 h-3" />
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="space-y-6">
            <div style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '2rem' }}>
              <div className="flex items-center gap-4">
                <Trophy className="w-12 h-12" style={{ color: GOLD_FG }} />
                <div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.75rem', fontWeight: 700, color: TEXT_PRIMARY, marginBottom: 4 }}>Recognition Leaderboard</h2>
                  <p style={{ color: TEXT_DIM }}>Celebrating our most recognized team members</p>
                </div>
              </div>
            </div>

            <div style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '2rem' }}>
              <div className="space-y-4">
                {leaderboard.map((person, index) => (
                  <div key={person.rank} style={{ background: index < 3 ? 'rgba(201,168,76,0.06)' : 'transparent', border: `1px solid ${index < 3 ? GOLD_HOVER : GOLD}`, borderRadius: 4, padding: '1.25rem' }}>
                    <div className="flex items-center gap-6">
                      <div style={{ flexShrink: 0, width: 48, height: 48, background: index === 0 ? GOLD_FILL : 'transparent', border: `2px solid ${index < 3 ? GOLD_HOVER : GOLD}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.25rem', color: index < 3 ? GOLD_FG : TEXT_DIM }}>
                        {person.rank}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: TEXT_PRIMARY, marginBottom: 2 }}>{person.name}</h3>
                        <p style={{ fontSize: '0.8125rem', color: TEXT_DIM }}>{person.department}</p>
                      </div>
                      <div className="flex gap-8 text-center">
                        <div>
                          <p style={{ fontSize: '1.5rem', fontWeight: 700, color: TEXT_PRIMARY }}>{person.points}</p>
                          <p style={{ fontSize: '0.75rem', color: TEXT_MUTED }}>Points</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '1.5rem', fontWeight: 700, color: TEXT_PRIMARY }}>{person.badges}</p>
                          <p style={{ fontSize: '0.75rem', color: TEXT_MUTED }}>Badges</p>
                        </div>
                      </div>
                      {person.trend === 'up' && (
                        <div style={{ padding: '4px 10px', background: GOLD_FILL, border: `1px solid ${GOLD}`, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                          <TrendingUp className="w-4 h-4" style={{ color: GOLD_FG }} />
                          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: GOLD_FG }}>Rising</span>
                        </div>
                      )}
                      {person.trend === 'same' && (
                        <div style={{ padding: '4px 10px', background: 'transparent', border: `1px solid ${GOLD}`, borderRadius: 4 }}>
                          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: TEXT_DIM }}>Steady</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div>
            <div style={{ background: CARD_BG, border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1.5rem' }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 700, color: TEXT_PRIMARY, marginBottom: '1.5rem' }}>Recognition Analytics</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { label: 'Most Popular Badge', value: 'Star Performer', sub: 'Given 42 times this month' },
                  { label: 'Most Active Manager', value: 'Dr. Emily Chen', sub: '38 recognitions given' },
                  { label: 'Top Department', value: 'Emergency', sub: '94 recognitions received' },
                ].map((stat) => (
                  <div key={stat.label} style={{ background: 'rgba(201,168,76,0.04)', border: `1px solid ${GOLD}`, borderRadius: 4, padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '0.75rem', fontWeight: 600, color: TEXT_MUTED, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</h3>
                    <p style={{ fontSize: '1.25rem', fontWeight: 700, color: TEXT_PRIMARY, marginBottom: 4 }}>{stat.value}</p>
                    <p style={{ fontSize: '0.8125rem', color: TEXT_DIM }}>{stat.sub}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button style={{ flex: 1, padding: '0.75rem', background: GOLD_FILL, border: `1px solid ${GOLD_HOVER}`, borderRadius: 4, color: GOLD_FG, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <Download className="w-5 h-5" />
                  Export Report
                </button>
                <button style={{ flex: 1, padding: '0.75rem', background: 'transparent', border: `1px solid ${GOLD}`, borderRadius: 4, color: TEXT_DIM, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <Calendar className="w-5 h-5" />
                  View History
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
