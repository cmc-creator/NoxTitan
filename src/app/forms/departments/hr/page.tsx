'use client';

import React, { useState } from 'react';
import {
  FileText, Plus, Upload, Download, Edit, Share2, Copy, 
  Trash2, Search, Filter, Star, Clock, Users, Folder,
  CheckCircle, FileCheck, FilePlus, FolderPlus, Grid3x3,
  List, Eye, Lock, Unlock
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface DepartmentForm {
  id: string;
  name: string;
  description: string;
  type: 'template' | 'uploaded' | 'custom';
  category: string;
  fileUrl?: string;
  isEditable: boolean;
  isShared: boolean;
  createdBy: string;
  createdAt: Date;
  lastModified: Date;
  usageCount: number;
  isFavorite: boolean;
}

export default function HRFormsPortalPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Sample HR forms - replace with API call
  const [forms] = useState<DepartmentForm[]>([
    {
      id: '1',
      name: 'FMLA Leave Request Form',
      description: 'Family and Medical Leave Act application',
      type: 'uploaded',
      category: 'Leave Management',
      fileUrl: '/forms/fmla.pdf',
      isEditable: false,
      isShared: true,
      createdBy: 'HR Admin',
      createdAt: new Date('2026-01-10'),
      lastModified: new Date('2026-01-10'),
      usageCount: 45,
      isFavorite: true,
    },
    {
      id: '2',
      name: 'Personnel Action Form (PAF)',
      description: 'Employee status changes, promotions, transfers',
      type: 'custom',
      category: 'Employment',
      isEditable: true,
      isShared: true,
      createdBy: 'HR Director',
      createdAt: new Date('2026-01-05'),
      lastModified: new Date('2026-01-15'),
      usageCount: 89,
      isFavorite: true,
    },
    {
      id: '3',
      name: 'New Hire Onboarding Checklist',
      description: 'Complete onboarding process for new employees',
      type: 'custom',
      category: 'Onboarding',
      isEditable: true,
      isShared: true,
      createdBy: 'HR Coordinator',
      createdAt: new Date('2025-12-20'),
      lastModified: new Date('2026-01-08'),
      usageCount: 34,
      isFavorite: true,
    },
    {
      id: '4',
      name: 'Performance Improvement Plan (PIP)',
      description: 'Document performance issues and improvement goals',
      type: 'template',
      category: 'Performance',
      isEditable: true,
      isShared: true,
      createdBy: 'HR Manager',
      createdAt: new Date('2026-01-12'),
      lastModified: new Date('2026-01-12'),
      usageCount: 12,
      isFavorite: false,
    },
    {
      id: '5',
      name: 'Termination Checklist',
      description: 'Exit process and offboarding procedures',
      type: 'custom',
      category: 'Offboarding',
      isEditable: true,
      isShared: false,
      createdBy: 'HR Director',
      createdAt: new Date('2026-01-03'),
      lastModified: new Date('2026-01-14'),
      usageCount: 8,
      isFavorite: false,
    },
    {
      id: '6',
      name: 'Employee Complaint Form',
      description: 'Report workplace issues and grievances',
      type: 'custom',
      category: 'Compliance',
      isEditable: true,
      isShared: true,
      createdBy: 'Compliance Officer',
      createdAt: new Date('2025-12-15'),
      lastModified: new Date('2026-01-10'),
      usageCount: 23,
      isFavorite: false,
    },
    {
      id: '7',
      name: 'I-9 Employment Eligibility',
      description: 'Verify identity and employment authorization',
      type: 'uploaded',
      category: 'Compliance',
      fileUrl: '/forms/i9.pdf',
      isEditable: false,
      isShared: true,
      createdBy: 'HR Admin',
      createdAt: new Date('2025-11-01'),
      lastModified: new Date('2025-11-01'),
      usageCount: 156,
      isFavorite: true,
    },
    {
      id: '8',
      name: 'Benefits Enrollment Form',
      description: 'Annual benefits selection and changes',
      type: 'custom',
      category: 'Benefits',
      isEditable: true,
      isShared: true,
      createdBy: 'Benefits Coordinator',
      createdAt: new Date('2025-10-01'),
      lastModified: new Date('2026-01-05'),
      usageCount: 234,
      isFavorite: true,
    },
    {
      id: '9',
      name: 'Disciplinary Action Form',
      description: 'Document policy violations and corrective actions',
      type: 'custom',
      category: 'Performance',
      isEditable: true,
      isShared: false,
      createdBy: 'HR Manager',
      createdAt: new Date('2026-01-07'),
      lastModified: new Date('2026-01-07'),
      usageCount: 15,
      isFavorite: false,
    },
    {
      id: '10',
      name: 'Accommodation Request Form',
      description: 'Request workplace accommodations (ADA)',
      type: 'custom',
      category: 'Compliance',
      isEditable: true,
      isShared: true,
      createdBy: 'HR Director',
      createdAt: new Date('2025-12-10'),
      lastModified: new Date('2026-01-11'),
      usageCount: 7,
      isFavorite: false,
    },
  ]);

  const categories = [
    { value: 'all', label: 'All Forms', icon: FileText, count: forms.length },
    { value: 'Leave Management', label: 'Leave & Time Off', icon: Clock, count: 1 },
    { value: 'Employment', label: 'Employment', icon: Users, count: 1 },
    { value: 'Onboarding', label: 'Onboarding', icon: FilePlus, count: 1 },
    { value: 'Offboarding', label: 'Offboarding', icon: FileCheck, count: 1 },
    { value: 'Performance', label: 'Performance', icon: Star, count: 2 },
    { value: 'Compliance', label: 'Compliance', icon: CheckCircle, count: 3 },
    { value: 'Benefits', label: 'Benefits', icon: FileText, count: 1 },
  ];

  const filteredForms = forms.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         f.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || f.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-700 via-stone-900 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-stone-950 rounded shadow-lg p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-800 to-amber-600 rounded flex items-center justify-center text-3xl">
                  👥
                </div>
                <div>
                  <h1 className="text-5xl font-bold text-stone-200">HR Forms Portal</h1>
                  <p className="text-xl text-stone-500">Your magic forms headquarters</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowUploadModal(true)}
                className="px-6 py-3 bg-stone-950 border-2 border-amber-600/40 text-amber-600 rounded-lg hover:bg-purple-50 flex items-center gap-2"
              >
                <Upload className="w-5 h-5" />
                Upload Existing Form
              </button>
              <button
                onClick={() => router.push('/forms/builder?department=hr')}
                className="px-6 py-3 bg-gradient-to-r from-amber-800 to-amber-600 text-white rounded-lg hover:from-amber-800 hover:to-amber-600 flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Create New Form
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-amber-700 to-amber-500 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-800 font-medium">Total Forms</span>
                <FileText className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-blue-900">{forms.length}</div>
            </div>
            <div className="bg-gradient-to-br from-stone-900 to-amber-900 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-800 font-medium">Custom Forms</span>
                <FilePlus className="w-5 h-5 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-purple-900">
                {forms.filter(f => f.type === 'custom').length}
              </div>
            </div>
            <div className="bg-[#110F0B] from-REMOVED-50 to-pink-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-pink-800 font-medium">Shared</span>
                <Share2 className="w-5 h-5 text-pink-600" />
              </div>
              <div className="text-3xl font-bold text-pink-900">
                {forms.filter(f => f.isShared).length}
              </div>
            </div>
            <div className="bg-[#110F0B] from-REMOVED-50 to-green-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-800 font-medium">Total Uses</span>
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-900">
                {forms.reduce((sum, f) => sum + f.usageCount, 0)}
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-stone-950 rounded shadow-lg p-6 mb-6">
          <div className="flex gap-4 items-center mb-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search HR forms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-3 rounded-lg ${viewMode === 'grid' ? 'bg-amber-600 text-white' : 'bg-[rgba(201,168,76,0.06)] text-[#C9A84C]'}`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-3 rounded-lg ${viewMode === 'list' ? 'bg-amber-600 text-white' : 'bg-[rgba(201,168,76,0.06)] text-[#C9A84C]'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(({ value, label, icon: Icon, count }) => (
              <button
                key={value}
                onClick={() => setSelectedCategory(value)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap transition-all ${
                  selectedCategory === value
                    ? 'bg-gradient-to-r from-amber-800 to-amber-600 text-white shadow-lg scale-105'
                    : 'bg-[rgba(201,168,76,0.06)] text-[#C9A84C] hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  selectedCategory === value ? 'bg-stone-950/20' : 'bg-stone-950/50'
                }`}>
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Forms Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-3 gap-6">
            {filteredForms.map(form => (
              <div
                key={form.id}
                className="bg-stone-950 rounded shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer group relative"
                onClick={() => form.isEditable ? router.push(`/forms/${form.id}`) : window.open(form.fileUrl)}
              >
                {form.isFavorite && (
                  <Star className="absolute top-4 right-4 w-5 h-5 fill-yellow-400 text-yellow-400" />
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    form.type === 'uploaded' ? 'bg-blue-100' :
                    form.type === 'custom' ? 'bg-purple-100' :
                    'bg-pink-100'
                  }`}>
                    {form.type === 'uploaded' ? <FileText className="w-6 h-6 text-amber-400" /> :
                     form.type === 'custom' ? <FilePlus className="w-6 h-6 text-amber-600" /> :
                     <FileCheck className="w-6 h-6 text-pink-600" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-stone-200 mb-1 group-hover:text-amber-600">
                      {form.name}
                    </h3>
                    <p className="text-sm text-stone-500">{form.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-amber-300 rounded-full text-xs font-medium">
                    {form.category}
                  </span>
                  {form.isEditable ? (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1">
                      <Edit className="w-3 h-3" />
                      Editable
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-[rgba(201,168,76,0.06)] text-[#C9A84C] rounded-full text-xs font-medium flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      PDF
                    </span>
                  )}
                  {form.isShared ? (
                    <div title="Shared with department">
                      <Unlock className="w-4 h-4 text-green-600" />
                    </div>
                  ) : (
                    <div title="Private">
                      <Lock className="w-4 h-4 text-stone-400" />
                    </div>
                  )}
                </div>

                <div className="border-t pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Uses:</span>
                    <span className="font-medium text-stone-200">{form.usageCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Created by:</span>
                    <span className="font-medium text-stone-200">{form.createdBy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Updated:</span>
                    <span className="font-medium text-stone-200">
                      {form.lastModified.toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 mt-4 pt-4 border-t">
                  <button
                    onClick={(e) => { e.stopPropagation(); }}
                    className="flex-1 px-3 py-2 bg-purple-100 text-amber-700 rounded-lg hover:bg-purple-200 flex items-center justify-center gap-2 text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  {form.isEditable && (
                    <button
                      onClick={(e) => { e.stopPropagation(); router.push(`/forms/${form.id}/edit`); }}
                      className="flex-1 px-3 py-2 bg-blue-100 text-amber-300 rounded-lg hover:bg-blue-200 flex items-center justify-center gap-2 text-sm"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                  )}
                  <button
                    onClick={(e) => { e.stopPropagation(); }}
                    className="px-3 py-2 bg-[rgba(201,168,76,0.06)] text-[#C9A84C] rounded-lg hover:bg-gray-200"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-stone-950 rounded shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-stone-950">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C9A84C]">Form Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C9A84C]">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C9A84C]">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C9A84C]">Uses</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C9A84C]">Updated</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C9A84C]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredForms.map(form => (
                  <tr key={form.id} className="hover:bg-stone-950">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {form.isFavorite && <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
                        <div>
                          <div className="font-medium text-stone-200">{form.name}</div>
                          <div className="text-sm text-stone-500">{form.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-100 text-amber-300 rounded-full text-xs font-medium">
                        {form.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {form.isEditable ? (
                        <span className="text-green-600 text-sm flex items-center gap-1">
                          <Edit className="w-4 h-4" />
                          Editable
                        </span>
                      ) : (
                        <span className="text-stone-500 text-sm flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          PDF
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-stone-200">{form.usageCount}</td>
                    <td className="px-6 py-4 text-stone-500 text-sm">
                      {form.lastModified.toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 bg-purple-100 text-amber-700 rounded hover:bg-purple-200">
                          <Eye className="w-4 h-4" />
                        </button>
                        {form.isEditable && (
                          <button className="p-2 bg-blue-100 text-amber-300 rounded hover:bg-blue-200">
                            <Edit className="w-4 h-4" />
                          </button>
                        )}
                        <button className="p-2 bg-[rgba(201,168,76,0.06)] text-[#C9A84C] rounded hover:bg-gray-200">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-stone-950 rounded shadow-2xl max-w-2xl w-full p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-stone-200">Upload Existing Form</h2>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="text-stone-400 hover:text-stone-500"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#C9A84C] mb-2">
                    Form Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., FMLA Leave Request Form"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#C9A84C] mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Brief description of this form..."
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#C9A84C] mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500">
                    <option>Leave Management</option>
                    <option>Employment</option>
                    <option>Onboarding</option>
                    <option>Offboarding</option>
                    <option>Performance</option>
                    <option>Compliance</option>
                    <option>Benefits</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#C9A84C] mb-2">
                    Upload File
                  </label>
                  <div className="border-2 border-dashed border-stone-700 rounded-lg p-8 text-center hover:border-amber-400/40 cursor-pointer">
                    <Upload className="w-12 h-12 text-stone-400 mx-auto mb-4" />
                    <p className="text-stone-500 mb-2">
                      <span className="text-amber-600 font-medium">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-sm text-stone-500">PDF, Word, Excel up to 10MB</p>
                  </div>
                </div>

                <label className="flex items-center gap-2 text-sm text-[#C9A84C]">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>Share with entire HR department</span>
                </label>
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-6 py-3 bg-[rgba(201,168,76,0.06)] text-[#C9A84C] rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowUploadModal(false);
                    alert('Form uploaded successfully!');
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-800 to-amber-600 text-white rounded-lg hover:from-amber-800 hover:to-amber-600"
                >
                  Upload Form
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



