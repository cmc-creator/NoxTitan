'use client';

import React, { useState } from "react";
import Link from 'next/link';
import { Check, Zap, Clock, Users, DollarSign, Shield, BarChart3, Award, Database, ArrowLeft } from 'lucide-react';

export default function PricingPage() {
  const [pricingView, setPricingView] = useState<'packages' | 'modules'>('packages');

  return (
    <div style={{ minHeight: '100vh', background: '#070604', color: '#F0EBE0' }}>
      <style>{`
        .pricing-card {
          border: 1px solid rgba(201,168,76,0.22);
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .pricing-card:hover {
          border-color: rgba(201,168,76,0.45);
          box-shadow: 0 0 24px rgba(201,168,76,0.08);
        }
        .pricing-card-featured {
          border: 1px solid rgba(201,168,76,0.55);
          box-shadow: 0 0 32px rgba(201,168,76,0.1);
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .pricing-card-featured:hover {
          border-color: #C9A84C;
          box-shadow: 0 0 40px rgba(201,168,76,0.18);
        }
        .pricing-btn-outline {
          border: 1px solid rgba(201,168,76,0.45);
          color: #C9A84C;
          background: transparent;
          transition: background 0.2s, border-color 0.2s;
        }
        .pricing-btn-outline:hover {
          background: rgba(201,168,76,0.1);
          border-color: #C9A84C;
        }
        .pricing-btn-filled {
          background: rgba(201,168,76,0.15);
          border: 1px solid #C9A84C;
          color: #E8C060;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .pricing-btn-filled:hover {
          background: rgba(201,168,76,0.25);
          box-shadow: 0 0 20px rgba(201,168,76,0.25);
        }
        .toggle-btn-active {
          background: rgba(201,168,76,0.12);
          border: 1px solid #C9A84C;
          color: #E8C060;
        }
        .toggle-btn-inactive {
          background: transparent;
          border: 1px solid rgba(201,168,76,0.12);
          color: #9E8F75;
          transition: all 0.2s;
        }
        .toggle-btn-inactive:hover {
          border-color: rgba(201,168,76,0.35);
          color: #C9A84C;
        }
        .back-link {
          color: #9E8F75;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 4px;
          padding: 8px 16px;
          transition: color 0.2s, border-color 0.2s;
        }
        .back-link:hover {
          color: #C9A84C;
          border-color: rgba(201,168,76,0.35);
        }
        .vip-link {
          color: #C9A84C;
          text-decoration: none;
          border-bottom: 1px solid rgba(201,168,76,0.35);
          transition: border-color 0.2s;
        }
        .vip-link:hover {
          border-color: #C9A84C;
        }
        .faq-item {
          border-bottom: 1px solid rgba(201,168,76,0.1);
          padding-bottom: 28px;
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* Back button */}
        <div style={{ marginBottom: '48px' }}>
          <Link href="/landing" className="back-link">
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ color: '#9E8F75', fontSize: '12px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Investment
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '52px', fontWeight: 600, color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '20px' }}>
            Flexible Pricing
          </h1>
          <p style={{ color: '#9E8F75', fontSize: '15px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Choose a complete package or build your own with individual modules.
            All plans include a 14-day free trial — no credit card required.
          </p>
        </div>

        {/* Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'flex', gap: '6px', background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '4px', padding: '5px' }}>
            <button
              onClick={() => setPricingView('packages')}
              className={pricingView === 'packages' ? 'toggle-btn-active' : 'toggle-btn-inactive'}
              style={{ padding: '10px 28px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.08em' }}
            >
              Complete Packages
            </button>
            <button
              onClick={() => setPricingView('modules')}
              className={pricingView === 'modules' ? 'toggle-btn-active' : 'toggle-btn-inactive'}
              style={{ padding: '10px 28px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.08em' }}
            >
              Build Your Own (Modules)
            </button>
          </div>
        </div>

        {/* Packages View */}
        {pricingView === 'packages' && (
          <div>
            <p style={{ color: '#5A5040', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Small Business
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '52px' }}>

              <div className="pricing-card" style={{ background: '#110F0B', borderRadius: '4px', padding: '32px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, color: '#F0EBE0', marginBottom: '4px' }}>Starter</h3>
                <p style={{ color: '#9E8F75', fontSize: '13px', marginBottom: '24px' }}>Up to 10 employees</p>
                <p style={{ marginBottom: '28px' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 600, color: '#E8C060' }}>$99</span>
                  <span style={{ color: '#5A5040', fontSize: '13px' }}>/month</span>
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Basic scheduling', 'Time & attendance', 'Employee profiles', 'Mobile app access', 'Email support'].map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#9E8F75' }}>
                      <Check size={14} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/signup?tier=PROFESSIONAL" className="pricing-btn-outline" style={{ width: '100%', padding: '12px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.08em', display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                  Start Free Trial
                </Link>
              </div>

              <div className="pricing-card-featured" style={{ background: '#110F0B', borderRadius: '4px', padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, color: '#F0EBE0' }}>Growth</h3>
                  <span style={{ border: '1px solid rgba(201,168,76,0.55)', color: '#C9A84C', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', padding: '4px 10px', borderRadius: '4px' }}>POPULAR</span>
                </div>
                <p style={{ color: '#9E8F75', fontSize: '13px', marginBottom: '24px' }}>Up to 25 employees</p>
                <p style={{ marginBottom: '28px' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 600, color: '#E8C060' }}>$199</span>
                  <span style={{ color: '#5A5040', fontSize: '13px' }}>/month</span>
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Everything in Starter', 'Advanced scheduling', 'Shift swapping', 'Time-off management', 'Payroll integration', 'Priority support'].map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#9E8F75' }}>
                      <Check size={14} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/signup?tier=PROFESSIONAL" className="pricing-btn-filled" style={{ width: '100%', padding: '12px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.08em', display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                  Start Free Trial
                </Link>
              </div>

              <div className="pricing-card" style={{ background: '#110F0B', borderRadius: '4px', padding: '32px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, color: '#F0EBE0', marginBottom: '4px' }}>Plus</h3>
                <p style={{ color: '#9E8F75', fontSize: '13px', marginBottom: '24px' }}>Up to 50 employees</p>
                <p style={{ marginBottom: '28px' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 600, color: '#E8C060' }}>$349</span>
                  <span style={{ color: '#5A5040', fontSize: '13px' }}>/month</span>
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Everything in Growth', 'HR management', 'Compliance tools', 'Analytics dashboard', 'API access', 'Phone support'].map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#9E8F75' }}>
                      <Check size={14} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/signup?tier=PROFESSIONAL" className="pricing-btn-outline" style={{ width: '100%', padding: '12px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.08em', display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                  Start Free Trial
                </Link>
              </div>
            </div>

            <p style={{ color: '#5A5040', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Enterprise
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>

              <div className="pricing-card" style={{ background: '#110F0B', borderRadius: '4px', padding: '32px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, color: '#F0EBE0', marginBottom: '4px' }}>Professional</h3>
                <p style={{ color: '#9E8F75', fontSize: '13px', marginBottom: '24px' }}>Up to 100 employees</p>
                <p style={{ marginBottom: '28px' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 600, color: '#E8C060' }}>$499</span>
                  <span style={{ color: '#5A5040', fontSize: '13px' }}>/month</span>
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Everything in Plus', 'Multi-location support', 'Advanced analytics', 'Custom reports', 'SSO integration', 'Dedicated support'].map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#9E8F75' }}>
                      <Check size={14} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/signup?tier=PROFESSIONAL" className="pricing-btn-outline" style={{ width: '100%', padding: '12px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.08em', display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                  Start Free Trial
                </Link>
              </div>

              <div className="pricing-card-featured" style={{ background: '#110F0B', borderRadius: '4px', padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, color: '#F0EBE0' }}>Enterprise</h3>
                  <span style={{ border: '1px solid rgba(201,168,76,0.55)', color: '#C9A84C', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', padding: '4px 10px', borderRadius: '4px' }}>MOST POPULAR</span>
                </div>
                <p style={{ color: '#9E8F75', fontSize: '13px', marginBottom: '24px' }}>Up to 250 employees</p>
                <p style={{ marginBottom: '28px' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 600, color: '#E8C060' }}>$1,499</span>
                  <span style={{ color: '#5A5040', fontSize: '13px' }}>/month</span>
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Everything in Professional', 'Oracle AI analytics', 'Compliance suite', 'Asset vault', 'Visitor management', 'White-glove onboarding'].map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#9E8F75' }}>
                      <Check size={14} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/signup?tier=ENTERPRISE" className="pricing-btn-filled" style={{ width: '100%', padding: '12px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.08em', display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                  Start Free Trial
                </Link>
              </div>

              <div className="pricing-card" style={{ background: '#110F0B', borderRadius: '4px', padding: '32px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, color: '#F0EBE0', marginBottom: '4px' }}>Titan</h3>
                <p style={{ color: '#9E8F75', fontSize: '13px', marginBottom: '24px' }}>Unlimited employees</p>
                <p style={{ marginBottom: '28px' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 600, color: '#E8C060' }}>$2,999</span>
                  <span style={{ color: '#5A5040', fontSize: '13px' }}>/month</span>
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Everything in Enterprise', 'Custom integrations (3/yr)', 'Dedicated account manager', '24/7 priority support (2hr SLA)', 'Custom development', 'White-labeling options'].map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#9E8F75' }}>
                      <Check size={14} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/signup?tier=TITAN" className="pricing-btn-outline" style={{ width: '100%', padding: '12px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.08em', display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Modules View */}
        {pricingView === 'modules' && (
          <div>
            <p style={{ color: '#5A5040', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Core Modules
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '48px' }}>
              {[
                { icon: Clock, name: 'Scheduling & Calendar', price: '$59', features: ['Drag & drop scheduling', 'Shift templates', 'Availability tracking', 'Conflict detection'] },
                { icon: Users, name: 'Time & Attendance', price: '$49', features: ['Clock in/out tracking', 'Overtime calculation', 'Break management', 'GPS verification'] },
                { icon: Users, name: 'HR Management', price: '$99', features: ['Employee database', 'Onboarding workflows', 'Document management', 'Performance reviews'] },
                { icon: DollarSign, name: 'Payroll & Benefits', price: '$129', features: ['Payroll calculations', 'Tax withholdings', 'Direct deposit', 'Benefits tracking'] },
                { icon: Shield, name: 'Compliance & QAPI', price: '$149', features: ['Incident tracking', 'Quality metrics', 'HIPAA compliance', 'Audit trails'] },
                { icon: BarChart3, name: 'Reports & Analytics', price: '$89', features: ['Custom dashboards', 'Automated reports', 'Export to Excel/PDF', 'KPI tracking'] },
              ].map(({ icon: Icon, name, price, features }) => (
                <div key={name} className="pricing-card" style={{ background: '#110F0B', borderRadius: '4px', padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} style={{ color: '#C9A84C' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#F0EBE0', marginBottom: '2px' }}>{name}</h3>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#E8C060', lineHeight: 1 }}>
                        {price}<span style={{ color: '#5A5040', fontSize: '12px' }}>/mo</span>
                      </p>
                    </div>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#9E8F75' }}>
                        <Check size={12} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="pricing-btn-outline" style={{ width: '100%', padding: '10px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.06em' }}>
                    Add Module
                  </button>
                </div>
              ))}
            </div>

            <p style={{ color: '#5A5040', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Advanced Modules
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '48px' }}>
              {[
                { icon: Zap, name: 'Oracle AI (Predictive)', price: '$199', features: ['Staffing forecasts', 'Turnover predictions', 'Risk analysis', 'Smart recommendations'] },
                { icon: Award, name: 'Guild (Gamification)', price: '$79', features: ['Points & badges', 'Leaderboards', 'Challenges', 'Rewards store'] },
                { icon: Database, name: 'Asset Vault', price: '$99', features: ['Equipment tracking', 'Maintenance scheduling', 'Asset lifecycle', 'QR code scanning'] },
              ].map(({ icon: Icon, name, price, features }) => (
                <div key={name} className="pricing-card" style={{ background: '#110F0B', borderRadius: '4px', padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} style={{ color: '#C9A84C' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#F0EBE0', marginBottom: '2px' }}>{name}</h3>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#E8C060', lineHeight: 1 }}>
                        {price}<span style={{ color: '#5A5040', fontSize: '12px' }}>/mo</span>
                      </p>
                    </div>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#9E8F75' }}>
                        <Check size={12} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="pricing-btn-outline" style={{ width: '100%', padding: '10px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.06em' }}>
                    Add Module
                  </button>
                </div>
              ))}
            </div>

            <div style={{ background: '#110F0B', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '4px', padding: '40px' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 600, color: '#C9A84C', textAlign: 'center', marginBottom: '32px', letterSpacing: '0.1em' }}>
                Popular Bundles
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                {[
                  { name: 'Basic Ops Bundle', price: '$199', save: 'Save $48/mo (20%)', modules: ['Scheduling & Calendar', 'Time & Attendance', 'HR Management'], featured: false },
                  { name: 'Complete HR Bundle', price: '$369', save: 'Save $97/mo (21%)', modules: ['All Basic Ops modules', 'Payroll & Benefits', 'Reports & Analytics'], featured: true },
                  { name: 'Healthcare Pro Bundle', price: '$499', save: 'Save $164/mo (25%)', modules: ['All Complete HR modules', 'Compliance & QAPI', 'Asset Vault'], featured: false },
                ].map(({ name, price, save, modules, featured }) => (
                  <div key={name} className={featured ? 'pricing-card-featured' : 'pricing-card'} style={{ background: 'rgba(201,168,76,0.03)', borderRadius: '4px', padding: '28px' }}>
                    {featured && (
                      <div style={{ marginBottom: '12px' }}>
                        <span style={{ border: '1px solid rgba(201,168,76,0.55)', color: '#C9A84C', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', padding: '3px 10px', borderRadius: '4px' }}>POPULAR</span>
                      </div>
                    )}
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 600, color: '#F0EBE0', marginBottom: '4px' }}>{name}</h4>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontWeight: 600, color: '#E8C060', marginBottom: '4px', lineHeight: 1.1 }}>
                      {price}<span style={{ color: '#5A5040', fontSize: '13px' }}>/mo</span>
                    </p>
                    <p style={{ color: '#C9A84C', fontSize: '12px', marginBottom: '20px' }}>{save}</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {modules.map(m => (
                        <li key={m} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#9E8F75' }}>
                          <Check size={12} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                          {m}
                        </li>
                      ))}
                    </ul>
                    <button className={featured ? 'pricing-btn-filled' : 'pricing-btn-outline'} style={{ width: '100%', padding: '10px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.06em' }}>
                      Select Bundle
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FAQ */}
        <div style={{ background: '#110F0B', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '4px', padding: '48px', marginTop: '64px' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 600, color: '#C9A84C', textAlign: 'center', marginBottom: '40px', letterSpacing: '0.1em' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '680px', margin: '0 auto' }}>
            {[
              { q: 'Do you charge per employee?', a: 'No. Pricing is based on employee count tiers, not per-employee fees — much more predictable and affordable.' },
              { q: 'Can I switch between plans?', a: 'Yes, upgrade or downgrade anytime. Upgrades are prorated for the remainder of the billing month.' },
              { q: 'Can I add modules to a package plan?', a: 'Absolutely. Package plans include core features, and you can add any additional modules a la carte.' },
              { q: 'Is there a free trial?', a: 'All plans include a 14-day free trial. No credit card required to start.' },
              { q: 'What about implementation and training?', a: 'Starter/Growth/Plus include self-service setup. Professional+ includes assisted onboarding. Enterprise/Titan include white-glove implementation.' },
            ].map(({ q, a }) => (
              <div key={q} className="faq-item">
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#F0EBE0', marginBottom: '10px' }}>{q}</h3>
                <p style={{ fontSize: '14px', color: '#9E8F75', lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VIP Access */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <p style={{ color: '#5A5040', fontSize: '13px' }}>
            Have an exclusive access code?{' '}
            <Link href="/login" className="vip-link">
              Log in here
            </Link>
            {' '}for complimentary VIP access.
          </p>
        </div>

        {/* Compare & Save */}
        <div style={{ background: '#110F0B', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '4px', padding: '40px', marginTop: '24px' }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 600, color: '#C9A84C', textAlign: 'center', marginBottom: '32px', letterSpacing: '0.1em' }}>
            Compare & Save
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { label: 'vs. Paycom (100 employees)', value: 'Save $22,000/year' },
              { label: 'vs. ADP Workforce Now', value: 'Save $13,000/year' },
              { label: 'vs. Kronos/UKG', value: 'Save $42,000/year' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p style={{ color: '#5A5040', fontSize: '12px', marginBottom: '10px', letterSpacing: '0.05em' }}>{label}</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 600, color: '#C9A84C' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
