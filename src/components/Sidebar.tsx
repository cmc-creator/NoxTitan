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
  ShoppingBag
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Command Center', href: '/dashboard', icon: Home, isCommandCenter: true },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Employees', href: '/employees', icon: Users },
  { name: 'Asset Vault', href: '/vault', icon: Package },
  { name: 'Sentinel', href: '/sentinel', icon: Shield },
  { name: 'Oracle', href: '/oracle', icon: Sparkles },
  { name: 'Guild', href: '/guild', icon: Trophy },
  { name: 'Team Activities', href: '/activities', icon: Sparkles },
  { name: 'Merch Store', href: '/merch-store', icon: ShoppingBag },
  { name: 'Analytics', href: '/analytics', icon: TrendingUp },
  { name: 'Payroll', href: '/payroll', icon: DollarSign },
  { name: 'Recognition', href: '/recognition', icon: Award },
  { name: 'Training', href: '/training', icon: BookOpen },
  { name: 'AI Assistant', href: '/ai-assistant', icon: Bot },
  { name: 'Compliance', href: '/compliance', icon: Shield },
  { name: 'Announcements', href: '/announcements', icon: Megaphone },
  { name: 'Data Import', href: '/import', icon: Upload },
  { name: 'Integrations', href: '/integrations', icon: Link2 },
  { name: 'Support', href: '/support', icon: Headphones },
  { name: 'Time Off', href: '/time-off', icon: Clock },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-gradient-to-b from-black via-gray-900 to-purple-950 min-h-screen border-r-2 border-purple-600/30 shadow-2xl">
      <div className="flex flex-col items-center justify-center py-4 bg-gradient-to-br from-purple-900 via-purple-700 to-black shadow-xl border-b-4 border-purple-500">
        <span className="relative text-2xl font-black tracking-wider uppercase inline-block">
          {/* Metallic chrome text with purple tint and black */}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-200 via-slate-600 via-black to-purple-950"
                style={{
                  textShadow: `
                    0 1px 0 rgba(255,255,255,0.4),
                    0 2px 0 rgba(200,200,255,0.3),
                    0 3px 0 rgba(168,85,247,0.2),
                    0 4px 0 rgba(0,0,0,0.4),
                    0 6px 8px rgba(0,0,0,0.5),
                    0 8px 12px rgba(168,85,247,0.6)
                  `,
                  WebkitTextStroke: '1px rgba(88,28,135,0.5)',
                  filter: 'brightness(1.3) contrast(1.2)'
                }}>
            ⚡ NoxTitan
          </span>
          {/* Top metallic highlight */}
          <span className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent bg-clip-text text-transparent opacity-70"
                style={{ WebkitTextStroke: '0px' }}>
            ⚡ NoxTitan
          </span>
        </span>
        <span className="text-purple-200 text-[10px] font-bold tracking-widest uppercase mt-1" 
              style={{ 
                textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 10px rgba(168,85,247,0.5)',
                filter: 'brightness(1.2)'
              }}>
          Forged for Titans
        </span>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          const isCommandCenter = item.name === 'Command Center';
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all border-2 text-pop-light',
                isCommandCenter
                  ? isActive
                    ? 'bg-gradient-to-r from-purple-900 via-purple-700 to-black text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] border-purple-500 scale-105 font-bold'
                    : 'bg-gradient-to-r from-purple-800 via-purple-600 to-gray-900 text-white hover:from-purple-900 hover:via-purple-700 hover:to-black shadow-[0_0_15px_rgba(168,85,247,0.4)] border-purple-600/50 hover:scale-105 font-bold'
                  : isActive
                  ? 'bg-blue-600 text-white border-blue-500/50'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white border-transparent'
              )}
            >
              <Icon className={cn("mr-3 h-5 w-5", isCommandCenter && "drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="px-4 py-4 border-t border-gray-800">
        <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
          <Bell className="mr-3 h-5 w-5" />
          Notifications
          <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
            3
          </span>
        </button>
      </div>
    </div>
  );
}
