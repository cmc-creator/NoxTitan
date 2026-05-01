'use client';

import { useSession } from 'next-auth/react';
import { TIER_LIMITS, hasFeature, SubscriptionTier } from '@/lib/subscription';

export function useSubscription() {
  const { data: session, status } = useSession();
  const tier = (session?.user?.tier as SubscriptionTier) ?? 'PROFESSIONAL';

  return {
    tier,
    loading: status === 'loading',
    can: (feature: keyof typeof TIER_LIMITS.VIP.features) => hasFeature(tier, feature),
    maxEmployees: TIER_LIMITS[tier]?.maxEmployees ?? 50,
  };
}
