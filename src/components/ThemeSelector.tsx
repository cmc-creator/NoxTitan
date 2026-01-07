'use client';

import { Palette } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'light', name: 'Light', colors: 'from-gray-100 to-gray-200', text: 'text-gray-900' },
    { id: 'dark', name: 'Dark', colors: 'from-slate-800 to-slate-900', text: 'text-white' },
    { id: 'blue', name: 'Ocean', colors: 'from-blue-600 to-cyan-600', text: 'text-white' },
    { id: 'purple', name: 'Royal', colors: 'from-purple-600 to-pink-600', text: 'text-white' },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all border border-white/20">
        <Palette className="h-5 w-5" />
        <span className="hidden md:inline">Theme</span>
      </button>

      <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <div className="p-2">
          <div className="text-xs text-gray-400 px-3 py-2 font-semibold">Choose Theme</div>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id as any)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors ${
                theme === t.id ? 'bg-slate-700' : ''
              }`}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${t.colors} shadow-lg`}></div>
              <span className="text-white font-medium">{t.name}</span>
              {theme === t.id && <span className="ml-auto text-green-400">✓</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
