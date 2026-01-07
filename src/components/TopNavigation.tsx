"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export default function TopNavigation() {
  const { isAuthenticated } = useAuth();
  
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-gradient-to-r from-black via-purple-950 to-black backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-purple-500/30">
      <div className="flex items-center gap-3">
        {/* Logo and placeholder removed as requested */}
        <Link href="/" className="flex items-center gap-2 text-4xl md:text-5xl font-black text-white tracking-tight text-pop-strong">
          <span className="relative inline-block transform hover:scale-105 transition-transform duration-300">
            {/* Base metallic text with lighter purple-tinted chrome */}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-400 via-purple-300 to-purple-600"
                  style={{
                    textShadow: `
                      0 1px 0 rgba(255,255,255,0.6),
                      0 2px 0 rgba(220,220,255,0.5),
                      0 3px 0 rgba(168,85,247,0.4),
                      0 4px 0 rgba(139,92,246,0.3),
                      0 5px 0 rgba(88,28,135,0.2),
                      0 8px 6px rgba(0,0,0,0.4),
                      0 12px 15px rgba(168,85,247,0.7),
                      0 0 30px rgba(168,85,247,0.6)
                    `,
                    WebkitTextStroke: '1px rgba(168,85,247,0.4)',
                    filter: 'brightness(1.5) contrast(1.3)'
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
        <Link href="/payroll" className="relative px-4 py-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all group">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            Payroll
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
        <Link href="/accounting" className="relative px-4 py-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all group">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            Accounting
          </span>
        </Link>
        <Link href="/ledger" className="relative px-4 py-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-b from-purple-900/30 via-black/50 to-purple-900/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all group">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-slate-300 to-purple-400"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 15px rgba(168,85,247,0.6)',
                  WebkitTextStroke: '0.5px rgba(168,85,247,0.3)',
                  filter: 'brightness(1.4)'
                }}>
            General Ledger
          </span>
        </Link>
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
      </div>
      <div className="flex items-center gap-2">
        {/* Marketing buttons removed - only shown on landing page */}
      </div>
      {/* Mobile menu button (optional for future) */}
    </nav>
  );
}
