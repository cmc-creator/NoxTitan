'use client';

import { User, LogOut, Crown, Zap, TrendingUp, Sparkles, Settings, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface TopBarProps {
  userTier?: 'VIP' | 'PROFESSIONAL' | 'ENTERPRISE' | 'TITAN';
  onMenuToggle?: () => void;
}

export default function TopBar({ userTier = 'PROFESSIONAL', onMenuToggle }: TopBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const tierColors = {
    VIP: 'bg-gradient-to-r from-amber-400 to-yellow-500',
    PROFESSIONAL: 'bg-gradient-to-r from-blue-600 to-cyan-600',
    ENTERPRISE: 'bg-gradient-to-r from-amber-600 to-yellow-600',
    TITAN: 'bg-gradient-to-r from-yellow-600 to-amber-500',
  };

  const getUpsellMessage = () => {
    switch (userTier) {
      case 'PROFESSIONAL':
        return {
          icon: <Crown className="h-4 w-4" />,
          text: 'Upgrade to Enterprise',
          link: '/upgrade',
          color: 'text-amber-600 hover:text-yellow-600'
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
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuToggle}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="flex-1 md:flex-none">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate">
            NyxTitan Business Suite
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 hidden sm:block">
            All-in-one platform for scheduling, HR, payroll, compliance & more
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop View */}
          <div className="hidden lg:flex items-center gap-3">
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

          {/* Mobile: Tier Badge Only */}
          <div className="lg:hidden">
            <span className={`${tierColors[userTier]} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold`}>
              {userTier}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Oracle Quick Access - Hidden on small mobile */}
            <Link
              href="/oracle"
              className="hidden sm:flex items-center justify-center transition-all hover:scale-110"
              title="Oracle AI - Predictive Analytics"
            >
              <img src="/oracle-logo.png" alt="Oracle AI" className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 object-contain" />
            </Link>
            
            {/* User Button */}
            <button className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors min-h-[44px]">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium hidden md:inline">Admin User</span>
            </button>
            
            {/* Settings Button */}
            <button 
              className="flex items-center justify-center gap-2 p-2 sm:px-4 sm:py-2 text-amber-300 hover:text-white hover:bg-amber-600/30 rounded-lg transition-colors border border-amber-500/30 hover:border-amber-400 min-h-[44px] min-w-[44px]"
              title="Settings & Customization"
            >
              <Settings className="h-5 w-5" />
              <span className="hidden sm:inline text-sm">Settings</span>
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
