'use client';

import React, { useState } from 'react';
import { 
  Plus, FileText, Search, Filter, Edit, Copy, Trash2, 
  Share2, Eye, BarChart, Download, Upload, Folder,
  Users, CheckCircle, Clock, XCircle
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FormTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  usageCount: number;
  lastModified: Date;
  createdBy: string;
  isPublic: boolean;
  submissionCount: number;
  status: 'active' | 'draft' | 'archived';
}

export default function FormsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Sample data - replace with API call
  const [templates] = useState<FormTemplate[]>([
    {
      id: '1',
      name: 'Patient Satisfaction Survey',
      description: 'Post-appointment feedback form',
      category: 'SURVEY',
      usageCount: 245,
      lastModified: new Date('2026-01-15'),
      createdBy: 'Dr. Smith',
      isPublic: true,
      submissionCount: 189,
      status: 'active',
    },
    {
      id: '2',
      name: 'Incident Report Form',
      description: 'Report workplace incidents and near-misses',
      category: 'INCIDENT',
      usageCount: 78,
      lastModified: new Date('2026-01-10'),
      createdBy: 'Safety Team',
      isPublic: true,
      submissionCount: 34,
      status: 'active',
    },
    {
      id: '3',
      name: 'Time Off Request',
      description: 'Request PTO, vacation, or sick leave',
      category: 'TIME_OFF',
      usageCount: 512,
      lastModified: new Date('2026-01-12'),
      createdBy: 'HR Department',
      isPublic: true,
      submissionCount: 423,
      status: 'active',
    },
    {
      id: '4',
      name: 'Employee Onboarding Feedback',
      description: 'New hire experience survey',
      category: 'FEEDBACK',
      usageCount: 156,
      lastModified: new Date('2026-01-08'),
      createdBy: 'HR Department',
      isPublic: true,
      submissionCount: 98,
      status: 'active',
    },
    {
      id: '5',
      name: 'Training Evaluation',
      description: 'Rate training sessions and materials',
      category: 'TRAINING',
      usageCount: 203,
      lastModified: new Date('2026-01-14'),
      createdBy: 'Learning Team',
      isPublic: true,
      submissionCount: 167,
      status: 'active',
    },
  ]);

  const categories = [
    { value: 'all', label: 'All Forms', icon: FileText },
    { value: 'SURVEY', label: 'Surveys', icon: BarChart },
    { value: 'HR', label: 'HR', icon: Users },
    { value: 'INCIDENT', label: 'Incidents', icon: XCircle },
    { value: 'TIME_OFF', label: 'Time Off', icon: Clock },
    { value: 'TRAINING', label: 'Training', icon: CheckCircle },
    { value: 'FEEDBACK', label: 'Feedback', icon: FileText },
    { value: 'COMPLIANCE', label: 'Compliance', icon: CheckCircle },
  ];

  const filteredTemplates = templates.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         t.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#070604] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-5xl font-bold text-[#9E8F75] mb-2">Forms & Templates</h1>
            <p className="text-xl text-[#9E8F75]">Create, manage, and share custom forms</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => router.push('/forms/departments')}
              className="px-6 py-3 bg-[#110F0B] border-2 border-amber-600/40 text-amber-400 rounded-lg hover:bg-amber-900/20 flex items-center gap-2"
            >
              <Folder className="w-5 h-5" />
              Department Portals
            </button>
            <button
              onClick={() => router.push('/forms/import')}
              className="px-6 py-3 bg-[#110F0B] border-2 border-amber-600/40 text-amber-600 rounded-lg hover:bg-[rgba(201,168,76,0.04)] flex items-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Import Templates
            </button>
            <button
              onClick={() => router.push('/forms/builder')}
              className="px-6 py-3 rounded flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Create New Form
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="p-6 rounded">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#9E8F75]">Total Forms</span>
              <FileText className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-4xl font-bold text-[#9E8F75]">{templates.length}</div>
            <div className="text-sm text-[#9E8F75] mt-1">+3 this month</div>
          </div>
          <div className="p-6 rounded">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#9E8F75]">Submissions</span>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-4xl font-bold text-[#9E8F75]">
              {templates.reduce((sum, t) => sum + t.submissionCount, 0)}
            </div>
            <div className="text-sm text-[#9E8F75] mt-1">+89 this week</div>
          </div>
          <div className="p-6 rounded">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#9E8F75]">Active Forms</span>
              <Clock className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-4xl font-bold text-[#9E8F75]">
              {templates.filter(t => t.status === 'active').length}
            </div>
            <div className="text-sm text-[#9E8F75] mt-1">All working</div>
          </div>
          <div className="p-6 rounded">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#9E8F75]">Shared</span>
              <Share2 className="w-5 h-5 text-[#9E8F75]" />
            </div>
            <div className="text-4xl font-bold text-[#9E8F75]">
              {templates.filter(t => t.isPublic).length}
            </div>
            <div className="text-sm text-[#9E8F75] mt-1">Public templates</div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="p-6 mb-6 rounded">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9E8F75]" />
              <input
                type="text"
                placeholder="Search forms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => setSelectedCategory(value)}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap ${
                    selectedCategory === value
                      ? 'text-[#C9A84C]'
                      : 'bg-[rgba(201,168,76,0.06)] text-[#C9A84C] hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form Templates Grid */}
        <div className="grid grid-cols-3 gap-6">
          {filteredTemplates.map(template => (
            <div
              key={template.id}
              className="p-6 transition-colors cursor-pointer group rounded"
              onClick={() => router.push(`/forms/${template.id}`)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#9E8F75] mb-2 group-hover:text-amber-600">
                    {template.name}
                  </h3>
                  <p className="text-[#9E8F75] text-sm mb-3">{template.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[rgba(201,168,76,0.04)] text-amber-700 rounded-full text-xs font-medium">
                      {template.category}
                    </span>
                    {template.isPublic && (
                      <span className="px-3 py-1 bg-[rgba(201,168,76,0.04)] text-green-400 rounded-full text-xs font-medium">
                        Public
                      </span>
                    )}
                  </div>
                </div>
                <FileText className="w-8 h-8 text-amber-600" />
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#9E8F75]">Submissions:</span>
                  <span className="font-medium text-[#9E8F75]">{template.submissionCount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#9E8F75]">Uses:</span>
                  <span className="font-medium text-[#9E8F75]">{template.usageCount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#9E8F75]">Created by:</span>
                  <span className="font-medium text-[#9E8F75]">{template.createdBy}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t">
                <button
                  onClick={(e) => { e.stopPropagation(); router.push(`/forms/${template.id}/edit`); }}
                  className="flex-1 px-3 py-2 bg-[rgba(201,168,76,0.06)] text-[#C9A84C] rounded-lg hover:bg-gray-200 flex items-center justify-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); /* Handle view */ }}
                  className="flex-1 px-3 py-2 bg-[rgba(201,168,76,0.04)] text-amber-700 rounded-lg hover:bg-[rgba(201,168,76,0.04)] flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); /* Handle analytics */ }}
                  className="px-3 py-2 bg-[rgba(201,168,76,0.04)] text-[#9E8F75] rounded-lg hover:bg-[rgba(201,168,76,0.04)]"
                >
                  <BarChart className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12 rounded">
            <FileText className="w-16 h-16 text-[#9E8F75] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#9E8F75] mb-2">No forms found</h3>
            <p className="text-[#9E8F75] mb-6">Try adjusting your search or create a new form</p>
            <button
              onClick={() => router.push('/forms/builder')}
              className="px-6 py-3 rounded"
            >
              Create New Form
            </button>
          </div>
        )}
      </div>
    </div>
  );
}



