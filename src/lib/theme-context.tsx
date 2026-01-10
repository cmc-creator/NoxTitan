'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'midnight' | 'light' | 'dark' | 'charcoal' | 'ocean' | 'navy' | 'azure' | 'cobalt' | 
  'royal' | 'lavender' | 'amethyst' | 'orchid' | 'forest' | 'mint' | 'sage' | 'emerald' |
  'sunset' | 'crimson' | 'amber' | 'coral' | 'slate' | 'steel' | 'graphite' | 'pewter' |
  'neon' | 'electric' | 'cosmic' | 'aurora' | 'rose-gold' | 'champagne';

type Font = 'inter' | 'roboto' | 'poppins' | 'montserrat' | 'lato' | 'open-sans' | 
  'raleway' | 'nunito' | 'source-sans' | 'playfair' | 'merriweather' | 'ubuntu';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  font: Font;
  setFont: (font: Font) => void;
  backgroundImage: string | null;
  setBackgroundImage: (image: string | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeColors = {
  midnight: { bg: '#0f172a', card: '#1e293b', accent: '#8b5cf6' },
  light: { bg: '#ffffff', card: '#f8fafc', accent: '#8b5cf6' },
  dark: { bg: '#1e293b', card: '#0f172a', accent: '#8b5cf6' },
  charcoal: { bg: '#1f2937', card: '#111827', accent: '#8b5cf6' },
  ocean: { bg: '#0c4a6e', card: '#075985', accent: '#0ea5e9' },
  navy: { bg: '#1e3a8a', card: '#172554', accent: '#3b82f6' },
  azure: { bg: '#0284c7', card: '#0369a1', accent: '#38bdf8' },
  cobalt: { bg: '#1d4ed8', card: '#1e40af', accent: '#60a5fa' },
  royal: { bg: '#7e22ce', card: '#6b21a8', accent: '#d946ef' },
  lavender: { bg: '#a78bfa', card: '#8b5cf6', accent: '#f0abfc' },
  amethyst: { bg: '#6b21a8', card: '#581c87', accent: '#a855f7' },
  orchid: { bg: '#c026d3', card: '#a21caf', accent: '#e879f9' },
  forest: { bg: '#15803d', card: '#166534', accent: '#22c55e' },
  mint: { bg: '#059669', card: '#047857', accent: '#6ee7b7' },
  sage: { bg: '#0d9488', card: '#0f766e', accent: '#5eead4' },
  emerald: { bg: '#059669', card: '#047857', accent: '#34d399' },
  sunset: { bg: '#ea580c', card: '#c2410c', accent: '#fb923c' },
  crimson: { bg: '#be123c', card: '#9f1239', accent: '#fb7185' },
  amber: { bg: '#d97706', card: '#b45309', accent: '#fbbf24' },
  coral: { bg: '#f43f5e', card: '#e11d48', accent: '#fb923c' },
  slate: { bg: '#475569', card: '#334155', accent: '#64748b' },
  steel: { bg: '#475569', card: '#334155', accent: '#3b82f6' },
  graphite: { bg: '#374151', card: '#1f2937', accent: '#6b7280' },
  pewter: { bg: '#4b5563', card: '#374151', accent: '#9ca3af' },
  neon: { bg: '#0e7490', card: '#164e63', accent: '#c026d3' },
  electric: { bg: '#2563eb', card: '#1e40af', accent: '#c026d3' },
  cosmic: { bg: '#5b21b6', card: '#4c1d95', accent: '#a78bfa' },
  aurora: { bg: '#047857', card: '#065f46', accent: '#3b82f6' },
  'rose-gold': { bg: '#f9a8d4', card: '#fbcfe8', accent: '#fbbf24' },
  champagne: { bg: '#fde68a', card: '#fef3c7', accent: '#fcd34d' },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [font, setFontState] = useState<Font>('inter');
  const [backgroundImage, setBackgroundImageState] = useState<string | null>(null);

  useEffect(() => {
    // Load settings from localStorage on mount
    const savedTheme = localStorage.getItem('scheduler-theme') as Theme;
    const savedFont = localStorage.getItem('scheduler-font') as Font;
    const savedBackground = localStorage.getItem('scheduler-background');
    
    if (savedTheme) {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    }
    
    if (savedFont) {
      setFontState(savedFont);
      applyFont(savedFont);
    }
    
    if (savedBackground) {
      setBackgroundImageState(savedBackground);
      applyBackground(savedBackground);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const colors = themeColors[newTheme];
    document.documentElement.style.setProperty('--color-bg', colors.bg);
    document.documentElement.style.setProperty('--color-card', colors.card);
    document.documentElement.style.setProperty('--color-accent', colors.accent);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const applyFont = (newFont: Font) => {
    const fontClasses = {
      inter: 'font-sans',
      roboto: 'font-roboto',
      poppins: 'font-poppins',
      montserrat: 'font-montserrat',
      lato: 'font-lato',
      'open-sans': 'font-open-sans',
      raleway: 'font-raleway',
      nunito: 'font-nunito',
      'source-sans': 'font-source-sans',
      playfair: 'font-playfair',
      merriweather: 'font-merriweather',
      ubuntu: 'font-ubuntu',
    };
    
    // Remove all font classes
    Object.values(fontClasses).forEach(className => {
      document.documentElement.classList.remove(className);
    });
    
    // Add selected font class
    document.documentElement.classList.add(fontClasses[newFont]);
  };

  const applyBackground = (image: string | null) => {
    if (image) {
      document.body.style.backgroundImage = `url(${image})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';
    } else {
      document.body.style.backgroundImage = 'none';
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('scheduler-theme', newTheme);
    applyTheme(newTheme);
  };

  const setFont = (newFont: Font) => {
    setFontState(newFont);
    localStorage.setItem('scheduler-font', newFont);
    applyFont(newFont);
  };

  const setBackgroundImage = (image: string | null) => {
    setBackgroundImageState(image);
    if (image) {
      localStorage.setItem('scheduler-background', image);
    } else {
      localStorage.removeItem('scheduler-background');
    }
    applyBackground(image);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, font, setFont, backgroundImage, setBackgroundImage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
