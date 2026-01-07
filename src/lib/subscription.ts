export const TIER_LIMITS = {
  VIP: {
    maxEmployees: -1, // Unlimited
    features: {
      calendarViews: ['day', 'week', 'month'],
      dragAndDrop: true,
      timeOffRequests: true,
      shiftSwapping: true,
      availability: true,
      advancedReporting: true,
      notifications: true,
      autoScheduling: true,
      analytics: true,
      exportImport: true,
      customBranding: true,
      oracleAI: true,
      complianceSuite: true,
      assetVault: true,
      sentinel: true,
      guild: true,
      prioritySupport: true,
    }
  },
  PROFESSIONAL: {
    maxEmployees: 50,
    features: {
      calendarViews: ['day', 'week', 'month'],
      dragAndDrop: true,
      timeOffRequests: true,
      shiftSwapping: true,
      availability: true,
      advancedReporting: true,
      notifications: true,
      autoScheduling: false,
      analytics: false,
      exportImport: true,
      customBranding: false,
      oracleAI: false,
      complianceSuite: false,
      assetVault: false,
      sentinel: false,
      guild: false,
      prioritySupport: false,
    }
  },
  ENTERPRISE: {
    maxEmployees: 250,
    features: {
      calendarViews: ['day', 'week', 'month'],
      dragAndDrop: true,
      timeOffRequests: true,
      shiftSwapping: true,
      availability: true,
      advancedReporting: true,
      notifications: true,
      autoScheduling: true,
      analytics: true,
      exportImport: true,
      customBranding: true,
      oracleAI: true,
      complianceSuite: true,
      assetVault: true,
      sentinel: true,
      guild: true,
      prioritySupport: false,
    }
  },
  TITAN: {
    maxEmployees: -1, // Unlimited
    features: {
      calendarViews: ['day', 'week', 'month'],
      dragAndDrop: true,
      timeOffRequests: true,
      shiftSwapping: true,
      availability: true,
      advancedReporting: true,
      notifications: true,
      autoScheduling: true,
      analytics: true,
      exportImport: true,
      customBranding: true,
      oracleAI: true,
      complianceSuite: true,
      assetVault: true,
      sentinel: true,
      guild: true,
      prioritySupport: true,
    }
  }
} as const;

export type SubscriptionTier = keyof typeof TIER_LIMITS;
