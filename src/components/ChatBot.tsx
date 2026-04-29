'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  category?: 'compliance' | 'scheduling' | 'optimization' | 'general';
}


function getTimeGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `${getTimeGreeting()}. Welcome to the NyxTitan Elite Service. I am the face of NyxTitan. How may I assist you with your bespoke requirements today?`,
      sender: 'bot',
      timestamp: new Date(),
      category: 'general',
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load customization preferences (avatar only)
  useEffect(() => {
    return () => {};
  }, []);

  const quickActions = [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Only scroll to bottom when user sends a message or bot responds
    // Don't auto-scroll on initial load
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Greetings
    if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
      return "Hello! ⚡ Titan here! How can I help you with your scheduling needs today?";
    }

    // Compliance & Labor Laws
    if (lowerMessage.includes('overtime') || lowerMessage.includes('hours worked')) {
      return "Great question about overtime! 📊\n\nFederal (FLSA): 1.5x pay after 40 hours/week\n\nState variations:\n• California: Overtime after 8 hrs/day OR 40 hrs/week\n• Colorado: Overtime after 12 hrs/day OR 40 hrs/week\n• Nevada: Overtime after 8 hrs/day (if earning less than 1.5x minimum wage)\n\nI can help you set up overtime alerts in NyxTitan!";
    }

    if (lowerMessage.includes('break') || lowerMessage.includes('meal') || lowerMessage.includes('rest')) {
      return "Let me help with break requirements! ☕\n\n**California:**\n• 30 min meal break after 5 hours\n• 10 min paid rest break per 4 hours\n\n**Federal:**\n• Breaks under 20 min must be paid\n• Meal breaks 30+ min can be unpaid\n\nOur Auto Breaks feature handles this automatically!";
    }

    if (lowerMessage.includes('law') || lowerMessage.includes('legal') || lowerMessage.includes('regulation') || lowerMessage.includes('compliance')) {
      return "I stay updated on labor laws! 📚\n\nI can help with:\n• Federal DOL regulations (FLSA, FMLA, ADA)\n• State-specific labor laws\n• Industry standards (OSHA, Joint Commission)\n• Break & overtime requirements\n\nWhat specific regulation can I explain?";
    }

    // Optimization
    if (lowerMessage.includes('optimize') || lowerMessage.includes('save') || lowerMessage.includes('cost') || lowerMessage.includes('reduce')) {
      return "I love optimization! 💡\n\nQuick wins:\n1. Use Oracle AI predictions for staffing\n2. Cross train employees for flexibility\n3. Adjust shift times for peak coverage\n4. Monitor overtime before it happens\n\nOur Enterprise tier includes full cost optimization tools!";
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
      return "We have 3 enterprise tiers (VIP codes available for complimentary access):\n\n**Professional ($499/mo)**: Up to 50 employees, advanced scheduling, time and attendance, payroll, 10 core integrations\n\n**Enterprise ($1,499/mo)**: Up to 250 employees, everything in Professional plus Oracle AI, Compliance Suite, Asset Vault, Sentinel, Guild, all 60+ integrations\n\n**Titan ($2,999/mo or custom enterprise pricing)**: Unlimited employees, white-glove service, dedicated account manager, 24/7 priority support, custom development\n\nStill 70 to 90% cheaper than Paycom, ADP, or Kronos!";
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
      return "I'm here to help! You can also:\n\n• Check the Help section in Settings\n• Email support@nyxtitan.com\n• Enterprise and Titan tier users get priority support\n\nWhat specific question can I answer?";
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

  const handleQuickAction = (_action: any) => {};

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isIntroState = messages.length === 1 && !isTyping;

  return (
    <>
      {/* FAB — titanbot circle, bottom-right */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 group">
          <button
            onClick={() => setIsOpen(true)}
            className="relative w-28 h-28 rounded-full transition-all flex items-center justify-center overflow-hidden"
            style={{ background: 'transparent', boxShadow: '0 0 24px rgba(201,168,76,0.35), 0 8px 32px rgba(0,0,0,0.5)' }}
            aria-label="Open NyxTitan AI Advisor"
          >
            <img src="/advisor-portrait.png" alt="NyxTitan" className="w-full h-full object-contain drop-shadow-xl" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full" style={{ background: '#C9A84C', boxShadow: '0 0 8px rgba(201,168,76,0.8)' }} />
          </button>
          <div className="absolute bottom-28 right-0 w-56 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: '#0D0B08', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '4px', padding: '10px 14px' }}>
            <div className="text-sm font-semibold mb-1" style={{ color: '#C9A84C', fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.05em' }}>NyxTitan AI Advisor</div>
            <div className="text-xs" style={{ color: '#9E8F75' }}>Your bespoke scheduling intelligence, available 24/7.</div>
          </div>
        </div>
      )}

      {/* Full-screen luxury overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center"
          style={{ background: 'rgba(3,2,5,0.94)', backdropFilter: 'blur(16px)' }}
        >
          {/* Ambient city-light blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div style={{ position: 'absolute', bottom: 0, left: '5%', width: '45%', height: '55%', background: 'radial-gradient(ellipse at bottom, rgba(18,28,55,0.7) 0%, transparent 70%)' }} />
            <div style={{ position: 'absolute', bottom: 0, right: '5%', width: '50%', height: '50%', background: 'radial-gradient(ellipse at bottom, rgba(35,20,55,0.6) 0%, transparent 70%)' }} />
            <div style={{ position: 'absolute', bottom: '8%', left: '25%', width: '50%', height: '30%', background: 'radial-gradient(ellipse, rgba(40,30,15,0.35) 0%, transparent 70%)' }} />
          </div>

          {/* Panel */}
          <div className="relative flex flex-col items-center w-full mx-4" style={{ maxWidth: '620px', maxHeight: '92vh' }}>

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0 z-10 transition-opacity hover:opacity-70"
              style={{ color: '#5A5040', padding: '8px' }}
            >
              <X className="w-6 h-6" />
            </button>

            {/* NYXTITAN branding */}
            <div className="text-center" style={{ marginBottom: isIntroState ? '32px' : '16px', paddingTop: '8px' }}>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: isIntroState ? '3rem' : '1.75rem',
                fontWeight: 400,
                letterSpacing: '0.45em',
                color: '#C9A84C',
                margin: 0,
                lineHeight: 1,
                textTransform: 'uppercase',
                transition: 'font-size 0.3s',
              }}>
                NyxTitan
              </h1>
              <p style={{ color: '#9E8F75', fontSize: '0.72rem', letterSpacing: '0.22em', marginTop: '8px', textTransform: 'uppercase' }}>
                AI Advisor &nbsp;·&nbsp; Online
              </p>
            </div>

            {isIntroState ? (
              /* ── INTRO STATE — mirrors the screenshot ── */
              <>
                {/* Large circular avatar */}
                <div style={{
                  width: '210px', height: '210px', borderRadius: '50%',
                  border: '1.5px solid rgba(201,168,76,0.45)',
                  overflow: 'hidden',
                  marginBottom: '32px',
                  boxShadow: '0 0 0 10px rgba(201,168,76,0.04), 0 0 60px rgba(201,168,76,0.14), 0 24px 80px rgba(0,0,0,0.8)',
                  flexShrink: 0,
                }}>
                  <img src="/advisor-portrait.png" alt="NyxTitan AI Advisor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Welcome message — white card */}
                <div style={{
                  background: 'rgba(250,246,238,0.93)',
                  borderRadius: '12px',
                  padding: '24px 28px',
                  marginBottom: '20px',
                  width: '100%',
                  boxShadow: '0 16px 56px rgba(0,0,0,0.65)',
                }}>
                  <p style={{
                    color: '#1C1A14',
                    fontSize: '1.02rem',
                    lineHeight: '1.72',
                    margin: 0,
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 400,
                  }}>
                    {messages[0].text}
                  </p>
                </div>

                {/* Input */}
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Start your consultation..."
                  autoFocus
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    borderRadius: '8px',
                    padding: '16px 24px',
                    color: '#F0EBE0',
                    fontSize: '0.95rem',
                    outline: 'none',
                    letterSpacing: '0.025em',
                    caretColor: '#C9A84C',
                    fontFamily: 'inherit',
                  }}
                />
              </>
            ) : (
              /* ── CONVERSATION STATE ── */
              <div className="w-full flex flex-col" style={{ flex: 1, overflow: 'hidden', maxHeight: 'calc(92vh - 110px)' }}>

                {/* Compact avatar row */}
                <div className="flex items-center gap-3" style={{ marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.4)', overflow: 'hidden', flexShrink: 0, boxShadow: '0 0 16px rgba(201,168,76,0.12)' }}>
                    <img src="/advisor-portrait.png" alt="NyxTitan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.95rem', color: '#C9A84C', letterSpacing: '0.08em' }}>NyxTitan Advisor</div>
                    <div className="flex items-center gap-1.5">
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                      <span style={{ fontSize: '0.7rem', color: '#9E8F75', letterSpacing: '0.05em' }}>Online</span>
                    </div>
                  </div>
                </div>

                {/* Message thread */}
                <div className="flex-1 overflow-y-auto space-y-3" style={{ paddingRight: '4px' }}>
                  {messages.map((msg) => (
                    <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                      <div style={{
                        maxWidth: '82%',
                        background: msg.sender === 'bot' ? 'rgba(250,246,238,0.93)' : 'rgba(201,168,76,0.1)',
                        border: msg.sender === 'user' ? '1px solid rgba(201,168,76,0.25)' : 'none',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        boxShadow: msg.sender === 'bot' ? '0 4px 20px rgba(0,0,0,0.4)' : 'none',
                      }}>
                        <p style={{
                          color: msg.sender === 'bot' ? '#1C1A14' : '#F0EBE0',
                          fontSize: '0.9rem',
                          lineHeight: '1.65',
                          margin: 0,
                          whiteSpace: 'pre-line',
                          fontFamily: msg.sender === 'bot' ? "'Cormorant Garamond', Georgia, serif" : 'inherit',
                        }}>
                          {msg.text}
                        </p>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <div style={{ background: 'rgba(250,246,238,0.93)', borderRadius: '8px', padding: '14px 18px', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
                        <div className="flex gap-1">
                          {[0, 150, 300].map((d) => (
                            <div key={d} className="w-2 h-2 rounded-full" style={{ background: '#9E8F75', animationDelay: `${d}ms` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input row */}
                <div className="flex gap-2" style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Continue your consultation..."
                    autoFocus
                    style={{
                      flex: 1,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(201,168,76,0.25)',
                      borderRadius: '6px',
                      padding: '12px 18px',
                      color: '#F0EBE0',
                      fontSize: '0.9rem',
                      outline: 'none',
                      caretColor: '#C9A84C',
                      fontFamily: 'inherit',
                    }}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    style={{
                      padding: '12px 16px',
                      background: 'rgba(201,168,76,0.12)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      borderRadius: '6px',
                      color: '#C9A84C',
                      cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                      opacity: inputValue.trim() ? 1 : 0.35,
                      transition: 'opacity 0.2s',
                    }}
                  >
                    <Send style={{ width: '18px', height: '18px' }} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}


