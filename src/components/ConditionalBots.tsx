'use client';

import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import AIAssistant from './AIAssistant';
import ChatBot from './ChatBot';
import VoiceAIAssistant from './VoiceAIAssistant';

const PUBLIC_PAGES = ['/', '/landing', '/pricing', '/signup', '/login'];

export default function ConditionalBots() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  // Never show on public/marketing pages
  if (PUBLIC_PAGES.includes(pathname)) return null;

  // Authenticated app pages only
  if (isAuthenticated) {
    return (
      <>
        <ChatBot />
        <VoiceAIAssistant context="dashboard" userRole="hr" />
      </>
    );
  }

  return null;
}

