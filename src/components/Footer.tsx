'use client';

import { Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-slate-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Company Branding */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-lg font-bold text-white">NoxTitan™</span>
            </div>
            <p className="text-xs text-slate-400">
              by <strong className="text-slate-300">Connie Michelle Consulting & Business Solutions LLC</strong>
            </p>
          </div>

          {/* Copyright & Legal */}
          <div className="text-center md:text-right text-xs text-slate-400 space-y-1">
            <p>
              © {currentYear} Connie Michelle Consulting & Business Solutions LLC. All rights reserved.
            </p>
            <p>
              <span className="text-slate-500">NoxTitan™ is a trademark of Connie Michelle Consulting & Business Solutions LLC</span>
            </p>
            <div className="flex items-center justify-center md:justify-end gap-3 mt-2">
              <a href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">
                Terms of Service
              </a>
              <span className="text-slate-600">•</span>
              <a href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </a>
              <span className="text-slate-600">•</span>
              <a href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-4 pt-4 border-t border-slate-700/50">
          <p className="text-xs text-slate-500 text-center">
            This software and all associated materials are proprietary to Connie Michelle Consulting & Business Solutions LLC. 
            Unauthorized reproduction, distribution, or use is strictly prohibited and may result in civil and criminal penalties.
          </p>
        </div>
      </div>
    </footer>
  );
}
