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

  const handleSave = async () => {
    try {
      const res = await fetch('/api/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        setUploadStatus({ type: 'error', message: err.error || 'Failed to save profile' });
        setTimeout(() => setUploadStatus(null), 3000);
        return;
      }
    } catch {
      setUploadStatus({ type: 'error', message: 'Network error — please try again' });
      setTimeout(() => setUploadStatus(null), 3000);
      return;
    }
    if (avatarFile) {
      console.log('Uploading avatar:', avatarFile.name);
      // Avatar upload to cloud storage would go here
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
    <div className="min-h-screen lux-app-bg p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-[#9E8F75]">Manage your account information</p>
        </div>

        {/* Profile Card */}
        <div className="lux-card rounded shadow-2xl border border-[rgba(201,168,76,0.22)] overflow-hidden">
          {/* Header Section */}
          <div className="bg-[rgba(201,168,76,0.08)] p-8 text-center relative">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-[#110F0B] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-12 h-12 text-[#9E8F75]" />
                )}
              </div>
              <button
                onClick={() => avatarInputRef.current?.click()}
                className="absolute bottom-0 right-0 p-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all transform shadow-lg"
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
            <p className="text-[#C9A84C] 100 text-sm capitalize">{user.role}</p>
            
            {/* Edit Button */}
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="absolute top-4 right-4 bg-[#110F0B]/20 hover:bg-[#110F0B]/30 text-white p-2 rounded-lg transition-all"
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
                    <label className="block text-sm font-semibold text-[#9E8F75] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded-lg text-white focus:outline-none focus:border-amber-500/40 focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#9E8F75] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded-lg text-white focus:outline-none focus:border-amber-500/40 focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#9E8F75] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded-lg text-white focus:outline-none focus:border-amber-500/40 focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#9E8F75] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded-lg text-white focus:outline-none focus:border-amber-500/40 focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
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
                    className="flex-1 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
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
                    <User className="w-5 h-5 text-amber-400" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[rgba(201,168,76,0.06)]/30 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
                      <label className="text-sm text-[#9E8F75] block mb-1">First Name</label>
                      <p className="text-white font-semibold">{user.firstName}</p>
                    </div>
                    <div className="bg-[rgba(201,168,76,0.06)]/30 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
                      <label className="text-sm text-[#9E8F75] block mb-1">Last Name</label>
                      <p className="text-white font-semibold">{user.lastName}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-amber-400" />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[rgba(201,168,76,0.06)]/30 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
                      <label className="text-sm text-[#9E8F75] block mb-1 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </label>
                      <p className="text-white font-semibold">{user.email}</p>
                    </div>
                    <div className="bg-[rgba(201,168,76,0.06)]/30 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
                      <label className="text-sm text-[#9E8F75] block mb-1 flex items-center gap-2">
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
                    <Briefcase className="w-5 h-5 text-[#C9A84C] 400" />
                    Employment Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[rgba(201,168,76,0.06)]/30 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
                      <label className="text-sm text-[#9E8F75] block mb-1 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Role
                      </label>
                      <p className="text-white font-semibold capitalize">{user.role}</p>
                    </div>
                    <div className="bg-[rgba(201,168,76,0.06)]/30 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
                      <label className="text-sm text-[#9E8F75] block mb-1">Employee ID</label>
                      <p className="text-white font-semibold">{user.employeeId || 'Not linked'}</p>
                    </div>
                    <div className="bg-[rgba(201,168,76,0.06)]/30 rounded-lg p-4 border border-[rgba(201,168,76,0.22)]">
                      <label className="text-sm text-[#9E8F75] block mb-1 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Status
                      </label>
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/20 text-[#C9A84C] 400 rounded-full text-sm font-semibold">
                        <div className="w-2 h-2 bg-[#110F0B] 400 rounded-full"></div>
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* My Benefits Section */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#C9A84C] 400" />
                    My Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Health Insurance */}
                    <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border border-amber-500/40/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-amber-600/20 rounded-lg">
                          <Heart className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Health Insurance</h4>
                          <p className="text-amber-400 text-sm">Premium Plan</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">Coverage</span>
                          <span className="text-white font-semibold">Medical, Dental, Vision</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">Your Contribution</span>
                          <span className="text-white font-semibold">$180/month</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">Employer Pays</span>
                          <span className="text-[#C9A84C] 400 font-semibold">$520/month</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-amber-500/40/30">
                          <span className="text-[#9E8F75] text-sm">Deductible</span>
                          <span className="text-white font-semibold">$500 ($150 met)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">Out-of-Pocket Max</span>
                          <span className="text-white font-semibold">$2,000</span>
                        </div>
                      </div>
                    </div>

                    {/* 401(k) Retirement */}
                    <div className="bg-[rgba(201,168,76,0.04)] rounded p-6 border border-amber-500/40/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-amber-500/20 rounded-lg">
                          <TrendingUp className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">401(k) Retirement</h4>
                          <p className="text-[#C9A84C] text-sm">Enrolled with Match</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">Your Contribution</span>
                          <span className="text-white font-semibold">6% ($195/pay)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">Employer Match</span>
                          <span className="text-[#C9A84C] 400 font-semibold">4% ($130/pay)</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-amber-500/40/30">
                          <span className="text-[#9E8F75] text-sm">Current Balance</span>
                          <span className="text-white font-semibold">$12,450</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">YTD Contributions</span>
                          <span className="text-white font-semibold">$5,070</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">Est. Annual Growth</span>
                          <span className="text-[#C9A84C] 400 font-semibold">+8.2%</span>
                        </div>
                      </div>
                    </div>

                    {/* FSA/HSA */}
                    <div className="bg-[#110F0B] from-REMOVED-600/20 to-emerald-600/20 rounded p-6 border border-[rgba(201,168,76,0.22)] 500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-[#C9A84C]/20 rounded-lg">
                          <DollarSign className="w-6 h-6 text-[#C9A84C] 400" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Flexible Spending Account</h4>
                          <p className="text-[#C9A84C] 300 text-sm">Healthcare FSA</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">Annual Election</span>
                          <span className="text-white font-semibold">$2,500</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">Per Paycheck</span>
                          <span className="text-white font-semibold">$96.15</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-[rgba(201,168,76,0.22)] 500/30">
                          <span className="text-[#9E8F75] text-sm">Available Balance</span>
                          <span className="text-[#C9A84C] 400 font-bold text-lg">$1,850</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">Used This Year</span>
                          <span className="text-white font-semibold">$650</span>
                        </div>
                      </div>
                      <button className="w-full mt-4 bg-[#C9A84C] hover:bg-[#110F0B] text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                        Submit Claim
                      </button>
                    </div>

                    {/* Life Insurance */}
                    <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border border-amber-500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-amber-500/20 rounded-lg">
                          <Umbrella className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Life Insurance</h4>
                          <p className="text-[#E8C060] text-sm">Basic + Supplemental</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">Basic Coverage</span>
                          <span className="text-white font-semibold">$50,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">Basic Premium</span>
                          <span className="text-[#C9A84C] 400 font-semibold">Employer Paid</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-amber-500/30">
                          <span className="text-[#9E8F75] text-sm">Supplemental Coverage</span>
                          <span className="text-white font-semibold">$100,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#9E8F75] text-sm">Supplemental Premium</span>
                          <span className="text-white font-semibold">$24/month</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-amber-500/30">
                          <span className="text-[#9E8F75] text-sm font-semibold">Total Coverage</span>
                          <span className="text-amber-400 font-bold text-lg">$150,000</span>
                        </div>
                      </div>
                    </div>

                    {/* PTO/Vacation */}
                    <div className="bg-[rgba(201,168,76,0.06)] rounded p-6 border border-[rgba(201,168,76,0.22)] md:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-[rgba(201,168,76,0.06)] rounded-lg">
                          <Gift className="w-6 h-6 text-[#9E8F75]" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Paid Time Off (PTO)</h4>
                          <p className="text-[#9E8F75] text-sm">Accrual Balance</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div>
                          <label className="text-[#9E8F75] text-sm block mb-2">Available Hours</label>
                          <p className="text-white font-bold text-2xl">87.5</p>
                          <p className="text-[#9E8F75] text-sm mt-1">≈ 10.9 days</p>
                        </div>
                        <div>
                          <label className="text-[#9E8F75] text-sm block mb-2">Used This Year</label>
                          <p className="text-white font-bold text-2xl">32.0</p>
                          <p className="text-[#9E8F75] text-sm mt-1">≈ 4 days</p>
                        </div>
                        <div>
                          <label className="text-[#9E8F75] text-sm block mb-2">Accrual Rate</label>
                          <p className="text-white font-bold text-2xl">6.67</p>
                          <p className="text-[#C9A84C] 400 text-sm mt-1">hours/pay period</p>
                        </div>
                        <div>
                          <label className="text-[#9E8F75] text-sm block mb-2">Max Balance</label>
                          <p className="text-white font-bold text-2xl">240</p>
                          <p className="text-[#9E8F75] text-sm mt-1">hours (30 days)</p>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-[rgba(201,168,76,0.06)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-semibold mb-1">Next Accrual</p>
                            <p className="text-[#9E8F75] text-sm">6.67 hours on January 15, 2026</p>
                          </div>
                          <button className="bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.15)] text-white px-6 py-2 rounded-lg font-semibold transition-all">
                            Request Time Off
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits Summary */}
                  <div className="mt-6 p-6 bg-[rgba(201,168,76,0.06)] rounded border border-amber-500/40/20">
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-amber-400" />
                      Total Benefits Value
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <label className="text-[#9E8F75] text-sm block mb-2">Your Annual Cost</label>
                        <p className="text-white font-bold text-2xl">$6,408</p>
                        <p className="text-[#9E8F75] text-sm mt-1">All deductions</p>
                      </div>
                      <div>
                        <label className="text-[#9E8F75] text-sm block mb-2">Employer Contribution</label>
                        <p className="text-[#C9A84C] 400 font-bold text-2xl">$9,880</p>
                        <p className="text-[#C9A84C] 300 text-sm mt-1">Company pays</p>
                      </div>
                      <div>
                        <label className="text-[#9E8F75] text-sm block mb-2">Total Package Value</label>
                        <p className="text-amber-400 font-bold text-2xl">$16,288</p>
                        <p className="text-[#9E8F75] text-sm mt-1">Per year</p>
                      </div>
                      <div>
                        <label className="text-[#9E8F75] text-sm block mb-2">Tax Savings</label>
                        <p className="text-amber-400 font-bold text-2xl">$1,923</p>
                        <p className="text-[#C9A84C] text-sm mt-1">Estimated annually</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-amber-500/40/20 flex items-center gap-2 text-sm text-[#9E8F75]">
                      <AlertCircle className="w-4 h-4 text-amber-400" />
                      <p>
                        Your benefits package is worth <span className="text-white font-semibold">$16,288/year</span> on top of your salary. 
                        Next open enrollment: <span className="text-amber-400 font-semibold">November 1, 2026</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Account Settings */}
                <div className="pt-6 border-t border-[rgba(201,168,76,0.22)]">
                  <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white px-6 py-3 rounded-lg font-semibold transition-all text-left">
                      Change Password
                    </button>
                    <button className="bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white px-6 py-3 rounded-lg font-semibold transition-all text-left">
                      Notification Preferences
                    </button>
                  </div>
                </div>

                {/* My Documents Section */}
                <div className="pt-6 border-t border-[rgba(201,168,76,0.22)]">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-400" />
                    My Documents
                  </h3>
                  
                  {/* Upload Status */}
                  {uploadStatus && (
                    <div className={`mb-4 p-4 rounded-lg flex items-center gap-2 ${
                      uploadStatus.type === 'success' 
                        ? 'bg-[#C9A84C]/20 text-[#C9A84C] 400 border border-[rgba(201,168,76,0.22)] 500/30' 
                        : 'bg-[#110F0B] 500/20 text-[#9E8F75] 400 border border-[rgba(201,168,76,0.22)] 500/30'
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
                      className="w-full border-2 border-dashed border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.45)] bg-[rgba(201,168,76,0.06)]/30 hover:bg-[rgba(201,168,76,0.06)]/50 rounded-lg p-8 transition-all group"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <Upload className="w-10 h-10 text-[#9E8F75] group-hover:text-amber-400 transition-colors" />
                        <div className="text-center">
                          <p className="text-white font-semibold mb-1">Upload Document</p>
                          <p className="text-sm text-[#9E8F75]">
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
                          className="bg-[rgba(201,168,76,0.06)]/30 border border-[rgba(201,168,76,0.22)] rounded-lg p-4 hover:bg-[rgba(201,168,76,0.06)]/50 transition-all"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3 flex-1 min-w-0">
                              <div className="text-2xl mt-1">{getFileIcon(doc.type)}</div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-white font-semibold truncate">{doc.name}</h4>
                                <p className="text-sm text-[#9E8F75] mt-1">
                                  {formatFileSize(doc.size)} • {doc.uploadDate}
                                </p>
                                <span className="inline-block mt-2 px-2 py-1 bg-amber-600/20 text-amber-400 text-xs rounded">
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
                                className="p-2 bg-amber-600/20 hover:bg-amber-600/30 text-amber-400 rounded-lg transition-all"
                                title="Download"
                              >
                                <Download className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteDocument(doc.id)}
                                className="p-2 bg-[#110F0B] 500/20 hover:bg-[#110F0B] 500/30 text-[#9E8F75] 400 rounded-lg transition-all"
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
                    <div className="text-center py-8 border border-dashed border-[rgba(201,168,76,0.22)] rounded-lg">
                      <FileText className="w-12 h-12 text-[#9E8F75] mx-auto mb-3" />
                      <p className="text-[#9E8F75]">No documents uploaded yet.</p>
                      <p className="text-sm text-[#9E8F75] mt-1">
                        Add your certifications, resume, or other important files.
                      </p>
                    </div>
                  )}
                </div>

                {/* Availability Calendar Section */}
                <div className="pt-6 border-t border-[rgba(201,168,76,0.22)]">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-amber-400" />
                    My Availability
                  </h3>
                  <p className="text-[#9E8F75] text-sm mb-4">
                    Mark dates or times when you're unavailable. Managers will be alerted if they try to schedule you during these times.
                  </p>

                  {/* Add Unavailable Button */}
                  {!showAddUnavailable && (
                    <button
                      onClick={() => setShowAddUnavailable(true)}
                      className="mb-4 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 px-4 py-2 rounded-lg transition-all flex items-center gap-2 border border-amber-500/40/30"
                    >
                      <Plus className="w-4 h-4" />
                      Mark Unavailable
                    </button>
                  )}

                  {/* Add Unavailable Form */}
                  {showAddUnavailable && (
                    <div className="mb-6 bg-[rgba(201,168,76,0.06)]/30 border border-[rgba(201,168,76,0.22)] rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-4">Mark Unavailable Time</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-[#9E8F75] mb-2">Date</label>
                          <input
                            type="date"
                            value={newUnavailable.date}
                            onChange={(e) => setNewUnavailable({ ...newUnavailable, date: e.target.value })}
                            className="w-full px-4 py-2 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-lg text-white focus:outline-none focus:border-amber-500/40"
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
                              <label className="block text-sm text-[#9E8F75] mb-2">Start Time</label>
                              <input
                                type="time"
                                value={newUnavailable.startTime}
                                onChange={(e) => setNewUnavailable({ ...newUnavailable, startTime: e.target.value })}
                                className="w-full px-4 py-2 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-lg text-white focus:outline-none focus:border-amber-500/40"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-[#9E8F75] mb-2">End Time</label>
                              <input
                                type="time"
                                value={newUnavailable.endTime}
                                onChange={(e) => setNewUnavailable({ ...newUnavailable, endTime: e.target.value })}
                                className="w-full px-4 py-2 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-lg text-white focus:outline-none focus:border-amber-500/40"
                              />
                            </div>
                          </div>
                        )}

                        <div>
                          <label className="block text-sm text-[#9E8F75] mb-2">Reason (Optional)</label>
                          <input
                            type="text"
                            value={newUnavailable.reason}
                            onChange={(e) => setNewUnavailable({ ...newUnavailable, reason: e.target.value })}
                            placeholder="e.g., Vacation, Appointment, Personal"
                            className="w-full px-4 py-2 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-amber-500/40"
                          />
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={handleAddUnavailable}
                            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-all font-semibold"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => {
                              setShowAddUnavailable(false);
                              setNewUnavailable({ date: '', startTime: '', endTime: '', reason: '', isAllDay: true });
                            }}
                            className="flex-1 bg-[rgba(201,168,76,0.08)] hover:bg-[rgba(201,168,76,0.08)] text-white px-4 py-2 rounded-lg transition-all font-semibold"
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
                            className="bg-[rgba(201,168,76,0.06)]/30 border border-[rgba(201,168,76,0.22)] rounded-lg p-4 hover:bg-[rgba(201,168,76,0.06)]/50 transition-all"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-start gap-3 flex-1">
                                <Ban className="w-5 h-5 text-[#9E8F75] 400 mt-1" />
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <p className="text-white font-semibold">
                                      {formatDateDisplay(unavailable.date)}
                                    </p>
                                    {!unavailable.isAllDay && (
                                      <span className="text-sm text-[#9E8F75]">
                                        {unavailable.startTime} - {unavailable.endTime}
                                      </span>
                                    )}
                                    {unavailable.isAllDay && (
                                      <span className="px-2 py-0.5 bg-[#110F0B] 500/20 text-[#9E8F75] 400 text-xs rounded">
                                        All Day
                                      </span>
                                    )}
                                  </div>
                                  {unavailable.reason && (
                                    <p className="text-sm text-[#9E8F75] mt-1">{unavailable.reason}</p>
                                  )}
                                </div>
                              </div>
                              <button
                                onClick={() => handleDeleteUnavailable(unavailable.id)}
                                className="p-2 bg-[#110F0B] 500/20 hover:bg-[#110F0B] 500/30 text-[#9E8F75] 400 rounded-lg transition-all"
                                title="Remove"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 border border-dashed border-[rgba(201,168,76,0.22)] rounded-lg">
                      <CalendarDays className="w-12 h-12 text-[#9E8F75] mx-auto mb-3" />
                      <p className="text-[#9E8F75]">No unavailable times marked.</p>
                      <p className="text-sm text-[#9E8F75] mt-1">
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



