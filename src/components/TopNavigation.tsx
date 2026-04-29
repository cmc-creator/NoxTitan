"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { Sun, Moon, ChevronDown, Zap, Gamepad2, Crown, Settings } from "lucide-react";

export default function TopNavigation() {
  const { isAuthenticated } = useAuth();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [financeMenuOpen, setFinanceMenuOpen] = useState(false);
  const [enterpriseMenuOpen, setEnterpriseMenuOpen] = useState(false);

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
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-[rgba(201,168,76,0.08)]  shadow-2xl sticky top-0 z-50 border-b border-amber-500/30">
      <div className="flex items-center gap-3">
        {/* Logo and placeholder removed as requested */}
        <Link href="/" className="flex items-center gap-2 text-4xl md:text-5xl font-black text-white tracking-tight text-pop-strong">
          <span className="relative inline-block transform transition-transform duration-300">
            {/* Base metallic text with lighter purple-tinted chrome */}
            <span className="text-[#C9A84C] bg-[#110F0B]"
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
              NyxTitan
            </span>
            {/* Top highlight shine */}
            <span className="absolute inset-0 text-[#C9A84C] bg-[#110F0B] opacity-90"
                  style={{ WebkitTextStroke: '0px' }}>
              NyxTitan
            </span>
            {/* Animated glossy shine sweep */}
            <span className="absolute inset-0 bg-[rgba(201,168,76,0.08)] bg-clip-text text-transparent opacity-40"
                  style={{ 
                    backgroundSize: '200% 100%',
                    animation: 'shine 4s ease-in-out infinite',
                    WebkitTextStroke: '0px'
                  }}>
              NyxTitan
            </span>
          </span>
          <span className="hidden md:inline text-xs font-black px-2 py-1 rounded-md bg-[#110F0B]/40 border-2 border-amber-400/50 ml-2 shadow-[rgba(201,168,76,0.2)]" 
                style={{ 
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.7)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 0 15px rgba(168,85,247,0.6)'
                }}>
            <span className="text-[#C9A84C] bg-[#110F0B]"
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
        <Link href="/dashboard" className="relative px-5 py-2.5 rounded-lg border-2 border-amber-400 bg-[#110F0B] hover:border-[rgba(201,168,76,0.45)] hover:shadow-[rgba(201,168,76,0.2)] transition-all group shadow-[rgba(201,168,76,0.2)] flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#E8C060]" />
          <span className="text-[#C9A84C] bg-[#110F0B] font-bold"
                style={{
                  textShadow: '0 1px 3px rgba(0,0,0,0.9), 0 0 20px rgba(168,85,247,0.8)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.4)',
                  filter: 'brightness(1.5)'
                }}>
            Command Center
          </span>
        </Link>
        <Link href="/calendar" className="relative px-4 py-2 rounded-lg border-2 border-amber-500/40 bg-[#110F0B]/30 hover:border-[rgba(201,168,76,0.45)] hover:shadow-[rgba(201,168,76,0.2)] transition-all group">
          <span className="text-[#C9A84C] bg-[#110F0B]"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            Scheduler
          </span>
        </Link>
        <Link href="/hr" className="relative px-4 py-2 rounded-lg border-2 border-amber-500/40 bg-[#110F0B]/30 hover:border-[rgba(201,168,76,0.45)] hover:shadow-[rgba(201,168,76,0.2)] transition-all group">
          <span className="text-[#C9A84C] bg-[#110F0B]"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            HR
          </span>
        </Link>

        <Link href="/compliance" className="relative px-4 py-2 rounded-lg border-2 border-amber-500/40 bg-[#110F0B]/30 hover:border-[rgba(201,168,76,0.45)] hover:shadow-[rgba(201,168,76,0.2)] transition-all group">
          <span className="text-[#C9A84C] bg-[#110F0B]"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            Compliance
          </span>
        </Link>
        
        {/* Enterprise Dropdown */}
        <div className="relative" onMouseLeave={() => setEnterpriseMenuOpen(false)}>
          <button
            onClick={() => setEnterpriseMenuOpen(!enterpriseMenuOpen)}
            onMouseEnter={() => setEnterpriseMenuOpen(true)}
            className="relative px-4 py-2 rounded-lg border-2 border-amber-500/40 bg-[#110F0B]/30 hover:border-[rgba(201,168,76,0.45)] hover:shadow-[rgba(201,168,76,0.2)] transition-all group flex items-center gap-2"
          >
            <span className="text-[#C9A84C] bg-[#110F0B]"
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                    WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
              Enterprise
            </span>
            <ChevronDown className="w-4 h-4 text-[#E8C060]" />
          </button>
          {enterpriseMenuOpen && (
            <div className="absolute top-full mt-2 right-0 min-w-[200px] bg-[rgba(201,168,76,0.08)] border-2 border-amber-500/40 rounded-lg shadow-[rgba(201,168,76,0.2)] z-50">
              <Link href="/qapi" className="block px-4 py-3 hover:bg-amber-900/40 border-b border-amber-500/20 transition-colors text-center">
                <span className="text-[#C9A84C] bg-[#110F0B]"
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                        WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                        filter: 'brightness(1.4)'
                      }}>
                  QAPI Portal
                </span>
              </Link>
              <Link href="/vault" className="block px-4 py-3 hover:bg-amber-900/40 border-b border-amber-500/20 transition-colors text-center">
                <span className="text-[#C9A84C] bg-[#110F0B]"
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                        WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                        filter: 'brightness(1.4)'
                      }}>
                  Asset Vault
                </span>
              </Link>
              <Link href="/sentinel" className="block px-4 py-3 hover:bg-amber-900/40 border-b border-amber-500/20 transition-colors text-center">
                <span className="text-[#C9A84C] bg-[#110F0B]"
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                        WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                        filter: 'brightness(1.4)'
                      }}>
                  Sentinel Security
                </span>
              </Link>
              <Link href="/oracle" className="block px-4 py-3 hover:bg-amber-900/40 transition-colors text-center">
                <span className="text-[#C9A84C] bg-[#110F0B]"
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                        WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                        filter: 'brightness(1.4)'
                      }}>
                  Oracle AI
                </span>
              </Link>
            </div>
          )}
        </div>
        
        {/* Finance Dropdown */}
        <div className="relative" onMouseLeave={() => setFinanceMenuOpen(false)}>
          <button
            onClick={() => setFinanceMenuOpen(!financeMenuOpen)}
            onMouseEnter={() => setFinanceMenuOpen(true)}
            className="relative px-4 py-2 rounded-lg border-2 border-amber-500/40 bg-[#110F0B]/30 hover:border-[rgba(201,168,76,0.45)] hover:shadow-[rgba(201,168,76,0.2)] transition-all group flex items-center gap-2"
          >
            <span className="text-[#C9A84C] bg-[#110F0B]"
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                    WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
              Finance
            </span>
            <ChevronDown className="w-4 h-4 text-[#E8C060]" />
          </button>
          {financeMenuOpen && (
            <div className="absolute top-full mt-2 right-0 min-w-[200px] bg-[rgba(201,168,76,0.08)] border-2 border-amber-500/40 rounded-lg shadow-[rgba(201,168,76,0.2)] z-50">
              <Link href="/payroll" className="block px-4 py-3 hover:bg-amber-900/40 border-b border-amber-500/20 transition-colors text-center">
                <span className="text-[#C9A84C] bg-[#110F0B]"
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                        WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                        filter: 'brightness(1.4)'
                      }}>
                  Payroll
                </span>
              </Link>
              <Link href="/accounting" className="block px-4 py-3 hover:bg-amber-900/40 transition-colors text-center">
                <span className="text-[#C9A84C] bg-[#110F0B]"
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                        WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                        filter: 'brightness(1.4)'
                      }}>
                  Accounting
                </span>
              </Link>
            </div>
          )}
        </div>
        
        <Link href="/analytics" className="relative px-4 py-2 rounded-lg border-2 border-amber-500/40 bg-[#110F0B]/30 hover:border-[rgba(201,168,76,0.45)] hover:shadow-[rgba(201,168,76,0.2)] transition-all group">
          <span className="text-[#C9A84C] bg-[#110F0B]"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            Analytics
          </span>
        </Link>
        <Link href="/activities" className="relative px-4 py-2 rounded-lg border-2 border-amber-500/40 bg-[#110F0B]/30 hover:border-[rgba(201,168,76,0.45)] hover:shadow-[rgba(201,168,76,0.2)] transition-all group flex items-center gap-2">
          <Gamepad2 className="w-4 h-4 text-[#E8C060]" />
          <span className="text-[#C9A84C] bg-[#110F0B]"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            Activities
          </span>
        </Link>
        <Link href="/guild/admin" className="relative px-4 py-2 rounded-lg border-2 border-amber-500/40 bg-[#110F0B]/30 hover:border-[rgba(201,168,76,0.45)] hover:shadow-[rgba(201,168,76,0.2)] transition-all group flex items-center gap-2">
          <Crown className="w-4 h-4 text-[#E8C060]" />
          <span className="text-[#C9A84C] bg-[#110F0B]"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            Guild Admin
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg border-2 border-amber-500/40 bg-[#110F0B]/30 hover:border-[rgba(201,168,76,0.45)] hover:shadow-[rgba(201,168,76,0.2)] transition-all"
          title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        >
          {theme === 'light' ? <Moon className="w-5 h-5 text-[#E8C060]" /> : <Sun className="w-5 h-5 text-[#C9A84C]" />}
        </button>
        <Link href="/settings" className="relative px-4 py-2 rounded-lg border-2 border-amber-500/40 bg-[#110F0B]/30 hover:border-[rgba(201,168,76,0.45)] hover:shadow-[rgba(201,168,76,0.2)] transition-all group flex items-center gap-2">
          <Settings className="w-4 h-4 text-[#E8C060]" />
          <span className="text-[#C9A84C] bg-[#110F0B]"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            Settings
          </span>
        </Link>
      </div>
      {/* Mobile menu button (optional for future) */}
    </nav>
  );
}

