'use client';

import { useState } from 'react';
import { 
  Settings, 
  Calendar,
  Clock,
  Users,
  Shield,
  Save,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  ChevronDown,
  Plus,
  Trash2,
  Eye,
  Info,
  Briefcase,
  Heart,
  FileText,
  Bell
} from 'lucide-react';

interface PTOPolicy {
  accrualRate: number; // hours per pay period
  accrualFrequency: 'weekly' | 'biweekly' | 'monthly' | 'annual';
  maxAccrual: number; // maximum hours that can be accrued
  maxCarryover: number; // hours that can roll over to next year
  probationPeriod: number; // days before eligible
  minimumIncrement: number; // minimum hours that can be requested (e.g., 0.5, 1, 4)
  requireAdvanceNotice: number; // days of advance notice required
  blackoutDates: string[]; // dates when PTO cannot be taken
  approvalRequired: boolean;
  approvalChain: string[]; // roles that must approve (e.g., ['Manager', 'Department Head'])
}

interface SickLeavePolicy {
  accrualRate: number;
  accrualFrequency: 'weekly' | 'biweekly' | 'monthly' | 'annual';
  maxAccrual: number;
  carryoverAllowed: boolean;
  carryoverMax: number;
  requireDocumentation: boolean; // doctor's note required
  documentationThreshold: number; // consecutive days before documentation required
  approvalRequired: boolean;
  allowNegativeBalance: boolean;
  negativeBalanceLimit: number;
}

interface FMLAPolicy {
  eligibilityMonths: number; // months of employment required
  eligibilityHours: number; // hours worked in last 12 months required
  maxWeeksPerYear: number; // typically 12 weeks
  requireCertification: boolean;
  intermittentAllowed: boolean;
  jobProtectionGuaranteed: boolean;
  benefitsContinued: boolean;
}

interface BereavementPolicy {
  eligibleRelationships: { relationship: string; days: number }[];
  requireDocumentation: boolean;
  paid: boolean;
}

interface HolidayCalendar {
  holidays: { date: string; name: string; paid: boolean }[];
  floatingHolidays: number; // number of floating holidays per year
  eligibilityRequirement: string; // e.g., "90 days of employment"
}

