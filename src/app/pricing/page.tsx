'use client';

import React, { useState } from "react";
import Link from 'next/link';
import { Check, Zap, Building2, Briefcase, Store, ShoppingCart, Clock, Users, DollarSign, Shield, BarChart3, Award, Database, ArrowLeft } from 'lucide-react';

export default function PricingPage() {
  const [pricingView, setPricingView] = useState<'packages' | 'modules'>('packages');

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-black via-[#1a1a1e] to-black py-20 px-4">
      {/* Back to Landing Page Link */}
      <div className="w-full max-w-7xl mb-8">
        <Link href="/landing" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-2 border-purple-600/40 hover:border-purple-400 transition-all text-white font-semibold">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white mb-4 animate-fade-in">Flexible Pricing for Every Business</h1>
      <p className="text-xl text-gray-400 text-center mb-2 max-w-3xl">Choose a complete package or build your own solution.</p>
      <p className="text-xl text-gray-400 text-center mb-2 max-w-3xl">No per-employee fees.</p>
      <p className="text-xl text-gray-400 text-center mb-8 max-w-3xl">Scale as you grow.</p>
      
      {/* Package vs Module Toggle */}
      <div className="flex gap-3 mb-12 bg-gray-800/50 p-2 rounded-xl">
        <button
          onClick={() => setPricingView('packages')}
          className={`px-6 py-3 rounded-xl font-bold transition-all ${
            pricingView === 'packages' 
              ? 'bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-2 border-blue-600/40 shadow-[0_0_20px_rgba(59,130,246,0.6)] text-white' 
              : 'text-gray-400 hover:text-white border-2 border-transparent'
          }`}
        >
          Complete Packages
        </button>
        <button
          onClick={() => setPricingView('modules')}
          className={`px-6 py-3 rounded-xl font-bold transition-all ${
            pricingView === 'modules' 
              ? 'bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-2 border-purple-600/40 shadow-[0_0_20px_rgba(168,85,247,0.6)] text-white' 
              : 'text-gray-400 hover:text-white border-2 border-transparent'
          }`}
        >
          Build Your Own (Modules)
        </button>
      </div>

      {pricingView === 'packages' && (
        <>
          {/* Small Business Tiers */}
          <div className="w-full max-w-7xl mb-16">
            <div className="text-center mb-8">
              <Store className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h2 className="text-3xl font-bold text-white mb-2">Small Business Plans</h2>
              <p className="text-gray-400">Perfect for startups and growing teams (1-25 employees)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Starter */}
              <div className="flex flex-col bg-gradient-to-br from-gray-700/30 to-gray-800/30 border-2 border-gray-600/50 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-300 mb-2">Starter</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-extrabold text-white">$99</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">$1,188 annually (save 2 months)</p>
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-400 text-sm mb-3">Essential tools to get started</p>
                  <ul className="space-y-2 text-sm text-gray-300 mb-6">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Up to 10 employees</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Basic scheduling calendar</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Time tracking</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Employee database</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Basic reports</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Email support</li>
                  </ul>
                </div>
                
                <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-2 border-gray-600/40 hover:border-gray-400 hover:shadow-[0_0_20px_rgba(156,163,175,0.6)] text-white font-bold transition-all">Start Free Trial</button>
              </div>

              {/* Growth */}
              <div className="flex flex-col bg-gradient-to-br from-green-600/20 to-green-800/20 border-2 border-green-500/50 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold">POPULAR</span>
                </div>
                <div className="text-center mb-6 mt-2">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Growth</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-extrabold text-white">$199</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">$2,388 annually (save 2 months)</p>
                </div>
                
                <div className="flex-1">
                  <p className="text-green-300 text-sm mb-3">Everything in Starter, plus:</p>
                  <ul className="space-y-2 text-sm text-gray-300 mb-6">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Up to 25 employees</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Advanced scheduling (drag & drop)</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> PTO & time-off management</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Payroll calculations</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> HR onboarding</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Mobile app access</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> 5 integrations</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Priority email support</li>
                  </ul>
                </div>
                
                <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-2 border-green-600/40 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] text-white font-bold transition-all">Start Free Trial</button>
              </div>

              {/* Plus */}
              <div className="flex flex-col bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-2 border-blue-500/50 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Plus</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-extrabold text-white">$349</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">$4,188 annually (save 2 months)</p>
                </div>
                
                <div className="flex-1">
                  <p className="text-blue-300 text-sm mb-3">Everything in Growth, plus:</p>
                  <ul className="space-y-2 text-sm text-gray-300 mb-6">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> Up to 50 employees</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> Performance management</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> Compliance tracking</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> Advanced analytics</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> Training management</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> 15 integrations</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> Phone & email support</li>
                  </ul>
                </div>
                
                <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-2 border-blue-600/40 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] text-white font-bold transition-all">Start Free Trial</button>
              </div>
            </div>
          </div>

          {/* Mid-Market & Enterprise Tiers */}
          <div className="w-full max-w-7xl">
            <div className="text-center mb-8">
              <Building2 className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <h2 className="text-3xl font-bold text-white mb-2">Enterprise Plans</h2>
              <p className="text-gray-400">Comprehensive solutions for mid-market and large organizations (50+ employees)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Professional Tier */}
              <div className="flex flex-col bg-gradient-to-br from-blue-600/20 to-blue-900/20 border-2 border-blue-500/50 rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-blue-400 mb-2">Professional</h2>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-extrabold text-white">$499</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">$5,988 billed annually</p>
                </div>
                
                <div className="flex-1">
                  <p className="text-blue-300 font-semibold mb-4">Perfect for growing businesses</p>
                  <ul className="space-y-3 text-gray-300 mb-8">
                    <li className="flex items-start gap-2">✓ <span>Up to 50 employees</span></li>
                    <li className="flex items-start gap-2">✓ <span>Advanced scheduling & calendar</span></li>
                    <li className="flex items-start gap-2">✓ <span>Time & attendance tracking</span></li>
                    <li className="flex items-start gap-2">✓ <span>Employee management</span></li>
                    <li className="flex items-start gap-2">✓ <span>Payroll calculations</span></li>
                    <li className="flex items-start gap-2">✓ <span>Basic reporting & analytics</span></li>
                    <li className="flex items-start gap-2">✓ <span>10 core integrations</span></li>
                    <li className="flex items-start gap-2">✓ <span>Email support (48hr response)</span></li>
                  </ul>
                </div>
                
                <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-2 border-blue-600/40 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] text-white font-bold transition-all">Start Professional</button>
              </div>

              {/* Enterprise Tier - Featured */}
              <div className="flex flex-col bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500 rounded-2xl shadow-2xl p-8 relative hover:scale-105 transition-transform">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">MOST POPULAR</span>
                </div>
                
                <div className="text-center mb-6 mt-4">
                  <h2 className="text-3xl font-bold text-purple-400 mb-2">Enterprise</h2>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-extrabold text-white">$1,499</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">$17,988 billed annually</p>
                </div>
                
                <div className="flex-1">
                  <p className="text-purple-300 font-semibold mb-4">Everything in Professional, plus:</p>
                  <ul className="space-y-3 text-gray-300 mb-8">
                    <li className="flex items-start gap-2">✓ <span>Up to 250 employees</span></li>
                    <li className="flex items-start gap-2">✓ <span><strong className="text-purple-400">Oracle AI</strong> - Predictive analytics</span></li>
                    <li className="flex items-start gap-2">✓ <span><strong className="text-purple-400">Compliance Suite</strong> - OSHA, CMS, Joint Commission</span></li>
                    <li className="flex items-start gap-2">✓ <span><strong className="text-purple-400">Asset Vault</strong> - Equipment tracking</span></li>
                    <li className="flex items-start gap-2">✓ <span><strong className="text-purple-400">Sentinel</strong> - Visitor management</span></li>
                    <li className="flex items-start gap-2">✓ <span><strong className="text-purple-400">Guild</strong> - Gamification system</span></li>
                    <li className="flex items-start gap-2">✓ <span>Advanced analytics & forecasting</span></li>
                    <li className="flex items-start gap-2">✓ <span>All 60+ integrations</span></li>
                    <li className="flex items-start gap-2">✓ <span>Priority support (8hr response)</span></li>
                    <li className="flex items-start gap-2">✓ <span>Custom branding & API access</span></li>
                  </ul>
                </div>
                
                <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 border-purple-600/40 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] text-white font-bold transition-all">Start Enterprise</button>
              </div>

              {/* Titan Tier */}
              <div className="flex flex-col bg-gradient-to-br from-amber-600/20 to-orange-900/20 border-2 border-amber-500/50 rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-amber-400 mb-2">Titan</h2>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-extrabold text-white">$2,999</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">or Custom Enterprise</p>
                </div>
                
                <div className="flex-1">
                  <p className="text-amber-300 font-semibold mb-4">Everything in Enterprise, plus:</p>
                  <ul className="space-y-3 text-gray-300 mb-8">
                    <li className="flex items-start gap-2">✓ <span><strong className="text-amber-400">Unlimited employees</strong></span></li>
                    <li className="flex items-start gap-2">✓ <span>White-glove implementation</span></li>
                    <li className="flex items-start gap-2">✓ <span>Dedicated account manager</span></li>
                    <li className="flex items-start gap-2">✓ <span>Custom integrations (3 per year)</span></li>
                    <li className="flex items-start gap-2">✓ <span>{'24/7'} priority support (2hr SLA)</span></li>
                    <li className="flex items-start gap-2">✓ <span>Custom feature development</span></li>
                    <li className="flex items-start gap-2">✓ <span>White-labeling options</span></li>
                    <li className="flex items-start gap-2">✓ <span>Quarterly business reviews</span></li>
                    <li className="flex items-start gap-2">✓ <span>Training & certification</span></li>
                    <li className="flex items-start gap-2">✓ <span>99.9% uptime SLA</span></li>
                  </ul>
                </div>
                
                <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-br from-amber-900/50 to-orange-900/50 border-2 border-amber-600/40 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] text-white font-bold transition-all">Contact Sales</button>
              </div>
            </div>
          </div>
        </>
      )}

      {pricingView === 'modules' && (
        <div className="w-full max-w-7xl">
          <div className="text-center mb-12">
            <ShoppingCart className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <h2 className="text-3xl font-bold text-white mb-2">Build Your Perfect Solution</h2>
            <p className="text-gray-400 mb-4">Mix and match modules to create exactly what you need. All modules work seamlessly together.</p>
            <div className="inline-block bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-6 py-3">
              <p className="text-yellow-300 font-semibold">💡 Pro Tip: Buy 3+ modules and save 15%</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Core Modules */}
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-2 border-blue-500/50 rounded-xl p-6 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Scheduling & Calendar</h3>
                  <p className="text-2xl font-bold text-blue-400">$79<span className="text-sm text-gray-400">/mo</span></p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> Drag & drop scheduling</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> Shift templates</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> Team availability</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> Calendar sync</li>
              </ul>
              <button className="w-full py-2 px-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-2 border-blue-600/40 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] text-white font-bold transition-all">Add Module</button>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border-2 border-green-500/50 rounded-xl p-6 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-600 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Time & Attendance</h3>
                  <p className="text-2xl font-bold text-green-400">$69<span className="text-sm text-gray-400">/mo</span></p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Digital time clock</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Overtime tracking</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Break monitoring</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5" /> Timesheet reports</li>
              </ul>
              <button className="w-full py-2 px-6 rounded-xl bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-2 border-green-600/40 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] text-white font-bold transition-all">Add Module</button>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-2 border-purple-500/50 rounded-xl p-6 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">HR Management</h3>
                  <p className="text-2xl font-bold text-purple-400">$99<span className="text-sm text-gray-400">/mo</span></p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-400 mt-0.5" /> Employee database</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-400 mt-0.5" /> Onboarding workflows</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-400 mt-0.5" /> Document management</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-400 mt-0.5" /> Performance reviews</li>
              </ul>
              <button className="w-full py-2 px-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-2 border-purple-600/40 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] text-white font-bold transition-all">Add Module</button>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 border-2 border-yellow-500/50 rounded-xl p-6 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yellow-600 rounded-lg">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Payroll & Benefits</h3>
                  <p className="text-2xl font-bold text-yellow-400">$129<span className="text-sm text-gray-400">/mo</span></p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-yellow-400 mt-0.5" /> Payroll calculations</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-yellow-400 mt-0.5" /> Tax withholdings</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-yellow-400 mt-0.5" /> Direct deposit</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-yellow-400 mt-0.5" /> Benefits tracking</li>
              </ul>
              <button className="w-full py-2 px-6 rounded-xl bg-gradient-to-br from-yellow-900/50 to-amber-900/50 border-2 border-yellow-600/40 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] text-white font-bold transition-all">Add Module</button>
            </div>

            <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 border-2 border-red-500/50 rounded-xl p-6 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-red-600 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Compliance & QAPI</h3>
                  <p className="text-2xl font-bold text-red-400">$149<span className="text-sm text-gray-400">/mo</span></p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-red-400 mt-0.5" /> Incident tracking</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-red-400 mt-0.5" /> Quality metrics</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-red-400 mt-0.5" /> HIPAA compliance</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-red-400 mt-0.5" /> Audit trails</li>
              </ul>
              <button className="w-full py-2 px-6 rounded-xl bg-gradient-to-br from-red-900/50 to-rose-900/50 border-2 border-red-600/40 hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] text-white font-bold transition-all">Add Module</button>
            </div>

            <div className="bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 border-2 border-indigo-500/50 rounded-xl p-6 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Reports & Analytics</h3>
                  <p className="text-2xl font-bold text-indigo-400">$89<span className="text-sm text-gray-400">/mo</span></p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-400 mt-0.5" /> Custom dashboards</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-400 mt-0.5" /> Automated reports</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-400 mt-0.5" /> Export to Excel/PDF</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-400 mt-0.5" /> KPI tracking</li>
              </ul>
              <button className="w-full py-2 px-6 rounded-xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 border-2 border-indigo-600/40 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] text-white font-bold transition-all">Add Module</button>
            </div>

            {/* Advanced Modules */}
            <div className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 border-2 border-pink-500/50 rounded-xl p-6 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-pink-600 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Oracle AI (Predictive)</h3>
                  <p className="text-2xl font-bold text-pink-400">$199<span className="text-sm text-gray-400">/mo</span></p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-pink-400 mt-0.5" /> Staffing forecasts</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-pink-400 mt-0.5" /> Turnover predictions</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-pink-400 mt-0.5" /> Risk analysis</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-pink-400 mt-0.5" /> Smart recommendations</li>
              </ul>
              <button className="w-full py-2 px-6 rounded-xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 border-2 border-pink-600/40 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] text-white font-bold transition-all">Add Module</button>
            </div>

            <div className="bg-gradient-to-br from-teal-600/20 to-teal-800/20 border-2 border-teal-500/50 rounded-xl p-6 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-teal-600 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Guild (Gamification)</h3>
                  <p className="text-2xl font-bold text-teal-400">$79<span className="text-sm text-gray-400">/mo</span></p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal-400 mt-0.5" /> Points & badges</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal-400 mt-0.5" /> Leaderboards</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal-400 mt-0.5" /> Challenges</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal-400 mt-0.5" /> Rewards store</li>
              </ul>
              <button className="w-full py-2 px-6 rounded-xl bg-gradient-to-br from-teal-900/50 to-cyan-900/50 border-2 border-teal-600/40 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.6)] text-white font-bold transition-all">Add Module</button>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 border-2 border-orange-500/50 rounded-xl p-6 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Asset Vault</h3>
                  <p className="text-2xl font-bold text-orange-400">$99<span className="text-sm text-gray-400">/mo</span></p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-orange-400 mt-0.5" /> Equipment tracking</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-orange-400 mt-0.5" /> Maintenance scheduling</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-orange-400 mt-0.5" /> Asset lifecycle</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-orange-400 mt-0.5" /> QR code scanning</li>
              </ul>
              <button className="w-full py-2 px-6 rounded-xl bg-gradient-to-br from-orange-900/50 to-amber-900/50 border-2 border-orange-600/40 hover:border-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] text-white font-bold transition-all">Add Module</button>
            </div>
          </div>

          {/* Popular Bundles */}
          <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-2 border-purple-500/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Popular Module Bundles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h4 className="text-xl font-bold text-blue-400 mb-2">Basic Ops Bundle</h4>
                <p className="text-3xl font-bold text-white mb-1">$199<span className="text-sm text-gray-400">/mo</span></p>
                <p className="text-sm text-green-400 mb-4">Save $48/mo (20%)</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-4">
                  <li>• Scheduling & Calendar</li>
                  <li>• Time & Attendance</li>
                  <li>• HR Management</li>
                </ul>
                <button className="w-full py-2 px-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-2 border-blue-600/40 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] text-white font-bold transition-all">Select Bundle</button>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border-2 border-purple-500">
                <div className="text-center mb-2">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">POPULAR</span>
                </div>
                <h4 className="text-xl font-bold text-purple-400 mb-2">Complete HR Bundle</h4>
                <p className="text-3xl font-bold text-white mb-1">$369<span className="text-sm text-gray-400">/mo</span></p>
                <p className="text-sm text-green-400 mb-4">Save $97/mo (21%)</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-4">
                  <li>• All Basic Ops modules</li>
                  <li>• Payroll & Benefits</li>
                  <li>• Reports & Analytics</li>
                </ul>
                <button className="w-full py-2 px-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-2 border-purple-600/40 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] text-white font-bold transition-all">Select Bundle</button>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h4 className="text-xl font-bold text-green-400 mb-2">Healthcare Pro Bundle</h4>
                <p className="text-3xl font-bold text-white mb-1">$499<span className="text-sm text-gray-400">/mo</span></p>
                <p className="text-sm text-green-400 mb-4">Save $164/mo (25%)</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-4">
                  <li>• All Complete HR modules</li>
                  <li>• Compliance & QAPI</li>
                  <li>• Asset Vault</li>
                </ul>
                <button className="w-full py-2 px-6 rounded-xl bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-2 border-green-600/40 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] text-white font-bold transition-all">Select Bundle</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="w-full max-w-4xl mt-16 bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 text-gray-300">
          <div>
            <h3 className="font-bold text-white mb-2">Do you charge per employee?</h3>
            <p>No! Our pricing is based on total employee count tiers, not per-employee fees. Much more predictable and affordable.</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Can I switch between plans?</h3>
            <p>Yes, upgrade or downgrade anytime. When you upgrade, you'll be prorated for the remainder of the month.</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Can I add modules to a package plan?</h3>
            <p>Absolutely! Package plans include core features, but you can add any additional modules à la carte.</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Is there a free trial?</h3>
            <p>Yes! All plans include a 14-day free trial. No credit card required to start.</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">What about implementation and training?</h3>
            <p>Starter/Growth/Plus include self-service setup. Professional+ includes assisted onboarding. Enterprise/Titan include white-glove implementation.</p>
          </div>
        </div>
      </div>

      {/* VIP Access Note */}
      <div className="mt-16 text-center max-w-2xl">
        <p className="text-gray-400 text-sm">
          💎 <strong className="text-yellow-400">VIP Access:</strong> Have an exclusive code? <a href="/login" className="text-purple-400 hover:text-purple-300 underline">Log in here</a> for complimentary access.
        </p>
      </div>

      {/* Savings Calculator */}
      <div className="mt-16 w-full max-w-4xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white text-center mb-6">💰 Compare & Save</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-gray-400 text-sm mb-2">vs. Paycom (100 employees)</p>
            <p className="text-3xl font-bold text-green-400">Save $22,000/year</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2">vs. ADP Workforce Now</p>
            <p className="text-3xl font-bold text-green-400">Save $13,000/year</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2">vs. Kronos/UKG</p>
            <p className="text-3xl font-bold text-green-400">Save $42,000/year</p>
          </div>
        </div>
      </div>
    </div>
  );
}
