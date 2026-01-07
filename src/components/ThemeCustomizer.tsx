'use client';

import { useState, useEffect } from 'react';
import { Palette, X, Sun, Moon, Sparkles, Flower2, Type } from 'lucide-react';
import { HexColorPicker } from 'react-colorful';

interface CustomColors {
  pageBackground: string;
  cardBackground: string;
  primaryButtons: string;
  secondaryButtons: string;
  headerText: string;
  bodyText: string;
  calendarBackground: string;
  calendarNumbers: string;
  todayHighlight: string;
  borderColors: string;
}

type DecorativeTheme = 'none' | 'classic' | 'corporate' | 'elegant' | 'minimalist' | 'executive' | 'professional' | 'spring-flowers' | 'winter-sparkle' | 'autumn-leaves' | 'ocean-waves' | 'thunderstorm' | 'galaxy' | 'northern-lights' | 'cherry-blossom' | 'sunset' | 'desert' | 'foggy-morning' | 'volcanic' | 'meteor-shower' | 'solar-eclipse' | 'cosmic-nebula' | 'coral-reef' | 'deep-ocean' | 'tropical-waters' | 'fireflies' | 'rainbow-prism' | 'enchanted-forest';

type FontFamily = 'inter' | 'roboto' | 'open-sans' | 'lato' | 'montserrat' | 'poppins' | 'source-sans' | 'raleway' | 'ubuntu' | 'nunito';

