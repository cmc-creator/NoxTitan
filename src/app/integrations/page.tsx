'use client';

import { useState } from 'react';
import { Link2, CheckCircle, AlertCircle, XCircle, RefreshCw, ExternalLink, Search, Filter } from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  category: 'payroll' | 'emr' | 'pos' | 'erp' | 'timeclock' | 'project' | 'accounting';
  provider: string;
  status: 'connected' | 'disconnected' | 'error';
  lastSync?: string;
  logo: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const integrations: Integration[] = [
    // Payroll Systems
    {
      id: '1',
      name: 'QuickBooks Payroll',
      category: 'payroll',
      provider: 'Intuit',
      status: 'connected',
      lastSync: '2025-12-28',
      logo: '💼',
      description: 'Sync hours and process payroll automatically',
      features: ['Auto-sync hours', 'Tax calculations', 'Direct deposit', 'W-2 generation'],
      popular: true
    },
    {
      id: '2',
      name: 'ADP Workforce Now',
      category: 'payroll',
      provider: 'ADP',
      status: 'disconnected',
      logo: '🔷',
      description: 'Enterprise payroll and HR management',
      features: ['Payroll processing', 'Benefits administration', 'Time tracking', 'Compliance'],
      popular: true
    },
    {
      id: '3',
      name: 'Gusto',
      category: 'payroll',
      provider: 'Gusto',
      status: 'disconnected',
      logo: '🚀',
      description: 'Modern payroll, benefits, and HR',
      features: ['Payroll', 'Health benefits', '401(k)', 'Workers comp'],
      popular: true
    },
    {
      id: '4',
      name: 'Paycom',
      category: 'payroll',
      provider: 'Paycom',
      status: 'disconnected',
      logo: '💰',
      description: 'Complete payroll & HR solution with time tracking',
      features: ['Payroll', 'Time tracking', 'Talent acquisition', 'HR management']
    },
    {
      id: '5',
      name: 'Paychex',
      category: 'payroll',
      provider: 'Paychex',
      status: 'disconnected',
      logo: '📊',
      description: 'Comprehensive payroll solutions',
      features: ['Payroll', 'Tax services', 'HR support', 'Retirement services']
    },
    {
      id: '6',
      name: 'Zenefits',
      category: 'payroll',
      provider: 'Zenefits',
      status: 'disconnected',
      logo: '🌟',
      description: 'All-in-one HR, payroll, and benefits platform',
      features: ['Payroll', 'Benefits admin', 'Time tracking', 'Onboarding'],
      popular: true
    },
    {
      id: '7',
      name: 'Namely',
      category: 'payroll',
      provider: 'Namely',
      status: 'disconnected',
      logo: '💼',
      description: 'Modern HR and payroll for mid-sized companies',
      features: ['Payroll', 'Benefits', 'Talent management', 'Time tracking']
    },
    {
      id: '8',
      name: 'Ceridian Dayforce',
      category: 'payroll',
      provider: 'Ceridian',
      status: 'disconnected',
      logo: '🔶',
      description: 'Cloud HCM platform with real-time payroll',
      features: ['Real-time payroll', 'Time tracking', 'Benefits', 'Workforce management'],
      popular: true
    },
    {
      id: '9',
      name: 'Rippling',
      category: 'payroll',
      provider: 'Rippling',
      status: 'disconnected',
      logo: '🌊',
      description: 'Unified workforce platform for payroll, HR, and IT',
      features: ['Global payroll', 'Benefits', 'Device management', 'App management'],
      popular: true
    },

    // EMR Systems (Healthcare)
    {
      id: '10',
      name: 'Epic Systems',
      category: 'emr',
      provider: 'Epic',
      status: 'disconnected',
      logo: '🏥',
      description: 'Sync staff schedules with Epic patient records and staffing modules',
      features: ['Staff scheduling', 'Patient census sync', 'Clinical workflows', 'Compliance tracking'],
      popular: true
    },
    {
      id: '11',
      name: 'Cerner',
      category: 'emr',
      provider: 'Oracle Health',
      status: 'disconnected',
      logo: '⚕️',
      description: 'Integrate scheduling with Cerner EMR and workforce solutions',
      features: ['Workforce scheduling', 'Clinical documentation', 'Patient care coordination', 'Analytics']
    },
    {
      id: '12',
      name: 'Meditech',
      category: 'emr',
      provider: 'Meditech',
      status: 'disconnected',
      logo: '🩺',
      description: 'Connect staff assignments to Meditech clinical systems',
      features: ['Staff management', 'Clinical workflows', 'Patient tracking', 'Regulatory compliance']
    },
    {
      id: '13',
      name: 'AllScripts',
      category: 'emr',
      provider: 'AllScripts',
      status: 'disconnected',
      logo: '📋',
      description: 'Sync scheduling with AllScripts EHR and practice management',
      features: ['Schedule coordination', 'Provider availability', 'Practice management', 'Billing integration']
    },
    {
      id: '14',
      name: 'athenahealth',
      category: 'emr',
      provider: 'athenahealth',
      status: 'disconnected',
      logo: '🔬',
      description: 'Integrate with athenaOne for seamless clinic operations',
      features: ['Provider scheduling', 'Patient appointments', 'Revenue cycle', 'Clinical workflows']
    },
    {
      id: '15',
      name: 'MedWorx',
      category: 'emr',
      provider: 'MedWorx',
      status: 'disconnected',
      logo: '💊',
      description: 'Healthcare staffing and credentialing management system',
      features: ['Staff credentialing', 'Compliance tracking', 'Provider scheduling', 'License management']
    },
    {
      id: '16',
      name: 'iCANotes',
      category: 'emr',
      provider: 'ICANotes',
      status: 'disconnected',
      logo: '🧠',
      description: 'Behavioral health EHR with provider scheduling and documentation',
      features: ['Therapist scheduling', 'Client appointments', 'Treatment planning', 'Progress notes'],
      popular: true
    },
    {
      id: '17',
      name: 'WorksHub',
      category: 'project',
      provider: 'WorksHub',
      status: 'disconnected',
      logo: '🔧',
      description: 'Workforce collaboration and project management platform',
      features: ['Team scheduling', 'Task management', 'Resource allocation', 'Time tracking']
    },

    // Point of Sale Systems
    {
      id: '20',
      name: 'Square POS',
      category: 'pos',
      provider: 'Square',
      status: 'disconnected',
      logo: '⬛',
      description: 'Sync labor hours with Square sales data and shift coverage',
      features: ['Sales tracking', 'Labor cost analysis', 'Shift scheduling', 'Team management'],
      popular: true
    },
    {
      id: '21',
      name: 'Toast POS',
      category: 'pos',
      provider: 'Toast',
      status: 'disconnected',
      logo: '🍞',
      description: 'Restaurant-specific POS integration with staff scheduling',
      features: ['Shift planning', 'Sales forecasting', 'Labor optimization', 'Tip management'],
      popular: true
    },
    {
      id: '22',
      name: 'Clover',
      category: 'pos',
      provider: 'Fiserv',
      status: 'disconnected',
      logo: '🍀',
      description: 'Connect Clover POS with employee scheduling and time tracking',
      features: ['Time clock', 'Sales reports', 'Inventory sync', 'Labor reports']
    },
    {
      id: '23',
      name: 'Shopify POS',
      category: 'pos',
      provider: 'Shopify',
      status: 'disconnected',
      logo: '🛍️',
      description: 'Retail POS integration for staff scheduling and sales tracking',
      features: ['Staff assignments', 'Sales tracking', 'Inventory management', 'Multi-location']
    },
    {
      id: '24',
      name: 'Lightspeed',
      category: 'pos',
      provider: 'Lightspeed',
      status: 'disconnected',
      logo: '⚡',
      description: 'Hospitality and retail POS with employee management',
      features: ['Employee clock-in', 'Sales analytics', 'Shift coverage', 'Commission tracking']
    },

    // ERP Systems
    {
      id: '30',
      name: 'SAP SuccessFactors',
      category: 'erp',
      provider: 'SAP',
      status: 'disconnected',
      logo: '🔷',
      description: 'Enterprise workforce planning and HR integration',
      features: ['Workforce planning', 'Time management', 'Payroll integration', 'Analytics'],
      popular: true
    },
    {
      id: '31',
      name: 'Oracle HCM',
      category: 'erp',
      provider: 'Oracle',
      status: 'disconnected',
      logo: '🔴',
      description: 'Cloud-based human capital management',
      features: ['Time & labor', 'Absence management', 'Scheduling', 'Workforce forecasting']
    },
    {
      id: '32',
      name: 'Microsoft Dynamics 365',
      category: 'erp',
      provider: 'Microsoft',
      status: 'disconnected',
      logo: '🟦',
      description: 'Enterprise resource planning with HR modules',
      features: ['Resource scheduling', 'Project management', 'Financial integration', 'Analytics']
    },
    {
      id: '33',
      name: 'Workday',
      category: 'erp',
      provider: 'Workday',
      status: 'disconnected',
      logo: '☁️',
      description: 'Cloud ERP for finance, HR, and planning',
      features: ['Time tracking', 'Absence management', 'Workforce planning', 'Payroll']
    },
    {
      id: '34',
      name: 'NetSuite',
      category: 'erp',
      provider: 'Oracle NetSuite',
      status: 'disconnected',
      logo: '🔵',
      description: 'Cloud business management suite with workforce features',
      features: ['Time tracking', 'Project management', 'Resource allocation', 'Financial reporting'],
      popular: true
    },

    // Time Clock Systems
    {
      id: '40',
      name: 'Kronos Workforce',
      category: 'timeclock',
      provider: 'UKG',
      status: 'disconnected',
      logo: '⏰',
      description: 'Advanced workforce management and time tracking',
      features: ['Biometric clocks', 'Mobile punch', 'Labor forecasting', 'Compliance'],
      popular: true
    },
    {
      id: '41',
      name: 'ADP Time Clock',
      category: 'timeclock',
      provider: 'ADP',
      status: 'disconnected',
      logo: '🕐',
      description: 'Hardware time clocks integrated with scheduling',
      features: ['Badge scanning', 'Facial recognition', 'GPS tracking', 'Real-time sync']
    },
    {
      id: '42',
      name: 'TimeClock Plus',
      category: 'timeclock',
      provider: 'TCP',
      status: 'disconnected',
      logo: '⏱️',
      description: 'Flexible time and attendance solutions',
      features: ['Multiple clock types', 'Mobile app', 'Geofencing', 'Automated alerts']
    },
    {
      id: '43',
      name: 'When I Work',
      category: 'timeclock',
      provider: 'When I Work',
      status: 'disconnected',
      logo: '📱',
      description: 'Simple employee scheduling and time tracking',
      features: ['Mobile clock-in', 'GPS verification', 'Schedule sync', 'Team messaging']
    },
    {
      id: '44',
      name: 'Deputy',
      category: 'timeclock',
      provider: 'Deputy',
      status: 'disconnected',
      logo: '👮',
      description: 'Smart workforce management platform',
      features: ['Auto-scheduling', 'Time tracking', 'Task management', 'Compliance alerts'],
      popular: true
    },
    {
      id: '45',
      name: '7shifts',
      category: 'timeclock',
      provider: '7shifts',
      status: 'disconnected',
      logo: '🍽️',
      description: 'Restaurant scheduling and labor optimization',
      features: ['Staff scheduling', 'Time tracking', 'Labor cost control', 'Team communication'],
      popular: true
    },
    {
      id: '46',
      name: 'Homebase',
      category: 'timeclock',
      provider: 'Homebase',
      status: 'disconnected',
      logo: '🏠',
      description: 'Team management for small businesses',
      features: ['Scheduling', 'Time clock', 'Team communication', 'Hiring tools']
    },

    // Project Management
    {
      id: '50',
      name: 'Monday.com',
      category: 'project',
      provider: 'Monday.com',
      status: 'disconnected',
      logo: '📅',
      description: 'Sync project tasks with team member schedules',
      features: ['Task assignment', 'Timeline sync', 'Resource allocation', 'Workload balancing']
    },
    {
      id: '51',
      name: 'Asana',
      category: 'project',
      provider: 'Asana',
      status: 'disconnected',
      logo: '✓',
      description: 'Coordinate project deadlines with staff availability',
      features: ['Project planning', 'Team capacity', 'Deadline tracking', 'Workflow automation']
    },
    {
      id: '52',
      name: 'Jira',
      category: 'project',
      provider: 'Atlassian',
      status: 'disconnected',
      logo: '🔵',
      description: 'Dev team scheduling aligned with sprint planning',
      features: ['Sprint planning', 'Developer availability', 'Issue tracking', 'Capacity reports']
    },

    // Accounting
    {
      id: '60',
      name: 'QuickBooks Online',
      category: 'accounting',
      provider: 'Intuit',
      status: 'connected',
      logo: '💚',
      description: 'Sync labor costs with accounting and invoicing',
      features: ['Labor cost tracking', 'Invoice generation', 'Expense management', 'Financial reports'],
      popular: true
    },
    {
      id: '61',
      name: 'Xero',
      category: 'accounting',
      provider: 'Xero',
      status: 'disconnected',
      logo: '🔵',
      description: 'Cloud accounting with labor cost integration',
      features: ['Labor tracking', 'Payroll sync', 'Expense tracking', 'Financial reporting']
    },
    {
      id: '62',
      name: 'FreshBooks',
      category: 'accounting',
      provider: 'FreshBooks',
      status: 'disconnected',
      logo: '🌿',
      description: 'Small business accounting and invoicing',
      features: ['Time tracking', 'Invoicing', 'Expense management', 'Project profitability']
    },
    {
      id: '63',
      name: 'Zoho Books',
      category: 'accounting',
      provider: 'Zoho',
      status: 'disconnected',
      logo: '📚',
      description: 'Comprehensive online accounting software',
      features: ['Payroll integration', 'Project tracking', 'Expense management', 'Financial reports']
    },
    {
      id: '64',
      name: 'Sage Intacct',
      category: 'accounting',
      provider: 'Sage',
      status: 'disconnected',
      logo: '🟢',
      description: 'Cloud financial management for growing businesses',
      features: ['Labor cost allocation', 'Multi-entity', 'Project accounting', 'Real-time reporting']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Integrations', icon: '🔗', count: integrations.length },
    { id: 'payroll', name: 'Payroll Systems', icon: '💰', count: integrations.filter(i => i.category === 'payroll').length },
    { id: 'emr', name: 'EMR/EHR (Healthcare)', icon: '🏥', count: integrations.filter(i => i.category === 'emr').length },
    { id: 'pos', name: 'Point of Sale', icon: '🛒', count: integrations.filter(i => i.category === 'pos').length },
    { id: 'erp', name: 'ERP Systems', icon: '🏢', count: integrations.filter(i => i.category === 'erp').length },
    { id: 'timeclock', name: 'Time Clocks', icon: '⏰', count: integrations.filter(i => i.category === 'timeclock').length },
    { id: 'project', name: 'Project Management', icon: '📋', count: integrations.filter(i => i.category === 'project').length },
    { id: 'accounting', name: 'Accounting', icon: '📊', count: integrations.filter(i => i.category === 'accounting').length },
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.provider.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const connectedCount = integrations.filter(i => i.status === 'connected').length;

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--page-bg)', color: 'var(--body-text)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3" style={{ color: 'var(--header-text)' }}>
            <Link2 className="h-10 w-10" style={{ color: 'var(--today-highlight)' }} />
            Integrations Hub
          </h1>
          <p className="text-lg opacity-80">
            Connect TeamPulse™ with your existing business systems for seamless workflow
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Connected Services</div>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>{connectedCount}</div>
            <div className="text-xs opacity-60">Active integrations</div>
          </div>

          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Available</div>
              <Link2 className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>{integrations.length}</div>
            <div className="text-xs opacity-60">Total integrations</div>
          </div>

          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Categories</div>
              <Filter className="h-5 w-5 text-purple-500" />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>{categories.length - 1}</div>
            <div className="text-xs opacity-60">Integration types</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-50" />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border"
              style={{ 
                background: 'var(--card-bg)', 
                borderColor: 'var(--border-color)',
                color: 'var(--body-text)'
              }}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                selectedCategory === category.id ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
              }`}
              style={{
                background: selectedCategory === category.id ? 'var(--primary-btn)' : 'var(--card-bg)',
                color: selectedCategory === category.id ? '#ffffff' : 'var(--body-text)',
              }}
            >
              <span>{category.icon}</span>
              {category.name}
              <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredIntegrations.map((integration) => (
            <div
              key={integration.id}
              className="p-6 rounded-lg border hover:border-opacity-50 transition-all"
              style={{ 
                borderColor: integration.status === 'connected' ? 'var(--today-highlight)' : 'var(--border-color)',
                background: integration.status === 'connected' ? 'rgba(59, 130, 246, 0.1)' : 'var(--card-bg)'
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-3xl">{integration.logo}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold truncate">{integration.name}</h3>
                    <p className="text-sm opacity-70">{integration.provider}</p>
                  </div>
                </div>
                {integration.status === 'connected' ? (
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                ) : integration.status === 'error' ? (
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                ) : null}
              </div>

              {/* Popular Badge */}
              {integration.popular && (
                <span className="inline-block px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded mb-2 font-semibold">
                  ⭐ Popular
                </span>
              )}

              {/* Description */}
              <p className="text-sm opacity-80 mb-3">{integration.description}</p>

              {/* Features */}
              <div className="mb-4">
                <p className="text-xs opacity-70 mb-2 font-semibold">Key Features:</p>
                <div className="flex flex-wrap gap-1">
                  {integration.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-white/10 rounded">
                      {feature}
                    </span>
                  ))}
                  {integration.features.length > 3 && (
                    <span className="text-xs px-2 py-1 opacity-70">
                      +{integration.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Last Sync */}
              {integration.lastSync && (
                <p className="text-xs opacity-60 mb-3">
                  Last synced: {new Date(integration.lastSync).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                {integration.status === 'connected' ? (
                  <>
                    <button className="flex-1 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Sync
                    </button>
                    <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg font-semibold transition-all">
                      Disconnect
                    </button>
                  </>
                ) : (
                  <>
                    <button className="flex-1 px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105"
                      style={{ background: 'var(--primary-btn)', color: '#ffffff' }}
                    >
                      Connect
                    </button>
                    <button className="px-4 py-2 opacity-70 hover:opacity-100 transition-all">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12">
            <XCircle className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold mb-2">No integrations found</h3>
            <p className="opacity-70">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
}
