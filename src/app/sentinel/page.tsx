'use client';

import { useState, useEffect } from 'react';
import { Shield, UserCheck, Clock, AlertTriangle, Bell, TrendingUp, Users, Upload, Eye, Lock, Camera, Activity } from 'lucide-react';
import FeatureGate from '@/components/FeatureGate';

const STAT_CARDS = [
  { key: 'currentlyInBuilding', label: 'In Building Now',    icon: Users,         accent: true  },
  { key: 'todayTotal',          label: "Today's Visitors",   icon: TrendingUp,    accent: false },
  { key: 'overdue',             label: 'Overdue Checkout',   icon: Clock,         accent: false },
  { key: 'watchlistAlerts',     label: 'Watchlist Alerts',   icon: AlertTriangle, accent: false },
  { key: 'avgDuration',         label: 'Avg Duration (min)', icon: Activity,      accent: false },
];

interface VisitorStats {
  currentlyInBuilding: number;
  todayTotal: number;
  overdue: number;
  watchlistAlerts: number;
  avgDuration: number;
}

interface ActiveVisitor {
  id: string;
  visitor: {
    firstName: string;
    lastName: string;
    company?: string;
    isWatchlist: boolean;
  };
  hostName?: string;
  purpose: string;
  checkInTime: string;
  building?: string;
  badgeNumber?: string;
  status: string;
}

