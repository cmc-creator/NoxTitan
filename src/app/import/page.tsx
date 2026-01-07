'use client';

import { useState } from 'react';
import { Upload, Database, FileSpreadsheet, Download, CheckCircle, AlertCircle, ArrowRight, Zap, Package, DollarSign, Users, Calendar, TrendingUp, ShoppingCart, Boxes, FileText, RefreshCw, Eye, Check } from 'lucide-react';

interface ImportTemplate {
  id: string;
  name: string;
  icon: any;
  description: string;
  fields: string[];
  category: 'hr' | 'retail' | 'finance' | 'operations';
  compatibleWith: string[];
}

export default function ImportPage() {
  const [activeStep, setActiveStep] = useState<'select' | 'upload' | 'map' | 'preview' | 'complete'>('select');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [importMethod, setImportMethod] = useState<'file' | 'integration'>('file');

  const importTemplates: ImportTemplate[] = [
    {
      id: 'employees',
      name: 'Employee Data',
      icon: Users,
      description: 'Import employee profiles, contact info, roles, departments, pay rates, and hire dates',
      fields: ['First Name', 'Last Name', 'Email', 'Phone', 'Department', 'Role', 'Pay Rate', 'Hire Date', 'Employee ID'],
      category: 'hr',
      compatibleWith: ['ADP', 'Paychex', 'Gusto', 'BambooHR', 'Workday', 'Generic CSV/Excel']
    },
    {
      id: 'schedules',
      name: 'Schedule History',
      icon: Calendar,
      description: 'Import past schedules, shifts, time-off records, and availability patterns',
      fields: ['Employee ID', 'Date', 'Start Time', 'End Time', 'Shift Type', 'Department', 'Notes'],
      category: 'operations',
      compatibleWith: ['When I Work', 'Deputy', 'Homebase', '7shifts', 'HotSchedules', 'Generic CSV/Excel']
    },
    {
      id: 'sales',
      name: 'Sales Data',
      icon: DollarSign,
      description: 'Import transaction history, revenue data, and sales performance metrics',
      fields: ['Date', 'Transaction ID', 'Amount', 'Product/Service', 'Employee', 'Customer', 'Payment Method'],
      category: 'retail',
      compatibleWith: ['Square', 'Clover', 'Shopify', 'Lightspeed', 'Toast POS', 'Generic CSV/Excel']
    },
    {
      id: 'inventory',
      name: 'Inventory Records',
      icon: Boxes,
      description: 'Import product inventory, stock levels, SKUs, and reorder points',
      fields: ['SKU', 'Product Name', 'Category', 'Quantity', 'Reorder Point', 'Unit Cost', 'Sale Price', 'Supplier'],
      category: 'retail',
      compatibleWith: ['Square', 'Shopify', 'QuickBooks', 'Lightspeed', 'Vend', 'Generic CSV/Excel']
    },
    {
      id: 'payroll',
      name: 'Payroll History',
      icon: TrendingUp,
      description: 'Import historical payroll data, pay stubs, deductions, and tax information',
      fields: ['Employee ID', 'Pay Period Start', 'Pay Period End', 'Regular Hours', 'Overtime Hours', 'Gross Pay', 'Deductions', 'Net Pay'],
      category: 'finance',
      compatibleWith: ['ADP', 'Paychex', 'Gusto', 'QuickBooks Payroll', 'Generic CSV/Excel']
    },
    {
      id: 'customers',
      name: 'Customer Database',
      icon: ShoppingCart,
      description: 'Import customer profiles, contact information, and purchase history',
      fields: ['Customer ID', 'Name', 'Email', 'Phone', 'Address', 'Join Date', 'Total Purchases', 'Loyalty Points'],
      category: 'retail',
      compatibleWith: ['Square', 'Shopify', 'Salesforce', 'Mailchimp', 'Generic CSV/Excel']
    },
    {
      id: 'certifications',
      name: 'Training & Certifications',
      icon: FileText,
      description: 'Import employee training records, certifications, licenses, and expiration dates',
      fields: ['Employee ID', 'Certification Name', 'Issue Date', 'Expiration Date', 'Issuing Organization', 'Certificate Number', 'Status'],
      category: 'hr',
      compatibleWith: ['TalentLMS', 'SAP SuccessFactors', 'Cornerstone', 'Generic CSV/Excel']
    },
    {
      id: 'time-tracking',
      name: 'Time Clock Data',
      icon: Calendar,
      description: 'Import punch clock records, time entries, and attendance history',
      fields: ['Employee ID', 'Date', 'Clock In', 'Clock Out', 'Break Start', 'Break End', 'Total Hours', 'Status'],
      category: 'operations',
      compatibleWith: ['TimeClock Plus', 'Kronos', 'ADP Time', 'TSheets', 'Generic CSV/Excel']
    }
  ];

  const integrations = [
    { name: 'ADP', logo: '🏢', category: 'Payroll & HR' },
    { name: 'QuickBooks', logo: '💚', category: 'Accounting' },
    { name: 'Square', logo: '⬛', category: 'POS & Payments' },
    { name: 'Shopify', logo: '🛒', category: 'E-commerce' },
    { name: 'When I Work', logo: '⏰', category: 'Scheduling' },
    { name: 'Gusto', logo: '💼', category: 'Payroll' },
    { name: 'BambooHR', logo: '🎋', category: 'HR Management' },
    { name: 'Toast POS', logo: '🍞', category: 'Restaurant POS' },
    { name: 'Deputy', logo: '👮', category: 'Workforce Mgmt' },
    { name: 'Clover', logo: '🍀', category: 'POS' },
    { name: 'Paychex', logo: '💵', category: 'Payroll' },
    { name: 'Lightspeed', logo: '⚡', category: 'Retail POS' }
  ];

  const sampleMapping = [
    { theirField: 'FirstName', ourField: 'firstName', status: 'mapped' },
    { theirField: 'LastName', ourField: 'lastName', status: 'mapped' },
    { theirField: 'EmailAddress', ourField: 'email', status: 'mapped' },
    { theirField: 'PhoneNumber', ourField: 'phone', status: 'mapped' },
    { theirField: 'DepartmentName', ourField: 'department', status: 'mapped' },
    { theirField: 'JobTitle', ourField: 'role', status: 'mapped' },
    { theirField: 'HourlyRate', ourField: 'payRate', status: 'mapped' },
    { theirField: 'StartDate', ourField: 'hireDate', status: 'mapped' },
    { theirField: 'EmployeeNumber', ourField: 'employeeId', status: 'mapped' },
    { theirField: 'ManagerID', ourField: null, status: 'unmapped' }
  ];

  const previewData = [
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', department: 'Nursing', role: 'RN', payRate: '$32.50', status: 'valid' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', department: 'Nursing', role: 'LPN', payRate: '$28.00', status: 'valid' },
    { firstName: 'Michael', lastName: 'Johnson', email: 'invalid-email', department: 'Admin', role: 'Manager', payRate: '$45.00', status: 'error' },
    { firstName: 'Sarah', lastName: 'Williams', email: 'sarah.w@example.com', department: 'Therapy', role: 'PT', payRate: '$38.00', status: 'valid' },
    { firstName: 'David', lastName: '', email: 'david@example.com', department: 'Support', role: 'CNA', payRate: '$18.50', status: 'warning' }
  ];

  const selectedTemplateData = importTemplates.find(t => t.id === selectedTemplate);

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--page-bg)', color: 'var(--body-text)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl">
              <Upload className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold" style={{ color: 'var(--header-text)' }}>
                Data Import Center
              </h1>
              <p className="text-lg opacity-80 mt-1">
                Easily migrate your existing data from any system
              </p>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
          <div className="flex items-center justify-between">
            {[
              { id: 'select', label: 'Select Data Type', icon: Database },
              { id: 'upload', label: 'Upload File', icon: Upload },
              { id: 'map', label: 'Map Fields', icon: ArrowRight },
              { id: 'preview', label: 'Preview & Validate', icon: Eye },
              { id: 'complete', label: 'Import Complete', icon: CheckCircle }
            ].map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isCompleted = ['select', 'upload', 'map', 'preview'].indexOf(step.id) < ['select', 'upload', 'map', 'preview'].indexOf(activeStep);
              
              return (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                      isActive ? 'bg-blue-600 border-blue-600 text-white' :
                      isCompleted ? 'bg-green-600 border-green-600 text-white' :
                      'bg-slate-700 border-slate-600 text-slate-400'
                    }`}>
                      {isCompleted ? <Check className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                    </div>
                    <span className={`mt-2 text-sm font-semibold ${isActive ? 'text-blue-400' : isCompleted ? 'text-green-400' : 'text-slate-500'}`}>
                      {step.label}
                    </span>
                  </div>
                  {index < 4 && (
                    <div className={`flex-1 h-0.5 ${isCompleted ? 'bg-green-600' : 'bg-slate-700'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 1: Select Data Type */}
        {activeStep === 'select' && (
          <div className="space-y-6">
            {/* Quick Start Banner */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-green-600/20 to-blue-600/20 border-2 border-green-500/30">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Seamless Migration from Any System</h3>
                  <p className="text-slate-300 mb-4">
                    TeamPulse makes it easy to abandon your old software and import everything in minutes. 
                    We support direct integrations with 50+ platforms and can import any CSV or Excel file.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-400">50+</div>
                      <div className="text-xs text-slate-400">Integrations</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-400">5 min</div>
                      <div className="text-xs text-slate-400">Avg Import Time</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-purple-400">100%</div>
                      <div className="text-xs text-slate-400">Data Accuracy</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-orange-400">Free</div>
                      <div className="text-xs text-slate-400">Migration Help</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Import Method Selection */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setImportMethod('file')}
                className={`p-6 rounded-xl border-2 transition-all ${
                  importMethod === 'file' 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                }`}
              >
                <FileSpreadsheet className="w-12 h-12 text-blue-400 mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Upload File</h3>
                <p className="text-sm text-slate-400">Import from CSV, Excel, or other file formats</p>
              </button>
              <button
                onClick={() => setImportMethod('integration')}
                className={`p-6 rounded-xl border-2 transition-all ${
                  importMethod === 'integration' 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                }`}
              >
                <RefreshCw className="w-12 h-12 text-green-400 mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Direct Integration</h3>
                <p className="text-sm text-slate-400">Connect directly to your existing software</p>
              </button>
            </div>

            {/* Data Type Templates */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Select What You Want to Import</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {importTemplates.map((template) => {
                  const Icon = template.icon;
                  return (
                    <button
                      key={template.id}
                      onClick={() => setSelectedTemplate(template.id)}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        selectedTemplate === template.id
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                      }`}
                    >
                      <Icon className="w-10 h-10 text-blue-400 mb-3" />
                      <h4 className="text-lg font-bold text-white mb-2">{template.name}</h4>
                      <p className="text-sm text-slate-400 mb-3">{template.description}</p>
                      <div className="text-xs text-slate-500">
                        <span className="font-semibold">Compatible with:</span> {template.compatibleWith.slice(0, 2).join(', ')}
                        {template.compatibleWith.length > 2 && ` +${template.compatibleWith.length - 2} more`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Compatible Integrations */}
            {selectedTemplateData && (
              <div className="p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
                <h3 className="text-lg font-bold mb-4 text-white">Compatible Systems for {selectedTemplateData.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {selectedTemplateData.compatibleWith.map((system) => (
                    <div key={system} className="p-3 bg-slate-700/30 rounded-lg text-center hover:bg-slate-700/50 transition-all cursor-pointer">
                      <div className="text-2xl mb-1">
                        {integrations.find(i => i.name === system)?.logo || '📄'}
                      </div>
                      <div className="text-sm font-semibold text-white">{system}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTemplate && (
              <button
                onClick={() => setActiveStep('upload')}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                Continue to Upload
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        {/* Step 2: Upload (Simplified for demo) */}
        {activeStep === 'upload' && (
          <div className="space-y-6">
            <div className="p-12 border-2 border-dashed border-slate-600 rounded-xl text-center hover:border-blue-500 transition-all cursor-pointer" style={{ background: 'var(--card-bg)' }}>
              <Upload className="w-16 h-16 mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold text-white mb-2">Drop your file here or click to browse</h3>
              <p className="text-slate-400 mb-4">Supports CSV, Excel (.xlsx, .xls), and JSON files up to 50MB</p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all">
                Choose File
              </button>
              <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg inline-block">
                <p className="text-green-400 font-semibold">✓ Sample file uploaded: employees_export.csv (45 KB, 127 rows)</p>
              </div>
            </div>

            <div className="p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
              <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                <Download className="w-5 h-5 text-blue-400" />
                Download Template Files
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all text-left">
                  <FileSpreadsheet className="w-8 h-8 text-green-400 mb-2" />
                  <div className="font-semibold text-white">Employee Template</div>
                  <div className="text-xs text-slate-400">CSV format with sample data</div>
                </button>
                <button className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all text-left">
                  <FileSpreadsheet className="w-8 h-8 text-blue-400 mb-2" />
                  <div className="font-semibold text-white">Schedule Template</div>
                  <div className="text-xs text-slate-400">CSV format with sample data</div>
                </button>
                <button className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all text-left">
                  <FileSpreadsheet className="w-8 h-8 text-purple-400 mb-2" />
                  <div className="font-semibold text-white">Payroll Template</div>
                  <div className="text-xs text-slate-400">CSV format with sample data</div>
                </button>
              </div>
            </div>

            <button
              onClick={() => setActiveStep('map')}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              Continue to Field Mapping
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Step 3: Field Mapping */}
        {activeStep === 'map' && (
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                Smart Auto-Mapping Detected
              </h3>
              <p className="text-slate-300">
                We automatically matched 9 of 10 fields from your file. Review and adjust if needed.
              </p>
            </div>

            <div className="p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
              <h3 className="text-xl font-bold mb-4 text-white">Map Your Fields to TeamPulse</h3>
              <div className="space-y-3">
                {sampleMapping.map((map, index) => (
                  <div key={index} className={`p-4 rounded-lg flex items-center justify-between ${
                    map.status === 'mapped' ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'
                  }`}>
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex-1">
                        <div className="text-sm text-slate-400">Their Field</div>
                        <div className="font-semibold text-white">{map.theirField}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-500" />
                      <div className="flex-1">
                        <div className="text-sm text-slate-400">TeamPulse Field</div>
                        {map.ourField ? (
                          <div className="font-semibold text-white">{map.ourField}</div>
                        ) : (
                          <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white">
                            <option>Select field...</option>
                            <option>employeeId</option>
                            <option>managerId</option>
                            <option>supervisorId</option>
                          </select>
                        )}
                      </div>
                    </div>
                    {map.status === 'mapped' ? (
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-red-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setActiveStep('preview')}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              Preview Import
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Step 4: Preview & Validate */}
        {activeStep === 'preview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/50">
                <div className="text-3xl font-bold text-green-400">122</div>
                <div className="text-sm text-slate-300">Valid Records</div>
              </div>
              <div className="p-4 rounded-xl bg-yellow-500/20 border border-yellow-500/50">
                <div className="text-3xl font-bold text-yellow-400">3</div>
                <div className="text-sm text-slate-300">Warnings</div>
              </div>
              <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50">
                <div className="text-3xl font-bold text-red-400">2</div>
                <div className="text-sm text-slate-300">Errors</div>
              </div>
            </div>

            <div className="p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
              <h3 className="text-xl font-bold mb-4 text-white">Data Preview (First 5 Rows)</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-semibold">First Name</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-semibold">Last Name</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-semibold">Email</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-semibold">Department</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-semibold">Role</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-semibold">Pay Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previewData.map((row, index) => (
                      <tr key={index} className="border-b border-slate-700/50">
                        <td className="py-3 px-4">
                          {row.status === 'valid' && <CheckCircle className="w-5 h-5 text-green-400" />}
                          {row.status === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-400" />}
                          {row.status === 'error' && <AlertCircle className="w-5 h-5 text-red-400" />}
                        </td>
                        <td className="py-3 px-4 text-white">{row.firstName}</td>
                        <td className="py-3 px-4 text-white">{row.lastName || <span className="text-yellow-400">Missing</span>}</td>
                        <td className="py-3 px-4 text-white">{row.status === 'error' ? <span className="text-red-400">{row.email}</span> : row.email}</td>
                        <td className="py-3 px-4 text-white">{row.department}</td>
                        <td className="py-3 px-4 text-white">{row.role}</td>
                        <td className="py-3 px-4 text-white">{row.payRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold text-lg transition-all">
                Fix Errors First
              </button>
              <button
                onClick={() => setActiveStep('complete')}
                className="flex-1 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                Import Data Now
                <CheckCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Complete */}
        {activeStep === 'complete' && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Import Complete!</h2>
            <p className="text-xl text-slate-300 mb-8">Successfully imported 122 employee records</p>
            
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="p-6 rounded-xl bg-green-500/20 border border-green-500/50">
                <div className="text-4xl font-bold text-green-400">122</div>
                <div className="text-sm text-slate-300">Records Imported</div>
              </div>
              <div className="p-6 rounded-xl bg-blue-500/20 border border-blue-500/50">
                <div className="text-4xl font-bold text-blue-400">2:37</div>
                <div className="text-sm text-slate-300">Time Taken</div>
              </div>
              <div className="p-6 rounded-xl bg-purple-500/20 border border-purple-500/50">
                <div className="text-4xl font-bold text-purple-400">0</div>
                <div className="text-sm text-slate-300">Errors</div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setActiveStep('select')}
                className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-all"
              >
                Import More Data
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-xl font-semibold transition-all">
                View Imported Data
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