export default function ThemeCustomizer() {
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [useGradients, setUseGradients] = useState(true);
  const [decorativeTheme, setDecorativeTheme] = useState<DecorativeTheme>('none');
  const [selectedFont, setSelectedFont] = useState<FontFamily>('inter');
  const [activeColorPicker, setActiveColorPicker] = useState<keyof CustomColors | null>(null);
  const [customColors, setCustomColors] = useState<CustomColors>({
    pageBackground: '#000000',
    cardBackground: '#1a1a1a',
    primaryButtons: '#8b5cf6',
    secondaryButtons: '#ec4899',
    headerText: '#ffffff',
    bodyText: '#e2e8f0',
    calendarBackground: '#0a0a0a',
    calendarNumbers: '#ffffff',
    todayHighlight: '#8b5cf6',
    borderColors: '#4a4a4a',
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('appTheme') as 'light' | 'dark' | null;
    const savedColors = localStorage.getItem('customColors');
    const savedGradients = localStorage.getItem('useGradients');
    const savedDecorativeTheme = localStorage.getItem('decorativeTheme') as DecorativeTheme | null;
    const savedFont = localStorage.getItem('fontFamily') as FontFamily | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyColors(customColors);
    }
    
    if (savedColors) {
      const colors = JSON.parse(savedColors);
      setCustomColors(colors);
      applyColors(colors);
    }
    
    if (savedGradients !== null) {
      setUseGradients(savedGradients === 'true');
    }
    
    if (savedDecorativeTheme) {
      setDecorativeTheme(savedDecorativeTheme);
      applyDecorativeTheme(savedDecorativeTheme);
    }

    if (savedFont) {
      setSelectedFont(savedFont);
      applyFont(savedFont);
    }
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    document.documentElement.setAttribute('data-theme', newTheme);
    
    const colors = newTheme === 'light' ? {
      pageBackground: '#f8fafc',
      cardBackground: '#ffffff',
      primaryButtons: '#8b5cf6',
      secondaryButtons: '#ec4899',
      headerText: '#0f172a',
      bodyText: '#334155',
      calendarBackground: '#ffffff',
      calendarNumbers: '#0f172a',
      todayHighlight: '#8b5cf6',
      borderColors: '#e2e8f0',
    } : {
      pageBackground: '#000000',
      cardBackground: '#1a1a1a',
      primaryButtons: '#8b5cf6',
      secondaryButtons: '#ec4899',
      headerText: '#ffffff',
      bodyText: '#e2e8f0',
      calendarBackground: '#0a0a0a',
      calendarNumbers: '#ffffff',
      todayHighlight: '#8b5cf6',
      borderColors: '#4a4a4a',
    };
    
    setCustomColors(colors);
    applyColors(colors);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('appTheme', newTheme);
  };

  const applyColors = (colors: CustomColors) => {
    const root = document.documentElement;
    document.body.style.backgroundColor = colors.pageBackground;
    document.body.style.color = colors.bodyText;
    
    root.style.setProperty('--page-bg', colors.pageBackground);
    root.style.setProperty('--card-bg', colors.cardBackground);
    root.style.setProperty('--header-text', colors.headerText);
    root.style.setProperty('--body-text', colors.bodyText);
    root.style.setProperty('--calendar-bg', colors.calendarBackground);
    root.style.setProperty('--calendar-numbers', colors.calendarNumbers);
    root.style.setProperty('--today-highlight', colors.todayHighlight);
    root.style.setProperty('--border-color', colors.borderColors);
    
    if (useGradients) {
      root.style.setProperty('--primary-btn', `linear-gradient(to right, ${colors.primaryButtons}, ${colors.secondaryButtons})`);
      root.style.setProperty('--secondary-btn', `linear-gradient(135deg, ${colors.primaryButtons}, ${colors.secondaryButtons})`);
    } else {
      root.style.setProperty('--primary-btn', colors.primaryButtons);
      root.style.setProperty('--secondary-btn', colors.secondaryButtons);
    }
  };

  const applyFont = (font: FontFamily) => {
    const fontMap: Record<FontFamily, string> = {
      'inter': "'Inter', sans-serif",
      'roboto': "'Roboto', sans-serif",
      'open-sans': "'Open Sans', sans-serif",
      'lato': "'Lato', sans-serif",
      'montserrat': "'Montserrat', sans-serif",
      'poppins': "'Poppins', sans-serif",
      'source-sans': "'Source Sans Pro', sans-serif",
      'raleway': "'Raleway', sans-serif",
      'ubuntu': "'Ubuntu', sans-serif",
      'nunito': "'Nunito', sans-serif",
    };

    document.documentElement.style.fontFamily = fontMap[font];
  };

  const handleFontChange = (font: FontFamily) => {
    setSelectedFont(font);
    applyFont(font);
    localStorage.setItem('fontFamily', font);
  };

  const applyDecorativeTheme = (theme: DecorativeTheme) => {
    const body = document.body;
    body.classList.remove('theme-classic', 'theme-corporate', 'theme-elegant', 'theme-minimalist', 'theme-executive', 'theme-professional', 'theme-spring-flowers', 'theme-winter-sparkle', 'theme-autumn-leaves', 'theme-ocean-waves', 'theme-thunderstorm', 'theme-galaxy', 'theme-northern-lights', 'theme-cherry-blossom', 'theme-sunset', 'theme-desert', 'theme-foggy-morning', 'theme-volcanic', 'theme-meteor-shower', 'theme-solar-eclipse', 'theme-cosmic-nebula', 'theme-coral-reef', 'theme-deep-ocean', 'theme-tropical-waters', 'theme-fireflies', 'theme-rainbow-prism', 'theme-enchanted-forest');
    
    if (theme !== 'none') {
      body.classList.add(`theme-${theme}`);
      
      // Apply theme-specific color palette
      const themeColors = getThemeColors(theme);
      if (themeColors) {
        setCustomColors(themeColors);
        applyColors(themeColors);
      }
    }
  };

  const getThemeColors = (theme: DecorativeTheme): CustomColors | null => {
    const colorPalettes: Record<DecorativeTheme, CustomColors | null> = {
      'none': null,
      'classic': {
        pageBackground: '#1a1a2e',
        cardBackground: '#16213e',
        primaryButtons: '#8b5cf6',
        secondaryButtons: '#ec4899',
        headerText: '#f0f0f0',
        bodyText: '#e2e8f0',
        calendarBackground: '#0f172a',
        calendarNumbers: '#f8fafc',
        todayHighlight: '#a78bfa',
        borderColors: '#4c1d95',
      },
      'corporate': {
        pageBackground: '#1e3a5f',
        cardBackground: '#2a4a70',
        primaryButtons: '#3b82f6',
        secondaryButtons: '#60a5fa',
        headerText: '#f1f5f9',
        bodyText: '#cbd5e1',
        calendarBackground: '#1e293b',
        calendarNumbers: '#e2e8f0',
        todayHighlight: '#3b82f6',
        borderColors: '#475569',
      },
      'elegant': {
        pageBackground: '#f5f0e8',
        cardBackground: '#faf7f2',
        primaryButtons: '#b8860b',
        secondaryButtons: '#daa520',
        headerText: '#3e3020',
        bodyText: '#5c4a2f',
        calendarBackground: '#fefdfb',
        calendarNumbers: '#4a3b28',
        todayHighlight: '#daa520',
        borderColors: '#d4c5a9',
      },
      'minimalist': {
        pageBackground: '#0a0a0a',
        cardBackground: '#1a1a1a',
        primaryButtons: '#ffffff',
        secondaryButtons: '#d1d5db',
        headerText: '#ffffff',
        bodyText: '#d1d5db',
        calendarBackground: '#000000',
        calendarNumbers: '#e5e7eb',
        todayHighlight: '#ffffff',
        borderColors: '#404040',
      },
      'executive': {
        pageBackground: '#0f2027',
        cardBackground: '#1a2f3a',
        primaryButtons: '#64748b',
        secondaryButtons: '#94a3b8',
        headerText: '#f1f5f9',
        bodyText: '#cbd5e1',
        calendarBackground: '#0a1820',
        calendarNumbers: '#e2e8f0',
        todayHighlight: '#94a3b8',
        borderColors: '#334155',
      },
      'professional': {
        pageBackground: '#1c1c1c',
        cardBackground: '#2a2a2a',
        primaryButtons: '#6b7280',
        secondaryButtons: '#9ca3af',
        headerText: '#f9fafb',
        bodyText: '#d1d5db',
        calendarBackground: '#171717',
        calendarNumbers: '#e5e7eb',
        todayHighlight: '#9ca3af',
        borderColors: '#4b5563',
      },
      'spring-flowers': {
        pageBackground: '#fce4ec',
        cardBackground: '#fff0f5',
        primaryButtons: '#ec4899',
        secondaryButtons: '#f472b6',
        headerText: '#be185d',
        bodyText: '#831843',
        calendarBackground: '#fff5f7',
        calendarNumbers: '#9f1239',
        todayHighlight: '#ec4899',
        borderColors: '#fbbf24',
      },
      'winter-sparkle': {
        pageBackground: '#e0f2fe',
        cardBackground: '#f0f9ff',
        primaryButtons: '#0ea5e9',
        secondaryButtons: '#38bdf8',
        headerText: '#0c4a6e',
        bodyText: '#075985',
        calendarBackground: '#f0f9ff',
        calendarNumbers: '#0369a1',
        todayHighlight: '#0ea5e9',
        borderColors: '#7dd3fc',
      },
      'autumn-leaves': {
        pageBackground: '#fed7aa',
        cardBackground: '#ffedd5',
        primaryButtons: '#ea580c',
        secondaryButtons: '#fb923c',
        headerText: '#7c2d12',
        bodyText: '#9a3412',
        calendarBackground: '#fff7ed',
        calendarNumbers: '#c2410c',
        todayHighlight: '#f97316',
        borderColors: '#fdba74',
      },
      'ocean-waves': {
        pageBackground: '#cffafe',
        cardBackground: '#ecfeff',
        primaryButtons: '#06b6d4',
        secondaryButtons: '#22d3ee',
        headerText: '#164e63',
        bodyText: '#155e75',
        calendarBackground: '#f0fdfa',
        calendarNumbers: '#0e7490',
        todayHighlight: '#06b6d4',
        borderColors: '#67e8f9',
      },
      'thunderstorm': {
        pageBackground: '#1e293b',
        cardBackground: '#334155',
        primaryButtons: '#3b82f6',
        secondaryButtons: '#60a5fa',
        headerText: '#f1f5f9',
        bodyText: '#cbd5e1',
        calendarBackground: '#1e293b',
        calendarNumbers: '#e2e8f0',
        todayHighlight: '#3b82f6',
        borderColors: '#475569',
      },
      'galaxy': {
        pageBackground: '#1e1b4b',
        cardBackground: '#312e81',
        primaryButtons: '#8b5cf6',
        secondaryButtons: '#a78bfa',
        headerText: '#f5f3ff',
        bodyText: '#ddd6fe',
        calendarBackground: '#1e1b4b',
        calendarNumbers: '#e9d5ff',
        todayHighlight: '#8b5cf6',
        borderColors: '#6d28d9',
      },
      'northern-lights': {
        pageBackground: '#0c4a6e',
        cardBackground: '#075985',
        primaryButtons: '#10b981',
        secondaryButtons: '#34d399',
        headerText: '#ecfdf5',
        bodyText: '#d1fae5',
        calendarBackground: '#0e7490',
        calendarNumbers: '#f0fdfa',
        todayHighlight: '#10b981',
        borderColors: '#0891b2',
      },
      'cherry-blossom': {
        pageBackground: '#fce7f3',
        cardBackground: '#fdf2f8',
        primaryButtons: '#ec4899',
        secondaryButtons: '#f9a8d4',
        headerText: '#9f1239',
        bodyText: '#be185d',
        calendarBackground: '#fef3f8',
        calendarNumbers: '#be185d',
        todayHighlight: '#f472b6',
        borderColors: '#fbcfe8',
      },
      'sunset': {
        pageBackground: '#ff9a56',
        cardBackground: '#ffb380',
        primaryButtons: '#ff6b35',
        secondaryButtons: '#fdc830',
        headerText: '#7c2d12',
        bodyText: '#92400e',
        calendarBackground: '#ffedd5',
        calendarNumbers: '#c2410c',
        todayHighlight: '#f97316',
        borderColors: '#fb923c',
      },
      'desert': {
        pageBackground: '#fcd34d',
        cardBackground: '#fde68a',
        primaryButtons: '#d97706',
        secondaryButtons: '#f59e0b',
        headerText: '#78350f',
        bodyText: '#92400e',
        calendarBackground: '#fef3c7',
        calendarNumbers: '#b45309',
        todayHighlight: '#f59e0b',
        borderColors: '#fbbf24',
      },
      'foggy-morning': {
        pageBackground: '#e2e8f0',
        cardBackground: '#f1f5f9',
        primaryButtons: '#64748b',
        secondaryButtons: '#94a3b8',
        headerText: '#1e293b',
        bodyText: '#475569',
        calendarBackground: '#f8fafc',
        calendarNumbers: '#334155',
        todayHighlight: '#64748b',
        borderColors: '#cbd5e1',
      },
      'volcanic': {
        pageBackground: '#450a0a',
        cardBackground: '#7f1d1d',
        primaryButtons: '#dc2626',
        secondaryButtons: '#ef4444',
        headerText: '#fef2f2',
        bodyText: '#fecaca',
        calendarBackground: '#450a0a',
        calendarNumbers: '#fee2e2',
        todayHighlight: '#f87171',
        borderColors: '#991b1b',
      },
      'meteor-shower': {
        pageBackground: '#0f172a',
        cardBackground: '#1e293b',
        primaryButtons: '#60a5fa',
        secondaryButtons: '#93c5fd',
        headerText: '#f0f9ff',
        bodyText: '#dbeafe',
        calendarBackground: '#0f172a',
        calendarNumbers: '#bfdbfe',
        todayHighlight: '#3b82f6',
        borderColors: '#334155',
      },
      'solar-eclipse': {
        pageBackground: '#18181b',
        cardBackground: '#27272a',
        primaryButtons: '#facc15',
        secondaryButtons: '#fde047',
        headerText: '#fef9c3',
        bodyText: '#fef08a',
        calendarBackground: '#18181b',
        calendarNumbers: '#fde68a',
        todayHighlight: '#eab308',
        borderColors: '#3f3f46',
      },
      'cosmic-nebula': {
        pageBackground: '#1e1b4b',
        cardBackground: '#2e1065',
        primaryButtons: '#d946ef',
        secondaryButtons: '#e879f9',
        headerText: '#fae8ff',
        bodyText: '#f3e8ff',
        calendarBackground: '#1e1b4b',
        calendarNumbers: '#f5d0fe',
        todayHighlight: '#c026d3',
        borderColors: '#581c87',
      },
      'coral-reef': {
        pageBackground: '#06b6d4',
        cardBackground: '#22d3ee',
        primaryButtons: '#f97316',
        secondaryButtons: '#fb923c',
        headerText: '#0c4a6e',
        bodyText: '#164e63',
        calendarBackground: '#cffafe',
        calendarNumbers: '#155e75',
        todayHighlight: '#f97316',
        borderColors: '#67e8f9',
      },
      'deep-ocean': {
        pageBackground: '#001f3f',
        cardBackground: '#003366',
        primaryButtons: '#06b6d4',
        secondaryButtons: '#22d3ee',
        headerText: '#cffafe',
        bodyText: '#a5f3fc',
        calendarBackground: '#001a33',
        calendarNumbers: '#67e8f9',
        todayHighlight: '#0891b2',
        borderColors: '#155e75',
      },
      'tropical-waters': {
        pageBackground: '#00bcd4',
        cardBackground: '#00acc1',
        primaryButtons: '#0097a7',
        secondaryButtons: '#00838f',
        headerText: '#e0f2f1',
        bodyText: '#b2dfdb',
        calendarBackground: '#e0f7fa',
        calendarNumbers: '#004d40',
        todayHighlight: '#00acc1',
        borderColors: '#26c6da',
      },
      'fireflies': {
        pageBackground: '#1e3a5f',
        cardBackground: '#2d4f7c',
        primaryButtons: '#fbbf24',
        secondaryButtons: '#fcd34d',
        headerText: '#fef3c7',
        bodyText: '#fde68a',
        calendarBackground: '#1e3a5f',
        calendarNumbers: '#fef08a',
        todayHighlight: '#f59e0b',
        borderColors: '#3b5998',
      },
      'rainbow-prism': {
        pageBackground: '#ffffff',
        cardBackground: '#f9fafb',
        primaryButtons: '#8b5cf6',
        secondaryButtons: '#ec4899',
        headerText: '#1f2937',
        bodyText: '#4b5563',
        calendarBackground: '#f9fafb',
        calendarNumbers: '#111827',
        todayHighlight: '#a855f7',
        borderColors: '#e5e7eb',
      },
      'enchanted-forest': {
        pageBackground: '#14532d',
        cardBackground: '#166534',
        primaryButtons: '#22c55e',
        secondaryButtons: '#4ade80',
        headerText: '#f0fdf4',
        bodyText: '#dcfce7',
        calendarBackground: '#14532d',
        calendarNumbers: '#bbf7d0',
        todayHighlight: '#16a34a',
        borderColors: '#15803d',
      },
    };

    return colorPalettes[theme];
  };

  const handleColorChange = (key: keyof CustomColors, color: string) => {
    setCustomColors(prev => ({ ...prev, [key]: color }));
  };

  const handleApply = () => {
    applyColors(customColors);
    applyDecorativeTheme(decorativeTheme);
    localStorage.setItem('customColors', JSON.stringify(customColors));
    localStorage.setItem('useGradients', String(useGradients));
    localStorage.setItem('decorativeTheme', decorativeTheme);
    alert('✨ Theme applied successfully! Your custom design is now active.');
    setShowCustomizer(false);
    setActiveColorPicker(null);
  };

  const colorLabels: Record<keyof CustomColors, string> = {
    pageBackground: '🖼️ Page Background',
    cardBackground: '📦 Cards & Panels',
    primaryButtons: '🎯 Primary Buttons',
    secondaryButtons: '🎨 Secondary Buttons',
    headerText: '📝 Header Text',
    bodyText: '📄 Body Text',
    calendarBackground: '📅 Calendar Background',
    calendarNumbers: '🔢 Calendar Numbers',
    todayHighlight: '⭐ Today Highlight',
    borderColors: '🔳 Borders & Lines',
  };

  const decorativeThemes = [
    { id: 'none' as DecorativeTheme, name: 'No Decoration', icon: '🚫' },
    { id: 'classic' as DecorativeTheme, name: 'Classic', icon: '💜' },
    { id: 'corporate' as DecorativeTheme, name: 'Corporate', icon: '💼' },
    { id: 'elegant' as DecorativeTheme, name: 'Elegant', icon: '✨' },
    { id: 'minimalist' as DecorativeTheme, name: 'Minimalist', icon: '⬛' },
    { id: 'executive' as DecorativeTheme, name: 'Executive', icon: '🎩' },
    { id: 'professional' as DecorativeTheme, name: 'Professional', icon: '👔' },
    { id: 'spring-flowers' as DecorativeTheme, name: 'Spring Flowers', icon: '🌸' },
    { id: 'winter-sparkle' as DecorativeTheme, name: 'Winter Sparkle', icon: '❄️' },
    { id: 'autumn-leaves' as DecorativeTheme, name: 'Autumn Leaves', icon: '🍂' },
    { id: 'ocean-waves' as DecorativeTheme, name: 'Ocean Waves', icon: '🌊' },
    { id: 'thunderstorm' as DecorativeTheme, name: 'Thunderstorm', icon: '⚡' },
    { id: 'galaxy' as DecorativeTheme, name: 'Galaxy', icon: '🌌' },
    { id: 'northern-lights' as DecorativeTheme, name: 'Northern Lights', icon: '🌌' },
    { id: 'cherry-blossom' as DecorativeTheme, name: 'Cherry Blossom', icon: '🌸' },
    { id: 'sunset' as DecorativeTheme, name: 'Sunset', icon: '🌅' },
    { id: 'desert' as DecorativeTheme, name: 'Desert', icon: '🏜️' },
    { id: 'foggy-morning' as DecorativeTheme, name: 'Foggy Morning', icon: '🌫️' },
    { id: 'volcanic' as DecorativeTheme, name: 'Volcanic', icon: '🌋' },
    { id: 'meteor-shower' as DecorativeTheme, name: 'Meteor Shower', icon: '☄️' },
    { id: 'solar-eclipse' as DecorativeTheme, name: 'Solar Eclipse', icon: '🌑' },
    { id: 'cosmic-nebula' as DecorativeTheme, name: 'Cosmic Nebula', icon: '🌠' },
    { id: 'coral-reef' as DecorativeTheme, name: 'Coral Reef', icon: '🪸' },
    { id: 'deep-ocean' as DecorativeTheme, name: 'Deep Ocean', icon: '🌊' },
    { id: 'tropical-waters' as DecorativeTheme, name: 'Tropical Waters', icon: '🏝️' },
    { id: 'fireflies' as DecorativeTheme, name: 'Fireflies', icon: '✨' },
    { id: 'rainbow-prism' as DecorativeTheme, name: 'Rainbow Prism', icon: '🌈' },
    { id: 'enchanted-forest' as DecorativeTheme, name: 'Enchanted Forest', icon: '🌲' },
  ];

  const fontOptions: { id: FontFamily; name: string; preview: string }[] = [
    { id: 'inter', name: 'Inter', preview: 'Modern & Clean' },
    { id: 'roboto', name: 'Roboto', preview: 'Professional & Readable' },
    { id: 'open-sans', name: 'Open Sans', preview: 'Friendly & Approachable' },
    { id: 'lato', name: 'Lato', preview: 'Elegant & Versatile' },
    { id: 'montserrat', name: 'Montserrat', preview: 'Bold & Contemporary' },
    { id: 'poppins', name: 'Poppins', preview: 'Geometric & Stylish' },
    { id: 'source-sans', name: 'Source Sans Pro', preview: 'Technical & Clear' },
    { id: 'raleway', name: 'Raleway', preview: 'Sophisticated & Refined' },
    { id: 'ubuntu', name: 'Ubuntu', preview: 'Warm & Humanist' },
    { id: 'nunito', name: 'Nunito', preview: 'Rounded & Playful' },
  ];

  return (
    <>
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in"
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        
        <button
          onClick={() => setShowCustomizer(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in"
        >
          <Palette className="w-5 h-5" />
          Customize Colors
        </button>
      </div>

      {showCustomizer && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-3xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden border-2 border-purple-500/30 animate-slide-up">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-6 flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                  Customize Your Experience
                </h2>
                <p className="text-purple-100 text-sm mt-1">
                  ✨ Choose colors visually, add gradients, and decorate - make it uniquely yours!
                </p>
              </div>
              <button
                onClick={() => {
                  setShowCustomizer(false);
                  setActiveColorPicker(null);
                }}
                className="relative z-10 text-white hover:bg-white/20 p-2 rounded-lg transition-all hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(95vh-220px)]">
              {/* Gradient Toggle */}
              <div className="mb-6 p-4 bg-slate-800/50 rounded-xl border border-purple-500/30">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useGradients}
                    onChange={(e) => setUseGradients(e.target.checked)}
                    className="w-6 h-6 rounded accent-purple-500"
                  />
                  <div>
                    <span className="text-white font-bold text-lg">🎨 Use Gradient Buttons</span>
                    <p className="text-slate-400 text-sm">Enable beautiful gradient effects on all buttons</p>
                  </div>
                </label>
              </div>

              {/* Decorative Themes */}
              <div className="mb-6 p-4 bg-slate-800/50 rounded-xl border border-purple-500/30">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <Flower2 className="w-6 h-6" />
                  Decorative Themes
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {decorativeThemes.map((dt) => (
                    <button
                      key={dt.id}
                      onClick={() => setDecorativeTheme(dt.id)}
                      className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                        decorativeTheme === dt.id
                          ? 'border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/50'
                          : 'border-slate-600 hover:border-purple-400 bg-slate-700/50'
                      }`}
                    >
                      <div className="text-4xl mb-2">{dt.icon}</div>
                      <div className="text-white font-semibold text-sm">{dt.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Selection */}
              <div className="mb-6 p-4 bg-slate-800/50 rounded-xl border border-purple-500/30">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <Type className="w-6 h-6" />
                  Font Family
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {fontOptions.map((font) => (
                    <button
                      key={font.id}
                      onClick={() => handleFontChange(font.id)}
                      className={`p-4 rounded-xl border-2 transition-all hover:scale-105 text-left ${
                        selectedFont === font.id
                          ? 'border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/50'
                          : 'border-slate-600 hover:border-purple-400 bg-slate-700/50'
                      }`}
                      style={{ fontFamily: font.id === 'inter' ? 'Inter, sans-serif' : 
                                           font.id === 'roboto' ? 'Roboto, sans-serif' :
                                           font.id === 'open-sans' ? 'Open Sans, sans-serif' :
                                           font.id === 'lato' ? 'Lato, sans-serif' :
                                           font.id === 'montserrat' ? 'Montserrat, sans-serif' :
                                           font.id === 'poppins' ? 'Poppins, sans-serif' :
                                           font.id === 'source-sans' ? 'Source Sans Pro, sans-serif' :
                                           font.id === 'raleway' ? 'Raleway, sans-serif' :
                                           font.id === 'ubuntu' ? 'Ubuntu, sans-serif' :
                                           'Nunito, sans-serif' }}
                    >
                      <div className="text-white font-bold text-lg mb-1">{font.name}</div>
                      <div className="text-slate-400 text-sm">{font.preview}</div>
                      <div className="text-slate-300 text-xs mt-2">The quick brown fox jumps</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Customization */}
              <h3 className="text-white font-bold text-xl mb-4">Color Customization</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(colorLabels).map(([key, label]) => (
                  <div key={key} className="space-y-3 animate-fade-in">
                    <label className="block text-sm font-bold text-white">{label}</label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setActiveColorPicker(activeColorPicker === key ? null : key as keyof CustomColors)}
                        className="w-full flex items-center gap-3 px-4 py-4 bg-slate-800/70 border-2 border-slate-700 rounded-xl hover:border-purple-500 transition-all group hover:scale-105"
                      >
                        <div
                          className="w-16 h-16 rounded-lg border-4 border-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform animate-pulse-slow"
                          style={{ backgroundColor: customColors[key as keyof CustomColors] }}
                        />
                        <div className="flex-1 text-left">
                          <div className="text-white font-mono text-sm mb-1">
                            {customColors[key as keyof CustomColors].toUpperCase()}
                          </div>
                          <div className="text-slate-400 text-xs">
                            Click to pick color
                          </div>
                        </div>
                      </button>
                      
                      {activeColorPicker === key && (
                        <div className="absolute top-full left-0 mt-3 z-50 bg-slate-800 p-6 rounded-xl shadow-2xl border-2 border-purple-500 animate-fade-in">
                          <div className="mb-3 text-white font-semibold text-sm flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Pick your color:
                          </div>
                          <HexColorPicker
                            color={customColors[key as keyof CustomColors]}
                            onChange={(color) => handleColorChange(key as keyof CustomColors, color)}
                            style={{ width: '240px', height: '240px' }}
                          />
                          <input
                            type="text"
                            value={customColors[key as keyof CustomColors]}
                            onChange={(e) => handleColorChange(key as keyof CustomColors, e.target.value)}
                            className="w-full mt-3 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white font-mono text-center"
                            placeholder="#000000"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Preview */}
              <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-purple-500/30 animate-fade-in">
                <h4 className="text-white font-bold mb-4 text-lg flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Live Preview
                </h4>
                <div 
                  className="p-6 rounded-lg transition-all"
                  style={{ 
                    backgroundColor: customColors.cardBackground,
                    borderColor: customColors.borderColors,
                    borderWidth: '3px',
                    borderStyle: 'solid'
                  }}
                >
                  <h5 
                    className="text-2xl font-bold mb-3"
                    style={{ color: customColors.headerText }}
                  >
                    Sample Header
                  </h5>
                  <p 
                    className="mb-4"
                    style={{ color: customColors.bodyText }}
                  >
                    This is how your text will look throughout the application.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <button
                      className="px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform hover:scale-105"
                      style={{ 
                        background: useGradients 
                          ? `linear-gradient(to right, ${customColors.primaryButtons}, ${customColors.secondaryButtons})`
                          : customColors.primaryButtons,
                        color: '#ffffff' 
                      }}
                    >
                      Primary Button
                    </button>
                    <button
                      className="px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform hover:scale-105"
                      style={{ 
                        background: useGradients
                          ? `linear-gradient(135deg, ${customColors.secondaryButtons}, ${customColors.primaryButtons})`
                          : customColors.secondaryButtons,
                        color: '#ffffff' 
                      }}
                    >
                      Secondary Button
                    </button>
                    <div
                      className="px-4 py-2 rounded-lg font-bold shadow-lg"
                      style={{ 
                        backgroundColor: customColors.todayHighlight,
                        color: '#ffffff'
                      }}
                    >
                      Today Badge
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 flex gap-4 border-t-2 border-purple-500/30">
              <button
                type="button"
                onClick={() => {
                  setShowCustomizer(false);
                  setActiveColorPicker(null);
                }}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleApply}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                ✨ Apply Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
