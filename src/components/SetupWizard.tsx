'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Building2, Briefcase, Shield, Users, Settings as SettingsIcon, Palette, Rocket } from 'lucide-react';
import { getAllIndustries, IndustryTemplate } from '@/lib/industryTemplates';
import Confetti from './Confetti';

interface SetupWizardProps {
  onComplete: (data: OrganizationSetup) => void;
  onSkip?: () => void;
}

interface OrganizationSetup {
  name: string;
  industry: string;
  logo?: string;
  brandPrimaryColor: string;
  brandSecondaryColor: string;
  brandAccentColor: string;
  timezone: string;
  complianceSettings: any;
  featureFlags: any;
  departments: string[];
  positions: string[];
}

export default function SetupWizard({ onComplete, onSkip }: SetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const [setupData, setSetupData] = useState<OrganizationSetup>({
    name: '',
    industry: '',
    brandPrimaryColor: '#9333ea',
    brandSecondaryColor: '#ec4899',
    brandAccentColor: '#06b6d4',
    timezone: 'America/New_York',
    complianceSettings: {},
    featureFlags: {},
    departments: [],
    positions: [],
  });

  const industries = getAllIndustries();
  const selectedIndustry = industries.find(i => i.id === setupData.industry);

  const steps = [
    {
      id: 'welcome',
      title: 'Welcome to NyxTitan! 🎉',
      icon: <Rocket className="w-12 h-12 text-purple-600" />,
      description: "Let's get your organization set up in just a few minutes. This wizard will customize NyxTitan to perfectly fit your business needs.",
    },
    {
      id: 'company',
      title: 'Company Information',
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      description: "Tell us about your organization so we can personalize your experience.",
    },
    {
      id: 'industry',
      title: 'Industry Selection',
      icon: <Briefcase className="w-12 h-12 text-green-600" />,
      description: "Choose your industry to automatically configure compliance rules, departments, and features.",
    },
    {
      id: 'branding',
      title: 'Brand Customization',
      icon: <Palette className="w-12 h-12 text-pink-600" />,
      description: "Customize colors to match your company's brand. These will appear throughout the platform.",
    },
    {
      id: 'departments',
      title: 'Departments & Positions',
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      description: "Configure your organizational structure. You can always add more later.",
    },
    {
      id: 'features',
      title: 'Enable Features',
      icon: <SettingsIcon className="w-12 h-12 text-orange-600" />,
      description: "Choose which NyxTitan features your organization will use.",
    },
    {
      id: 'compliance',
      title: 'Compliance Settings',
      icon: <Shield className="w-12 h-12 text-red-600" />,
      description: "Configure labor laws and compliance rules for your region and industry.",
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowConfetti(true);
      setTimeout(() => {
        onComplete(setupData);
      }, 2000);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return true; // Welcome
      case 1: return setupData.name.length > 0; // Company info
      case 2: return setupData.industry.length > 0; // Industry
      case 3: return true; // Branding (has defaults)
      case 4: return setupData.departments.length > 0; // Departments
      case 5: return true; // Features
      case 6: return true; // Compliance
      default: return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center space-y-6 py-8">
            <div className="flex justify-center">
              {steps[currentStep].icon}
            </div>
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                {steps[currentStep].title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {steps[currentStep].description}
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What we'll set up:</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Company profile and branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Industry-specific compliance rules</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Departments and positions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Feature selection and configuration</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-500">⏱️ Takes about 5-7 minutes</p>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                {steps[currentStep].icon}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-lg text-gray-600">{steps[currentStep].description}</p>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={setupData.name}
                  onChange={(e) => setSetupData({ ...setupData, name: e.target.value })}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Timezone
                </label>
                <select
                  value={setupData.timezone}
                  onChange={(e) => setSetupData({ ...setupData, timezone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="America/Phoenix">Arizona (No DST)</option>
                  <option value="America/Anchorage">Alaska Time (AKT)</option>
                  <option value="Pacific/Honolulu">Hawaii Time (HT)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                {steps[currentStep].icon}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-lg text-gray-600">{steps[currentStep].description}</p>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => {
                    setSetupData({
                      ...setupData,
                      industry: industry.id,
                      complianceSettings: industry.compliance,
                      departments: industry.departments,
                      positions: industry.positions,
                      featureFlags: industry.features,
                    });
                  }}
                  className={`p-6 rounded-xl border-2 transition-all text-left hover:shadow-lg ${
                    setupData.industry === industry.id
                      ? 'border-purple-600 bg-purple-50 shadow-md'
                      : 'border-gray-300 hover:border-purple-400'
                  }`}
                >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                  {setupData.industry === industry.id && (
                    <div className="mt-3 flex items-center gap-2 text-purple-600">
                      <Check className="w-5 h-5" />
                      <span className="text-sm font-semibold">Selected</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                {steps[currentStep].icon}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-lg text-gray-600">{steps[currentStep].description}</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Primary Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={setupData.brandPrimaryColor}
                      onChange={(e) => setSetupData({ ...setupData, brandPrimaryColor: e.target.value })}
                      className="w-16 h-16 rounded-lg border-2 border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={setupData.brandPrimaryColor}
                      onChange={(e) => setSetupData({ ...setupData, brandPrimaryColor: e.target.value })}
                      className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                      placeholder="#9333ea"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Secondary Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={setupData.brandSecondaryColor}
                      onChange={(e) => setSetupData({ ...setupData, brandSecondaryColor: e.target.value })}
                      className="w-16 h-16 rounded-lg border-2 border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={setupData.brandSecondaryColor}
                      onChange={(e) => setSetupData({ ...setupData, brandSecondaryColor: e.target.value })}
                      className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                      placeholder="#ec4899"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Accent Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={setupData.brandAccentColor}
                      onChange={(e) => setSetupData({ ...setupData, brandAccentColor: e.target.value })}
                      className="w-16 h-16 rounded-lg border-2 border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={setupData.brandAccentColor}
                      onChange={(e) => setSetupData({ ...setupData, brandAccentColor: e.target.value })}
                      className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                      placeholder="#06b6d4"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-300">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Preview</h3>
                <div className="space-y-3">
                  <div
                    className="h-16 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                    style={{ background: setupData.brandPrimaryColor }}
                  >
                    Primary Color
                  </div>
                  <div
                    className="h-16 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                    style={{ background: setupData.brandSecondaryColor }}
                  >
                    Secondary Color
                  </div>
                  <div
                    className="h-16 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                    style={{ background: setupData.brandAccentColor }}
                  >
                    Accent Color
                  </div>
                  <div
                    className="h-20 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                    style={{ 
                      background: `linear-gradient(to right, ${setupData.brandPrimaryColor}, ${setupData.brandSecondaryColor}, ${setupData.brandAccentColor})` 
                    }}
                  >
                    Combined Gradient
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                {steps[currentStep].icon}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-lg text-gray-600">{steps[currentStep].description}</p>
            </div>

            {selectedIndustry && (
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                  <p className="text-sm text-purple-900">
                    <strong>✨ Pre-configured for {selectedIndustry.name}!</strong> These departments and positions are based on industry standards. You can customize them now or later.
                  </p>
                </div>

                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    Departments ({setupData.departments.length})
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {setupData.departments.map((dept, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg border border-blue-300 flex items-center gap-2"
                      >
                        <span>{dept}</span>
                        <button
                          onClick={() => {
                            const newDepts = setupData.departments.filter((_, i) => i !== index);
                            setSetupData({ ...setupData, departments: newDepts });
                          }}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    Positions ({setupData.positions.length})
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {setupData.positions.map((pos, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 bg-green-100 text-green-900 rounded-lg border border-green-300 flex items-center gap-2"
                      >
                        <span>{pos}</span>
                        <button
                          onClick={() => {
                            const newPos = setupData.positions.filter((_, i) => i !== index);
                            setSetupData({ ...setupData, positions: newPos });
                          }}
                          className="text-green-600 hover:text-green-900"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                {steps[currentStep].icon}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-lg text-gray-600">{steps[currentStep].description}</p>
            </div>

            {selectedIndustry && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200 mb-6">
                  <p className="text-sm text-purple-900">
                    <strong>✨ Recommended for {selectedIndustry.name}!</strong> These features are pre-selected based on your industry needs.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(setupData.featureFlags).map(([feature, enabled]) => (
                    <label
                      key={feature}
                      className="flex items-start gap-3 p-4 rounded-lg border-2 border-gray-300 cursor-pointer hover:border-purple-400 transition-all"
                    >
                      <input
                        type="checkbox"
                        checked={enabled as boolean}
                        onChange={(e) => {
                          setSetupData({
                            ...setupData,
                            featureFlags: {
                              ...setupData.featureFlags,
                              [feature]: e.target.checked,
                            },
                          });
                        }}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500 mt-0.5"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 capitalize">
                          {feature.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {getFeatureDescription(feature)}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                {steps[currentStep].icon}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-lg text-gray-600">{steps[currentStep].description}</p>
            </div>

            {selectedIndustry && setupData.complianceSettings && (
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                  <p className="text-sm text-purple-900">
                    <strong>✨ Auto-configured for {selectedIndustry.name}!</strong> These compliance rules match {selectedIndustry.name} industry standards and federal/state labor laws.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-gray-300 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Break Rules</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Meal Break After (hours)
                        </label>
                        <input
                          type="number"
                          value={setupData.complianceSettings.breakRules?.mealBreakAfterHours || 5}
                          onChange={(e) => {
                            setSetupData({
                              ...setupData,
                              complianceSettings: {
                                ...setupData.complianceSettings,
                                breakRules: {
                                  ...setupData.complianceSettings.breakRules,
                                  mealBreakAfterHours: parseInt(e.target.value),
                                },
                              },
                            });
                          }}
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Meal Break Duration (minutes)
                        </label>
                        <input
                          type="number"
                          value={setupData.complianceSettings.breakRules?.mealBreakDuration || 30}
                          onChange={(e) => {
                            setSetupData({
                              ...setupData,
                              complianceSettings: {
                                ...setupData.complianceSettings,
                                breakRules: {
                                  ...setupData.complianceSettings.breakRules,
                                  mealBreakDuration: parseInt(e.target.value),
                                },
                              },
                            });
                          }}
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Rest Break Interval (hours)
                        </label>
                        <input
                          type="number"
                          value={setupData.complianceSettings.breakRules?.restBreakInterval || 4}
                          onChange={(e) => {
                            setSetupData({
                              ...setupData,
                              complianceSettings: {
                                ...setupData.complianceSettings,
                                breakRules: {
                                  ...setupData.complianceSettings.breakRules,
                                  restBreakInterval: parseInt(e.target.value),
                                },
                              },
                            });
                          }}
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Rest Break Duration (minutes)
                        </label>
                        <input
                          type="number"
                          value={setupData.complianceSettings.breakRules?.restBreakDuration || 15}
                          onChange={(e) => {
                            setSetupData({
                              ...setupData,
                              complianceSettings: {
                                ...setupData.complianceSettings,
                                breakRules: {
                                  ...setupData.complianceSettings.breakRules,
                                  restBreakDuration: parseInt(e.target.value),
                                },
                              },
                            });
                          }}
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Overtime Rules</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {setupData.complianceSettings.overtimeRules?.dailyThreshold && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Daily Overtime After (hours)
                          </label>
                          <input
                            type="number"
                            value={setupData.complianceSettings.overtimeRules.dailyThreshold}
                            onChange={(e) => {
                              setSetupData({
                                ...setupData,
                                complianceSettings: {
                                  ...setupData.complianceSettings,
                                  overtimeRules: {
                                    ...setupData.complianceSettings.overtimeRules,
                                    dailyThreshold: parseInt(e.target.value),
                                  },
                                },
                              });
                            }}
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Weekly Overtime After (hours)
                        </label>
                        <input
                          type="number"
                          value={setupData.complianceSettings.overtimeRules?.weeklyThreshold || 40}
                          onChange={(e) => {
                            setSetupData({
                              ...setupData,
                              complianceSettings: {
                                ...setupData.complianceSettings,
                                overtimeRules: {
                                  ...setupData.complianceSettings.overtimeRules,
                                  weeklyThreshold: parseInt(e.target.value),
                                },
                              },
                            });
                          }}
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Overtime Rate Multiplier
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={setupData.complianceSettings.overtimeRules?.overtimeRate || 1.5}
                          onChange={(e) => {
                            setSetupData({
                              ...setupData,
                              complianceSettings: {
                                ...setupData.complianceSettings,
                                overtimeRules: {
                                  ...setupData.complianceSettings.overtimeRules,
                                  overtimeRate: parseFloat(e.target.value),
                                },
                              },
                            });
                          }}
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Required Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {setupData.complianceSettings.requiredCertifications?.map((cert: string, index: number) => (
                        <div
                          key={index}
                          className="px-3 py-1 bg-red-100 text-red-900 rounded-lg border border-red-300 text-sm"
                        >
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const getFeatureDescription = (feature: string): string => {
    const descriptions: Record<string, string> = {
      payroll: 'Process payroll, track hours, calculate wages and deductions',
      timeClock: 'Employee time tracking with punch in/out, geofencing, and hardware integration',
      guild: 'Gamification system with quests, achievements, and rewards',
      oracle: 'Predictive AI analytics for staffing forecasts and cost optimization',
      compliance: 'OSHA, CMS, Joint Commission tracking and automated alerts',
      learning: 'Learning Management System with training modules and certifications',
      assetVault: 'Equipment and asset tracking, maintenance schedules, inventory management',
      sentinel: 'Visitor management, access control, and security monitoring',
    };
    return descriptions[feature] || 'Enable this feature for your organization';
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 z-50 overflow-y-auto">
      {showConfetti && <Confetti />}
      
      <div className="min-h-screen p-8">
        {/* Progress Bar */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-full h-3 mb-4">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-white text-sm px-2">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-10 min-h-[700px]">
            {renderStepContent()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6 gap-4">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="px-8 py-4 bg-white/20 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-all flex items-center gap-2 text-lg"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            {onSkip && currentStep === 0 && (
              <button
                onClick={onSkip}
                className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all text-lg"
              >
                Skip Setup
              </button>
            )}

            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-pink-700 transition-all flex items-center gap-2 ml-auto text-lg"
            >
              <span>{currentStep === steps.length - 1 ? 'Complete Setup' : 'Next'}</span>
              {currentStep === steps.length - 1 ? (
                <Check className="w-6 h-6" />
              ) : (
                <ChevronRight className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
