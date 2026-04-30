'use client';

import React from "react";
import Link from 'next/link';
import { Gem, Lock, Crown, Gamepad2, Sparkles, Vault, Shield, Tent, ClipboardList, PenLine, GraduationCap, Trophy, Bot, ShoppingBag, Lightbulb, TrendingUp } from 'lucide-react';

const G = '#C9A84C';
const GB = '#E8C060';
const GBORDER = 'rgba(201,168,76,0.22)';
const GBORDER_H = 'rgba(201,168,76,0.45)';
const BGMAIN = '#070604';
const BGCARD = '#110F0B';
const TEXTPRIMARY = '#F0EBE0';
const TEXTDIM = '#9E8F75';

const navLinkStyle: React.CSSProperties = {
  padding: '10px 22px',
  borderRadius: '4px',
  border: `1px solid ${GBORDER}`,
  color: G,
  fontWeight: 600,
  fontSize: '13px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  background: 'transparent',
  transition: 'border-color 0.2s, color 0.2s',
  textDecoration: 'none',
};

const goldBtnStyle: React.CSSProperties = {
  padding: '13px 32px',
  borderRadius: '4px',
  border: `1px solid ${G}`,
  background: `linear-gradient(135deg, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.06) 100%)`,
  color: GB,
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: '15px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  cursor: 'pointer',
  transition: 'all 0.2s',
  textDecoration: 'none',
  display: 'inline-block',
};

const outlineBtnStyle: React.CSSProperties = {
  padding: '13px 32px',
  borderRadius: '4px',
  border: `1px solid ${GBORDER}`,
  background: 'transparent',
  color: TEXTPRIMARY,
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: '15px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  cursor: 'pointer',
  transition: 'all 0.2s',
  textDecoration: 'none',
  display: 'inline-block',
};

