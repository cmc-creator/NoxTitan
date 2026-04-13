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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-stone-900 to-black p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Bell className="w-10 h-10 text-amber-400" />
              <div>
                <h1 className="text-4xl font-bold text-white">Notifications</h1>
                <p className="text-amber-100/70">Stay updated with important events</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={markAllAsRead}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-all"
              >
                Mark All Read
              </button>
              <button
                onClick={clearAll}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all"
              >
                Clear All
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-stone-950/30 backdrop-blur-xl rounded-xl p-4 border border-amber-500/40/30">
              <p className="text-3xl font-bold text-white">{notifications.filter(n => n.unread).length}</p>
              <p className="text-sm text-amber-100/70">Unread</p>
            </div>
            <div className="bg-cyan-900/30 backdrop-blur-xl rounded-xl p-4 border border-cyan-500/30">
              <p className="text-3xl font-bold text-white">{notifications.length}</p>
              <p className="text-sm text-cyan-200">Total</p>
            </div>
            <div className="bg-green-900/30 backdrop-blur-xl rounded-xl p-4 border border-green-500/30">
              <p className="text-3xl font-bold text-white">{notifications.filter(n => n.type === 'success').length}</p>
              <p className="text-sm text-green-200">Achievements</p>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            const bgColor = notification.type === 'success' 
              ? 'from-green-900/40 to-emerald-900/40 border-green-500/30'
              : notification.type === 'warning'
              ? 'from-orange-900/40 to-red-900/40 border-orange-500/30'
              : 'from-amber-700/40 to-cyan-900/40 border-cyan-500/30';
            
            const iconColor = notification.type === 'success' 
              ? 'text-green-400'
              : notification.type === 'warning'
              ? 'text-orange-400'
              : 'text-cyan-400';

            return (
              <div
                key={notification.id}
                className={`bg-gradient-to-r ${bgColor} backdrop-blur-xl rounded-xl p-5 border-2 transition-all hover:scale-[1.02] ${
                  notification.unread ? 'shadow-[0_0_20px_rgba(168,85,247,0.3)]' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${
                    notification.unread ? 'bg-amber-500/20' : 'bg-stone-900/50'
                  } flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-lg font-bold text-white">{notification.title}</h3>
                      {notification.unread && (
                        <span className="px-2 py-1 bg-amber-500 text-white text-xs rounded-full font-bold">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-stone-300 mb-2">{notification.message}</p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-stone-400" />
                      <span className="text-sm text-stone-400">{notification.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State (when no notifications) */}
        {notifications.length === 0 && (
          <div className="bg-stone-900/50 backdrop-blur-xl rounded-xl p-12 text-center border-2 border-stone-700">
            <Bell className="w-16 h-16 text-stone-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">All Caught Up!</h3>
            <p className="text-stone-400">You have no new notifications</p>
          </div>
        )}
      </div>
    </div>
  );
}


