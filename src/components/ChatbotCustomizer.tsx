'use client';

import { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

interface ChatbotPreferences {
  titan: {
    color: string;
    avatar: string;
  };
  nox: {
    color: string;
    avatar: string;
  };
}

const colorOptions = [
  { name: 'Pink/Purple', value: 'from-pink-600 to-purple-600', text: 'Pink & Purple' },
  { name: 'Blue/Cyan', value: 'from-blue-600 to-cyan-600', text: 'Blue & Cyan' },
  { name: 'Green/Emerald', value: 'from-green-600 to-emerald-600', text: 'Green & Emerald' },
  { name: 'Orange/Red', value: 'from-orange-600 to-red-600', text: 'Orange & Red' },
  { name: 'Purple/Indigo', value: 'from-amber-700 to-amber-600', text: 'Purple & Indigo' },
  { name: 'Teal/Blue', value: 'from-teal-600 to-blue-600', text: 'Teal & Blue' },
  { name: 'Rose/Pink', value: 'from-rose-600 to-pink-600', text: 'Rose & Pink' },
  { name: 'Amber/Yellow', value: 'from-amber-600 to-yellow-600', text: 'Amber & Yellow' },
];

const avatarOptions = [
  '🤖', '⚡', '🎯', '🚀', '💎', '🔥', '⭐', '🌟', 
  '💫', '✨', '🎨', '🎭', '👾', '🦾', '🧠', '💪'
];

export default function ChatbotCustomizer() {
  const [preferences, setPreferences] = useState<ChatbotPreferences>({
    titan: {
      color: 'from-pink-600 to-purple-600',
      avatar: '💬'
    },
    nox: {
      color: 'from-amber-700 to-amber-600',
      avatar: '🎤'
    }
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Load preferences from localStorage
    const stored = localStorage.getItem('chatbotPreferences');
    if (stored) {
      setPreferences(JSON.parse(stored));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('chatbotPreferences', JSON.stringify(preferences));
    setSaved(true);
    
    // Trigger a custom event to notify chatbots of the change
    window.dispatchEvent(new CustomEvent('chatbotPreferencesChanged', { 
      detail: preferences 
    }));

    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow p-6 border-2 border-purple-200">
      <div className="flex items-center gap-3 mb-4">
        <Palette className="w-6 h-6 text-amber-600" />
        <h3 className="text-xl font-bold text-stone-100">🤖 Chatbot Customization</h3>
      </div>
      <p className="text-stone-500 mb-6">
        Personalize your AI assistants Titan and Nox with custom colors and avatars.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Titan Customization */}
        <div className="bg-stone-950 rounded-lg p-6 border-2 border-pink-200">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${preferences.titan.color} flex items-center justify-center text-2xl`}>
              {preferences.titan.avatar}
            </div>
            <div>
              <h4 className="text-lg font-bold text-stone-100">Titan</h4>
              <p className="text-sm text-stone-500">Quick Help Assistant</p>
            </div>
          </div>

          {/* Avatar Selection */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-stone-300 mb-2">
              Avatar
            </label>
            <div className="grid grid-cols-8 gap-2">
              {avatarOptions.map((avatar) => (
                <button
                  key={avatar}
                  onClick={() => setPreferences({ ...preferences, titan: { ...preferences.titan, avatar } })}
                  className={`w-10 h-10 rounded-lg text-xl flex items-center justify-center transition-all ${
                    preferences.titan.avatar === avatar
                      ? 'bg-pink-200 border-2 border-pink-600 scale-110'
                      : 'bg-stone-900 hover:bg-stone-800 border border-gray-300'
                  }`}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-semibold text-stone-300 mb-2">
              Color Theme
            </label>
            <div className="grid grid-cols-2 gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setPreferences({ ...preferences, titan: { ...preferences.titan, color: color.value } })}
                  className={`relative p-3 rounded-lg border-2 transition-all ${
                    preferences.titan.color === color.value
                      ? 'border-pink-600 bg-pink-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className={`h-6 rounded bg-gradient-to-r ${color.value} mb-1`}></div>
                  <p className="text-xs text-stone-300 text-center">{color.text}</p>
                  {preferences.titan.color === color.value && (
                    <Check className="absolute top-1 right-1 w-4 h-4 text-pink-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Nox Customization */}
        <div className="bg-stone-950 rounded-lg p-6 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${preferences.nox.color} flex items-center justify-center text-2xl`}>
              {preferences.nox.avatar}
            </div>
            <div>
              <h4 className="text-lg font-bold text-stone-100">Nox</h4>
              <p className="text-sm text-stone-500">Voice AI Assistant</p>
            </div>
          </div>

          {/* Avatar Selection */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-stone-300 mb-2">
              Avatar
            </label>
            <div className="grid grid-cols-8 gap-2">
              {avatarOptions.map((avatar) => (
                <button
                  key={avatar}
                  onClick={() => setPreferences({ ...preferences, nox: { ...preferences.nox, avatar } })}
                  className={`w-10 h-10 rounded-lg text-xl flex items-center justify-center transition-all ${
                    preferences.nox.avatar === avatar
                      ? 'bg-purple-200 border-2 border-amber-600/40 scale-110'
                      : 'bg-stone-900 hover:bg-stone-800 border border-gray-300'
                  }`}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-semibold text-stone-300 mb-2">
              Color Theme
            </label>
            <div className="grid grid-cols-2 gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setPreferences({ ...preferences, nox: { ...preferences.nox, color: color.value } })}
                  className={`relative p-3 rounded-lg border-2 transition-all ${
                    preferences.nox.color === color.value
                      ? 'border-amber-600/40 bg-purple-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className={`h-6 rounded bg-gradient-to-r ${color.value} mb-1`}></div>
                  <p className="text-xs text-stone-300 text-center">{color.text}</p>
                  {preferences.nox.color === color.value && (
                    <Check className="absolute top-1 right-1 w-4 h-4 text-amber-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={handleSave}
          className="px-8 py-3 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-bold transition-all shadow-lg flex items-center gap-2"
        >
          {saved ? (
            <>
              <Check className="w-5 h-5" />
              Saved!
            </>
          ) : (
            <>
              <Palette className="w-5 h-5" />
              Save Customizations
            </>
          )}
        </button>
      </div>

      {saved && (
        <p className="text-center text-green-600 text-sm mt-3 font-semibold">
          ✓ Your chatbot customizations have been saved! Refresh to see changes.
        </p>
      )}
    </div>
  );
}


