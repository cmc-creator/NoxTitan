'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Users, Stethoscope, ShoppingBag, Utensils, HardHat,
  Factory, GraduationCap, Briefcase, Shield, TrendingUp
} from 'lucide-react';

interface Department {
  id: string;
  name: string;
  icon: any;
  color: string;
  formCount: number;
  description: string;
  path: string;
}

export default function DepartmentsPortalPage() {
  const router = useRouter();

  const departments: Department[] = [
    {
      id: 'hr',
      name: 'Human Resources',
      icon: Users,
      color: 'from-blue-600 to-purple-600',
      formCount: 10,
      description: 'FMLA, PAF, onboarding, benefits, compliance forms',
      path: '/forms/departments/hr',
    },
    {
      id: 'nursing',
      name: 'Nursing',
      icon: Stethoscope,
      color: 'from-green-600 to-teal-600',
      formCount: 8,
      description: 'Patient care, medication, incident reports, assessments',
      path: '/forms/departments/nursing',
    },
    {
      id: 'finance',
      name: 'Finance',
      icon: TrendingUp,
      color: 'from-yellow-600 to-orange-600',
      formCount: 6,
      description: 'Purchase orders, expense reports, budget requests',
      path: '/forms/departments/finance',
    },
    {
      id: 'operations',
      name: 'Operations',
      icon: Briefcase,
      color: 'from-purple-600 to-pink-600',
      formCount: 5,
      description: 'Work orders, maintenance requests, inventory forms',
      path: '/forms/departments/operations',
    },
    {
      id: 'safety',
      name: 'Safety & Compliance',
      icon: Shield,
      color: 'from-red-600 to-pink-600',
      formCount: 12,
      description: 'Incident reports, safety audits, OSHA forms, inspections',
      path: '/forms/departments/safety',
    },
    {
      id: 'training',
      name: 'Training & Development',
      icon: GraduationCap,
      color: 'from-indigo-600 to-blue-600',
      formCount: 7,
      description: 'Course evaluations, training requests, certifications',
      path: '/forms/departments/training',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">Department Forms Portals</h1>
          <p className="text-xl text-gray-600">
            Each department has their own magic forms portal to create, share, and manage templates
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-3 gap-6">
          {departments.map(dept => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.id}
                onClick={() => router.push(dept.path)}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-800">{dept.formCount}</div>
                    <div className="text-sm text-gray-500">forms</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600">
                  {dept.name}
                </h3>
                <p className="text-gray-600">{dept.description}</p>

                <div className="mt-6 pt-6 border-t">
                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${dept.color} text-white rounded-lg font-medium group-hover:shadow-lg transition-shadow`}>
                    Open Portal →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">How Department Portals Work</h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-xl font-bold mb-2">Create Custom Forms</h3>
              <p className="text-purple-100">
                Build forms with our drag-and-drop builder or upload existing PDFs, Word docs, and Excel files
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">📤</div>
              <h3 className="text-xl font-bold mb-2">Upload & Store</h3>
              <p className="text-purple-100">
                Drop in forms you've created externally. Keep everything organized in one place
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-bold mb-2">Share Department-Wide</h3>
              <p className="text-purple-100">
                Share templates with your entire department or keep them private for your team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
