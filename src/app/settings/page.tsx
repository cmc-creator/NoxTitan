'use client';

import { Crown, HelpCircle, RotateCcw, Store } from 'lucide-react';
import Link from 'next/link';
import ThemeSelector from '@/components/ThemeSelector';

export default function SettingsPage() {
  const handleRestartTour = () => {
    localStorage.removeItem('hasSeenOnboarding');
    localStorage.setItem('isNewUser', 'true');
    window.location.href = '/';
  };

  return (
    <div className="space-y-6">
      {/* Theme Customization */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow p-6 border-2 border-purple-200">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🎨</span>
          <h3 className="text-xl font-bold text-gray-900">Theme & Appearance</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Customize your NoxTitan experience with 30 color themes, 12 professional fonts, and custom backgrounds.
        </p>
        <ThemeSelector />
      </div>

      {/* Onboarding Walkthrough Restart */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg shadow p-6 border-2 border-purple-200">
        <div className="flex items-center gap-3 mb-2">
          <HelpCircle className="w-6 h-6 text-purple-600" />
          <h3 className="text-xl font-bold text-gray-900">Onboarding Walkthrough</h3>
        </div>
        <p className="text-gray-600 mb-4">Need a refresher? You can revisit the interactive onboarding walkthrough anytime.</p>
        <button
          onClick={handleRestartTour}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-bold transition-all"
        >
          Revisit Onboarding Walkthrough
        </button>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-500 mt-1">Manage your account and preferences</p>
      </div>

      {/* Merch Store Setup - NEW */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow p-6 border-2 border-blue-200">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Store className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Merch Store Integration</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Connect Printful, Wix, Shopify, or WooCommerce to enable employee merch purchases with payroll deduction or Guild XP.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>One-click product sync from your store</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Dual payment: Payroll deduction OR Guild XP rewards</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Automatic inventory and order management</span>
              </li>
            </ul>
          </div>
        </div>
        <Link href="/merch-store/setup">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-bold transition-all">
            Setup Merch Store →
          </button>
        </Link>
      </div>

      {/* Subscription Management */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Subscription Plan</h3>
        
        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg mb-6">
          <div>
            <p className="text-sm text-gray-600">Current Plan</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">Professional</p>
          </div>
          <span className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
            $499/month
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Have a VIP code? Enter it in your profile to unlock complimentary access to all features!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Professional */}
          <div className="border-2 border-blue-400 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Professional</h4>
            <p className="text-3xl font-bold text-blue-600 mb-4">$499<span className="text-sm text-gray-500">/mo</span></p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Up to 50 employees</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Advanced scheduling & calendar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Time & attendance tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Payroll calculations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>10 core integrations</span>
              </li>
            </ul>
            <button className="w-full py-2 bg-gray-200 text-gray-600 rounded-lg font-medium" disabled>
              Current Plan
            </button>
          </div>

          {/* Enterprise */}
          <div className="border-2 border-purple-400 rounded-lg p-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Enterprise</h4>
            <p className="text-3xl font-bold text-purple-600 mb-4">$1,499<span className="text-sm text-gray-500">/mo</span></p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Up to 250 employees</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>All Professional features</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Oracle AI - Predictive analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Compliance Suite (OSHA, CMS, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Asset Vault & Sentinel</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Guild gamification & LMS</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>All 60+ integrations</span>
              </li>
            </ul>
            <button className="w-full py-2 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors">
              Upgrade to Enterprise
            </button>
          </div>

          {/* Titan */}
          <div className="border-2 border-pink-400 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-lg font-bold text-gray-900">Titan</h4>
              <Crown className="h-5 w-5 text-pink-500" />
            </div>
            <p className="text-3xl font-bold text-pink-600 mb-4">$2,999<span className="text-sm text-gray-500">/mo</span></p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Unlimited employees</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>All Enterprise features</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>White-glove implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>24/7 priority support (2hr SLA)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Custom integrations & white-labeling</span>
              </li>
            </ul>
            <button className="w-full py-2 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors">
              Upgrade to Titan
            </button>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Account Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organization Name
            </label>
            <input
              type="text"
              defaultValue="My Company"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="admin@company.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Zone
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Eastern Time (ET)</option>
              <option>Central Time (CT)</option>
              <option>Mountain Time (MT)</option>
              <option>Pacific Time (PT)</option>
            </select>
          </div>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-500">Receive emails for important updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Shift Reminders</p>
              <p className="text-sm text-gray-500">Get reminded before shifts start</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Help & Support */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-blue-600" />
          Help & Support
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">New User? Take the Platform Tour</p>
              <p className="text-sm text-gray-600 mt-1">
                Learn about all the amazing features NoxTitan™ has to offer with our interactive walkthrough
              </p>
            </div>
            <button
              onClick={handleRestartTour}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Restart Tour
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/training"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-all"
            >
              <p className="font-medium text-gray-900 mb-1">📚 Training Courses</p>
              <p className="text-sm text-gray-600">
                Access leadership development and skill-building courses
              </p>
            </a>
            <a
              href="mailto:support@noxtitan.com"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-all"
            >
              <p className="font-medium text-gray-900 mb-1">📧 Contact Support</p>
              <p className="text-sm text-gray-600">
                Get help from our customer support team
              </p>
            </a>
            <a
              href="/analytics"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-all"
            >
              <p className="font-medium text-gray-900 mb-1">📊 Documentation</p>
              <p className="text-sm text-gray-600">
                Read detailed guides and best practices
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