function SentinelPage() {
  const [stats, setStats] = useState<VisitorStats>({
    currentlyInBuilding: 0,
    todayTotal: 0,
    overdue: 0,
    watchlistAlerts: 0,
    avgDuration: 0,
  });
  const [activeVisitors, setActiveVisitors] = useState<ActiveVisitor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    fetchActiveVisitors();
    const interval = setInterval(() => {
      fetchStats();
      fetchActiveVisitors();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  async function fetchStats() {
    try {
      const response = await fetch('/api/visitors/stats');
      if (response.ok) setStats(await response.json());
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  }

  async function fetchActiveVisitors() {
    try {
      const response = await fetch('/api/visitors/active');
      if (response.ok) setActiveVisitors(await response.json());
    } catch (error) {
      console.error('Failed to fetch active visitors:', error);
    } finally {
      setLoading(false);
    }
  }

  function getTimeInBuilding(checkInTime: string) {
    const diff = Date.now() - new Date(checkInTime).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 60) return `${minutes}m`;
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
  }

  return (
    <div className="min-h-screen p-8" style={{ background: '#070604' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div style={{ width: 44, height: 44, background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.28)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield style={{ width: 22, height: 22, color: '#C9A84C' }} />
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', fontWeight: 700, color: '#C9A84C', letterSpacing: '0.02em' }}>
                Sentinel
              </h1>
            </div>
            <p style={{ color: '#9E8F75', fontSize: '0.9rem', marginLeft: '56px' }}>Visitor command center — real-time security &amp; access management</p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <button
              onClick={() => window.location.href = '/sentinel/security'}
              style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '4px', color: '#C9A84C', padding: '9px 18px', fontSize: '0.84rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '7px' }}
            >
              <Camera style={{ width: 15, height: 15 }} />
              Security
            </button>
            <button
              onClick={() => window.location.href = '/sentinel/watchlist'}
              style={{ background: 'rgba(160,40,40,0.08)', border: '1px solid rgba(120,32,32,0.35)', borderRadius: '4px', color: 'rgba(195,95,95,0.9)', padding: '9px 18px', fontSize: '0.84rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '7px' }}
            >
              <AlertTriangle style={{ width: 15, height: 15 }} />
              Watchlist
            </button>
            <button
              onClick={() => window.location.href = '/sentinel/import'}
              style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '4px', color: '#9E8F75', padding: '9px 18px', fontSize: '0.84rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '7px' }}
            >
              <Upload style={{ width: 15, height: 15 }} />
              Import
            </button>
            <button
              onClick={() => window.location.href = '/sentinel/check-in'}
              style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.45)', borderRadius: '4px', color: '#E8C060', padding: '9px 18px', fontSize: '0.84rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '7px' }}
            >
              <UserCheck style={{ width: 15, height: 15 }} />
              Check In Visitor
            </button>
          </div>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {STAT_CARDS.map(({ key, label, icon: Icon, accent }) => (
            <div
              key={key}
              style={{
                background: accent ? 'linear-gradient(135deg, #161208 0%, #110F0B 100%)' : '#110F0B',
                border: `1px solid ${accent ? 'rgba(201,168,76,0.35)' : 'rgba(201,168,76,0.18)'}`,
                borderRadius: '4px',
                padding: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Icon style={{ width: 20, height: 20, color: accent ? '#C9A84C' : '#5A5040' }} />
                {accent && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '0.65rem', fontWeight: 600, color: '#C9A84C', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                    Live
                  </span>
                )}
              </div>
              <p style={{ fontSize: '2.2rem', fontWeight: 700, color: accent ? '#E8C060' : '#F0EBE0', lineHeight: 1, marginBottom: '6px', fontFamily: "'Cormorant Garamond', serif" }}>
                {stats[key as keyof VisitorStats]}
              </p>
              <p style={{ fontSize: '0.78rem', color: '#9E8F75' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Quick Access Modules */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { href: '/sentinel/security',  icon: Camera,       title: 'Security Center',    desc: 'Camera feeds, access logs, and incident reports',            color: '#C9A84C' },
            { href: '/sentinel/watchlist', icon: AlertTriangle, title: 'Watchlist',          desc: 'Flagged individuals and restricted access management',        color: 'rgba(195,95,95,0.9)' },
            { href: '/sentinel/check-in',  icon: UserCheck,    title: 'Visitor Check-In',   desc: 'Register new visitors and issue temporary access badges',     color: '#C9A84C' },
          ].map(({ href, icon: Icon, title, desc, color }) => (
            <button
              key={href}
              onClick={() => window.location.href = href}
              style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '4px', padding: '20px', textAlign: 'left', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.38)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.18)')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Icon style={{ width: 18, height: 18, color }} />
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', fontWeight: 700, color: '#F0EBE0' }}>{title}</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#9E8F75', lineHeight: 1.5 }}>{desc}</p>
            </button>
          ))}
        </div>

        {/* Active Visitors Table */}
        <div style={{ background: '#110F0B', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ padding: '18px 24px', borderBottom: '1px solid rgba(201,168,76,0.16)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Eye style={{ width: 18, height: 18, color: '#C9A84C' }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', fontWeight: 700, color: '#F0EBE0' }}>Currently in Building</h2>
            {!loading && (
              <span style={{ marginLeft: 'auto', padding: '3px 10px', background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.28)', borderRadius: '2px', fontSize: '0.72rem', fontWeight: 600, color: '#C9A84C', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                {activeVisitors.length} Active
              </span>
            )}
          </div>

          {loading ? (
            <div style={{ padding: '56px', textAlign: 'center' }}>
              <div style={{ width: 40, height: 40, border: '2px solid rgba(201,168,76,0.15)', borderTop: '2px solid rgba(201,168,76,0.6)', borderRadius: '50%', margin: '0 auto 16px' }} />
              <p style={{ color: '#9E8F75', fontSize: '0.9rem' }}>Loading visitor data...</p>
            </div>
          ) : activeVisitors.length === 0 ? (
            <div style={{ padding: '64px', textAlign: 'center' }}>
              <UserCheck style={{ width: 48, height: 48, color: '#5A5040', margin: '0 auto 16px' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 700, color: '#F0EBE0', marginBottom: '8px' }}>Building Clear</h3>
              <p style={{ color: '#9E8F75', fontSize: '0.88rem' }}>No visitors currently checked in</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(201,168,76,0.14)' }}>
                    {['Visitor', 'Company', 'Host', 'Purpose', 'Location', 'Badge', 'Time In', 'Actions'].map(h => (
                      <th key={h} style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.72rem', fontWeight: 600, color: '#5A5040', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {activeVisitors.map((visit) => (
                    <tr
                      key={visit.id}
                      style={{ borderBottom: '1px solid rgba(201,168,76,0.10)', background: visit.visitor.isWatchlist ? 'rgba(120,30,30,0.08)' : 'transparent' }}
                    >
                      <td style={{ padding: '14px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: 34, height: 34, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Users style={{ width: 15, height: 15, color: '#C9A84C' }} />
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontWeight: 600, color: '#F0EBE0', fontSize: '0.9rem' }}>
                              {visit.visitor.firstName} {visit.visitor.lastName}
                            </span>
                            {visit.visitor.isWatchlist && (
                              <AlertTriangle style={{ width: 13, height: 13, color: 'rgba(195,95,95,0.9)' }} />
                            )}
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '14px 20px', color: '#9E8F75', fontSize: '0.88rem' }}>{visit.visitor.company || '—'}</td>
                      <td style={{ padding: '14px 20px', color: '#9E8F75', fontSize: '0.88rem' }}>{visit.hostName || '—'}</td>
                      <td style={{ padding: '14px 20px', color: '#9E8F75', fontSize: '0.88rem' }}>{visit.purpose}</td>
                      <td style={{ padding: '14px 20px', color: '#9E8F75', fontSize: '0.88rem' }}>{visit.building || '—'}</td>
                      <td style={{ padding: '14px 20px' }}>
                        <span style={{ padding: '3px 8px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '2px', fontSize: '0.72rem', fontWeight: 600, color: '#C9A84C', fontFamily: 'monospace', letterSpacing: '1px' }}>
                          {visit.badgeNumber || 'N/A'}
                        </span>
                      </td>
                      <td style={{ padding: '14px 20px' }}>
                        <span style={{ fontSize: '0.88rem', color: '#9E8F75', fontFamily: 'monospace' }}>
                          {getTimeInBuilding(visit.checkInTime)}
                        </span>
                      </td>
                      <td style={{ padding: '14px 20px' }}>
                        <button
                          onClick={() => window.location.href = `/sentinel/checkout/${visit.id}`}
                          style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.28)', borderRadius: '4px', color: '#C9A84C', padding: '6px 14px', fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer' }}
                        >
                          Check Out
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Security Summary Row */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div style={{ background: '#110F0B', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '4px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Lock style={{ width: 16, height: 16, color: '#C9A84C' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 700, color: '#F0EBE0' }}>Access Control</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { label: 'Access Granted', value: '—', ok: true },
                { label: 'Access Denied',  value: '—', ok: false },
                { label: 'Doors Locked',   value: '—', ok: true },
                { label: 'Alarms Active',  value: '—', ok: true },
              ].map(({ label, value, ok }) => (
                <div key={label} style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '4px', padding: '12px' }}>
                  <p style={{ fontSize: '1.4rem', fontWeight: 700, color: ok ? '#C9A84C' : 'rgba(195,95,95,0.9)', fontFamily: "'Cormorant Garamond', serif" }}>{value}</p>
                  <p style={{ fontSize: '0.76rem', color: '#5A5040', marginTop: '2px' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#110F0B', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '4px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Bell style={{ width: 16, height: 16, color: '#C9A84C' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 700, color: '#F0EBE0' }}>Recent Alerts</h3>
              <button
                onClick={() => window.location.href = '/sentinel/security'}
                style={{ marginLeft: 'auto', fontSize: '0.76rem', color: '#C9A84C', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
              >
                View All
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { msg: 'No active alerts — system nominal', time: 'Now',       warn: false },
                { msg: 'Daily visitor log exported',         time: 'Today 08:00', warn: false },
                { msg: 'Watchlist database updated',         time: 'Yesterday',  warn: false },
              ].map(({ msg, time, warn }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.10)', borderRadius: '4px' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: warn ? 'rgba(195,95,95,0.9)' : '#4ade80', flexShrink: 0 }} />
                  <span style={{ flex: 1, fontSize: '0.82rem', color: '#9E8F75' }}>{msg}</span>
                  <span style={{ fontSize: '0.72rem', color: '#5A5040', whiteSpace: 'nowrap' }}>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function SentinelPageWrapper() {
  return (
    <FeatureGate feature="sentinel" featureName="Sentinel Visitor Management">
      <SentinelPage />
    </FeatureGate>
  );
}


