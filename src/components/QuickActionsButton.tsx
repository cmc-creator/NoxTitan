'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Zap, Clock, Calendar, Shield, Users, MessageSquare, 
  FileText, DollarSign, Package, X, ChevronRight 
} from 'lucide-react';

export default function QuickActionsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const quickActions = [
    {
      name: 'Clock In/Out',
      description: 'Start or end shift',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500',
      action: () => router.push('/timeclock')
    },
    {
      name: 'View Schedule',
      description: 'Check your shifts',
      icon: Calendar,
      color: 'from-green-500 to-emerald-500',
      action: () => router.push('/calendar')
    },
    {
      name: 'Request Time Off',
      description: 'Submit PTO request',
      icon: Calendar,
      color: 'from-purple-500 to-pink-500',
      action: () => router.push('/time-off')
    },
    {
      name: 'Report Incident',
      description: 'Log safety issue',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      action: () => router.push('/qapi')
    },
    {
      name: 'Add Shift Log',
      description: 'Document shift notes',
      icon: FileText,
      color: 'from-indigo-500 to-blue-500',
      action: () => router.push('/shift-logs')
    },
    {
      name: 'Send Message',
      description: 'Chat with team',
      icon: MessageSquare,
      color: 'from-cyan-500 to-blue-500',
      action: () => router.push('/messages')
    },
    {
      name: 'Add Employee',
      description: 'Onboard new staff',
      icon: Users,
      color: 'from-violet-500 to-purple-500',
      action: () => router.push('/employees')
    },
    {
      name: 'View Payroll',
      description: 'Check pay details',
      icon: DollarSign,
      color: 'from-green-500 to-teal-500',
      action: () => router.push('/payroll')
    }
  ];

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110 flex items-center justify-center group"
        title="Quick Actions (Cmd+K for search)"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <Zap className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
        )}
      </button>

      {/* Quick Actions Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="fixed bottom-28 right-8 z-50 w-80 bg-slate-900 rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Quick Actions
              </h3>
              <p className="text-purple-100 text-xs mt-1">Fast access to common tasks</p>
            </div>

            {/* Actions Grid */}
            <div className="p-3 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-1 gap-2">
                {quickActions.map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        action.action();
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-3 p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-all group text-left border border-transparent hover:border-purple-500/30"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${action.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">{action.name}</div>
                        <div className="text-slate-400 text-xs">{action.description}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer Tip */}
            <div className="px-4 py-3 bg-slate-800/50 border-t border-slate-700">
              <p className="text-xs text-slate-400 text-center">
                💡 Tip: Press <kbd className="px-1 py-0.5 bg-slate-700 rounded text-purple-300">Cmd+K</kbd> for command palette
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
