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
  GraduationCap,
  X
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
      { name: 'QAPI Portal', href: '/qapi', icon: ClipboardCheck },
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
      { name: 'Forms & Surveys', href: '/forms', icon: FileText },
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

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname();

  const handleTutorialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Remove the onboarding completed flag to show it again
    localStorage.removeItem('onboardingCompleted');
    // Trigger a page reload to show the onboarding
    window.location.href = '/dashboard';
  };

  const sidebarContent = (
    <>
      <div style={{ background: 'linear-gradient(180deg, #0D0B08 0%, #110F0B 100%)', borderBottom: '1px solid rgba(201,168,76,0.35)' }} className="flex flex-col items-center justify-center py-5 shadow-2xl">
        {/* Mobile Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:hidden p-2 text-gray-200 hover:text-white hover:bg-amber-600/30 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        )}
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/titanlogo.png"
            alt="NyxTitan"
            style={{ height: '36px', width: 'auto', filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.5))' }}
          />
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.35rem', letterSpacing: '2px' }}>
            <span style={{ color: '#C9A84C' }}>Nyx</span><span style={{ color: '#C8C8D0' }}>Titan</span>
          </span>
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase mt-2"
              style={{ color: 'rgba(201,168,76,0.6)', letterSpacing: '3px' }}>
          Forged for Titans
        </span>
      </div>
      
      <nav className="flex-1 px-3 py-5 space-y-3 overflow-y-auto">
        {navigationSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.title && (
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-2 px-2" style={{ color: 'rgba(201,168,76,0.5)', letterSpacing: '3px', fontSize: '0.62rem' }}>
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
                      onClick={(e) => {
                        handleTutorialClick(e);
                        onClose?.();
                      }}
                        className="w-full flex items-center px-3 py-2 text-sm font-medium transition-all min-h-[44px]"
                      style={{ background: 'transparent', border: '1px solid rgba(201,168,76,0.28)', borderRadius: '4px', color: '#C9A84C', letterSpacing: '0.04em' }}
                    >
                      <Icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </button>
                  );
                }
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all border text-pop-light min-h-[44px]',
                      isCommandCenter
                        ? isActive
                          ? 'bg-gradient-to-r from-amber-900/60 to-transparent text-[#E8C060] shadow-[0_0_15px_rgba(201,168,76,0.2)] border-amber-500/60 font-bold'
                          : 'text-amber-400 hover:bg-amber-900/30 border-amber-600/30 hover:border-amber-500/50 font-semibold'
                        : isActive
                        ? 'lux-nav-active font-semibold'
                        : 'text-[#9E8F75] hover:bg-amber-900/20 hover:text-[#C9A84C] border-transparent hover:border-amber-800/40'
                    )}
                  >
                    <Icon className={cn("mr-3 h-4 w-4", isCommandCenter && "drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]")} />
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
    </>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && onClose && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Desktop Sidebar - Always visible */}
      <aside className="hidden md:flex flex-col w-64 min-h-screen border-r shadow-2xl" style={{ background: '#070604', borderColor: 'rgba(201,168,76,0.2)' }}>
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar - Drawer */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 flex flex-col w-64 h-full shadow-2xl transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ background: '#070604', borderRight: '1px solid rgba(201,168,76,0.2)' }}
      >
        {sidebarContent}
      </aside>
    </>
  );
}

