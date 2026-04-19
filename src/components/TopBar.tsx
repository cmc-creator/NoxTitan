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
    VIP: 'bg-gradient-to-r from-amber-500 to-yellow-400',
    PROFESSIONAL: 'bg-gradient-to-r from-amber-700 to-amber-600',
    ENTERPRISE: 'bg-gradient-to-r from-amber-600 to-yellow-500',
    TITAN: 'bg-gradient-to-r from-yellow-500 to-amber-400',
  };

  const getUpsellMessage = () => {
    switch (userTier) {
      case 'PROFESSIONAL':
        return {
          icon: <Crown className="h-4 w-4" />,
          text: 'Upgrade to Enterprise',
          link: '/upgrade',
          color: 'text-amber-400 hover:text-amber-300 border-amber-600/40 hover:border-amber-400 hover:bg-amber-600/10'
        };
      case 'ENTERPRISE':
        return {
          icon: <Zap className="h-4 w-4" />,
          text: 'Go Titan',
          link: '/upgrade',
          color: 'text-amber-300 hover:text-amber-200 border-amber-500/40 hover:border-amber-300 hover:bg-amber-500/10'
        };
      case 'TITAN':
        return {
          icon: <TrendingUp className="h-4 w-4" />,
          text: 'Request Custom Features',
          link: '/custom-features',
          color: 'text-amber-300 border-amber-500/30 hover:bg-amber-500/10 hover:text-amber-200 hover:border-amber-400'
        };
      default:
        return null;
    }
  };

  const upsell = getUpsellMessage();

  return (
    <div style={{ background: '#0D0B08', borderBottom: '1px solid rgba(201,168,76,0.2)' }} className="shadow-2xl">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuToggle}
          className="md:hidden p-2 rounded transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          style={{ color: '#9E8F75' }}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex-1 md:flex-none">
          <h1 className="font-semibold truncate" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', letterSpacing: '0.05em' }}>
            <span style={{ color: '#C9A84C' }}>Nyx</span><span style={{ color: '#C8C8D0' }}>Titan</span><span style={{ color: '#5A5040', fontSize: '1rem', marginLeft: '8px', fontWeight: 300 }}>Business Suite</span>
          </h1>
          <p className="text-xs mt-0.5 hidden sm:block" style={{ color: '#5A5040', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.6rem' }}>
            Scheduling · HR · Payroll · Compliance
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop View */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs" style={{ color: '#5A5040', letterSpacing: '2px', textTransform: 'uppercase' }}>Plan:</span>
              <span className={`${tierColors[userTier]} text-black px-3 py-0.5 text-xs font-bold tracking-widest uppercase`} style={{ borderRadius: '2px' }}>
                {userTier}
              </span>
            </div>
            
            {upsell && (
              <Link 
                href={upsell.link}
                className={`flex items-center gap-1.5 px-3 py-1.5 ${upsell.color} border text-xs font-semibold tracking-wider uppercase transition-all`}
                style={{ borderRadius: '2px' }}
              >
                {upsell.icon}
                <span>{upsell.text}</span>
              </Link>
            )}
          </div>

          {/* Mobile: Tier Badge Only */}
          <div className="lg:hidden">
            <span className={`${tierColors[userTier]} text-black px-2 sm:px-3 py-0.5 text-xs font-bold tracking-widest uppercase`} style={{ borderRadius: '2px' }}>
              {userTier}
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Oracle Quick Access */}
            <Link
              href="/oracle"
              className="hidden sm:flex items-center justify-center transition-all hover:scale-105"
              title="Oracle AI"
            >
              <img src="/oracle-logo.png" alt="Oracle AI" className="h-14 sm:h-16 md:h-20 w-14 sm:w-16 md:w-20 object-contain" />
            </Link>
            
            {/* User Button */}
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded transition-colors min-h-[40px]" style={{ color: '#9E8F75', borderRadius: '2px' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.06)'; (e.currentTarget as HTMLButtonElement).style.color = '#F0EBE0'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#9E8F75'; }}>
              <User className="h-4 w-4" />
              <span className="text-xs font-medium hidden md:inline" style={{ letterSpacing: '1px' }}>Admin User</span>
            </button>
            
            {/* Settings Button */}
            <Link href="/settings"
              className="flex items-center justify-center gap-2 px-3 py-2 transition-colors border min-h-[40px]"
              style={{ color: '#C9A84C', borderColor: 'rgba(201,168,76,0.2)', borderRadius: '2px' }}
              title="Settings"
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,168,76,0.08)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
            >
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline text-xs" style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.65rem' }}>Settings</span>
            </Link>
            
            <button className="flex items-center gap-1.5 px-3 py-2 transition-colors" style={{ color: '#6A5E48', borderRadius: '2px' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#fca5a5'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.08)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#6A5E48'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}>
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

