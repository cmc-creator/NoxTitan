'use client';

import { useState, useEffect } from 'react';
import { Store, Key, Zap, CheckCircle, AlertCircle, RefreshCw, Package, DollarSign, Settings, Bot } from 'lucide-react';
import SetupAssistant from '@/components/SetupAssistant';

interface MerchStore {
  id: string;
  name: string;
  platform: string;
  storeUrl?: string;
  isActive: boolean;
  lastSyncAt?: string;
}

const PLATFORMS = [
  {
    id: 'PRINTFUL',
    name: 'Printful',
    description: 'Print-on-demand merch (hoodies, t-shirts, mugs)',
    setupInstructions: 'Get your API key from Printful Dashboard → Settings → API',
    apiKeyLabel: 'Printful API Key',
    needsUrl: false,
    docsUrl: 'https://developers.printful.com/docs/',
  },
  {
    id: 'WIX',
    name: 'Wix Stores',
    description: 'Connect your Wix online store',
    setupInstructions: 'Get API key from Wix Dashboard → Settings → API Keys',
    apiKeyLabel: 'Wix API Key',
    needsUrl: true,
    urlLabel: 'Wix Store URL',
    docsUrl: 'https://dev.wix.com/api/rest/getting-started',
  },
  {
    id: 'SHOPIFY',
    name: 'Shopify',
    description: 'Connect your Shopify store',
    setupInstructions: 'Create a private app in Shopify Admin → Apps → Develop apps',
    apiKeyLabel: 'Shopify Access Token',
    needsUrl: true,
    urlLabel: 'Shopify Store URL (e.g., mystore.myshopify.com)',
    docsUrl: 'https://shopify.dev/api/admin-rest',
  },
  {
    id: 'WOOCOMMERCE',
    name: 'WooCommerce',
    description: 'Connect your WordPress + WooCommerce store',
    setupInstructions: 'Get REST API keys from WooCommerce → Settings → Advanced → REST API',
    apiKeyLabel: 'Consumer Key',
    apiSecretLabel: 'Consumer Secret',
    needsUrl: true,
    urlLabel: 'Store URL (e.g., https://mystore.com)',
    docsUrl: 'https://woocommerce.github.io/woocommerce-rest-api-docs/',
  },
  {
    id: 'SQUARE',
    name: 'Square',
    description: 'Connect your Square online store',
    setupInstructions: 'Get access token from Square Developer Dashboard',
    apiKeyLabel: 'Square Access Token',
    needsUrl: false,
    docsUrl: 'https://developer.squareup.com/docs',
  },
  {
    id: 'ETSY',
    name: 'Etsy',
    description: 'Connect your Etsy shop',
    setupInstructions: 'Create an app in Etsy Developer Portal',
    apiKeyLabel: 'Etsy API Key',
    apiSecretLabel: 'Etsy Shared Secret',
    needsUrl: true,
    urlLabel: 'Shop Name',
    docsUrl: 'https://www.etsy.com/developers/documentation',
  },
];

