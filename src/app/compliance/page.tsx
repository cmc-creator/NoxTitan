'use client';

import { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Clock, FileText, Users, TrendingUp, Download, Upload, ExternalLink, Search, XCircle, Bell, RefreshCw, MapPin, AlertCircle, Eye, Calendar, Zap, Lock, Key, Database, Activity, FileCheck, UserCheck } from 'lucide-react';

// HIPAA Compliance Section
function HIPAAComplianceSection({ hipaaView, setHipaaView }: { hipaaView: string; setHipaaView: (view: 'overview' | 'privacy' | 'security' | 'breach' | 'audit-log') => void }) {
  return (
    <div className="space-y-6">
      {/* HIPAA Sub-Navigation */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        <button
          onClick={() => setHipaaView('overview')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            hipaaView === 'overview' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setHipaaView('privacy')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            hipaaView === 'privacy' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Privacy Rule
        </button>
        <button
          onClick={() => setHipaaView('security')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            hipaaView === 'security' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Security Rule
        </button>
        <button
          onClick={() => setHipaaView('breach')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            hipaaView === 'breach' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Breach Prevention
        </button>
        <button
          onClick={() => setHipaaView('audit-log')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            hipaaView === 'audit-log' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Audit Logs
        </button>
      </div>

      {/* Overview */}
      {hipaaView === 'overview' && (
        <div className="space-y-6">
          {/* Compliance Score */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">HIPAA Compliance Status</h2>
                <p className="text-gray-600">Health Insurance Portability and Accountability Act</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600">98%</div>
                <p className="text-sm text-gray-600">Compliant</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm font-semibold text-gray-700">Privacy Rule</p>
                <p className="text-2xl font-bold text-green-600">100%</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm font-semibold text-gray-700">Security Rule</p>
                <p className="text-2xl font-bold text-green-600">97%</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mb-2" />
                <p className="text-sm font-semibold text-gray-700">Breach Notification</p>
                <p className="text-2xl font-bold text-yellow-600">95%</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm font-semibold text-gray-700">Training</p>
                <p className="text-2xl font-bold text-green-600">100%</p>
              </div>
            </div>
          </div>

          {/* Critical Safeguards */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Active HIPAA Safeguards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-gray-900">Data Encryption</h4>
                </div>
                <p className="text-sm text-gray-700">✓ AES-256 encryption at rest</p>
                <p className="text-sm text-gray-700">✓ TLS 1.3 encryption in transit</p>
                <p className="text-sm text-gray-700">✓ Encrypted database backups</p>
              </div>

              <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
                <div className="flex items-center gap-3 mb-2">
                  <Key className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-gray-900">Access Controls</h4>
                </div>
                <p className="text-sm text-gray-700">✓ Role-based access (RBAC)</p>
                <p className="text-sm text-gray-700">✓ Multi-factor authentication</p>
                <p className="text-sm text-gray-700">✓ Automatic session timeout (15 min)</p>
              </div>

              <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
                <div className="flex items-center gap-3 mb-2">
                  <Activity className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-gray-900">Audit Logging</h4>
                </div>
                <p className="text-sm text-gray-700">✓ All PHI access logged</p>
                <p className="text-sm text-gray-700">✓ Tamper-proof audit trails</p>
                <p className="text-sm text-gray-700">✓ 7-year retention policy</p>
              </div>

              <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <h4 className="font-semibold text-gray-900">Breach Detection</h4>
                </div>
                <p className="text-sm text-gray-700">✓ Real-time monitoring</p>
                <p className="text-sm text-gray-700">⚠ Update IDS signatures</p>
                <p className="text-sm text-gray-700">✓ 60-day notification protocol</p>
              </div>
            </div>
          </div>

          {/* Legal Compliance Matrix */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Legal & Regulatory Compliance</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Regulation</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Requirement</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Last Audit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium text-gray-900">HIPAA Privacy Rule</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Protect PHI, patient rights, consent management</td>
                    <td className="text-center py-3 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">COMPLIANT</span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">Dec 15, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium text-gray-900">HIPAA Security Rule</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Technical, physical, administrative safeguards</td>
                    <td className="text-center py-3 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">COMPLIANT</span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">Dec 20, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium text-gray-900">HITECH Act</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Breach notification, BAA requirements</td>
                    <td className="text-center py-3 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">COMPLIANT</span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">Jan 5, 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium text-gray-900">FLSA (Labor)</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Overtime, break requirements, minor restrictions</td>
                    <td className="text-center py-3 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">COMPLIANT</span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">Dec 1, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium text-gray-900">FMLA</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Job-protected leave, eligibility tracking</td>
                    <td className="text-center py-3 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">COMPLIANT</span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">Nov 28, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium text-gray-900">ADA</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Reasonable accommodations, anti-discrimination</td>
                    <td className="text-center py-3 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">COMPLIANT</span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">Dec 10, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium text-gray-900">OSHA</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Workplace safety, bloodborne pathogens, ergonomics</td>
                    <td className="text-center py-3 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">COMPLIANT</span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">Dec 18, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium text-gray-900">State Privacy Laws</td>
                    <td className="py-3 px-4 text-sm text-gray-700">CCPA, CDPA, state-specific requirements</td>
                    <td className="text-center py-3 px-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">REVIEW</span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">Dec 5, 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Business Associate Agreements */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Business Associate Agreements (BAA)</h3>
            <div className="space-y-3">
              {[
                { vendor: 'Cloud Hosting Provider', service: 'AWS/Azure Infrastructure', status: 'Active', expires: '2026-12-31' },
                { vendor: 'Payroll Processor', service: 'ADP Workforce Now', status: 'Active', expires: '2027-03-15' },
                { vendor: 'Background Check Service', service: 'Employee Screening', status: 'Active', expires: '2026-08-20' },
                { vendor: 'Benefits Administrator', service: 'COBRA, FSA Management', status: 'Renewal Due', expires: '2026-02-01' },
              ].map((baa, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <FileCheck className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">{baa.vendor}</p>
                      <p className="text-sm text-gray-600">{baa.service}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      baa.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {baa.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Expires: {baa.expires}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Privacy Rule */}
      {hipaaView === 'privacy' && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">HIPAA Privacy Rule Compliance</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">✓ Minimum Necessary Standard</h4>
              <p className="text-sm text-gray-700">System enforces role-based access. Staff only see PHI required for job duties.</p>
            </div>
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">✓ Patient Rights</h4>
              <p className="text-sm text-gray-700">Portal provides: access to records, amendment requests, accounting of disclosures, opt-out forms.</p>
            </div>
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">✓ De-identification for Reports</h4>
              <p className="text-sm text-gray-700">Analytics and reports automatically remove 18 HIPAA identifiers. Safe Harbor method applied.</p>
            </div>
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">✓ Notice of Privacy Practices</h4>
              <p className="text-sm text-gray-700">NPP distributed at onboarding. Acknowledgment forms stored electronically. Last updated: Jan 2025.</p>
            </div>
          </div>
        </div>
      )}

      {/* Security Rule */}
      {hipaaView === 'security' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Safeguards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <Database className="w-6 h-6 text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-900 mb-2">Encryption</h4>
                <p className="text-sm text-gray-700">• AES-256 for stored data</p>
                <p className="text-sm text-gray-700">• TLS 1.3 for data in transit</p>
                <p className="text-sm text-gray-700">• End-to-end message encryption</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <Key className="w-6 h-6 text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-900 mb-2">Authentication</h4>
                <p className="text-sm text-gray-700">• MFA required for all users</p>
                <p className="text-sm text-gray-700">• Biometric options available</p>
                <p className="text-sm text-gray-700">• Password complexity enforced</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-900 mb-2">Audit Controls</h4>
                <p className="text-sm text-gray-700">• All access logged with timestamp</p>
                <p className="text-sm text-gray-700">• Immutable audit trails</p>
                <p className="text-sm text-gray-700">• Automated anomaly detection</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <UserCheck className="w-6 h-6 text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-900 mb-2">Integrity Controls</h4>
                <p className="text-sm text-gray-700">• Digital signatures for documents</p>
                <p className="text-sm text-gray-700">• Version control tracking</p>
                <p className="text-sm text-gray-700">• Checksum validation</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Physical & Administrative Safeguards</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Facility Access Controls</p>
                  <p className="text-sm text-gray-600">Badge access, visitor logs, secure server room, CCTV monitoring</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Workstation Security</p>
                  <p className="text-sm text-gray-600">Screen timeouts, privacy filters, clean desk policy, locked cabinets</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Workforce Training</p>
                  <p className="text-sm text-gray-600">Annual HIPAA training (100% completion), phishing simulations, incident response drills</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Contingency Planning</p>
                  <p className="text-sm text-gray-600">Daily backups, disaster recovery plan, 4-hour RTO, offsite backup storage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Breach Prevention */}
      {hipaaView === 'breach' && (
        <div className="space-y-6">
          <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Breach Notification Protocol</h3>
                <p className="text-sm text-gray-600">HITECH Act requires notification within 60 days of discovery</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">Day 1-5</p>
                <p className="text-sm text-gray-700">Contain breach, assess scope, notify Privacy Officer</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">Day 6-30</p>
                <p className="text-sm text-gray-700">Investigate cause, document findings, mitigate risks</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">Day 31-60</p>
                <p className="text-sm text-gray-700">Notify affected individuals, HHS (if 500+ affected), media (if required)</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Breach Prevention Measures</h3>
            <div className="space-y-3">
              <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
                <p className="font-semibold text-gray-900">✓ Zero reported breaches (last 12 months)</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Active Monitoring</h4>
                <p className="text-sm text-gray-700">• Real-time intrusion detection (IDS/IPS)</p>
                <p className="text-sm text-gray-700">• Security information and event management (SIEM)</p>
                <p className="text-sm text-gray-700">• Quarterly penetration testing</p>
                <p className="text-sm text-gray-700">• Vulnerability scanning (weekly)</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Employee Training</h4>
                <p className="text-sm text-gray-700">• Annual security awareness training (100% completion)</p>
                <p className="text-sm text-gray-700">• Monthly phishing simulations (95% pass rate)</p>
                <p className="text-sm text-gray-700">• Incident reporting hotline</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Audit Log */}
      {hipaaView === 'audit-log' && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">PHI Access Audit Log</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Log
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Timestamp</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">User</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Resource</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">IP Address</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '2026-01-06 14:32:15', user: 'Sarah Johnson (RN)', action: 'VIEW', resource: 'Patient Record #1234', ip: '192.168.1.45' },
                  { time: '2026-01-06 14:28:03', user: 'Michael Chen (RN)', action: 'UPDATE', resource: 'Medication List #5678', ip: '192.168.1.52' },
                  { time: '2026-01-06 14:15:22', user: 'Admin User', action: 'EXPORT', resource: 'De-identified Report', ip: '192.168.1.10' },
                  { time: '2026-01-06 14:02:41', user: 'Sarah Johnson (RN)', action: 'VIEW', resource: 'Lab Results #9101', ip: '192.168.1.45' },
                  { time: '2026-01-06 13:55:18', user: 'Pharmacy Tech', action: 'VIEW', resource: 'Prescription #3456', ip: '192.168.1.67' },
                ].map((log, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-700">{log.time}</td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">{log.user}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        log.action === 'VIEW' ? 'bg-blue-100 text-blue-700' :
                        log.action === 'UPDATE' ? 'bg-green-100 text-green-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {log.action}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">{log.resource}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{log.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Audit logs retained for 7 years per HIPAA requirements. Logs are tamper-proof and monitored for unauthorized access attempts.
          </p>
        </div>
      )}
    </div>
  );
}

// Placeholder sections for industry-specific compliance
function ConstructionSection() {
  return <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}><h3 className="text-2xl font-bold mb-4">🏗️ Construction Industry (29 CFR 1926) - Coming Soon</h3><p>Focus Four hazards: Falls, Electrocution, Struck-By, Caught-In/Between. Excavation safety, scaffolding, ladder safety, PPE requirements.</p></div>;
}

function FoodServiceSection() {
  return <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}><h3 className="text-2xl font-bold mb-4">🍽️ Food Service Compliance - Coming Soon</h3><p>FDA Food Code, food handler certifications, health inspections, allergen management, temperature control, and sanitation standards.</p></div>;
}

function RetailSection() {
  return <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}><h3 className="text-2xl font-bold mb-4">🛒 Retail Industry Compliance - Coming Soon</h3><p>FLSA wage/hour laws, ADA accessibility, PCI DSS payment security, OSHA slip/trip/fall prevention, and workplace violence prevention.</p></div>;
}

export default function CompliancePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'employees' | 'requirements' | 'reports' | 'healthcare' | 'osha' | 'construction' | 'food-service' | 'retail' | 'alerts' | 'hipaa'>('overview');
  const [healthcareView, setHealthcareView] = useState<'cms' | 'joint-commission' | 'survey-readiness' | 'price-transparency'>('cms');
  const [oshaView, setOshaView] = useState<'general' | 'recordkeeping' | 'training'>('general');
  const [alertFilter, setAlertFilter] = useState<'all' | 'federal' | 'state' | 'industry'>('all');
  const [hipaaView, setHipaaView] = useState<'overview' | 'privacy' | 'security' | 'breach' | 'audit-log'>('overview');

  // Mock regulatory alerts data
  const regulatoryAlerts = [
    {
      id: '1',
      title: 'California Minimum Wage Increase - Effective January 1, 2026',
      type: 'state',
      severity: 'high',
      state: 'CA',
      industry: 'All Industries',
      datePublished: '2025-12-15',
      effectiveDate: '2026-01-01',
      source: 'California DIR',
      description: 'California minimum wage increases to $16.50/hour statewide. Healthcare workers minimum wage rises to $25/hour.',
      impact: 'Affects 12 employees in California. Estimated annual cost increase: $18,500',
      action: 'Update payroll system by January 1, 2026. Review and adjust employee compensation.',
      status: 'action-required',
      daysUntilEffective: 0,
      affectedEmployees: 12
    },
    {
      id: '2',
      title: 'OSHA Heat Illness Prevention Standard Proposed',
      type: 'federal',
      severity: 'medium',
      state: 'Federal',
      industry: 'Construction, Agriculture, Manufacturing',
      datePublished: '2025-12-20',
      effectiveDate: '2026-06-01',
      source: 'OSHA',
      description: 'New proposed rule requires employers to develop heat illness prevention plans when heat index exceeds 80°F.',
      impact: 'May affect outdoor and warehouse operations. Will require policy updates and training.',
      action: 'Monitor rule development. Begin planning for heat illness prevention program.',
      status: 'monitoring',
      daysUntilEffective: 151,
      affectedEmployees: 0
    },
    {
      id: '3',
      title: 'Joint Commission Updates Hand Hygiene Standards',
      type: 'industry',
      severity: 'medium',
      state: 'National',
      industry: 'Healthcare',
      datePublished: '2025-12-10',
      effectiveDate: '2026-03-01',
      source: 'The Joint Commission',
      description: 'Enhanced hand hygiene monitoring requirements. Must track compliance rates by unit and role.',
      impact: 'Requires implementation of automated hand hygiene monitoring system.',
      action: 'Evaluate monitoring solutions. Budget for equipment and training.',
      status: 'action-required',
      daysUntilEffective: 59,
      affectedEmployees: 45
    },
    {
      id: '4',
      title: 'New York Paid Sick Leave Expansion',
      type: 'state',
      severity: 'high',
      state: 'NY',
      industry: 'All Industries',
      datePublished: '2025-12-01',
      effectiveDate: '2026-04-01',
      source: 'NYS Department of Labor',
      description: 'Employers with 5+ employees must provide 56 hours paid sick leave (up from 40). Carryover rules updated.',
      impact: 'No NY employees currently, but monitor if expanding operations.',
      action: 'No immediate action required. Add to expansion checklist.',
      status: 'informational',
      daysUntilEffective: 90,
      affectedEmployees: 0
    },
    {
      id: '5',
      title: 'CMS Updates Staffing Mandate for Nursing Homes',
      type: 'industry',
      severity: 'critical',
      state: 'Federal',
      industry: 'Healthcare - Nursing Homes',
      datePublished: '2025-11-30',
      effectiveDate: '2026-02-01',
      source: 'CMS',
      description: 'Minimum staffing requirements: 0.55 RN hours per resident day and 2.45 nurse aide hours per resident day.',
      impact: 'Critical compliance requirement. May require hiring 3-5 additional staff.',
      action: 'URGENT: Conduct staffing analysis. Begin recruitment immediately.',
      status: 'action-required',
      daysUntilEffective: 31,
      affectedEmployees: 45
    },
    {
      id: '6',
      title: 'Texas Update: Workplace Violence Prevention for Healthcare',
      type: 'state',
      severity: 'medium',
      state: 'TX',
      industry: 'Healthcare',
      datePublished: '2025-12-28',
      effectiveDate: '2026-09-01',
      source: 'Texas DSHS',
      description: 'Requires workplace violence prevention plan, incident reporting system, and annual training.',
      impact: 'New requirement for Texas facilities. Affects 8 employees.',
      action: 'Develop workplace violence prevention program. Schedule training.',
      status: 'monitoring',
      daysUntilEffective: 243,
      affectedEmployees: 8
    },
    {
      id: '7',
      title: 'Federal Overtime Threshold Increase',
      type: 'federal',
      severity: 'high',
      state: 'Federal',
      industry: 'All Industries',
      datePublished: '2025-12-18',
      effectiveDate: '2026-07-01',
      source: 'Department of Labor',
      description: 'FLSA overtime salary threshold increases to $58,656 annually ($1,128/week).',
      impact: 'May affect 6 employees currently classified as exempt. Review exempt status.',
      action: 'Audit employee classifications. Adjust salaries or reclassify by July 1.',
      status: 'action-required',
      daysUntilEffective: 181,
      affectedEmployees: 6
    },
    {
      id: '8',
      title: 'California COVID-19 Supplemental Paid Sick Leave Extended',
      type: 'state',
      severity: 'low',
      state: 'CA',
      industry: 'All Industries',
      datePublished: '2025-12-22',
      effectiveDate: '2026-01-01',
      source: 'California DIR',
      description: 'COVID-19 supplemental paid sick leave extended through June 30, 2026.',
      impact: 'Continue providing COVID-related sick leave. Minimal operational change.',
      action: 'Update employee handbook. Communicate policy continuation.',
      status: 'informational',
      daysUntilEffective: 0,
      affectedEmployees: 12
    },
    {
      id: '9',
      title: 'Updated BHP (Behavioral Health Professional) Qualification Requirements',
      type: 'state',
      severity: 'critical',
      state: 'CA',
      industry: 'Healthcare - Mental Health',
      datePublished: '2025-12-20',
      effectiveDate: '2026-03-01',
      source: 'California Board of Behavioral Sciences',
      description: 'New definition requires BHPs to have completed 3,000 supervised clinical hours (up from 2,000) and pass additional cultural competency training. Existing BHPs grandfathered until license renewal.',
      impact: 'CRITICAL: 7 current BHP staff may not meet new requirements. Could affect Medi-Cal billing.',
      action: 'URGENT: Audit all BHP credentials immediately. Enroll affected staff in cultural competency training. Review supervision logs for hour verification.',
      status: 'action-required',
      daysUntilEffective: 59,
      affectedEmployees: 7
    },
    {
      id: '10',
      title: 'RN Scope of Practice Expansion - Medication Administration',
      type: 'state',
      severity: 'medium',
      state: 'TX',
      industry: 'Healthcare',
      datePublished: '2025-12-28',
      effectiveDate: '2026-04-01',
      source: 'Texas Board of Nursing',
      description: 'RNs can now administer subcutaneous immunotherapy without physician standing orders. Requires 8-hour specialized training.',
      impact: 'Expands RN scope. May allow more efficient allergy clinic operations.',
      action: 'Identify interested RNs. Schedule specialized training. Update protocols and job descriptions.',
      status: 'monitoring',
      daysUntilEffective: 90,
      affectedEmployees: 8
    },
    {
      id: '11',
      title: 'APRN Prescriptive Authority Enhancement',
      type: 'state',
      severity: 'high',
      state: 'FL',
      industry: 'Healthcare',
      datePublished: '2025-12-15',
      effectiveDate: '2026-02-15',
      source: 'Florida Board of Nursing',
      description: 'APRNs with 5+ years experience can now prescribe Schedule II controlled substances without physician protocol agreement. Must complete 10-hour controlled substance prescribing course.',
      impact: 'Affects 3 experienced APRNs. Could expand pain management and ADHD treatment capacity.',
      action: 'Review APRN experience levels. Enroll eligible APRNs in required course. Update DEA registrations and prescribing privileges.',
      status: 'action-required',
      daysUntilEffective: 45,
      affectedEmployees: 3
    },
    {
      id: '12',
      title: 'CNA Certification Renewal Requirements Updated',
      type: 'state',
      severity: 'high',
      state: 'NY',
      industry: 'Healthcare - Long-term Care',
      datePublished: '2025-12-05',
      effectiveDate: '2026-05-01',
      source: 'NYS Department of Health',
      description: 'CNAs must complete 12 hours continuing education annually (up from 8). Must include 2 hours on dementia care and 2 hours on infection control.',
      impact: 'All 18 CNAs must complete additional 4 hours training annually. Budget impact: $3,600/year.',
      action: 'Contract with approved CE provider. Schedule mandatory training sessions. Track completion for all CNAs.',
      status: 'action-required',
      daysUntilEffective: 120,
      affectedEmployees: 18
    },
    {
      id: '13',
      title: 'Medical Assistant Scope of Practice Clarification',
      type: 'state',
      severity: 'medium',
      state: 'CA',
      industry: 'Healthcare - Ambulatory',
      datePublished: '2025-12-18',
      effectiveDate: '2026-06-01',
      source: 'Medical Board of California',
      description: 'Medical Assistants can now perform venipuncture and administer immunizations under indirect physician supervision (previously required direct supervision). Must complete specific training.',
      impact: 'Increases MA autonomy. May improve clinic efficiency. Affects 6 MAs.',
      action: 'Verify all MAs have completed venipuncture and immunization training. Update supervision policies.',
      status: 'monitoring',
      daysUntilEffective: 151,
      affectedEmployees: 6
    },
    {
      id: '14',
      title: 'LPN IV Therapy Certification Mandate',
      type: 'state',
      severity: 'critical',
      state: 'TX',
      industry: 'Healthcare',
      datePublished: '2025-11-28',
      effectiveDate: '2026-02-01',
      source: 'Texas Board of Nursing',
      description: 'All LPNs administering IV medications must hold current IV Therapy Certification from approved provider. Existing LPNs have 6 months to comply.',
      impact: 'CRITICAL: 9 LPNs currently administer IVs without certification. Cannot perform IV duties after deadline.',
      action: 'URGENT: Enroll all 9 LPNs in approved IV certification course immediately. Estimated cost: $2,700 total.',
      status: 'action-required',
      daysUntilEffective: 31,
      affectedEmployees: 9
    },
    {
      id: '15',
      title: 'ANCC Certification Renewal Requirements Changed',
      type: 'industry',
      severity: 'medium',
      state: 'National',
      industry: 'Healthcare - Nursing',
      datePublished: '2025-12-10',
      effectiveDate: '2026-01-01',
      source: 'American Nurses Credentialing Center',
      description: 'ANCC specialty certifications now require 50 contact hours (up from 40) for 5-year renewal. Must include 5 hours in ethics and 5 hours in specialty area.',
      impact: 'Affects 12 ANCC-certified nurses. Must adjust ongoing education tracking.',
      action: 'Notify affected nurses. Update CE tracking system. Ensure ethics and specialty courses available.',
      status: 'informational',
      daysUntilEffective: 0,
      affectedEmployees: 12
    },
    {
      id: '16',
      title: 'State-Specific Nurse-to-Patient Ratios Enforcement Enhanced',
      type: 'state',
      severity: 'critical',
      state: 'CA',
      industry: 'Healthcare - Acute Care',
      datePublished: '2025-12-22',
      effectiveDate: '2026-01-15',
      source: 'California DPH',
      description: 'Enhanced monitoring and penalties for nurse-to-patient ratio violations. Fines increased to $25,000 per violation per day. Real-time reporting required via new state portal.',
      impact: 'CRITICAL: Must maintain strict ratios at all times. Need real-time tracking system. Potential $25K/day penalties.',
      action: 'URGENT: Implement real-time staffing dashboard. Train charge nurses on new reporting portal. Review current ratios for compliance gaps.',
      status: 'action-required',
      daysUntilEffective: 14,
      affectedEmployees: 45
    }
  ];

  const filteredAlerts = regulatoryAlerts.filter(alert => {
    if (alertFilter === 'all') return true;
    if (alertFilter === 'federal') return alert.type === 'federal';
    if (alertFilter === 'state') return alert.type === 'state';
    if (alertFilter === 'industry') return alert.type === 'industry';
    return true;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-500 bg-red-500/20 border-red-500';
      case 'high': return 'text-orange-500 bg-orange-500/20 border-orange-500';
      case 'medium': return 'text-yellow-500 bg-yellow-500/20 border-yellow-500';
      case 'low': return 'text-blue-500 bg-blue-500/20 border-blue-500';
      default: return 'text-gray-500 bg-gray-500/20 border-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'action-required': return 'text-red-400 bg-red-500/20';
      case 'monitoring': return 'text-yellow-400 bg-yellow-500/20';
      case 'informational': return 'text-blue-400 bg-blue-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'action-required': return <AlertTriangle className="w-4 h-4" />;
      case 'monitoring': return <Eye className="w-4 h-4" />;
      case 'informational': return <AlertCircle className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--page-bg)', color: 'var(--body-text)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3" style={{ color: 'var(--header-text)' }}>
            <Shield className="h-10 w-10" style={{ color: 'var(--today-highlight)' }} />
            Compliance Tracker
          </h1>
          <p className="text-lg opacity-80">
            Monitor certifications, training, and regulatory compliance
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Overall Compliance</div>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>92%</div>
            <div className="text-xs text-green-500">+3% from last month</div>
          </div>

          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Fully Compliant</div>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>38</div>
            <div className="text-xs opacity-60">of 45 employees</div>
          </div>

          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Expiring Soon</div>
              <Clock className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>12</div>
            <div className="text-xs text-yellow-500">Within 30 days</div>
          </div>

          <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Overdue</div>
              <AlertTriangle className="h-5 w-5 text-red-500" />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>5</div>
            <div className="text-xs text-red-500">Requires immediate action</div>
          </div>

          <div className="p-6 rounded-xl shadow-lg relative" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-70">Regulatory Alerts</div>
              <Bell className="h-5 w-5 text-orange-500 animate-pulse" />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>
              {regulatoryAlerts.filter(a => a.status === 'action-required').length}
            </div>
            <div className="text-xs text-orange-500">Action required</div>
            {regulatoryAlerts.filter(a => a.status === 'action-required').length > 0 && (
              <div className="absolute top-2 right-2">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:scale-105 transition-all"
            style={{ background: 'var(--primary-btn)' }}
          >
            <Upload className="h-4 w-4" />
            Upload Certificate
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:scale-105 transition-all"
            style={{ background: 'var(--secondary-btn)' }}
          >
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'overview' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'overview' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'overview' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Shield className="h-5 w-5" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('employees')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'employees' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'employees' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'employees' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Users className="h-5 w-5" />
            Employees
          </button>
          <button
            onClick={() => setActiveTab('requirements')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'requirements' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'requirements' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'requirements' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <FileText className="h-5 w-5" />
            Requirements
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'reports' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'reports' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'reports' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <TrendingUp className="h-5 w-5" />
            Reports
          </button>
          <button
            onClick={() => setActiveTab('healthcare')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'healthcare' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'healthcare' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'healthcare' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Shield className="h-5 w-5" />
            🏥 Healthcare
          </button>
          <button
            onClick={() => setActiveTab('osha')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'osha' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'osha' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'osha' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Shield className="h-5 w-5" />
            🛡️ OSHA
          </button>
          <button
            onClick={() => setActiveTab('construction')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'construction' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'construction' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'construction' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Shield className="h-5 w-5" />
            🏗️ Construction
          </button>
          <button
            onClick={() => setActiveTab('food-service')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'food-service' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'food-service' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'food-service' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Shield className="h-5 w-5" />
            🍽️ Food Service
          </button>
          <button
            onClick={() => setActiveTab('retail')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'retail' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'retail' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'retail' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Shield className="h-5 w-5" />
            🛒 Retail
          </button>
          <button
            onClick={() => setActiveTab('alerts')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 relative ${
              activeTab === 'alerts' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'alerts' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'alerts' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Bell className="h-5 w-5" />
            🔔 Regulatory Alerts
            {regulatoryAlerts.filter(a => a.status === 'action-required').length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                {regulatoryAlerts.filter(a => a.status === 'action-required').length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('hipaa')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'hipaa' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'hipaa' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'hipaa' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Shield className="h-5 w-5" />
            🔒 HIPAA & Legal
          </button>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'overview' && <OverviewSection />}
          {activeTab === 'employees' && <EmployeesSection />}
          {activeTab === 'requirements' && <RequirementsSection />}
          {activeTab === 'reports' && <ReportsSection />}
          {activeTab === 'healthcare' && <HealthcareStandardsSection healthcareView={healthcareView} setHealthcareView={setHealthcareView} />}
          {activeTab === 'osha' && <OSHASection oshaView={oshaView} setOshaView={setOshaView} />}
          {activeTab === 'construction' && <ConstructionSection />}
          {activeTab === 'food-service' && <FoodServiceSection />}
          {activeTab === 'retail' && <RetailSection />}
          {activeTab === 'hipaa' && <HIPAAComplianceSection hipaaView={hipaaView} setHipaaView={setHipaaView} />}
          {activeTab === 'alerts' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
                    Regulatory Alerts & Updates
                  </h2>
                  <p className="text-sm opacity-70">
                    Automated monitoring of federal, state, and industry-specific compliance changes
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg">
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-sm font-semibold">Last checked: 2 hours ago</span>
                </div>
              </div>

              {/* Monitoring Sources Banner */}
              <div className="p-6 rounded-xl shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)', border: '2px solid rgba(59, 130, 246, 0.3)' }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Zap className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-white">Active Compliance Monitoring</h3>
                    <p className="text-slate-300 mb-4">
                      TeamPulse™ AI continuously monitors 2,500+ federal and state regulations across 12 industries. 
                      You'll be automatically notified of changes that affect your business.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-blue-400 mb-1">150+</div>
                        <div className="text-xs text-slate-400">Sources Monitored</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-green-400 mb-1">Daily</div>
                        <div className="text-xs text-slate-400">Update Checks</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-purple-400 mb-1">50 States</div>
                        <div className="text-xs text-slate-400">Coverage</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-orange-400 mb-1">12</div>
                        <div className="text-xs text-slate-400">Industries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold opacity-70">Filter by:</span>
                <button
                  onClick={() => setAlertFilter('all')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    alertFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  All ({regulatoryAlerts.length})
                </button>
                <button
                  onClick={() => setAlertFilter('federal')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    alertFilter === 'federal' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  Federal ({regulatoryAlerts.filter(a => a.type === 'federal').length})
                </button>
                <button
                  onClick={() => setAlertFilter('state')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    alertFilter === 'state' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  State ({regulatoryAlerts.filter(a => a.type === 'state').length})
                </button>
                <button
                  onClick={() => setAlertFilter('industry')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    alertFilter === 'industry' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  Industry-Specific ({regulatoryAlerts.filter(a => a.type === 'industry').length})
                </button>
              </div>

              {/* Alert Cards */}
              <div className="space-y-4">
                {filteredAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="p-6 rounded-xl shadow-lg border-l-4 hover:shadow-2xl transition-all"
                    style={{ 
                      background: 'var(--card-bg)',
                      borderLeftColor: alert.severity === 'critical' ? '#ef4444' : alert.severity === 'high' ? '#f97316' : alert.severity === 'medium' ? '#eab308' : '#3b82f6'
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${getSeverityColor(alert.severity)}`}>
                            {alert.severity}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getStatusColor(alert.status)}`}>
                            {getStatusIcon(alert.status)}
                            {alert.status.replace('-', ' ')}
                          </span>
                          <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-semibold flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {alert.state}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">{alert.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Published: {alert.datePublished}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            Effective: {alert.effectiveDate}
                          </span>
                          {alert.daysUntilEffective <= 30 && (
                            <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-bold">
                              {alert.daysUntilEffective === 0 ? 'EFFECTIVE TODAY' : `${alert.daysUntilEffective} days`}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-400 mb-1">Affected Employees</div>
                        <div className="text-3xl font-bold text-white">{alert.affectedEmployees}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-semibold text-slate-400 mb-1">Description</div>
                        <p className="text-slate-300">{alert.description}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-400 mb-1">Industry</div>
                        <p className="text-slate-300">{alert.industry}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-semibold text-slate-400 mb-1">Impact</div>
                          <p className="text-slate-300">{alert.impact}</p>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-400 mb-1">Recommended Action</div>
                          <p className="text-slate-300">{alert.action}</p>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-slate-700">
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-slate-500">
                            Source: {alert.source}
                          </div>
                          <div className="flex gap-2">
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all flex items-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              View Full Details
                            </button>
                            {alert.status === 'action-required' && (
                              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold transition-all flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                Mark as Addressed
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Monitoring Settings */}
              <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <Bell className="w-5 h-5 text-blue-400" />
                  Alert Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div>
                      <div className="font-semibold text-white mb-1">Email Notifications</div>
                      <div className="text-sm text-slate-400">Receive alerts via email when new regulations are detected</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div>
                      <div className="font-semibold text-white mb-1">Critical Alerts Only</div>
                      <div className="text-sm text-slate-400">Only notify for critical and high-severity changes</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div>
                      <div className="font-semibold text-white mb-1">Weekly Digest</div>
                      <div className="text-sm text-slate-400">Receive a weekly summary of all regulatory changes</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function OverviewSection() {
  const upcomingExpirations = [
    { employee: 'Sarah Miller', item: 'CPR Certification', expires: 'Jan 15, 2026', daysLeft: 14, status: 'warning' },
    { employee: 'John Davis', item: 'Food Handler License', expires: 'Jan 22, 2026', daysLeft: 21, status: 'warning' },
    { employee: 'Emma Wilson', item: 'Safety Training', expires: 'Jan 8, 2026', daysLeft: 7, status: 'urgent' },
    { employee: 'Mike Johnson', item: 'OSHA Compliance', expires: 'Feb 5, 2026', daysLeft: 35, status: 'ok' },
  ];

  const overdueItems = [
    { employee: 'Alex Thompson', item: 'Sexual Harassment Training', overdueDays: 12 },
    { employee: 'Rachel Green', item: 'Background Check Renewal', overdueDays: 5 },
    { employee: 'David Lee', item: 'Drug Testing', overdueDays: 3 },
  ];

  return (
    <div className="space-y-6">
      {/* Compliance by Category */}
      <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
          Compliance by Category
        </h3>
        <div className="space-y-4">
          {[
            { name: 'Safety Certifications', percentage: 95, total: 45, compliant: 43 },
            { name: 'Training Requirements', percentage: 88, total: 45, compliant: 40 },
            { name: 'Background Checks', percentage: 100, total: 45, compliant: 45 },
            { name: 'Policy Acknowledgments', percentage: 82, total: 45, compliant: 37 },
            { name: 'Health Screenings', percentage: 91, total: 45, compliant: 41 },
          ].map((category, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2 text-sm">
                <span className="font-semibold">{category.name}</span>
                <span className="opacity-70">{category.compliant}/{category.total} employees</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${category.percentage}%`,
                      background: category.percentage >= 95 ? '#22c55e' : category.percentage >= 85 ? '#eab308' : '#ef4444',
                    }}
                  ></div>
                </div>
                <span className="font-bold text-sm" style={{ minWidth: '45px' }}>{category.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Expirations */}
        <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--header-text)' }}>
            <Clock className="h-5 w-5 text-yellow-500" />
            Upcoming Expirations
          </h3>
          <div className="space-y-3">
            {upcomingExpirations.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border-l-4"
                style={{
                  background: 'var(--calendar-bg)',
                  borderColor: item.status === 'urgent' ? '#ef4444' : item.status === 'warning' ? '#eab308' : '#22c55e',
                }}
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <div className="font-semibold">{item.employee}</div>
                    <div className="text-sm opacity-70">{item.item}</div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    item.status === 'urgent' ? 'bg-red-500 text-white' :
                    item.status === 'warning' ? 'bg-yellow-500 text-black' :
                    'bg-green-500 text-white'
                  }`}>
                    {item.daysLeft} days
                  </div>
                </div>
                <div className="text-xs opacity-60">Expires: {item.expires}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Overdue Items */}
        <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--header-text)' }}>
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Overdue Items
          </h3>
          <div className="space-y-3">
            {overdueItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border-l-4 border-red-500"
                style={{ background: 'var(--calendar-bg)' }}
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <div className="font-semibold">{item.employee}</div>
                    <div className="text-sm opacity-70">{item.item}</div>
                  </div>
                  <div className="text-xs px-2 py-1 rounded-full bg-red-500 text-white font-semibold">
                    {item.overdueDays}d overdue
                  </div>
                </div>
                <button
                  className="mt-2 text-xs px-3 py-1 rounded-lg text-white font-semibold"
                  style={{ background: 'var(--primary-btn)' }}
                >
                  Send Reminder
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EmployeesSection() {
  const employees = [
    { name: 'Sarah Miller', department: 'Sales', compliance: 95, compliant: 19, total: 20, status: 'good' },
    { name: 'John Davis', department: 'Operations', compliance: 90, compliant: 18, total: 20, status: 'good' },
    { name: 'Emma Wilson', department: 'Customer Service', compliance: 75, compliant: 15, total: 20, status: 'warning' },
    { name: 'Mike Johnson', department: 'Management', compliance: 100, compliant: 20, total: 20, status: 'excellent' },
    { name: 'Alex Thompson', department: 'Kitchen', compliance: 65, compliant: 13, total: 20, status: 'critical' },
    { name: 'Rachel Green', department: 'HR', compliance: 100, compliant: 20, total: 20, status: 'excellent' },
    { name: 'David Lee', department: 'Maintenance', compliance: 70, compliant: 14, total: 20, status: 'warning' },
    { name: 'Lisa Anderson', department: 'Sales', compliance: 95, compliant: 19, total: 20, status: 'good' },
  ];

  return (
    <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
      <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
        Employee Compliance Status
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
              <th className="text-left py-3 px-4 font-semibold">Employee</th>
              <th className="text-left py-3 px-4 font-semibold">Department</th>
              <th className="text-center py-3 px-4 font-semibold">Items</th>
              <th className="text-left py-3 px-4 font-semibold">Compliance</th>
              <th className="text-center py-3 px-4 font-semibold">Status</th>
              <th className="text-center py-3 px-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td className="py-4 px-4 font-semibold">{employee.name}</td>
                <td className="py-4 px-4 opacity-70">{employee.department}</td>
                <td className="py-4 px-4 text-center opacity-70">{employee.compliant}/{employee.total}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden max-w-[150px]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${employee.compliance}%`,
                          background: employee.compliance >= 90 ? '#22c55e' : employee.compliance >= 75 ? '#eab308' : '#ef4444',
                        }}
                      ></div>
                    </div>
                    <span className="font-semibold text-sm">{employee.compliance}%</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    employee.status === 'excellent' ? 'bg-green-500 text-white' :
                    employee.status === 'good' ? 'bg-blue-500 text-white' :
                    employee.status === 'warning' ? 'bg-yellow-500 text-black' :
                    'bg-red-500 text-white'
                  }`}>
                    {employee.status === 'excellent' ? '✓ Excellent' :
                     employee.status === 'good' ? '✓ Good' :
                     employee.status === 'warning' ? '⚠ Warning' :
                     '✗ Critical'}
                  </span>
                </td>
                <td className="py-4 px-4 text-center">
                  <button className="text-sm px-3 py-1 rounded-lg hover:scale-105 transition-all" style={{ background: 'var(--secondary-btn)', color: '#fff' }}>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RequirementsSection() {
  const requirements = [
    {
      name: 'CPR & First Aid Certification',
      category: 'Safety',
      frequency: 'Every 2 years',
      applicableTo: 'All Staff',
      description: 'Basic life support and emergency response training',
      required: 45,
      completed: 42,
    },
    {
      name: 'Food Handler License',
      category: 'Health',
      frequency: 'Every 3 years',
      applicableTo: 'Kitchen & Service Staff',
      description: 'Food safety and handling certification',
      required: 18,
      completed: 17,
    },
    {
      name: 'Sexual Harassment Prevention Training',
      category: 'Legal',
      frequency: 'Annually',
      applicableTo: 'All Staff',
      description: 'Workplace harassment awareness and prevention',
      required: 45,
      completed: 41,
    },
    {
      name: 'OSHA Safety Training',
      category: 'Safety',
      frequency: 'Annually',
      applicableTo: 'All Staff',
      description: 'Workplace safety regulations and best practices',
      required: 45,
      completed: 43,
    },
    {
      name: 'Background Check',
      category: 'Legal',
      frequency: 'Every 5 years',
      applicableTo: 'All Staff',
      description: 'Criminal background verification',
      required: 45,
      completed: 45,
    },
    {
      name: 'Drug Testing',
      category: 'Health',
      frequency: 'Random',
      applicableTo: 'Safety-Sensitive Positions',
      description: 'Pre-employment and random drug screening',
      required: 12,
      completed: 11,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold" style={{ color: 'var(--header-text)' }}>
            Compliance Requirements
          </h3>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white"
            style={{ background: 'var(--primary-btn)' }}
          >
            <FileText className="h-4 w-4" />
            Add Requirement
          </button>
        </div>
        <div className="space-y-4">
          {requirements.map((req, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl shadow-md hover:shadow-lg transition-all"
              style={{ background: 'var(--calendar-bg)' }}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-bold" style={{ color: 'var(--header-text)' }}>
                      {req.name}
                    </h4>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'var(--today-highlight)', color: '#fff' }}>
                      {req.category}
                    </span>
                  </div>
                  <p className="text-sm opacity-70 mb-2">{req.description}</p>
                  <div className="flex gap-4 text-xs opacity-60">
                    <span>📅 {req.frequency}</span>
                    <span>👥 {req.applicableTo}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--header-text)' }}>
                    {Math.round((req.completed / req.required) * 100)}%
                  </div>
                  <div className="text-xs opacity-60">{req.completed}/{req.required}</div>
                </div>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(req.completed / req.required) * 100}%`,
                    background: (req.completed / req.required) * 100 >= 95 ? '#22c55e' : (req.completed / req.required) * 100 >= 85 ? '#eab308' : '#ef4444',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReportsSection() {
  return (
    <div className="space-y-6">
      {/* Quick Reports */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Compliance Summary Report', description: 'Overall compliance status across all categories', icon: '📊' },
          { title: 'Expiration Report', description: 'All certifications expiring in the next 90 days', icon: '⏰' },
          { title: 'Overdue Items Report', description: 'Items past their renewal date', icon: '⚠️' },
          { title: 'Department Compliance', description: 'Compliance rates by department', icon: '🏢' },
          { title: 'Training Completion', description: 'All completed training sessions', icon: '🎓' },
          { title: 'Audit Trail', description: 'Full compliance history and changes', icon: '📝' },
        ].map((report, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            style={{ background: 'var(--card-bg)' }}
          >
            <div className="text-5xl mb-3">{report.icon}</div>
            <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--header-text)' }}>
              {report.title}
            </h4>
            <p className="text-sm opacity-70 mb-4">{report.description}</p>
            <button
              className="w-full py-2 px-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2"
              style={{ background: 'var(--primary-btn)' }}
            >
              <Download className="h-4 w-4" />
              Generate
            </button>
          </div>
        ))}
      </div>

      {/* Custom Report Builder */}
      <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
          Custom Report Builder
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Report Type</label>
            <select className="w-full p-3 rounded-lg" style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}>
              <option>Compliance Status</option>
              <option>Training Records</option>
              <option>Certification History</option>
              <option>Violation Log</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Date Range</label>
            <select className="w-full p-3 rounded-lg" style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Department</label>
            <select className="w-full p-3 rounded-lg" style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}>
              <option>All Departments</option>
              <option>Sales</option>
              <option>Operations</option>
              <option>Kitchen</option>
              <option>Management</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Format</label>
            <select className="w-full p-3 rounded-lg" style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}>
              <option>PDF</option>
              <option>Excel (XLSX)</option>
              <option>CSV</option>
              <option>JSON</option>
            </select>
          </div>
        </div>
        <button
          className="w-full py-3 px-6 rounded-lg font-bold text-white text-lg flex items-center justify-center gap-2"
          style={{ background: 'var(--primary-btn)' }}
        >
          <Download className="h-5 w-5" />
          Generate Custom Report
        </button>
      </div>
    </div>
  );
}

function HealthcareStandardsSection({ healthcareView, setHealthcareView }: { healthcareView: 'cms' | 'joint-commission' | 'survey-readiness' | 'price-transparency', setHealthcareView: (view: 'cms' | 'joint-commission' | 'survey-readiness' | 'price-transparency') => void }) {
  return (
    <div>
      {/* Healthcare Sub-tabs */}
      <div className="flex gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setHealthcareView('cms')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            healthcareView === 'cms' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
          }`}
          style={{
            background: healthcareView === 'cms' ? 'var(--primary-btn)' : 'var(--card-bg)',
            color: healthcareView === 'cms' ? '#ffffff' : 'var(--body-text)',
          }}
        >
          CMS Core Measures
        </button>
        <button
          onClick={() => setHealthcareView('joint-commission')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            healthcareView === 'joint-commission' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
          }`}
          style={{
            background: healthcareView === 'joint-commission' ? 'var(--primary-btn)' : 'var(--card-bg)',
            color: healthcareView === 'joint-commission' ? '#ffffff' : 'var(--body-text)',
          }}
        >
          Joint Commission
        </button>
        <button
          onClick={() => setHealthcareView('survey-readiness')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            healthcareView === 'survey-readiness' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
          }`}
          style={{
            background: healthcareView === 'survey-readiness' ? 'var(--primary-btn)' : 'var(--card-bg)',
            color: healthcareView === 'survey-readiness' ? '#ffffff' : 'var(--body-text)',
          }}
        >
          Survey Readiness
        </button>
        <button
          onClick={() => setHealthcareView('price-transparency')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            healthcareView === 'price-transparency' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
          }`}
          style={{
            background: healthcareView === 'price-transparency' ? 'var(--primary-btn)' : 'var(--card-bg)',
            color: healthcareView === 'price-transparency' ? '#ffffff' : 'var(--body-text)',
          }}
        >
          Price Transparency
        </button>
      </div>

      {healthcareView === 'cms' && <CMSSection />}
      {healthcareView === 'joint-commission' && <JointCommissionSection />}
      {healthcareView === 'survey-readiness' && <SurveyReadinessSection />}
      {healthcareView === 'price-transparency' && <PriceTransparencySection />}
    </div>
  );
}

function CMSSection() {
  const cmsCoreMeasures = [
    {
      category: 'Patient Safety',
      measures: [
        { id: 'PSI-01', name: 'Pressure Ulcer Rate', target: '<5%', current: '3.2%', status: 'compliant', trend: 'improving' },
        { id: 'PSI-02', name: 'Fall Prevention', target: '<2 per 1000', current: '1.5 per 1000', status: 'compliant', trend: 'stable' },
        { id: 'PSI-03', name: 'Medication Errors', target: '<1%', current: '0.8%', status: 'compliant', trend: 'improving' },
        { id: 'PSI-04', name: 'Hospital-Acquired Infections', target: '<3%', current: '4.1%', status: 'non-compliant', trend: 'needs-improvement' },
      ]
    },
    {
      category: 'Quality of Care',
      measures: [
        { id: 'QM-01', name: 'Timely ED Care', target: '>85%', current: '88%', status: 'compliant', trend: 'stable' },
        { id: 'QM-02', name: 'Appropriate Antibiotic Use', target: '>95%', current: '97%', status: 'compliant', trend: 'improving' },
        { id: 'QM-03', name: 'Patient Satisfaction', target: '>80%', current: '82%', status: 'compliant', trend: 'improving' },
        { id: 'QM-04', name: '30-Day Readmission Rate', target: '<15%', current: '13.5%', status: 'compliant', trend: 'stable' },
      ]
    },
    {
      category: 'Emergency Preparedness',
      measures: [
        { id: 'EP-01', name: 'Emergency Plan Review', target: 'Annual', current: 'Last: 2 months ago', status: 'compliant', trend: 'stable' },
        { id: 'EP-02', name: 'Staff Drills Conducted', target: '2/year', current: '1 completed', status: 'warning', trend: 'needs-action' },
        { id: 'EP-03', name: 'Backup Power Testing', target: 'Quarterly', current: 'Last: 1 month ago', status: 'compliant', trend: 'stable' },
      ]
    },
    {
      category: 'Patient Rights',
      measures: [
        { id: 'PR-01', name: 'Informed Consent Compliance', target: '100%', current: '98%', status: 'warning', trend: 'needs-improvement' },
        { id: 'PR-02', name: 'Advance Directive Documentation', target: '95%', current: '96%', status: 'compliant', trend: 'stable' },
        { id: 'PR-03', name: 'Privacy Notice Distribution', target: '100%', current: '100%', status: 'compliant', trend: 'stable' },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* CMS Header */}
      <div className="p-6 rounded-xl shadow-lg border-l-4 border-blue-500" style={{ background: 'var(--card-bg)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
          CMS Core Measures Compliance
        </h2>
        <p className="opacity-80">
          Tracking Centers for Medicare & Medicaid Services quality and safety standards
        </p>
      </div>

      {/* Overall CMS Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <div className="text-sm opacity-70 mb-1">Overall CMS Score</div>
          <div className="text-3xl font-bold text-green-500">4.2/5</div>
          <div className="text-xs opacity-60">Above national avg</div>
        </div>
        <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <div className="text-sm opacity-70 mb-1">Compliant Measures</div>
          <div className="text-3xl font-bold" style={{ color: 'var(--header-text)' }}>12/15</div>
          <div className="text-xs text-green-500">80% compliance</div>
        </div>
        <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <div className="text-sm opacity-70 mb-1">Needs Attention</div>
          <div className="text-3xl font-bold text-yellow-500">2</div>
          <div className="text-xs opacity-60">Action required</div>
        </div>
        <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <div className="text-sm opacity-70 mb-1">Non-Compliant</div>
          <div className="text-3xl font-bold text-red-500">1</div>
          <div className="text-xs text-red-500">Immediate action</div>
        </div>
      </div>

      {/* CMS Measures by Category */}
      {cmsCoreMeasures.map(category => (
        <div key={category.category} className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
            {category.category}
          </h3>
          <div className="space-y-3">
            {category.measures.map(measure => (
              <div key={measure.id} className="p-4 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-1">
                    <div className="font-semibold">{measure.id}: {measure.name}</div>
                    <div className="text-sm opacity-70">Target: {measure.target} | Current: {measure.current}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      measure.status === 'compliant' ? 'bg-green-500 text-white' :
                      measure.status === 'warning' ? 'bg-yellow-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {measure.status === 'compliant' ? '✓ Compliant' :
                       measure.status === 'warning' ? '⚠ Warning' :
                       '✗ Non-Compliant'}
                    </span>
                    <span className={`text-sm font-semibold ${
                      measure.trend === 'improving' ? 'text-green-500' :
                      measure.trend === 'stable' ? 'text-blue-500' :
                      'text-yellow-500'
                    }`}>
                      {measure.trend === 'improving' ? '↑ Improving' :
                       measure.trend === 'stable' ? '→ Stable' :
                       '⚠ Action Needed'}
                    </span>
                  </div>
                </div>
                {measure.status !== 'compliant' && (
                  <div className="mt-2 text-sm text-yellow-500">
                    💡 Action Plan: {measure.status === 'warning' ? 'Schedule review meeting' : 'Immediate intervention required'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function JointCommissionSection() {
  const jointCommissionStandards = [
    {
      category: 'National Patient Safety Goals (NPSGs)',
      icon: '🎯',
      standards: [
        { id: 'NPSG.01.01.01', name: 'Use at least 2 patient identifiers', compliance: 98, status: 'compliant', lastAudit: '2 weeks ago' },
        { id: 'NPSG.02.03.01', name: 'Report critical results of tests', compliance: 95, status: 'compliant', lastAudit: '1 week ago' },
        { id: 'NPSG.03.04.01', name: 'Label all medications', compliance: 100, status: 'compliant', lastAudit: '3 days ago' },
        { id: 'NPSG.03.06.01', name: 'Maintain medication list', compliance: 92, status: 'warning', lastAudit: '1 week ago' },
        { id: 'NPSG.06.01.01', name: 'Reduce infection risk', compliance: 88, status: 'warning', lastAudit: '2 weeks ago' },
        { id: 'NPSG.07.01.01', name: 'Reduce infection from catheters', compliance: 94, status: 'compliant', lastAudit: '1 week ago' },
      ]
    },
    {
      category: 'Medication Management (MM)',
      icon: '💊',
      standards: [
        { id: 'MM.01.01.01', name: 'Medication ordering', compliance: 97, status: 'compliant', lastAudit: '1 week ago' },
        { id: 'MM.02.01.01', name: 'Medication preparation', compliance: 99, status: 'compliant', lastAudit: '3 days ago' },
        { id: 'MM.03.01.01', name: 'Medication dispensing', compliance: 100, status: 'compliant', lastAudit: '5 days ago' },
        { id: 'MM.04.01.01', name: 'Medication administration', compliance: 96, status: 'compliant', lastAudit: '1 week ago' },
        { id: 'MM.05.01.09', name: 'High-alert medications', compliance: 93, status: 'warning', lastAudit: '2 weeks ago' },
        { id: 'MM.06.01.01', name: 'Medication reconciliation', compliance: 89, status: 'warning', lastAudit: '1 week ago' },
      ]
    },
    {
      category: 'Environment of Care (EC)',
      icon: '🏥',
      standards: [
        { id: 'EC.02.01.01', name: 'Life safety management', compliance: 95, status: 'compliant', lastAudit: '1 month ago' },
        { id: 'EC.02.02.01', name: 'Medical equipment management', compliance: 98, status: 'compliant', lastAudit: '2 weeks ago' },
        { id: 'EC.02.03.05', name: 'Utility systems management', compliance: 100, status: 'compliant', lastAudit: '3 weeks ago' },
        { id: 'EC.02.05.01', name: 'Fire safety management', compliance: 97, status: 'compliant', lastAudit: '1 month ago' },
        { id: 'EC.04.01.01', name: 'Emergency management', compliance: 91, status: 'warning', lastAudit: '2 months ago' },
      ]
    },
    {
      category: 'Infection Control (IC)',
      icon: '🦠',
      standards: [
        { id: 'IC.01.01.01', name: 'Hand hygiene compliance', compliance: 87, status: 'non-compliant', lastAudit: '1 week ago' },
        { id: 'IC.01.03.01', name: 'Isolation precautions', compliance: 94, status: 'compliant', lastAudit: '1 week ago' },
        { id: 'IC.02.01.01', name: 'Infection surveillance', compliance: 96, status: 'compliant', lastAudit: '2 weeks ago' },
        { id: 'IC.02.02.01', name: 'Infection prevention', compliance: 92, status: 'warning', lastAudit: '1 week ago' },
      ]
    },
    {
      category: 'Leadership (LD)',
      icon: '👔',
      standards: [
        { id: 'LD.01.03.01', name: 'Quality assessment', compliance: 95, status: 'compliant', lastAudit: '1 month ago' },
        { id: 'LD.03.01.01', name: 'Performance improvement', compliance: 93, status: 'warning', lastAudit: '2 weeks ago' },
        { id: 'LD.04.01.01', name: 'Staff competence', compliance: 97, status: 'compliant', lastAudit: '3 weeks ago' },
      ]
    }
  ];

  const overallCompliance = 94;
  const compliantCount = jointCommissionStandards.flatMap(c => c.standards).filter(s => s.status === 'compliant').length;
  const totalCount = jointCommissionStandards.flatMap(c => c.standards).length;
  const warningCount = jointCommissionStandards.flatMap(c => c.standards).filter(s => s.status === 'warning').length;
  const nonCompliantCount = jointCommissionStandards.flatMap(c => c.standards).filter(s => s.status === 'non-compliant').length;

  return (
    <div className="space-y-6">
      {/* Joint Commission Header */}
      <div className="p-6 rounded-xl shadow-lg border-l-4 border-purple-500" style={{ background: 'var(--card-bg)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
          Joint Commission Standards Compliance
        </h2>
        <p className="opacity-80">
          Maintaining accreditation through continuous compliance monitoring
        </p>
      </div>

      {/* Overall Joint Commission Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <div className="text-sm opacity-70 mb-1">Overall Compliance</div>
          <div className="text-3xl font-bold text-green-500">{overallCompliance}%</div>
          <div className="text-xs text-green-500">Accreditation maintained</div>
        </div>
        <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <div className="text-sm opacity-70 mb-1">Compliant Standards</div>
          <div className="text-3xl font-bold" style={{ color: 'var(--header-text)' }}>{compliantCount}/{totalCount}</div>
          <div className="text-xs opacity-60">Meeting requirements</div>
        </div>
        <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <div className="text-sm opacity-70 mb-1">Needs Improvement</div>
          <div className="text-3xl font-bold text-yellow-500">{warningCount}</div>
          <div className="text-xs opacity-60">Monitor closely</div>
        </div>
        <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <div className="text-sm opacity-70 mb-1">Non-Compliant</div>
          <div className="text-3xl font-bold text-red-500">{nonCompliantCount}</div>
          <div className="text-xs text-red-500">Immediate action</div>
        </div>
      </div>

      {/* Joint Commission Standards by Category */}
      {jointCommissionStandards.map(category => (
        <div key={category.category} className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--header-text)' }}>
            <span className="text-3xl">{category.icon}</span>
            {category.category}
          </h3>
          <div className="space-y-3">
            {category.standards.map(standard => (
              <div key={standard.id} className="p-4 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-semibold mb-1">{standard.id}</div>
                    <div className="text-sm opacity-80">{standard.name}</div>
                    <div className="text-xs opacity-60 mt-1">Last audit: {standard.lastAudit}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-2xl font-bold" style={{ color: 
                        standard.compliance >= 95 ? '#22c55e' :
                        standard.compliance >= 90 ? '#eab308' :
                        '#ef4444'
                      }}>
                        {standard.compliance}%
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                      standard.status === 'compliant' ? 'bg-green-500 text-white' :
                      standard.status === 'warning' ? 'bg-yellow-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {standard.status === 'compliant' ? '✓ Compliant' :
                       standard.status === 'warning' ? '⚠ Warning' :
                       '✗ Deficient'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Action Items */}
      <div className="p-6 rounded-xl shadow-lg border-l-4 border-red-500" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-xl font-bold mb-4 text-red-500">Priority Action Items</h3>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500">
            <div className="font-semibold text-red-500 mb-1">IC.01.01.01 - Hand Hygiene Compliance (87%)</div>
            <div className="text-sm mb-2">Target: 95% | Current: 87% | Gap: 8%</div>
            <div className="text-sm">
              <strong>Action Plan:</strong> Increase hand hygiene audits to daily, provide additional staff education, post visual reminders at all sinks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SurveyReadinessSection() {
  const surveyCategories = [
    {
      name: 'Documentation Readiness',
      score: 92,
      items: [
        { name: 'Policy & Procedure Manual', status: 'complete', lastReviewed: '1 month ago' },
        { name: 'Staff Credentials Files', status: 'complete', lastReviewed: '2 weeks ago' },
        { name: 'Equipment Maintenance Logs', status: 'needs-update', lastReviewed: '3 months ago' },
        { name: 'Quality Improvement Data', status: 'complete', lastReviewed: '1 week ago' },
        { name: 'Infection Control Reports', status: 'complete', lastReviewed: '1 week ago' },
      ]
    },
    {
      name: 'Staff Preparedness',
      score: 88,
      items: [
        { name: 'Staff Training Records', status: 'complete', lastReviewed: '2 weeks ago' },
        { name: 'Mock Survey Completed', status: 'needs-update', lastReviewed: '4 months ago' },
        { name: 'Staff Interview Prep', status: 'in-progress', lastReviewed: '1 week ago' },
        { name: 'Competency Assessments', status: 'complete', lastReviewed: '1 month ago' },
      ]
    },
    {
      name: 'Environment of Care',
      score: 95,
      items: [
        { name: 'Fire Safety Inspection', status: 'complete', lastReviewed: '1 month ago' },
        { name: 'Life Safety Code Compliance', status: 'complete', lastReviewed: '2 months ago' },
        { name: 'Emergency Equipment Check', status: 'complete', lastReviewed: '1 week ago' },
        { name: 'Utility Systems Testing', status: 'complete', lastReviewed: '2 weeks ago' },
      ]
    },
    {
      name: 'Patient Care Standards',
      score: 90,
      items: [
        { name: 'Medical Record Review', status: 'complete', lastReviewed: '1 week ago' },
        { name: 'Medication Management', status: 'complete', lastReviewed: '3 days ago' },
        { name: 'Patient Rights Documentation', status: 'needs-update', lastReviewed: '6 weeks ago' },
        { name: 'Restraint/Seclusion Logs', status: 'complete', lastReviewed: '1 week ago' },
      ]
    }
  ];

  const overallReadiness = 91;
  const nextSurvey = 'Expected in 6-8 months';

  return (
    <div className="space-y-6">
      {/* Survey Readiness Header */}
      <div className="p-6 rounded-xl shadow-lg border-l-4 border-green-500" style={{ background: 'var(--card-bg)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
          Survey Readiness Assessment
        </h2>
        <p className="opacity-80">
          Preparing for Joint Commission and CMS surveys
        </p>
      </div>

      {/* Overall Readiness */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <div className="text-sm opacity-70 mb-1">Overall Readiness</div>
          <div className="text-4xl font-bold text-green-500 mb-2">{overallReadiness}%</div>
          <div className="text-xs text-green-500">Survey ready</div>
        </div>
        <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <div className="text-sm opacity-70 mb-1">Next Expected Survey</div>
          <div className="text-xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>{nextSurvey}</div>
          <div className="text-xs opacity-60">Maintain readiness</div>
        </div>
        <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <div className="text-sm opacity-70 mb-1">Items Needing Attention</div>
          <div className="text-4xl font-bold text-yellow-500 mb-2">4</div>
          <div className="text-xs opacity-60">Review required</div>
        </div>
      </div>

      {/* Survey Categories */}
      {surveyCategories.map(category => (
        <div key={category.name} className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold" style={{ color: 'var(--header-text)' }}>
              {category.name}
            </h3>
            <div className="text-3xl font-bold" style={{ color: 
              category.score >= 95 ? '#22c55e' :
              category.score >= 85 ? '#eab308' :
              '#ef4444'
            }}>
              {category.score}%
            </div>
          </div>
          <div className="space-y-2">
            {category.items.map(item => (
              <div key={item.name} className="flex items-center justify-between p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
                <div className="flex-1">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs opacity-60">Last reviewed: {item.lastReviewed}</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  item.status === 'complete' ? 'bg-green-500 text-white' :
                  item.status === 'in-progress' ? 'bg-blue-500 text-white' :
                  'bg-yellow-500 text-white'
                }`}>
                  {item.status === 'complete' ? '✓ Complete' :
                   item.status === 'in-progress' ? '⟳ In Progress' :
                   '⚠ Needs Update'}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Mock Survey Schedule */}
      <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
          📅 Mock Survey Schedule
        </h3>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500">
            <div className="font-semibold text-blue-500 mb-1">Next Mock Survey: February 15, 2026</div>
            <div className="text-sm">Focus areas: Medication Management, Infection Control, Patient Rights</div>
          </div>
          <div className="p-4 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
            <div className="font-semibold mb-1">Quarterly Review: March 1, 2026</div>
            <div className="text-sm opacity-70">Comprehensive documentation review across all departments</div>
          </div>
          <div className="p-4 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
            <div className="font-semibold mb-1">Staff Training: Ongoing</div>
            <div className="text-sm opacity-70">Monthly survey preparedness training for all staff</div>
          </div>
        </div>
      </div>

      {/* Quick Action Items */}
      <div className="p-6 rounded-xl shadow-lg border-l-4 border-yellow-500" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-xl font-bold mb-4 text-yellow-500">⚡ Priority Actions Before Next Survey</h3>
        <div className="space-y-2">
          <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
            <div className="font-semibold">1. Update Equipment Maintenance Logs</div>
            <div className="text-sm opacity-70">Last updated 3 months ago - review and update all equipment records</div>
          </div>
          <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
            <div className="font-semibold">2. Schedule Mock Survey</div>
            <div className="text-sm opacity-70">Last mock survey was 4 months ago - conduct new assessment</div>
          </div>
          <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
            <div className="font-semibold">3. Review Patient Rights Documentation</div>
            <div className="text-sm opacity-70">Ensure all patient rights materials are current and properly distributed</div>
          </div>
          <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
            <div className="font-semibold">4. Complete Staff Interview Preparation</div>
            <div className="text-sm opacity-70">Finalize training materials and conduct practice interviews</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function PriceTransparencySection() {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [checkResults, setCheckResults] = useState<{
    checked: boolean;
    compliant: boolean;
    findings: {
      requirement: string;
      status: 'pass' | 'fail' | 'warning';
      details: string;
    }[];
  } | null>(null);

  const handleCheckCompliance = () => {
    setIsChecking(true);
    
    // Simulate checking (in production, this would call an API or crawl the website)
    setTimeout(() => {
      const mockResults = {
        checked: true,
        compliant: false,
        findings: [
          {
            requirement: 'Machine-Readable File (MRF)',
            status: 'fail' as const,
            details: 'No machine-readable file found at standard locations (/transparency, /price-transparency). CMS requires JSON, XML, or CSV format with all standard charges.'
          },
          {
            requirement: 'Consumer-Friendly Display',
            status: 'warning' as const,
            details: 'Price estimator tool found but missing 300 shoppable services requirement. Only 150 services currently displayed.'
          },
          {
            requirement: 'Standard Charges for All Items & Services',
            status: 'fail' as const,
            details: 'Incomplete data - missing gross charges, discounted cash prices, and payer-specific negotiated charges for most services.'
          },
          {
            requirement: 'Payer-Specific Negotiated Charges',
            status: 'fail' as const,
            details: 'No payer-specific negotiated charge data published. Must include all third-party payers (commercial insurers, Medicare Advantage, etc.).'
          },
          {
            requirement: 'De-identified Minimum & Maximum Negotiated Charges',
            status: 'pass' as const,
            details: 'Found minimum and maximum negotiated charge data for displayed services.'
          },
          {
            requirement: 'Discounted Cash Prices',
            status: 'warning' as const,
            details: 'Cash prices found but not clearly labeled. Should explicitly state "discounted cash price" per CMS guidelines.'
          },
          {
            requirement: 'File Format & Accessibility',
            status: 'fail' as const,
            details: 'No publicly accessible link to downloadable standard charge data. CMS requires a direct link from hospital website homepage.'
          },
          {
            requirement: 'Update Frequency',
            status: 'warning' as const,
            details: 'Last updated date not clearly displayed. CMS requires annual updates at minimum, with clear publication date.'
          }
        ]
      };
      setCheckResults(mockResults);
      setIsChecking(false);
    }, 2000);
  };

  const cmsRequirements = [
    {
      title: 'Machine-Readable File (MRF)',
      description: 'Publish a machine-readable file (JSON, XML, or CSV) containing all standard charges for all items and services.',
      penalty: 'Up to $300/day for small hospitals, $5,500/day for large hospitals',
      required: true
    },
    {
      title: 'Consumer-Friendly Display',
      description: 'Display payer-specific negotiated charges and discounted cash prices for at least 300 shoppable services in a consumer-friendly manner.',
      penalty: 'Same penalties apply - $300-$5,500/day',
      required: true
    },
    {
      title: 'Standard Charges Must Include',
      description: '• Gross charges (chargemaster rates)\n• Discounted cash prices\n• Payer-specific negotiated charges\n• De-identified minimum negotiated charges\n• De-identified maximum negotiated charges',
      penalty: 'Non-compliance with any element subject to penalties',
      required: true
    },
    {
      title: 'Annual Updates Required',
      description: 'Update price information at least annually. More frequent updates recommended when rates change.',
      penalty: 'Enforcement actions for outdated information',
      required: true
    }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="p-6 rounded-xl shadow-lg border-l-4 border-blue-500" style={{ background: 'var(--card-bg)' }}>
        <div className="flex items-start gap-4">
          <Shield className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
              CMS Price Transparency Compliance Checker
            </h3>
            <p className="opacity-80 mb-4">
              Verify compliance with CMS Hospital Price Transparency regulations (45 CFR § 180.50). 
              As of January 1, 2021, hospitals must publish standard charges online in both machine-readable 
              and consumer-friendly formats.
            </p>
            <div className="flex items-center gap-2 text-sm bg-red-500/10 text-red-500 p-3 rounded-lg">
              <AlertTriangle className="h-4 w-4 flex-shrink-0" />
              <span className="font-semibold">
                Non-compliance penalties: $300/day (small hospitals) up to $5,500/day (large hospitals, 550+ beds)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* URL Checker Tool */}
      <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--header-text)' }}>
          <Search className="h-6 w-6" style={{ color: 'var(--today-highlight)' }} />
          Check Hospital Website Compliance
        </h3>
        
        <div className="flex gap-3 mb-4">
          <div className="flex-1">
            <input
              type="url"
              placeholder="Enter hospital website URL (e.g., https://example-hospital.com)"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-base"
              style={{ 
                background: 'var(--calendar-bg)', 
                border: '2px solid var(--border-color)',
                color: 'var(--body-text)'
              }}
            />
          </div>
          <button
            onClick={handleCheckCompliance}
            disabled={!websiteUrl || isChecking}
            className="px-6 py-3 rounded-lg font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            style={{ background: 'var(--primary-btn)' }}
          >
            {isChecking ? (
              <>
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                Checking...
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                Check Compliance
              </>
            )}
          </button>
        </div>

        <div className="text-sm opacity-70">
          💡 This tool will scan the hospital website for required price transparency files and consumer-friendly displays.
        </div>
      </div>

      {/* Check Results */}
      {checkResults?.checked && (
        <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold" style={{ color: 'var(--header-text)' }}>
              Compliance Check Results
            </h3>
            <div className={`px-6 py-3 rounded-full text-lg font-bold ${
              checkResults.compliant 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 text-white'
            }`}>
              {checkResults.compliant ? '✓ COMPLIANT' : '✗ NON-COMPLIANT'}
            </div>
          </div>

          <div className="space-y-4">
            {checkResults.findings.map((finding, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border-l-4 ${
                  finding.status === 'pass' 
                    ? 'border-green-500 bg-green-500/10' 
                    : finding.status === 'warning'
                    ? 'border-yellow-500 bg-yellow-500/10'
                    : 'border-red-500 bg-red-500/10'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {finding.status === 'pass' ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : finding.status === 'warning' ? (
                      <AlertTriangle className="h-6 w-6 text-yellow-500" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className={`font-bold text-lg mb-2 ${
                      finding.status === 'pass' 
                        ? 'text-green-500' 
                        : finding.status === 'warning'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}>
                      {finding.requirement}
                    </div>
                    <p className="opacity-90">{finding.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Items */}
          {!checkResults.compliant && (
            <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500">
              <h4 className="font-bold text-blue-500 mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recommended Actions to Achieve Compliance
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 flex-shrink-0">1.</span>
                  <span>Create and publish a machine-readable file (JSON format recommended) with all standard charges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 flex-shrink-0">2.</span>
                  <span>Develop a consumer-friendly price estimator tool with at least 300 shoppable services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 flex-shrink-0">3.</span>
                  <span>Include all required charge types: gross, discounted cash, payer-specific negotiated, min/max</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 flex-shrink-0">4.</span>
                  <span>Add prominent link on homepage to price transparency pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 flex-shrink-0">5.</span>
                  <span>Display clear "Last Updated" date and establish annual update schedule</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}

      {/* CMS Requirements Reference */}
      <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
          📋 CMS Price Transparency Requirements
        </h3>
        <div className="space-y-4">
          {cmsRequirements.map((req, index) => (
            <div key={index} className="p-4 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
              <div className="flex items-start gap-3 mb-2">
                {req.required && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">REQUIRED</span>}
                <h4 className="font-bold text-lg flex-1" style={{ color: 'var(--header-text)' }}>{req.title}</h4>
              </div>
              <p className="opacity-80 mb-3 whitespace-pre-line">{req.description}</p>
              <div className="text-sm bg-red-500/10 text-red-500 p-3 rounded flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                <span className="font-semibold">{req.penalty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
          🔗 Official CMS Resources
        </h3>
        <div className="space-y-3">
          <a
            href="https://www.cms.gov/hospital-price-transparency"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg hover:scale-105 transition-all"
            style={{ background: 'var(--calendar-bg)' }}
          >
            <ExternalLink className="h-5 w-5" style={{ color: 'var(--today-highlight)' }} />
            <div>
              <div className="font-semibold">CMS Hospital Price Transparency Home</div>
              <div className="text-sm opacity-70">Official regulations and guidance</div>
            </div>
          </a>
          <a
            href="https://www.cms.gov/files/document/hospital-price-transparency-frequently-asked-questions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg hover:scale-105 transition-all"
            style={{ background: 'var(--calendar-bg)' }}
          >
            <ExternalLink className="h-5 w-5" style={{ color: 'var(--today-highlight)' }} />
            <div>
              <div className="font-semibold">FAQs & Implementation Guide</div>
              <div className="text-sm opacity-70">Detailed guidance for hospitals</div>
            </div>
          </a>
          <a
            href="https://www.cms.gov/files/document/steps-making-public-standard-charges-hospital-services.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg hover:scale-105 transition-all"
            style={{ background: 'var(--calendar-bg)' }}
          >
            <ExternalLink className="h-5 w-5" style={{ color: 'var(--today-highlight)' }} />
            <div>
              <div className="font-semibold">Implementation Checklist</div>
              <div className="text-sm opacity-70">Step-by-step compliance guide</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
function OSHAGeneralSection() {
  return (
    <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
      <h3 className="text-2xl font-bold mb-4">⚠️ OSHA General Requirements</h3>
      <p className="mb-4">Workplace safety standards, hazard communication, PPE requirements, and general duty clause compliance.</p>
      <div className="text-sm opacity-70">Full OSHA general requirements module coming soon.</div>
    </div>
  );
}

function OSHARecordkeepingSection() {
  return (
    <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
      <h3 className="text-2xl font-bold mb-4">📋 OSHA Recordkeeping (300, 300A, 301 Forms)</h3>
      <p className="mb-4">Track and record work-related injuries and illnesses. Annual summary (300A) must be posted February 1 - April 30.</p>
      <div className="text-sm opacity-70">Full OSHA recordkeeping module coming soon.</div>
    </div>
  );
}

function OSHATrainingSection() {
  return (
    <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
      <h3 className="text-2xl font-bold mb-4">🎓 OSHA Training Requirements</h3>
      <p className="mb-4">Mandatory safety training programs, certifications, and documentation requirements.</p>
      <div className="text-sm opacity-70">Full OSHA training module coming soon.</div>
    </div>
  );
}

function OSHASection({ oshaView, setOshaView }: { oshaView: 'general' | 'recordkeeping' | 'training', setOshaView: (view: 'general' | 'recordkeeping' | 'training') => void }) {
  return (
    <div>
      {/* OSHA Sub-tabs */}
      <div className="flex gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setOshaView('general')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            oshaView === 'general' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
          }`}
          style={{
            background: oshaView === 'general' ? 'var(--primary-btn)' : 'var(--card-bg)',
            color: oshaView === 'general' ? '#ffffff' : 'var(--body-text)',
          }}
        >
          General Requirements
        </button>
        <button
          onClick={() => setOshaView('recordkeeping')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            oshaView === 'recordkeeping' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
          }`}
          style={{
            background: oshaView === 'recordkeeping' ? 'var(--primary-btn)' : 'var(--card-bg)',
            color: oshaView === 'recordkeeping' ? '#ffffff' : 'var(--body-text)',
          }}
        >
          Recordkeeping
        </button>
        <button
          onClick={() => setOshaView('training')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            oshaView === 'training' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
          }`}
          style={{
            background: oshaView === 'training' ? 'var(--primary-btn)' : 'var(--card-bg)',
            color: oshaView === 'training' ? '#ffffff' : 'var(--body-text)',
          }}
        >
          Training Requirements
        </button>
      </div>

      {oshaView === 'general' && <OSHAGeneralSection />}
      {oshaView === 'recordkeeping' && <OSHARecordkeepingSection />}
      {oshaView === 'training' && <OSHATrainingSection />}
    </div>
  );
}
