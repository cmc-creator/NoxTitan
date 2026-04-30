'use client';

import { useState } from 'react';
import { Bot, Edit, Save, Sparkles, Smile, Zap } from 'lucide-react';

interface BasebotCustomizerProps {
  onSave: (config: any) => void;
  onClose: () => void;
}

export default function BasebotCustomizer({ onSave, onClose }: BasebotCustomizerProps) {
  const [config, setConfig] = useState({
    name: 'Basebot',
    avatar: '🤖',
    color: 'bg-[rgba(201,168,76,0.12)]',
    personality: 'helpful',
    voice: 'professional-female',
  });

  // Pre-approved safe work names
  const nameSuggestions = [
    'Basebot', 'Ally', 'Partner', 'Sidekick', 'Buddy', 'Guide', 'Coach', 
    'Helper', 'Scout', 'Navigator', 'Oracle', 'Sage', 'Mentor', 'Compass',
    'Atlas', 'Sherpa', 'Wingman', 'Copilot', 'Beacon', 'Phoenix', 'Nova',
    'Echo', 'Nexus', 'Pulse', 'Spark', 'Quest', 'Journey', 'Pathfinder'
  ];

  // Avatar options
  const avatarOptions = [
    { emoji: '🤖', name: 'Robot', category: 'Classic' },
    { emoji: '🦾', name: 'Cyborg', category: 'Classic' },
    { emoji: '👨‍💻', name: 'Tech Expert', category: 'Human' },
    { emoji: '👩‍💻', name: 'Tech Expert', category: 'Human' },
    { emoji: '🧑‍⚕️', name: 'Healthcare', category: 'Professional' },
    { emoji: '👨‍⚕️', name: 'Healthcare', category: 'Professional' },
    { emoji: '👩‍⚕️', name: 'Healthcare', category: 'Professional' },
    { emoji: '🦸', name: 'Hero', category: 'Fun' },
    { emoji: '🦹', name: 'Superhero', category: 'Fun' },
    { emoji: '🧙', name: 'Wizard', category: 'Fun' },
    { emoji: '🧚', name: 'Fairy', category: 'Fun' },
    { emoji: '🦉', name: 'Wise Owl', category: 'Animals' },
    { emoji: '🦊', name: 'Clever Fox', category: 'Animals' },
    { emoji: '🐕', name: 'Loyal Dog', category: 'Animals' },
    { emoji: '🐈', name: 'Cat', category: 'Animals' },
    { emoji: '🦁', name: 'Lion', category: 'Animals' },
    { emoji: '🐉', name: 'Dragon', category: 'Mythical' },
    { emoji: '🦄', name: 'Unicorn', category: 'Mythical' },
    { emoji: '🌟', name: 'Star', category: 'Objects' },
    { emoji: '⚡', name: 'Lightning', category: 'Objects' },
    { emoji: '🎯', name: 'Target', category: 'Objects' },
    { emoji: '🏆', name: 'Trophy', category: 'Objects' },
    { emoji: '💎', name: 'Diamond', category: 'Objects' },
    { emoji: '🔮', name: 'Crystal Ball', category: 'Objects' },
  ];

  // Color schemes
  const colorOptions = [
    { gradient: 'from-cyan-500 to-amber-800', name: 'Ocean Blue' },
    { gradient: 'from-stone-900 to-pink-500', name: 'Purple Dream' },
    { gradient: 'from-green-500 to-emerald-500', name: 'Forest Green' },
    { gradient: 'from-orange-500 to-red-500', name: 'Sunset' },
    { gradient: 'from-yellow-500 to-orange-500', name: 'Golden Hour' },
    { gradient: 'from-pink-500 to-rose-500', name: 'Rose Garden' },
    { gradient: 'from-amber-700 to-amber-500', name: 'Deep Space' },
    { gradient: 'from-teal-500 to-cyan-500', name: 'Tropical' },
  ];

  // Personality types
  const personalities = [
    { 
      id: 'helpful', 
      name: 'Helpful & Supportive', 
      icon: '🤝',
      description: 'Encouraging and always ready to assist',
      greeting: 'Hi! I\'m here to help make your day easier!'
    },
    { 
      id: 'professional', 
      name: 'Professional', 
      icon: '💼',
      description: 'Formal and efficient',
      greeting: 'Good day. How may I assist you?'
    },
    { 
      id: 'friendly', 
      name: 'Friendly & Casual', 
      icon: '😊',
      description: 'Warm and conversational',
      greeting: 'Hey there! What can I do for you today?'
    },
    { 
      id: 'energetic', 
      name: 'Energetic & Motivating', 
      icon: '⚡',
      description: 'Enthusiastic and pumped up',
      greeting: 'Let\'s crush this day together! What\'s first?'
    },
    { 
      id: 'wise', 
      name: 'Wise Mentor', 
      icon: '🦉',
      description: 'Thoughtful and experienced',
      greeting: 'Greetings. Let me share my wisdom to help you succeed.'
    },
    { 
      id: 'funny', 
      name: 'Funny & Lighthearted', 
      icon: '😄',
      description: 'Adds humor to brighten your day',
      greeting: 'Hey! Ready to make work feel less... work-y?'
    },
    { 
      id: 'adventurous', 
      name: 'Adventurous Explorer', 
      icon: '🗺️',
      description: 'Turns work into exciting quests',
      greeting: 'Adventure awaits! Let\'s explore what today brings!'
    },
    { 
      id: 'calm', 
      name: 'Calm & Zen', 
      icon: '🧘',
      description: 'Peaceful and stress-reducing',
      greeting: 'Take a breath. Let\'s approach this calmly together.'
    },
  ];

  const selectedPersonality = personalities.find(p => p.id === config.personality);

  return (
    <div className="fixed inset-0 bg-black/70  z-50 flex items-center justify-center p-4">
      <div className="lux-card rounded p-6 max-w-5xl w-full border-2 border-[rgba(201,168,76,0.22)] shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-[#9E8F75]" />
            <div>
              <h2 className="text-3xl font-bold text-white">Customize Your Work Partner</h2>
              <p className="text-sm text-[#9E8F75]">Your companion for your entire employment journey</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[rgba(201,168,76,0.04)] rounded-lg transition-all text-[#9E8F75]">
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Name Selection */}
            <div>
              <label className="text-white font-bold text-lg mb-3 block flex items-center gap-2">
                <Edit className="w-5 h-5 text-[#9E8F75]" />
                Bot Name
              </label>
              <input
                type="text"
                value={config.name}
                onChange={(e) => setConfig({ ...config, name: e.target.value })}
                placeholder="Enter custom name"
                className="w-full bg-[rgba(201,168,76,0.04)] text-white rounded-lg px-4 py-3 border border-[rgba(201,168,76,0.22)] mb-3 text-lg font-semibold"
                maxLength={20}
              />
              <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                {nameSuggestions.map(name => (
                  <button
                    key={name}
                    onClick={() => setConfig({ ...config, name })}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      config.name === name
                        ? 'bg-[rgba(201,168,76,0.15)] text-white'
                        : 'bg-[rgba(201,168,76,0.04)] text-[#9E8F75] hover:bg-[rgba(201,168,76,0.08)]'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Avatar Selection */}
            <div>
              <label className="text-white font-bold text-lg mb-3 block flex items-center gap-2">
                <Smile className="w-5 h-5 text-[#9E8F75]" />
                Avatar
              </label>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
                {avatarOptions.map(avatar => (
                  <button
                    key={avatar.emoji}
                    onClick={() => setConfig({ ...config, avatar: avatar.emoji })}
                    className={`text-4xl p-3 rounded-lg transition-all ${
                      config.avatar === avatar.emoji
                        ? 'bg-[rgba(201,168,76,0.06)] border-2 border-[rgba(201,168,76,0.22)]'
                        : 'bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)]'
                    }`}
                    title={avatar.name}
                  >
                    {avatar.emoji}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Scheme */}
            <div>
              <label className="text-white font-bold text-lg mb-3 block flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#9E8F75]" />
                Color Theme
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {colorOptions.map(color => (
                  <button
                    key={color.gradient}
                    onClick={() => setConfig({ ...config, color: color.gradient })}
                    className={`h-16 rounded-lg transition-all ${
                      config.color === color.gradient
                        ? 'ring-4 ring-[rgba(201,168,76,0.45)] scale-105'
                        : ''
                    }`}
                  >
                    <div className={`h-full rounded-lg ${color.gradient} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{color.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Personality */}
            <div>
              <label className="text-white font-bold text-lg mb-3 block flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#9E8F75]" />
                Personality
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {personalities.map(personality => (
                  <button
                    key={personality.id}
                    onClick={() => setConfig({ ...config, personality: personality.id })}
                    className={`p-4 rounded-lg transition-all text-left ${
                      config.personality === personality.id
                        ? 'bg-[rgba(201,168,76,0.06)] border-2 border-[rgba(201,168,76,0.22)]'
                        : 'bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{personality.icon}</span>
                      <div>
                        <p className="text-white font-bold">{personality.name}</p>
                        <p className="text-xs text-[#9E8F75]">{personality.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#9E8F75]" />
                <h3 className="text-lg font-bold text-white">Live Preview</h3>
              </div>

              <div className={`${config.color} rounded p-6 border-2 border-white/20 shadow-2xl`}>
                {/* Avatar */}
                <div className="text-center mb-6">
                  <div className="text-8xl mb-3">{config.avatar}</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{config.name}</h3>
                  <p className="text-sm text-white/80">{selectedPersonality?.name}</p>
                </div>

                {/* Sample Greeting */}
                <div className="bg-[#110F0B]/10  rounded-lg p-4 mb-4">
                  <p className="text-sm text-white/70 mb-1">Sample Greeting:</p>
                  <p className="text-white font-medium">&ldquo;{selectedPersonality?.greeting}&rdquo;</p>
                </div>

                {/* Sample Message */}
                <div className="bg-[#110F0B]/10  rounded-lg p-4">
                  <p className="text-sm text-white/70 mb-1">In chat:</p>
                  <div className="flex items-start gap-2">
                    <div className="text-2xl">{config.avatar}</div>
                    <div className="flex-1 bg-[#110F0B]/20 rounded-lg p-2">
                      <p className="text-xs text-white/80 mb-1 font-semibold">{config.name}</p>
                      <p className="text-sm text-white">You have 3 tasks due today. Need help prioritizing?</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-4 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded-lg p-3">
                <p className="text-xs text-[#F0EBE0]">
                  💡 <strong>Tip:</strong> You can change these settings anytime! Your {config.name} will remember your preferences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => {
              onSave(config);
              onClose();
            }}
            className="flex-1 px-6 py-4 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] rounded-lg font-bold text-white text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Save className="w-6 h-6" />
            Save My Work Partner
          </button>
          <button
            onClick={onClose}
            className="px-6 py-4 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] rounded-lg font-semibold text-white transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

