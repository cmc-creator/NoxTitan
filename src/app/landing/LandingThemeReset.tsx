'use client';

import { useEffect } from 'react';

const ALL_DECORATIVE_THEMES = [
  'theme-classic', 'theme-corporate', 'theme-elegant', 'theme-minimalist',
  'theme-executive', 'theme-professional', 'theme-spring-flowers', 'theme-winter-sparkle',
  'theme-autumn-leaves', 'theme-ocean-waves', 'theme-thunderstorm', 'theme-galaxy',
  'theme-northern-lights', 'theme-cherry-blossom', 'theme-sunset', 'theme-desert',
  'theme-foggy-morning', 'theme-volcanic', 'theme-meteor-shower', 'theme-solar-eclipse',
  'theme-cosmic-nebula', 'theme-coral-reef', 'theme-deep-ocean', 'theme-tropical-waters',
  'theme-fireflies', 'theme-rainbow-prism', 'theme-enchanted-forest',
];

export default function LandingThemeReset() {
  useEffect(() => {
    document.body.classList.remove(...ALL_DECORATIVE_THEMES);
    document.body.style.backgroundColor = '#070604';
    document.body.style.color = '#F0EBE0';
    // Reset any CSS variables that decorative themes may have overridden
    document.documentElement.style.removeProperty('--page-background');
    document.documentElement.style.removeProperty('--card-background');
    document.documentElement.style.removeProperty('--primary-buttons');
    document.documentElement.style.removeProperty('--secondary-buttons');
    document.documentElement.style.removeProperty('--header-text');
    document.documentElement.style.removeProperty('--body-text');
    document.documentElement.style.removeProperty('--border-colors');
  }, []);

  return null;
}
