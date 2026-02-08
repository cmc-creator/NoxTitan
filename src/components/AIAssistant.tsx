'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  TrendingUp,
  Shield,
  AlertCircle,
  Lightbulb,
  CheckCircle,
  Calendar,
  Users,
  Clock,
  DollarSign,
  BookOpen,
  Smile,
  Info
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  category?: 'compliance' | 'scheduling' | 'optimization' | 'general' | 'joke';
  confidence?: number;
}

interface Suggestion {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sales-focused conversation starters
  const suggestions: Suggestion[] = [
    {
      id: '1',
      title: 'Product Features',
      description: 'Learn about scheduling, payroll, and compliance tools',
      icon: <Sparkles className="w-5 h-5" />,
      action: 'Tell me more',
      priority: 'high',
      category: 'general'
    },
    {
      id: '2',
      title: 'Request a Demo',
      description: 'See NyxTitan in action with a personalized demo',
      icon: <Calendar className="w-5 h-5" />,
      action: 'Schedule demo',
      priority: 'high',
      category: 'general'
    },
    {
      id: '3',
      title: 'Pricing Information',
      description: 'Find the perfect plan for your business size',
      icon: <DollarSign className="w-5 h-5" />,
      action: 'View pricing',
      priority: 'medium',
      category: 'general'
    },
    {
      id: '4',
      title: 'Contact Sales',
      description: 'Speak with our team about your specific needs',
      icon: <Users className="w-5 h-5" />,
      action: 'Get in touch',
      priority: 'medium',
      category: 'general'
    },
  ];

