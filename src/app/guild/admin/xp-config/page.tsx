'use client';

import { useState, useEffect } from 'react';
import { Settings, Zap, Save } from 'lucide-react';

interface XPSettings {
  // Activities
  activityEasy: number;
  activityMedium: number;
  activityHard: number;
  
  // Achievements
  achievementCommon: number;
  achievementUncommon: number;
  achievementRare: number;
  achievementEpic: number;
  achievementLegendary: number;
  
  // Daily Actions
  clockIn: number;
  onTimeClockIn: number;
  perfectWeek: number;
  trainingCompletion: number;
  shiftCompletion: number;
  
  // Recognition
  recognitionReceived: number;
  recognitionGiven: number;
  
  // Guild Levels
  levelUpBonus: number;
  streakDailyBonus: number;
}

const DEFAULT_XP_SETTINGS: XPSettings = {
  activityEasy: 25,
  activityMedium: 75,
  activityHard: 150,
  achievementCommon: 50,
  achievementUncommon: 100,
  achievementRare: 250,
  achievementEpic: 500,
  achievementLegendary: 1000,
  clockIn: 10,
  onTimeClockIn: 25,
  perfectWeek: 200,
  trainingCompletion: 100,
  shiftCompletion: 50,
  recognitionReceived: 30,
  recognitionGiven: 20,
  levelUpBonus: 500,
  streakDailyBonus: 15
};

export default function XPConfigPage() {
  const [settings, setSettings] = useState<XPSettings>(DEFAULT_XP_SETTINGS);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Load saved settings from API
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/guild/admin/xp-settings');
      if (response.ok) {
        const data = await response.json();
        setSettings(data);
      }
    } catch (error) {
      console.error('Failed to fetch XP settings:', error);
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/guild/admin/xp-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });

      if (response.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (error) {
      console.error('Failed to save XP settings:', error);
      alert('Failed to save settings');
    }
  };

  const updateSetting = (key: keyof XPSettings, value: number) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetToDefaults = () => {
    if (confirm('Reset all XP values to defaults?')) {
      setSettings(DEFAULT_XP_SETTINGS);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Settings className="w-10 h-10 text-purple-400" />
            XP Configuration
          </h1>
          <p className="text-slate-300">Configure XP point values for all activities, achievements, and actions</p>
        </div>

        {/* Save Success Message */}
        {saved && (
          <div className="bg-green-600 text-white px-6 py-3 rounded-lg mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Settings saved successfully!
          </div>
        )}

        {/* Activities Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            Team Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Easy Activities</label>
              <input
                type="number"
                value={settings.activityEasy}
                onChange={(e) => updateSetting('activityEasy', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Medium Activities</label>
              <input
                type="number"
                value={settings.activityMedium}
                onChange={(e) => updateSetting('activityMedium', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Hard Activities</label>
              <input
                type="number"
                value={settings.activityHard}
                onChange={(e) => updateSetting('activityHard', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Achievements by Rarity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-400 mb-2">Common</label>
              <input
                type="number"
                value={settings.achievementCommon}
                onChange={(e) => updateSetting('achievementCommon', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-green-400 mb-2">Uncommon</label>
              <input
                type="number"
                value={settings.achievementUncommon}
                onChange={(e) => updateSetting('achievementUncommon', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-400 mb-2">Rare</label>
              <input
                type="number"
                value={settings.achievementRare}
                onChange={(e) => updateSetting('achievementRare', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-purple-400 mb-2">Epic</label>
              <input
                type="number"
                value={settings.achievementEpic}
                onChange={(e) => updateSetting('achievementEpic', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-yellow-400 mb-2">Legendary</label>
              <input
                type="number"
                value={settings.achievementLegendary}
                onChange={(e) => updateSetting('achievementLegendary', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
          </div>
        </div>

        {/* Daily Actions Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Daily Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Clock In</label>
              <input
                type="number"
                value={settings.clockIn}
                onChange={(e) => updateSetting('clockIn', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">On-Time Clock In</label>
              <input
                type="number"
                value={settings.onTimeClockIn}
                onChange={(e) => updateSetting('onTimeClockIn', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Perfect Week</label>
              <input
                type="number"
                value={settings.perfectWeek}
                onChange={(e) => updateSetting('perfectWeek', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Training Completion</label>
              <input
                type="number"
                value={settings.trainingCompletion}
                onChange={(e) => updateSetting('trainingCompletion', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Shift Completion</label>
              <input
                type="number"
                value={settings.shiftCompletion}
                onChange={(e) => updateSetting('shiftCompletion', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
          </div>
        </div>

        {/* Recognition Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Receiving Recognition</label>
              <input
                type="number"
                value={settings.recognitionReceived}
                onChange={(e) => updateSetting('recognitionReceived', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Giving Recognition</label>
              <input
                type="number"
                value={settings.recognitionGiven}
                onChange={(e) => updateSetting('recognitionGiven', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
          </div>
        </div>

        {/* Guild Bonuses Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Guild Bonuses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Level Up Bonus</label>
              <input
                type="number"
                value={settings.levelUpBonus}
                onChange={(e) => updateSetting('levelUpBonus', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Daily Streak Bonus</label>
              <input
                type="number"
                value={settings.streakDailyBonus}
                onChange={(e) => updateSetting('streakDailyBonus', parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-lg transition-all"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
          <button
            onClick={resetToDefaults}
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-all"
          >
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
}
