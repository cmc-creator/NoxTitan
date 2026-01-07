'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Clock, Shield, TrendingUp, AlertCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  category?: 'compliance' | 'scheduling' | 'optimization' | 'general';
}

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey there! ⚡ I'm Titan, your quick-help assistant! I can help you with scheduling, employee management, compliance questions, and more. What can I help you with?",
      sender: 'bot',
      timestamp: new Date(),
      category: 'general',
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions: QuickAction[] = [
    { id: '1', label: 'Schedule Help', icon: <Clock className="w-4 h-4" />, description: 'Create, edit, or manage shifts' },
    { id: '2', label: 'Compliance Q&A', icon: <Shield className="w-4 h-4" />, description: 'Labor laws & break rules' },
    { id: '3', label: 'Optimize Costs', icon: <TrendingUp className="w-4 h-4" />, description: 'Reduce labor expenses' },
    { id: '4', label: 'Quick Tips', icon: <Sparkles className="w-4 h-4" />, description: 'Best practices & shortcuts' },
  ];

  const dadJokes = [
    "Why did the coffee file a police report? It got mugged! ☕",
    "What do you call cheese that isn't yours? Nacho cheese! 🧀",
    "Why did the bicycle fall over? Because it was two-tired! 🚴",
    "What do you call a factory that makes okay products? A satisfactory! 🏭",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Greetings
    if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
      return "Hello! ⚡ Titan here! How can I help you with your scheduling needs today?";
    }

    // Compliance & Labor Laws
    if (lowerMessage.includes('overtime') || lowerMessage.includes('hours worked')) {
      return "Great question about overtime! 📊\n\nFederal (FLSA): 1.5x pay after 40 hours/week\n\nState variations:\n• California: Overtime after 8 hrs/day OR 40 hrs/week\n• Colorado: Overtime after 12 hrs/day OR 40 hrs/week\n• Nevada: Overtime after 8 hrs/day (if earning < 1.5x minimum wage)\n\nI can help you set up overtime alerts in the scheduler!";
    }

    if (lowerMessage.includes('break') || lowerMessage.includes('meal') || lowerMessage.includes('rest')) {
      return "Let me help with break requirements! ☕\n\n**California:**\n• 30-min meal break after 5 hours\n• 10-min paid rest break per 4 hours\n\n**Federal:**\n• Breaks under 20 min must be paid\n• Meal breaks 30+ min can be unpaid\n\nOur Auto-Breaks feature handles this automatically!";
    }

    if (lowerMessage.includes('law') || lowerMessage.includes('legal') || lowerMessage.includes('regulation') || lowerMessage.includes('compliance')) {
      return "I stay updated on labor laws! 📚\n\nI can help with:\n• Federal DOL regulations (FLSA, FMLA, ADA)\n• State-specific labor laws\n• Industry standards (OSHA, Joint Commission)\n• Break & overtime requirements\n\nWhat specific regulation can I explain?";
    }

    // Optimization
    if (lowerMessage.includes('optimize') || lowerMessage.includes('save') || lowerMessage.includes('cost') || lowerMessage.includes('reduce')) {
      return "I love optimization! 💡\n\nQuick wins:\n1. Use Oracle AI predictions for staffing\n2. Cross-train employees for flexibility\n3. Adjust shift times for peak coverage\n4. Monitor overtime before it happens\n\nOur Enterprise tier includes full cost optimization tools!";
    }

    // Jokes
    if (lowerMessage.includes('joke') || lowerMessage.includes('funny')) {
      const randomJoke = dadJokes[Math.floor(Math.random() * dadJokes.length)];
      return `Here's one for you:\n\n${randomJoke}\n\n😄 Need anything else?`;
    }

    // Shift-related
    if (lowerMessage.includes('shift') || lowerMessage.includes('schedule')) {
      if (lowerMessage.includes('create') || lowerMessage.includes('add') || lowerMessage.includes('make')) {
        return "To create a shift:\n\n1. Go to the Calendar page\n2. Click on a date and time slot\n3. Fill in the employee, shift time, and details\n4. Click 'Save Shift'\n\nYou can also drag and drop to move shifts around!";
      }
      if (lowerMessage.includes('delete') || lowerMessage.includes('remove')) {
        return "To delete a shift, simply click on it in the calendar and select 'Delete'. You can also edit shifts by clicking on them and updating the information.";
      }
      if (lowerMessage.includes('swap') || lowerMessage.includes('trade')) {
        return "Shift swapping is available in all paid tiers! Employees can request to swap shifts, and managers can approve or deny these requests from the dashboard.";
      }
      return "I can help you create, edit, delete, or swap shifts. What would you like to do?";
    }

    // Employee-related
    if (lowerMessage.includes('employee')) {
      if (lowerMessage.includes('add') || lowerMessage.includes('create') || lowerMessage.includes('new')) {
        return "To add an employee:\n\n1. Go to the Employees page\n2. Click 'Add Employee'\n3. Fill in their name, contact info, and role\n4. Set their availability if needed\n5. Click 'Save'\n\nProfessional tier supports up to 50 employees, Enterprise up to 250, and Titan unlimited!";
      }
      return "I can help with adding, editing, or managing employees. The Employees page is where you'll manage your team.";
    }

    // Time-off
    if (lowerMessage.includes('time off') || lowerMessage.includes('vacation') || lowerMessage.includes('pto') || lowerMessage.includes('leave')) {
      return "Time-off management is available in all paid tiers!\n\nEmployees can request time off, and managers can:\n• View all pending requests\n• Approve or deny requests\n• See a calendar view of who's off when\n\nGo to the Time Off page to manage requests.";
    }

    // Subscription tiers
    if (lowerMessage.includes('tier') || lowerMessage.includes('subscription') || lowerMessage.includes('plan') || lowerMessage.includes('upgrade') || lowerMessage.includes('price') || lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
      return "We have 3 enterprise tiers (VIP codes available for complimentary access):\n\n**Professional ($499/mo)**: Up to 50 employees, advanced scheduling, time & attendance, payroll, 10 core integrations\n\n**Enterprise ($1,499/mo)**: Up to 250 employees, everything in Professional + Oracle AI, Compliance Suite, Asset Vault, Sentinel, Guild, all 60+ integrations\n\n**Titan ($2,999/mo)**: Unlimited employees, white-glove service, dedicated account manager, 24/7 support, custom development\n\nStill 70-90% cheaper than Paycom, ADP, or Kronos!";
    }

    // Themes
    if (lowerMessage.includes('theme') || lowerMessage.includes('color') || lowerMessage.includes('appearance')) {
      return "Love the themes! 🎨\n\nWe have 21 decorative themes including:\n• Spring Flowers, Winter Sparkle, Autumn Leaves\n• Ocean Waves, Thunderstorm, Galaxy\n• Northern Lights, Cherry Blossom, Sunset\n• And 12 more!\n\nEach theme automatically adjusts all colors across the app. Try them from the Theme Customizer!";
    }

    // Calendar views
    if (lowerMessage.includes('calendar') && (lowerMessage.includes('view') || lowerMessage.includes('month') || lowerMessage.includes('week') || lowerMessage.includes('day'))) {
      return "The calendar supports multiple views:\n\n• **Month View**: See the whole month at a glance\n• **Week View**: Detailed weekly schedule\n• **Day View**: Hour-by-hour breakdown\n• **Agenda View**: List format\n\nSwitch views using the toolbar buttons above the calendar!";
    }

    // Drag and drop
    if (lowerMessage.includes('drag') || lowerMessage.includes('drop') || lowerMessage.includes('move')) {
      return "Drag-and-drop is available in all paid tiers!\n\nSimply click and hold a shift, then drag it to a new time slot or day. The shift will automatically update. Super convenient for quick scheduling changes!";
    }

    // Reports/Analytics
    if (lowerMessage.includes('report') || lowerMessage.includes('analytics') || lowerMessage.includes('stats')) {
      return "Reports and analytics are available in all tiers!\n\n• Professional: Standard reporting with exports\n• Enterprise: Advanced analytics dashboard with trends, forecasting, and custom reports\n• Titan: Everything + quarterly business reviews\n\nFind them in the Analytics section.";
    }

    // Availability
    if (lowerMessage.includes('availability') || lowerMessage.includes('available')) {
      return "Availability management (Platinum tier) lets you:\n\n• Set employee availability preferences\n• Block out unavailable times\n• Get automated scheduling suggestions based on availability\n• Reduce scheduling conflicts\n\nManage it from the Employees page!";
    }

    // Help/Support
    if (lowerMessage.includes('help') || lowerMessage.includes('support') || lowerMessage.includes('contact')) {
      return "I'm here to help! You can also:\n\n• Check the Help section in Settings\n• Email support@scheduler.com\n• Platinum users get priority support with 24-hour response time\n\nWhat specific question can I answer?";
    }

    // Default response
    const responses = [
      "I'm not quite sure about that. Could you ask about shifts, employees, time-off, subscription tiers, or themes?",
      "Hmm, I don't have an answer for that yet. Try asking me about creating shifts, managing employees, or our subscription plans!",
      "That's a great question! I'm still learning. Could you rephrase it or ask about scheduling features?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowQuickActions(false);
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  const handleQuickAction = (action: QuickAction) => {
    setShowQuickActions(false);
    const queries: { [key: string]: string } = {
      '1': 'How do I create and manage shifts?',
      '2': 'What are the break and overtime requirements?',
      '3': 'How can I optimize my labor costs?',
      '4': 'What are some scheduling best practices?',
    };
    setInputValue(queries[action.id] || action.description);
    setTimeout(() => handleSend(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "How do I create a shift?",
    "What are the subscription tiers?",
    "How do I add employees?",
    "Tell me about themes",
  ];

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 group">
          <button
            onClick={() => setIsOpen(true)}
            className="relative w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110 flex flex-col items-center justify-center"
            aria-label="Open Titan chat"
            title="Titan - Quick Help Assistant"
          >
            <MessageCircle className="h-6 w-6 text-white group-hover:animate-bounce" />
            <span className="text-xs font-bold mt-1 text-white text-pop-light">Titan</span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
          </button>
          {/* Hover Tooltip */}
          <div className="absolute bottom-24 right-0 w-64 bg-slate-900 border border-pink-500/50 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            <div className="text-pink-300 font-bold text-sm mb-1">⚡ Titan - Quick Help</div>
            <div className="text-slate-300 text-xs">
              Fast answers for scheduling, employee management, and system navigation. Your go-to for quick questions.
            </div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 dark:border-slate-700">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-purple-600 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-white text-pop-light">⚡ Titan AI Assistant</h3>
                <p className="text-xs text-purple-100">Quick help & smart answers</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {showQuickActions && messages.length === 1 && (
              <div className="mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 text-center">Quick Actions</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleQuickAction(action)}
                      className="flex flex-col items-center gap-2 p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-lg hover:shadow-lg transition-all hover:scale-105 border border-purple-200 dark:border-slate-500"
                    >
                      <div className="text-purple-600 dark:text-purple-400">{action.icon}</div>
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{action.label}</span>
                      <span className="text-[10px] text-gray-500 dark:text-gray-400 text-center">{action.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>
                <div className={`flex flex-col max-w-[75%] ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`rounded-2xl p-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-gray-100'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-purple-500 to-pink-500">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-gray-100 dark:bg-slate-700 rounded-2xl p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