const cardStyle: React.CSSProperties = {
  background: BGCARD,
  border: `1px solid ${GBORDER}`,
  borderRadius: '4px',
  padding: '28px 24px',
  transition: 'border-color 0.2s',
};

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', background: BGMAIN, color: TEXTPRIMARY }}>
      {/* Top Bar */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', borderBottom: `1px solid ${GBORDER}` }}>
        <Link href="/signup?vip=true" style={goldBtnStyle}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Gem size={14} /> VIP Access</span>
        </Link>
        <Link href="/login" style={outlineBtnStyle}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Lock size={14} /> Login</span>
        </Link>
      </div>

      {/* Hero */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '72px 32px 48px', textAlign: 'center' }}>
        <img
          src="/titanlogo.png"
          alt="NyxTitan"
          style={{ height: '80px', width: 'auto', objectFit: 'contain', marginBottom: '24px', filter: 'drop-shadow(0 4px 20px rgba(201,168,76,0.35))' }}
        />
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(42px, 7vw, 82px)', fontWeight: 700, letterSpacing: '0.35em', color: G, margin: '0 0 16px', lineHeight: 1.1 }}>
          NYXTITAN
        </h1>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(16px, 2.5vw, 22px)', letterSpacing: '0.2em', color: TEXTDIM, marginBottom: '8px', fontStyle: 'italic' }}>
          Business Management. Forged for Titans.
        </p>
        <p style={{ fontSize: '15px', color: TEXTDIM, maxWidth: '560px', lineHeight: 1.7, marginBottom: '40px' }}>
          Manage employees, payroll, scheduling, compliance, and operations from a single powerful platform. Replace 8+ expensive systems with one.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          <Link href="/signup" style={goldBtnStyle}>Start Free Trial</Link>
          <Link href="#contact" style={outlineBtnStyle}>Request Demo</Link>
          <Link href="/pricing" style={{ ...outlineBtnStyle, color: TEXTDIM, borderColor: 'rgba(201,168,76,0.12)' }}>View Pricing</Link>
        </div>
      </div>

      {/* Sticky Navigation */}
      <nav style={{ width: '100%', position: 'sticky', top: 0, zIndex: 50, background: BGMAIN, borderBottom: `1px solid ${GBORDER}`, borderTop: `1px solid ${GBORDER}` }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '8px', padding: '12px 16px' }}>
          {[['#features', 'Features'], ['#comparison', 'Comparison'], ['#demo-section', 'Demo'], ['#contact', 'Contact']].map(([href, label]) => (
            <a key={href} href={href} style={navLinkStyle}
              onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = GBORDER_H; (e.target as HTMLElement).style.color = GB; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = GBORDER; (e.target as HTMLElement).style.color = G; }}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Demo Section */}
      <section id="demo-section" style={{ width: '100%', padding: '72px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: TEXTPRIMARY, letterSpacing: '0.06em', marginBottom: '12px', textAlign: 'center' }}>
            See NyxTitan In Action
          </h2>
          <p style={{ color: TEXTDIM, fontSize: '15px', maxWidth: '580px', textAlign: 'center', marginBottom: '36px', lineHeight: 1.7 }}>
            Explore our interactive walkthrough — scheduling, payroll, compliance, and more in one platform.
          </p>
          <div style={{ width: '100%', border: `1px solid ${GBORDER}`, borderRadius: '4px', overflow: 'hidden', boxShadow: `0 0 48px rgba(201,168,76,0.08)` }}>
            <iframe
              src="https://cmc-creator.github.io/NyxTitan/"
              title="NyxTitan Interactive Walkthrough"
              allowFullScreen
              style={{ width: '100%', minHeight: '92vh', background: '#000', display: 'block', border: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ width: '100%', padding: '80px 24px', borderTop: `1px solid ${GBORDER}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: TEXTPRIMARY, letterSpacing: '0.06em', textAlign: 'center', marginBottom: '12px' }}>
            Features No One Else Has
          </h2>
          <p style={{ color: TEXTDIM, fontSize: '15px', textAlign: 'center', marginBottom: '56px', lineHeight: 1.7 }}>
            NyxTitan isn&apos;t just another business tool — it&apos;s a complete ecosystem built for modern teams.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px', marginBottom: '48px' }}>
            {[
              { icon: <Crown size={28} color={G} />, title: 'Guild Gamification System', desc: 'XP, levels, achievements, and rewards turn work into an engaging RPG experience. 7-tier progression from Novice to Grandmaster.', tags: 'Level progression · XP rewards · Achievement badges · Reward shop' },
              { icon: <Gamepad2 size={28} color={G} />, title: '30+ Team Engagement Activities', desc: 'Ice breakers, coffee roulette, trivia nights, manager mixers, and daily challenges keep teams connected and engaged.', tags: 'Ice breakers · Team bonding · Manager engagement · Competitions' },
              { icon: <Sparkles size={28} color={G} />, title: 'Oracle Predictive AI', desc: 'Machine learning forecasts staffing needs, predicts turnover, and optimizes schedules before issues arise.', tags: 'Turnover prediction · Staffing optimization · Trend analysis' },
              { icon: <Vault size={28} color={G} />, title: 'Asset Vault', desc: 'Track equipment, vehicles, supplies, and inventory with full lifecycle management, maintenance tracking, and depreciation.', tags: 'Equipment tracking · Maintenance logs · Depreciation calc' },
              { icon: <Shield size={28} color={G} />, title: 'Sentinel Visitor Management', desc: 'Complete visitor tracking, badge printing, access control, and security protocols integrated with your facility management.', tags: 'Check-in/out · Badge printing · Security alerts · Access logs' },
              { icon: <Tent size={28} color={G} />, title: 'Basecamp Personal Portals', desc: 'Every employee gets a personalized dashboard with their schedule, goals, recognition, and team connections all in one place.', tags: 'Personal dashboard · Goal tracking · Recognition feed' },
              { icon: <ClipboardList size={28} color={G} />, title: 'Compliance Suite', desc: 'Automated OSHA, CMS, and Joint Commission compliance tracking with audit trails, certifications, and regulatory reporting.', tags: 'OSHA tracking · CMS compliance · Audit trails · Certifications' },
              { icon: <PenLine size={28} color={G} />, title: 'Digital Treasury & Signatures', desc: 'Secure document signing, approval workflows, and treasury management with full audit trails and compliance.', tags: 'E-signatures · Approval workflows · Document vault' },
              { icon: <GraduationCap size={28} color={G} />, title: 'Learning Management System', desc: 'Built-in training courses, certification tracking, skill development paths, and automated compliance training.', tags: 'Training courses · Certifications · Skill tracking · Quizzes' },
              { icon: <Trophy size={28} color={G} />, title: 'Recognition & Rewards', desc: 'Public recognition feed, badges, awards, points system, and peer-to-peer appreciation that actually improves retention.', tags: 'Public recognition · Badge system · Points rewards · Analytics' },
              { icon: <Bot size={28} color={G} />, title: 'Nox & Titan AI Assistants', desc: 'Dual AI assistants with text and voice capabilities help with scheduling, HR questions, payroll, and more — 24/7.', tags: 'Chat assistant · Voice commands · Contextual help · 24/7 availability' },
              { icon: <ShoppingBag size={28} color={G} />, title: 'Integrated Merch Store', desc: 'Employees can redeem points for branded merchandise, creating a tangible rewards program that builds team culture.', tags: 'Point redemption · Branded merch · Fulfillment tracking' },
            ].map((f, i) => (
              <div key={i} style={cardStyle}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = GBORDER_H}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = GBORDER}>
                <div style={{ marginBottom: '14px' }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 700, color: TEXTPRIMARY, marginBottom: '10px', letterSpacing: '0.02em' }}>{f.title}</h3>
                <p style={{ color: TEXTDIM, fontSize: '14px', lineHeight: 1.7, marginBottom: '12px' }}>{f.desc}</p>
                <p style={{ color: G, fontSize: '12px', letterSpacing: '0.04em' }}>{f.tags}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/signup" style={goldBtnStyle}>Start Your Free Trial →</Link>
            <p style={{ color: TEXTDIM, marginTop: '16px', fontSize: '13px', letterSpacing: '0.05em' }}>No credit card required · 14-day trial · Full access</p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ width: '100%', borderTop: `1px solid ${GBORDER}`, padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', letterSpacing: '0.2em', color: TEXTDIM, marginBottom: '24px', textTransform: 'uppercase' }}>
          Trusted by industry leaders scaling beyond limits
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
          {['Enterprise Corp', 'Global Tech Inc.', 'Titan Industries', 'Innovate Now'].map(name => (
            <div key={name} style={{ background: BGCARD, border: `1px solid ${GBORDER}`, borderRadius: '4px', padding: '10px 24px', color: TEXTDIM, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" style={{ width: '100%', padding: '80px 24px', borderTop: `1px solid ${GBORDER}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: TEXTPRIMARY, textAlign: 'center', marginBottom: '12px', letterSpacing: '0.04em' }}>
            Stop Bleeding Money on Multiple Subscriptions
          </h2>
          <p style={{ color: TEXTDIM, fontSize: '15px', textAlign: 'center', marginBottom: '8px', lineHeight: 1.7 }}>
            Replace 8+ expensive systems with one platform. Save $50K–$200K+ annually.
          </p>
          <p style={{ color: TEXTDIM, fontSize: '13px', textAlign: 'center', marginBottom: '48px', fontStyle: 'italic' }}>
            Based on 100 employees — your savings scale with team size.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: BGCARD, border: `1px solid ${GBORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${GBORDER}` }}>
                  {['What You Need', 'Industry Standard', 'Annual Cost', 'NyxTitan'].map(h => (
                    <th key={h} style={{ padding: '16px 20px', textAlign: 'left', fontFamily: "'Cormorant Garamond', serif", fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: G, borderBottom: `1px solid ${GBORDER}` }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['HR & Payroll Processing', 'Paycom or ADP Workforce Now · $25–40/ee/mo', '$30K–$48K'],
                  ['Time & Attendance', 'Kronos/UKG or Deputy · $5–8/ee/mo', '$6K–$9.6K'],
                  ['Employee Scheduling', 'When I Work or Deputy · $2–4/ee/mo', '$2.4K–$4.8K'],
                  ['Performance Management', 'Lattice or 15Five · $8–11/ee/mo', '$9.6K–$13.2K'],
                  ['Applicant Tracking', 'Greenhouse or Lever · $6K–15K base', '$12K–$25K'],
                  ['Learning Management', 'Cornerstone or Docebo · $5–10/ee/mo', '$6K–$12K'],
                  ['Project Management', 'Asana or Monday.com · $10–25/user/mo', '$12K–$30K'],
                  ['Team Communication', 'Slack Business+ · $12.50/user/mo', '$15K'],
                ].map(([what, std, cost], i) => (
                  <tr key={i} style={{ borderBottom: `1px solid rgba(201,168,76,0.10)` }}>
                    <td style={{ padding: '14px 20px', color: TEXTPRIMARY, fontSize: '14px', fontWeight: 500 }}>{what}</td>
                    <td style={{ padding: '14px 20px', color: TEXTDIM, fontSize: '13px' }}>{std}</td>
                    <td style={{ padding: '14px 20px', color: '#bf6b6b', fontSize: '14px', fontWeight: 600 }}>{cost}</td>
                    <td style={{ padding: '14px 20px', color: G, fontSize: '15px', fontWeight: 700 }}>✓ Included</td>
                  </tr>
                ))}
                <tr style={{ background: 'rgba(201,168,76,0.06)', borderTop: `1px solid ${GBORDER}` }}>
                  <td colSpan={2} style={{ padding: '18px 20px', color: TEXTPRIMARY, fontWeight: 700, fontSize: '15px', letterSpacing: '0.06em' }}>TOTAL COST FOR ALL TOOLS</td>
                  <td style={{ padding: '18px 20px', color: '#bf6b6b', fontWeight: 800, fontSize: '18px' }}>$93K–$157K/yr</td>
                  <td style={{ padding: '18px 20px', color: G, fontWeight: 800, fontSize: '18px' }}>$17,988/yr</td>
                </tr>
                <tr style={{ background: 'rgba(201,168,76,0.12)', borderTop: `1px solid ${GBORDER}` }}>
                  <td colSpan={2} style={{ padding: '18px 20px', color: GB, fontWeight: 800, fontSize: '16px', letterSpacing: '0.08em', fontFamily: "'Cormorant Garamond', serif" }}>YOUR ANNUAL SAVINGS</td>
                  <td colSpan={2} style={{ padding: '18px 20px', color: GB, fontWeight: 900, fontSize: '24px', fontFamily: "'Cormorant Garamond', serif" }}>$75K–$139K+ SAVED</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '32px', background: BGCARD, border: `1px solid ${GBORDER}`, borderRadius: '4px', padding: '28px 32px', maxWidth: '860px', margin: '32px auto 0' }}>
            <p style={{ color: TEXTPRIMARY, fontSize: '15px', fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Lightbulb size={18} color={G} /> Not Included in Savings Calculation:
            </p>
            <ul style={{ color: TEXTDIM, fontSize: '14px', lineHeight: 1.9, paddingLeft: '24px', marginBottom: '20px' }}>
              <li>Reduced admin time (40% savings = $78K+/year for 2 FTE managers)</li>
              <li>Eliminated context-switching costs (15 hrs/week recovered per employee)</li>
              <li>Lower turnover from Guild gamification (35% reduction = $480K saved)</li>
              <li>No integration fees or IT overhead for managing 8+ systems</li>
            </ul>
            <p style={{ color: G, fontWeight: 700, fontSize: '18px', fontFamily: "'Cormorant Garamond', serif", display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} /> Real Total Savings: $600K+ in Year 1
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="roi" style={{ width: '100%', padding: '80px 24px', borderTop: `1px solid ${GBORDER}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: TEXTPRIMARY, textAlign: 'center', marginBottom: '56px', letterSpacing: '0.06em' }}>
            By The Numbers
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { figure: '$75K–$139K', label: 'Annual Subscription Savings', sub: 'Replace 8+ tools with one platform' },
              { figure: '$480K', label: 'Turnover Cost Savings', sub: '35% reduction in employee churn (100 employees)' },
              { figure: '3 Weeks', label: 'Platform Pays for Itself', sub: 'Fastest ROI in the industry' },
            ].map((s, i) => (
              <div key={i} style={{ ...cardStyle, textAlign: 'center', padding: '40px 28px' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = GBORDER_H}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = GBORDER}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: G, marginBottom: '10px', lineHeight: 1 }}>{s.figure}</div>
                <div style={{ color: TEXTPRIMARY, fontWeight: 600, fontSize: '16px', marginBottom: '6px' }}>{s.label}</div>
                <div style={{ color: TEXTDIM, fontSize: '13px' }}>{s.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <p style={{ color: TEXTPRIMARY, fontSize: '20px', fontWeight: 700, fontFamily: "'Cormorant Garamond', serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '8px' }}>
              <TrendingUp size={22} color={G} /> Total Year 1 Impact
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, color: G, letterSpacing: '0.04em' }}>$600K+ Saved</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ width: '100%', padding: '80px 24px', borderTop: `1px solid ${GBORDER}` }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: TEXTPRIMARY, textAlign: 'center', marginBottom: '56px', letterSpacing: '0.06em' }}>
            Hear from the Titans.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px', width: '100%' }}>
            {[
              { stars: '★★★★★', quote: '"Migrating to NyxTitan was the single most impactful operational decision we\'ve made in a decade. The speed and clarity we now have is unmatched."', name: 'Sarah Chen', title: 'CTO, Apex Dynamics' },
              { stars: '★★★★★', quote: '"We eliminated 12 different SaaS subscriptions and gained exponentially more control. NyxTitan isn\'t just software; it\'s a competitive advantage."', name: 'Marcus Thorne', title: 'CEO, OmniCorp Global' },
            ].map((t, i) => (
              <div key={i} style={{ ...cardStyle, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '36px 28px', textAlign: 'center' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = GBORDER_H}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = GBORDER}>
                <div style={{ color: G, fontSize: '20px', marginBottom: '16px', letterSpacing: '4px' }}>{t.stars}</div>
                <p style={{ color: TEXTPRIMARY, fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', fontStyle: 'italic' }}>{t.quote}</p>
                <div style={{ borderTop: `1px solid ${GBORDER}`, paddingTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: TEXTPRIMARY, fontWeight: 700, fontSize: '15px', fontFamily: "'Cormorant Garamond', serif" }}>{t.name}</span>
                  <span style={{ color: G, fontSize: '13px', letterSpacing: '0.08em' }}>{t.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" style={{ width: '100%', padding: '80px 24px', borderTop: `1px solid ${GBORDER}` }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: TEXTPRIMARY, letterSpacing: '0.04em', marginBottom: '12px' }}>
              Ready to Simplify Your Operations?
            </h2>
            <p style={{ color: TEXTDIM, fontSize: '15px', lineHeight: 1.7 }}>
              Tell us about your business and we&apos;ll show you exactly how NyxTitan can help.{' '}
              <a href="mailto:info@nyxtitan.com" style={{ color: G, textDecoration: 'none' }}>info@nyxtitan.com</a>
            </p>
          </div>

          <form style={{ background: BGCARD, border: `1px solid ${GBORDER}`, borderRadius: '4px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}
            action="mailto:info@nyxtitan.com" method="post" encType="text/plain">

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', color: TEXTDIM, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>Full Name</label>
                <input type="text" name="name" required
                  style={{ width: '100%', padding: '12px 16px', background: BGMAIN, border: `1px solid ${GBORDER}`, borderRadius: '4px', color: TEXTPRIMARY, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: TEXTDIM, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>Work Email</label>
                <input type="email" name="email" required
                  style={{ width: '100%', padding: '12px 16px', background: BGMAIN, border: `1px solid ${GBORDER}`, borderRadius: '4px', color: TEXTPRIMARY, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', color: TEXTDIM, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>How Many Employees?</label>
              <select name="company-size"
                style={{ width: '100%', padding: '12px 16px', background: BGMAIN, border: `1px solid ${GBORDER}`, borderRadius: '4px', color: TEXTPRIMARY, fontSize: '14px', outline: 'none' }}>
                <option value="">Select Size</option>
                <option value="1-50">1–50 Employees</option>
                <option value="51-200">51–200 Employees</option>
                <option value="201-500">201–500 Employees</option>
                <option value="500+">500+ Employees</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', color: TEXTDIM, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>Challenges You&apos;re Facing (Optional)</label>
              <textarea name="pain-points" rows={4} placeholder="Scheduling conflicts, payroll errors, compliance issues..."
                style={{ width: '100%', padding: '12px 16px', background: BGMAIN, border: `1px solid ${GBORDER}`, borderRadius: '4px', color: TEXTPRIMARY, fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
            </div>

            <button type="submit" style={{ ...goldBtnStyle, width: '100%', textAlign: 'center', fontSize: '14px', padding: '16px' }}>
              Get Started — Request Demo
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ width: '100%', borderTop: `1px solid ${GBORDER}`, padding: '56px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: TEXTPRIMARY, textAlign: 'center', letterSpacing: '0.04em' }}>
          Stop juggling software.<br />Start running your business.
        </h2>
        <Link href="#contact" style={goldBtnStyle}>Request Executive Demo</Link>
        <p style={{ color: TEXTDIM, fontSize: '13px', textAlign: 'center' }}>
          &copy; 2024 NyxTitan™. A solution provided by Connie Michelle Consulting &amp; Business Solutions LLC. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link href="/privacy" style={{ color: G, fontSize: '13px', textDecoration: 'none' }}>Privacy Policy</Link>
          <span style={{ color: TEXTDIM }}>|</span>
          <Link href="/terms" style={{ color: G, fontSize: '13px', textDecoration: 'none' }}>Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}


