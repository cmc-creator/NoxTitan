'use client';

import React, { useState } from 'react';
import { 
  Settings, Plus, Check, X, RefreshCw, Eye, EyeOff,
  Activity, AlertCircle, CheckCircle, Clock, BarChart,
  Download, Upload, Link2
} from 'lucide-react';

interface Integration {
  id: string;
  platform: 'SURVEYMONKEY' | 'MICROSOFT_FORMS' | 'GOOGLE_FORMS' | 'TYPEFORM';
  isConnected: boolean;
  lastSync?: Date;
  totalResponses: number;
  activeSurveys: number;
}

export default function SurveyIntegrationsPage() {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: '1',
      platform: 'SURVEYMONKEY',
      isConnected: false,
      totalResponses: 0,
      activeSurveys: 0,
    },
    {
      id: '2',
      platform: 'MICROSOFT_FORMS',
      isConnected: false,
      totalResponses: 0,
      activeSurveys: 0,
    },
    {
      id: '3',
      platform: 'GOOGLE_FORMS',
      isConnected: false,
      totalResponses: 0,
      activeSurveys: 0,
    },
    {
      id: '4',
      platform: 'TYPEFORM',
      isConnected: false,
      totalResponses: 0,
      activeSurveys: 0,
    },
  ]);

  const [showApiKey, setShowApiKey] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const platformInfo = {
    SURVEYMONKEY: {
      name: 'SurveyMonkey',
      icon: '📊',
      description: 'Connect your SurveyMonkey account for real-time survey data',
      setupInstructions: [
        'Log in to your SurveyMonkey account',
        'Go to Settings > API & Webhooks',
        'Generate a new API key',
        'Copy and paste the API key below',
        'Enable webhook notifications for real-time updates',
      ],
      webhookSetup: true,
      color: 'from-[#110F0B] 500 to-teal-500',
    },
    MICROSOFT_FORMS: {
      name: 'Microsoft Forms',
      icon: '📝',
      description: 'Sync Microsoft Forms responses automatically',
      setupInstructions: [
        'Sign in with your Microsoft 365 account',
        'Authorize NyxTitan to access Forms',
        'Select which forms to sync',
        'Configure sync frequency (real-time or scheduled)',
      ],
      webhookSetup: true,
      color: 'bg-[rgba(201,168,76,0.12)]',
    },
    GOOGLE_FORMS: {
      name: 'Google Forms',
      icon: '📋',
      description: 'Import Google Forms responses seamlessly',
      setupInstructions: [
        'Sign in with your Google Workspace account',
        'Grant permission to read Forms responses',
        'Enable Google Sheets integration for Forms',
        'Set up automatic sync schedule',
      ],
      webhookSetup: false,
      color: 'bg-[rgba(201,168,76,0.12)]',
    },
    TYPEFORM: {
      name: 'Typeform',
      icon: '✨',
      description: 'Beautiful forms with powerful analytics',
      setupInstructions: [
        'Log in to your Typeform account',
        'Navigate to Settings > Webhooks',
        'Create a new webhook pointing to NyxTitan',
        'Copy your API token',
        'Paste the token below',
      ],
      webhookSetup: true,
      color: 'bg-[rgba(201,168,76,0.12)]',
    },
  };

  const handleConnect = (platform: string) => {
    setSelectedPlatform(platform);
  };

  const handleDisconnect = (id: string) => {
    setIntegrations(integrations.map(int => 
      int.id === id ? { ...int, isConnected: false } : int
    ));
  };

  const handleSync = async (id: string) => {
    // Trigger manual sync
    alert('Syncing data...');
  };

  return (
    <div className="min-h-screen bg-[#070604] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-[#9E8F75] mb-2">Survey Integrations</h1>
          <p className="text-xl text-[#9E8F75]">Connect your survey platforms for real-time data sync</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-[#110F0B] rounded shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#9E8F75]">Connected</span>
              <CheckCircle className="w-5 h-5 text-[#C9A84C] 600" />
            </div>
            <div className="text-4xl font-bold text-[#9E8F75]">
              {integrations.filter(i => i.isConnected).length}
            </div>
            <div className="text-sm text-[#9E8F75] mt-1">of {integrations.length} platforms</div>
          </div>
          <div className="bg-[#110F0B] rounded shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#9E8F75]">Total Responses</span>
              <BarChart className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-4xl font-bold text-[#9E8F75]">
              {integrations.reduce((sum, i) => sum + i.totalResponses, 0)}
            </div>
            <div className="text-sm text-[#9E8F75] mt-1">All platforms</div>
          </div>
          <div className="bg-[#110F0B] rounded shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#9E8F75]">Active Surveys</span>
              <Activity className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-4xl font-bold text-[#9E8F75]">
              {integrations.reduce((sum, i) => sum + i.activeSurveys, 0)}
            </div>
            <div className="text-sm text-[#9E8F75] mt-1">Collecting data</div>
          </div>
          <div className="bg-[#110F0B] rounded shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#9E8F75]">Last Sync</span>
              <Clock className="w-5 h-5 text-[#C9A84C] 600" />
            </div>
            <div className="text-2xl font-bold text-[#9E8F75]">2 min</div>
            <div className="text-sm text-[#9E8F75] mt-1">ago</div>
          </div>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {integrations.map((integration) => {
            const info = platformInfo[integration.platform];
            return (
              <div
                key={integration.id}
                className="bg-[#110F0B] rounded shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 `${info.color}` rounded flex items-center justify-center text-4xl`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#9E8F75]">{info.name}</h3>
                      <p className="text-[#9E8F75]">{info.description}</p>
                    </div>
                  </div>
                  {integration.isConnected ? (
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#110F0B] 100 text-[#C9A84C] 700 rounded-full">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Connected</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 bg-[rgba(201,168,76,0.06)] text-[#9E8F75] rounded-full">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Not Connected</span>
                    </div>
                  )}
                </div>

                {integration.isConnected && (
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-[#110F0B] rounded-lg">
                    <div>
                      <div className="text-sm text-[#9E8F75] mb-1">Responses</div>
                      <div className="text-2xl font-bold text-[#9E8F75]">{integration.totalResponses}</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#9E8F75] mb-1">Active Surveys</div>
                      <div className="text-2xl font-bold text-[#9E8F75]">{integration.activeSurveys}</div>
                    </div>
                    {integration.lastSync && (
                      <div className="col-span-2">
                        <div className="text-sm text-[#9E8F75] mb-1">Last Synced</div>
                        <div className="text-sm font-medium text-[#9E8F75]">
                          {integration.lastSync.toLocaleString()}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex gap-3">
                  {integration.isConnected ? (
                    <>
                      <button
                        onClick={() => handleSync(integration.id)}
                        className="flex-1 px-4 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white rounded-lg flex items-center justify-center gap-2"
                      >
                        <RefreshCw className="w-5 h-5" />
                        Sync Now
                      </button>
                      <button
                        onClick={() => setSelectedPlatform(integration.platform)}
                        className="px-4 py-3 bg-[rgba(201,168,76,0.06)] text-[#C9A84C] rounded-lg hover:bg-gray-200"
                      >
                        <Settings className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDisconnect(integration.id)}
                        className="px-4 py-3 bg-[#110F0B] 100 text-[#9E8F75] 700 rounded-lg hover:bg-[#110F0B] 200"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleConnect(integration.platform)}
                      className="flex-1 px-4 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white rounded-lg flex items-center justify-center gap-2"
                    >
                      <Link2 className="w-5 h-5" />
                      Connect {info.name}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Setup Modal */}
        {selectedPlatform && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#110F0B] rounded shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-[#9E8F75]">
                    Connect {platformInfo[selectedPlatform as keyof typeof platformInfo].name}
                  </h2>
                  <button
                    onClick={() => setSelectedPlatform(null)}
                    className="text-[#9E8F75] hover:text-[#9E8F75]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[#9E8F75] mb-4">Setup Instructions</h3>
                  <ol className="space-y-3">
                    {platformInfo[selectedPlatform as keyof typeof platformInfo].setupInstructions.map((step, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-[#C9A84C]">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#C9A84C] mb-2">
                      API Key / Access Token
                    </label>
                    <div className="relative">
                      <input
                        type={showApiKey === selectedPlatform ? 'text' : 'password'}
                        placeholder="Enter your API key..."
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 pr-12"
                      />
                      <button
                        onClick={() => setShowApiKey(showApiKey === selectedPlatform ? null : selectedPlatform)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9E8F75] hover:text-[#9E8F75]"
                      >
                        {showApiKey === selectedPlatform ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {platformInfo[selectedPlatform as keyof typeof platformInfo].webhookSetup && (
                    <div>
                      <label className="block text-sm font-medium text-[#C9A84C] mb-2">
                        Webhook URL (for real-time updates)
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={`https://nox-titan.vercel.app/api/webhooks/${selectedPlatform.toLowerCase()}`}
                          readOnly
                          className="flex-1 px-4 py-3 border rounded-lg bg-[#110F0B]"
                        />
                        <button
                          onClick={() => navigator.clipboard.writeText(`https://nox-titan.vercel.app/api/webhooks/${selectedPlatform.toLowerCase()}`)}
                          className="px-4 py-3 bg-[rgba(201,168,76,0.06)] text-[#C9A84C] rounded-lg hover:bg-gray-200"
                        >
                          Copy
                        </button>
                      </div>
                      <p className="text-sm text-[#9E8F75] mt-2">
                        Add this webhook URL in your {platformInfo[selectedPlatform as keyof typeof platformInfo].name} settings to enable real-time sync
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-[#C9A84C] mb-2">
                      Sync Frequency
                    </label>
                    <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500">
                      <option value="realtime">Real-time (with webhook)</option>
                      <option value="5">Every 5 minutes</option>
                      <option value="15">Every 15 minutes</option>
                      <option value="30">Every 30 minutes</option>
                      <option value="60">Every hour</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => setSelectedPlatform(null)}
                    className="flex-1 px-6 py-3 bg-[rgba(201,168,76,0.06)] text-[#C9A84C] rounded-lg hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // Handle connection
                      setIntegrations(integrations.map(int =>
                        int.platform === selectedPlatform ? { ...int, isConnected: true, lastSync: new Date() } : int
                      ));
                      setSelectedPlatform(null);
                      alert('Integration connected successfully!');
                    }}
                    className="flex-1 px-6 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white rounded-lg flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    Connect Integration
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



