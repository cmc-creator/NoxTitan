'use client';

import { useState, useEffect } from 'react';
import { Coffee, Clock, Play, Pause, XCircle } from 'lucide-react';

interface BreakTimerProps {
  activeBreak: {
    id: string;
    breakType: 'MEAL' | 'REST' | 'UNPAID';
    startTime: string;
    isPaid: boolean;
  } | null;
  onEndBreak: () => void;
}

export default function BreakTimer({ activeBreak, onEndBreak }: BreakTimerProps) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!activeBreak) {
      setElapsed(0);
      return;
    }

    const startTime = new Date(activeBreak.startTime).getTime();
    
    const updateTimer = () => {
      const now = Date.now();
      const diff = Math.floor((now - startTime) / 1000);
      setElapsed(diff);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [activeBreak]);

  if (!activeBreak) return null;

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  const breakDurations = {
    MEAL: 30,
    REST: 15,
    UNPAID: 30,
  };

  const expectedDuration = breakDurations[activeBreak.breakType];
  const isOverdue = minutes >= expectedDuration;

  return (
    <div className={`fixed bottom-6 right-6 ${
      isOverdue 
        ? 'bg-gradient-to-br from-red-600 to-orange-600' 
        : 'bg-gradient-to-br from-blue-600 to-purple-600'
    } text-white rounded-2xl shadow-2xl p-6 min-w-[320px] z-50 animate-in slide-in-from-bottom-8`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Coffee className="w-5 h-5" />
          <span className="font-semibold">
            {activeBreak.breakType === 'MEAL' ? 'Meal Break' : 
             activeBreak.breakType === 'REST' ? 'Rest Break' : 'Unpaid Break'}
          </span>
        </div>
        {activeBreak.isPaid && (
          <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold">
            Paid
          </span>
        )}
      </div>

      {/* Timer Display */}
      <div className="text-center mb-4">
        <div className="text-5xl font-bold mb-2">
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-sm opacity-80">
          {isOverdue ? (
            <span className="flex items-center justify-center gap-1 text-white font-semibold">
              <Clock className="w-4 h-4" />
              Break exceeded by {minutes - expectedDuration} minutes
            </span>
          ) : (
            `Expected duration: ${expectedDuration} minutes`
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-1000"
            style={{ 
              width: `${Math.min((minutes / expectedDuration) * 100, 100)}%` 
            }}
          />
        </div>
      </div>

      {/* Warning if overdue */}
      {isOverdue && (
        <div className="bg-white/20 rounded-lg p-3 mb-4 text-sm">
          ⚠️ This break has exceeded the expected duration. Please return to work or extend if approved.
        </div>
      )}

      {/* End Break Button */}
      <button
        onClick={onEndBreak}
        className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
      >
        <XCircle className="w-5 h-5" />
        End Break
      </button>

      {/* Break Started Time */}
      <div className="text-center text-xs opacity-60 mt-3">
        Started at {new Date(activeBreak.startTime).toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit' 
        })}
      </div>
    </div>
  );
}
