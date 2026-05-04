'use client';

import { useState, useEffect } from 'react';
import { Bell, CheckCircle, AlertCircle, Info, Clock, TrendingUp, Users, Award, Calendar } from 'lucide-react';

interface UINotification {
  id: string | number;
  type: string;
  icon: React.ElementType;
  title: string;
  message: string;
  time: string;
  unread: boolean;
}

function iconForType(type: string): React.ElementType {
  switch (type) {
    case 'success': return CheckCircle;
    case 'warning': return AlertCircle;
    case 'award': return Award;
    case 'schedule': return Calendar;
    case 'team': return Users;
    case 'trend': return TrendingUp;
    default: return Bell;
  }
}

function relativeTime(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins} minute${mins !== 1 ? 's' : ''} ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days !== 1 ? 's' : ''} ago`;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<UINotification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/notifications')
      .then(r => r.json())
      .then((data: any[]) => {
        if (Array.isArray(data) && data.length > 0) {
          setNotifications(data.map(n => ({
            id: n.id,
            type: n.type || 'info',
            icon: iconForType(n.type || 'info'),
            title: n.title,
            message: n.message,
            time: relativeTime(n.createdAt),
            unread: !n.isRead,
          })));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
    fetch('/api/notifications', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'markAllRead' }),
    }).catch(() => {});
  };

  const clearAll = () => {
    setNotifications([]);
    fetch('/api/notifications', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'clearAll' }),
    }).catch(() => {});
  };

  if (loading) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center" style={{ background: '#070604' }}>
        <p style={{ color: '#9E8F75' }}>Loading notifications...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8" style={{ background: '#070604' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Bell className="w-8 h-8" style={{ color: '#C9A84C' }} />
              <div>
                <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.02em' }}>Notifications</h1>
                <p className="text-sm mt-0.5" style={{ color: '#9E8F75' }}>Stay updated with important events</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={markAllAsRead}
                style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.28)', borderRadius: '4px', color: '#C9A84C', padding: '8px 16px', fontSize: '0.84rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s' }}
              >
                Mark All Read
              </button>
              <button
                onClick={clearAll}
                style={{ background: 'rgba(160,40,40,0.1)', border: '1px solid rgba(120,32,32,0.35)', borderRadius: '4px', color: 'rgba(195,95,95,0.9)', padding: '8px 16px', fontSize: '0.84rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s' }}
              >
                Clear All
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div style={{ background: 'linear-gradient(135deg, #131009 0%, #110F0B 100%)', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '4px', padding: '16px' }}>
              <p className="text-3xl font-bold text-white">{notifications.filter(n => n.unread).length}</p>
              <p className="text-sm mt-1" style={{ color: '#9E8F75' }}>Unread</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #131009 0%, #110F0B 100%)', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '4px', padding: '16px' }}>
              <p className="text-3xl font-bold text-white">{notifications.length}</p>
              <p className="text-sm mt-1" style={{ color: '#9E8F75' }}>Total</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #131009 0%, #110F0B 100%)', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '4px', padding: '16px' }}>
              <p className="text-3xl font-bold text-white">{notifications.filter(n => n.type === 'success').length}</p>
              <p className="text-sm mt-1" style={{ color: '#9E8F75' }}>Achievements</p>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-2">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            const isWarning = notification.type === 'warning';
            const isSuccess = notification.type === 'success';

            return (
              <div
                key={notification.id}
                style={{
                  background: isWarning
                    ? 'linear-gradient(135deg, #150C0C 0%, #110F0B 100%)'
                    : 'linear-gradient(135deg, #131009 0%, #110F0B 100%)',
                  border: `1px solid ${isWarning ? 'rgba(140,40,40,0.35)' : notification.unread ? 'rgba(201,168,76,0.32)' : 'rgba(201,168,76,0.14)'}`,
                  borderRadius: '4px',
                  padding: '16px 20px',
                  transition: 'border-color 0.2s, transform 0.2s',
                  boxShadow: notification.unread ? '0 0 20px rgba(201,168,76,0.06), 0 4px 20px rgba(0,0,0,0.5)' : '0 2px 12px rgba(0,0,0,0.4)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div style={{
                    flexShrink: 0, width: '40px', height: '40px', borderRadius: '4px',
                    background: isWarning ? 'rgba(140,40,40,0.15)' : 'rgba(201,168,76,0.08)',
                    border: `1px solid ${isWarning ? 'rgba(140,40,40,0.25)' : 'rgba(201,168,76,0.15)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon style={{ width: '18px', height: '18px', color: isWarning ? 'rgba(195,95,95,0.9)' : '#C9A84C' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-base font-semibold text-white">{notification.title}</h3>
                      {notification.unread && (
                        <span style={{ padding: '2px 8px', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.35)', borderRadius: '2px', fontSize: '0.65rem', fontWeight: 600, color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase', whiteSpace: 'nowrap', marginLeft: '12px' }}>
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-sm mb-2" style={{ color: '#9E8F75' }}>{notification.message}</p>
                    <div className="flex items-center gap-2">
                      <Clock style={{ width: '12px', height: '12px', color: '#5A5040' }} />
                      <span className="text-xs" style={{ color: '#5A5040' }}>{notification.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {notifications.length === 0 && (
          <div style={{ background: '#110F0B', border: '1px solid rgba(201,168,76,0.14)', borderRadius: '4px', padding: '48px', textAlign: 'center' }}>
            <Bell style={{ width: '48px', height: '48px', color: '#5A5040', margin: '0 auto 16px' }} />
            <h3 className="text-xl font-bold text-white mb-2">All Caught Up</h3>
            <p style={{ color: '#9E8F75' }}>You have no new notifications</p>
          </div>
        )}
      </div>
    </div>
  );
}


