// Subscription Tier Feature Access Control
// Premium features reserved for higher tiers!

export type SubscriptionTier = 'professional' | 'enterprise' | 'vip' | 'titan';

export const tierFeatures = {
  professional: {
    name: 'Professional',
    price: 499,
    maxEmployees: 50,
    features: {
      // Basic AI Chat
      chatbot: {
        enabled: true,
        name: 'Basic Assistant',
        customization: {
          name: false,
          avatar: false,
          personality: false,
          voice: false,
          colors: false,
        },
        voiceCommands: false,
        textToSpeech: false,
        personalities: ['professional'], // Only 1 fixed personality
        avatars: ['🤖'], // Only 1 default avatar
        description: 'Basic text-only chatbot with professional responses',
      },
      // Limited Gamification
      gamification: {
        enabled: false,
        description: 'Not available in Professional tier',
      },
      // Basic Theme
      themes: {
        customization: false,
        presets: ['default'], // Only default theme
        description: 'Standard theme only',
      },
      dashboardCustomization: false,
    },
  },

  enterprise: {
    name: 'Enterprise',
    price: 1499,
    maxEmployees: 250,
    features: {
      // Enhanced AI Chat
      chatbot: {
        enabled: true,
        name: 'Enhanced Assistant',
        customization: {
          name: true, // Can rename
          avatar: true, // Can pick from 6 avatars
          personality: false, // Still locked
          voice: false, // Still locked
          colors: true, // Can pick from 3 color schemes
        },
        voiceCommands: false, // Still locked
        textToSpeech: false, // Still locked
        personalities: ['professional'], // Still only 1
        avatars: ['🤖', '👨‍💻', '👩‍💻', '🦉', '⚡', '💼'], // 6 avatar options
        colors: ['blue', 'purple', 'green'], // 3 color options
        description: 'Enhanced chatbot with limited customization',
      },
      // Basic Gamification
      gamification: {
        enabled: true,
        limited: true,
        features: {
          quests: true,
          xp: true,
          levels: true,
          leaderboard: false, // Locked
          themes: ['default'], // Only 1 theme
          rewards: false, // Can't redeem rewards
          managerChallenges: false, // Locked
        },
        description: 'Basic quest tracking with XP and levels (no rewards)',
      },
      // Limited Theme Studio
      themes: {
        customization: false,
        presets: ['default', 'dark', 'light'], // 3 preset themes
        description: 'Choose from 3 preset themes',
      },
      dashboardCustomization: true, // Can show/hide tiles
    },
  },

  vip: {
    name: 'VIP Access',
    price: 'complimentary',
    maxEmployees: 'unlimited',
    features: {
      // Advanced AI Chat
      chatbot: {
        enabled: true,
        name: 'VIP Assistant',
        customization: {
          name: true,
          avatar: true,
          personality: true, // 4 personalities
          voice: true, // 6 voice options
          colors: true,
        },
        voiceCommands: true, // Voice enabled!
        textToSpeech: true, // Can speak!
        personalities: ['professional', 'friendly', 'energetic', 'wise'], // 4 options
        avatars: ['🤖', '👨‍💻', '👩‍💻', '🦉', '⚡', '💼', '🦸', '🧙', '🌟', '💎', '🔮', '🏆'], // 12 avatars
        voices: ['professional-male', 'professional-female', 'friendly-male', 'friendly-female', 'energetic', 'calm'], // 6 voices
        colors: ['blue', 'purple', 'green', 'orange', 'pink'], // 5 colors
        description: 'Advanced AI with voice commands and expanded customization',
      },
      // Advanced Gamification
      gamification: {
        enabled: true,
        limited: false,
        features: {
          quests: true,
          xp: true,
          levels: true,
          leaderboard: true,
          themes: ['tomb-raider', 'treasure-hunt'], // 2 themes
          rewards: true, // Can redeem some rewards
          managerChallenges: false, // Still locked for TITAN only
          limitedRewards: ['perks'], // Only perks, no exclusive rewards
        },
        description: 'Full quest system with leaderboards and basic rewards',
      },
      // Basic Theme Studio
      themes: {
        customization: true,
        limited: true,
        features: {
          colors: true, // Can customize colors
          fonts: false, // Still locked
          layouts: false, // Still locked
          effects: false, // Still locked
        },
        presets: ['default', 'dark', 'light', 'blue', 'purple'], // 5 presets
        description: 'Color customization with 5 preset themes',
      },
      dashboardCustomization: true,
      aiSuggestions: false, // Still locked for TITAN
    },
  },

  titan: {
    name: 'Titan',
    price: 2999,
    maxEmployees: 'unlimited',
    features: {
      // FULLY LOADED AI Chat
      chatbot: {
        enabled: true,
        name: 'Titan AI - Fully Customizable',
        customization: {
          name: true,
          avatar: true,
          personality: true,
          voice: true,
          colors: true,
          uploadCustomAvatar: true, // EXCLUSIVE!
        },
        voiceCommands: true,
        textToSpeech: true,
        personalities: [
          'helpful',
          'professional',
          'friendly',
          'energetic',
          'wise',
          'funny',
          'adventurous',
          'calm',
        ], // ALL 8 personalities
        avatars: [
          '🤖', '🦾', '👨‍💻', '👩‍💻', '🧑‍⚕️', '👨‍⚕️', '👩‍⚕️',
          '🦸', '🦹', '🧙', '🧚', '🦉', '🦊', '🐕', '🐈', '🦁',
          '🐉', '🦄', '🌟', '⚡', '🎯', '🏆', '💎', '🔮'
        ], // ALL 24 avatars + custom upload
        names: [
          'Basebot', 'Ally', 'Partner', 'Sidekick', 'Buddy', 'Guide', 'Coach',
          'Helper', 'Scout', 'Navigator', 'Oracle', 'Sage', 'Mentor', 'Compass',
          'Atlas', 'Sherpa', 'Wingman', 'Copilot', 'Beacon', 'Phoenix', 'Nova',
          'Echo', 'Nexus', 'Pulse', 'Spark', 'Quest', 'Journey', 'Pathfinder'
        ], // ALL 28 names + custom
        voices: [
          'professional-male', 'professional-female',
          'friendly-male', 'friendly-female',
          'energetic', 'calm',
          'british-male', 'british-female',
          'southern', 'robotic', 'wise'
        ], // ALL 12 voices with full controls (speed, pitch, volume)
        colors: [
          'Ocean Blue', 'Purple Dream', 'Forest Green', 'Sunset',
          'Golden Hour', 'Rose Garden', 'Deep Space', 'Tropical'
        ], // ALL 8 color schemes
        description: '🌟 FULLY LOADED: Complete customization, voice commands, all personalities, 24+ avatars!',
      },
      // COMPLETE Gamification System
      gamification: {
        enabled: true,
        limited: false,
        features: {
          quests: true,
          xp: true,
          levels: true,
          leaderboard: true,
          themes: ['tomb-raider', 'treasure-hunt', 'space-explorer', 'detective', 'fantasy-quest'], // ALL 5 themes
          rewards: true,
          managerChallenges: true, // EXCLUSIVE!
          customQuests: true, // EXCLUSIVE - create your own quests!
          teamCompetitions: true, // EXCLUSIVE!
          allRewards: ['perks', 'recognition', 'rewards', 'exclusive'], // ALL reward tiers
          achievements: true,
          streaks: true,
          artifacts: true,
        },
        description: '🎮 FULL GAME MODE: All 5 adventure themes, custom quests, team competitions, all rewards!',
      },
      // FULL Theme Studio
      themes: {
        customization: true,
        limited: false,
        features: {
          colors: true, // Full color picker for all 9 categories
          fonts: true, // 8 font families
          layouts: true, // All layout options
          effects: true, // All visual effects
          cardStyles: true, // All 5 card styles
          spacing: true, // All spacing options
          borders: true, // All border options
          previewLive: true, // Live preview
        },
        presets: [
          'Default Blue', 'Emerald Forest', 'Purple Passion', 'Sunset Orange',
          'Ocean Breeze', 'Rose Gold', 'Dark Mode Pro', 'Mint Fresh'
        ], // ALL 8 presets + unlimited custom
        description: '🎨 THEME STUDIO: Complete visual control over EVERYTHING!',
      },
      dashboardCustomization: true,
      aiSuggestions: true, // EXCLUSIVE - AI learns your preferences
      onboardingExcellence: true, // Full onboarding & retention system
      talentIdentification: true, // AI identifies high performers
      customIntegrations: true, // 3 custom integrations per year
      whiteLabeling: true, // EXCLUSIVE
      prioritySupport: true, // 24/7 with 2hr SLA
      dedicatedAccountManager: true,
    },
  },
};

