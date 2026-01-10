"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { Sun, Moon, ChevronDown } from "lucide-react";

export default function TopNavigation() {
  const { isAuthenticated } = useAuth();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [financeMenuOpen, setFinanceMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('scheduler-theme') as 'light' | 'dark';
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('scheduler-theme', newTheme);
    
    // Apply theme to body and root
    const root = document.documentElement;
    const body = document.body;
    
    if (newTheme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      body.classList.remove('dark');
      body.classList.add('light');
      root.style.setProperty('--bg-color', '#f8f9fa');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--text-color', '#1a1a1a');
      body.style.backgroundColor = '#f8f9fa';
      body.style.color = '#1a1a1a';
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      body.classList.remove('light');
      body.classList.add('dark');
      root.style.setProperty('--bg-color', '#0f172a');
      root.style.setProperty('--card-bg', '#1e293b');
      root.style.setProperty('--text-color', '#f8fafc');
      body.style.backgroundColor = '#0f172a';
      body.style.color = '#f8fafc';
    }
  };
  
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-gradient-to-r from-black via-purple-950 to-black backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-purple-500/30">
      <div className="flex items-center gap-3">
        {/* Logo and placeholder removed as requested */}
        <Link href="/" className="flex items-center gap-2 text-4xl md:text-5xl font-black text-white tracking-tight text-pop-strong">
          <span className="relative inline-block transform hover:scale-105 transition-transform duration-300">
            {/* Base metallic text with lighter purple-tinted chrome */}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 via-purple-200 to-purple-400"
                  style={{
                    textShadow: `
                      0 1px 0 rgba(255,255,255,0.9),
                      0 2px 0 rgba(240,240,255,0.7),
                      0 3px 0 rgba(220,220,255,0.6),
                      0 4px 0 rgba(200,180,255,0.5),
                      0 5px 0 rgba(168,85,247,0.3),
                      0 8px 6px rgba(0,0,0,0.3),
                      0 12px 15px rgba(168,85,247,0.5),
                      0 0 35px rgba(255,255,255,0.4)
                    `,
                    WebkitTextStroke: '0.5px rgba(200,200,255,0.5)',
                    filter: 'brightness(1.8) contrast(1.2)'
                  }}>
              NoxTitan
            </span>
            {/* Top highlight shine */}
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-transparent opacity-90"
                  style={{ WebkitTextStroke: '0px' }}>
              NoxTitan
            </span>
            {/* Animated glossy shine sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent bg-clip-text text-transparent opacity-40"
                  style={{ 
                    backgroundSize: '200% 100%',
                    animation: 'shine 4s ease-in-out infinite',
                    WebkitTextStroke: '0px'
                  }}>
              NoxTitan
            </span>
          </span>
          <span className="hidden md:inline text-xs font-black px-2 py-1 rounded-md bg-gradient-to-b from-purple-900/40 via-black/60 to-purple-900/40 border-2 border-purple-400/50 ml-2 shadow-[0_0_15px_rgba(168,85,247,0.6)]" 
                style={{ 
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.7)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 0 15px rgba(168,85,247,0.6)'
                }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                  style={{
                    WebkitTextStroke: '0.5px rgba(168,85,247,0.4)',
                    filter: 'brightness(1.5)'
                  }}>
              ™
            </span>
          </span>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-6 text-base font-semibold">
        <Link href="/dashboard" className="relative px-5 py-2.5 rounded-lg border-2 border-purple-400 bg-gradient-to-b from-purple-800/50 via-purple-900/60 to-black/70 hover:border-purple-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all group shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-50 via-slate-200 to-purple-300 font-bold"
                style={{
                  textShadow: '0 1px 3px rgba(0,0,0,0.9), 0 0 20px rgba(168,85,247,0.8)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.4)',
                  filter: 'brightness(1.5)'
                }}>
            ⚡ Command Center
          </span>
        </Link>
        <Link href="/calendar" className="relative px-4 py-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all group">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            Scheduler
          </span>
        </Link>
        <Link href="/hr" className="relative px-4 py-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all group">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            HR
          </span>
        </Link>

        <Link href="/compliance" className="relative px-4 py-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all group">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            Compliance
          </span>
        </Link>
        
        {/* Finance Dropdown */}
        <div className="relative" onMouseLeave={() => setFinanceMenuOpen(false)}>
          <button
            onClick={() => setFinanceMenuOpen(!financeMenuOpen)}
            onMouseEnter={() => setFinanceMenuOpen(true)}
            className="relative px-4 py-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all group flex items-center gap-2"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                    WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
              Finance
            </span>
            <ChevronDown className="w-4 h-4 text-purple-300" />
          </button>
          {financeMenuOpen && (
            <div className="absolute top-full mt-2 right-0 min-w-[200px] bg-gradient-to-b from-purple-950 via-black to-purple-950 border-2 border-purple-500/40 rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.6)] z-50">
              <Link href="/payroll" className="block px-4 py-3 hover:bg-purple-900/40 border-b border-purple-500/20 transition-colors text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                        WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                        filter: 'brightness(1.4)'
                      }}>
                  Payroll
                </span>
              </Link>
              <Link href="/accounting" className="block px-4 py-3 hover:bg-purple-900/40 border-b border-purple-500/20 transition-colors text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                        WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                        filter: 'brightness(1.4)'
                      }}>
                  Accounting
                </span>
              </Link>
              <Link href="/ledger" className="block px-4 py-3 hover:bg-purple-900/40 transition-colors text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                        WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                        filter: 'brightness(1.4)'
                      }}>
                  General Ledger
                </span>
              </Link>
            </div>
          )}
        </div>
        
        <Link href="/analytics" className="relative px-4 py-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all group">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            Analytics
          </span>
        </Link>
        <Link href="/activities" className="relative px-4 py-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all group">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            🎮 Activities
          </span>
        </Link>
        <Link href="/guild/admin" className="relative px-4 py-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all group">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            👑 Guild Admin
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all"
          title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        >
          {theme === 'light' ? <Moon className="w-5 h-5 text-purple-300" /> : <Sun className="w-5 h-5 text-yellow-400" />}
        </button>
        <Link href="/settings" className="relative px-4 py-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all group">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            ⚙️ Settings
          </span>
        </Link>
      </div>
      {/* Mobile menu button (optional for future) */}
    </nav>
  );
}
