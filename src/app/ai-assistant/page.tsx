'use client';

import { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Shield, 
  TrendingUp, 
  Brain,
  Zap,
  BookOpen,
  CheckCircle,
  Globe,
  Clock,
  Award,
  AlertCircle,
  Rocket,
  Users,
  FileText,
  BarChart3,
  Lightbulb,
  Crown
} from 'lucide-react';

export default function AIAssistantPage() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const features = [
    {
      id: 'compliance',
      icon: <Shield className="w-8 h-8" />,
      title: 'Real-Time Compliance Monitoring',
      description: 'Stay ahead of regulations',
      color: 'from-blue-500 to-cyan-600',
      details: 'Our AI continuously monitors federal and state labor laws, industry regulations, and compliance requirements. Get instant alerts when laws change that affect your business.',
      capabilities: [
        'Monitors 50 state labor laws in real-time',
        'Tracks FLSA, FMLA, ADA, and other federal regulations',
        'Industry-specific compliance (Healthcare, Retail, Hospitality, etc.)',
        'Automatic updates when laws change',
        'Plain-English explanations of complex regulations'
      ]
    },
    {
      id: 'learning',
      icon: <Brain className="w-8 h-8" />,
      title: 'Continuous Learning',
      description: 'Gets smarter every day',
      color: 'from-purple-500 to-pink-600',
      details: 'The AI learns from every interaction, court decision, and regulatory update. It adapts to your industry and business needs.',
      capabilities: [
        'Daily updates from legal databases',
        'Learns from court decisions and precedents',
        'Adapts to your specific industry needs',
        'Improves accuracy with every interaction',
        'Custom learning for your business patterns'
      ]
    },
    {
      id: 'optimization',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Smart Schedule Optimization',
      description: 'Reduce costs, improve efficiency',
      color: 'from-green-500 to-emerald-600',
      details: 'AI analyzes your scheduling patterns and suggests optimizations to reduce labor costs while maintaining service quality.',
      capabilities: [
        'Identifies overtime patterns before they happen',
        'Suggests optimal shift timing and coverage',
        'Predicts busy periods based on historical data',
        'Recommends cross-training opportunities',
        'Calculates ROI for schedule changes'
      ]
    },
    {
      id: 'predictions',
      icon: <Zap className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'See problems before they happen',
      color: 'from-amber-500 to-orange-600',
      details: 'Advanced machine learning predicts potential issues like compliance violations, overtime spikes, and staffing shortages.',
      capabilities: [
        'Predicts compliance risks before violations occur',
        'Forecasts labor costs 3 months ahead',
        'Identifies potential scheduling conflicts',
        'Warns about approaching deadlines',
        'Suggests preventative actions'
      ]
    },
    {
      id: 'assistant',
      icon: <Bot className="w-8 h-8" />,
      title: '24/7 AI Chat Assistant',
      description: 'Friendly help anytime',
      color: 'from-indigo-500 to-purple-600',
      details: 'Chat with your AI assistant anytime to get answers about labor laws, scheduling questions, and best practices. Complete with occasional dad jokes!',
      capabilities: [
        'Answers questions in plain English',
        'Provides sources and confidence levels',
        'Available 24/7, never takes a break',
        'Friendly personality with humor',
        'Context-aware responses'
      ]
    },
    {
      id: 'industry',
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Industry Expertise',
      description: 'Knows your industry inside out',
      color: 'from-rose-500 to-red-600',
      details: 'Specialized knowledge for healthcare, retail, hospitality, construction, and more. Understands industry-specific regulations and best practices.',
      capabilities: [
        'Healthcare: HIPAA, Joint Commission, patient ratios',
        'Retail: Fair Labor Standards, POS compliance',
        'Hospitality: Tip pooling, service industry rules',
        'Construction: Safety regulations, union requirements',
        'And 8 more industries covered'
      ]
    }
  ];

  const stats = [
    { label: 'Laws Monitored', value: '2,500+', icon: <FileText className="w-6 h-6" /> },
    { label: 'Daily Updates', value: '150+', icon: <Clock className="w-6 h-6" /> },
    { label: 'Accuracy Rate', value: '99.7%', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Industries Covered', value: '12', icon: <Globe className="w-6 h-6" /> }
  ];

  const recentUpdates = [
    {
      date: 'Jan 1, 2026',
      title: 'California Minimum Wage Increase',
      description: 'Updated minimum wage rates for CA effective January 1, 2026',
      impact: 'High',
      affected: '3 employees'
    },
    {
      date: 'Dec 28, 2025',
      title: 'OSHA Safety Training Update',
      description: 'New training requirements for healthcare workers',
      impact: 'Medium',
      affected: '24 employees'
    },
    {
      date: 'Dec 15, 2025',
      title: 'Federal Overtime Rule Clarification',
      description: 'DOL clarifies exempt employee classifications',
      impact: 'Medium',
      affected: '5 employees'
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl text-white shadow-lg">
              <Bot className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                AI Assistant
                <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-bold rounded-full flex items-center gap-1">
                  <Crown className="w-4 h-4" />
                  Premium
                </span>
              </h1>
              <p className="text-lg text-gray-600">Your intelligent compliance and optimization partner</p>
            </div>
          </div>
        </div>

        {/* Premium Banner */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8" />
              <h2 className="text-3xl font-bold">AI-Powered Intelligence</h2>
            </div>
            <p className="text-purple-100 text-lg mb-6 max-w-3xl">
              Our AI continuously learns and monitors thousands of labor laws, regulations, and industry standards across all 50 states. 
              Get instant answers, proactive alerts, and optimization suggestions - all with a friendly personality that includes the occasional dad joke! 😄
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all">
                Try AI Chat Now
              </button>
              <button className="px-6 py-3 bg-white/20 text-white rounded-xl font-bold hover:bg-white/30 transition-all backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                  {stat.icon}
                </div>
                <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
              </div>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setSelectedFeature(feature.id === selectedFeature ? null : feature.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${feature.color} p-6 text-white`}>
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-90">{feature.description}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{feature.details}</p>
                  {selectedFeature === feature.id && (
                    <div className="space-y-2 mt-4 pt-4 border-t border-gray-200">
                      <p className="font-semibold text-gray-900 text-sm mb-2">Key Capabilities:</p>
                      {feature.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{capability}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <button className="mt-4 text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center gap-1">
                    {selectedFeature === feature.id ? 'Show less' : 'Learn more'} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent AI Updates */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-purple-600" />
              Recent Knowledge Updates
            </h2>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Live
            </span>
          </div>
          
          <div className="space-y-4">
            {recentUpdates.map((update, index) => (
              <div key={index} className="p-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-gray-500">{update.date}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        update.impact === 'High' ? 'bg-red-100 text-red-700' :
                        update.impact === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {update.impact} Impact
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{update.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{update.description}</p>
                    <p className="text-xs text-purple-600 font-semibold">
                      Affects: {update.affected}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all text-sm font-semibold ml-4">
                    Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-purple-600" />
            How the AI Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Continuous Monitoring</h3>
              <p className="text-gray-600 text-sm">
                AI scans thousands of legal databases, government sites, and industry publications daily for updates
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Smart Analysis</h3>
              <p className="text-gray-600 text-sm">
                Machine learning analyzes changes and determines how they affect your specific business and employees
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Proactive Alerts</h3>
              <p className="text-gray-600 text-sm">
                Get notified immediately about changes that matter to you, with clear action steps in plain English
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