// Function to check if user has access to a feature
export function hasFeatureAccess(
  tier: SubscriptionTier,
  featureCategory: string,
  featureName?: string
): boolean {
  const tierConfig = tierFeatures[tier];
  if (!tierConfig) return false;

  // Navigate to feature
  const features = tierConfig.features as any;
  if (!featureName) {
    return !!features[featureCategory]?.enabled;
  }

  return features[featureCategory]?.[featureName] || false;
}

// Get chatbot capabilities for tier
export function getChatbotCapabilities(tier: SubscriptionTier) {
  return tierFeatures[tier].features.chatbot;
}

// Get gamification capabilities for tier
export function getGamificationCapabilities(tier: SubscriptionTier) {
  return tierFeatures[tier].features.gamification;
}

// Get theme capabilities for tier
export function getThemeCapabilities(tier: SubscriptionTier) {
  return tierFeatures[tier].features.themes;
}

// Upgrade prompts for locked features
export const upgradePrompts = {
  chatbotCustomization: {
    professional: "🔒 Unlock chatbot customization with Enterprise tier or higher!",
    enterprise: "🔒 Unlock all 8 personalities & voice commands with VIP or Titan tier!",
    vip: "🔒 Get FULL customization (custom avatars, all voices) with Titan tier!",
  },
  voiceCommands: {
    professional: "🔒 Voice commands available in VIP and Titan tiers!",
    enterprise: "🔒 Voice commands available in VIP and Titan tiers!",
  },
  gamification: {
    professional: "🔒 Unlock gamification system with Enterprise tier or higher!",
    enterprise: "🔒 Unlock leaderboards & rewards with VIP or Titan tier!",
    vip: "🔒 Unlock all 5 adventure themes & custom quests with Titan tier!",
  },
  themeStudio: {
    professional: "🔒 Theme Studio available in VIP and Titan tiers!",
    enterprise: "🔒 Full Theme Studio with VIP or Titan tier!",
    vip: "🔒 Get complete Theme Studio access with Titan tier!",
  },
  managerChallenges: {
    professional: "🔒 Manager vs Employee challenges exclusive to Titan tier!",
    enterprise: "🔒 Manager vs Employee challenges exclusive to Titan tier!",
    vip: "🔒 Manager vs Employee challenges exclusive to Titan tier!",
  },
  talentIdentification: {
    professional: "🔒 AI Talent Identification exclusive to Titan tier!",
    enterprise: "🔒 AI Talent Identification exclusive to Titan tier!",
    vip: "🔒 AI Talent Identification exclusive to Titan tier!",
  },
};

