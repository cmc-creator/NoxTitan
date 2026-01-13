'use client';

import { useState } from 'react';
import { Bot, Upload, X, Check } from 'lucide-react';

interface ChatbotCustomizerProps {
  currentAvatar?: string;
  onSave: (avatar: string) => void;
  onClose: () => void;
}

export default function ChatbotCustomizer({ currentAvatar, onSave, onClose }: ChatbotCustomizerProps) {
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar || 'robot-blue');
  const [customImage, setCustomImage] = useState<string | null>(null);

  const presetAvatars = [
    { id: 'robot-blue', emoji: '🤖', name: 'Blue Robot', color: 'from-blue-500 to-cyan-500' },
    { id: 'robot-purple', emoji: '🤖', name: 'Purple Robot', color: 'from-purple-500 to-pink-500' },
    { id: 'alien', emoji: '👽', name: 'Friendly Alien', color: 'from-green-500 to-emerald-500' },
    { id: 'unicorn', emoji: '🦄', name: 'Magic Unicorn', color: 'from-pink-500 to-purple-500' },
    { id: 'cat', emoji: '😺', name: 'Happy Cat', color: 'from-orange-500 to-yellow-500' },
    { id: 'dog', emoji: '🐶', name: 'Good Dog', color: 'from-amber-500 to-orange-500' },
    { id: 'panda', emoji: '🐼', name: 'Cute Panda', color: 'from-slate-600 to-slate-800' },
    { id: 'owl', emoji: '🦉', name: 'Wise Owl', color: 'from-indigo-500 to-purple-500' },
    { id: 'rocket', emoji: '🚀', name: 'Space Rocket', color: 'from-red-500 to-orange-500' },
    { id: 'star', emoji: '⭐', name: 'Shiny Star', color: 'from-yellow-400 to-orange-400' },
    { id: 'heart', emoji: '💙', name: 'Blue Heart', color: 'from-blue-400 to-cyan-400' },
    { id: 'fire', emoji: '🔥', name: 'Hot Fire', color: 'from-orange-500 to-red-500' },
    { id: 'lightning', emoji: '⚡', name: 'Lightning', color: 'from-yellow-400 to-yellow-600' },
    { id: 'brain', emoji: '🧠', name: 'Big Brain', color: 'from-pink-400 to-purple-400' },
    { id: 'ghost', emoji: '👻', name: 'Friendly Ghost', color: 'from-slate-300 to-slate-400' },
    { id: 'wizard', emoji: '🧙', name: 'Wizard', color: 'from-purple-600 to-indigo-600' },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomImage(reader.result as string);
        setSelectedAvatar('custom');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (selectedAvatar === 'custom' && customImage) {
      onSave(customImage);
    } else {
      onSave(selectedAvatar);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 max-w-4xl w-full border-2 border-cyan-500/30 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Customize Your Chatbot</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-all"
          >
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        <div className="mb-6 p-4 bg-blue-500/10 border border-blue-400/30 rounded-lg">
          <p className="text-blue-200 text-sm">
            🎨 Choose a fun avatar for your AI assistant! Pick from our presets or upload your own image.
          </p>
        </div>

        {/* Preset Avatars */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Preset Avatars</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {presetAvatars.map((avatar) => (
              <button
                key={avatar.id}
                onClick={() => setSelectedAvatar(avatar.id)}
                className={`relative group transition-all ${
                  selectedAvatar === avatar.id ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${avatar.color} flex items-center justify-center text-3xl border-2 ${
                  selectedAvatar === avatar.id ? 'border-cyan-400' : 'border-transparent'
                }`}>
                  {avatar.emoji}
                </div>
                {selectedAvatar === avatar.id && (
                  <div className="absolute -top-1 -right-1 bg-cyan-500 rounded-full p-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
                <p className="text-xs text-slate-300 mt-1 text-center">{avatar.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Upload */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Upload Your Own</h3>
          <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 hover:border-cyan-400/50 transition-all">
            <label className="flex flex-col items-center cursor-pointer">
              <Upload className="w-12 h-12 text-cyan-400 mb-3" />
              <p className="text-white font-semibold mb-1">Click to upload</p>
              <p className="text-slate-400 text-sm">PNG, JPG, GIF up to 5MB</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            {customImage && (
              <div className="mt-4 flex justify-center">
                <div className="relative">
                  <img src={customImage} alt="Custom avatar" className="w-24 h-24 rounded-xl object-cover border-2 border-cyan-400" />
                  <div className="absolute -top-2 -right-2 bg-cyan-500 rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* HIPAA Compliance Warning */}
        <div className="mb-6 p-4 bg-red-500/10 border border-red-400/30 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="text-red-400 text-xl">⚠️</div>
            <div>
              <p className="text-red-300 font-semibold mb-1">HIPAA Compliance Notice</p>
              <p className="text-red-200 text-sm">
                Do not upload images containing patient information, PHI, or any confidential medical data. 
                Uploaded images must comply with HIPAA regulations and your organization's privacy policies.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-bold text-white transition-all"
          >
            Save Avatar
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-white transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