export default function MerchSetupPage() {
  const [stores, setStores] = useState<MerchStore[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    storeUrl: '',
    apiKey: '',
    apiSecret: '',
  });
  const [testing, setTesting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [syncing, setSyncing] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [step, setStep] = useState<'select' | 'configure' | 'sync'>('select');
  const [showAssistant, setShowAssistant] = useState(false);

  useEffect(() => {
    fetchStores();
  }, []);

  async function fetchStores() {
    try {
      const response = await fetch('/api/merch/stores');
      if (response.ok) {
        const data = await response.json();
        setStores(data);
      }
    } catch (error) {
      console.error('Failed to fetch stores:', error);
    }
  }

  async function testConnection() {
    setTesting(true);
    setTestResult(null);

    try {
      const response = await fetch('/api/merch/stores/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          platform: selectedPlatform,
          ...formData,
        }),
      });

      const result = await response.json();
      setTestResult(result);
    } catch (error) {
      setTestResult({
        success: false,
        message: 'Connection test failed. Check your credentials.',
      });
    } finally {
      setTesting(false);
    }
  }

  async function saveStore() {
    setSaving(true);

    try {
      const response = await fetch('/api/merch/stores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          platform: selectedPlatform,
          ...formData,
        }),
      });

      if (response.ok) {
        const newStore = await response.json();
        setStores([...stores, newStore]);
        setStep('sync');
        setTestResult(null);
      } else {
        alert('Failed to save store');
      }
    } catch (error) {
      alert('Failed to save store');
    } finally {
      setSaving(false);
    }
  }

  async function syncStore(storeId: string) {
    setSyncing(storeId);

    try {
      const response = await fetch('/api/merch/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ storeId }),
      });

      if (response.ok) {
        const result = await response.json();
        alert(`✅ Synced ${result.syncedItems} products successfully!`);
        fetchStores();
      } else {
        alert('Sync failed. Check your API credentials.');
      }
    } catch (error) {
      alert('Sync failed');
    } finally {
      setSyncing(null);
    }
  }

  function resetForm() {
    setSelectedPlatform('');
    setFormData({ name: '', storeUrl: '', apiKey: '', apiSecret: '' });
    setTestResult(null);
    setStep('select');
  }

  const platform = PLATFORMS.find(p => p.id === selectedPlatform);

  return (
    <div className="min-h-screen bg-[#070604] p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-6">
            <div className="absolute inset-0 bg-amber-600 blur-3xl opacity-50"></div>
            <Store className="w-20 h-20 text-amber-400 relative" />
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E8C060] to-[#C9A84C] mb-4">
            Merch Store Setup
          </h1>
          <p className="text-xl text-[#F0EBE0]/70">Connect your store in 3 easy steps</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[
            { id: 'select', label: '1. Select Platform', icon: Store },
            { id: 'configure', label: '2. Configure', icon: Key },
            { id: 'sync', label: '3. Sync Products', icon: RefreshCw },
          ].map((s, idx) => (
            <div key={s.id} className="flex items-center gap-4">
              <div
                className={`flex items-center gap-3 px-6 py-3 rounded ${
                  step === s.id
                    ? 'bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white'
                    : stores.length > 0 && idx < 2
                    ? 'bg-green-600 text-white'
                    : 'bg-[rgba(201,168,76,0.06)]/50 text-[#9E8F75]'
                }`}
              >
                <s.icon className="w-5 h-5" />
                <span className="font-bold">{s.label}</span>
              </div>
              {idx < 2 && <div className="w-8 h-0.5 bg-[#110F0B]"></div>}
            </div>
          ))}
        </div>

        {/* Step 1: Select Platform */}
        {step === 'select' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Choose Your Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PLATFORMS.map(p => (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedPlatform(p.id);
                    setFormData({ ...formData, name: `${p.name} Store` });
                    setStep('configure');
                  }}
                  className="bg-[rgba(201,168,76,0.06)]/50 border-2 border-[rgba(201,168,76,0.22)] hover:border-amber-500/40 rounded p-6 text-left transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {p.name}
                    </h3>
                    <Store className="w-8 h-8 text-amber-400" />
                  </div>
                  <p className="text-[#9E8F75] mb-4">{p.description}</p>
                  <div className="flex items-center gap-2 text-sm text-amber-400 font-semibold">
                    <span>Setup Guide Available</span>
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Configure */}
        {step === 'configure' && platform && (
          <div>
            {/* AI Assistant Toggle */}
            <div className="mb-6">
              <button
                onClick={() => setShowAssistant(!showAssistant)}
                className="w-full flex items-center justify-between bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white px-6 py-4 rounded font-bold transition-all"
              >
                <div className="flex items-center gap-3">
                  <Bot className="w-6 h-6" />
                  <span>{showAssistant ? 'Hide' : 'Show'} AI Setup Assistant</span>
                  <span className="px-3 py-1 bg-[#110F0B]/20 rounded-full text-xs">NEW!</span>
                </div>
                <span className="text-2xl">{showAssistant ? '▼' : '▶'}</span>
              </button>
              {!showAssistant && (
                <p className="text-center text-[#F0EBE0]/70 mt-2 text-sm">
                  💡 Click here for step-by-step guidance on finding your API key
                </p>
              )}
            </div>

            {/* AI Setup Assistant */}
            {showAssistant && (
              <div className="mb-6">
                <SetupAssistant
                  platform={selectedPlatform}
                  onApiKeyFound={(key) => {
                    setFormData({ ...formData, apiKey: key });
                    setShowAssistant(false);
                  }}
                />
              </div>
            )}

            <div className="bg-[rgba(201,168,76,0.06)]/50 border-2 border-[rgba(201,168,76,0.22)] rounded p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Configure {platform.name}</h2>
                <p className="text-[#9E8F75]">{platform.setupInstructions}</p>
              </div>
              <button
                onClick={resetForm}
                className="px-4 py-2 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white rounded-lg transition-colors"
              >
                Change Platform
              </button>
            </div>

            <div className="bg-blue-900/30 border border-amber-500/40/50 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-white font-bold mb-1">Setup Instructions</h4>
                  <p className="text-sm text-blue-200 mb-2">{platform.setupInstructions}</p>
                  <a
                    href={platform.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-400 hover:text-amber-400 underline"
                  >
                    View {platform.name} Documentation →
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-white font-bold mb-2">Store Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Company Merch Store"
                  className="w-full px-4 py-3 bg-[rgba(201,168,76,0.04)] text-white rounded-lg border border-[rgba(201,168,76,0.22)] focus:border-amber-500/40 focus:outline-none"
                />
              </div>

              {platform.needsUrl && (
                <div>
                  <label className="block text-white font-bold mb-2">{platform.urlLabel}</label>
                  <input
                    type="text"
                    value={formData.storeUrl}
                    onChange={e => setFormData({ ...formData, storeUrl: e.target.value })}
                    placeholder={platform.urlLabel}
                    className="w-full px-4 py-3 bg-[rgba(201,168,76,0.04)] text-white rounded-lg border border-[rgba(201,168,76,0.22)] focus:border-amber-500/40 focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-white font-bold mb-2">{platform.apiKeyLabel}</label>
                <input
                  type="password"
                  value={formData.apiKey}
                  onChange={e => setFormData({ ...formData, apiKey: e.target.value })}
                  placeholder="Paste your API key here"
                  className="w-full px-4 py-3 bg-[rgba(201,168,76,0.04)] text-white rounded-lg border border-[rgba(201,168,76,0.22)] focus:border-amber-500/40 focus:outline-none"
                />
              </div>

              {platform.apiSecretLabel && (
                <div>
                  <label className="block text-white font-bold mb-2">{platform.apiSecretLabel}</label>
                  <input
                    type="password"
                    value={formData.apiSecret}
                    onChange={e => setFormData({ ...formData, apiSecret: e.target.value })}
                    placeholder="Paste your API secret here"
                    className="w-full px-4 py-3 bg-[rgba(201,168,76,0.04)] text-white rounded-lg border border-[rgba(201,168,76,0.22)] focus:border-amber-500/40 focus:outline-none"
                  />
                </div>
              )}
            </div>

            {testResult && (
              <div
                className={`flex items-start gap-3 p-4 rounded-lg mb-6 ${
                  testResult.success
                    ? 'bg-green-900/30 border border-green-500/50'
                    : 'bg-red-900/30 border border-red-500/50'
                }`}
              >
                {testResult.success ? (
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                )}
                <div>
                  <h4 className={`font-bold ${testResult.success ? 'text-green-400' : 'text-red-400'}`}>
                    {testResult.success ? 'Connection Successful!' : 'Connection Failed'}
                  </h4>
                  <p className={`text-sm ${testResult.success ? 'text-green-200' : 'text-red-200'}`}>
                    {testResult.message}
                  </p>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={testConnection}
                disabled={!formData.apiKey || testing}
                className="flex-1 px-6 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <Key className="w-5 h-5" />
                {testing ? 'Testing Connection...' : 'Test Connection'}
              </button>
              <button
                onClick={saveStore}
                disabled={!testResult?.success || saving}
                className="flex-1 px-6 py-4 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white font-bold rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <CheckCircle className="w-5 h-5" />
                {saving ? 'Saving...' : 'Save & Continue'}
              </button>
            </div>
          </div>
        </div>
        )}

        {/* Step 3: Sync & Manage */}
        {(step === 'sync' || stores.length > 0) && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Connected Stores</h2>
            <div className="space-y-4">
              {stores.map(store => (
                <div key={store.id} className="bg-[rgba(201,168,76,0.06)]/50 border-2 border-[rgba(201,168,76,0.22)] rounded p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-amber-600 rounded">
                        <Store className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{store.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-[#9E8F75]">
                          <span className="flex items-center gap-1">
                            <Package className="w-4 h-4" />
                            {store.platform}
                          </span>
                          {store.lastSyncAt && (
                            <span>Last synced: {new Date(store.lastSyncAt).toLocaleString()}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          store.isActive ? 'bg-green-600 text-white' : 'bg-[rgba(201,168,76,0.08)] text-[#9E8F75]'
                        }`}
                      >
                        {store.isActive ? 'Active' : 'Inactive'}
                      </div>
                      <button
                        onClick={() => syncStore(store.id)}
                        disabled={syncing === store.id}
                        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2"
                      >
                        <RefreshCw className={`w-4 h-4 ${syncing === store.id ? 'animate-spin' : ''}`} />
                        {syncing === store.id ? 'Syncing...' : 'Sync Products'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep('select')}
              className="mt-6 w-full px-6 py-4 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white font-bold rounded transition-colors flex items-center justify-center gap-3"
            >
              <Store className="w-5 h-5" />
              Add Another Store
            </button>

            {stores.length > 0 && (
              <div className="mt-8 bg-green-900/30 border border-green-500/50 rounded p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Setup Complete! 🎉</h3>
                    <p className="text-green-200 mb-4">
                      Your store is connected. Products will appear in the Merch Store page.
                    </p>
                    <div className="space-y-2 text-sm text-green-200">
                      <p>✅ Store connected and syncing</p>
                      <p>✅ Products available for employee purchase</p>
                      <p>✅ Dual payment (Payroll Deduction + Guild XP) enabled</p>
                    </div>
                    <a
                      href="/merch-store"
                      className="inline-block mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
                    >
                      View Merch Store →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}



