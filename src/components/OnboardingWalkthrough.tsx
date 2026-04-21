'use client';

import { useState, useEffect } from 'react';
import Confetti from './Confetti';
// Use the real logo image and crystal accents
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Link2,
  Settings,
  BookOpen,
  Sparkles
} from 'lucide-react';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  path: string;
}

interface OnboardingWalkthroughProps {
  onComplete: () => void;
  onSkip: () => void;
}

export default function OnboardingWalkthrough({ onComplete, onSkip }: OnboardingWalkthroughProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const steps: OnboardingStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to NyxTitan! 🎉',
      description: `Your all-in-one workforce management platform. Let's take a quick tour of everything you can do! (Don't worry, no actual titans were harmed in the making of this software.)\n\nDad joke: Why did the calendar get promoted? It had a lot of dates!`,
      icon: null,
      features: [
        'Intelligent employee scheduling with drag-and-drop',
        'Payroll processing and benefits administration',
        'Real-time analytics and forecasting',
        'Compliance tracking across industries',
        '50+ integrations with popular business tools',
        'Skills tracking and performance management'
      ],
      path: '/'
    },
    {
      id: 'calendar',
      title: 'Smart Scheduling Calendar',
      description: 'Create schedules in minutes with our intuitive drag-and-drop calendar. Automatic overtime alerts keep you in control.',
      icon: <Calendar className="w-12 h-12 text-amber-400" />,
      features: [
        'Drag-and-drop shift creation',
        'Multiple calendar views (day/week/month)',
        'Automatic overtime detection and warnings',
        'Color-coded departments and shift types',
        'Conflict detection for double-bookings',
        'Employee availability checking'
      ],
      path: '/calendar'
    },
    {
      id: 'employees',
      title: 'Employee Management Hub',
      description: 'Manage your entire workforce from one place. Track skills, certifications, training, and performance.',
      icon: <Users className="w-12 h-12 text-green-600" />,
      features: [
        'Complete employee profiles with photos',
        'Skills and competency tracking',
        'Certification expiration alerts',
        'Training history and completion records',
        'Performance review management',
        'Document storage for each employee'
      ],
      path: '/employees'
    },
    {
      id: 'analytics',
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with powerful analytics, forecasting, and department comparisons.',
      icon: <TrendingUp className="w-12 h-12 text-amber-600" />,
      features: [
        'Labor cost trending (actual vs. budgeted)',
        'Department performance metrics',
        'Scheduling efficiency tracking',
        '3-month cost forecasting',
        'Overtime analysis by department',
        'Smart recommendations for optimization'
      ],
      path: '/analytics'
    },
    {
      id: 'payroll',
      title: 'Payroll & Benefits',
      description: 'Process payroll from scheduled hours or sync with external payroll systems. Manage benefits all in one place.',
      icon: <DollarSign className="w-12 h-12 text-amber-600" />,
      features: [
        'Automatic hour calculation from schedules',
        'Overtime calculations (1.5x rate)',
        'Benefits administration (health, 401k, FSA)',
        'Pay rate management (hourly/salary)',
        'Export to multiple payroll formats',
        'Integration with QuickBooks, ADP, Gusto, and more'
      ],
      path: '/payroll'
    },
    {
      id: 'compliance',
      title: 'Compliance Tracking',
      description: 'Stay compliant across industries with built-in tracking for healthcare, OSHA, food service, and more.',
      icon: <Shield className="w-12 h-12 text-red-600" />,
      features: [
        'Multi-industry compliance modules',
        'Healthcare (CMS, Joint Commission, HIPAA)',
        'OSHA recordkeeping and reporting',
        'Food service safety certifications',
        'Construction safety requirements',
        'Automated compliance reporting'
      ],
      path: '/compliance'
    },
    {
      id: 'integrations',
      title: 'Powerful Integrations',
      description: 'Connect NyxTitan with 50+ business systems. Sync data seamlessly across your entire tech stack.',
      icon: <Link2 className="w-12 h-12 text-amber-400" />,
      features: [
        'Payroll systems (ADP, Gusto, Paychex, Paycom)',
        'Healthcare EMR (Epic, Cerner, iCANotes)',
        'Point of Sale (Square, Toast, Clover)',
        'Time clocks (Kronos, Deputy, 7shifts)',
        'Accounting (QuickBooks, Xero, NetSuite)',
        'Project management (Monday, Asana, Jira)'
      ],
      path: '/integrations'
    },
    {
      id: 'training',
      title: 'Leadership Training',
      description: 'Develop your managers with expert-led courses. Perfect for new managers transitioning from individual contributors.',
      icon: <BookOpen className="w-12 h-12 text-teal-600" />,
      features: [
        '12+ leadership development courses',
        'New manager essentials (communication, delegation)',
        'Performance management fundamentals',
        'Conflict resolution and emotional intelligence',
        'Structured learning paths',
        'Completion certificates and tracking'
      ],
      path: '/training'
    },
    {
      id: 'customization',
      title: 'Personalize Your Experience',
      description: 'Make NyxTitan yours! Choose from 27 beautiful themes and customize the interface to match your brand.',
      icon: <Settings className="w-12 h-12 text-pink-600" />,
      features: [
        '27 pre-built themes (light & dark)',
        'Seasonal themes (spring, summer, autumn, winter)',
        'Holiday themes (Christmas, Halloween, Valentine\'s)',
        'Custom theme creator with live preview',
        'Font customization (10 options)',
        'Settings sync across devices'
      ],
      path: '/settings'
    }
  ];

  const handleNext = () => {
    setCompletedSteps(prev => new Set([...prev, currentStep]));
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (index: number) => {
    if (index <= currentStep || completedSteps.has(index)) {
      setCurrentStep(index);
    }
  };

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Confetti />
      <div className="lux-app-bg rounded shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col border border-purple-700">
        {/* Header */}
        <div className="p-4 border-b border-stone-800">
          <div className="flex items-center justify-between mb-0">
            <div className="flex flex-col items-center gap-0 w-full mb-0">
              {/* Use Next.js Image for reliability and premium style */}
              <div className="flex items-center justify-center w-20 h-20 mb-1">
                {/* Logo removed as requested */}
              </div>
              <h2 className="text-lg font-extrabold text-white drop-shadow-xl text-center mb-0">Welcome to NyxTitan</h2>
              <span className="text-base font-bold text-pink-200 tracking-widest drop-shadow text-center" style={{ textShadow: '0 0 8px #a78bfa, 0 0 2px #fff' }}>
                Business Management. Forged for Titans.
              </span>
            </div>
            <button
              onClick={onSkip}
              className="p-2 hover:bg-purple-100 rounded-lg transition-all border border-purple-200"
              aria-label="Close walkthrough"
            >
              <X className="w-6 h-6 text-amber-600" />
            </button>
          </div>
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-500">Step {currentStep + 1} of {steps.length}</span>
              <span className="text-amber-400 font-semibold">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-700 to-amber-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          {/* Step indicators */}
          <div className="flex items-center gap-3 mt-3 overflow-x-auto pb-2 justify-center" style={{paddingTop: '8px'}}>
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(index)}
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all shadow-lg border-2 mt-1 cursor-pointer ${
                  index === currentStep
                    ? 'bg-gradient-to-br from-pink-400 via-stone-900 to-amber-800 text-white scale-110 border-pink-300 ring-4 ring-purple-300'
                    : completedSteps.has(index) || index <= currentStep
                    ? 'bg-gradient-to-br from-green-400 to-amber-800 text-white border-green-300 hover:ring-2 hover:ring-purple-400'
                    : 'bg-gradient-to-br from-slate-700 to-slate-900 text-gray-200 border-stone-500 hover:bg-stone-900 opacity-60 cursor-not-allowed'
                }`}
                style={{ boxShadow: index === currentStep ? '0 0 16px #a78bfa' : undefined }}
                disabled={index > currentStep + 1 && !completedSteps.has(index)}
                aria-label={`Go to step ${index + 1}`}
              >
                {completedSteps.has(index) ? <Check className="w-5 h-5" /> : index + 1}
              </button>
            ))}
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto pt-2">
            {/* Remove blue star icon for welcome step */}
            {currentStep === 0 ? null : (
              <div className="flex justify-center mb-6">
                {currentStepData.icon}
              </div>
            )}
            {/* Title and Description */}
            {/* Only show step title if not welcome step */}
            {currentStep !== 0 && (
              <h3 className="text-3xl font-bold text-pink-200 mb-4 text-center drop-shadow" style={{ textShadow: '0 0 8px #a78bfa, 0 0 2px #fff' }}>
                {currentStepData.title}
              </h3>
            )}
            <p className="text-lg text-white mb-8 text-center drop-shadow" style={{ textShadow: '0 0 8px #a78bfa, 0 0 2px #fff' }}>
              {currentStepData.description}
            </p>
            {/* Features List */}
            <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded p-6 mb-6">
              <h4 className="font-bold text-stone-100 mb-2 flex items-center gap-2 text-lg">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Key Features:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentStepData.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 bg-stone-950/70 rounded-lg px-3 py-2 shadow-sm">
                    <div className="flex-shrink-0 w-5 h-5 bg-amber-600 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-stone-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Quick Tip */}
            {currentStep === 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-900">
                  <strong>💡 Pro Tip:</strong> You can revisit this walkthrough anytime from Settings → Help & Support
                </p>
              </div>
            )}
            {currentStep === 1 && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-900">
                  <strong>💡 Pro Tip:</strong> Right-click on any shift to quickly edit, copy, or delete it. Hold Shift to create multi-day shifts!
                </p>
              </div>
            )}
            {currentStep === 2 && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-900">
                  <strong>💡 Pro Tip:</strong> Click on any employee to view their detailed profile with skills, certifications, and training history.
                </p>
              </div>
            )}
            {currentStep === 7 && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-900">
                  <strong>💡 Pro Tip:</strong> New managers should start with "From Colleague to Manager" and "Essential Communication Skills" courses.
                </p>
              </div>
            )}
          </div>
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-stone-800 bg-stone-950">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                currentStep === 0
                  ? 'bg-stone-800 text-stone-400 cursor-not-allowed'
                  : 'bg-stone-950 border border-gray-300 text-stone-300 hover:bg-stone-950'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
            <button
              onClick={onSkip}
              className="px-4 py-2 text-stone-500 hover:text-stone-100 transition-all"
            >
              Skip Tour
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-gradient-to-r from-amber-800 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-800 hover:to-amber-600 transition-all flex items-center gap-2"
            >
              {currentStep === steps.length - 1 ? (
                <span>
                  Finish Tour
                  <Check className="w-5 h-5" />
                </span>
              ) : (
                <span>
                  Next
                  <ChevronRight className="w-5 h-5" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



