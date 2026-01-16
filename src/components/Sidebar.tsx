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
  Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationSections = [
  {
    title: '',
    items: [
      { name: 'Command Center', href: '/dashboard', icon: Home, isCommandCenter: true },
      { name: 'Notifications', href: '/notifications', icon: Bell, hasNotificationBadge: true },
    ]
  },
  {
    title: 'Core Operations',
    items: [
      { name: 'Calendar', href: '/calendar', icon: Calendar },
      { name: 'Employees', href: '/employees', icon: Users },
      { name: 'Time Off', href: '/time-off', icon: Clock },
      { name: 'Payroll', href: '/payroll', icon: DollarSign },
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
      { name: 'Team Activities', href: '/activities', icon: Sparkles },
      { name: 'Merch Store', href: '/merch-store', icon: ShoppingBag },
    ]
  },
  {
    title: 'Human Resources',
    items: [
      { name: 'HR Dashboard', href: '/hr', icon: UserCog },
      { name: 'HR Planner', href: '/hr-planner', icon: Briefcase },
      { name: 'QAPI Portal', href: '/qapi', icon: Shield },
    ]
  },
  {
    title: 'Management',
    items: [
      { name: 'Analytics', href: '/analytics', icon: TrendingUp },
      { name: 'Training', href: '/training', icon: BookOpen },
      { name: 'AI Assistant', href: '/ai-assistant', icon: Bot },
    ]
  },
  {
    title: 'System',
    items: [
      { name: 'Announcements', href: '/announcements', icon: Megaphone },
      { name: 'Data Import', href: '/import', icon: Upload },
      { name: 'Integrations', href: '/integrations', icon: Link2 },
      { name: 'Support', href: '/support', icon: Headphones },
    ]
  },
];

export default function Sidebar() {
  const pathname = usePathname();

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
