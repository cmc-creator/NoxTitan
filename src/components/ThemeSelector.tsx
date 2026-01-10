'use client';

import { useState } from 'react';
import { Palette, Type, Image, X, Search } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';

export default function ThemeSelector() {
  const { theme, setTheme, font, setFont, backgroundImage, setBackgroundImage } = useTheme();
  const [showPanel, setShowPanel] = useState(false);
  const [activeTab, setActiveTab] = useState<'colors' | 'fonts' | 'backgrounds'>('colors');
  const [searchTerm, setSearchTerm] = useState('');

  const themes = [
    // Essential Modes
    { id: 'light', name: '☀️ Light Mode', colors: 'from-gray-50 to-white', primary: '#ffffff', secondary: '#f8fafc', collection: 'Essential' },
    { id: 'dark', name: '🌙 Dark Mode', colors: 'from-slate-800 to-slate-900', primary: '#1e293b', secondary: '#0f172a', collection: 'Essential' },
    
    // Classic Collection
    { id: 'midnight', name: 'Midnight', colors: 'from-slate-900 to-slate-950', primary: '#0f172a', secondary: '#1e293b', collection: 'Classic' },
    { id: 'charcoal', name: 'Charcoal', colors: 'from-gray-800 to-gray-900', primary: '#1f2937', secondary: '#111827', collection: 'Classic' },
    { id: 'navy', name: 'Navy', colors: 'from-blue-900 to-blue-950', primary: '#1e3a8a', secondary: '#172554', collection: 'Classic' },
    { id: 'graphite', name: 'Graphite', colors: 'from-gray-700 to-slate-800', primary: '#374151', secondary: '#1e293b', collection: 'Classic' },
    
    // Professional Collection
    { id: 'slate', name: 'Slate Gray', colors: 'from-slate-600 to-gray-700', primary: '#475569', secondary: '#374151', collection: 'Professional' },
    { id: 'steel', name: 'Steel Blue', colors: 'from-slate-500 to-blue-600', primary: '#64748b', secondary: '#2563eb', collection: 'Professional' },
    { id: 'pewter', name: 'Pewter', colors: 'from-gray-600 to-slate-700', primary: '#4b5563', secondary: '#334155', collection: 'Professional' },
    { id: 'cobalt', name: 'Cobalt', colors: 'from-blue-700 to-indigo-700', primary: '#1d4ed8', secondary: '#4338ca', collection: 'Professional' },
    
    // Elegant Collection
    { id: 'royal', name: 'Royal Purple', colors: 'from-purple-600 to-pink-600', primary: '#9333ea', secondary: '#db2777', collection: 'Elegant' },
    { id: 'rose-gold', name: 'Rose Gold', colors: 'from-pink-300 to-amber-400', primary: '#f9a8d4', secondary: '#fbbf24', collection: 'Elegant' },
    { id: 'champagne', name: 'Champagne', colors: 'from-amber-200 to-yellow-300', primary: '#fde68a', secondary: '#fcd34d', collection: 'Elegant' },
    { id: 'amethyst', name: 'Amethyst', colors: 'from-purple-700 to-purple-900', primary: '#7e22ce', secondary: '#581c87', collection: 'Elegant' },
    
    // Vibrant Collection
    { id: 'ocean', name: 'Ocean Blue', colors: 'from-blue-600 to-cyan-600', primary: '#2563eb', secondary: '#0891b2', collection: 'Vibrant' },
    { id: 'azure', name: 'Azure Sky', colors: 'from-sky-400 to-blue-500', primary: '#38bdf8', secondary: '#3b82f6', collection: 'Vibrant' },
    { id: 'neon', name: 'Neon Nights', colors: 'from-cyan-500 to-purple-600', primary: '#06b6d4', secondary: '#9333ea', collection: 'Vibrant' },
    { id: 'electric', name: 'Electric', colors: 'from-blue-500 to-fuchsia-600', primary: '#3b82f6', secondary: '#c026d3', collection: 'Vibrant' },
    { id: 'cosmic', name: 'Cosmic', colors: 'from-violet-600 to-purple-800', primary: '#7c3aed', secondary: '#6b21a8', collection: 'Vibrant' },
    { id: 'aurora', name: 'Aurora', colors: 'from-green-400 to-blue-500', primary: '#4ade80', secondary: '#3b82f6', collection: 'Vibrant' },
    
    // Nature Collection
    { id: 'forest', name: 'Forest Green', colors: 'from-green-700 to-emerald-800', primary: '#15803d', secondary: '#065f46', collection: 'Nature' },
    { id: 'mint', name: 'Mint Fresh', colors: 'from-green-400 to-emerald-500', primary: '#4ade80', secondary: '#10b981', collection: 'Nature' },
    { id: 'sage', name: 'Sage', colors: 'from-green-600 to-teal-600', primary: '#16a34a', secondary: '#0d9488', collection: 'Nature' },
    { id: 'emerald', name: 'Emerald', colors: 'from-emerald-500 to-green-600', primary: '#10b981', secondary: '#16a34a', collection: 'Nature' },
    { id: 'lavender', name: 'Lavender', colors: 'from-purple-300 to-pink-300', primary: '#c084fc', secondary: '#f9a8d4', collection: 'Nature' },
    { id: 'orchid', name: 'Orchid', colors: 'from-fuchsia-500 to-purple-600', primary: '#d946ef', secondary: '#9333ea', collection: 'Nature' },
    
    // Warm Collection
    { id: 'sunset', name: 'Sunset Orange', colors: 'from-orange-500 to-red-600', primary: '#f97316', secondary: '#dc2626', collection: 'Warm' },
    { id: 'crimson', name: 'Crimson', colors: 'from-red-600 to-rose-700', primary: '#dc2626', secondary: '#be123c', collection: 'Warm' },
    { id: 'amber', name: 'Amber Glow', colors: 'from-amber-500 to-orange-600', primary: '#f59e0b', secondary: '#ea580c', collection: 'Warm' },
    { id: 'coral', name: 'Coral Reef', colors: 'from-rose-400 to-orange-400', primary: '#fb7185', secondary: '#fb923c', collection: 'Warm' },
  ];

  const fonts = [
    { id: 'inter', name: 'Inter', className: 'font-sans', style: 'Modern & Clean' },
    { id: 'roboto', name: 'Roboto', className: 'font-roboto', style: 'Professional' },
    { id: 'poppins', name: 'Poppins', className: 'font-poppins', style: 'Geometric & Bold' },
    { id: 'montserrat', name: 'Montserrat', className: 'font-montserrat', style: 'Urban & Stylish' },
    { id: 'lato', name: 'Lato', className: 'font-lato', style: 'Friendly & Warm' },
    { id: 'open-sans', name: 'Open Sans', className: 'font-open-sans', style: 'Humanist & Clear' },
    { id: 'raleway', name: 'Raleway', className: 'font-raleway', style: 'Elegant & Refined' },
    { id: 'nunito', name: 'Nunito', className: 'font-nunito', style: 'Rounded & Soft' },
    { id: 'source-sans', name: 'Source Sans', className: 'font-source-sans', style: 'Technical & Clean' },
    { id: 'playfair', name: 'Playfair Display', className: 'font-playfair', style: 'Classic & Luxurious' },
    { id: 'merriweather', name: 'Merriweather', className: 'font-merriweather', style: 'Traditional & Readable' },
    { id: 'ubuntu', name: 'Ubuntu', className: 'font-ubuntu', style: 'Modern & Friendly' },
  ];

  const filteredThemes = themes.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="relative">
        <button 
          onClick={() => setShowPanel(!showPanel)}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all border border-white/20"
        >
          <Palette className="h-5 w-5" />
          <span className="hidden md:inline">Customize</span>
        </button>
      </div>

      {showPanel && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-slate-700">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Palette className="h-7 w-7 text-purple-400" />
                  Customize Your Experience
                </h2>
                <p className="text-slate-400 text-sm mt-1">Choose your perfect color theme, font, and background</p>
              </div>
              <button
                onClick={() => setShowPanel(false)}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-slate-400" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 px-6 pt-4 border-b border-slate-800">
              <button
                onClick={() => setActiveTab('colors')}
                className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors ${
                  activeTab === 'colors' 
                    ? 'bg-slate-800 text-white' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Palette className="h-4 w-4" />
                Color Themes
              </button>
              <button
                onClick={() => setActiveTab('fonts')}
                className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors ${
                  activeTab === 'fonts' 
                    ? 'bg-slate-800 text-white' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Type className="h-4 w-4" />
                Fonts
              </button>
              <button
                onClick={() => setActiveTab('backgrounds')}
                className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors ${
                  activeTab === 'backgrounds' 
                    ? 'bg-slate-800 text-white' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Image className="h-4 w-4" />
                Backgrounds
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
              {activeTab === 'colors' && (
                <div>
                  {/* Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search themes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  {/* Essential Light/Dark Modes */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Essential Modes</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {filteredThemes.filter(t => t.collection === 'Essential').map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setTheme(t.id as any)}
                          className={`relative group p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                            theme === t.id 
                              ? 'border-purple-500 bg-slate-800 ring-4 ring-purple-500/30' 
                              : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                          }`}
                        >
                          <div className={`w-full h-24 rounded-lg bg-gradient-to-br ${t.colors} shadow-lg mb-3`}></div>
                          <div className="text-white font-bold text-base">{t.name}</div>
                          {theme === t.id && (
                            <div className="absolute top-2 right-2 bg-purple-500 text-white rounded-full p-1">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Themed Collections */}
                  {['Classic', 'Professional', 'Elegant', 'Vibrant', 'Nature', 'Warm'].map(collection => {
                    const collectionThemes = filteredThemes.filter(t => t.collection === collection);
                    if (collectionThemes.length === 0) return null;
                    return (
                      <div key={collection} className="mb-8">
                        <h3 className="text-lg font-bold text-purple-300 mb-4">{collection} Collection</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {collectionThemes.map((t) => (
                            <button
                              key={t.id}
                              onClick={() => setTheme(t.id as any)}
                              className={`relative group p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                                theme === t.id 
                                  ? 'border-purple-500 bg-slate-800' 
                                  : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                              }`}
                            >
                              <div className={`w-full h-20 rounded-lg bg-gradient-to-br ${t.colors} shadow-lg mb-3`}></div>
                              <div className="text-white font-medium text-sm">{t.name}</div>
                              {theme === t.id && (
                                <div className="absolute top-2 right-2 bg-purple-500 text-white rounded-full p-1">
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeTab === 'fonts' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fonts.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFont(f.id)}
                      className={`relative p-6 rounded-xl border-2 transition-all hover:scale-105 text-left ${
                        font === f.id 
                          ? 'border-purple-500 bg-slate-800' 
                          : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                      }`}
                    >
                      <div className={`text-2xl font-bold text-white mb-2 ${f.className}`}>
                        {f.name}
                      </div>
                      <div className="text-slate-400 text-sm mb-3">{f.style}</div>
                      <div className={`text-slate-300 text-sm ${f.className}`}>
                        The quick brown fox jumps over the lazy dog
                      </div>
                      {font === f.id && (
                        <div className="absolute top-4 right-4 bg-purple-500 text-white rounded-full p-1">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {activeTab === 'backgrounds' && (
                <div>
                  <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Image className="h-5 w-5 text-blue-400 mt-0.5" />
                      <div>
                        <div className="text-blue-300 font-medium mb-1">Background Images</div>
                        <div className="text-blue-200/70 text-sm">
                          Choose from preset backgrounds or upload your own custom images.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {/* None Option */}
                    <button
                      onClick={() => setBackgroundImage(null)}
                      className={`relative p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                        !backgroundImage 
                          ? 'border-purple-500 bg-slate-800' 
                          : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                      }`}
                    >
                      <div className="w-full h-32 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 shadow-lg mb-3 flex items-center justify-center">
                        <span className="text-slate-400 text-sm">No Background</span>
                      </div>
                      <div className="text-white font-medium text-sm">None</div>
                      {!backgroundImage && (
                        <div className="absolute top-2 right-2 bg-purple-500 text-white rounded-full p-1">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>

                    {/* Preset Backgrounds */}
                    {[
                      { id: 'bokeh-lights', name: 'Bokeh Lights', path: '/backgrounds/bokeh-lights.jpg' },
                      { id: 'nature-river', name: 'Nature River', path: '/backgrounds/nature-river.jpg' },
                      { id: 'dark-metal', name: 'Dark Metal', path: '/backgrounds/dark-metal.jpg' },
                      { id: 'steel-texture', name: 'Steel Texture', path: '/backgrounds/steel-texture.jpg' },
                      { id: 'blue-chrome', name: 'Blue Chrome', path: '/backgrounds/blue-chrome.jpg' },
                      { id: 'black-brushed', name: 'Black Brushed', path: '/backgrounds/black-brushed.jpg' },
                      { id: 'purple-bokeh', name: 'Purple Bokeh', path: '/backgrounds/purple-bokeh.jpg' },
                      { id: 'noxtitan-logo', name: 'NoxTitan Crystals', path: '/backgrounds/noxtitan-logo.jpg' },
                      { id: 'red-gold-metal', name: 'Red Gold Metal', path: '/backgrounds/red-gold-metal.jpg' },
                      { id: 'tuscany-sunset', name: 'Tuscany Sunset', path: '/backgrounds/tuscany-sunset.jpg' },
                      { id: 'misty-forest', name: 'Misty Forest', path: '/backgrounds/misty-forest.jpg' },
                      { id: 'ornate-swirls', name: 'Ornate Swirls', path: '/backgrounds/ornate-swirls.jpg' },
                      { id: 'palace-arches', name: 'Palace Arches', path: '/backgrounds/palace-arches.jpg' },
                      { id: 'abstract-mist', name: 'Abstract Mist', path: '/backgrounds/abstract-mist.jpg' },
                      { id: 'epic-storm', name: 'Epic Storm', path: '/backgrounds/epic-storm.jpg' },
                      { id: 'metallic-waves', name: 'Metallic Waves', path: '/backgrounds/metallic-waves.jpg' },
                      { id: 'tropical-leaves', name: 'Tropical Leaves', path: '/backgrounds/tropical-leaves.jpg' },
                      { id: 'fantasy-mountains', name: 'Fantasy Mountains', path: '/backgrounds/fantasy-mountains.jpg' },
                    ].map((bg) => (
                      <button
                        key={bg.id}
                        onClick={() => setBackgroundImage(bg.path)}
                        className={`relative p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                          backgroundImage === bg.path 
                            ? 'border-purple-500 bg-slate-800' 
                            : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                        }`}
                      >
                        <div 
                          className="w-full h-32 rounded-lg shadow-lg mb-3 bg-cover bg-center"
                          style={{ backgroundImage: `url(${bg.path})` }}
                        />
                        <div className="text-white font-medium text-sm">{bg.name}</div>
                        {backgroundImage === bg.path && (
                          <div className="absolute top-2 right-2 bg-purple-500 text-white rounded-full p-1">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </button>
                    ))}

                    {/* Upload New */}
                    <label className="relative p-4 rounded-xl border-2 border-dashed border-slate-600 bg-slate-800/50 hover:border-purple-500 hover:bg-slate-800 transition-all cursor-pointer group">
                      <div className="w-full h-32 rounded-lg bg-slate-700/50 mb-3 flex items-center justify-center">
                        <div className="text-center">
                          <Image className="h-8 w-8 text-slate-400 mx-auto mb-2 group-hover:text-purple-400 transition-colors" />
                          <span className="text-slate-400 text-xs group-hover:text-purple-300">Upload Custom</span>
                        </div>
                      </div>
                      <div className="text-white font-medium text-sm">Add Your Own</div>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              setBackgroundImage(event.target?.result as string);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
