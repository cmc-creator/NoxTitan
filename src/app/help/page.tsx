'use client';

import { useState } from 'react';
import { 
  Headphones, 
  Search,
  BookOpen,
  MessageSquare,
  Send,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  FileText,
  Zap,
  Users,
  Download,
  Phone,
  Mail,
  Video,
  HelpCircle
} from 'lucide-react';

export default function CustomerSupportPage() {
  const [activeTab, setActiveTab] = useState<'help' | 'tickets' | 'new-ticket'>('help');
  const [searchQuery, setSearchQuery] = useState('');

  // Customer's own tickets
  const myTickets = [
    {
      id: 'T-1001',
      title: 'Cannot export payroll report',
      status: 'in-progress',
      priority: 'high',
      created: '2 hours ago',
      lastUpdate: '30 minutes ago',
      response: 'Our team is looking into this. We\'ve identified the issue and are working on a fix.'
    },
    {
      id: 'T-0987',
      title: 'Question about California break rules',
      status: 'resolved',
      priority: 'medium',
      created: '3 days ago',
      lastUpdate: '2 days ago',
      response: 'California requires a 30-minute meal break after 5 hours of work. Here\'s our complete guide...'
    },
  ];

  // Popular help articles (same as admin side but customer-facing)
  const helpArticles = [
    {
      id: 'KB-001',
      title: 'Getting Started with TeamPulse',
      category: 'Basics',
      views: 2847,
      helpful: 234,
      icon: <Zap className="w-6 h-6" />,
      description: 'Complete guide to setting up your account and first schedule'
    },
    {
      id: 'KB-002',
      title: 'Understanding Break Laws by State',
      category: 'Compliance',
      views: 1923,
      helpful: 189,
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Comprehensive guide to meal and rest break requirements'
    },
    {
      id: 'KB-003',
      title: 'How to Export Reports',
      category: 'Reports',
      views: 1456,
      helpful: 142,
      icon: <Download className="w-6 h-6" />,
      description: 'Step-by-step instructions for exporting payroll and schedule reports'
    },
    {
      id: 'KB-004',
      title: 'Mobile App Setup for Employees',
      category: 'Mobile',
      views: 1234,
      helpful: 128,
      icon: <Phone className="w-6 h-6" />,
      description: 'Guide to helping your team download and use the mobile app'
    },
    {
      id: 'KB-005',
      title: 'Connecting Your Payroll System',
      category: 'Integrations',
      views: 987,
      helpful: 95,
      icon: <FileText className="w-6 h-6" />,
      description: 'Integration guides for ADP, Paychex, Gusto, and more'
    },
    {
      id: 'KB-006',
      title: 'Troubleshooting Sync Issues',
      category: 'Troubleshooting',
      views: 876,
      helpful: 87,
      icon: <AlertCircle className="w-6 h-6" />,
      description: 'Common sync problems and how to fix them quickly'
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Headphones className="w-10 h-10 text-blue-600" />
            Help & Support
          </h1>
          <p className="text-lg text-gray-600">Get help, search articles, or contact our support team</p>
        </div>

        {/* Quick Help Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div>
                <p className="text-2xl font-bold">24/7 AI Help</p>
                <p className="text-blue-100 text-sm">Instant answers to common questions</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <p className="text-2xl font-bold">&lt;4 Hour Response</p>
                <p className="text-blue-100 text-sm">Fast human support when needed</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <p className="text-2xl font-bold">200+ Articles</p>
                <p className="text-blue-100 text-sm">Comprehensive help library</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for help... (e.g., 'How do I export payroll?' or 'California break laws')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
            />
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            <span className="text-sm text-gray-600">Popular searches:</span>
            <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-all">
              overtime rules
            </button>
            <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-all">
              export schedules
            </button>
            <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-all">
              mobile app
            </button>
            <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-all">
              payroll integration
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('help')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'help' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Help Articles
          </button>
          <button
            onClick={() => setActiveTab('tickets')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'tickets' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            My Tickets ({myTickets.length})
          </button>
          <button
            onClick={() => setActiveTab('new-ticket')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'new-ticket' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Plus className="w-5 h-5" />
            Contact Support
          </button>
        </div>

        {/* Help Articles Tab */}
        {activeTab === 'help' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Help Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {helpArticles.map((article) => (
                  <div key={article.id} className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                        {article.icon}
                      </div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{article.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span>{article.views} views</span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          {article.helpful}
                        </span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                        Read More
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Tutorials */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Video className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Video Tutorials</h3>
              </div>
              <p className="text-gray-600 mb-4">Watch step-by-step video guides for common tasks</p>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-semibold">
                Browse Videos
              </button>
            </div>
          </div>
        )}

        {/* My Tickets Tab */}
        {activeTab === 'tickets' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">My Support Tickets</h2>
              <div className="space-y-4">
                {myTickets.map((ticket) => (
                  <div key={ticket.id} className="p-6 border-2 border-gray-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-mono text-gray-500">{ticket.id}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            ticket.status === 'resolved' ? 'bg-green-100 text-green-700' :
                            ticket.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {ticket.status.replace('-', ' ')}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${
                            ticket.priority === 'high' ? 'bg-orange-100 text-orange-700 border-orange-300' :
                            ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' :
                            'bg-blue-100 text-blue-700 border-blue-300'
                          }`}>
                            {ticket.priority.toUpperCase()}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{ticket.title}</h3>
                        <p className="text-gray-600 mb-3">{ticket.response}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Created {ticket.created}</span>
                          <span>•</span>
                          <span>Last update {ticket.lastUpdate}</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold">
                        View Thread
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* New Ticket Tab */}
        {activeTab === 'new-ticket' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What do you need help with?
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Select a category...</option>
                    <option>📅 Scheduling & Calendar</option>
                    <option>💰 Payroll</option>
                    <option>📊 Reports & Analytics</option>
                    <option>✅ Compliance & Labor Laws</option>
                    <option>🔗 Integrations</option>
                    <option>📱 Mobile App</option>
                    <option>⚙️ Account & Settings</option>
                    <option>🐛 Technical Issue</option>
                    <option>❓ Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Brief description of your issue"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Please provide as much detail as possible..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Priority
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    <button type="button" className="p-4 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-all text-left">
                      <p className="font-semibold text-gray-900">Low</p>
                      <p className="text-xs text-gray-600">Response in 24 hours</p>
                    </button>
                    <button type="button" className="p-4 border-2 border-blue-500 bg-blue-50 rounded-lg text-left">
                      <p className="font-semibold text-gray-900">Medium</p>
                      <p className="text-xs text-gray-600">Response in 4 hours</p>
                    </button>
                    <button type="button" className="p-4 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-all text-left">
                      <p className="font-semibold text-gray-900">High</p>
                      <p className="text-xs text-gray-600">Response in 1 hour</p>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Attachments (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-all cursor-pointer">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-1">Drag & drop files or click to browse</p>
                    <p className="text-xs text-gray-500">Screenshots, error messages, or documents</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Ticket
                </button>
              </form>
            </div>

            {/* Alternative Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Phone Support</h3>
                <p className="text-sm text-gray-600 mb-3">Gold & Platinum</p>
                <p className="text-blue-600 font-semibold">(555) 123-4567</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Email Support</h3>
                <p className="text-sm text-gray-600 mb-3">All plans</p>
                <p className="text-blue-600 font-semibold">support@teampulse.com</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Video Call</h3>
                <p className="text-sm text-gray-600 mb-3">Platinum only</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
