'use client';

import { useState } from 'react';
import { Lightbulb, Send, ThumbsUp, MessageSquare, Filter, AlertTriangle, CheckCircle, Clock, Eye, EyeOff, Flag } from 'lucide-react';

interface Suggestion {
  id: string;
  title: string;
  description: string;
  category: string;
  submittedBy: string;
  isAnonymous: boolean;
  timestamp: string;
  status: 'pending' | 'under-review' | 'approved' | 'implemented' | 'declined';
  votes: number;
  hasVoted?: boolean;
  comments: number;
  flagged?: boolean;
  flagReason?: string;
  response?: string;
  responseBy?: string;
  responseTime?: string;
}

export default function SuggestionBoxPage() {
  const [activeView, setActiveView] = useState<'submit' | 'browse' | 'manage'>('submit');
  const [showAnonymous, setShowAnonymous] = useState(true);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showFlagged, setShowFlagged] = useState(false);

  const suggestions: Suggestion[] = [
    {
      id: '1',
      title: 'Extended Break Room Hours',
      description: 'Can we keep the break room open later for night shift employees? It closes at 10pm but we work until midnight.',
      category: 'Workplace',
      submittedBy: 'Sarah Miller',
      isAnonymous: false,
      timestamp: '2 hours ago',
      status: 'under-review',
      votes: 24,
      hasVoted: true,
      comments: 8,
      response: 'We\'re reviewing this with facilities. Will have an answer by next week.',
      responseBy: 'Mike Johnson',
      responseTime: '1 hour ago',
    },
    {
      id: '2',
      title: 'Better Scheduling App',
      description: 'The current scheduling system is hard to use on mobile. A dedicated app would be amazing!',
      category: 'Technology',
      submittedBy: 'Anonymous',
      isAnonymous: true,
      timestamp: '1 day ago',
      status: 'approved',
      votes: 45,
      hasVoted: false,
      comments: 12,
      response: 'Great idea! We\'re already working on a mobile app that will launch next quarter.',
      responseBy: 'Rachel Green',
      responseTime: '8 hours ago',
    },
    {
      id: '3',
      title: 'Team Building Events',
      description: 'Would love to see more team activities outside of work. Maybe quarterly outings or game nights?',
      category: 'Culture',
      submittedBy: 'Alex Thompson',
      isAnonymous: false,
      timestamp: '3 days ago',
      status: 'implemented',
      votes: 67,
      hasVoted: true,
      comments: 23,
      response: 'Implemented! Check the Team Culture page for our new monthly events calendar.',
      responseBy: 'Mike Johnson',
      responseTime: '2 days ago',
    },
    {
      id: '4',
      title: 'Parking Lot Lighting',
      description: 'The parking lot is really dark at night. Better lighting would help with safety.',
      category: 'Safety',
      submittedBy: 'Emma Wilson',
      isAnonymous: false,
      timestamp: '5 days ago',
      status: 'approved',
      votes: 38,
      hasVoted: false,
      comments: 15,
    },
    {
      id: '5',
      title: 'Flexible Shift Swapping',
      description: 'Make it easier to swap shifts with coworkers without going through a manager every time.',
      category: 'Scheduling',
      submittedBy: 'Anonymous',
      isAnonymous: true,
      timestamp: '1 week ago',
      status: 'implemented',
      votes: 89,
      hasVoted: true,
      comments: 34,
      response: 'Done! Check out the new shift swap feature in the calendar.',
      responseBy: 'Rachel Green',
      responseTime: '5 days ago',
    },
    {
      id: '6',
      title: 'Better Coffee',
      description: 'The break room coffee is terrible. Can we upgrade to better quality?',
      category: 'Workplace',
      submittedBy: 'Anonymous',
      isAnonymous: true,
      timestamp: '2 weeks ago',
      status: 'pending',
      votes: 52,
      hasVoted: false,
      comments: 28,
      flagged: true,
      flagReason: 'Contains mild profanity',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: '📋' },
    { id: 'scheduling', name: 'Scheduling', icon: '📅' },
    { id: 'workplace', name: 'Workplace', icon: '🏢' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'culture', name: 'Culture', icon: '🎉' },
    { id: 'safety', name: 'Safety', icon: '🛡️' },
    { id: 'benefits', name: 'Benefits', icon: '💰' },
    { id: 'other', name: 'Other', icon: '💡' },
  ];

  const filteredSuggestions = suggestions.filter(s => {
    if (filterCategory !== 'all' && s.category.toLowerCase() !== filterCategory) return false;
    if (filterStatus !== 'all' && s.status !== filterStatus) return false;
    if (showFlagged && !s.flagged) return false;
    return true;
  });

  const stats = {
    total: suggestions.length,
    pending: suggestions.filter(s => s.status === 'pending').length,
    underReview: suggestions.filter(s => s.status === 'under-review').length,
    implemented: suggestions.filter(s => s.status === 'implemented').length,
    flagged: suggestions.filter(s => s.flagged).length,
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--page-bg)', color: 'var(--body-text)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3" style={{ color: 'var(--header-text)' }}>
            <Lightbulb className="h-10 w-10 text-yellow-500" />
            Suggestion Box
          </h1>
          <p className="text-lg opacity-80">
            Your voice matters! Share ideas to improve our workplace 💡
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="text-sm opacity-70 mb-1">Total</div>
            <div className="text-3xl font-bold" style={{ color: 'var(--header-text)' }}>{stats.total}</div>
          </div>
          <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="text-sm opacity-70 mb-1">Pending</div>
            <div className="text-3xl font-bold text-yellow-500">{stats.pending}</div>
          </div>
          <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="text-sm opacity-70 mb-1">Under Review</div>
            <div className="text-3xl font-bold text-blue-500">{stats.underReview}</div>
          </div>
          <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="text-sm opacity-70 mb-1">Implemented</div>
            <div className="text-3xl font-bold text-green-500">{stats.implemented}</div>
          </div>
          <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="text-sm opacity-70 mb-1">Flagged</div>
            <div className="text-3xl font-bold text-red-500">{stats.flagged}</div>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveView('submit')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeView === 'submit' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeView === 'submit' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeView === 'submit' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Send className="h-5 w-5" />
            Submit Idea
          </button>
          <button
            onClick={() => setActiveView('browse')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeView === 'browse' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeView === 'browse' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeView === 'browse' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Lightbulb className="h-5 w-5" />
            Browse Ideas
          </button>
          <button
            onClick={() => setActiveView('manage')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeView === 'manage' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeView === 'manage' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeView === 'manage' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Filter className="h-5 w-5" />
            Manage (Admin)
          </button>
        </div>

        {/* Submit View */}
        {activeView === 'submit' && (
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl shadow-xl" style={{ background: 'var(--card-bg)' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--header-text)' }}>
                Share Your Idea 💡
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Brief, descriptive title for your suggestion..."
                    className="w-full p-4 rounded-xl text-lg"
                    style={{ background: 'var(--calendar-bg)', border: '2px solid var(--border-color)' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select 
                    className="w-full p-4 rounded-xl text-lg"
                    style={{ background: 'var(--calendar-bg)', border: '2px solid var(--border-color)' }}
                  >
                    {categories.slice(1).map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.icon} {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Description</label>
                  <textarea
                    rows={6}
                    placeholder="Describe your idea in detail. What problem does it solve? How would it improve our workplace?"
                    className="w-full p-4 rounded-xl text-lg"
                    style={{ background: 'var(--calendar-bg)', border: '2px solid var(--border-color)' }}
                  ></textarea>
                  <div className="text-xs opacity-60 mt-2">
                    💡 Tip: Be specific and explain the benefits of your suggestion
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'var(--calendar-bg)' }}>
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={showAnonymous}
                    onChange={(e) => setShowAnonymous(e.target.checked)}
                    className="w-5 h-5 rounded"
                  />
                  <label htmlFor="anonymous" className="flex-1 cursor-pointer">
                    <div className="font-semibold flex items-center gap-2">
                      {showAnonymous ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      Submit Anonymously
                    </div>
                    <div className="text-sm opacity-70">
                      Your identity will be hidden from other employees (but visible to management)
                    </div>
                  </label>
                </div>

                <button
                  className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                  style={{ background: 'var(--primary-btn)' }}
                >
                  <Send className="h-5 w-5" />
                  Submit Suggestion
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Browse View */}
        {activeView === 'browse' && (
          <div>
            {/* Category Filter */}
            <div className="mb-6 flex gap-3 overflow-x-auto pb-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all ${
                    filterCategory === cat.id ? 'scale-105 shadow-lg' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{
                    background: filterCategory === cat.id ? 'var(--primary-btn)' : 'var(--card-bg)',
                    color: filterCategory === cat.id ? '#ffffff' : 'var(--body-text)',
                  }}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            {/* Suggestions List */}
            <div className="space-y-4">
              {filteredSuggestions.map(suggestion => (
                <div
                  key={suggestion.id}
                  className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  style={{ background: 'var(--card-bg)' }}
                >
                  <div className="flex items-start gap-4">
                    {/* Vote Button */}
                    <div className="flex flex-col items-center gap-1">
                      <button
                        className={`p-2 rounded-lg transition-all ${
                          suggestion.hasVoted ? 'bg-blue-500 text-white' : 'hover:scale-110'
                        }`}
                        style={{ background: suggestion.hasVoted ? undefined : 'var(--calendar-bg)' }}
                      >
                        <ThumbsUp className="h-5 w-5" />
                      </button>
                      <div className="font-bold text-sm">{suggestion.votes}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>
                            {suggestion.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm opacity-70">
                            <span>
                              {suggestion.isAnonymous ? '👤 Anonymous' : `👤 ${suggestion.submittedBy}`}
                            </span>
                            <span>•</span>
                            <span>{suggestion.timestamp}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{categories.find(c => c.id === suggestion.category.toLowerCase())?.icon}</span>
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                              suggestion.status === 'implemented' ? 'bg-green-500' :
                              suggestion.status === 'approved' ? 'bg-blue-500' :
                              suggestion.status === 'under-review' ? 'bg-yellow-500' :
                              suggestion.status === 'declined' ? 'bg-red-500' :
                              'bg-gray-500'
                            }`}
                          >
                            {suggestion.status === 'implemented' ? '✓ Implemented' :
                             suggestion.status === 'approved' ? '✓ Approved' :
                             suggestion.status === 'under-review' ? '⏳ Under Review' :
                             suggestion.status === 'declined' ? '✗ Declined' :
                             '⏱️ Pending'}
                          </div>
                        </div>
                      </div>

                      <p className="mb-4 opacity-90">{suggestion.description}</p>

                      {/* Management Response */}
                      {suggestion.response && (
                        <div className="mb-4 p-4 rounded-lg border-l-4 border-blue-500" style={{ background: 'var(--calendar-bg)' }}>
                          <div className="flex items-center gap-2 mb-2">
                            <MessageSquare className="h-4 w-4 text-blue-500" />
                            <span className="font-semibold text-sm">Management Response</span>
                            <span className="text-xs opacity-60">• {suggestion.responseBy} • {suggestion.responseTime}</span>
                          </div>
                          <p className="text-sm">{suggestion.response}</p>
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center gap-4 text-sm opacity-70">
                        <button className="flex items-center gap-1 hover:opacity-100">
                          <MessageSquare className="h-4 w-4" />
                          {suggestion.comments} comments
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Manage View (Admin) */}
        {activeView === 'manage' && (
          <div>
            {/* Filters */}
            <div className="mb-6 p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--header-text)' }}>
                Filters & Moderation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Status</label>
                  <select 
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full p-3 rounded-lg"
                    style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}
                  >
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="under-review">Under Review</option>
                    <option value="approved">Approved</option>
                    <option value="implemented">Implemented</option>
                    <option value="declined">Declined</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select 
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full p-3 rounded-lg"
                    style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Content Filter</label>
                  <button
                    onClick={() => setShowFlagged(!showFlagged)}
                    className={`w-full p-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                      showFlagged ? 'bg-red-500 text-white' : ''
                    }`}
                    style={{ background: showFlagged ? undefined : 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}
                  >
                    <Flag className="h-4 w-4" />
                    {showFlagged ? 'Showing Flagged Only' : 'Show Flagged Only'}
                  </button>
                </div>
              </div>
            </div>

            {/* Admin Suggestions List */}
            <div className="space-y-4">
              {filteredSuggestions.map(suggestion => (
                <div
                  key={suggestion.id}
                  className={`p-6 rounded-xl shadow-lg ${suggestion.flagged ? 'border-2 border-red-500' : ''}`}
                  style={{ background: 'var(--card-bg)' }}
                >
                  {suggestion.flagged && (
                    <div className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      <div>
                        <div className="font-bold text-red-500">Content Flagged</div>
                        <div className="text-sm">{suggestion.flagReason}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>
                        {suggestion.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm opacity-70 mb-3">
                        <span>👤 {suggestion.submittedBy}</span>
                        {suggestion.isAnonymous && <span className="px-2 py-0.5 rounded-full bg-gray-500 text-white text-xs">Anonymous to staff</span>}
                        <span>•</span>
                        <span>{suggestion.timestamp}</span>
                      </div>
                      <p className="mb-4">{suggestion.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      className="px-4 py-2 rounded-lg font-semibold bg-green-500 text-white hover:scale-105 transition-all flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4" />
                      Approve
                    </button>
                    <button
                      className="px-4 py-2 rounded-lg font-semibold bg-blue-500 text-white hover:scale-105 transition-all flex items-center gap-2"
                    >
                      <Clock className="h-4 w-4" />
                      Under Review
                    </button>
                    <button
                      className="px-4 py-2 rounded-lg font-semibold bg-yellow-500 text-white hover:scale-105 transition-all flex items-center gap-2"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Respond
                    </button>
                    <button
                      className="px-4 py-2 rounded-lg font-semibold bg-red-500 text-white hover:scale-105 transition-all flex items-center gap-2"
                    >
                      <Flag className="h-4 w-4" />
                      {suggestion.flagged ? 'Unflag' : 'Flag'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
