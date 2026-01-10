'use client';

import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import AIAssistant from './AIAssistant';
import ChatBot from './ChatBot';
import VoiceAIAssistant from './VoiceAIAssistant';

export default function ConditionalBots() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();
  
  // Public/sales pages where the sales chatbot should always show
  const salesPages = ['/', '/landing', '/pricing', '/signup', '/login'];
  const isSalesPage = salesPages.includes(pathname);
  
  // Show sales chatbot on public pages regardless of auth status
  if (isSalesPage) {
    return <AIAssistant />;
  }
  
  // For authenticated users on private pages, show the full AI assistants
  if (isAuthenticated) {
    return (
      <>
        {/* Nox and Titan - Full AI Assistants for authenticated users */}
        <ChatBot />
        <VoiceAIAssistant context="dashboard" userRole="hr" />
      </>
    );
  }
  
  // No bots for unauthenticated users on private pages
  return null;
}
