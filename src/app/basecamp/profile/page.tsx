'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mountain, User, Mail, Phone, MapPin, Calendar, Briefcase, Award, Edit, Camera, Save, X } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'Alex',
    lastName: 'Rodriguez',
    email: 'alex.rodriguez@company.com',
    phone: '(555) 123-4567',
    department: 'Operations',
    position: 'Team Lead',
    location: 'Main Office - Building A',
    hireDate: 'March 15, 2023',
    emergencyContact: 'Maria Rodriguez',
    emergencyPhone: '(555) 987-6543',
    birthday: 'June 12',
    pronouns: 'he/him'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Top Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-xl border-b-2 border-emerald-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/basecamp" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Mountain className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">
                Your Basecamp
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <Link href="/basecamp" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-100 mb-4 transition-colors">
            ← Back to Basecamp
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 mb-2"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(59,130,246,0.6)',
                    WebkitTextStroke: '1px rgba(59,130,246,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
                My Profile
              </h1>
              <p className="text-emerald-200 text-lg">Manage your information and preferences</p>
            </div>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-bold transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2"
              >
                <Edit className="w-5 h-5" />
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border-2 border-emerald-500/30 mb-6">
          {/* Avatar Section */}
          <div className="flex items-start gap-8 mb-8 pb-8 border-b border-slate-700">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-5xl font-bold">
                {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white transition-all shadow-lg">
                <Camera className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">{profile.firstName} {profile.lastName}</h2>
              <div className="text-emerald-300 text-lg font-semibold mb-1">{profile.position}</div>
              <div className="text-slate-400 mb-4">{profile.department}</div>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-emerald-900/50 border border-emerald-500/30 rounded-lg">
                  <div className="text-slate-400 text-xs">Pronouns</div>
                  <div className="text-white font-semibold">{profile.pronouns}</div>
                </div>
                <div className="px-4 py-2 bg-purple-900/50 border border-purple-500/30 rounded-lg">
                  <div className="text-slate-400 text-xs">Tenure</div>
                  <div className="text-white font-semibold">2 years 9 months</div>
                </div>
                <div className="px-4 py-2 bg-blue-900/50 border border-blue-500/30 rounded-lg">
                  <div className="text-slate-400 text-xs">Birthday</div>
                  <div className="text-white font-semibold">{profile.birthday}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                <div className="text-slate-400 text-sm mb-1">Email Address</div>
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    className="w-full bg-slate-800 border border-emerald-500/30 rounded px-3 py-2 text-white"
                  />
                ) : (
                  <div className="text-white font-semibold">{profile.email}</div>
                )}
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                <div className="text-slate-400 text-sm mb-1">Phone Number</div>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    className="w-full bg-slate-800 border border-emerald-500/30 rounded px-3 py-2 text-white"
                  />
                ) : (
                  <div className="text-white font-semibold">{profile.phone}</div>
                )}
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                <div className="text-slate-400 text-sm mb-1">Location</div>
                <div className="text-white font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  {profile.location}
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                <div className="text-slate-400 text-sm mb-1">Hire Date</div>
                <div className="text-white font-semibold flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  {profile.hireDate}
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-red-400" />
              Emergency Contact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                <div className="text-slate-400 text-sm mb-1">Contact Name</div>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.emergencyContact}
                    onChange={(e) => setProfile({...profile, emergencyContact: e.target.value})}
                    className="w-full bg-slate-800 border border-emerald-500/30 rounded px-3 py-2 text-white"
                  />
                ) : (
                  <div className="text-white font-semibold">{profile.emergencyContact}</div>
                )}
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                <div className="text-slate-400 text-sm mb-1">Contact Phone</div>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profile.emergencyPhone}
                    onChange={(e) => setProfile({...profile, emergencyPhone: e.target.value})}
                    className="w-full bg-slate-800 border border-emerald-500/30 rounded px-3 py-2 text-white"
                  />
                ) : (
                  <div className="text-white font-semibold">{profile.emergencyPhone}</div>
                )}
              </div>
            </div>
          </div>

          {/* Save/Cancel Buttons */}
          {isEditing && (
            <div className="flex gap-3 justify-end pt-4 border-t border-slate-700">
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                <X className="w-5 h-5" />
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  alert('Profile updated successfully!');
                }}
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-emerald-500/30 flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-2xl p-6 border-2 border-yellow-500/30">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-400" />
            Your Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-yellow-500/20">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-yellow-300 font-bold">Team Player</div>
              <div className="text-slate-400 text-xs mt-1">10+ Kudos received</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-yellow-500/20">
              <div className="text-4xl mb-2">🔥</div>
              <div className="text-orange-300 font-bold">On Fire!</div>
              <div className="text-slate-400 text-xs mt-1">12 day streak</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-yellow-500/20">
              <div className="text-4xl mb-2">💡</div>
              <div className="text-blue-300 font-bold">Innovator</div>
              <div className="text-slate-400 text-xs mt-1">3 ideas submitted</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-yellow-500/20">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-purple-300 font-bold">Star Performer</div>
              <div className="text-slate-400 text-xs mt-1">Q4 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
