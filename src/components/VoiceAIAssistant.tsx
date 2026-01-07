'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, Mic, MicOff, Volume2, VolumeX, Send, X, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface VoiceAIAssistantProps {
  context?: string; // Current page context for proactive help
  userRole?: 'hr' | 'manager' | 'employee';
}

export default function VoiceAIAssistant({ context = 'dashboard', userRole = 'hr' }: VoiceAIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize speech recognition and synthesis
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Speech Recognition (Web Speech API)
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInputText(transcript);
          setIsListening(false);
          // Auto-send after voice input
          handleSendMessage(transcript);
        };

        recognitionRef.current.onerror = () => {
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }

      // Speech Synthesis
      synthRef.current = window.speechSynthesis;
    }

    // Welcome message based on context
    if (isOpen && messages.length === 0) {
      const welcomeMessage = getContextualWelcome();
      setMessages([{
        role: 'assistant',
        content: welcomeMessage,
        timestamp: new Date(),
      }]);
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function getContextualWelcome(): string {
    const welcomes: Record<string, string> = {
      'hr-planner': "Hi! I see you're in the HR Planner. I can help you create check-in reminders, schedule surveys, or set up automation rules. What would you like to do?",
      'employees': "Looking at employees? I can help you onboard new hires, schedule performance reviews, or set up satisfaction surveys. Just ask!",
      'dashboard': "Welcome! I'm your AI assistant. I can help you navigate TeamPulse, set up automations, or answer questions about HR workflows. How can I assist you today?",
      'surveys': "Need help with employee surveys? I can create 30/60/90 day check-ins, pulse surveys, or custom feedback forms. What would you like to set up?",
      'performance': "Managing performance reviews? I can help schedule reviews, set up review cycles, or track employee goals. What do you need?",
    };

    return welcomes[context] || "Hi! I'm your AI assistant. How can I help you today?";
  }

  function toggleListening() {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  }

  function speak(text: string) {
    if (!synthRef.current || !voiceEnabled) return;

    // Cancel any ongoing speech
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Try to use a pleasant voice
    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(v => v.name.includes('Female') || v.name.includes('Samantha')) || voices[0];
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current.speak(utterance);
  }

  function stopSpeaking() {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  }

  async function handleSendMessage(textOverride?: string) {
    const text = textOverride || inputText.trim();
    if (!text) return;

    const userMessage: Message = {
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Call AI API (you can integrate OpenAI, Anthropic, or local LLM)
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          context,
          userRole,
          conversationHistory: messages.slice(-5), // Last 5 messages for context
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.response,
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, assistantMessage]);

        // Speak the response if voice is enabled
        if (voiceEnabled) {
          speak(data.response);
        }
      }
    } catch (error) {
      console.error('Failed to get AI response:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-50 group">
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full shadow-2xl flex flex-col items-center justify-center transition-all hover:scale-110"
          aria-label="Open Nox AI Assistant"
          title="Nox - Voice & Strategic AI Assistant"
        >
          <Sparkles className="w-6 h-6 group-hover:animate-pulse" />
          <span className="text-xs font-bold mt-1 text-pop-light">Nox</span>
          {isListening && (
            <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></div>
          )}
        </button>
        {/* Hover Tooltip */}
        <div className="absolute bottom-24 left-0 w-64 bg-slate-900 border border-purple-500/50 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          <div className="text-purple-300 font-bold text-sm mb-1">🌙 Nox - Strategic AI</div>
          <div className="text-slate-300 text-xs">
            Voice-powered assistant for complex scheduling, predictions, and strategic planning. Uses Oracle AI for insights.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 w-[420px] h-[600px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-8">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Sparkles className="w-6 h-6 text-white" />
            {isSpeaking && (
              <div className="absolute -inset-1 bg-white rounded-full animate-ping opacity-75"></div>
            )}
          </div>
          <div>
            <h3 className="text-white font-bold">AI Assistant</h3>
            <p className="text-xs text-blue-100">Voice-enabled • Always learning</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            title={voiceEnabled ? 'Disable voice' : 'Enable voice'}
          >
            {voiceEnabled ? (
              <Volume2 className="w-5 h-5 text-white" />
            ) : (
              <VolumeX className="w-5 h-5 text-white" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-slate-800 text-slate-100 border border-slate-700'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              <p className={`text-xs mt-1 ${
                msg.role === 'user' ? 'text-blue-100' : 'text-slate-500'
              }`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl px-4 py-3">
              <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-slate-700 bg-slate-900">
        <div className="flex items-end gap-2">
          <div className="flex-1 relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything or click the mic..."
              rows={1}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
            />
          </div>
          <button
            onClick={toggleListening}
            disabled={isLoading}
            className={`p-3 rounded-xl transition-all disabled:opacity-50 ${
              isListening
                ? 'bg-red-600 hover:bg-red-700 animate-pulse'
                : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
            }`}
            title={isListening ? 'Stop listening' : 'Start voice input'}
          >
            {isListening ? (
              <MicOff className="w-5 h-5 text-white" />
            ) : (
              <Mic className="w-5 h-5 text-slate-300" />
            )}
          </button>
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim() || isLoading}
            className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all disabled:opacity-50"
            title="Send message"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
        
        {isListening && (
          <div className="mt-2 flex items-center gap-2 text-xs text-red-400">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            Listening... Speak now
          </div>
        )}
      </div>
    </div>
  );
}
