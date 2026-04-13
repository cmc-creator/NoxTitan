'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { Mail, Lock, User, AlertCircle, UserPlus, Gem } from 'lucide-react';

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isVIP = searchParams.get('vip') === 'true';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    tier: isVIP ? 'TITAN' : 'PROFESSIONAL',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isVIP) {
      setFormData(prev => ({ ...prev, tier: 'TITAN' }));
    }
  }, [isVIP]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);

    try {
      // Create account
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          tier: formData.tier,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to create account');
        setLoading(false);
        return;
      }

      // Auto login after signup
      const result = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        setError('Account created but login failed. Please try logging in.');
        setLoading(false);
      } else {
        router.push('/dashboard');
        router.refresh();
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  const gold = '#C9A84C';
  const goldBright = '#E8C060';

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 16px',
    fontFamily: "'Inter', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  };

  const galaxyBg: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    pointerEvents: 'none',
    background: `
      radial-gradient(ellipse 70% 50% at 15% 25%, rgba(120,0,255,0.07) 0%, transparent 70%),
      radial-gradient(ellipse 60% 40% at 80% 70%, rgba(201,168,76,0.05) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 60% 20%, rgba(255,255,255,0.03) 0%, transparent 80%)
    `,
    zIndex: 0,
  };

  const cardStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, rgba(20,20,20,0.97) 0%, rgba(5,5,5,0.99) 100%)',
    border: '2px solid rgba(201,168,76,0.35)',
    borderRadius: '16px',
    padding: '44px 40px',
    width: '100%',
    maxWidth: '560px',
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 60px rgba(201,168,76,0.08), 0 20px 60px rgba(0,0,0,0.9)',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.68rem',
    fontWeight: 500,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#9E8F75',
    marginBottom: '8px',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px 12px 40px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: "'Inter', sans-serif",
  };

  const inputStyleNoIcon: React.CSSProperties = {
    ...inputStyle,
    paddingLeft: '14px',
  };

  return (
    <div style={pageStyle}>
      <div style={galaxyBg} />

      <div style={{ width: '100%', maxWidth: '560px', position: 'relative', zIndex: 1 }}>
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <Link href="/">
            <img
              src="/titanlogo.png"
              alt="NyxTitan"
              style={{
                height: '52px',
                width: 'auto',
                margin: '0 auto 16px',
                display: 'block',
                filter: `drop-shadow(0 0 18px rgba(201,168,76,0.4))`,
              }}
            />
          </Link>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: '1.5rem',
            letterSpacing: '3px',
            background: `linear-gradient(135deg, #E8E0D0 0%, #ffffff 25%, ${goldBright} 55%, ${gold} 75%, #E8E0D0 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '6px',
          }}>
            NyxTitan
          </div>
          <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: gold }}>
            Create Your Account
          </div>
        </div>

        {/* Card */}
        <div style={cardStyle}>
          {/* Gold top accent line */}
          <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }} />

          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', color: gold, marginBottom: '8px' }}>
              {isVIP ? '💎 VIP Access Detected' : 'Join the Platform'}
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.7rem', color: '#ffffff', letterSpacing: '1px' }}>
              {isVIP ? 'Titan — All Features Unlocked' : 'Start Your Free Trial'}
            </h1>
            <div style={{ width: '36px', height: '1px', background: `linear-gradient(90deg, transparent, ${gold}, transparent)`, margin: '16px auto 0' }} />
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Error */}
            {error && (
              <div style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.35)', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertCircle style={{ width: '16px', height: '16px', color: '#f87171', flexShrink: 0 }} />
                <span style={{ fontSize: '0.84rem', color: '#f87171' }}>{error}</span>
              </div>
            )}

            {/* Full Name */}
            <div>
              <label style={labelStyle}>Full Name *</label>
              <div style={{ position: 'relative' }}>
                <User style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '15px', height: '15px', color: '#5A5040' }} />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Your full name"
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.55)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email Address *</label>
              <div style={{ position: 'relative' }}>
                <Mail style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '15px', height: '15px', color: '#5A5040' }} />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="you@company.com"
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.55)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }}
                />
              </div>
            </div>

            {/* Plan */}
            <div>
              <label style={labelStyle}>Choose Your Plan *</label>
              {isVIP ? (
                <div style={{ padding: '14px 16px', background: 'linear-gradient(135deg, rgba(234,179,8,0.12) 0%, rgba(180,83,9,0.12) 100%)', border: '2px solid rgba(234,179,8,0.4)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Gem style={{ width: '18px', height: '18px', color: goldBright }} />
                    <span style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1rem' }}>VIP Access — TITAN Plan</span>
                  </div>
                  <p style={{ color: '#fde68a', fontSize: '0.82rem', marginTop: '4px' }}>Complimentary access · All features unlocked</p>
                </div>
              ) : (
                <select
                  name="tier"
                  value={formData.tier}
                  onChange={handleChange}
                  style={{ ...inputStyleNoIcon, cursor: 'pointer' }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.55)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }}
                >
                  <option value="PROFESSIONAL" style={{ background: '#111' }}>Professional — $499/mo — Up to 50 employees</option>
                  <option value="ENTERPRISE" style={{ background: '#111' }}>Enterprise — $1,499/mo — Up to 250 employees + AI</option>
                  <option value="TITAN" style={{ background: '#111' }}>Titan — $2,999/mo — Unlimited employees, white-glove</option>
                </select>
              )}
            </div>

            {/* Passwords */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Password *</label>
                <div style={{ position: 'relative' }}>
                  <Lock style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '15px', height: '15px', color: '#5A5040' }} />
                  <input
                    type="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="••••••••"
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.55)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Confirm *</label>
                <div style={{ position: 'relative' }}>
                  <Lock style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '15px', height: '15px', color: '#5A5040' }} />
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="••••••••"
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.55)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }}
                  />
                </div>
              </div>
            </div>

            {/* Terms */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <input
                type="checkbox"
                required
                style={{ accentColor: gold, width: '14px', height: '14px', marginTop: '2px', flexShrink: 0 }}
              />
              <span style={{ fontSize: '0.82rem', color: '#9E8F75' }}>
                I agree to the{' '}
                <Link href="/terms" style={{ color: gold, textDecoration: 'none' }}>Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" style={{ color: gold, textDecoration: 'none' }}>Privacy Policy</Link>
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '15px',
                background: loading ? '#3a3020' : `linear-gradient(135deg, ${gold} 0%, ${goldBright} 50%, ${gold} 100%)`,
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'all 0.3s',
                boxShadow: loading ? 'none' : `0 0 28px rgba(201,168,76,0.3), 0 4px 18px rgba(0,0,0,0.5)`,
                marginTop: '4px',
              }}
            >
              {loading ? (
                <>
                  <div style={{ width: '16px', height: '16px', border: '2px solid rgba(201,168,76,0.3)', borderTopColor: gold, borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                  Creating Account…
                </>
              ) : (
                <>
                  <UserPlus style={{ width: '16px', height: '16px' }} />
                  Create Account
                </>
              )}
            </button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '24px 0 20px' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.12)' }} />
            <span style={{ fontSize: '0.65rem', color: '#5A5040', letterSpacing: '2px', textTransform: 'uppercase' }}>already a member?</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.12)' }} />
          </div>

          <Link
            href="/login"
            style={{
              display: 'block',
              width: '100%',
              padding: '13px',
              background: 'transparent',
              color: gold,
              border: `1px solid rgba(201,168,76,0.3)`,
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textAlign: 'center',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            Sign In Instead
          </Link>

          <p style={{ textAlign: 'center', fontSize: '0.7rem', color: '#3a3020', marginTop: '20px', letterSpacing: '0.5px' }}>
            by Connie Michelle Consulting & Business Solutions LLC
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#C9A84C' }}>Loading…</div>
      </div>
    }>
      <SignupForm />
    </Suspense>
  );
}



