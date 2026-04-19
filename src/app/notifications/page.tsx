'use client';

import { Bell, CheckCircle, AlertCircle, Info, Clock, TrendingUp, Users, Award, Calendar } from 'lucide-react';

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: CheckCircle,
      title: 'Customer Recognition Approved',
      message: 'You awarded 50 XP to Jessica Williams for exceptional patient care',
      time: '5 minutes ago',
      unread: true,
    },
    {
      id: 2,
      type: 'info',
      icon: TrendingUp,
      title: 'Talent Identified',
      message: 'Michael Chen has been flagged as a high performer - consider for promotion',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      type: 'warning',
      icon: AlertCircle,
      title: 'Retention Risk Alert',
      message: 'Amanda Rodriguez showing signs of disengagement - schedule 1:1 meeting',
      time: '3 hours ago',
      unread: true,
    },
    {
      id: 4,
      type: 'info',
      icon: Users,
      title: 'New Employee Onboarding',
      message: 'Sarah Johnson starts tomorrow - onboarding checklist ready',
      time: '5 hours ago',
      unread: false,
    },
    {
      id: 5,
      type: 'success',
      icon: Award,
      title: 'Quest Completed',
      message: 'You earned 100 XP and 25 gems for completing "Perfect Week" quest!',
      time: '1 day ago',
      unread: false,
    },
    {
      id: 6,
      type: 'info',
      icon: Calendar,
      title: 'Schedule Change Request',
      message: 'David Park requested shift swap for Thursday - needs approval',
      time: '1 day ago',
      unread: false,
    },
    {
      id: 7,
      type: 'info',
      icon: Bell,
      title: 'Time-Off Request',
      message: 'Emily Foster submitted PTO request for next week',
      time: '2 days ago',
      unread: false,
    },
    {
      id: 8,
      type: 'info',
      icon: Clock,
      title: 'Timesheet Reminder',
      message: 'Don\'t forget to submit your timesheet by Friday 5 PM',
      time: '3 days ago',
      unread: false,
    },
  ];

  const markAllAsRead = () => {
    console.log('Marking all as read');
  };

  const clearAll = () => {
    console.log('Clearing all notifications');
  };

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


