'use client';

import { useState, useRef } from 'react';
import { useAuth } from '@/lib/auth-context';
import { User, Mail, Phone, Briefcase, Calendar, Shield, Edit2, Save, X, Camera, Upload, FileText, Download, Trash2, AlertCircle, CheckCircle, CalendarDays, Plus, Ban, Heart, DollarSign, Umbrella, TrendingUp, Gift } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface UploadedDocument {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadDate: string;
  category: string;
}

export default function ProfilePage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const documentInputRef = useRef<HTMLInputElement>(null);
  const [uploadStatus, setUploadStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  
  // Unavailability state
  const [unavailableDates, setUnavailableDates] = useState<Array<{
    id: string;
    date: string;
    startTime?: string;
    endTime?: string;
    reason?: string;
    isAllDay: boolean;
  }>>([]);
  const [showAddUnavailable, setShowAddUnavailable] = useState(false);
  const [newUnavailable, setNewUnavailable] = useState({
    date: '',
    startTime: '',
    endTime: '',
    reason: '',
    isAllDay: true
  });
  
  // Mock uploaded documents
  const [documents, setDocuments] = useState<UploadedDocument[]>([
    {
      id: '1',
      name: 'Resume_2025.pdf',
      type: 'application/pdf',
      size: 245000,
      uploadDate: 'Dec 15, 2025',
      category: 'Resume'
    },
    {
      id: '2',
      name: 'Certifications_CPR.pdf',
      type: 'application/pdf',
      size: 180000,
      uploadDate: 'Nov 20, 2025',
      category: 'Certifications'
    },
  ]);

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: '',
  });

  // Redirect if not authenticated
  if (typeof window !== 'undefined' && !isAuthenticated) {
    router.push('/login');
    return null;
  }

  if (!user) {
    return null;
  }

  const handleSave = () => {
    // In production, this would save to backend
    console.log('Saving profile:', formData);
    if (avatarFile) {
      console.log('Uploading avatar:', avatarFile.name);
      // In production, upload avatar to backend/cloud storage
    }
    setIsEditing(false);
    setAvatarFile(null);
    setUploadStatus({ type: 'success', message: 'Profile updated successfully!' });
    setTimeout(() => setUploadStatus(null), 3000);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setUploadStatus({ type: 'error', message: 'Please select an image file' });
        setTimeout(() => setUploadStatus(null), 3000);
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setUploadStatus({ type: 'error', message: 'Image must be smaller than 5MB' });
        setTimeout(() => setUploadStatus(null), 3000);
        return;
      }
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type (only documents)
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/jpeg',
        'image/png',
        'image/jpg'
      ];
      if (!allowedTypes.includes(file.type)) {
        setUploadStatus({ type: 'error', message: 'Only PDF, Word, and image files are allowed' });
        setTimeout(() => setUploadStatus(null), 3000);
        return;
      }
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setUploadStatus({ type: 'error', message: 'File must be smaller than 10MB' });
        setTimeout(() => setUploadStatus(null), 3000);
        return;
      }
      
      // Add document to list (in production, upload to backend)
      const newDoc: UploadedDocument = {
        id: Date.now().toString(),
        name: file.name,
        type: file.type,
        size: file.size,
        uploadDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        category: 'Other'
      };
      setDocuments([...documents, newDoc]);
      setUploadStatus({ type: 'success', message: `${file.name} uploaded successfully!` });
      setTimeout(() => setUploadStatus(null), 3000);
      
      // Reset input
      if (documentInputRef.current) {
        documentInputRef.current.value = '';
      }
    }
  };

  const handleDeleteDocument = (id: string) => {
    if (confirm('Are you sure you want to delete this document?')) {
      setDocuments(documents.filter(doc => doc.id !== id));
      setUploadStatus({ type: 'success', message: 'Document deleted successfully' });
      setTimeout(() => setUploadStatus(null), 3000);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.includes('pdf')) return '📄';
    if (type.includes('word')) return '📝';
    if (type.includes('image')) return '🖼️';
    return '📎';
  };

  const handleAddUnavailable = () => {
    if (!newUnavailable.date) {
      setUploadStatus({ type: 'error', message: 'Please select a date' });
      setTimeout(() => setUploadStatus(null), 3000);
      return;
    }
    if (!newUnavailable.isAllDay && (!newUnavailable.startTime || !newUnavailable.endTime)) {
      setUploadStatus({ type: 'error', message: 'Please select start and end times' });
      setTimeout(() => setUploadStatus(null), 3000);
      return;
    }
    
    const unavailable = {
      id: Date.now().toString(),
      date: newUnavailable.date,
      startTime: newUnavailable.isAllDay ? undefined : newUnavailable.startTime,
      endTime: newUnavailable.isAllDay ? undefined : newUnavailable.endTime,
      reason: newUnavailable.reason || undefined,
      isAllDay: newUnavailable.isAllDay
    };
    
    setUnavailableDates([...unavailableDates, unavailable]);
    setNewUnavailable({ date: '', startTime: '', endTime: '', reason: '', isAllDay: true });
    setShowAddUnavailable(false);
    setUploadStatus({ type: 'success', message: 'Unavailability marked successfully' });
    setTimeout(() => setUploadStatus(null), 3000);
  };

  const handleDeleteUnavailable = (id: string) => {
    if (confirm('Remove this unavailability?')) {
      setUnavailableDates(unavailableDates.filter(u => u.id !== id));
      setUploadStatus({ type: 'success', message: 'Unavailability removed' });
      setTimeout(() => setUploadStatus(null), 3000);
    }
  };

  const formatDateDisplay = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-slate-400">Manage your account information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-center relative">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-12 h-12 text-slate-800" />
                )}
              </div>
              <button
                onClick={() => avatarInputRef.current?.click()}
                className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-110 shadow-lg"
                title="Change photo"
              >
                <Camera className="w-4 h-4" />
              </button>
              <input
                ref={avatarInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-1 mt-4">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-blue-100 text-sm capitalize">{user.role}</p>
            
            {/* Edit Button */}
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all"
              >
                <Edit2 className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Content Section */}
          <div className="p-8">
            {isEditing ? (
              /* Edit Mode */
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <Save className="w-5 h-5" />
                    Save Changes
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        phone: '',
                      });
                    }}
                    className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <X className="w-5 h-5" />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              /* View Mode */
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-400" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                      <label className="text-sm text-slate-400 block mb-1">First Name</label>
                      <p className="text-white font-semibold">{user.firstName}</p>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                      <label className="text-sm text-slate-400 block mb-1">Last Name</label>
                      <p className="text-white font-semibold">{user.lastName}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-purple-400" />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                      <label className="text-sm text-slate-400 block mb-1 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </label>
                      <p className="text-white font-semibold">{user.email}</p>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                      <label className="text-sm text-slate-400 block mb-1 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone
                      </label>
                      <p className="text-white font-semibold">Not set</p>
                    </div>
                  </div>
                </div>

                {/* Employment Information */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-green-400" />
                    Employment Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                      <label className="text-sm text-slate-400 block mb-1 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Role
                      </label>
                      <p className="text-white font-semibold capitalize">{user.role}</p>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                      <label className="text-sm text-slate-400 block mb-1">Employee ID</label>
                      <p className="text-white font-semibold">{user.employeeId || 'Not linked'}</p>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                      <label className="text-sm text-slate-400 block mb-1 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Status
                      </label>
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* My Benefits Section */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    My Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Health Insurance */}
                    <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-500/20 rounded-lg">
                          <Heart className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Health Insurance</h4>
                          <p className="text-blue-300 text-sm">Premium Plan</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Coverage</span>
                          <span className="text-white font-semibold">Medical, Dental, Vision</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Your Contribution</span>
                          <span className="text-white font-semibold">$180/month</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Employer Pays</span>
                          <span className="text-green-400 font-semibold">$520/month</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-blue-500/30">
                          <span className="text-slate-300 text-sm">Deductible</span>
                          <span className="text-white font-semibold">$500 ($150 met)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Out-of-Pocket Max</span>
                          <span className="text-white font-semibold">$2,000</span>
                        </div>
                      </div>
                    </div>

                    {/* 401(k) Retirement */}
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-purple-500/20 rounded-lg">
                          <TrendingUp className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">401(k) Retirement</h4>
                          <p className="text-purple-300 text-sm">Enrolled with Match</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Your Contribution</span>
                          <span className="text-white font-semibold">6% ($195/pay)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Employer Match</span>
                          <span className="text-green-400 font-semibold">4% ($130/pay)</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-purple-500/30">
                          <span className="text-slate-300 text-sm">Current Balance</span>
                          <span className="text-white font-semibold">$12,450</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">YTD Contributions</span>
                          <span className="text-white font-semibold">$5,070</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Est. Annual Growth</span>
                          <span className="text-green-400 font-semibold">+8.2%</span>
                        </div>
                      </div>
                    </div>

                    {/* FSA/HSA */}
                    <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-green-500/20 rounded-lg">
                          <DollarSign className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Flexible Spending Account</h4>
                          <p className="text-green-300 text-sm">Healthcare FSA</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Annual Election</span>
                          <span className="text-white font-semibold">$2,500</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Per Paycheck</span>
                          <span className="text-white font-semibold">$96.15</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-green-500/30">
                          <span className="text-slate-300 text-sm">Available Balance</span>
                          <span className="text-green-400 font-bold text-lg">$1,850</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Used This Year</span>
                          <span className="text-white font-semibold">$650</span>
                        </div>
                      </div>
                      <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                        Submit Claim
                      </button>
                    </div>

                    {/* Life Insurance */}
                    <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-xl p-6 border border-amber-500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-amber-500/20 rounded-lg">
                          <Umbrella className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Life Insurance</h4>
                          <p className="text-amber-300 text-sm">Basic + Supplemental</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Basic Coverage</span>
                          <span className="text-white font-semibold">$50,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Basic Premium</span>
                          <span className="text-green-400 font-semibold">Employer Paid</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-amber-500/30">
                          <span className="text-slate-300 text-sm">Supplemental Coverage</span>
                          <span className="text-white font-semibold">$100,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Supplemental Premium</span>
                          <span className="text-white font-semibold">$24/month</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-amber-500/30">
                          <span className="text-slate-300 text-sm font-semibold">Total Coverage</span>
                          <span className="text-amber-400 font-bold text-lg">$150,000</span>
                        </div>
                      </div>
                    </div>

                    {/* PTO/Vacation */}
                    <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-6 border border-cyan-500/30 md:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-cyan-500/20 rounded-lg">
                          <Gift className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Paid Time Off (PTO)</h4>
                          <p className="text-cyan-300 text-sm">Accrual Balance</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div>
                          <label className="text-slate-400 text-sm block mb-2">Available Hours</label>
                          <p className="text-white font-bold text-2xl">87.5</p>
                          <p className="text-cyan-400 text-sm mt-1">≈ 10.9 days</p>
                        </div>
                        <div>
                          <label className="text-slate-400 text-sm block mb-2">Used This Year</label>
                          <p className="text-white font-bold text-2xl">32.0</p>
                          <p className="text-slate-400 text-sm mt-1">≈ 4 days</p>
                        </div>
                        <div>
                          <label className="text-slate-400 text-sm block mb-2">Accrual Rate</label>
                          <p className="text-white font-bold text-2xl">6.67</p>
                          <p className="text-green-400 text-sm mt-1">hours/pay period</p>
                        </div>
                        <div>
                          <label className="text-slate-400 text-sm block mb-2">Max Balance</label>
                          <p className="text-white font-bold text-2xl">240</p>
                          <p className="text-slate-400 text-sm mt-1">hours (30 days)</p>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-semibold mb-1">Next Accrual</p>
                            <p className="text-slate-400 text-sm">6.67 hours on January 15, 2026</p>
                          </div>
                          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
                            Request Time Off
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits Summary */}
                  <div className="mt-6 p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/20">
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-blue-400" />
                      Total Benefits Value
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <label className="text-slate-400 text-sm block mb-2">Your Annual Cost</label>
                        <p className="text-white font-bold text-2xl">$6,408</p>
                        <p className="text-slate-400 text-sm mt-1">All deductions</p>
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm block mb-2">Employer Contribution</label>
                        <p className="text-green-400 font-bold text-2xl">$9,880</p>
                        <p className="text-green-300 text-sm mt-1">Company pays</p>
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm block mb-2">Total Package Value</label>
                        <p className="text-blue-400 font-bold text-2xl">$16,288</p>
                        <p className="text-slate-400 text-sm mt-1">Per year</p>
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm block mb-2">Tax Savings</label>
                        <p className="text-purple-400 font-bold text-2xl">$1,923</p>
                        <p className="text-purple-300 text-sm mt-1">Estimated annually</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-blue-500/20 flex items-center gap-2 text-sm text-slate-300">
                      <AlertCircle className="w-4 h-4 text-blue-400" />
                      <p>
                        Your benefits package is worth <span className="text-white font-semibold">$16,288/year</span> on top of your salary. 
                        Next open enrollment: <span className="text-blue-400 font-semibold">November 1, 2026</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Account Settings */}
                <div className="pt-6 border-t border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-all text-left">
                      Change Password
                    </button>
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-all text-left">
                      Notification Preferences
                    </button>
                  </div>
                </div>

                {/* My Documents Section */}
                <div className="pt-6 border-t border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-400" />
                    My Documents
                  </h3>
                  
                  {/* Upload Status */}
                  {uploadStatus && (
                    <div className={`mb-4 p-4 rounded-lg flex items-center gap-2 ${
                      uploadStatus.type === 'success' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {uploadStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span>{uploadStatus.message}</span>
                    </div>
                  )}

                  {/* Upload Area */}
                  <div className="mb-6">
                    <button
                      onClick={() => documentInputRef.current?.click()}
                      className="w-full border-2 border-dashed border-slate-600 hover:border-blue-500 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg p-8 transition-all group"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <Upload className="w-10 h-10 text-slate-400 group-hover:text-blue-400 transition-colors" />
                        <div className="text-center">
                          <p className="text-white font-semibold mb-1">Upload Document</p>
                          <p className="text-sm text-slate-400">
                            PDF, Word, or Image files (Max 10MB)
                          </p>
                        </div>
                      </div>
                    </button>
                    <input
                      ref={documentInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleDocumentUpload}
                      className="hidden"
                    />
                  </div>

                  {/* Documents List */}
                  {documents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {documents.map((doc) => (
                        <div
                          key={doc.id}
                          className="bg-slate-700/30 border border-slate-600 rounded-lg p-4 hover:bg-slate-700/50 transition-all"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3 flex-1 min-w-0">
                              <div className="text-2xl mt-1">{getFileIcon(doc.type)}</div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-white font-semibold truncate">{doc.name}</h4>
                                <p className="text-sm text-slate-400 mt-1">
                                  {formatFileSize(doc.size)} • {doc.uploadDate}
                                </p>
                                <span className="inline-block mt-2 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                                  {doc.category}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => {
                                  setUploadStatus({ type: 'success', message: `Downloading ${doc.name}...` });
                                  setTimeout(() => setUploadStatus(null), 2000);
                                }}
                                className="p-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-all"
                                title="Download"
                              >
                                <Download className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteDocument(doc.id)}
                                className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 border border-dashed border-slate-600 rounded-lg">
                      <FileText className="w-12 h-12 text-slate-500 mx-auto mb-3" />
                      <p className="text-slate-400">No documents uploaded yet.</p>
                      <p className="text-sm text-slate-500 mt-1">
                        Add your certifications, resume, or other important files.
                      </p>
                    </div>
                  )}
                </div>

                {/* Availability Calendar Section */}
                <div className="pt-6 border-t border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-purple-400" />
                    My Availability
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Mark dates or times when you're unavailable. Managers will be alerted if they try to schedule you during these times.
                  </p>

                  {/* Add Unavailable Button */}
                  {!showAddUnavailable && (
                    <button
                      onClick={() => setShowAddUnavailable(true)}
                      className="mb-4 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 px-4 py-2 rounded-lg transition-all flex items-center gap-2 border border-purple-500/30"
                    >
                      <Plus className="w-4 h-4" />
                      Mark Unavailable
                    </button>
                  )}

                  {/* Add Unavailable Form */}
                  {showAddUnavailable && (
                    <div className="mb-6 bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-4">Mark Unavailable Time</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-slate-400 mb-2">Date</label>
                          <input
                            type="date"
                            value={newUnavailable.date}
                            onChange={(e) => setNewUnavailable({ ...newUnavailable, date: e.target.value })}
                            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>

                        <div>
                          <label className="flex items-center gap-2 text-white mb-3">
                            <input
                              type="checkbox"
                              checked={newUnavailable.isAllDay}
                              onChange={(e) => setNewUnavailable({ ...newUnavailable, isAllDay: e.target.checked })}
                              className="w-4 h-4 rounded"
                            />
                            All Day
                          </label>
                        </div>

                        {!newUnavailable.isAllDay && (
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm text-slate-400 mb-2">Start Time</label>
                              <input
                                type="time"
                                value={newUnavailable.startTime}
                                onChange={(e) => setNewUnavailable({ ...newUnavailable, startTime: e.target.value })}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-slate-400 mb-2">End Time</label>
                              <input
                                type="time"
                                value={newUnavailable.endTime}
                                onChange={(e) => setNewUnavailable({ ...newUnavailable, endTime: e.target.value })}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                              />
                            </div>
                          </div>
                        )}

                        <div>
                          <label className="block text-sm text-slate-400 mb-2">Reason (Optional)</label>
                          <input
                            type="text"
                            value={newUnavailable.reason}
                            onChange={(e) => setNewUnavailable({ ...newUnavailable, reason: e.target.value })}
                            placeholder="e.g., Vacation, Appointment, Personal"
                            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                          />
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={handleAddUnavailable}
                            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all font-semibold"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => {
                              setShowAddUnavailable(false);
                              setNewUnavailable({ date: '', startTime: '', endTime: '', reason: '', isAllDay: true });
                            }}
                            className="flex-1 bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg transition-all font-semibold"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Unavailable Dates List */}
                  {unavailableDates.length > 0 ? (
                    <div className="space-y-3">
                      {unavailableDates
                        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                        .map((unavailable) => (
                          <div
                            key={unavailable.id}
                            className="bg-slate-700/30 border border-slate-600 rounded-lg p-4 hover:bg-slate-700/50 transition-all"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-start gap-3 flex-1">
                                <Ban className="w-5 h-5 text-red-400 mt-1" />
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <p className="text-white font-semibold">
                                      {formatDateDisplay(unavailable.date)}
                                    </p>
                                    {!unavailable.isAllDay && (
                                      <span className="text-sm text-slate-400">
                                        {unavailable.startTime} - {unavailable.endTime}
                                      </span>
                                    )}
                                    {unavailable.isAllDay && (
                                      <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded">
                                        All Day
                                      </span>
                                    )}
                                  </div>
                                  {unavailable.reason && (
                                    <p className="text-sm text-slate-400 mt-1">{unavailable.reason}</p>
                                  )}
                                </div>
                              </div>
                              <button
                                onClick={() => handleDeleteUnavailable(unavailable.id)}
                                className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all"
                                title="Remove"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 border border-dashed border-slate-600 rounded-lg">
                      <CalendarDays className="w-12 h-12 text-slate-500 mx-auto mb-3" />
                      <p className="text-slate-400">No unavailable times marked.</p>
                      <p className="text-sm text-slate-500 mt-1">
                        You're available for all shifts. Mark specific dates when you can't work.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