// Get upgrade prompt
export function getUpgradePrompt(
  tier: SubscriptionTier,
  feature: keyof typeof upgradePrompts
): string {
  if (tier === 'titan') return ''; // Titan users see no prompts
  
  const prompts = upgradePrompts[feature];
  return prompts[tier as keyof typeof prompts] || '🔒 Upgrade to unlock this premium feature!';
}

// Feature comparison for marketing
export const tierComparison = {
  'Basic Chatbot': { professional: true, enterprise: true, vip: true, titan: true },
  'Rename Chatbot': { professional: false, enterprise: true, vip: true, titan: true },
  'Custom Avatar (6 options)': { professional: false, enterprise: true, vip: true, titan: true },
  'Custom Avatar (24+ options)': { professional: false, enterprise: false, vip: true, titan: true },
  'Upload Custom Avatar': { professional: false, enterprise: false, vip: false, titan: true },
  'Multiple Personalities (8)': { professional: false, enterprise: false, vip: false, titan: true },
  'Voice Commands': { professional: false, enterprise: false, vip: true, titan: true },
  'Text-to-Speech': { professional: false, enterprise: false, vip: true, titan: true },
  '12 Voice Options': { professional: false, enterprise: false, vip: false, titan: true },
  'Gamification (Basic)': { professional: false, enterprise: true, vip: true, titan: true },
  'Leaderboards': { professional: false, enterprise: false, vip: true, titan: true },
  'Rewards System': { professional: false, enterprise: false, vip: true, titan: true },
  'All 5 Adventure Themes': { professional: false, enterprise: false, vip: false, titan: true },
  'Manager Challenges': { professional: false, enterprise: false, vip: false, titan: true },
  'Custom Quests': { professional: false, enterprise: false, vip: false, titan: true },
  'Theme Customization': { professional: false, enterprise: false, vip: true, titan: true },
  'Full Theme Studio': { professional: false, enterprise: false, vip: false, titan: true },
  'AI Suggestions': { professional: false, enterprise: false, vip: false, titan: true },
  'Talent Identification': { professional: false, enterprise: false, vip: false, titan: true },
  'Onboarding Excellence': { professional: false, enterprise: false, vip: false, titan: true },
};

export default tierFeatures;
