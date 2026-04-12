'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { Mail, Lock, AlertCircle, LogIn, Eye, EyeOff, Gem } from 'lucide-react';
import '../landing/landing-galaxy.css';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vipCode, setVipCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (vipCode === 'RISK424') {
        localStorage.setItem('vip', 'true');
        localStorage.setItem('tier', 'TITAN');
        router.push('/dashboard');
        router.refresh();
        return;
      }
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError('Invalid email or password');
        setLoading(false);
      } else {
        router.push('/dashboard');
        router.refresh();
      }
    } catch {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  const inputClass = "w-full pl-11 pr-4 py-3 bg-black/60 border border-purple-600/40 rounded-xl text-white placeholder-purple-400/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all";

  // Generate 60 twinkling stars matching the landing page
  const stars = Array.from({ length: 60 }).map((_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = (Math.random() * 2.5).toFixed(2);
    return (
      <div key={i} className="star" style={{ top: `${top}%`, left: `${left}%`, animationDelay: `${delay}s` }} />
    );
  });

  return (
    <div className="galaxy-bg min-h-screen flex items-center justify-center p-4">
      {/* Stars */}
      <div style={{ position: 'absolute', width: '100vw', height: '100vh', top: 0, left: 0, zIndex: 2, pointerEvents: 'none' }}>
        {stars}
      </div>

      <div className="max-w-md w-full relative" style={{ zIndex: 10 }}>
        {/* Brand header */}
        <div className="text-center mb-8">
          <Link href="/">
            <img
              src="/nyxtitan-chrome.png"
              alt="NyxTitan"
              className="h-16 w-auto mx-auto mb-3 object-contain"
              style={{ filter: 'drop-shadow(0px 5px 15px rgba(0,0,0,0.9))' }}
            />
          </Link>
          <p className="text-base font-bold uppercase tracking-widest text-center" style={{
            backgroundImage: 'linear-gradient(180deg, #f5f5ff 0%, #d8d8e8 20%, #b0b0d0 40%, #8080a8 47%, #303048 50%, #e0e0f8 52%, #a8a8c8 70%, #606080 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0px -1px 2px rgba(255,255,255,0.5)) drop-shadow(0px 3px 6px rgba(0,0,0,0.7))'
          }}>
            Business Management. Forged for Titans.
          </p>
        </div>

        {/* Card — matches landing feature card style */}
        <div className="bg-gradient-to-br from-purple-900/50 to-black border-2 border-purple-600/40 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-extrabold text-center text-white mb-6">Sign in to your account</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-purple-200 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400/60" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-purple-200 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400/60" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${inputClass} pr-12`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400/60 hover:text-purple-200 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* VIP Code */}
            <div>
              <label className="block text-sm font-semibold text-yellow-300/80 mb-2 flex items-center gap-1.5">
                <Gem className="w-4 h-4" /> VIP Code <span className="text-yellow-500/40 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={vipCode}
                onChange={(e) => setVipCode(e.target.value)}
                className="w-full px-4 py-3 bg-black/60 border border-yellow-600/40 rounded-xl text-yellow-200 placeholder-yellow-600/40 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                placeholder="Enter your VIP access code"
              />
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-purple-600/40 bg-black/60 accent-purple-500" />
                <span className="text-sm text-purple-200/60">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-purple-300 hover:text-purple-100 transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Submit — matches landing page button style */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-br from-purple-900/50 to-black border-2 border-purple-600/40 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] font-bold shadow-lg transition-all text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin" />
                  Signing in…
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-purple-600/20" />
            <span className="text-xs text-purple-400/40 uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-purple-600/20" />
          </div>

          {/* Sign Up */}
          <div className="mt-5 text-center">
            <p className="text-purple-200/60 text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-purple-300 hover:text-purple-100 font-semibold transition-colors">
                Create one now
              </Link>
            </p>
          </div>

          {/* Demo request */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-blue-900/30 to-black border border-blue-600/30">
            <p className="text-xs font-semibold text-blue-300/70 uppercase tracking-wider mb-1">Want a demo?</p>
            <p className="text-xs text-purple-200/50">
              Email us at{' '}
              <a href="mailto:info@nyxtitan.com" className="text-blue-300 hover:text-blue-100 transition-colors">
                info@nyxtitan.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