export default function PoliciesPage() {
  const [hasChanges, setHasChanges] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [activeTab, setActiveTab] = useState<'pto' | 'sick' | 'fmla' | 'bereavement' | 'holidays'>('pto');

  // PTO Policy State
  const [ptoPolicy, setPtoPolicy] = useState<PTOPolicy>({
    accrualRate: 6.67,
    accrualFrequency: 'biweekly',
    maxAccrual: 240,
    maxCarryover: 80,
    probationPeriod: 90,
    minimumIncrement: 4,
    requireAdvanceNotice: 14,
    blackoutDates: ['2026-12-24', '2026-12-25', '2026-12-31'],
    approvalRequired: true,
    approvalChain: ['Direct Manager', 'Department Head']
  });

  // Sick Leave Policy State
  const [sickPolicy, setSickPolicy] = useState<SickLeavePolicy>({
    accrualRate: 4,
    accrualFrequency: 'biweekly',
    maxAccrual: 160,
    carryoverAllowed: true,
    carryoverMax: 40,
    requireDocumentation: true,
    documentationThreshold: 3,
    approvalRequired: false,
    allowNegativeBalance: true,
    negativeBalanceLimit: -16
  });

  // FMLA Policy State
  const [fmlaPolicy, setFmlaPolicy] = useState<FMLAPolicy>({
    eligibilityMonths: 12,
    eligibilityHours: 1250,
    maxWeeksPerYear: 12,
    requireCertification: true,
    intermittentAllowed: true,
    jobProtectionGuaranteed: true,
    benefitsContinued: true
  });

  // Bereavement Policy State
  const [bereavementPolicy, setBereavementPolicy] = useState<BereavementPolicy>({
    eligibleRelationships: [
      { relationship: 'Spouse/Partner', days: 5 },
      { relationship: 'Parent', days: 5 },
      { relationship: 'Child', days: 5 },
      { relationship: 'Sibling', days: 3 },
      { relationship: 'Grandparent', days: 3 },
      { relationship: 'Grandchild', days: 3 }
    ],
    requireDocumentation: true,
    paid: true
  });

  // Holiday Calendar State
  const [holidayCalendar, setHolidayCalendar] = useState<HolidayCalendar>({
    holidays: [
      { date: '2026-01-01', name: 'New Year\'s Day', paid: true },
      { date: '2026-05-25', name: 'Memorial Day', paid: true },
      { date: '2026-07-04', name: 'Independence Day', paid: true },
      { date: '2026-09-07', name: 'Labor Day', paid: true },
      { date: '2026-11-26', name: 'Thanksgiving Day', paid: true },
      { date: '2026-11-27', name: 'Day After Thanksgiving', paid: true },
      { date: '2026-12-25', name: 'Christmas Day', paid: true }
    ],
    floatingHolidays: 2,
    eligibilityRequirement: '90 days of employment'
  });

  const handleSave = () => {
    // In real implementation, this would save to database and trigger system-wide updates
    alert('Policy changes saved! All modules will now use the updated policies.');
    setHasChanges(false);
  };

  const handleReset = () => {
    if (confirm('Reset all policies to default values? This cannot be undone.')) {
      // Reset logic here
      setHasChanges(false);
    }
  };

  const calculateAnnualPTO = () => {
    const periodsPerYear = ptoPolicy.accrualFrequency === 'weekly' ? 52 :
                           ptoPolicy.accrualFrequency === 'biweekly' ? 26 :
                           ptoPolicy.accrualFrequency === 'monthly' ? 12 : 1;
    return ptoPolicy.accrualRate * periodsPerYear;
  };

  const calculateAnnualSick = () => {
    const periodsPerYear = sickPolicy.accrualFrequency === 'weekly' ? 52 :
                           sickPolicy.accrualFrequency === 'biweekly' ? 26 :
                           sickPolicy.accrualFrequency === 'monthly' ? 12 : 1;
    return sickPolicy.accrualRate * periodsPerYear;
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Policy Configuration Center</h1>
            <p className="text-gray-600">Configure PTO, sick leave, FMLA, and other time-off policies. Changes apply system-wide.</p>
          </div>
          <div className="flex gap-3">
            {hasChanges && (
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-all flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Reset
              </button>
            )}
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg font-medium transition-all flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              {showPreview ? 'Hide' : 'Show'} Preview
            </button>
            <button
              onClick={handleSave}
              disabled={!hasChanges}
              className={`px-6 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                hasChanges
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-8">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-900 mb-1">Policy Changes Affect Entire System</h3>
            <p className="text-sm text-yellow-800">
              Changes to policies will update accrual calculations, eligibility requirements, and approval workflows
              across all modules including Time-Off, Payroll, HR Management, and Reporting. Always review the preview
              before saving. Consider setting an effective date for future changes.
            </p>
          </div>
        </div>
      </div>

      {/* Policy Tabs */}
      <div className="mb-6 flex gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('pto')}
          className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === 'pto'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          <Calendar className="w-5 h-5 inline mr-2" />
          PTO Policy
        </button>
        <button
          onClick={() => setActiveTab('sick')}
          className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === 'sick'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          <Heart className="w-5 h-5 inline mr-2" />
          Sick Leave
        </button>
        <button
          onClick={() => setActiveTab('fmla')}
          className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === 'fmla'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          <Shield className="w-5 h-5 inline mr-2" />
          FMLA
        </button>
        <button
          onClick={() => setActiveTab('bereavement')}
          className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === 'bereavement'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          <FileText className="w-5 h-5 inline mr-2" />
          Bereavement
        </button>
        <button
          onClick={() => setActiveTab('holidays')}
          className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === 'holidays'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          <Bell className="w-5 h-5 inline mr-2" />
          Holiday Calendar
        </button>
      </div>

      {/* PTO Policy Configuration */}
      {activeTab === 'pto' && (
        <div className="space-y-6">
          {/* Accrual Settings */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              PTO Accrual Settings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Accrual Rate (hours per period)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={ptoPolicy.accrualRate}
                  onChange={(e) => {
                    setPtoPolicy({ ...ptoPolicy, accrualRate: parseFloat(e.target.value) });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Annual total: {calculateAnnualPTO().toFixed(1)} hours</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Accrual Frequency
                </label>
                <select
                  value={ptoPolicy.accrualFrequency}
                  onChange={(e) => {
                    setPtoPolicy({ ...ptoPolicy, accrualFrequency: e.target.value as any });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="annual">Annual</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Accrual (hours)
                </label>
                <input
                  type="number"
                  value={ptoPolicy.maxAccrual}
                  onChange={(e) => {
                    setPtoPolicy({ ...ptoPolicy, maxAccrual: parseInt(e.target.value) });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Accrual stops when this limit is reached</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Carryover Limit (hours)
                </label>
                <input
                  type="number"
                  value={ptoPolicy.maxCarryover}
                  onChange={(e) => {
                    setPtoPolicy({ ...ptoPolicy, maxCarryover: parseInt(e.target.value) });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Maximum hours that roll over to next year</p>
              </div>
            </div>
          </div>

          {/* Eligibility & Usage Rules */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              Eligibility & Usage Rules
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Probation Period (days)
                </label>
                <input
                  type="number"
                  value={ptoPolicy.probationPeriod}
                  onChange={(e) => {
                    setPtoPolicy({ ...ptoPolicy, probationPeriod: parseInt(e.target.value) });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Days before eligible to use PTO</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Request Increment (hours)
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={ptoPolicy.minimumIncrement}
                  onChange={(e) => {
                    setPtoPolicy({ ...ptoPolicy, minimumIncrement: parseFloat(e.target.value) });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Smallest unit of PTO that can be requested</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Advance Notice Required (days)
                </label>
                <input
                  type="number"
                  value={ptoPolicy.requireAdvanceNotice}
                  onChange={(e) => {
                    setPtoPolicy({ ...ptoPolicy, requireAdvanceNotice: parseInt(e.target.value) });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Days in advance PTO must be requested</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Approval Required
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={ptoPolicy.approvalRequired}
                      onChange={() => {
                        setPtoPolicy({ ...ptoPolicy, approvalRequired: true });
                        setHasChanges(true);
                      }}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={!ptoPolicy.approvalRequired}
                      onChange={() => {
                        setPtoPolicy({ ...ptoPolicy, approvalRequired: false });
                        setHasChanges(true);
                      }}
                      className="mr-2"
                    />
                    No (Auto-approve)
                  </label>
                </div>
              </div>
            </div>

            {/* Approval Chain */}
            {ptoPolicy.approvalRequired && (
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Approval Chain
                </label>
                <div className="space-y-2">
                  {ptoPolicy.approvalChain.map((role, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {index + 1}. {role}
                      </span>
                      <button
                        onClick={() => {
                          const newChain = ptoPolicy.approvalChain.filter((_, i) => i !== index);
                          setPtoPolicy({ ...ptoPolicy, approvalChain: newChain });
                          setHasChanges(true);
                        }}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const role = prompt('Enter role name (e.g., "VP of Operations"):');
                      if (role) {
                        setPtoPolicy({ ...ptoPolicy, approvalChain: [...ptoPolicy.approvalChain, role] });
                        setHasChanges(true);
                      }
                    }}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Approval Level
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Blackout Dates */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              Blackout Dates
            </h2>
            <p className="text-sm text-gray-600 mb-4">Dates when PTO requests are not allowed</p>
            
            <div className="space-y-2">
              {ptoPolicy.blackoutDates.map((date, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => {
                      const newDates = [...ptoPolicy.blackoutDates];
                      newDates[index] = e.target.value;
                      setPtoPolicy({ ...ptoPolicy, blackoutDates: newDates });
                      setHasChanges(true);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <button
                    onClick={() => {
                      const newDates = ptoPolicy.blackoutDates.filter((_, i) => i !== index);
                      setPtoPolicy({ ...ptoPolicy, blackoutDates: newDates });
                      setHasChanges(true);
                    }}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => {
                  setPtoPolicy({ ...ptoPolicy, blackoutDates: [...ptoPolicy.blackoutDates, ''] });
                  setHasChanges(true);
                }}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 mt-2"
              >
                <Plus className="w-4 h-4" />
                Add Blackout Date
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sick Leave Policy Configuration */}
      {activeTab === 'sick' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-600" />
              Sick Leave Accrual Settings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Accrual Rate (hours per period)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={sickPolicy.accrualRate}
                  onChange={(e) => {
                    setSickPolicy({ ...sickPolicy, accrualRate: parseFloat(e.target.value) });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Annual total: {calculateAnnualSick().toFixed(1)} hours</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Accrual Frequency
                </label>
                <select
                  value={sickPolicy.accrualFrequency}
                  onChange={(e) => {
                    setSickPolicy({ ...sickPolicy, accrualFrequency: e.target.value as any });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="annual">Annual</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Accrual (hours)
                </label>
                <input
                  type="number"
                  value={sickPolicy.maxAccrual}
                  onChange={(e) => {
                    setSickPolicy({ ...sickPolicy, maxAccrual: parseInt(e.target.value) });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Carryover (hours)
                </label>
                <input
                  type="number"
                  value={sickPolicy.carryoverMax}
                  disabled={!sickPolicy.carryoverAllowed}
                  onChange={(e) => {
                    setSickPolicy({ ...sickPolicy, carryoverMax: parseInt(e.target.value) });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                />
                <label className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    checked={sickPolicy.carryoverAllowed}
                    onChange={(e) => {
                      setSickPolicy({ ...sickPolicy, carryoverAllowed: e.target.checked });
                      setHasChanges(true);
                    }}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-600">Allow carryover</span>
                </label>
              </div>
            </div>
          </div>

          {/* Documentation Requirements */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600" />
              Documentation & Approval
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Require Documentation (Doctor's Note)
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={sickPolicy.requireDocumentation}
                      onChange={() => {
                        setSickPolicy({ ...sickPolicy, requireDocumentation: true });
                        setHasChanges(true);
                      }}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={!sickPolicy.requireDocumentation}
                      onChange={() => {
                        setSickPolicy({ ...sickPolicy, requireDocumentation: false });
                        setHasChanges(true);
                      }}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>

              {sickPolicy.requireDocumentation && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Documentation After (consecutive days)
                  </label>
                  <input
                    type="number"
                    value={sickPolicy.documentationThreshold}
                    onChange={(e) => {
                      setSickPolicy({ ...sickPolicy, documentationThreshold: parseInt(e.target.value) });
                      setHasChanges(true);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Doctor's note required after this many days</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Approval Required
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={sickPolicy.approvalRequired}
                      onChange={() => {
                        setSickPolicy({ ...sickPolicy, approvalRequired: true });
                        setHasChanges(true);
                      }}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={!sickPolicy.approvalRequired}
                      onChange={() => {
                        setSickPolicy({ ...sickPolicy, approvalRequired: false });
                        setHasChanges(true);
                      }}
                      className="mr-2"
                    />
                    No (Call-in only)
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Allow Negative Balance
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={sickPolicy.allowNegativeBalance}
                      onChange={() => {
                        setSickPolicy({ ...sickPolicy, allowNegativeBalance: true });
                        setHasChanges(true);
                      }}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={!sickPolicy.allowNegativeBalance}
                      onChange={() => {
                        setSickPolicy({ ...sickPolicy, allowNegativeBalance: false });
                        setHasChanges(true);
                      }}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>

              {sickPolicy.allowNegativeBalance && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Negative Balance Limit (hours)
                  </label>
                  <input
                    type="number"
                    value={sickPolicy.negativeBalanceLimit}
                    onChange={(e) => {
                      setSickPolicy({ ...sickPolicy, negativeBalanceLimit: parseInt(e.target.value) });
                      setHasChanges(true);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Maximum negative hours allowed (e.g., -16)</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FMLA Policy Configuration */}
      {activeTab === 'fmla' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              FMLA Eligibility & Entitlement
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Duration Required (months)
                </label>
                <input
                  type="number"
                  value={fmlaPolicy.eligibilityMonths}
                  onChange={(e) => {
                    setFmlaPolicy({ ...fmlaPolicy, eligibilityMonths: parseInt(e.target.value) });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Federal requirement: 12 months</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hours Worked Required (last 12 months)
                </label>
                <input
                  type="number"
                  value={fmlaPolicy.eligibilityHours}
                  onChange={(e) => {
                    setFmlaPolicy({ ...fmlaPolicy, eligibilityHours: parseInt(e.target.value) });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Federal requirement: 1,250 hours</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Weeks Per Year
                </label>
                <input
                  type="number"
                  value={fmlaPolicy.maxWeeksPerYear}
                  onChange={(e) => {
                    setFmlaPolicy({ ...fmlaPolicy, maxWeeksPerYear: parseInt(e.target.value) });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Federal requirement: 12 weeks</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={fmlaPolicy.requireCertification}
                  onChange={(e) => {
                    setFmlaPolicy({ ...fmlaPolicy, requireCertification: e.target.checked });
                    setHasChanges(true);
                  }}
                  className="mr-3"
                />
                <span className="text-sm font-medium text-gray-700">Require medical certification</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={fmlaPolicy.intermittentAllowed}
                  onChange={(e) => {
                    setFmlaPolicy({ ...fmlaPolicy, intermittentAllowed: e.target.checked });
                    setHasChanges(true);
                  }}
                  className="mr-3"
                />
                <span className="text-sm font-medium text-gray-700">Allow intermittent FMLA leave</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={fmlaPolicy.jobProtectionGuaranteed}
                  onChange={(e) => {
                    setFmlaPolicy({ ...fmlaPolicy, jobProtectionGuaranteed: e.target.checked });
                    setHasChanges(true);
                  }}
                  className="mr-3"
                />
                <span className="text-sm font-medium text-gray-700">Job protection guaranteed (return to same/equivalent position)</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={fmlaPolicy.benefitsContinued}
                  onChange={(e) => {
                    setFmlaPolicy({ ...fmlaPolicy, benefitsContinued: e.target.checked });
                    setHasChanges(true);
                  }}
                  className="mr-3"
                />
                <span className="text-sm font-medium text-gray-700">Continue health benefits during leave</span>
              </label>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">FMLA Compliance Note</h3>
                <p className="text-sm text-blue-800">
                  FMLA is a federal law with specific requirements. These settings should align with DOL regulations.
                  Consult with legal counsel before modifying FMLA policies. Non-compliance can result in penalties.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bereavement Policy Configuration */}
      {activeTab === 'bereavement' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-gray-600" />
              Bereavement Leave Eligibility
            </h2>
            
            <div className="space-y-4">
              {bereavementPolicy.eligibleRelationships.map((rel, index) => (
                <div key={index} className="flex items-center gap-4">
                  <input
                    type="text"
                    value={rel.relationship}
                    onChange={(e) => {
                      const newRels = [...bereavementPolicy.eligibleRelationships];
                      newRels[index].relationship = e.target.value;
                      setBereavementPolicy({ ...bereavementPolicy, eligibleRelationships: newRels });
                      setHasChanges(true);
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Relationship (e.g., Spouse, Parent)"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={rel.days}
                      onChange={(e) => {
                        const newRels = [...bereavementPolicy.eligibleRelationships];
                        newRels[index].days = parseInt(e.target.value);
                        setBereavementPolicy({ ...bereavementPolicy, eligibleRelationships: newRels });
                        setHasChanges(true);
                      }}
                      className="w-20 px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <span className="text-sm text-gray-600">days</span>
                  </div>
                  <button
                    onClick={() => {
                      const newRels = bereavementPolicy.eligibleRelationships.filter((_, i) => i !== index);
                      setBereavementPolicy({ ...bereavementPolicy, eligibleRelationships: newRels });
                      setHasChanges(true);
                    }}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              
              <button
                onClick={() => {
                  setBereavementPolicy({
                    ...bereavementPolicy,
                    eligibleRelationships: [...bereavementPolicy.eligibleRelationships, { relationship: '', days: 3 }]
                  });
                  setHasChanges(true);
                }}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
              >
                <Plus className="w-4 h-4" />
                Add Relationship
              </button>
            </div>

            <div className="mt-6 space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={bereavementPolicy.requireDocumentation}
                  onChange={(e) => {
                    setBereavementPolicy({ ...bereavementPolicy, requireDocumentation: e.target.checked });
                    setHasChanges(true);
                  }}
                  className="mr-3"
                />
                <span className="text-sm font-medium text-gray-700">Require documentation (obituary, death certificate)</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={bereavementPolicy.paid}
                  onChange={(e) => {
                    setBereavementPolicy({ ...bereavementPolicy, paid: e.target.checked });
                    setHasChanges(true);
                  }}
                  className="mr-3"
                />
                <span className="text-sm font-medium text-gray-700">Paid bereavement leave</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Holiday Calendar Configuration */}
      {activeTab === 'holidays' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              Company Holidays
            </h2>
            
            <div className="space-y-3 mb-6">
              {holidayCalendar.holidays.map((holiday, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <input
                    type="date"
                    value={holiday.date}
                    onChange={(e) => {
                      const newHolidays = [...holidayCalendar.holidays];
                      newHolidays[index].date = e.target.value;
                      setHolidayCalendar({ ...holidayCalendar, holidays: newHolidays });
                      setHasChanges(true);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    value={holiday.name}
                    onChange={(e) => {
                      const newHolidays = [...holidayCalendar.holidays];
                      newHolidays[index].name = e.target.value;
                      setHolidayCalendar({ ...holidayCalendar, holidays: newHolidays });
                      setHasChanges(true);
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Holiday Name"
                  />
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={holiday.paid}
                      onChange={(e) => {
                        const newHolidays = [...holidayCalendar.holidays];
                        newHolidays[index].paid = e.target.checked;
                        setHolidayCalendar({ ...holidayCalendar, holidays: newHolidays });
                        setHasChanges(true);
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600">Paid</span>
                  </label>
                  <button
                    onClick={() => {
                      const newHolidays = holidayCalendar.holidays.filter((_, i) => i !== index);
                      setHolidayCalendar({ ...holidayCalendar, holidays: newHolidays });
                      setHasChanges(true);
                    }}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setHolidayCalendar({
                  ...holidayCalendar,
                  holidays: [...holidayCalendar.holidays, { date: '', name: '', paid: true }]
                });
                setHasChanges(true);
              }}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 mb-6"
            >
              <Plus className="w-4 h-4" />
              Add Holiday
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Floating Holidays Per Year
                </label>
                <input
                  type="number"
                  value={holidayCalendar.floatingHolidays}
                  onChange={(e) => {
                    setHolidayCalendar({ ...holidayCalendar, floatingHolidays: parseInt(e.target.value) });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Personal holidays employees can schedule</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Eligibility Requirement
                </label>
                <input
                  type="text"
                  value={holidayCalendar.eligibilityRequirement}
                  onChange={(e) => {
                    setHolidayCalendar({ ...holidayCalendar, eligibilityRequirement: e.target.value });
                    setHasChanges(true);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 90 days of employment"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Policy Impact Preview */}
      {showPreview && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl shadow-md border-2 border-purple-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-purple-600" />
            Policy Impact Preview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Sample Employee (Full-Time)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual PTO:</span>
                  <span className="font-semibold">{calculateAnnualPTO().toFixed(0)} hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Sick Leave:</span>
                  <span className="font-semibold">{calculateAnnualSick().toFixed(0)} hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Carryover:</span>
                  <span className="font-semibold">{ptoPolicy.maxCarryover} hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Paid Holidays:</span>
                  <span className="font-semibold">{holidayCalendar.holidays.filter(h => h.paid).length} days</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">System Impact</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Time-off accruals will recalculate
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Approval workflows will update
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Payroll integrations will sync
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Reporting dashboards will reflect changes
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Effective Date</h3>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
              <p className="text-xs text-gray-600">
                Changes will take effect on this date. Future-dated changes allow time for communication.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {!hasChanges && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-sm text-green-800 font-medium">All policies are up to date and active system-wide.</p>
          </div>
        </div>
      )}
    </div>
  );
}
