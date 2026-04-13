'use client';

import { useState } from 'react';
import { X, Palette, Layout, Bell, Shield, Database, Zap, Settings as SettingsIcon, Sliders } from 'lucide-react';

interface SettingsPanelProps {
  componentName: string;
  onClose: () => void;
}

export default function SettingsPanel({ componentName, onClose }: SettingsPanelProps) {
  const [theme, setTheme] = useState('dark');
  const [layout, setLayout] = useState('grid');
  const [notifications, setNotifications] = useState(true);
  const [dataRefresh, setDataRefresh] = useState('auto');
  const [fontSize, setFontSize] = useState('medium');
  const [cardDensity, setCardDensity] = useState('comfortable');

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="lux-app-bg border-2 border-amber-500/40 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-amber-500/40/30">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <SettingsIcon className="w-7 h-7 text-amber-400" />
              {componentName} Settings
            </h2>
            <p className="text-sm text-amber-200 mt-1">Customize your view and preferences</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-950/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Settings Content */}
        <div className="p-6 space-y-6">
          {/* Customization Section */}
          <div className="bg-gradient-to-r from-stone-900/10 to-pink-500/10 backdrop-blur-xl rounded-xl p-5 border-2 border-amber-400/40/30">
            <div className="flex items-center gap-3 mb-4">
              <Sliders className="w-5 h-5 text-pink-300" />
              <h3 className="font-bold text-white">Customization</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-amber-100/70 mb-2 block font-medium">Card Density</label>
                <div className="grid grid-cols-3 gap-2">
                  {['compact', 'comfortable', 'spacious'].map((density) => (
                    <button
                      key={density}
                      onClick={() => setCardDensity(density)}
                      className={`px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                        cardDensity === density
                          ? 'bg-pink-600 text-white border-2 border-pink-400 shadow-lg'
                          : 'bg-stone-950/10 text-amber-100/70 hover:bg-stone-950/20 border-2 border-transparent'
                      }`}
                    >
                      {density.charAt(0).toUpperCase() + density.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-amber-100/70 mb-2 block font-medium">Font Size</label>
                <div className="grid grid-cols-3 gap-2">
                  {['small', 'medium', 'large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                        fontSize === size
                          ? 'bg-pink-600 text-white border-2 border-pink-400 shadow-lg'
                          : 'bg-stone-950/10 text-amber-100/70 hover:bg-stone-950/20 border-2 border-transparent'
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm text-amber-100/70 font-medium">Show Card Icons</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-stone-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-stone-950 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-amber-100/70 font-medium">Animate Hover Effects</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-stone-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-stone-950 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="bg-stone-950/5 backdrop-blur-xl rounded-xl p-5 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-5 h-5 text-amber-200" />
              <h3 className="font-bold text-white">Appearance</h3>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-amber-100/70 mb-2 block">Theme Mode</label>
                <div className="grid grid-cols-3 gap-2">
                  {['dark', 'light', 'auto'].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setTheme(mode)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        theme === mode
                          ? 'bg-amber-600 text-white border-2 border-amber-400/40'
                          : 'bg-stone-950/10 text-amber-100/70 hover:bg-stone-950/20 border-2 border-transparent'
                      }`}
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-amber-100/70 mb-2 block">Accent Color</label>
                <div className="flex gap-2">
                  {['purple', 'blue', 'green', 'pink', 'orange'].map((color) => (
                    <button
                      key={color}
                      className={`w-10 h-10 rounded-full border-2 border-white/30 hover:scale-110 transition-transform bg-${color}-600`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Layout Settings */}
          <div className="bg-stone-950/5 backdrop-blur-xl rounded-xl p-5 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Layout className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-white">Layout</h3>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-amber-100/70 mb-2 block">Display Mode</label>
                <div className="grid grid-cols-2 gap-2">
                  {['grid', 'list'].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setLayout(mode)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        layout === mode
                          ? 'bg-amber-600 text-white border-2 border-blue-400'
                          : 'bg-stone-950/10 text-amber-100/70 hover:bg-stone-950/20 border-2 border-transparent'
                      }`}
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-amber-100/70">Compact View</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-stone-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-stone-950 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-stone-950/5 backdrop-blur-xl rounded-xl p-5 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-5 h-5 text-yellow-300" />
              <h3 className="font-bold text-white">Notifications</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-amber-100/70">Enable Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications}
                    onChange={() => setNotifications(!notifications)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-stone-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-stone-950 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-amber-100/70">Sound Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-stone-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-stone-950 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Data & Performance */}
          <div className="bg-stone-950/5 backdrop-blur-xl rounded-xl p-5 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-5 h-5 text-green-300" />
              <h3 className="font-bold text-white">Data & Performance</h3>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-amber-100/70 mb-2 block">Auto Refresh</label>
                <select
                  value={dataRefresh}
                  onChange={(e) => setDataRefresh(e.target.value)}
                  className="w-full px-4 py-2 bg-stone-950/10 border border-white/20 rounded-lg text-white focus:border-amber-500/40 focus:outline-none"
                >
                  <option value="auto">Auto (30s)</option>
                  <option value="60">Every 1 min</option>
                  <option value="300">Every 5 min</option>
                  <option value="manual">Manual only</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-amber-100/70">Cache Data</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-stone-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-stone-950 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Advanced */}
          <div className="bg-stone-950/5 backdrop-blur-xl rounded-xl p-5 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-orange-300" />
              <h3 className="font-bold text-white">Advanced</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-stone-950/10 hover:bg-stone-950/20 border border-white/20 rounded-lg text-amber-100/70 hover:text-white font-medium transition-colors text-left">
                Export Settings
              </button>
              <button className="w-full px-4 py-2 bg-stone-950/10 hover:bg-stone-950/20 border border-white/20 rounded-lg text-amber-100/70 hover:text-white font-medium transition-colors text-left">
                Import Settings
              </button>
              <button className="w-full px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 rounded-lg text-red-300 hover:text-red-200 font-medium transition-colors text-left">
                Reset to Defaults
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-amber-500/40/30">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-stone-950/10 hover:bg-stone-950/20 text-white rounded-lg font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gradient-to-r from-amber-700 to-amber-500 hover:from-stone-900 hover:to-amber-800 text-white rounded-lg font-medium transition-all shadow-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}


