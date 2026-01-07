'use client';

import { User, LogOut } from 'lucide-react';
import ThemeSelector from './ThemeSelector';

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

  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Employee Scheduler
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your team&apos;s schedule efficiently
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Subscription:</span>
            <span className={`${tierColors[userTier]} text-white px-3 py-1 rounded-full text-xs font-bold`}>
              {userTier}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ThemeSelector />
            
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Admin User</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
