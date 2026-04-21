'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface AppLayoutProps {
  children: React.ReactNode;
  userTier?: 'VIP' | 'PROFESSIONAL' | 'ENTERPRISE' | 'TITAN';
}

export default function AppLayout({ children, userTier = 'PROFESSIONAL' }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[rgba(201,168,76,0.08)]">
      {/* Sidebar - responsive */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <TopBar 
          userTier={userTier} 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)} 
        />

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}

