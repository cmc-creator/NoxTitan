'use client';

import { usePathname } from 'next/navigation';
import TopNavigation from './TopNavigation';
import { useAuth } from '@/lib/auth-context';

export default function ConditionalTopNav() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();
  
  // Public pages - don't show navigation
  const publicPages = ['/', '/landing', '/pricing', '/signup', '/login'];
  if (publicPages.includes(pathname)) {
    return null;
  }
  
  // If not authenticated and not on a public page, don't show navigation
  if (!isAuthenticated) {
    return null;
  }
  
  return <TopNavigation />;
}
