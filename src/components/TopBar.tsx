'use client';

import { User, LogOut, Crown, Zap, TrendingUp, Sparkles, Settings } from 'lucide-react';
import Link from 'next/link';

interface TopBarProps {
  userTier?: 'VIP' | 'PROFESSIONAL' | 'ENTERPRISE' | 'TITAN';
}

export default function TopBar({ userTier = 'PROFESSIONAL' }: TopBarProps) {
  const tierColors = {
    VIP: 'bg-gradient-to-r from-amber-400 to-purple-600',
    PROFESSIONAL: 'bg-blue-600',
    ENTERPRISE: 'bg-purple-600',
    TITAN: 'bg-gradient-to-r from-purple-600 to-pink-600',
  };

  const getUpsellMessage = () => {
    switch (userTier) {
      case 'PROFESSIONAL':
        return {
          icon: <Crown className="h-4 w-4" />,
          text: 'Upgrade to Enterprise',
          link: '/upgrade',
          color: 'text-purple-600 hover:text-purple-700'
        };
      case 'ENTERPRISE':
        return {
          icon: <Zap className="h-4 w-4" />,
          text: 'Go Titan',
          link: '/upgrade',
          color: 'text-pink-600 hover:text-pink-700'
        };
      case 'TITAN':
        return {
          icon: <TrendingUp className="h-4 w-4" />,
          text: 'Request Custom Features',
          link: '/custom-features',
          color: 'text-blue-300 border-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500'
        };
      default:
        return null;
    }
  };

  const upsell = getUpsellMessage();

  return (
    <div className="bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-white">
            NyxTitan Business Suite
          </h1>
          <p className="text-sm text-purple-200 mt-1">
            All-in-one platform for scheduling, HR, payroll, compliance & more
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-white font-medium">Subscription:</span>
              <span className={`${tierColors[userTier]} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                {userTier}
              </span>
            </div>
            
            {upsell && (
              <Link 
                href={upsell.link}
                className={`flex items-center gap-1.5 px-3 py-1.5 ${upsell.color} border rounded-lg text-xs font-semibold transition-all`}
              >
                {upsell.icon}
                <span>{upsell.text}</span>
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Oracle Quick Access */}
            <Link
              href="/oracle"
              className="flex items-center justify-center transition-all hover:scale-110"
              title="Oracle AI - Predictive Analytics"
            >
              <img src="/oracle-logo.png" alt="Oracle AI" className="h-24 w-24 object-contain" />
            </Link>
            
            <button className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Admin User</span>
            </button>
            
            <button 
              className="flex items-center gap-2 px-4 py-2 text-purple-300 hover:text-white hover:bg-purple-600/30 rounded-lg transition-colors border border-purple-500/30 hover:border-purple-400"
              title="Settings & Customization"
            >
              <Settings className="h-5 w-5" />
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