  // Dad jokes collection
  const dadJokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
    "What do you call a fake noodle? An impasta! 🍝",
    "Why don't scientists trust atoms? Because they make up everything! ⚛️",
    "What do you call a bear with no teeth? A gummy bear! 🐻",
    "Why did the bicycle fall over? Because it was two-tired! 🚴",
    "What do you call cheese that isn't yours? Nacho cheese! 🧀",
    "Why did the coffee file a police report? It got mugged! ☕",
    "What do you call a factory that makes okay products? A satisfactory! 🏭",
    "Why did the math book look so sad? Because it had too many problems! 📚",
    "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks! 🦖"
  ];

  useEffect(() => {
    if (isOpen) {
      // Welcome message when first opened
      if (messages.length === 0) {
        setTimeout(() => {
          addAIMessage(
            "👋 Welcome to NyxTitan! I'm here to help you learn about our all-in-one business management platform.\n\n💼 I can answer questions about:\n• Features & capabilities\n• Pricing & plans\n• Scheduling a demo\n• Getting started\n\nWhat would you like to know?",
            'general'
          );
        }, 500);
      }
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addAIMessage = (content: string, category?: Message['category'], confidence?: number) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content,
      timestamp: new Date(),
      category,
      confidence
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setShowSuggestions(false);

    // Simulate AI typing
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsTyping(false);

    // Generate AI response based on message content
    const lowerMessage = message.toLowerCase();
    let response = '';
    let category: Message['category'] = 'general';
    let confidence = 0.95;

    // Sales-focused responses
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      response = "💰 **Pricing Information**\n\nNyxTitan offers flexible pricing to fit businesses of all sizes:\n\n**Professional** - $499/month\n• Up to 50 employees\n• Advanced scheduling & time tracking\n• Basic integrations\n• Email support\n\n**Enterprise** - $1,499/month\n• Up to 250 employees  \n• Oracle AI, Compliance Suite, Asset Vault\n• All 60+ integrations\n• Priority support\n\n**Titan** - $2,999/month\n• Unlimited employees\n• White-glove implementation\n• Custom integrations\n• Dedicated account manager\n\n💡 We also save businesses $75K-$139K annually vs. competitors! Want to see a detailed cost comparison?";
      category = 'general';
    } else if (lowerMessage.includes('demo') || lowerMessage.includes('trial')) {
      response = "📺 **Request a Demo**\n\nI'd love to show you NyxTitan in action! Our demos are personalized to your business needs.\n\n**What we'll cover:**\n✅ Live walkthrough of key features\n✅ Your specific use cases\n✅ ROI calculation for your business\n✅ Q&A with our team\n\n**To schedule:**\nPlease provide your:\n• Name\n• Company name\n• Email address\n• Phone number (optional)\n• Best time to meet\n\nOr click 'Request Demo' on our landing page! 🚀";
      category = 'general';
    } else if (lowerMessage.includes('feature') || lowerMessage.includes('what can') || lowerMessage.includes('capabilities')) {
      response = "✨ **NyxTitan Features**\n\nWe're an all-in-one platform that replaces 8+ separate tools:\n\n**Core Features:**\n📅 Advanced scheduling (drag & drop)\n⏰ Time & attendance tracking\n💰 Payroll calculations\n👥 HR management & onboarding\n📊 Reports & analytics\n\n**Enterprise Features:**\n🔮 Oracle AI - Predictive analytics\n🛡️ Compliance Suite (OSHA, CMS, Joint Commission)\n🏦 Asset Vault - Equipment tracking\n🔒 Sentinel - Visitor management\n🎮 Guild - Gamification system\n\n**Average Savings:** $75K-$139K/year vs. competitors!\n\nWhich features interest you most?";
      category = 'general';
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('sales') || lowerMessage.includes('talk to someone')) {
      response = "📞 **Contact Our Team**\n\nI'd be happy to connect you with our sales team!\n\n**Please share:**\n• Your name\n• Company name\n• Email address\n• Phone number\n• What you'd like to discuss\n\nOur team typically responds within 2 hours during business hours.\n\nAlternatively:\n• Email: sales@nyxtitan.com\n• Schedule a demo on our website\n• Continue chatting with me - I can answer most questions!\n\nWhat works best for you?";
      category = 'general';
    } else if (lowerMessage.includes('email') && (lowerMessage.includes('@') || lowerMessage.includes('name'))) {
      response = "✅ **Thank you!**\n\nI've captured your information. Our team will reach out to you within 2 business hours!\n\nIn the meantime:\n• Check out our pricing page for detailed plan comparisons\n• Watch our demo video on the landing page\n• Browse our feature documentation\n\n**Quick question:** What's your biggest challenge with employee management right now? This helps us prepare for our conversation! 💼";
      category = 'general';
    } else if (lowerMessage.includes('schedule') || lowerMessage.includes('shift') || lowerMessage.includes('calendar')) {
      response = "📅 **Scheduling Features**\n\nOur scheduling system is built for simplicity and power:\n\n**Key Features:**\n• Drag-and-drop shift assignment\n• Automated shift templates\n• Conflict detection\n• Employee availability tracking\n• Shift swap requests\n• Mobile app access\n• Calendar sync\n\n**Results:**\n✅ 70% faster schedule creation\n✅ 90% reduction in scheduling conflicts\n✅ Save 3-5 hours per week\n\nWant to see it in action? Schedule a demo! 🚀";
      category = 'general';
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      response = "Hello! 👋 Welcome to NyxTitan!\n\nI'm your virtual sales assistant. I can help you:\n✅ Learn about our features\n✅ Compare pricing plans\n✅ Schedule a demo\n✅ Answer questions about the platform\n✅ Connect you with our team\n\nWhat brings you here today?";
      category = 'general';
    } else if (lowerMessage.includes('save') || lowerMessage.includes('roi') || lowerMessage.includes('benefit')) {
      response = "💰 **Cost Savings & ROI**\n\nBusinesses using NyxTitan typically save:\n\n**Annual Subscription Savings:** $75K-$139K\n(vs. buying 8+ separate tools)\n\n**Operational Savings:**\n• $480K from reduced turnover\n• 15 hours/week of admin time saved\n• 8-12% reduction in labor costs\n• Faster scheduling = 3-5 hours/week saved\n\n**Payback Period:** 3 weeks average\n\n**Total Year 1 Impact:** $600K+ saved\n\nWant to calculate ROI for your specific business? I can help! 📊";
      category = 'general';
    } else {
      response = "I'm here to help you learn about NyxTitan! 💼\n\nI can answer questions about:\n• Features & capabilities\n• Pricing & plans ($499-$2,999/month)\n• ROI & cost savings\n• Scheduling a demo\n• Getting in touch with our team\n\nWhat would you like to know? Or if you'd like to speak with someone directly, I can connect you with our sales team! 📞";
      category = 'general';
      confidence = 0.85;
    }

    addAIMessage(response, category, confidence);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setShowSuggestions(false);
    
    // Simulate clicking on a suggestion
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: `Tell me about: ${suggestion.title}`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      let response = '';
      if (suggestion.title === 'Product Features') {
        response = `✨ **Product Features**\n\nNyxTitan is an all-in-one platform that replaces 8+ separate tools:\n\n**Core Capabilities:**\n📅 Advanced Scheduling - Drag & drop, templates, conflict detection\n⏰ Time Tracking - Digital time clock, overtime alerts\n💰 Payroll - Automated calculations, direct deposit\n👥 HR Management - Onboarding, documents, performance\n📊 Analytics - Real-time insights, custom reports\n\n**Enterprise Add-ons:**\n🔮 Oracle AI - Predictive analytics\n🛡️ Compliance Suite - OSHA, CMS, Joint Commission\n🏦 Asset Vault - Equipment tracking\n🎮 Guild - Gamification\n\n**Average Result:** $75K-$139K saved annually!\n\nWhich features interest you most?`;
      } else if (suggestion.title === 'Request a Demo') {
        response = `📺 **Schedule Your Demo**\n\nI'd love to show you NyxTitan in action!\n\n**What we'll cover:**\n✅ Live platform walkthrough\n✅ Your specific use cases\n✅ ROI calculation\n✅ Implementation process\n✅ Q&A with our team\n\n**To get started, please share:**\n• Your name\n• Company name\n• Email\n• Phone (optional)\n• Preferred time\n\nOr visit our demo page and fill out the form! 🚀`;
      } else if (suggestion.title === 'Pricing Information') {
        response = `💰 **Pricing Plans**\n\n**Professional** - $499/month\n• 50 employees\n• Core features + payroll\n• 10 integrations\n• Email support\n\n**Enterprise** - $1,499/month\n• 250 employees\n• Oracle AI, Compliance, Asset Vault\n• 60+ integrations\n• Priority support\n\n**Titan** - $2,999/month\n• Unlimited employees\n• White-glove service\n• Custom integrations\n• Dedicated manager\n\n💡 **Savings:** $75K-$139K/year vs. competitors!\n\nWant a custom quote for your business?`;
      } else {
        response = `📞 **Contact Our Team**\n\nI'd be happy to connect you!\n\n**Please provide:**\n• Name\n• Company\n• Email\n• Phone number\n• What you'd like to discuss\n\nOur sales team responds within 2 hours during business hours.\n\n**Or reach us directly:**\n📧 sales@nyxtitan.com\n📱 Schedule a call on our website\n💬 Continue chatting with me!\n\nWhat works best for you?`;
      }
      
      addAIMessage(response, suggestion.category as Message['category']);
    }, 1500);
  };

  return (
    <>
      {/* Floating AI Button - Always visible on right side */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="hover:scale-110 transition-all group"
          style={{ 
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            background: 'transparent', 
            border: 'none', 
            padding: 0,
            cursor: 'pointer'
          }}
        >
          <img 
            src="/titan-logo.png.png" 
            alt="Titan AI" 
            className="w-20 h-20 object-contain drop-shadow-2xl"
          />
          <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full animate-pulse"></span>
          
          {/* Tooltip */}
          <div className="absolute bottom-24 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Titan Buddy
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
          </div>
        </button>
      )}

      {/* Chat Window - Always visible on right side */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '384px',
          height: '600px',
          zIndex: 9999
        }} className="bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot className="w-8 h-8" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">NyxTitan AI</h3>
                <p className="text-xs text-purple-100">Always learning, always helping</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Knowledge Status Bar */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-4 py-2 border-b border-purple-100">
            <div className="flex items-center gap-2 text-xs">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 font-semibold">Sales Assistant: </span>
              <span className="text-gray-600">Here to help you find the perfect solution</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-900'
                  }`}
                >
                  {msg.type === 'ai' && msg.category === 'joke' && (
                    <div className="flex items-center gap-2 mb-2 text-amber-600">
                      <Smile className="w-4 h-4" />
                      <span className="text-xs font-semibold">Dad Joke Mode</span>
                    </div>
                  )}
                  {msg.type === 'ai' && msg.category === 'compliance' && (
                    <div className="flex items-center gap-2 mb-2 text-blue-600">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs font-semibold">Compliance Info</span>
                    </div>
                  )}
                  <p className="whitespace-pre-line text-sm leading-relaxed">{msg.content}</p>
                  {msg.confidence && msg.confidence > 0.9 && (
                    <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                      <CheckCircle className="w-3 h-3" />
                      <span>High confidence ({Math.round(msg.confidence * 100)}%)</span>
                    </div>
                  )}
                  <p className="text-xs opacity-60 mt-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Smart Suggestions */}
            {showSuggestions && messages.length > 0 && (
              <div className="space-y-2 mt-4">
                <p className="text-xs font-semibold text-gray-600 px-2">💡 Smart Suggestions:</p>
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left p-3 bg-white border border-gray-200 rounded-xl hover:border-purple-400 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        suggestion.priority === 'high' ? 'bg-red-100 text-red-600' :
                        suggestion.priority === 'medium' ? 'bg-amber-100 text-amber-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {suggestion.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-gray-900">{suggestion.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{suggestion.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about laws, regulations, or optimization..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="px-4 py-3 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              ✨ Powered by AI • Free for everyone
            </p>
          </div>
        </div>
      )}
    </>
  );
}
