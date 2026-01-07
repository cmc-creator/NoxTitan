'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, FileText, DollarSign, Heart, Phone, MapPin, Mail, Edit, Download, CreditCard, Users, Shield, Calendar } from 'lucide-react';

export default function EmployeeSelfService() {
  const [activeTab, setActiveTab] = useState('profile');

  const employee = {
    name: 'Sarah Johnson',
    employeeId: 'EMP-1024',
    department: 'Nursing - ICU',
    position: 'Registered Nurse',
    manager: 'Dr. Michael Chen',
    email: 'sarah.johnson@noxtitan.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Apt 4B, Seattle, WA 98101',
    hireDate: '2023-03-15',
    birthDate: '1992-07-22',
    emergencyContact: 'John Johnson (Spouse) - (555) 987-6543',
  };

  const payStubs = [
    { id: 1, date: '2026-01-01', period: 'Dec 16 - Dec 31, 2025', gross: 4250, net: 3187, status: 'paid' },
    { id: 2, date: '2025-12-15', period: 'Dec 1 - Dec 15, 2025', gross: 4100, net: 3075, status: 'paid' },
    { id: 3, date: '2025-12-01', period: 'Nov 16 - Nov 30, 2025', gross: 4350, net: 3262, status: 'paid' },
    { id: 4, date: '2025-11-15', period: 'Nov 1 - Nov 15, 2025', gross: 4000, net: 3000, status: 'paid' },
  ];

  const taxDocs = [
    { id: 1, name: 'W-2 Form 2025', year: 2025, type: 'W-2', size: '156 KB', date: '2026-01-15' },
    { id: 2, name: 'W-4 Form', year: 2026, type: 'W-4', size: '98 KB', date: '2026-01-01' },
    { id: 3, name: 'W-2 Form 2024', year: 2024, type: 'W-2', size: '148 KB', date: '2025-01-15' },
  ];

  const benefits = [
    { name: 'Medical Insurance', provider: 'Blue Cross Blue Shield', plan: 'PPO Gold', status: 'active', premium: 180, coverage: 'Employee + Spouse' },
    { name: 'Dental Insurance', provider: 'Delta Dental', plan: 'Premium', status: 'active', premium: 45, coverage: 'Employee + Spouse' },
    { name: 'Vision Insurance', provider: 'VSP', plan: 'Standard', status: 'active', premium: 12, coverage: 'Employee Only' },
    { name: '401(k) Plan', provider: 'Fidelity', plan: 'Traditional', status: 'active', contribution: '6%', match: '4%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/hr" className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-4 transition-colors">
            ← Back to HR Center
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 mb-2"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(168,85,247,0.6)',
                    WebkitTextStroke: '1px rgba(168,85,247,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
                Employee Self-Service Portal
              </h1>
              <p className="text-purple-200">Manage your profile, pay, benefits, and documents</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-white font-bold">{employee.name}</div>
                <div className="text-sm text-purple-300">{employee.employeeId}</div>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                SJ
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <button className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 hover:from-blue-800/50 hover:to-cyan-800/50 rounded-xl p-4 border-2 border-blue-500/30 transition-all flex items-center gap-3 group">
            <Calendar className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-white font-bold">Request Time Off</div>
              <div className="text-xs text-slate-400">120 hrs PTO available</div>
            </div>
          </button>
          <button className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 hover:from-emerald-800/50 hover:to-teal-800/50 rounded-xl p-4 border-2 border-emerald-500/30 transition-all flex items-center gap-3 group">
            <Download className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-white font-bold">Get Pay Stub</div>
              <div className="text-xs text-slate-400">Latest: Jan 1, 2026</div>
            </div>
          </button>
          <button className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 hover:from-purple-800/50 hover:to-pink-800/50 rounded-xl p-4 border-2 border-purple-500/30 transition-all flex items-center gap-3 group">
            <Heart className="w-8 h-8 text-pink-400 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-white font-bold">Update Benefits</div>
              <div className="text-xs text-slate-400">Open enrollment</div>
            </div>
          </button>
          <button className="bg-gradient-to-br from-orange-900/50 to-amber-900/50 hover:from-orange-800/50 hover:to-amber-800/50 rounded-xl p-4 border-2 border-orange-500/30 transition-all flex items-center gap-3 group">
            <Edit className="w-8 h-8 text-orange-400 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-white font-bold">Update Profile</div>
              <div className="text-xs text-slate-400">Keep info current</div>
            </div>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-slate-800/50 p-2 rounded-lg">
          {[
            { id: 'profile', label: 'My Profile', icon: User },
            { id: 'pay', label: 'Pay & Taxes', icon: DollarSign },
            { id: 'benefits', label: 'Benefits', icon: Heart },
            { id: 'documents', label: 'Documents', icon: FileText },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === tab.id ? 'bg-purple-600 text-white' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-purple-500/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Personal Information</h2>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold flex items-center gap-2">
                  <Edit className="w-5 h-5" />
                  Edit Profile
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-slate-400 mb-1 block">Full Name</label>
                  <div className="text-lg text-white font-semibold">{employee.name}</div>
                </div>
                <div>
                  <label className="text-sm text-slate-400 mb-1 block">Employee ID</label>
                  <div className="text-lg text-white font-semibold">{employee.employeeId}</div>
                </div>
                <div>
                  <label className="text-sm text-slate-400 mb-1 block">Department</label>
                  <div className="text-lg text-white font-semibold">{employee.department}</div>
                </div>
                <div>
                  <label className="text-sm text-slate-400 mb-1 block">Position</label>
                  <div className="text-lg text-white font-semibold">{employee.position}</div>
                </div>
                <div>
                  <label className="text-sm text-slate-400 mb-1 block">Manager</label>
                  <div className="text-lg text-white font-semibold">{employee.manager}</div>
                </div>
                <div>
                  <label className="text-sm text-slate-400 mb-1 block">Hire Date</label>
                  <div className="text-lg text-white font-semibold">{employee.hireDate}</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-blue-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <label className="text-sm text-slate-400 mb-1 block">Email</label>
                    <div className="text-lg text-white">{employee.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-emerald-400 mt-1" />
                  <div>
                    <label className="text-sm text-slate-400 mb-1 block">Phone</label>
                    <div className="text-lg text-white">{employee.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 col-span-2">
                  <MapPin className="w-6 h-6 text-orange-400 mt-1" />
                  <div>
                    <label className="text-sm text-slate-400 mb-1 block">Address</label>
                    <div className="text-lg text-white">{employee.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 col-span-2">
                  <Users className="w-6 h-6 text-pink-400 mt-1" />
                  <div>
                    <label className="text-sm text-slate-400 mb-1 block">Emergency Contact</label>
                    <div className="text-lg text-white">{employee.emergencyContact}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pay & Taxes Tab */}
        {activeTab === 'pay' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-emerald-500/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Pay Stubs</h2>
                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download All
                </button>
              </div>
              <div className="space-y-3">
                {payStubs.map(stub => (
                  <div key={stub.id} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 hover:border-emerald-500 transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold mb-1">Pay Period: {stub.period}</div>
                        <div className="text-sm text-slate-400">Paid on {stub.date}</div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div>
                          <div className="text-xs text-slate-400">Gross Pay</div>
                          <div className="text-xl font-bold text-white">${stub.gross.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">Net Pay</div>
                          <div className="text-2xl font-bold text-emerald-400">${stub.net.toLocaleString()}</div>
                        </div>
                        <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center gap-2">
                          <Download className="w-5 h-5" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Direct Deposit</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">Primary Account</div>
                      <div className="text-sm text-slate-400">****6789 - 100%</div>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2">
                    <Edit className="w-5 h-5" />
                    Update Bank Info
                  </button>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Tax Documents</h3>
                <div className="space-y-3">
                  {taxDocs.map(doc => (
                    <div key={doc.id} className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold">{doc.name}</div>
                        <div className="text-xs text-slate-400">{doc.size}</div>
                      </div>
                      <button className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded text-sm">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-pink-500/30">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">My Benefits</h2>
              <button className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded-lg font-semibold">
                Change Benefits
              </button>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-slate-900/50 rounded-lg p-5 border border-slate-700 hover:border-pink-500 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{benefit.name}</h3>
                        <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">
                          {benefit.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-slate-400">Provider</div>
                          <div className="text-white font-semibold">{benefit.provider}</div>
                        </div>
                        <div>
                          <div className="text-slate-400">Plan</div>
                          <div className="text-white font-semibold">{benefit.plan}</div>
                        </div>
                        <div>
                          <div className="text-slate-400">{benefit.premium ? 'Premium/pay period' : 'Your Contribution'}</div>
                          <div className="text-white font-semibold">
                            {benefit.premium ? `$${benefit.premium}` : benefit.contribution}
                          </div>
                        </div>
                      </div>
                      {benefit.coverage && (
                        <div className="mt-2 text-sm text-purple-300">
                          Coverage: {benefit.coverage}
                        </div>
                      )}
                      {benefit.match && (
                        <div className="mt-2 text-sm text-emerald-300">
                          Employer Match: {benefit.match}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">My Documents</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900/50 rounded-lg p-5 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-4">Onboarding Documents</h3>
                <div className="space-y-2">
                  {['Employee Handbook', 'I-9 Form', 'W-4 Form', 'Direct Deposit Form', 'Background Check'].map(doc => (
                    <div key={doc} className="flex items-center justify-between p-2 hover:bg-slate-800 rounded">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-400" />
                        <span className="text-white">{doc}</span>
                      </div>
                      <Download className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-5 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-4">Certifications & Training</h3>
                <div className="space-y-2">
                  {['BLS Certification', 'ACLS Certification', 'HIPAA Training', 'Fire Safety Training', 'Annual Competency'].map(doc => (
                    <div key={doc} className="flex items-center justify-between p-2 hover:bg-slate-800 rounded">
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-emerald-400" />
                        <span className="text-white">{doc}</span>
                      </div>
                      <Download className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
