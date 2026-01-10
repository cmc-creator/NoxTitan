'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  User, Briefcase, Heart, Coffee, Book, Music, Dumbbell, Camera, 
  MapPin, Calendar, Phone, Mail, Users, Target, Sparkles, ChevronRight,
  CheckCircle2
} from 'lucide-react';

interface OnboardingData {
  role: 'employee' | 'manager' | 'admin' | '';
  
  // Basic Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  
  // Personal Info for Basecamp
  bio: string;
  hometown: string;
  favoriteFoods: string;
  hobbies: string;
  favoriteMusic: string;
  favoriteMovies: string;
  pets: string;
  funFact: string;
  
  // Work Info
  department: string;
  position: string;
  startDate: string;
  goals: string;
  
  // Manager-specific
  teamSize?: number;
  managementStyle?: string;
  leadershipGoals?: string;
}

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    bio: '',
    hometown: '',
    favoriteFoods: '',
    hobbies: '',
    favoriteMusic: '',
    favoriteMovies: '',
    pets: '',
    funFact: '',
    department: '',
    position: '',
    startDate: '',
    goals: ''
  });

  const updateData = (field: keyof OnboardingData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleComplete = async () => {
    try {
      const response = await fetch('/api/onboarding/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        router.push('/basecamp');
      }
    } catch (error) {
      console.error('Failed to complete onboarding:', error);
      alert('Failed to save onboarding data');
    }
  };

  const totalSteps = data.role === 'manager' ? 5 : 4;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-bold">Step {step} of {totalSteps}</span>
            <span className="text-purple-300">{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Role Selection */}
        {step === 1 && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h1 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              Welcome to NoxTitan!
            </h1>
            <p className="text-slate-300 mb-6">Let's get you set up. First, what's your role?</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => { updateData('role', 'employee'); setStep(2); }}
                className="p-6 bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-xl text-white transition-all"
              >
                <User className="w-12 h-12 mx-auto mb-3" />
                <div className="font-bold text-lg">Employee</div>
                <div className="text-sm text-blue-200 mt-2">Team member</div>
              </button>
              
              <button
                onClick={() => { updateData('role', 'manager'); setStep(2); }}
                className="p-6 bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 rounded-xl text-white transition-all"
              >
                <Briefcase className="w-12 h-12 mx-auto mb-3" />
                <div className="font-bold text-lg">Manager</div>
                <div className="text-sm text-purple-200 mt-2">Team leader</div>
              </button>
              
              <button
                onClick={() => { updateData('role', 'admin'); setStep(2); }}
                className="p-6 bg-gradient-to-br from-pink-600 to-pink-800 hover:from-pink-700 hover:to-pink-900 rounded-xl text-white transition-all"
              >
                <Target className="w-12 h-12 mx-auto mb-3" />
                <div className="font-bold text-lg">Admin</div>
                <div className="text-sm text-pink-200 mt-2">System admin</div>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Basic Info */}
        {step === 2 && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Basic Information</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">First Name *</label>
                  <input
                    type="text"
                    value={data.firstName}
                    onChange={(e) => updateData('firstName', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Last Name *</label>
                  <input
                    type="text"
                    value={data.lastName}
                    onChange={(e) => updateData('lastName', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => updateData('email', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => updateData('phone', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Date of Birth</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="date"
                    value={data.dateOfBirth}
                    onChange={(e) => updateData('dateOfBirth', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-all"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!data.firstName || !data.lastName || !data.email}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Next <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Personal Info for Basecamp */}
        {step === 3 && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2">About You</h2>
            <p className="text-slate-400 mb-6">This info will appear in your Basecamp profile so teammates can get to know you!</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" /> Bio
                </label>
                <textarea
                  value={data.bio}
                  onChange={(e) => updateData('bio', e.target.value)}
                  placeholder="Tell us a bit about yourself..."
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Hometown
                  </label>
                  <input
                    type="text"
                    value={data.hometown}
                    onChange={(e) => updateData('hometown', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                    <Coffee className="w-4 h-4" /> Favorite Foods
                  </label>
                  <input
                    type="text"
                    value={data.favoriteFoods}
                    onChange={(e) => updateData('favoriteFoods', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" /> Hobbies & Interests
                </label>
                <input
                  type="text"
                  value={data.hobbies}
                  onChange={(e) => updateData('hobbies', e.target.value)}
                  placeholder="Reading, hiking, gaming..."
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                    <Music className="w-4 h-4" /> Favorite Music
                  </label>
                  <input
                    type="text"
                    value={data.favoriteMusic}
                    onChange={(e) => updateData('favoriteMusic', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                    <Camera className="w-4 h-4" /> Favorite Movies
                  </label>
                  <input
                    type="text"
                    value={data.favoriteMovies}
                    onChange={(e) => updateData('favoriteMovies', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                  <Dumbbell className="w-4 h-4" /> Pets
                </label>
                <input
                  type="text"
                  value={data.pets}
                  onChange={(e) => updateData('pets', e.target.value)}
                  placeholder="Dog named Max, 2 cats..."
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Fun Fact
                </label>
                <input
                  type="text"
                  value={data.funFact}
                  onChange={(e) => updateData('funFact', e.target.value)}
                  placeholder="Something interesting about you..."
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-all"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg transition-all flex items-center gap-2"
              >
                Next <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Work Info */}
        {step === 4 && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Work Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Department *</label>
                <select
                  value={data.department}
                  onChange={(e) => updateData('department', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Operations">Operations</option>
                  <option value="HR">Human Resources</option>
                  <option value="Finance">Finance</option>
                  <option value="IT">Information Technology</option>
                  <option value="Customer Service">Customer Service</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Position/Title *</label>
                <input
                  type="text"
                  value={data.position}
                  onChange={(e) => updateData('position', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Start Date *</label>
                <input
                  type="date"
                  value={data.startDate}
                  onChange={(e) => updateData('startDate', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Professional Goals</label>
                <textarea
                  value={data.goals}
                  onChange={(e) => updateData('goals', e.target.value)}
                  placeholder="What do you hope to achieve in this role?"
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-all"
              >
                Back
              </button>
              <button
                onClick={() => {
                  if (data.role === 'manager') {
                    setStep(5);
                  } else {
                    handleComplete();
                  }
                }}
                disabled={!data.department || !data.position || !data.startDate}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {data.role === 'manager' ? 'Next' : 'Complete'} 
                {data.role === 'manager' ? <ChevronRight className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Manager-Specific */}
        {step === 5 && data.role === 'manager' && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Leadership Info</h2>
            <p className="text-slate-400 mb-6">Help us understand your management approach</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Team Size</label>
                <input
                  type="number"
                  value={data.teamSize || ''}
                  onChange={(e) => updateData('teamSize', parseInt(e.target.value))}
                  placeholder="How many people do you manage?"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Management Style</label>
                <textarea
                  value={data.managementStyle || ''}
                  onChange={(e) => updateData('managementStyle', e.target.value)}
                  placeholder="Describe your management philosophy..."
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Leadership Goals</label>
                <textarea
                  value={data.leadershipGoals || ''}
                  onChange={(e) => updateData('leadershipGoals', e.target.value)}
                  placeholder="What are your goals as a leader?"
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(4)}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-all"
              >
                Back
              </button>
              <button
                onClick={handleComplete}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-lg transition-all flex items-center gap-2"
              >
                Complete Onboarding <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
