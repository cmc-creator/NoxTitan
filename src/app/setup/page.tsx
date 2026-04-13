'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SetupWizard from '@/components/SetupWizard';

export default function SetupPage() {
  const router = useRouter();
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = async (data: any) => {
    try {
      // Save organization setup to database
      const response = await fetch('/api/organization/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsComplete(true);
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          router.push('/dashboard');
        }, 2000);
      }
    } catch (error) {
      console.error('Setup error:', error);
    }
  };

  const handleSkip = () => {
    // Allow skip but mark setup as incomplete
    router.push('/dashboard');
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold text-white mb-4">Setup Complete!</h1>
          <p className="text-xl text-amber-100/70">Redirecting to your dashboard...</p>
        </div>
      </div>
    );
  }

  return <SetupWizard onComplete={handleComplete} onSkip={handleSkip} />;
}


