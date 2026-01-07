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

  // Sample conversation starters
  const suggestions: Suggestion[] = [
    {
      id: '1',
      title: 'Overtime Alert',
      description: 'Sarah Johnson is approaching 40 hours this week',
      icon: <Clock className="w-5 h-5" />,
      action: 'Review schedule',
      priority: 'high',
      category: 'scheduling'
    },
    {
      id: '2',
      title: 'New OSHA Update',
      description: 'Updated safety training requirements for healthcare',
      icon: <Shield className="w-5 h-5" />,
      action: 'Learn more',
      priority: 'high',
      category: 'compliance'
    },
    {
      id: '3',
      title: 'Scheduling Optimization',
      description: 'I found a way to reduce labor costs by 8% this month',
      icon: <TrendingUp className="w-5 h-5" />,
      action: 'Show me',
      priority: 'medium',
      category: 'optimization'
    },
    {
      id: '4',
      title: 'Break Law Reminder',
      description: 'California requires meal breaks after 5 hours',
      icon: <AlertCircle className="w-5 h-5" />,
      action: 'Check compliance',
      priority: 'medium',
      category: 'compliance'
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
            "Hey there! 👋 I'm TeamPulse AI, your friendly scheduling and compliance assistant. I'm constantly learning the latest labor laws, industry regulations, and best practices to help you stay compliant and optimize your workforce.\n\nHow can I help you today?",
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

    // Check for specific topics
    if (lowerMessage.includes('overtime') || lowerMessage.includes('hours')) {
      response = "Great question about overtime! 📊\n\nBased on current federal law (FLSA), non-exempt employees must receive 1.5x their regular rate for hours worked over 40 in a workweek. However, some states have stricter rules:\n\n• California: Overtime after 8 hours/day OR 40 hours/week\n• Colorado: Overtime after 12 hours/day OR 40 hours/week\n• Nevada: Overtime after 8 hours/day if earning less than 1.5x minimum wage\n\nI'm monitoring Sarah Johnson's schedule and she's currently at 38 hours this week. Would you like me to suggest schedule adjustments to avoid overtime?\n\n(Updated: December 2025 based on latest DOL guidelines)";
      category = 'compliance';
    } else if (lowerMessage.includes('break') || lowerMessage.includes('meal') || lowerMessage.includes('rest')) {
      response = "Let me help you with break requirements! ☕\n\nBreak laws vary significantly by state. Here's what I know:\n\n**California:** \n• 30-min meal break after 5 hours (can waive if shift ≤ 6 hrs)\n• 10-min paid rest break per 4 hours worked\n\n**Federal Law:**\n• Breaks under 20 minutes must be paid\n• Meal breaks 30+ minutes can be unpaid\n\nI've analyzed your current schedules and found 3 shifts this week that may need break adjustments. Want me to show you?\n\nBy the way, why did the coffee file a police report? It got mugged! ☕😄";
      category = 'compliance';
    } else if (lowerMessage.includes('optimize') || lowerMessage.includes('save') || lowerMessage.includes('cost')) {
      response = "I love helping with optimization! 💡\n\nI've analyzed your scheduling patterns and found some opportunities:\n\n1. **Shift Timing** - Moving 3 employees to different shifts could reduce overlap by 12 hours/week\n2. **Cross-Training** - Training 2 staff members in multiple roles could save ~$2,400/month\n3. **Peak Coverage** - Your busiest hours (2-5 PM) are currently understaffed while mornings are overstaffed\n\nImplementing these changes could reduce labor costs by approximately 8-12% without impacting service quality. Would you like me to create a detailed optimization plan?";
      category = 'optimization';
    } else if (lowerMessage.includes('law') || lowerMessage.includes('legal') || lowerMessage.includes('regulation')) {
      response = "I stay up-to-date on all the latest labor laws! 📚\n\nMy knowledge base is continuously updated with:\n• Federal DOL regulations (FLSA, FMLA, ADA)\n• State-specific labor laws for all 50 states\n• Industry standards (OSHA, Joint Commission, etc.)\n• Recent court decisions affecting employment\n\nLast update: January 1, 2026\n\nWhat specific regulation or law can I help you understand? I can explain it in plain English (no legalese, I promise! 😊)";
      category = 'compliance';
      confidence = 0.98;
    } else if (lowerMessage.includes('joke') || lowerMessage.includes('funny')) {
      const randomJoke = dadJokes[Math.floor(Math.random() * dadJokes.length)];
      response = `Here's one for you:\n\n${randomJoke}\n\n😄 Hope that brightened your day! Need help with anything else?`;
      category = 'joke';
    } else if (lowerMessage.includes('schedule') || lowerMessage.includes('shift')) {
      response = "I can definitely help with scheduling! 📅\n\nI've been analyzing your scheduling patterns and here's what I've learned:\n\n**Your Team:**\n• 24 active employees\n• Average 186 hours/week scheduled\n• 89% schedule adherence rate\n\n**Smart Suggestions:**\n• Consider scheduling Marcus Williams for Tuesday evening - he has high customer ratings during that shift\n• The Emergency Department typically needs +1 nurse on Friday nights based on historical data\n• You could save 6 overtime hours this week by adjusting Thursday's coverage\n\nWhat would you like me to help you optimize?";
      category = 'scheduling';
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      response = "Hello! 👋 Great to chat with you!\n\nI'm here to help with:\n✅ Compliance questions (labor laws, break rules, etc.)\n✅ Schedule optimization\n✅ Overtime management  \n✅ Industry-specific regulations\n✅ Best practices and tips\n✅ And occasionally, terrible dad jokes! 😄\n\nWhat's on your mind?";
      category = 'general';
    } else {
      response = "That's a great question! 🤔\n\nI'm constantly learning and my knowledge base covers:\n\n• **Labor Laws** - Federal and state regulations (Updated daily)\n• **Healthcare Compliance** - HIPAA, Joint Commission, OSHA\n• **Retail Standards** - Fair Labor Standards Act, POS compliance\n• **Hospitality** - Tip pooling, service industry regulations  \n• **Construction** - Safety requirements, union rules\n\nCould you give me a bit more detail about what you need help with? The more specific you are, the better I can assist!\n\nOh, and here's a fun fact: Why don't programmers like nature? Too many bugs! 🐛😄";
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
      if (suggestion.category === 'compliance') {
        response = `📋 **${suggestion.title}**\n\n${suggestion.description}\n\nBased on my analysis of current regulations, here's what you need to know:\n\n✅ **Action Required:** Review and update training materials\n✅ **Deadline:** Within 30 days of regulation change\n✅ **Affected Employees:** All healthcare staff (24 employees)\n\nI've already drafted a compliance checklist for you. Would you like me to:\n1. Send it to your email\n2. Add reminders to your calendar\n3. Create training assignments\n\nLet me know how I can help! 🚀`;
      } else if (suggestion.category === 'scheduling') {
        response = `⏰ **${suggestion.title}**\n\n${suggestion.description}\n\nHere's what I found:\n\n**Current Status:**\n• Sarah: 38.5 hours (Mon-Thu)\n• Scheduled: Friday 8-hour shift\n• Would result in: 46.5 hours (6.5 OT hours)\n\n**My Recommendation:**\n• Option A: Reduce Friday shift to 1.5 hours (avoids OT)\n• Option B: Move Friday shift to next week\n• Option C: Split shift with another team member\n\n**Cost Impact:**\nOption A saves ~$45 in overtime costs\n\nWant me to automatically adjust the schedule? I'll make sure all shifts are covered! 📊`;
      } else {
        response = `💡 **${suggestion.title}**\n\n${suggestion.description}\n\nI've crunched the numbers and found some exciting opportunities! Here's my analysis:\n\n**Opportunity #1: Shift Timing** ⏰\nAdjusting 3 shifts could save 12 hours/week = $2,160/month\n\n**Opportunity #2: Peak Coverage** 📈  \nRedistributing staff during peak hours improves efficiency by 15%\n\n**Opportunity #3: Cross-Training** 🎓\nTraining 2 staff members = $2,400/month in flexibility savings\n\n**Total Potential Savings:** $4,560/month\n\nShall I create a detailed implementation plan? It'll take me about 2 minutes to generate! ⚡`;
      }
      
      addAIMessage(response, suggestion.category as Message['category']);
    }, 1500);
  };

  return (
    <>
      {/* Floating AI Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center z-50 group"
        >
          <Bot className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></span>
          
          {/* Tooltip */}
          <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask AI Assistant 🤖
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot className="w-8 h-8" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">TeamPulse AI</h3>
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
              <span className="text-purple-700 font-semibold">Knowledge Base: </span>
              <span className="text-gray-600">Updated Jan 1, 2026 • 50 state laws • 12 industries</span>
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
              ✨ Powered by AI • Gold & Platinum feature
            </p>
          </div>
        </div>
      )}
    </>
  );
}
