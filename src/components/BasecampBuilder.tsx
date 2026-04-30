'use client';

import { useState } from 'react';
import { Sparkles, Check, Home, Bot } from 'lucide-react';

interface BasecampBuilderProps {
  onComplete: (settings: BasecampSettings) => void;
  employeeName?: string;
}

interface BasecampSettings {
  theme: string;
  adventureMode: string;
  basebotName: string;
  basebotAvatar: string;
  basebotPersonality: string;
  basebotVoice: string;
}

export default function BasecampBuilder({ onComplete, employeeName = 'there' }: BasecampBuilderProps) {
  const [settings, setSettings] = useState<BasecampSettings>({
    theme: 'default',
    adventureMode: 'tomb-raider',
    basebotName: 'Basebot',
    basebotAvatar: '🤖',
    basebotPersonality: 'friendly',
    basebotVoice: 'standard',
  });

  const themes = [
    { id: 'default', name: 'Default', colors: 'from-amber-700 to-amber-600' },
    { id: 'ocean', name: 'Ocean Blue', colors: 'from-amber-700 to-cyan-600' },
    { id: 'forest', name: 'Forest Green', colors: 'from-green-600 to-emerald-600' },
    { id: 'sunset', name: 'Sunset', colors: 'from-orange-600 to-red-600' },
  ];

  const adventures = [
    { id: 'tomb-raider', name: 'Tomb Raider', icon: '🗿', desc: 'Collect Ancient Gems', color: 'bg-[rgba(201,168,76,0.12)]' },
    { id: 'treasure-hunt', name: 'Treasure Hunt', icon: '🏴‍☠️', desc: 'Find Gold Doubloons', color: 'bg-[rgba(201,168,76,0.12)]' },
    { id: 'space-explorer', name: 'Space Explorer', icon: '🚀', desc: 'Gather Star Crystals', color: 'bg-[rgba(201,168,76,0.12)]' },
    { id: 'detective', name: 'Detective', icon: '🔍', desc: 'Solve with Clues', color: 'bg-[rgba(201,168,76,0.12)]' },
  ];

  const avatars = ['🤖', '⚡', '🎯', '🚀', '💎', '🔥', '⭐', '🌟'];
  const personalities = [
    { id: 'friendly', name: 'Friendly', icon: '😊' },
    { id: 'professional', name: 'Professional', icon: '💼' },
    { id: 'enthusiastic', name: 'Enthusiastic', icon: '🎉' },
    { id: 'calm', name: 'Calm', icon: '😌' },
  ];

  return (
    <div className="fixed inset-0 bg-[rgba(201,168,76,0.08)] z-50 overflow-y-auto">
      <div className="min-h-screen p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Home className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-5xl font-bold text-white mb-2">
              Welcome to Your Basecamp, {employeeName}! 🎉
            </h1>
            <p className="text-[#F0EBE0]/70 text-xl">
              Let's personalize your workspace and meet your AI companion
            </p>
          </div>

          <div className="bg-[#110F0B] rounded shadow-2xl p-10 space-y-8">
            {/* Theme Selection */}
            <div>
              <h2 className="text-2xl font-bold text-[#9E8F75] mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-600" />
                Choose Your Theme
              </h2>
              <div className="grid grid-cols-4 gap-4">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setSettings({ ...settings, theme: theme.id })}
                    className={`p-4 rounded border-2 transition-all ${
                      settings.theme === theme.id
                        ? 'border-amber-600/40 bg-[rgba(201,168,76,0.04)]'
                        : 'border-gray-300 hover:border-[rgba(201,168,76,0.45)]'
                    }`}
                  >
                    <div className={`h-12 rounded-lg ${theme.colors} mb-2`} />
                    <p className="text-sm font-semibold text-[#9E8F75]">{theme.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Adventure Mode */}
            <div>
              <h2 className="text-2xl font-bold text-[#9E8F75] mb-4">Pick Your Adventure</h2>
              <div className="grid grid-cols-2 gap-4">
                {adventures.map((adventure) => (
                  <button
                    key={adventure.id}
                    onClick={() => setSettings({ ...settings, adventureMode: adventure.id })}
                    className={`p-4 rounded border-2 transition-all text-left ${
                      settings.adventureMode === adventure.id
                        ? 'border-amber-600/40 bg-[rgba(201,168,76,0.04)]'
                        : 'border-gray-300 hover:border-[rgba(201,168,76,0.45)]'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{adventure.icon}</span>
                      <div>
                        <h3 className="font-bold text-[#9E8F75]">{adventure.name}</h3>
                        <p className="text-sm text-[#9E8F75]">{adventure.desc}</p>
                      </div>
                    </div>
                    {settings.adventureMode === adventure.id && (
                      <div className="flex items-center gap-2 text-amber-600 text-sm mt-2">
                        <Check className="w-4 h-4" />
                        <span className="font-semibold">Selected</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Basebot Customization */}
            <div>
              <h2 className="text-2xl font-bold text-[#9E8F75] mb-4 flex items-center gap-2">
                <Bot className="w-6 h-6 text-amber-600" />
                Customize Your AI Companion
              </h2>
              
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#9E8F75] mb-2">
                    Give Your Basebot a Name
                  </label>
                  <input
                    type="text"
                    value={settings.basebotName}
                    onChange={(e) => setSettings({ ...settings, basebotName: e.target.value })}
                    placeholder="Basebot"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)] focus:border-transparent"
                  />
                </div>

                {/* Avatar */}
                <div>
                  <label className="block text-sm font-semibold text-[#9E8F75] mb-2">
                    Choose an Avatar
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {avatars.map((avatar) => (
                      <button
                        key={avatar}
                        onClick={() => setSettings({ ...settings, basebotAvatar: avatar })}
                        className={`w-14 h-14 text-2xl rounded-lg transition-all ${
                          settings.basebotAvatar === avatar
                            ? 'bg-[rgba(201,168,76,0.04)] border-2 border-amber-600/40 scale-110'
                            : 'bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] border border-gray-300'
                        }`}
                      >
                        {avatar}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personality */}
                <div>
                  <label className="block text-sm font-semibold text-[#9E8F75] mb-2">
                    Select Personality
                  </label>
                  <div className="grid grid-cols-4 gap-4">
                    {personalities.map((personality) => (
                      <button
                        key={personality.id}
                        onClick={() => setSettings({ ...settings, basebotPersonality: personality.id })}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          settings.basebotPersonality === personality.id
                            ? 'border-amber-600/40 bg-[rgba(201,168,76,0.04)]'
                            : 'border-gray-300 hover:border-[rgba(201,168,76,0.45)]'
                        }`}
                      >
                        <div className="text-2xl mb-1">{personality.icon}</div>
                        <p className="text-sm font-semibold text-[#9E8F75]">{personality.name}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className={`${themes.find(t => t.id === settings.theme)?.colors} rounded p-6 text-white`}>
              <h3 className="text-xl font-bold mb-3">Preview Your Basecamp</h3>
              <div className="bg-[#110F0B]/20  rounded-lg p-4 flex items-center gap-4">
                <div className="text-4xl">{settings.basebotAvatar}</div>
                <div>
                  <p className="font-bold text-lg">Hi, I'm {settings.basebotName}!</p>
                  <p className="text-sm opacity-90">
                    I'm your {settings.basebotPersonality} AI companion. Ready for your {adventures.find(a => a.id === settings.adventureMode)?.name} adventure?
                  </p>
                </div>
              </div>
            </div>

            {/* Complete Button */}
            <button
              onClick={() => onComplete(settings)}
              className="w-full py-5 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white rounded-lg font-bold text-xl transition-all flex items-center justify-center gap-2"
            >
              <Check className="w-7 h-7" />
              Complete Setup & Enter Basecamp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


