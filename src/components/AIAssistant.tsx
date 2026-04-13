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
      response = "📞 **Contact Our Team**\n\nI'd be happy to connect you with our sales team!\n\n**Please share:**\n• Your name\n• Company name\n• Email address\n• Phone number\n• What you'd like to discuss\n\nOur team typically responds within 2 hours during business hours.\n\nAlternatively:\n• Email: info@nyxtitan.com\n• Schedule a demo on our website\n• Continue chatting with me - I can answer most questions!\n\nWhat works best for you?";
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
        response = `📞 **Contact Our Team**\n\nI'd be happy to connect you!\n\n**Please provide:**\n• Name\n• Company\n• Email\n• Phone number\n• What you'd like to discuss\n\nOur sales team responds within 2 hours during business hours.\n\n**Or reach us directly:**\n📧 info@nyxtitan.com\n📱 Schedule a call on our website\n💬 Continue chatting with me!\n\nWhat works best for you?`;
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
            src="/titanlogo.png" 
            alt="Titan AI" 
            className="w-20 h-20 object-contain drop-shadow-2xl"
          />
          <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full animate-pulse"></span>
          
          {/* Tooltip */}
          <div className="absolute bottom-24 right-0 bg-stone-950 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Titan Buddy
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-stone-950 transform rotate-45"></div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '384px',
          height: '600px',
          zIndex: 9999,
          background: '#110F0B',
          border: '1px solid rgba(201,168,76,0.28)',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 0 60px rgba(201,168,76,0.08), 0 30px 80px rgba(0,0,0,0.9)',
          fontFamily: "'Inter', sans-serif",
          overflow: 'hidden',
        }}>
          {/* Gold top accent */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', flexShrink: 0 }} />

          {/* Header */}
          <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(201,168,76,0.15)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(201,168,76,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ position: 'relative' }}>
                <Bot style={{ width: '24px', height: '24px', color: '#C9A84C' }} />
                <span style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%', border: '1px solid #110F0B' }}></span>
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#F0EBE0', fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.03em' }}>NyxTitan AI</div>
                <div style={{ fontSize: '0.68rem', color: '#9E8F75', letterSpacing: '2px', textTransform: 'uppercase' }}>Sales Assistant</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '2px', padding: '6px', cursor: 'pointer', color: '#9E8F75', display: 'flex', alignItems: 'center', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.45)'; (e.currentTarget as HTMLButtonElement).style.color = '#C9A84C'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.15)'; (e.currentTarget as HTMLButtonElement).style.color = '#9E8F75'; }}
            >
              <X style={{ width: '14px', height: '14px' }} />
            </button>
          </div>

          {/* Status Bar */}
          <div style={{ padding: '7px 18px', borderBottom: '1px solid rgba(201,168,76,0.08)', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles style={{ width: '12px', height: '12px', color: '#C9A84C' }} />
            <span style={{ fontSize: '0.7rem', color: '#9E8F75', letterSpacing: '1px' }}>Here to help you find the perfect solution</span>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#0D0B08' }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ display: 'flex', justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%',
                  padding: '10px 14px',
                  borderRadius: '2px',
                  background: msg.type === 'user'
                    ? 'linear-gradient(135deg, rgba(201,168,76,0.25) 0%, rgba(232,192,96,0.15) 100%)'
                    : 'rgba(255,255,255,0.03)',
                  border: msg.type === 'user'
                    ? '1px solid rgba(201,168,76,0.35)'
                    : '1px solid rgba(201,168,76,0.1)',
                  color: '#F0EBE0',
                }}>
                  {msg.type === 'ai' && msg.category === 'joke' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: '#C9A84C' }}>
                      <Smile style={{ width: '12px', height: '12px' }} />
                      <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Dad Joke Mode</span>
                    </div>
                  )}
                  {msg.type === 'ai' && msg.category === 'compliance' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: '#9E8F75' }}>
                      <Shield style={{ width: '12px', height: '12px' }} />
                      <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Compliance Info</span>
                    </div>
                  )}
                  <p style={{ whiteSpace: 'pre-line', fontSize: '0.83rem', lineHeight: '1.55', margin: 0 }}>{msg.content}</p>
                  {msg.confidence && msg.confidence > 0.9 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px', color: '#4ade80', fontSize: '0.7rem' }}>
                      <CheckCircle style={{ width: '10px', height: '10px' }} />
                      <span>High confidence ({Math.round(msg.confidence * 100)}%)</span>
                    </div>
                  )}
                  <p style={{ fontSize: '0.65rem', opacity: 0.4, marginTop: '4px', marginBottom: 0 }}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.1)', borderRadius: '2px' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {[0, 1, 2].map(i => (
                      <div key={i} style={{ width: '7px', height: '7px', background: '#C9A84C', borderRadius: '50%', animation: 'bounce 1.2s infinite', animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Smart Suggestions */}
            {showSuggestions && messages.length > 0 && (
              <div style={{ marginTop: '8px' }}>
                <p style={{ fontSize: '0.68rem', color: '#9E8F75', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', marginLeft: '2px' }}>Suggestions</p>
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 12px',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(201,168,76,0.12)',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      marginBottom: '6px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.35)'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.05)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.12)'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.02)'; }}
                  >
                    <div style={{ padding: '5px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '2px', flexShrink: 0 }}>
                      {suggestion.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 500, color: '#F0EBE0', marginBottom: '2px' }}>{suggestion.title}</div>
                      <div style={{ fontSize: '0.72rem', color: '#5A5040' }}>{suggestion.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '12px 14px', borderTop: '1px solid rgba(201,168,76,0.12)', background: '#110F0B', flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about features, pricing, or a demo..."
                style={{
                  flex: 1,
                  padding: '9px 14px',
                  background: '#0D0B08',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '2px',
                  color: '#F0EBE0',
                  fontSize: '0.83rem',
                  outline: 'none',
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(201,168,76,0.55)'; }}
                onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(201,168,76,0.2)'; }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                style={{
                  padding: '9px 14px',
                  background: message.trim() ? 'linear-gradient(135deg, #C9A84C 0%, #E8C060 100%)' : 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.35)',
                  borderRadius: '2px',
                  cursor: message.trim() ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}
              >
                <Send style={{ width: '15px', height: '15px', color: message.trim() ? '#07060A' : '#5A5040' }} />
              </button>
            </div>
            <p style={{ fontSize: '0.65rem', color: '#3a3020', marginTop: '7px', textAlign: 'center', letterSpacing: '1px' }}>Powered by NyxTitan AI</p>
          </div>
        </div>
      )}
    </>
  );
}


