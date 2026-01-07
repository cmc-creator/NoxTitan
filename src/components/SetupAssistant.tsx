'use client';

import { useState } from 'react';
import { Bot, ChevronRight, ExternalLink, Copy, CheckCircle, Volume2, VolumeX } from 'lucide-react';

interface SetupAssistantProps {
  platform: string;
  onApiKeyFound?: (apiKey: string) => void;
}

const PLATFORM_GUIDES = {
  PRINTFUL: {
    name: 'Printful',
    steps: [
      {
        step: 1,
        title: 'Log into Printful',
        description: 'Go to printful.com and sign in to your account',
        screenshot: '📱',
        action: 'https://www.printful.com/dashboard',
      },
      {
        step: 2,
        title: 'Open Settings',
        description: 'Click your profile icon in the top-right corner, then click "Settings"',
        screenshot: '⚙️',
        highlight: 'Top-right corner → Profile icon → Settings',
      },
      {
        step: 3,
        title: 'Go to API Section',
        description: 'In the left sidebar, scroll down and click "API" under Integrations',
        screenshot: '🔌',
        highlight: 'Left sidebar → Integrations section → API',
      },
      {
        step: 4,
        title: 'Generate API Key',
        description: 'Click "Generate new API key" button. Give it a name like "TeamPulse Integration"',
        screenshot: '🔑',
        highlight: 'Blue "Generate new API key" button',
      },
      {
        step: 5,
        title: 'Copy Your Key',
        description: 'Copy the API key shown. You\'ll only see it once! Paste it back here.',
        screenshot: '📋',
        highlight: 'Copy icon next to the key',
        important: 'Save this key somewhere safe - you won\'t be able to see it again!',
      },
    ],
  },
  WIX: {
    name: 'Wix',
    steps: [
      {
        step: 1,
        title: 'Open Wix Dashboard',
        description: 'Go to wix.com and log into your account',
        screenshot: '🌐',
        action: 'https://manage.wix.com/',
      },
      {
        step: 2,
        title: 'Open Settings',
        description: 'Click "Settings" in the left sidebar of your site dashboard',
        screenshot: '⚙️',
        highlight: 'Left sidebar → Settings (gear icon)',
      },
      {
        step: 3,
        title: 'Find API Keys',
        description: 'Scroll down to "Developer Tools" section and click "API Keys"',
        screenshot: '🔧',
        highlight: 'Developer Tools → API Keys',
      },
      {
        step: 4,
        title: 'Create New API Key',
        description: 'Click "Create New API Key" and give it permissions for "Stores" and "Products"',
        screenshot: '➕',
        highlight: 'Create New API Key button',
        important: 'Make sure to enable "Read Products" and "Read Orders" permissions',
      },
      {
        step: 5,
        title: 'Copy Your Key',
        description: 'Copy the API key and paste it back here',
        screenshot: '📋',
      },
    ],
  },
  SHOPIFY: {
    name: 'Shopify',
    steps: [
      {
        step: 1,
        title: 'Open Shopify Admin',
        description: 'Go to {your-store}.myshopify.com/admin',
        screenshot: '🏪',
        action: 'https://admin.shopify.com',
      },
      {
        step: 2,
        title: 'Go to Apps',
        description: 'Click "Apps" in the left sidebar, then "App and sales channel settings"',
        screenshot: '📱',
        highlight: 'Left sidebar → Apps → App and sales channel settings',
      },
      {
        step: 3,
        title: 'Develop Apps',
        description: 'Click "Develop apps" button at the top',
        screenshot: '🛠️',
        highlight: 'Top of page → "Develop apps" button',
      },
      {
        step: 4,
        title: 'Create New App',
        description: 'Click "Create an app" and name it "TeamPulse Integration"',
        screenshot: '➕',
        highlight: 'Create an app button',
      },
      {
        step: 5,
        title: 'Configure API Scopes',
        description: 'Click "Configure Admin API scopes" and enable: read_products, read_orders, read_inventory',
        screenshot: '✅',
        important: 'You need read_products at minimum for product sync',
      },
      {
        step: 6,
        title: 'Install App',
        description: 'Click "Install app" at the top right',
        screenshot: '⬇️',
      },
      {
        step: 7,
        title: 'Copy Access Token',
        description: 'Copy the "Admin API access token" shown. Save it immediately!',
        screenshot: '🔑',
        important: 'This is shown only once! Copy it before closing this page.',
      },
    ],
  },
  WOOCOMMERCE: {
    name: 'WooCommerce',
    steps: [
      {
        step: 1,
        title: 'Log into WordPress',
        description: 'Go to your-site.com/wp-admin and log in',
        screenshot: '🔐',
      },
      {
        step: 2,
        title: 'Open WooCommerce Settings',
        description: 'In the left sidebar, hover over "WooCommerce" and click "Settings"',
        screenshot: '🛒',
        highlight: 'Left sidebar → WooCommerce → Settings',
      },
      {
        step: 3,
        title: 'Go to Advanced Tab',
        description: 'Click the "Advanced" tab at the top',
        screenshot: '⚡',
        highlight: 'Top tabs → Advanced',
      },
      {
        step: 4,
        title: 'Open REST API',
        description: 'Click "REST API" in the sub-menu',
        screenshot: '🔌',
        highlight: 'Advanced submenu → REST API',
      },
      {
        step: 5,
        title: 'Add Key',
        description: 'Click "Add key" button',
        screenshot: '➕',
      },
      {
        step: 6,
        title: 'Configure Key',
        description: 'Description: "TeamPulse", User: Select your admin user, Permissions: Read/Write',
        screenshot: '✏️',
        important: 'Set permissions to "Read/Write" to allow order management',
      },
      {
        step: 7,
        title: 'Copy Keys',
        description: 'Copy both the Consumer Key and Consumer Secret. You\'ll need both!',
        screenshot: '📋',
        important: 'Save both keys - they won\'t be shown again!',
      },
    ],
  },
  SQUARE: {
    name: 'Square',
    steps: [
      {
        step: 1,
        title: 'Open Square Developer Portal',
        description: 'Go to developer.squareup.com and sign in',
        screenshot: '🏢',
        action: 'https://developer.squareup.com/apps',
      },
      {
        step: 2,
        title: 'Create Application',
        description: 'Click "Create an Application" (or use existing one)',
        screenshot: '➕',
      },
      {
        step: 3,
        title: 'Open Your App',
        description: 'Click on your application name to open its settings',
        screenshot: '📱',
      },
      {
        step: 4,
        title: 'Find Access Token',
        description: 'Click "Credentials" in the left sidebar',
        screenshot: '🔑',
        highlight: 'Left sidebar → Credentials',
      },
      {
        step: 5,
        title: 'Copy Production Token',
        description: 'Under "Production" section, copy the "Access Token"',
        screenshot: '📋',
        important: 'Use Production access token, not Sandbox!',
      },
    ],
  },
  ETSY: {
    name: 'Etsy',
    steps: [
      {
        step: 1,
        title: 'Open Etsy Developer Portal',
        description: 'Go to etsy.com/developers and sign in',
        screenshot: '🎨',
        action: 'https://www.etsy.com/developers/your-apps',
      },
      {
        step: 2,
        title: 'Create New App',
        description: 'Click "Create a New App" button',
        screenshot: '➕',
      },
      {
        step: 3,
        title: 'Fill App Details',
        description: 'App Name: "TeamPulse Integration", and complete the form',
        screenshot: '✏️',
      },
      {
        step: 4,
        title: 'Get Keystring',
        description: 'After creating the app, copy your "Keystring" (this is your API key)',
        screenshot: '🔑',
      },
      {
        step: 5,
        title: 'Get Shared Secret',
        description: 'Copy the "Shared Secret" as well',
        screenshot: '🔐',
        important: 'You need both the Keystring and Shared Secret',
      },
    ],
  },
};

