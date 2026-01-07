'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mountain, Users, Search, Mail, Phone, MapPin, Briefcase, MessageSquare, Calendar, Filter } from 'lucide-react';

export default function TeamDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const team = [
    {
      id: 1,
      name: 'Sarah Chen',
      position: 'CEO',
      department: 'Executive',
      email: 'sarah.chen@company.com',
      phone: '(555) 100-0001',
      location: 'HQ - Office 401',
      avatar: 'SC',
      funFact: '☕ Coffee enthusiast - asks about your weekend every Monday!',
      skills: ['Leadership', 'Strategy', 'Vision']
    },
    {
      id: 2,
      name: 'Michael Torres',
      position: 'VP of Operations',
      department: 'Operations',
      email: 'michael.torres@company.com',
      phone: '(555) 200-0002',
      location: 'HQ - Office 305',
      avatar: 'MT',
      funFact: '🎸 Plays guitar at company events - total rockstar!',
      skills: ['Process Improvement', 'Team Building', 'Innovation']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'HR Director',
      department: 'Human Resources',
      email: 'emily.rodriguez@company.com',
      phone: '(555) 300-0003',
      location: 'HQ - Office 210',
      avatar: 'ER',
      funFact: '🌱 Plants in her office have names - says hi to them daily!',
      skills: ['Employee Relations', 'Conflict Resolution', 'Coaching']
    },
    {
      id: 4,
      name: 'David Park',
      position: 'Tech Lead',
      department: 'Engineering',
      email: 'david.park@company.com',
      phone: '(555) 400-0004',
      location: 'HQ - Desk A-12',
      avatar: 'DP',
      funFact: '🎮 Video game wizard - hosts Friday gaming sessions!',
      skills: ['System Architecture', 'Code Review', 'Mentorship']
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      position: 'Project Manager',
      department: 'Operations',
      email: 'lisa.anderson@company.com',
      phone: '(555) 500-0005',
      location: 'HQ - Office 215',
      avatar: 'LA',
      funFact: '📚 Has read 50+ books this year - always has recommendations!',
      skills: ['Agile', 'Stakeholder Management', 'Risk Assessment']
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'Data Analyst',
      department: 'Analytics',
      email: 'james.wilson@company.com',
      phone: '(555) 600-0006',
      location: 'Remote - Seattle',
      avatar: 'JW',
      funFact: '🏃 Marathon runner - has completed 15 marathons!',
      skills: ['Data Visualization', 'SQL', 'Python']
    },
    {
      id: 7,
      name: 'Maria Garcia',
      position: 'Marketing Manager',
      department: 'Marketing',
      email: 'maria.garcia@company.com',
      phone: '(555) 700-0007',
      location: 'HQ - Desk B-8',
      avatar: 'MG',
      funFact: '🎨 Creates amazing latte art - coffee meetings are artistic!',
      skills: ['Brand Strategy', 'Content Creation', 'Social Media']
    },
    {
      id: 8,
      name: 'Alex Rodriguez',
      position: 'Team Lead',
      department: 'Operations',
      email: 'alex.rodriguez@company.com',
      phone: '(555) 800-0008',
      location: 'Main Office - Building A',
      avatar: 'AR',
      funFact: '🎬 Movie buff - organizes monthly movie nights!',
      skills: ['Team Coordination', 'Process Optimization', 'Training']
    }
  ];

  const departments = ['all', 'Executive', 'Operations', 'Human Resources', 'Engineering', 'Analytics', 'Marketing'];

  const filteredTeam = team.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Top Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-xl border-b-2 border-emerald-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/basecamp" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Mountain className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">
              Your Basecamp
            </span>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <Link href="/basecamp" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-100 mb-4 transition-colors">
            ← Back to Basecamp
          </Link>
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 mb-2"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(236,72,153,0.6)',
                WebkitTextStroke: '1px rgba(236,72,153,0.3)',
                filter: 'brightness(1.4)'
              }}>
            👥 Team Directory
          </h1>
          <p className="text-emerald-200 text-lg">Get to know your awesome teammates!</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-5 border-2 border-blue-500/30">
            <div className="text-blue-200 text-sm mb-1">Total Team Members</div>
            <div className="text-3xl font-bold text-white">{team.length}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-5 border-2 border-purple-500/30">
            <div className="text-purple-200 text-sm mb-1">Departments</div>
            <div className="text-3xl font-bold text-white">6</div>
          </div>
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-xl p-5 border-2 border-green-500/30">
            <div className="text-green-200 text-sm mb-1">Remote Workers</div>
            <div className="text-3xl font-bold text-white">1</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-xl p-5 border-2 border-orange-500/30">
            <div className="text-orange-200 text-sm mb-1">Open Positions</div>
            <div className="text-3xl font-bold text-white">3</div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bg-slate-800/50 rounded-xl p-4 border-2 border-emerald-500/30 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-400" />
                <input
                  type="text"
                  placeholder="Search by name, position, or department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border-2 border-emerald-500/30 rounded-lg pl-10 pr-4 py-2 text-white focus:border-emerald-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-emerald-400" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="bg-slate-900 border-2 border-emerald-500/30 rounded-lg px-4 py-2 text-white focus:border-emerald-400 focus:outline-none"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeam.map(member => (
            <div key={member.id} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border-2 border-emerald-500/30 hover:border-emerald-400/50 transition-all group">
              {/* Avatar & Basic Info */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {member.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-1 truncate group-hover:text-emerald-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-emerald-300 font-semibold text-sm mb-1">{member.position}</p>
                  <p className="text-slate-400 text-xs">{member.department}</p>
                </div>
              </div>

              {/* Fun Fact */}
              <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg p-3 mb-4 border border-yellow-500/20">
                <p className="text-yellow-200 text-sm">{member.funFact}</p>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="text-slate-400 text-xs mb-2">Skills:</div>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="truncate">{member.location}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </button>
                <button className="flex-1 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Meet
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTeam.length === 0 && (
          <div className="bg-slate-800/50 rounded-xl p-12 border-2 border-emerald-500/30 text-center">
            <Users className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No team members found</h3>
            <p className="text-slate-400">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Encouragement Footer */}
        <div className="mt-8 bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-xl p-6 border-2 border-pink-500/30 text-center">
          <h3 className="text-2xl font-bold text-pink-200 mb-2">💜 You're part of something special!</h3>
          <p className="text-pink-100 text-lg">Every person here makes our team amazing. Don't be shy - say hi!</p>
        </div>
      </div>
    </div>
  );
}
