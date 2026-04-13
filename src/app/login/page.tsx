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

  const gold = '#C9A84C';
  const goldBright = '#E8C060';

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#070604',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 16px',
    fontFamily: "'Inter', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  };

  const ambientStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    pointerEvents: 'none',
    background: `
      radial-gradient(ellipse 70% 50% at 20% 40%, rgba(201,168,76,0.05) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 60%)
    `,
    zIndex: 0,
  };

  const cardStyle: React.CSSProperties = {
    background: '#110F0B',
    border: '1px solid rgba(201,168,76,0.22)',
    borderRadius: '4px',
    padding: '48px 44px',
    width: '100%',
    maxWidth: '440px',
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 60px rgba(201,168,76,0.06), 0 20px 60px rgba(0,0,0,0.8)',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.68rem',
    fontWeight: 500,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#9E8F75',
    marginBottom: '10px',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 14px 13px 42px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(201,168,76,0.18)',
    borderRadius: '2px',
    color: '#F0EBE0',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: "'Inter', sans-serif",
  };

  const ruleStyle: React.CSSProperties = {
    width: '36px',
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
    margin: '24px auto',
  };

  return (
    <div style={pageStyle}>
      <div style={ambientStyle} />

      <div style={{ width: '100%', maxWidth: '440px', position: 'relative', zIndex: 1 }}>
        {/* Brand */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <Link href="/">
            <img
              src="/titanlogo.png"
              alt="NyxTitan"
              style={{
                height: '56px',
                width: 'auto',
                margin: '0 auto 20px',
                display: 'block',
                filter: `drop-shadow(0 0 18px rgba(201,168,76,0.4)) drop-shadow(0 0 40px rgba(201,168,76,0.2))`,
              }}
            />
          </Link>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: '1.6rem',
            letterSpacing: '3px',
            background: `linear-gradient(135deg, #E8E0D0 0%, #FFFFFF 25%, ${goldBright} 55%, ${gold} 75%, #E8E0D0 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '8px',
          }}>
            NyxTitan
          </div>
          <div style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '4px', textTransform: 'uppercase', color: gold }}>
            Business Management. Forged for Titans.
          </div>
        </div>

        {/* Card */}
        <div style={cardStyle}>
          {/* Thin gold top accent */}
          <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }} />

          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ fontSize: '0.68rem', letterSpacing: '4px', textTransform: 'uppercase', color: gold, marginBottom: '10px' }}>Welcome Back</div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: '1.9rem',
              color: '#F0EBE0',
              letterSpacing: '1px',
            }}>Sign in to your account</h1>
            <div style={ruleStyle} />
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {error && (
              <div style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.35)', borderRadius: '2px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertCircle style={{ width: '16px', height: '16px', color: '#f87171', flexShrink: 0 }} />
                <span style={{ fontSize: '0.84rem', color: '#f87171' }}>{error}</span>
              </div>
            )}

            {/* Email */}
            <div>
              <label style={labelStyle}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: '#5A5040' }} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  placeholder="you@example.com"
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.55)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.18)'; }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label style={labelStyle}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: '#5A5040' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ ...inputStyle, paddingRight: '44px' }}
                  placeholder="••••••••"
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.55)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.18)'; }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '13px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#5A5040', padding: 0 }}
                >
                  {showPassword ? <EyeOff style={{ width: '16px', height: '16px' }} /> : <Eye style={{ width: '16px', height: '16px' }} />}
                </button>
              </div>
            </div>

            {/* VIP Code */}
            <div>
              <label style={{ ...labelStyle, color: gold, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Gem style={{ width: '12px', height: '12px' }} /> VIP Code
                <span style={{ color: '#5A5040', fontWeight: 400, letterSpacing: '1px' }}>(optional)</span>
              </label>
              <input
                type="text"
                value={vipCode}
                onChange={(e) => setVipCode(e.target.value)}
                style={{ ...inputStyle, paddingLeft: '14px', borderColor: 'rgba(201,168,76,0.30)' }}
                placeholder="Enter your VIP access code"
                onFocus={(e) => { e.target.style.borderColor = gold; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.30)'; }}
              />
            </div>

            {/* Remember / Forgot */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: gold, width: '14px', height: '14px' }} />
                <span style={{ fontSize: '0.8rem', color: '#5A5040' }}>Remember me</span>
              </label>
              <Link href="/forgot-password" style={{ fontSize: '0.8rem', color: '#9E8F75', textDecoration: 'none' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = goldBright; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#9E8F75'; }}
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '15px',
                background: loading ? '#5A5040' : `linear-gradient(135deg, ${gold} 0%, ${goldBright} 50%, ${gold} 100%)`,
                color: '#07060A',
                border: 'none',
                borderRadius: '2px',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'all 0.3s',
                boxShadow: loading ? 'none' : `0 0 28px rgba(201,168,76,0.25), 0 4px 18px rgba(0,0,0,0.5)`,
                marginTop: '4px',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {loading ? (
                <>
                  <div style={{ width: '16px', height: '16px', border: '2px solid rgba(7,6,4,0.3)', borderTopColor: '#07060A', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                  Signing in…
                </>
              ) : (
                <>
                  <LogIn style={{ width: '16px', height: '16px' }} />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Separator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '28px 0 20px' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.12)' }} />
            <span style={{ fontSize: '0.65rem', color: '#5A5040', letterSpacing: '2px', textTransform: 'uppercase' }}>or</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.12)' }} />
          </div>

          {/* Sign Up */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{ fontSize: '0.84rem', color: '#5A5040' }}>Don&apos;t have an account? </span>
            <Link href="/signup" style={{ fontSize: '0.84rem', color: '#9E8F75', fontWeight: 500, textDecoration: 'none' }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = goldBright; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#9E8F75'; }}
            >
              Create one now
            </Link>
          </div>

          {/* Demo request */}
          <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#5A5040', marginBottom: '6px' }}>Request a Demo</div>
            <a href="mailto:info@nyxtitan.com" style={{ fontSize: '0.84rem', color: gold, textDecoration: 'none' }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = goldBright; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = gold; }}
            >
              info@nyxtitan.com
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: #3a3020; }
      `}</style>
    </div>
  );
}

