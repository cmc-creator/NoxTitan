'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Users, ChevronDown, ChevronRight, Mail, Phone, MapPin, Award, Calendar } from 'lucide-react';

export default function OrgChart() {
  const [expandedNodes, setExpandedNodes] = useState<string[]>(['ceo', 'coo', 'cno']);
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

  const orgData = {
    id: 'ceo',
    name: 'Dr. Robert Chen',
    title: 'Chief Executive Officer',
    department: 'Executive',
    email: 'rchen@noxtitan.com',
    phone: '(555) 100-0001',
    location: 'Seattle Main Campus',
    tenure: '8 years',
    reports: 5,
    children: [
      {
        id: 'coo',
        name: 'Sarah Williams',
        title: 'Chief Operating Officer',
        department: 'Operations',
        email: 'swilliams@noxtitan.com',
        phone: '(555) 100-0002',
        location: 'Seattle Main Campus',
        tenure: '6 years',
        reports: 42,
        children: [
          {
            id: 'dir-ops',
            name: 'Michael Torres',
            title: 'Director of Operations',
            department: 'Operations',
            email: 'mtorres@noxtitan.com',
            phone: '(555) 100-0010',
            location: 'Seattle Main Campus',
            tenure: '4 years',
            reports: 15,
            children: []
          },
          {
            id: 'dir-facilities',
            name: 'Jennifer Park',
            title: 'Director of Facilities',
            department: 'Facilities',
            email: 'jpark@noxtitan.com',
            phone: '(555) 100-0011',
            location: 'Seattle Main Campus',
            tenure: '3 years',
            reports: 12,
            children: []
          }
        ]
      },
      {
        id: 'cno',
        name: 'Dr. Lisa Wong',
        title: 'Chief Nursing Officer',
        department: 'Nursing',
        email: 'lwong@noxtitan.com',
        phone: '(555) 100-0003',
        location: 'Seattle Main Campus',
        tenure: '5 years',
        reports: 98,
        children: [
          {
            id: 'mgr-icu',
            name: 'David Martinez',
            title: 'ICU Nurse Manager',
            department: 'ICU',
            email: 'dmartinez@noxtitan.com',
            phone: '(555) 100-0020',
            location: 'ICU - 3rd Floor',
            tenure: '3 years',
            reports: 24,
            children: []
          },
          {
            id: 'mgr-er',
            name: 'Emily Rodriguez',
            title: 'ER Nurse Manager',
            department: 'Emergency',
            email: 'erodriguez@noxtitan.com',
            phone: '(555) 100-0021',
            location: 'Emergency Dept',
            tenure: '2 years',
            reports: 32,
            children: []
          }
        ]
      },
      {
        id: 'cfo',
        name: 'James Anderson',
        title: 'Chief Financial Officer',
        department: 'Finance',
        email: 'janderson@noxtitan.com',
        phone: '(555) 100-0004',
        location: 'Seattle Main Campus',
        tenure: '7 years',
        reports: 18,
        children: []
      },
      {
        id: 'cmo',
        name: 'Dr. Maria Garcia',
        title: 'Chief Medical Officer',
        department: 'Medical',
        email: 'mgarcia@noxtitan.com',
        phone: '(555) 100-0005',
        location: 'Seattle Main Campus',
        tenure: '6 years',
        reports: 56,
        children: []
      },
      {
        id: 'chro',
        name: 'Angela Thompson',
        title: 'Chief HR Officer',
        department: 'Human Resources',
        email: 'athompson@noxtitan.com',
        phone: '(555) 100-0006',
        location: 'Seattle Main Campus',
        tenure: '4 years',
        reports: 12,
        children: []
      }
    ]
  };

  const toggleNode = (id: string) => {
    setExpandedNodes(prev =>
      prev.includes(id) ? prev.filter(n => n !== id) : [...prev, id]
    );
  };

  const renderNode = (node: any, level: number = 0) => {
    const isExpanded = expandedNodes.includes(node.id);
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} className="mb-2">
        <div
          className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
            selectedEmployee?.id === node.id
              ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500'
              : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
          }`}
          style={{marginLeft: `${level * 40}px`}}
          onClick={() => setSelectedEmployee(node)}
        >
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleNode(node.id);
              }}
              className="text-slate-400 hover:text-white"
            >
              {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          )}
          {!hasChildren && <div className="w-5"></div>}
          
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
            {node.name.split(' ').map((n: string) => n[0]).join('')}
          </div>
          
          <div className="flex-1">
            <div className="text-white font-bold">{node.name}</div>
            <div className="text-sm text-slate-400">{node.title}</div>
          </div>
          
          <div className="text-right">
            <div className="text-sm text-slate-400">Direct Reports</div>
            <div className="text-2xl font-bold text-blue-400">{node.reports}</div>
          </div>
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-2">
            {node.children.map((child: any) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/hr" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 mb-4 transition-colors">
            ← Back to HR Center
          </Link>
          <div>
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 mb-2"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(59,130,246,0.6)',
                  WebkitTextStroke: '1px rgba(59,130,246,0.3)',
                  filter: 'brightness(1.4)'
                }}>
              Organizational Chart
            </h1>
            <p className="text-blue-200">Interactive hierarchy and reporting structure</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-4 border-2 border-blue-500/30">
            <Users className="w-8 h-8 text-blue-400 mb-2" />
            <div className="text-slate-300 text-sm mb-1">Total Employees</div>
            <div className="text-3xl font-bold text-white">247</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-4 border-2 border-purple-500/30">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <div className="text-slate-300 text-sm mb-1">Departments</div>
            <div className="text-3xl font-bold text-white">12</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-xl p-4 border-2 border-emerald-500/30">
            <Users className="w-8 h-8 text-emerald-400 mb-2" />
            <div className="text-slate-300 text-sm mb-1">Managers</div>
            <div className="text-3xl font-bold text-white">34</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/50 rounded-xl p-4 border-2 border-orange-500/30">
            <Users className="w-8 h-8 text-orange-400 mb-2" />
            <div className="text-slate-300 text-sm mb-1">Avg Team Size</div>
            <div className="text-3xl font-bold text-white">7.3</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Org Chart Tree */}
          <div className="col-span-2 bg-slate-800/50 rounded-xl p-6 border-2 border-blue-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">Organization Hierarchy</h2>
            <div className="space-y-2 max-h-[800px] overflow-y-auto pr-4">
              {renderNode(orgData)}
            </div>
          </div>

          {/* Employee Detail Panel */}
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-purple-500/30">
            {selectedEmployee ? (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Employee Details</h2>
                
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-3xl mb-3">
                    {selectedEmployee.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">{selectedEmployee.name}</h3>
                  <div className="text-slate-400 text-center">{selectedEmployee.title}</div>
                  <div className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                    {selectedEmployee.department}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Email</div>
                      <div className="text-white">{selectedEmployee.email}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-emerald-400 mt-1" />
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Phone</div>
                      <div className="text-white">{selectedEmployee.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Location</div>
                      <div className="text-white">{selectedEmployee.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Tenure</div>
                      <div className="text-white">{selectedEmployee.tenure}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-pink-400 mt-1" />
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Direct Reports</div>
                      <div className="text-white font-bold text-xl">{selectedEmployee.reports}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold">
                    View Full Profile
                  </button>
                  <button className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg">
                    Send Message
                  </button>
                  <button className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg">
                    View Team
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <Users className="w-16 h-16 text-slate-600 mb-4" />
                <div className="text-slate-400">Select an employee to view details</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
