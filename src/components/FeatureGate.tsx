'use client';

import Link from 'next/link';
import { Lock, Crown } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';
import { TIER_LIMITS } from '@/lib/subscription';

const FEATURE_REQUIRED_TIER: Record<string, string> = {
  oracleAI: 'Enterprise',
  assetVault: 'Enterprise',
  sentinel: 'Enterprise',
  guild: 'Enterprise',
  complianceSuite: 'Enterprise',
  autoScheduling: 'Professional',
  analytics: 'Enterprise',
  customBranding: 'Enterprise',
  prioritySupport: 'Titan',
};

const G = '#C9A84C';
const GB = '#E8C060';
const GBORDER = 'rgba(201,168,76,0.22)';
const BGMAIN = '#070604';
const BGCARD = '#110F0B';
const TEXTPRIMARY = '#F0EBE0';
const TEXTDIM = '#9E8F75';

interface FeatureGateProps {
  feature: keyof typeof TIER_LIMITS.VIP.features;
  featureName: string;
  children: React.ReactNode;
}

export default function FeatureGate({ feature, featureName, children }: FeatureGateProps) {
  const { tier, loading, can } = useSubscription();

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', background: BGMAIN }}>
        <div style={{ color: TEXTDIM, fontSize: '15px', letterSpacing: '0.06em' }}>Loading…</div>
      </div>
    );
  }

  if (can(feature)) {
    return <>{children}</>;
  }

  const requiredTier = FEATURE_REQUIRED_TIER[feature as string] ?? 'Enterprise';
  const currentTierDisplay = tier.charAt(0) + tier.slice(1).toLowerCase();

  return (
    <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', background: BGMAIN }}>
      <div style={{ background: BGCARD, border: `1px solid ${GBORDER}`, borderRadius: '4px', padding: '56px 48px', maxWidth: '520px', width: '100%', textAlign: 'center' }}>
        <Lock size={44} color={G} style={{ marginBottom: '24px' }} />
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 700, color: TEXTPRIMARY, marginBottom: '14px', letterSpacing: '0.04em' }}>
          {featureName}
        </h2>
        <p style={{ color: TEXTDIM, fontSize: '15px', lineHeight: 1.7, marginBottom: '8px' }}>
          This feature requires the{' '}
          <strong style={{ color: G }}>{requiredTier} plan</strong> or higher.
        </p>
        <p style={{ color: TEXTDIM, fontSize: '14px', marginBottom: '36px' }}>
          Your current plan:{' '}
          <strong style={{ color: TEXTPRIMARY }}>{currentTierDisplay}</strong>
        </p>
        <Link
          href="/pricing"
          style={{
            padding: '13px 36px',
            borderRadius: '4px',
            border: `1px solid ${G}`,
            background: 'linear-gradient(135deg, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.06) 100%)',
            color: GB,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}>
          <Crown size={16} /> Upgrade Plan →
        </Link>
      </div>
    </div>
  );
}
