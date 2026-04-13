'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  Zap, Clock, Calendar, Shield, Users, MessageSquare, 
  FileText, DollarSign, Package, X, ChevronRight 
} from 'lucide-react';

const PUBLIC_PAGES = ['/', '/landing', '/pricing', '/signup', '/login'];

export default function QuickActionsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  if (PUBLIC_PAGES.includes(pathname)) return null;

  const quickActions = [
    {
      name: 'Clock In/Out',
      description: 'Start or end shift',
      icon: Clock,
      color: 'from-amber-700 to-cyan-500',
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
      color: 'from-stone-900 to-pink-500',
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
      color: 'from-amber-700 to-amber-800',
      action: () => router.push('/shift-logs')
    },
    {
      name: 'Send Message',
      description: 'Chat with team',
      icon: MessageSquare,
      color: 'from-cyan-500 to-amber-800',
      action: () => router.push('/messages')
    },
    {
      name: 'Add Employee',
      description: 'Onboard new staff',
      icon: Users,
      color: 'from-violet-500 to-amber-900',
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
        style={{
          position: 'fixed',
          bottom: '112px',
          left: '32px',
          zIndex: 50,
          width: '52px',
          height: '52px',
          background: isOpen ? '#110F0B' : 'linear-gradient(135deg, #C9A84C 0%, #E8C060 50%, #C9A84C 100%)',
          border: '1px solid rgba(201,168,76,0.6)',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(201,168,76,0.3), 0 4px 18px rgba(0,0,0,0.6)',
          transition: 'all 0.25s',
        }}
        title="Quick Actions"
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 35px rgba(201,168,76,0.55), 0 8px 28px rgba(0,0,0,0.7)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(201,168,76,0.3), 0 4px 18px rgba(0,0,0,0.6)'; }}
      >
        {isOpen ? (
          <X style={{ width: '20px', height: '20px', color: '#C9A84C' }} />
        ) : (
          <Zap style={{ width: '20px', height: '20px', color: '#07060A' }} />
        )}
      </button>

      {/* Quick Actions Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 40 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div style={{
            position: 'fixed',
            bottom: '176px',
            left: '32px',
            zIndex: 50,
            width: '300px',
            background: '#110F0B',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 0 40px rgba(201,168,76,0.08), 0 20px 60px rgba(0,0,0,0.8)',
            fontFamily: "'Inter', sans-serif",
          }}>
            {/* Gold top accent */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />

            {/* Header */}
            <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap style={{ width: '14px', height: '14px', color: '#C9A84C' }} />
                <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C' }}>Quick Actions</span>
              </div>
            </div>

            {/* Actions */}
            <div style={{ padding: '8px', maxHeight: '60vh', overflowY: 'auto' }}>
              {quickActions.map((action, idx) => {
                const Icon = action.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => { action.action(); setIsOpen(false); }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 12px',
                      background: 'transparent',
                      border: '1px solid transparent',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                      marginBottom: '2px',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.06)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.22)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'transparent';
                    }}
                  >
                    <div style={{ padding: '6px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '2px', flexShrink: 0 }}>
                      <Icon style={{ width: '14px', height: '14px', color: '#9E8F75' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.84rem', fontWeight: 500, color: '#F0EBE0' }}>{action.name}</div>
                      <div style={{ fontSize: '0.72rem', color: '#5A5040' }}>{action.description}</div>
                    </div>
                    <ChevronRight style={{ width: '14px', height: '14px', color: '#3a3020' }} />
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div style={{ padding: '10px 18px', borderTop: '1px solid rgba(201,168,76,0.08)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.68rem', color: '#5A5040', letterSpacing: '1px' }}>Press Cmd+K for command palette</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

