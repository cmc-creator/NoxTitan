'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { Mail, Lock, AlertCircle, LogIn, Eye, EyeOff, Gem } from 'lucide-react';

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

  const inputClass = "w-full pl-11 pr-4 py-3 bg-black/40 border border-amber-500/30 rounded-lg text-white placeholder-amber-900/60 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all";

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, #3b0764 0%, #0a0a0f 60%)' }}>

      {/* Ambient glow orbs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-700/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[400px] h-[200px] bg-amber-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        {/* Brand header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-amber-400"
              style={{
                textShadow: '0 0 40px rgba(168,85,247,0.6)',
                filter: 'brightness(1.4)',
                WebkitTextStroke: '0.5px rgba(200,200,255,0.3)',
              }}>
              NyxTitan
            </span>
          </Link>
          <p className="text-amber-300/80 font-semibold tracking-widest text-xs uppercase">
            Business Management. Forged for Titans.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-8 border border-amber-500/20 shadow-[0_0_60px_rgba(168,85,247,0.15)]"
          style={{ background: 'linear-gradient(135deg, rgba(20,10,40,0.95) 0%, rgba(5,5,15,0.98) 100%)' }}>

          <h2 className="text-xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-slate-300 to-yellow-400">
            Sign in to your account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-amber-300/70 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
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
              <label className="block text-xs font-semibold text-amber-300/70 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-500/50 hover:text-amber-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* VIP Code */}
            <div>
              <label className="block text-xs font-semibold text-amber-400/80 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Gem className="w-3.5 h-3.5" /> VIP Code <span className="text-amber-600/60 normal-case tracking-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={vipCode}
                onChange={(e) => setVipCode(e.target.value)}
                className="w-full px-4 py-3 bg-black/40 border border-amber-400/40 rounded-lg text-amber-200 placeholder-amber-700/50 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/25 transition-all"
                placeholder="Enter your VIP access code"
              />
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-amber-500/30 bg-black/40 accent-amber-400"
                />
                <span className="text-sm text-amber-200/50 group-hover:text-amber-200/70 transition-colors">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-amber-400/70 hover:text-amber-300 transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full relative px-6 py-3.5 rounded-lg border-2 border-amber-400 bg-gradient-to-b from-amber-800/50 via-purple-900/60 to-black/70 hover:border-amber-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              style={{ boxShadow: '0 0 20px rgba(168,85,247,0.4), inset 0 1px 0 rgba(255,255,255,0.1)' }}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-amber-400/30 border-t-amber-400 rounded-full animate-spin" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-yellow-300">Signing in…</span>
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5 text-amber-300" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-slate-200 to-yellow-300"
                    style={{ filter: 'brightness(1.4)' }}>
                    Sign In
                  </span>
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-amber-500/10" />
            <span className="text-xs text-amber-500/30 uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-amber-500/10" />
          </div>

          {/* Sign Up */}
          <div className="mt-5 text-center">
            <p className="text-amber-200/40 text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                Create one now
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 rounded-lg border border-amber-500/10 bg-amber-950/10">
            <p className="text-xs font-semibold text-amber-400/50 uppercase tracking-wider mb-2">Demo Access</p>
            <p className="text-xs text-amber-200/30 font-mono">
              demo@nyxtitan.com&nbsp;&nbsp;/&nbsp;&nbsp;demo123456
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
