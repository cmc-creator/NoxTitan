'use client';

import { useState } from 'react';
import { Palette, Type, Layout, Eye, Save, RotateCcw, Sparkles, X } from 'lucide-react';

interface ThemeStudioProps {
  onClose: () => void;
}

export default function ThemeStudioCustomizer({ onClose }: ThemeStudioProps) {
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'layout' | 'effects'>('colors');
  
  const [theme, setTheme] = useState({
    // Colors
    primaryColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
    accentColor: '#06b6d4',
    backgroundColor: '#0f172a',
    cardBackground: '#1e293b',
    textColor: '#ffffff',
    textSecondary: '#94a3b8',
    successColor: '#10b981',
    warningColor: '#f59e0b',
    errorColor: '#ef4444',
    
    // Typography
    fontFamily: 'Inter',
    headingFont: 'Inter',
    fontSize: 'medium',
    fontWeight: 'normal',
    
    // Layout
    cardRadius: 'rounded-xl',
    spacing: 'comfortable',
    borderWidth: '2',
    cardStyle: 'glassmorphism',
    
    // Effects
    animations: true,
    shadows: true,
    glowEffects: true,
    gradients: true,
  });

  const presetThemes = [
    { 
      name: 'Default Blue', 
      colors: { primary: '#3b82f6', secondary: '#8b5cf6', accent: '#06b6d4' },
      preview: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)'
    },
    { 
      name: 'Emerald Forest', 
      colors: { primary: '#10b981', secondary: '#059669', accent: '#34d399' },
      preview: 'linear-gradient(135deg, #10b981, #059669, #34d399)'
    },
    { 
      name: 'Purple Passion', 
      colors: { primary: '#8b5cf6', secondary: '#a855f7', accent: '#d946ef' },
      preview: 'linear-gradient(135deg, #8b5cf6, #a855f7, #d946ef)'
    },
    { 
      name: 'Sunset Orange', 
      colors: { primary: '#f97316', secondary: '#ea580c', accent: '#fb923c' },
      preview: 'linear-gradient(135deg, #f97316, #ea580c, #fb923c)'
    },
    { 
      name: 'Ocean Breeze', 
      colors: { primary: '#0ea5e9', secondary: '#06b6d4', accent: '#22d3ee' },
      preview: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #22d3ee)'
    },
    { 
      name: 'Rose Gold', 
      colors: { primary: '#ec4899', secondary: '#f43f5e', accent: '#fb7185' },
      preview: 'linear-gradient(135deg, #ec4899, #f43f5e, #fb7185)'
    },
    { 
      name: 'Dark Mode Pro', 
      colors: { primary: '#6366f1', secondary: '#4f46e5', accent: '#818cf8' },
      preview: 'linear-gradient(135deg, #6366f1, #4f46e5, #818cf8)'
    },
    { 
      name: 'Mint Fresh', 
      colors: { primary: '#14b8a6', secondary: '#0d9488', accent: '#2dd4bf' },
      preview: 'linear-gradient(135deg, #14b8a6, #0d9488, #2dd4bf)'
    },
  ];

  const fontOptions = [
    'Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Poppins', 'Raleway', 'Ubuntu'
  ];

  const applyPreset = (preset: any) => {
    setTheme({
      ...theme,
      primaryColor: preset.colors.primary,
      secondaryColor: preset.colors.secondary,
      accentColor: preset.colors.accent,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="lux-card rounded-2xl p-6 max-w-7xl w-full border-2 border-amber-500/40/30 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Palette className="w-8 h-8 text-amber-400" />
            <div>
              <h2 className="text-3xl font-bold text-white">Theme Studio</h2>
              <p className="text-sm text-stone-400">Customize every aspect of your experience</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-900 rounded-lg transition-all"
          >
            <X className="w-6 h-6 text-stone-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setActiveTab('colors')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'colors' ? 'bg-amber-500 text-white' : 'bg-stone-900 text-stone-300 hover:bg-stone-600'
                }`}
              >
                <Palette className="w-4 h-4" />
                Colors
              </button>
              <button
                onClick={() => setActiveTab('typography')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'typography' ? 'bg-amber-500 text-white' : 'bg-stone-900 text-stone-300 hover:bg-stone-600'
                }`}
              >
                <Type className="w-4 h-4" />
                Typography
              </button>
              <button
                onClick={() => setActiveTab('layout')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'layout' ? 'bg-amber-500 text-white' : 'bg-stone-900 text-stone-300 hover:bg-stone-600'
                }`}
              >
                <Layout className="w-4 h-4" />
                Layout
              </button>
              <button
                onClick={() => setActiveTab('effects')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'effects' ? 'bg-amber-500 text-white' : 'bg-stone-900 text-stone-300 hover:bg-stone-600'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                Effects
              </button>
            </div>

            {/* Colors Tab */}
            {activeTab === 'colors' && (
              <div className="space-y-6">
                {/* Preset Themes */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Preset Themes</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {presetThemes.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => applyPreset(preset)}
                        className="group"
                      >
                        <div 
                          className="h-20 rounded-lg mb-2 border-2 border-stone-700 group-hover:border-amber-400/40 transition-all"
                          style={{ background: preset.preview }}
                        ></div>
                        <p className="text-sm text-white font-semibold">{preset.name}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Colors */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Custom Colors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: 'Primary Color', key: 'primaryColor' },
                      { label: 'Secondary Color', key: 'secondaryColor' },
                      { label: 'Accent Color', key: 'accentColor' },
                      { label: 'Background', key: 'backgroundColor' },
                      { label: 'Card Background', key: 'cardBackground' },
                      { label: 'Text Color', key: 'textColor' },
                      { label: 'Success', key: 'successColor' },
                      { label: 'Warning', key: 'warningColor' },
                      { label: 'Error', key: 'errorColor' },
                    ].map((color) => (
                      <div key={color.key} className="flex items-center justify-between p-3 bg-stone-900 rounded-lg">
                        <label className="text-white font-medium">{color.label}</label>
                        <input
                          type="color"
                          value={theme[color.key as keyof typeof theme] as string}
                          onChange={(e) => setTheme({ ...theme, [color.key]: e.target.value })}
                          className="w-12 h-12 rounded cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Typography Tab */}
            {activeTab === 'typography' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-stone-900 rounded-lg">
                    <label className="text-white font-semibold mb-3 block">Body Font</label>
                    <select
                      value={theme.fontFamily}
                      onChange={(e) => setTheme({ ...theme, fontFamily: e.target.value })}
                      className="w-full bg-stone-900 text-white rounded-lg px-3 py-2"
                    >
                      {fontOptions.map(font => (
                        <option key={font} value={font}>{font}</option>
                      ))}
                    </select>
                  </div>

                  <div className="p-4 bg-stone-900 rounded-lg">
                    <label className="text-white font-semibold mb-3 block">Heading Font</label>
                    <select
                      value={theme.headingFont}
                      onChange={(e) => setTheme({ ...theme, headingFont: e.target.value })}
                      className="w-full bg-stone-900 text-white rounded-lg px-3 py-2"
                    >
                      {fontOptions.map(font => (
                        <option key={font} value={font}>{font}</option>
                      ))}
                    </select>
                  </div>

                  <div className="p-4 bg-stone-900 rounded-lg">
                    <label className="text-white font-semibold mb-3 block">Font Size</label>
                    <select
                      value={theme.fontSize}
                      onChange={(e) => setTheme({ ...theme, fontSize: e.target.value })}
                      className="w-full bg-stone-900 text-white rounded-lg px-3 py-2"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="xl">Extra Large</option>
                    </select>
                  </div>

                  <div className="p-4 bg-stone-900 rounded-lg">
                    <label className="text-white font-semibold mb-3 block">Font Weight</label>
                    <select
                      value={theme.fontWeight}
                      onChange={(e) => setTheme({ ...theme, fontWeight: e.target.value })}
                      className="w-full bg-stone-900 text-white rounded-lg px-3 py-2"
                    >
                      <option value="light">Light</option>
                      <option value="normal">Normal</option>
                      <option value="semibold">Semi Bold</option>
                      <option value="bold">Bold</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Layout Tab */}
            {activeTab === 'layout' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-stone-900 rounded-lg">
                    <label className="text-white font-semibold mb-3 block">Card Style</label>
                    <select
                      value={theme.cardStyle}
                      onChange={(e) => setTheme({ ...theme, cardStyle: e.target.value })}
                      className="w-full bg-stone-900 text-white rounded-lg px-3 py-2"
                    >
                      <option value="glassmorphism">Glassmorphism (Frosted Glass)</option>
                      <option value="solid">Solid</option>
                      <option value="gradient">Gradient</option>
                      <option value="outlined">Outlined</option>
                      <option value="flat">Flat</option>
                    </select>
                  </div>

                  <div className="p-4 bg-stone-900 rounded-lg">
                    <label className="text-white font-semibold mb-3 block">Border Radius</label>
                    <select
                      value={theme.cardRadius}
                      onChange={(e) => setTheme({ ...theme, cardRadius: e.target.value })}
                      className="w-full bg-stone-900 text-white rounded-lg px-3 py-2"
                    >
                      <option value="rounded-none">Square (No Radius)</option>
                      <option value="rounded-lg">Small</option>
                      <option value="rounded-xl">Medium</option>
                      <option value="rounded-2xl">Large</option>
                      <option value="rounded-3xl">Extra Large</option>
                    </select>
                  </div>

                  <div className="p-4 bg-stone-900 rounded-lg">
                    <label className="text-white font-semibold mb-3 block">Spacing</label>
                    <select
                      value={theme.spacing}
                      onChange={(e) => setTheme({ ...theme, spacing: e.target.value })}
                      className="w-full bg-stone-900 text-white rounded-lg px-3 py-2"
                    >
                      <option value="compact">Compact</option>
                      <option value="comfortable">Comfortable</option>
                      <option value="spacious">Spacious</option>
                    </select>
                  </div>

                  <div className="p-4 bg-stone-900 rounded-lg">
                    <label className="text-white font-semibold mb-3 block">Border Width</label>
                    <select
                      value={theme.borderWidth}
                      onChange={(e) => setTheme({ ...theme, borderWidth: e.target.value })}
                      className="w-full bg-stone-900 text-white rounded-lg px-3 py-2"
                    >
                      <option value="0">None</option>
                      <option value="1">Thin</option>
                      <option value="2">Medium</option>
                      <option value="4">Thick</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Effects Tab */}
            {activeTab === 'effects' && (
              <div className="space-y-4">
                {[
                  { key: 'animations', label: 'Animations & Transitions', desc: 'Smooth animations when interacting with elements' },
                  { key: 'shadows', label: 'Drop Shadows', desc: 'Shadows behind cards and modals for depth' },
                  { key: 'glowEffects', label: 'Glow Effects', desc: 'Glowing borders on hover and focus' },
                  { key: 'gradients', label: 'Gradient Backgrounds', desc: 'Colorful gradient backgrounds on cards' },
                ].map((effect) => (
                  <div key={effect.key} className="flex items-center justify-between p-4 bg-stone-900 rounded-lg">
                    <div>
                      <p className="text-white font-semibold">{effect.label}</p>
                      <p className="text-sm text-stone-400">{effect.desc}</p>
                    </div>
                    <button
                      onClick={() => setTheme({ ...theme, [effect.key]: !theme[effect.key as keyof typeof theme] })}
                      className={`w-14 h-8 rounded-full transition-all ${
                        theme[effect.key as keyof typeof theme]
                          ? 'bg-amber-500'
                          : 'bg-stone-600'
                      }`}
                    >
                      <div className={`w-6 h-6 bg-stone-950 rounded-full transition-all ${
                        theme[effect.key as keyof typeof theme] ? 'ml-7' : 'ml-1'
                      }`}></div>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Live Preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Live Preview</h3>
              </div>
              
              <div 
                className="rounded-xl p-4 border-2"
                style={{ 
                  backgroundColor: theme.cardBackground,
                  borderColor: theme.primaryColor,
                  borderWidth: `${theme.borderWidth}px`
                }}
              >
                <h4 
                  className="text-2xl font-bold mb-3"
                  style={{ 
                    color: theme.textColor,
                    fontFamily: theme.headingFont
                  }}
                >
                  Preview Card
                </h4>
                <p 
                  className="mb-4"
                  style={{ 
                    color: theme.textSecondary,
                    fontFamily: theme.fontFamily
                  }}
                >
                  This is how your content will look with the current theme settings.
                </p>
                <div className="flex gap-2 mb-4">
                  <button 
                    className="px-4 py-2 rounded-lg font-semibold"
                    style={{ backgroundColor: theme.primaryColor, color: '#ffffff' }}
                  >
                    Primary
                  </button>
                  <button 
                    className="px-4 py-2 rounded-lg font-semibold"
                    style={{ backgroundColor: theme.secondaryColor, color: '#ffffff' }}
                  >
                    Secondary
                  </button>
                </div>
                <div className="space-y-2">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: theme.successColor + '20', borderLeft: `4px solid ${theme.successColor}` }}
                  >
                    <p style={{ color: theme.successColor, fontFamily: theme.fontFamily }}>Success message</p>
                  </div>
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: theme.warningColor + '20', borderLeft: `4px solid ${theme.warningColor}` }}
                  >
                    <p style={{ color: theme.warningColor, fontFamily: theme.fontFamily }}>Warning message</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => {
              // Save theme
              localStorage.setItem('userTheme', JSON.stringify(theme));
              onClose();
            }}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-stone-900 to-pink-500 hover:from-stone-900 hover:to-pink-600 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Theme
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-stone-900 hover:bg-stone-600 rounded-lg font-semibold text-white transition-all flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
}


