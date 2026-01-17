'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Calendar, 
  Users, 
  Clock, 
  BarChart3, 
  Settings, 
  Bell,
  Home,
  DollarSign,
  Shield,
  Link2,
  TrendingUp,
  BookOpen,
  Award,
  Bot,
  Headphones,
  Megaphone,
  Upload,
  Package,
  Sparkles,
  Trophy,
  ShoppingBag,
  UserCog,
  Briefcase,
  ClipboardCheck,
  MessageSquare,
  UserCircle,
  Lightbulb,
  Heart,
  FileText,
  Coffee,
  Calculator,
  HelpCircle,
  GraduationCap
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationSections = [
  {
    title: '',
    items: [
      { name: 'Command Center', href: '/dashboard', icon: Home, isCommandCenter: true },
      { name: 'Notifications', href: '/notifications', icon: Bell, hasNotificationBadge: true },
      { name: 'Quick Start Tutorial', href: '#tutorial', icon: GraduationCap, isTutorial: true },
    ]
  },
  {
    title: 'Core Operations',
    items: [
      { name: 'Calendar', href: '/calendar', icon: Calendar },
      { name: 'Employees', href: '/employees', icon: Users },
      { name: 'Timeclock', href: '/timeclock', icon: Clock },
      { name: 'Attendance', href: '/attendance', icon: ClipboardCheck },
      { name: 'Time Off', href: '/time-off', icon: Clock },
      { name: 'Shift Logs', href: '/shift-logs', icon: FileText },
      { name: 'Payroll', href: '/payroll', icon: DollarSign },
      { name: 'Accounting', href: '/accounting', icon: Calculator },
    ]
  },
  {
    title: 'Enterprise Suite',
    items: [
      { name: 'Asset Vault', href: '/vault', icon: Package },
      { name: 'Sentinel', href: '/sentinel', icon: Shield },
      { name: 'Oracle', href: '/oracle', icon: Sparkles },
      { name: 'Compliance', href: '/compliance', icon: Shield },
    ]
  },
  {
    title: 'Team & Culture',
    items: [
      { name: 'Guild', href: '/guild', icon: Trophy },
      { name: 'Recognition', href: '/recognition', icon: Award },
      { name: 'Team Culture', href: '/team-culture', icon: Heart },
      { name: 'Team Activities', href: '/activities', icon: Sparkles },
      { name: 'Basecamp', href: '/basecamp', icon: Coffee },
      { name: 'Manager Hub', href: '/manager-basecamp', icon: Briefcase },
      { name: 'Merch Store', href: '/merch-store', icon: ShoppingBag },
    ]
  },
  {
    title: 'Human Resources',
    items: [
      { name: 'HR Dashboard', href: '/hr', icon: UserCog },
      { name: 'HR Planner', href: '/hr-planner', icon: Briefcase },
      { name: 'QAPI Portal', href: '/qapi', icon: Shield },
      { name: 'Onboarding', href: '/onboarding', icon: UserCircle },
    ]
  },
  {
    title: 'Management',
    items: [
      { name: 'Analytics', href: '/analytics', icon: TrendingUp },
      { name: 'Reports', href: '/reports', icon: BarChart3 },
      { name: 'Manager Academy', href: '/manager-academy', icon: GraduationCap },
      { name: 'Training', href: '/training', icon: BookOpen },
      { name: 'Learning', href: '/learning', icon: BookOpen },
      { name: 'AI Assistant', href: '/ai-assistant', icon: Bot },
      { name: 'Incentives', href: '/incentives', icon: Award },
    ]
  },
  {
    title: 'Communication',
    items: [
      { name: 'Messages', href: '/messages', icon: MessageSquare },
      { name: 'Announcements', href: '/announcements', icon: Megaphone },
      { name: 'Suggestions', href: '/suggestions', icon: Lightbulb },
    ]
  },
  {
    title: 'System',
    items: [
      { name: 'Profile', href: '/profile', icon: UserCircle },
      { name: 'Settings', href: '/settings', icon: Settings },
      { name: 'Data Import', href: '/import', icon: Upload },
      { name: 'Integrations', href: '/integrations', icon: Link2 },
      { name: 'Help', href: '/help', icon: HelpCircle },
      { name: 'Support', href: '/support', icon: Headphones },
    ]
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const handleTutorialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Remove the onboarding completed flag to show it again
    localStorage.removeItem('onboardingCompleted');
    // Trigger a page reload to show the onboarding
    window.location.href = '/dashboard';
  };

  return (
    <div className="flex flex-col w-64 bg-gradient-to-b from-black via-gray-900 to-purple-950 min-h-screen border-r-2 border-purple-600/30 shadow-2xl">
      <div className="flex flex-col items-center justify-center py-4 bg-gradient-to-br from-purple-900 via-purple-700 to-black shadow-xl border-b-4 border-purple-500">
        <img 
          src="/noxtitan-name-logo.png" 
          alt="NoxTitan" 
          className="h-10 object-contain"
          style={{filter: 'brightness(1.2) drop-shadow(0 4px 12px rgba(168,85,247,0.6))'}}
        />
        <span className="text-purple-200 text-[10px] font-bold tracking-widest uppercase mt-2" 
              style={{ 
                textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 10px rgba(168,85,247,0.5)',
                filter: 'brightness(1.2)'
              }}>
          Forged for Titans
        </span>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-4 overflow-y-auto">
        {navigationSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.title && (
              <h3 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-2 px-2">
                {section.title}
              </h3>
            )}
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                const isCommandCenter = 'isCommandCenter' in item ? item.isCommandCenter : false;
                const hasNotificationBadge = 'hasNotificationBadge' in item ? item.hasNotificationBadge : false;
                const isTutorial = 'isTutorial' in item ? item.isTutorial : false;
                
                if (isTutorial) {
                  return (
                    <button
                      key={item.name}
                      onClick={handleTutorialClick}
                      className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all border text-pop-light bg-gradient-to-r from-green-800 via-green-600 to-teal-900 text-white hover:from-green-900 hover:via-green-700 hover:to-teal-950 shadow-[0_0_15px_rgba(34,197,94,0.4)] border-green-600/50 hover:scale-105 font-bold"
                    >
                      <Icon className="mr-3 h-4 w-4 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                      {item.name}
                    </button>
                  );
                }
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all border text-pop-light',
                      isCommandCenter
                        ? isActive
                          ? 'bg-gradient-to-r from-purple-900 via-purple-700 to-black text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] border-purple-500 scale-105 font-bold'
                          : 'bg-gradient-to-r from-purple-800 via-purple-600 to-gray-900 text-white hover:from-purple-900 hover:via-purple-700 hover:to-black shadow-[0_0_15px_rgba(168,85,247,0.4)] border-purple-600/50 hover:scale-105 font-bold'
                        : isActive
                        ? 'bg-blue-600 text-white border-blue-500/50'
                        : 'text-gray-300 hover:bg-purple-800/50 hover:text-white border-transparent'
                    )}
                  >
                    <Icon className={cn("mr-3 h-4 w-4", isCommandCenter && "drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]")} />
                    {item.name}
                    {hasNotificationBadge && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">3</span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
