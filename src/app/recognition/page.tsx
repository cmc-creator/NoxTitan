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
  color: string;
  category: string;
}

export default function RecognitionPage() {
  const [activeTab, setActiveTab] = useState<'give' | 'feed' | 'leaderboard' | 'analytics'>('give');
  const [showRecognitionModal, setShowRecognitionModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<RecognitionTemplate | null>(null);
  const [recipientType, setRecipientType] = useState<'individual' | 'team' | 'department'>('individual');
  const [recognitionType, setRecognitionType] = useState<'quick' | 'custom'>('quick');

  // Recognition Templates - Quick and easy options for managers
  const templates: RecognitionTemplate[] = [
    {
      id: '1',
      icon: <Star className="w-6 h-6" />,
      title: 'Star Performer',
      description: 'Consistently exceeds expectations',
      message: 'Your dedication and excellent work consistently exceed expectations. Thank you for being a star performer on our team!',
      points: 100,
      color: 'from-yellow-400 to-amber-500',
      category: 'performance'
    },
    {
      id: '2',
      icon: <Heart className="w-6 h-6" />,
      title: 'Team Player',
      description: 'Goes above and beyond to help others',
      message: 'Thank you for always being willing to help your teammates. Your collaborative spirit makes our team stronger!',
      points: 75,
      color: 'from-pink-400 to-rose-500',
      category: 'teamwork'
    },
    {
      id: '3',
      icon: <Rocket className="w-6 h-6" />,
      title: 'Innovation Champion',
      description: 'Brings creative solutions and new ideas',
      message: 'Your creative thinking and innovative solutions are moving us forward. Keep those great ideas coming!',
      points: 100,
      color: 'from-blue-400 to-indigo-500',
      category: 'innovation'
    },
    {
      id: '4',
      icon: <Target className="w-6 h-6" />,
      title: 'Goal Crusher',
      description: 'Achieved or exceeded important goals',
      message: 'Congratulations on crushing your goals! Your hard work and determination are truly impressive.',
      points: 100,
      color: 'from-green-400 to-emerald-500',
      category: 'achievement'
    },
    {
      id: '5',
      icon: <Users className="w-6 h-6" />,
      title: 'Mentor Excellence',
      description: 'Outstanding mentorship and guidance',
      message: 'Thank you for taking the time to mentor and develop others. Your guidance is helping build the next generation of leaders!',
      points: 90,
      color: 'from-purple-400 to-violet-500',
      category: 'leadership'
    },
    {
      id: '6',
      icon: <Zap className="w-6 h-6" />,
      title: 'Quick Thinker',
      description: 'Handled urgent situation brilliantly',
      message: 'Your quick thinking and decisive action in a critical moment made all the difference. Exceptional work!',
      points: 85,
      color: 'from-orange-400 to-red-500',
      category: 'problem-solving'
    },
    {
      id: '7',
      icon: <Coffee className="w-6 h-6" />,
      title: 'Culture Builder',
      description: 'Makes the workplace more positive',
      message: 'Your positive attitude and friendly demeanor make our workplace better every day. Thank you for being you!',
      points: 60,
      color: 'from-amber-400 to-yellow-500',
      category: 'culture'
    },
    {
      id: '8',
      icon: <Trophy className="w-6 h-6" />,
      title: 'Customer Hero',
      description: 'Exceptional customer service',
      message: 'You went above and beyond for our customers. Your dedication to excellent service is truly appreciated!',
      points: 95,
      color: 'from-cyan-400 to-blue-500',
      category: 'service'
    },
    {
      id: '9',
      icon: <Flame className="w-6 h-6" />,
      title: 'On Fire!',
      description: 'Incredible productivity streak',
      message: 'You\'ve been absolutely crushing it lately! Your productivity and energy are inspiring to everyone around you.',
      points: 80,
      color: 'from-red-400 to-orange-600',
      category: 'productivity'
    },
    {
      id: '10',
      icon: <Crown className="w-6 h-6" />,
      title: 'Leadership Star',
      description: 'Demonstrated exceptional leadership',
      message: 'Your leadership during this project was outstanding. You inspire and bring out the best in others!',
      points: 100,
      color: 'from-yellow-400 to-amber-600',
      category: 'leadership'
    },
    {
      id: '11',
      icon: <ThumbsUp className="w-6 h-6" />,
      title: 'Great Job!',
      description: 'General appreciation for good work',
      message: 'Just wanted to say great job on your recent work. Your efforts are noticed and appreciated!',
      points: 50,
      color: 'from-blue-400 to-cyan-500',
      category: 'appreciation'
    },
    {
      id: '12',
      icon: <Gift className="w-6 h-6" />,
      title: 'Extra Mile',
      description: 'Went beyond what was asked',
      message: 'Thank you for going the extra mile! Your willingness to do more than what\'s asked sets a great example.',
      points: 70,
      color: 'from-pink-400 to-purple-500',
      category: 'initiative'
    },
  ];

  // Recent recognitions feed
  const recognitions: Recognition[] = [
    {
      id: '1',
      type: 'badge',
      recipient: 'Sarah Johnson',
      recipientType: 'individual',
      givenBy: 'Mike Thompson, Nurse Manager',
      badge: 'Star Performer',
      title: 'Star Performer',
      message: 'Sarah consistently goes above and beyond in patient care. Her dedication during the holiday rush was exceptional!',
      date: '2026-01-01',
      points: 100,
      public: true,
      category: 'performance'
    },
    {
      id: '2',
      type: 'shoutout',
      recipient: 'Emergency Department Team',
      recipientType: 'department',
      givenBy: 'Dr. Emily Chen, Director',
      title: 'Team Excellence',
      message: 'The entire ED team handled the busiest week of the year with professionalism and teamwork. You all are amazing!',
      date: '2025-12-30',
      points: 500,
      public: true,
      category: 'teamwork'
    },
    {
      id: '3',
      type: 'award',
      recipient: 'Marcus Williams',
      recipientType: 'individual',
      givenBy: 'Lisa Anderson, HR Director',
      badge: 'Innovation Champion',
      title: 'Innovation Champion',
      message: 'Marcus developed a new scheduling system that reduced overtime by 15%. Incredible innovation!',
      date: '2025-12-28',
      points: 100,
      public: true,
      category: 'innovation'
    },
    {
      id: '4',
      type: 'certificate',
      recipient: 'Radiology Team',
      recipientType: 'team',
      givenBy: 'Robert Lee, Department Head',
      title: 'Safety Excellence',
      message: 'Zero incidents for 365 consecutive days! Your commitment to safety protocols is outstanding.',
      date: '2025-12-27',
      points: 300,
      public: true,
      category: 'achievement'
    },
  ];

  // Leaderboard data
  const leaderboard = [
    { rank: 1, name: 'Sarah Johnson', department: 'Nursing', points: 850, badges: 12, trend: 'up' },
    { rank: 2, name: 'Marcus Williams', department: 'IT', points: 720, badges: 10, trend: 'up' },
    { rank: 3, name: 'Dr. Emily Chen', department: 'Emergency', points: 680, badges: 9, trend: 'same' },
    { rank: 4, name: 'Lisa Thompson', department: 'Administration', points: 650, badges: 8, trend: 'up' },
    { rank: 5, name: 'John Martinez', department: 'Laboratory', points: 590, badges: 7, trend: 'down' },
  ];

  const handleQuickRecognition = (template: RecognitionTemplate) => {
    setSelectedTemplate(template);
    setShowRecognitionModal(true);
  };

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

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Award className="w-10 h-10 text-purple-600" />
            Employee Recognition
          </h1>
          <p className="text-lg text-gray-600">Celebrate achievements, build culture, and motivate your team</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 opacity-80" />
              <span className="text-3xl font-bold">247</span>
            </div>
            <p className="text-purple-100">Recognitions This Month</p>
            <p className="text-sm text-purple-200 mt-1">↑ 18% from last month</p>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-8 h-8 opacity-80" />
              <span className="text-3xl font-bold">15.2k</span>
            </div>
            <p className="text-amber-100">Points Awarded</p>
            <p className="text-sm text-amber-200 mt-1">Across all employees</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 opacity-80" />
              <span className="text-3xl font-bold">89%</span>
            </div>
            <p className="text-green-100">Participation Rate</p>
            <p className="text-sm text-green-200 mt-1">Employees recognized</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 opacity-80" />
              <span className="text-3xl font-bold">4.8</span>
            </div>
            <p className="text-pink-100">Avg per Employee</p>
            <p className="text-sm text-pink-200 mt-1">Recognitions received</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('give')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'give' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Gift className="w-5 h-5" />
            Give Recognition
          </button>
          <button
            onClick={() => setActiveTab('feed')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'feed' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            Recognition Feed
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'leaderboard' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Trophy className="w-5 h-5" />
            Leaderboard
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'analytics' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            Analytics
          </button>
        </div>

        {/* Give Recognition Tab */}
        {activeTab === 'give' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <PartyPopper className="w-12 h-12" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Recognize Your Team in Seconds! 🎉</h2>
                  <p className="text-purple-100 text-lg">
                    Choose from ready-made templates or create a custom recognition. Make someone's day!
                  </p>
                </div>
              </div>
            </div>

            {/* Recognition Type Selector */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Who are you recognizing?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => setRecipientType('individual')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    recipientType === 'individual'
                      ? 'border-purple-600 bg-purple-50 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <Star className="w-8 h-8 text-purple-600 mb-3 mx-auto" />
                  <p className="font-bold text-gray-900 mb-1">Individual Employee</p>
                  <p className="text-sm text-gray-600">Recognize one person's achievement</p>
                </button>
                <button
                  onClick={() => setRecipientType('team')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    recipientType === 'team'
                      ? 'border-purple-600 bg-purple-50 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <Users className="w-8 h-8 text-purple-600 mb-3 mx-auto" />
                  <p className="font-bold text-gray-900 mb-1">Team</p>
                  <p className="text-sm text-gray-600">Celebrate a specific team's success</p>
                </button>
                <button
                  onClick={() => setRecipientType('department')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    recipientType === 'department'
                      ? 'border-purple-600 bg-purple-50 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <Trophy className="w-8 h-8 text-purple-600 mb-3 mx-auto" />
                  <p className="font-bold text-gray-900 mb-1">Entire Department</p>
                  <p className="text-sm text-gray-600">Recognize department-wide excellence</p>
                </button>
              </div>
            </div>

            {/* Quick Templates */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">⚡ Quick Recognition Templates</h3>
                  <p className="text-gray-600">Click any template to use it instantly</p>
                </div>
                <button className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg font-semibold transition-all">
                  View All →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => handleQuickRecognition(template)}
                    className="text-left p-6 rounded-xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all group"
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${template.color} text-white mb-4`}>
                      {template.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {template.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {template.points} pts
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600 capitalize">{template.category}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Recognition */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-600" />
                Create Custom Recognition
              </h3>
              <p className="text-gray-600 mb-6">Want to craft a personalized message? Create your own unique recognition.</p>
              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg flex items-center justify-center gap-2">
                <Plus className="w-6 h-6" />
                Create Custom Recognition
              </button>
            </div>
          </div>
        )}

        {/* Recognition Feed Tab */}
        {activeTab === 'feed' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recognition Wall</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {recognitions.map((recognition) => (
                  <div key={recognition.id} className="p-6 border-2 border-gray-200 rounded-xl hover:border-purple-300 transition-all">
                    <div className="flex items-start gap-4">
                      {/* Badge Icon */}
                      <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100`}>
                        {getBadgeIcon(recognition.category)}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{recognition.title}</h3>
                            <p className="text-gray-600">
                              <span className="font-semibold text-purple-600">{recognition.recipient}</span>
                              {recognition.recipientType !== 'individual' && (
                                <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                                  {recognition.recipientType}
                                </span>
                              )}
                            </p>
                          </div>
                          {recognition.points && (
                            <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-xl font-bold flex items-center gap-1">
                              <Star className="w-4 h-4 fill-amber-500" />
                              {recognition.points}
                            </span>
                          )}
                        </div>

                        <p className="text-gray-700 mb-4 text-lg">{recognition.message}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>From: <strong>{recognition.givenBy}</strong></span>
                            <span>•</span>
                            <span>{new Date(recognition.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex gap-2">
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all flex items-center gap-2 text-gray-700">
                              <ThumbsUp className="w-4 h-4" />
                              <span className="font-semibold">24</span>
                            </button>
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all flex items-center gap-2 text-gray-700">
                              <Share2 className="w-4 h-4" />
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
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl shadow-2xl p-8 text-white">
              <div className="flex items-center gap-4">
                <Trophy className="w-16 h-16" />
                <div>
                  <h2 className="text-3xl font-bold mb-2">Recognition Leaderboard</h2>
                  <p className="text-amber-100 text-lg">Celebrating our most recognized team members</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="space-y-4">
                {leaderboard.map((person, index) => (
                  <div
                    key={person.rank}
                    className={`p-6 rounded-xl transition-all ${
                      index === 0
                        ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-amber-300'
                        : index === 1
                        ? 'bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-300'
                        : index === 2
                        ? 'bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300'
                        : 'bg-gray-50 border-2 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      {/* Rank */}
                      <div className="flex-shrink-0">
                        {index === 0 && (
                          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                            1
                          </div>
                        )}
                        {index === 1 && (
                          <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                            2
                          </div>
                        )}
                        {index === 2 && (
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                            3
                          </div>
                        )}
                        {index > 2 && (
                          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-2xl font-bold">
                            {person.rank}
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
                        <p className="text-gray-600">{person.department}</p>
                      </div>

                      {/* Stats */}
                      <div className="flex gap-8 text-center">
                        <div>
                          <p className="text-3xl font-bold text-gray-900">{person.points}</p>
                          <p className="text-sm text-gray-600">Points</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-gray-900">{person.badges}</p>
                          <p className="text-sm text-gray-600">Badges</p>
                        </div>
                      </div>

                      {/* Trend */}
                      <div className="flex-shrink-0">
                        {person.trend === 'up' && (
                          <div className="px-3 py-2 bg-green-100 text-green-700 rounded-lg flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-semibold">Rising</span>
                          </div>
                        )}
                        {person.trend === 'same' && (
                          <div className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg">
                            <span className="text-sm font-semibold">Steady</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recognition Analytics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <h3 className="text-sm font-semibold text-blue-600 mb-2">Most Popular Badge</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-1">Star Performer</p>
                  <p className="text-sm text-gray-600">Given 42 times this month</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <h3 className="text-sm font-semibold text-purple-600 mb-2">Most Active Manager</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-1">Dr. Emily Chen</p>
                  <p className="text-sm text-gray-600">38 recognitions given</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <h3 className="text-sm font-semibold text-green-600 mb-2">Top Department</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-1">Emergency</p>
                  <p className="text-sm text-gray-600">94 recognitions received</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Export Report
                </button>
                <button className="flex-1 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
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
