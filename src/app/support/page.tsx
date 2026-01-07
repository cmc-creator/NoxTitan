'use client';

import { useState } from 'react';
import { 
  Headphones, 
  Ticket,
  MessageSquare,
  BookOpen,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  Zap,
  Search,
  Filter,
  Plus,
  Send,
  Star,
  ThumbsUp,
  Bot,
  Crown,
  Mail,
  Phone,
  Video,
  FileText,
  Download,
  ExternalLink,
  Monitor,
  Share2,
  Eye,
  Mouse,
  ScreenShare
} from 'lucide-react';

interface SupportTicket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: string;
  customer: string;
  tier: 'free' | 'gold' | 'platinum';
  created: string;
  updated: string;
  assignedTo?: string;
  aiSuggestion?: string;
}

interface KnowledgeArticle {
  id: string;
  title: string;
  category: string;
  views: number;
  helpful: number;
  icon: React.ReactNode;
  content: string;
  tags: string[];
}

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState<'tickets' | 'knowledge' | 'analytics' | 'settings'>('tickets');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewTicket, setShowNewTicket] = useState(false);

  // Sample tickets
  const tickets: SupportTicket[] = [
    {
      id: 'T-1001',
      title: 'Cannot export payroll report',
      description: 'When I try to export the payroll report to CSV, I get an error message.',
      status: 'open',
      priority: 'high',
      category: 'Payroll',
      customer: 'Sarah Johnson - Memorial Hospital',
      tier: 'platinum',
      created: '2 hours ago',
      updated: '2 hours ago',
      aiSuggestion: 'Common issue - browser cache. Suggest clearing cache or trying different browser.'
    },
    {
      id: 'T-1002',
      title: 'How do I set up break rules for California?',
      description: 'Need help configuring the meal and rest break requirements for CA employees.',
      status: 'in-progress',
      priority: 'medium',
      category: 'Compliance',
      customer: 'Mike Thompson - Retail Plus',
      tier: 'gold',
      created: '5 hours ago',
      updated: '1 hour ago',
      assignedTo: 'You',
      aiSuggestion: 'Direct to CA compliance guide. AI can provide step-by-step setup.'
    },
    {
      id: 'T-1003',
      title: 'Schedule not syncing to mobile app',
      description: 'Employees report that schedule changes are not appearing in their mobile app.',
      status: 'open',
      priority: 'urgent',
      category: 'Technical',
      customer: 'Lisa Anderson - Downtown Cafe',
      tier: 'gold',
      created: '30 minutes ago',
      updated: '30 minutes ago',
      aiSuggestion: 'Sync issue detected. Suggest checking notification settings and app version.'
    },
    {
      id: 'T-1004',
      title: 'Question about overtime calculations',
      description: 'Want to verify the overtime calculation for weekly hours over 40.',
      status: 'resolved',
      priority: 'low',
      category: 'General',
      customer: 'John Davis - Tech Solutions',
      tier: 'free',
      created: '1 day ago',
      updated: '3 hours ago',
      assignedTo: 'You',
      aiSuggestion: 'Standard overtime question - AI already provided comprehensive answer.'
    },
  ];

  // Knowledge base articles
  const articles: KnowledgeArticle[] = [
    {
      id: 'KB-001',
      title: 'Getting Started Guide',
      category: 'Basics',
      views: 2847,
      helpful: 234,
      icon: <Zap className="w-6 h-6" />,
      content: 'Complete guide to setting up your TeamPulse account...',
      tags: ['setup', 'onboarding', 'basics']
    },
    {
      id: 'KB-002',
      title: 'Understanding Break Laws by State',
      category: 'Compliance',
      views: 1923,
      helpful: 189,
      icon: <BookOpen className="w-6 h-6" />,
      content: 'Comprehensive guide to meal and rest break requirements...',
      tags: ['compliance', 'breaks', 'labor laws']
    },
    {
      id: 'KB-003',
      title: 'How to Export Reports',
      category: 'Reports',
      views: 1456,
      helpful: 142,
      icon: <Download className="w-6 h-6" />,
      content: 'Step-by-step instructions for exporting various reports...',
      tags: ['reports', 'export', 'data']
    },
    {
      id: 'KB-004',
      title: 'Mobile App Setup',
      category: 'Mobile',
      views: 1234,
      helpful: 128,
      icon: <Phone className="w-6 h-6" />,
      content: 'Guide to downloading and configuring the mobile app...',
      tags: ['mobile', 'app', 'setup']
    },
    {
      id: 'KB-005',
      title: 'Payroll Integration Guide',
      category: 'Integrations',
      views: 987,
      helpful: 95,
      icon: <FileText className="w-6 h-6" />,
      content: 'Connect TeamPulse with your payroll system...',
      tags: ['payroll', 'integration', 'setup']
    },
    {
      id: 'KB-006',
      title: 'Troubleshooting Sync Issues',
      category: 'Troubleshooting',
      views: 876,
      helpful: 87,
      icon: <AlertCircle className="w-6 h-6" />,
      content: 'Common sync problems and how to fix them...',
      tags: ['troubleshooting', 'sync', 'technical']
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-700 border-red-300';
      case 'high': return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      default: return 'bg-blue-100 text-blue-700 border-blue-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-green-100 text-green-700';
      case 'in-progress': return 'bg-blue-100 text-blue-700';
      case 'closed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-purple-100 text-purple-700';
    }
  };

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return <Crown className="w-4 h-4 text-purple-600" />;
      case 'gold':
        return <Star className="w-4 h-4 text-amber-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Headphones className="w-10 h-10 text-blue-600" />
            Technical Support Center
          </h1>
          <p className="text-lg text-gray-600">AI-powered support system to help you help your customers efficiently</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <Ticket className="w-8 h-8 opacity-80" />
              <span className="text-3xl font-bold">12</span>
            </div>
            <p className="text-blue-100">Open Tickets</p>
            <p className="text-sm text-blue-200 mt-1">3 urgent, 5 high priority</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 opacity-80" />
              <span className="text-3xl font-bold">89%</span>
            </div>
            <p className="text-green-100">AI Resolution Rate</p>
            <p className="text-sm text-green-200 mt-1">↑ 12% from last month</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 opacity-80" />
              <span className="text-3xl font-bold">2.3h</span>
            </div>
            <p className="text-purple-100">Avg Response Time</p>
            <p className="text-sm text-purple-200 mt-1">Target: &lt;4 hours</p>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <ThumbsUp className="w-8 h-8 opacity-80" />
              <span className="text-3xl font-bold">4.8</span>
            </div>
            <p className="text-amber-100">Customer Satisfaction</p>
            <p className="text-sm text-amber-200 mt-1">Out of 5.0 stars</p>
          </div>
        </div>

        {/* AI Assistant Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white mb-8">
          <div className="flex items-start gap-4">
            <Bot className="w-12 h-12 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">AI Assistant is Handling 70% of Support Questions!</h3>
              <p className="text-purple-100 mb-3">
                The AI is automatically responding to common questions about scheduling, compliance, and basic troubleshooting. 
                You only need to handle complex or escalated issues.
              </p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-purple-200">AI Responses Today</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">94%</p>
                  <p className="text-purple-200">Customer Satisfaction</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">18hrs</p>
                  <p className="text-purple-200">Time Saved This Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('tickets')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'tickets' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Ticket className="w-5 h-5" />
            Support Tickets
          </button>
          <button
            onClick={() => setActiveTab('knowledge')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'knowledge' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Knowledge Base
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'analytics' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'settings' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Zap className="w-5 h-5" />
            Automation
          </button>
        </div>

        {/* Tickets Tab */}
        {activeTab === 'tickets' && (
          <div className="space-y-6">
            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex gap-4 items-center flex-wrap">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search tickets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
                <button 
                  onClick={() => setShowNewTicket(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  New Ticket
                </button>
              </div>
            </div>

            {/* Tickets List */}
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all border-l-4 border-blue-600">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-gray-500">{ticket.id}</span>
                        {getTierBadge(ticket.tier)}
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority.toUpperCase()}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(ticket.status)}`}>
                          {ticket.status.replace('-', ' ')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{ticket.title}</h3>
                      <p className="text-gray-600 mb-3">{ticket.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {ticket.customer}
                        </span>
                        <span>•</span>
                        <span>{ticket.category}</span>
                        <span>•</span>
                        <span>Created {ticket.created}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold">
                        View Details
                      </button>
                      {(ticket.tier === 'gold' || ticket.tier === 'platinum') && (
                        <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all font-semibold flex items-center justify-center gap-2">
                          <Monitor className="w-4 h-4" />
                          Remote Connect
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Remote Support Options */}
                  {(ticket.tier === 'gold' || ticket.tier === 'platinum') && ticket.status === 'in-progress' && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-4 mt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Monitor className="w-5 h-5 text-green-600" />
                        <h4 className="font-bold text-green-900">Remote Support Available</h4>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">Premium Feature</span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <button className="p-3 bg-white border-2 border-green-300 rounded-lg hover:border-green-500 hover:shadow-md transition-all">
                          <Video className="w-5 h-5 text-green-600 mx-auto mb-2" />
                          <p className="text-xs font-semibold text-gray-900">Video Call</p>
                          <p className="text-xs text-gray-600">Face-to-face</p>
                        </button>
                        <button className="p-3 bg-white border-2 border-green-300 rounded-lg hover:border-green-500 hover:shadow-md transition-all">
                          <ScreenShare className="w-5 h-5 text-green-600 mx-auto mb-2" />
                          <p className="text-xs font-semibold text-gray-900">Screen Share</p>
                          <p className="text-xs text-gray-600">View only</p>
                        </button>
                        <button className="p-3 bg-white border-2 border-green-300 rounded-lg hover:border-green-500 hover:shadow-md transition-all">
                          <Mouse className="w-5 h-5 text-green-600 mx-auto mb-2" />
                          <p className="text-xs font-semibold text-gray-900">Remote Control</p>
                          <p className="text-xs text-gray-600">Full access</p>
                        </button>
                        <button className="p-3 bg-white border-2 border-green-300 rounded-lg hover:border-green-500 hover:shadow-md transition-all">
                          <Eye className="w-5 h-5 text-green-600 mx-auto mb-2" />
                          <p className="text-xs font-semibold text-gray-900">Co-Browse</p>
                          <p className="text-xs text-gray-600">Guide them</p>
                        </button>
                      </div>
                      <div className="mt-3 flex items-center gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          End-to-end encrypted
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Session recorded for quality
                        </span>
                      </div>
                    </div>
                  )}

                  {/* AI Suggestion */}
                  {ticket.aiSuggestion && (
                    <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 flex items-start gap-3">
                      <Bot className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-purple-900 mb-1">AI Suggestion:</p>
                        <p className="text-sm text-purple-700">{ticket.aiSuggestion}</p>
                      </div>
                      <button className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-all">
                        Use This
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Knowledge Base Tab */}
        {activeTab === 'knowledge' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Self-Service Knowledge Base</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Article
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((article) => (
                  <div key={article.id} className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                        {article.icon}
                      </div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{article.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {article.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        {article.helpful}
                      </span>
                    </div>
                    <div className="flex gap-2 flex-wrap mb-3">
                      {article.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                      Read Article
                      <ExternalLink className="w-4 h-4" />
                    </button>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Analytics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                  <h3 className="text-sm font-semibold text-blue-600 mb-2">Most Common Issues</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Payroll export errors</span>
                      <span className="font-bold text-gray-900">24</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Schedule sync problems</span>
                      <span className="font-bold text-gray-900">18</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Compliance questions</span>
                      <span className="font-bold text-gray-900">15</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <h3 className="text-sm font-semibold text-green-600 mb-2">Resolution Times</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">AI Auto-Resolved</span>
                      <span className="font-bold text-gray-900">&lt;5 min</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Simple Issues</span>
                      <span className="font-bold text-gray-900">2.3 hrs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Complex Issues</span>
                      <span className="font-bold text-gray-900">8.7 hrs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Automation Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Automation Settings</h2>
              
              <div className="space-y-6">
                {/* Auto-Response */}
                <div className="p-6 border-2 border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Bot className="w-6 h-6 text-purple-600" />
                      <div>
                        <h3 className="font-bold text-gray-900">AI Auto-Response</h3>
                        <p className="text-sm text-gray-600">Let AI handle common questions automatically</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">Currently handling: Scheduling questions, Basic compliance, Troubleshooting, Account setup</p>
                </div>

                {/* Priority Routing */}
                <div className="p-6 border-2 border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Crown className="w-6 h-6 text-amber-600" />
                      <div>
                        <h3 className="font-bold text-gray-900">Priority Routing</h3>
                        <p className="text-sm text-gray-600">Platinum and Gold customers get priority</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-purple-600">Platinum</p>
                      <p className="text-gray-600">&lt;1 hour response</p>
                    </div>
                    <div>
                      <p className="font-semibold text-amber-600">Gold</p>
                      <p className="text-gray-600">&lt;4 hours response</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-600">Free</p>
                      <p className="text-gray-600">&lt;24 hours response</p>
                    </div>
                  </div>
                </div>

                {/* Email Notifications */}
                <div className="p-6 border-2 border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-bold text-gray-900">Email Notifications</h3>
                        <p className="text-sm text-gray-600">Get notified about new tickets and urgent issues</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <input 
                    type="email" 
                    placeholder="support@teampulse.com" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Remote Support Tools */}
                <div className="p-6 border-2 border-green-200 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Monitor className="w-6 h-6 text-green-600" />
                      <div>
                        <h3 className="font-bold text-gray-900">Remote Support Tools</h3>
                        <p className="text-sm text-gray-600">Connect remotely to customer screens (Gold & Platinum only)</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-3">Available Connection Methods:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Video className="w-4 h-4 text-green-600" />
                          <span>Video Call (WebRTC)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ScreenShare className="w-4 h-4 text-green-600" />
                          <span>Screen Share (View Only)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mouse className="w-4 h-4 text-green-600" />
                          <span>Remote Control (Full Access)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Eye className="w-4 h-4 text-green-600" />
                          <span>Co-Browsing (Guided)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Integrated Tools:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                              <Monitor className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-semibold">Built-in Screen Share</p>
                              <p className="text-xs text-gray-600">WebRTC-based, no install needed</p>
                            </div>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">Active</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                              <ExternalLink className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                              <p className="font-semibold">TeamViewer Integration</p>
                              <p className="text-xs text-gray-600">For advanced remote control</p>
                            </div>
                          </div>
                          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs font-semibold hover:bg-gray-300 transition-all">
                            Configure
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-amber-100 rounded flex items-center justify-center">
                              <ExternalLink className="w-4 h-4 text-amber-600" />
                            </div>
                            <div>
                              <p className="font-semibold">AnyDesk Integration</p>
                              <p className="text-xs text-gray-600">Alternative remote desktop</p>
                            </div>
                          </div>
                          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs font-semibold hover:bg-gray-300 transition-all">
                            Configure
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-blue-900">
                        <p className="font-semibold mb-1">Security & Privacy:</p>
                        <ul className="space-y-1 text-blue-800">
                          <li>• All sessions are end-to-end encrypted</li>
                          <li>• Customer must approve each connection request</li>
                          <li>• Sessions auto-recorded for quality & training</li>
                          <li>• Customers can end session anytime</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                        <Monitor className="w-5 h-5" />
                        Test Remote Connection
                      </button>
                      <button className="flex-1 py-3 bg-white border-2 border-green-600 text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-all">
                        View Documentation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
