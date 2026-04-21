'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, Calendar, Users, Clock, DollarSign, BarChart3, 
  Shield, Trophy, Package, Sparkles, MessageSquare, Settings,
  FileText, Award, Bot, TrendingUp, Home, Bell, Upload,
  Heart, Coffee, Briefcase, UserCog, BookOpen, HelpCircle
} from 'lucide-react';

interface Command {
  id: string;
  name: string;
  description: string;
  icon: any;
  action: () => void;
  category: string;
  keywords: string[];
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    // Navigation
    { id: 'nav-dashboard', name: 'Go to Command Center', description: 'Main dashboard', icon: Home, action: () => router.push('/dashboard'), category: 'Navigation', keywords: ['dashboard', 'home', 'main'] },
    { id: 'nav-calendar', name: 'Go to Calendar', description: 'View and manage schedules', icon: Calendar, action: () => router.push('/calendar'), category: 'Navigation', keywords: ['calendar', 'schedule', 'shifts'] },
    { id: 'nav-employees', name: 'Go to Employees', description: 'Manage your team', icon: Users, action: () => router.push('/employees'), category: 'Navigation', keywords: ['employees', 'staff', 'team'] },
    { id: 'nav-timeclock', name: 'Go to Timeclock', description: 'Clock in/out', icon: Clock, action: () => router.push('/timeclock'), category: 'Navigation', keywords: ['timeclock', 'clock', 'punch'] },
    { id: 'nav-payroll', name: 'Go to Payroll', description: 'Process payroll', icon: DollarSign, action: () => router.push('/payroll'), category: 'Navigation', keywords: ['payroll', 'pay', 'salary'] },
    { id: 'nav-analytics', name: 'Go to Analytics', description: 'View metrics', icon: TrendingUp, action: () => router.push('/analytics'), category: 'Navigation', keywords: ['analytics', 'metrics', 'stats'] },
    { id: 'nav-qapi', name: 'Go to QAPI Portal', description: 'Quality assurance', icon: Shield, action: () => router.push('/qapi'), category: 'Navigation', keywords: ['qapi', 'quality', 'compliance'] },
    { id: 'nav-guild', name: 'Go to Guild', description: 'Gamification hub', icon: Trophy, action: () => router.push('/guild'), category: 'Navigation', keywords: ['guild', 'gamification', 'achievements'] },
    { id: 'nav-oracle', name: 'Go to Oracle', description: 'AI predictions', icon: Sparkles, action: () => router.push('/oracle'), category: 'Navigation', keywords: ['oracle', 'ai', 'predictions'] },
    { id: 'nav-messages', name: 'Go to Messages', description: 'Team chat', icon: MessageSquare, action: () => router.push('/messages'), category: 'Navigation', keywords: ['messages', 'chat', 'communication'] },
    
    // Quick Actions
    { id: 'action-clock-in', name: 'Clock In', description: 'Start your shift', icon: Clock, action: () => router.push('/timeclock'), category: 'Actions', keywords: ['clock', 'in', 'start', 'shift'] },
    { id: 'action-request-time-off', name: 'Request Time Off', description: 'Submit PTO request', icon: Calendar, action: () => router.push('/time-off'), category: 'Actions', keywords: ['time', 'off', 'pto', 'vacation'] },
    { id: 'action-view-schedule', name: 'View My Schedule', description: 'See your shifts', icon: Calendar, action: () => router.push('/calendar'), category: 'Actions', keywords: ['schedule', 'shifts', 'calendar'] },
    { id: 'action-report-incident', name: 'Report Incident', description: 'Log safety incident', icon: Shield, action: () => router.push('/qapi'), category: 'Actions', keywords: ['incident', 'report', 'safety'] },
    
    // System
    { id: 'sys-settings', name: 'Settings', description: 'App preferences', icon: Settings, action: () => router.push('/settings'), category: 'System', keywords: ['settings', 'preferences', 'config'] },
    { id: 'sys-profile', name: 'My Profile', description: 'View profile', icon: Users, action: () => router.push('/profile'), category: 'System', keywords: ['profile', 'account', 'me'] },
    { id: 'sys-help', name: 'Help Center', description: 'Get assistance', icon: HelpCircle, action: () => router.push('/help'), category: 'System', keywords: ['help', 'support', 'assistance'] },
    { id: 'sys-tutorial', name: 'Restart Tutorial', description: 'View onboarding again', icon: BookOpen, action: () => { localStorage.removeItem('onboardingCompleted'); router.push('/dashboard'); }, category: 'System', keywords: ['tutorial', 'onboarding', 'guide'] },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.description.toLowerCase().includes(search.toLowerCase()) ||
    cmd.keywords.some(k => k.includes(search.toLowerCase()))
  );

  // Group by category
  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, Command[]>);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      // Escape
      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearch('');
        setSelectedIndex(0);
      }

      if (isOpen) {
        // Arrow navigation
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, filteredCommands.length - 1));
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, 0));
        }
        // Enter to execute
        if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
          e.preventDefault();
          filteredCommands[selectedIndex].action();
          setIsOpen(false);
          setSearch('');
          setSelectedIndex(0);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-[#110F0B] rounded shadow-2xl border border-amber-500/40/30 overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-[rgba(201,168,76,0.22)]">
          <Search className="w-5 h-5 text-[#9E8F75]" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search commands... (Cmd+K to toggle)"
            className="flex-1 bg-transparent text-white placeholder-stone-600 outline-none text-lg"
          />
          <kbd className="px-2 py-1 bg-[rgba(201,168,76,0.04)] rounded text-xs text-[#9E8F75] border border-[rgba(201,168,76,0.22)]">ESC</kbd>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {Object.entries(groupedCommands).map(([category, cmds]) => (
            <div key={category} className="mb-4">
              <div className="px-3 py-1 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                {category}
              </div>
              {cmds.map((cmd, idx) => {
                const globalIndex = filteredCommands.indexOf(cmd);
                const Icon = cmd.icon;
                return (
                  <button
                    key={cmd.id}
                    onClick={() => {
                      cmd.action();
                      setIsOpen(false);
                      setSearch('');
                      setSelectedIndex(0);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all text-left ${
                      globalIndex === selectedIndex
                        ? 'bg-amber-600/30 border border-amber-500/40/50'
                        : 'hover:bg-[rgba(201,168,76,0.06)]/50'
                    }`}
                  >
                    <div className="p-2 bg-[rgba(201,168,76,0.04)] rounded-lg">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{cmd.name}</div>
                      <div className="text-sm text-[#9E8F75]">{cmd.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
          
          {filteredCommands.length === 0 && (
            <div className="text-center py-12 text-[#9E8F75]">
              <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No commands found</p>
              <p className="text-sm mt-1">Try searching for something else</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 bg-[rgba(201,168,76,0.06)]/50 border-t border-[rgba(201,168,76,0.22)] text-xs text-[#9E8F75]">
          <div className="flex gap-4">
            <span><kbd className="px-1 bg-[rgba(201,168,76,0.04)] rounded">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1 bg-[rgba(201,168,76,0.04)] rounded">Enter</kbd> Select</span>
            <span><kbd className="px-1 bg-[rgba(201,168,76,0.04)] rounded">ESC</kbd> Close</span>
          </div>
          <span>Press <kbd className="px-1 bg-[rgba(201,168,76,0.04)] rounded">Cmd+K</kbd> anytime</span>
        </div>
      </div>
    </div>
  );
}