export default function SetupAssistant({ platform, onApiKeyFound }: SetupAssistantProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const guide = PLATFORM_GUIDES[platform as keyof typeof PLATFORM_GUIDES];

  if (!guide) return null;

  const speak = (text: string) => {
    if ('speechSynthesis' in window && voiceEnabled) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    const step = guide.steps[stepIndex];
    speak(`Step ${step.step}: ${step.title}. ${step.description}`);
  };

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const currentStepData = guide.steps[currentStep];

  return (
    <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-6 border-2 border-blue-500">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-500 rounded-xl">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">AI Setup Assistant</h3>
            <p className="text-sm text-blue-200">I'll guide you step-by-step to find your {guide.name} API key</p>
          </div>
        </div>
        <button
          onClick={() => setVoiceEnabled(!voiceEnabled)}
          className={`p-2 rounded-lg transition-colors ${
            voiceEnabled ? 'bg-green-600 text-white' : 'bg-slate-700 text-slate-400'
          }`}
          title={voiceEnabled ? 'Voice guidance ON' : 'Voice guidance OFF'}
        >
          {voiceEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Steps Sidebar */}
        <div className="lg:col-span-1">
          <h4 className="text-sm font-bold text-blue-200 mb-3">STEPS ({guide.steps.length})</h4>
          <div className="space-y-2">
            {guide.steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => handleStepClick(idx)}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  currentStep === idx
                    ? 'bg-blue-600 text-white scale-105'
                    : currentStep > idx
                    ? 'bg-green-600/30 text-green-200 hover:bg-green-600/50'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      currentStep === idx
                        ? 'bg-white text-blue-600'
                        : currentStep > idx
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-700 text-slate-400'
                    }`}
                  >
                    {currentStep > idx ? '✓' : step.step}
                  </div>
                  <span className="text-sm font-semibold">{step.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800/50 rounded-xl p-6">
            {/* Step Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-sm text-blue-400 font-bold mb-1">STEP {currentStepData.step} OF {guide.steps.length}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{currentStepData.title}</h3>
              </div>
              <div className="text-5xl">{currentStepData.screenshot}</div>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-200 mb-4">{currentStepData.description}</p>

            {/* Highlight */}
            {currentStepData.highlight && (
              <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-3 mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-yellow-400 text-lg">👉</span>
                  <div>
                    <div className="text-xs font-bold text-yellow-400 mb-1">LOOK FOR THIS:</div>
                    <div className="text-sm text-yellow-200">{currentStepData.highlight}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Important Note */}
            {currentStepData.important && (
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-3 mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 text-lg">⚠️</span>
                  <div>
                    <div className="text-xs font-bold text-red-400 mb-1">IMPORTANT:</div>
                    <div className="text-sm text-red-200">{currentStepData.important}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Button */}
            {currentStepData.action && (
              <a
                href={currentStepData.action}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors mb-4"
              >
                <span>Open {guide.name}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {/* Copy Helper */}
            <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
              <div className="text-xs font-bold text-slate-400 mb-2">HELPFUL TIP:</div>
              <div className="text-sm text-slate-300 flex items-start gap-2">
                <span>💡</span>
                <span>
                  Keep this window open on one side of your screen and {guide.name} on the other. 
                  Follow along step-by-step!
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  if (currentStep > 0) {
                    handleStepClick(currentStep - 1);
                  }
                }}
                disabled={currentStep === 0}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous
              </button>

              <div className="text-sm text-slate-400">
                Step {currentStep + 1} of {guide.steps.length}
              </div>

              <button
                onClick={() => {
                  if (currentStep < guide.steps.length - 1) {
                    handleStepClick(currentStep + 1);
                  }
                }}
                disabled={currentStep === guide.steps.length - 1}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="mt-4 bg-green-900/30 border border-green-500/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-green-400 mb-1">Pro Tips:</div>
                <ul className="text-xs text-green-200 space-y-1">
                  <li>• Take a screenshot of your API key before leaving the page</li>
                  <li>• Store it in a password manager for safekeeping</li>
                  <li>• Never share your API key publicly or in chat/email</li>
                  <li>• You can always generate a new key if you lose it</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
