'use client';

import { useState } from 'react';
import { BookOpen, Plus, Filter, Search, AlertTriangle, CheckCircle, Clock, Users, Package, Wrench, MessageSquare, Flag, TrendingUp, Shield } from 'lucide-react';

interface ShiftLog {
  id: string;
  timestamp: string;
  shift: string;
  department: string;
  businessType: string;
  loggedBy: string;
  category: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  title: string;
  description: string;
  actionRequired?: boolean;
  resolved?: boolean;
  resolvedBy?: string;
  resolvedTime?: string;
  // HIPAA-compliant patient identifiers (never use full names)
  patientIdentifier?: string; // e.g., "Pt. Initials: J.D." or "Room 302" or "MRN: ****1234"
  privacyLevel?: 'standard' | 'sensitive' | 'highly-sensitive';
  containsPHI?: boolean; // Protected Health Information flag
}

const businessTypes = {
  restaurant: {
    name: 'Restaurant / Food Service',
    icon: '🍽️',
    departments: ['Kitchen', 'Front of House', 'Bar', 'Management', 'Delivery'],
    categories: [
      { id: 'food-inventory', name: 'Food Inventory', icon: Package },
      { id: 'equipment', name: 'Equipment Issue', icon: Wrench },
      { id: 'customer', name: 'Customer Incident', icon: Users },
      { id: 'staff', name: 'Staff Note', icon: MessageSquare },
      { id: 'safety', name: 'Safety/Health', icon: AlertTriangle },
      { id: 'general', name: 'General Note', icon: BookOpen },
    ],
  },
  retail: {
    name: 'Retail / Store',
    icon: '🛍️',
    departments: ['Sales Floor', 'Stock Room', 'Customer Service', 'Cash Office', 'Management'],
    categories: [
      { id: 'inventory', name: 'Inventory', icon: Package },
      { id: 'equipment', name: 'Equipment', icon: Wrench },
      { id: 'customer', name: 'Customer Issue', icon: Users },
      { id: 'staff', name: 'Staff Note', icon: MessageSquare },
      { id: 'security', name: 'Security', icon: AlertTriangle },
      { id: 'general', name: 'General', icon: BookOpen },
    ],
  },
  healthcare: {
    name: 'Healthcare / Medical',
    icon: '🏥',
    departments: ['Nursing', 'Emergency', 'Admissions', 'Pharmacy', 'Lab', 'Administration'],
    categories: [
      { id: 'patient', name: 'Patient Update', icon: Users },
      { id: 'medication', name: 'Medication', icon: Package },
      { id: 'equipment', name: 'Equipment', icon: Wrench },
      { id: 'incident', name: 'Incident Report', icon: AlertTriangle },
      { id: 'staff', name: 'Staff Note', icon: MessageSquare },
      { id: 'general', name: 'General', icon: BookOpen },
    ],
  },
  hospital: {
    name: 'Hospital / Acute Care',
    icon: '🏥',
    departments: ['ICU', 'Emergency Department', 'Medical-Surgical', 'Pediatrics', 'Labor & Delivery', 'Operating Room', 'Radiology', 'Pharmacy', 'Nursing Station'],
    categories: [
      { id: 'patient-status', name: 'Patient Status Change', icon: Users },
      { id: 'medication-admin', name: 'Medication Administration', icon: Package },
      { id: 'lab-results', name: 'Lab/Test Results', icon: CheckCircle },
      { id: 'provider-orders', name: 'Provider Orders', icon: MessageSquare },
      { id: 'transfer', name: 'Transfer/Discharge', icon: TrendingUp },
      { id: 'incident', name: 'Safety Incident', icon: AlertTriangle },
      { id: 'equipment', name: 'Equipment Issue', icon: Wrench },
      { id: 'supply', name: 'Supply Need', icon: Package },
      { id: 'family', name: 'Family Communication', icon: Users },
      { id: 'general', name: 'General Note', icon: BookOpen },
    ],
  },
  behavioralHealth: {
    name: 'Behavioral Health',
    icon: '🧠',
    departments: ['Inpatient Unit', 'Crisis Stabilization', 'Detox', 'Partial Hospitalization', 'Therapy', 'Case Management', 'Admissions', 'Nursing'],
    categories: [
      { id: 'patient-behavior', name: 'Behavior/Mood Change', icon: Users },
      { id: 'safety-alert', name: 'Safety Alert', icon: AlertTriangle },
      { id: 'medication', name: 'Medication', icon: Package },
      { id: 'therapy-update', name: 'Therapy Update', icon: MessageSquare },
      { id: 'milieu', name: 'Milieu/Unit Activity', icon: Users },
      { id: 'precautions', name: 'Precautions/Obs Level', icon: Flag },
      { id: 'family-contact', name: 'Family Contact', icon: Users },
      { id: 'discharge-planning', name: 'Discharge Planning', icon: TrendingUp },
      { id: 'incident', name: 'Incident Report', icon: AlertTriangle },
      { id: 'general', name: 'General Note', icon: BookOpen },
    ],
  },
  hospitality: {
    name: 'Hotel / Hospitality',
    icon: '🏨',
    departments: ['Front Desk', 'Housekeeping', 'Maintenance', 'Concierge', 'Management'],
    categories: [
      { id: 'guest', name: 'Guest Issue', icon: Users },
      { id: 'rooms', name: 'Room Status', icon: Package },
      { id: 'maintenance', name: 'Maintenance', icon: Wrench },
      { id: 'staff', name: 'Staff Note', icon: MessageSquare },
      { id: 'security', name: 'Security', icon: AlertTriangle },
      { id: 'general', name: 'General', icon: BookOpen },
    ],
  },
  manufacturing: {
    name: 'Manufacturing / Production',
    icon: '🏭',
    departments: ['Production Floor', 'Quality Control', 'Maintenance', 'Shipping', 'Management'],
    categories: [
      { id: 'production', name: 'Production Update', icon: TrendingUp },
      { id: 'equipment', name: 'Equipment Status', icon: Wrench },
      { id: 'quality', name: 'Quality Issue', icon: CheckCircle },
      { id: 'safety', name: 'Safety Incident', icon: AlertTriangle },
      { id: 'inventory', name: 'Inventory', icon: Package },
      { id: 'general', name: 'General', icon: BookOpen },
    ],
  },
};

export default function ShiftLogsPage() {
  const [selectedBusinessType, setSelectedBusinessType] = useState<keyof typeof businessTypes>('restaurant');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [showResolved, setShowResolved] = useState(true);
  const [activeView, setActiveView] = useState<'logs' | 'handover' | 'add'>('logs');
  const [searchQuery, setSearchQuery] = useState('');

  const currentBusiness = businessTypes[selectedBusinessType];

  const sampleLogs: ShiftLog[] = [
    {
      id: '1',
      timestamp: '2:45 PM',
      shift: 'Day Shift',
      department: 'Kitchen',
      businessType: 'restaurant',
      loggedBy: 'Mike Johnson',
      category: 'equipment',
      priority: 'urgent',
      title: 'Walk-in Cooler Temperature Rising',
      description: 'Walk-in cooler temp is at 45°F and rising. Called repair service - they\'ll arrive within 2 hours. Moved perishables to backup cooler.',
      actionRequired: true,
      resolved: false,
    },
    {
      id: '2',
      timestamp: '1:30 PM',
      shift: 'Day Shift',
      department: 'Front of House',
      businessType: 'restaurant',
      loggedBy: 'Sarah Miller',
      category: 'customer',
      priority: 'medium',
      title: 'Customer Complaint - Wrong Order',
      description: 'Table 12 received wrong entree. Remade meal, comped dessert. Customer left satisfied. Manager approved comp.',
      actionRequired: false,
      resolved: true,
      resolvedBy: 'Sarah Miller',
      resolvedTime: '1:45 PM',
    },
    {
      id: '3',
      timestamp: '12:15 PM',
      shift: 'Day Shift',
      department: 'Kitchen',
      businessType: 'restaurant',
      loggedBy: 'Alex Thompson',
      category: 'food-inventory',
      priority: 'high',
      title: 'Low Stock Alert - Salmon',
      description: 'Only 8 portions of salmon left. Recommend 86\'ing after dinner rush unless emergency delivery possible. Ordered for tomorrow.',
      actionRequired: true,
      resolved: false,
    },
    {
      id: '4',
      timestamp: '11:00 AM',
      shift: 'Day Shift',
      department: 'Bar',
      businessType: 'restaurant',
      loggedBy: 'Emma Wilson',
      category: 'general',
      priority: 'low',
      title: 'New Wine Delivery Received',
      description: 'Received wine delivery - all items accounted for and stored. Updated inventory system. 3 bottles of Cabernet had damaged labels, set aside for manager review.',
      actionRequired: false,
      resolved: true,
      resolvedBy: 'Emma Wilson',
      resolvedTime: '11:30 AM',
    },
    {
      id: '5',
      timestamp: '10:30 AM',
      shift: 'Day Shift',
      department: 'Front of House',
      businessType: 'restaurant',
      loggedBy: 'Rachel Green',
      category: 'staff',
      priority: 'medium',
      title: 'Server Called Out - Coverage Arranged',
      description: 'Jessica called out sick for evening shift. Asked Maria to come in early at 4pm instead of 5pm. Adjusted section assignments.',
      actionRequired: false,
      resolved: true,
      resolvedBy: 'Rachel Green',
      resolvedTime: '10:45 AM',
    },
    {
      id: '6',
      timestamp: '9:45 AM',
      shift: 'Morning Shift',
      department: 'Kitchen',
      businessType: 'restaurant',
      loggedBy: 'Tom Hardy',
      category: 'safety',
      priority: 'high',
      title: 'Grease Spill - Floor Cleaned',
      description: 'Large grease spill near fryer station. Area immediately blocked off, spill cleaned with degreaser, floor dried. No injuries. Added extra caution signs.',
      actionRequired: false,
      resolved: true,
      resolvedBy: 'Tom Hardy',
      resolvedTime: '10:15 AM',
    },
    // Hospital Sample Logs
    {
      id: '7',
      timestamp: '3:15 PM',
      shift: 'Day Shift',
      department: 'ICU',
      businessType: 'hospital',
      loggedBy: 'RN Martinez',
      category: 'patient-status',
      priority: 'urgent',
      title: 'Room 412 - Vitals Change',
      description: 'Patient in Room 412 (Bed A) showing elevated BP 160/95, HR 115. Dr. Patel notified. New orders received: increase Metoprolol, recheck vitals q15min. Family contacted.',
      patientIdentifier: 'Room 412-A',
      containsPHI: true,
      privacyLevel: 'sensitive',
      actionRequired: true,
      resolved: false,
    },
    {
      id: '8',
      timestamp: '2:00 PM',
      shift: 'Day Shift',
      department: 'Emergency Department',
      businessType: 'hospital',
      loggedBy: 'RN Thompson',
      category: 'transfer',
      priority: 'high',
      title: 'Pt. M.R. - ICU Transfer Pending',
      description: 'MRN ending 5678. ICU bed assigned (Room 408). Awaiting transport. All transfer orders completed. Family notified of move. Portable monitor ready.',
      patientIdentifier: 'MRN: ****5678',
      containsPHI: true,
      privacyLevel: 'sensitive',
      actionRequired: true,
      resolved: false,
    },
    {
      id: '9',
      timestamp: '1:30 PM',
      shift: 'Day Shift',
      department: 'Medical-Surgical',
      businessType: 'hospital',
      loggedBy: 'RN Chen',
      category: 'medication-admin',
      priority: 'medium',
      title: 'Room 305 - Medication Clarification',
      description: 'Pt. in Room 305 has new antibiotic order. Pharmacy verified no interactions with current meds. First dose administered 1:30pm. Monitoring for reactions. Will reassess in 30 min.',
      patientIdentifier: 'Room 305',
      containsPHI: true,
      privacyLevel: 'standard',
      actionRequired: false,
      resolved: true,
      resolvedBy: 'RN Chen',
      resolvedTime: '2:00 PM',
    },
    // Behavioral Health Sample Logs
    {
      id: '10',
      timestamp: '4:30 PM',
      shift: 'Evening Shift',
      department: 'Inpatient Unit',
      businessType: 'behavioralHealth',
      loggedBy: 'MHT Williams',
      category: 'patient-behavior',
      priority: 'high',
      title: 'Pt. T.K. - Increased Agitation',
      description: 'Patient T.K. (Room 8) showing increased agitation at 4pm. Verbal de-escalation attempted. Redirected to quiet area. PRN medication offered - declined. Therapist notified. Currently calmer, watching TV in dayroom with staff nearby.',
      patientIdentifier: 'Pt. Initials: T.K.',
      containsPHI: true,
      privacyLevel: 'highly-sensitive',
      actionRequired: true,
      resolved: false,
    },
    {
      id: '11',
      timestamp: '3:45 PM',
      shift: 'Evening Shift',
      department: 'Crisis Stabilization',
      businessType: 'behavioralHealth',
      loggedBy: 'RN Adams',
      category: 'safety-alert',
      priority: 'urgent',
      title: 'Pt. S.L. - Safety Precautions Increased',
      description: 'Patient S.L. expressing increased SI. Observation level increased to 1:1. All sharps removed from room. Psychiatrist notified - bedside eval completed. Safety plan updated. Family contacted per release.',
      patientIdentifier: 'Pt. Initials: S.L.',
      containsPHI: true,
      privacyLevel: 'highly-sensitive',
      actionRequired: true,
      resolved: false,
    },
    {
      id: '12',
      timestamp: '2:15 PM',
      shift: 'Day Shift',
      department: 'Partial Hospitalization',
      businessType: 'behavioralHealth',
      loggedBy: 'Therapist Johnson',
      category: 'therapy-update',
      priority: 'medium',
      title: 'Group Therapy - Strong Participation',
      description: 'Afternoon CBT group had excellent participation. All 8 pts engaged. Pt. M.D. and Pt. R.W. shared coping strategies. Good peer support observed. Will continue same format tomorrow.',
      patientIdentifier: 'Group Session',
      containsPHI: true,
      privacyLevel: 'standard',
      actionRequired: false,
      resolved: true,
      resolvedBy: 'Therapist Johnson',
      resolvedTime: '3:30 PM',
    },
    {
      id: '13',
      timestamp: '1:00 PM',
      shift: 'Day Shift',
      department: 'Detox',
      businessType: 'behavioralHealth',
      loggedBy: 'RN Parker',
      category: 'medication',
      priority: 'high',
      title: 'Pt. A.B. - CIWA Protocol',
      description: 'Patient A.B. CIWA score 12 at 1pm. Administered PRN medication per protocol. VS stable. Pt resting comfortably. Will reassess in 2 hours. MD aware of scores trending up from morning.',
      patientIdentifier: 'Pt. Initials: A.B.',
      containsPHI: true,
      privacyLevel: 'sensitive',
      actionRequired: true,
      resolved: false,
    },
  ];

  const filteredLogs = sampleLogs.filter(log => {
    if (log.businessType !== selectedBusinessType) return false;
    if (selectedDepartment !== 'all' && log.department !== selectedDepartment) return false;
    if (selectedCategory !== 'all' && log.category !== selectedCategory) return false;
    if (selectedPriority !== 'all' && log.priority !== selectedPriority) return false;
    if (!showResolved && log.resolved) return false;
    if (searchQuery && !log.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !log.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const stats = {
    total: filteredLogs.length,
    urgent: filteredLogs.filter(l => l.priority === 'urgent').length,
    actionRequired: filteredLogs.filter(l => l.actionRequired && !l.resolved).length,
    resolved: filteredLogs.filter(l => l.resolved).length,
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = currentBusiness.categories.find(c => c.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--page-bg)', color: 'var(--body-text)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3" style={{ color: 'var(--header-text)' }}>
            <BookOpen className="h-10 w-10" style={{ color: 'var(--primary-color)' }} />
            Shift Logs
          </h1>
          <p className="text-lg opacity-80">
            Document important events, handover notes, and track action items across shifts 📋
          </p>
        </div>

        {/* Business Type Selector */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-3">Business Type</label>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {(Object.keys(businessTypes) as Array<keyof typeof businessTypes>).map(key => (
              <button
                key={key}
                onClick={() => {
                  setSelectedBusinessType(key);
                  setSelectedDepartment('all');
                }}
                className={`p-4 rounded-xl font-semibold transition-all ${
                  selectedBusinessType === key ? 'scale-105 shadow-lg' : 'opacity-60 hover:opacity-100'
                }`}
                style={{
                  background: selectedBusinessType === key ? 'var(--primary-btn)' : 'var(--card-bg)',
                  color: selectedBusinessType === key ? '#ffffff' : 'var(--body-text)',
                }}
              >
                <div className="text-3xl mb-2">{businessTypes[key].icon}</div>
                <div className="text-sm">{businessTypes[key].name.split(' / ')[0]}</div>
              </button>
            ))}
          </div>
        </div>

        {/* HIPAA Warning for Healthcare Settings */}
        {(selectedBusinessType === 'healthcare' || selectedBusinessType === 'hospital' || selectedBusinessType === 'behavioralHealth') && (
          <div className="mb-6 p-5 rounded-xl border-2 border-blue-500" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-500">HIPAA Compliance Guidelines</h3>
                <div className="space-y-2 text-sm opacity-90">
                  <p>✓ <strong>Use patient identifiers only:</strong> Room numbers, initials, or last 4 digits of MRN</p>
                  <p>✓ <strong>Never use full names:</strong> Protect patient privacy in all communications</p>
                  <p>✓ <strong>Minimum necessary:</strong> Include only information essential for care continuity</p>
                  <p>✓ <strong>Secure access:</strong> All logs are encrypted and access-controlled</p>
                  <p>✓ <strong>Audit trail:</strong> Every view and edit is logged for compliance</p>
                  <p className="text-yellow-500 font-semibold mt-3">⚠️ Reminder: Shift logs are part of the medical record and subject to HIPAA regulations</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="text-sm opacity-70 mb-1">Total Logs</div>
            <div className="text-3xl font-bold" style={{ color: 'var(--header-text)' }}>{stats.total}</div>
          </div>
          <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="text-sm opacity-70 mb-1">Urgent</div>
            <div className="text-3xl font-bold text-red-500">{stats.urgent}</div>
          </div>
          <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="text-sm opacity-70 mb-1">Action Required</div>
            <div className="text-3xl font-bold text-orange-500">{stats.actionRequired}</div>
          </div>
          <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="text-sm opacity-70 mb-1">Resolved Today</div>
            <div className="text-3xl font-bold text-green-500">{stats.resolved}</div>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveView('logs')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeView === 'logs' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeView === 'logs' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeView === 'logs' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <BookOpen className="h-5 w-5" />
            All Logs
          </button>
          <button
            onClick={() => setActiveView('handover')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeView === 'handover' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeView === 'handover' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeView === 'handover' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Users className="h-5 w-5" />
            Shift Handover
          </button>
          <button
            onClick={() => setActiveView('add')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeView === 'add' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeView === 'add' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeView === 'add' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Plus className="h-5 w-5" />
            New Log Entry
          </button>
        </div>

        {/* All Logs View */}
        {activeView === 'logs' && (
          <div>
            {/* Filters */}
            <div className="mb-6 p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
              <div className="flex items-center gap-3 mb-4">
                <Filter className="h-5 w-5" style={{ color: 'var(--primary-color)' }} />
                <h3 className="text-lg font-bold" style={{ color: 'var(--header-text)' }}>Filters</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Department</label>
                  <select 
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full p-3 rounded-lg"
                    style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}
                  >
                    <option value="all">All Departments</option>
                    {currentBusiness.departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-3 rounded-lg"
                    style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}
                  >
                    <option value="all">All Categories</option>
                    {currentBusiness.categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Priority</label>
                  <select 
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className="w-full p-3 rounded-lg"
                    style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}
                  >
                    <option value="all">All Priorities</option>
                    <option value="urgent">Urgent</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Status</label>
                  <button
                    onClick={() => setShowResolved(!showResolved)}
                    className="w-full p-3 rounded-lg font-semibold"
                    style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}
                  >
                    {showResolved ? '✓ Show All' : 'Hide Resolved'}
                  </button>
                </div>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-50" />
                <input
                  type="text"
                  placeholder="Search logs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 p-3 rounded-lg"
                  style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)' }}
                />
              </div>
            </div>

            {/* Logs List */}
            <div className="space-y-4">
              {filteredLogs.map(log => {
                const CategoryIcon = getCategoryIcon(log.category);
                return (
                  <div
                    key={log.id}
                    className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    style={{ background: 'var(--card-bg)' }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Priority Indicator */}
                      <div className={`w-1 h-full ${getPriorityColor(log.priority)} rounded-full`}></div>
                      
                      {/* Icon */}
                      <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
                        <CategoryIcon className="h-6 w-6" style={{ color: 'var(--primary-color)' }} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                              <h3 className="text-xl font-bold" style={{ color: 'var(--header-text)' }}>
                                {log.title}
                              </h3>
                              {log.containsPHI && (
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500 text-white flex items-center gap-1">
                                  <Shield className="h-3 w-3" />
                                  Contains PHI
                                </span>
                              )}
                              {log.privacyLevel === 'highly-sensitive' && (
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-600 text-white">
                                  🔒 Highly Sensitive
                                </span>
                              )}
                              {log.privacyLevel === 'sensitive' && (
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500 text-white">
                                  🔒 Sensitive
                                </span>
                              )}
                              {log.actionRequired && !log.resolved && (
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white flex items-center gap-1">
                                  <Flag className="h-3 w-3" />
                                  Action Required
                                </span>
                              )}
                              {log.resolved && (
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white flex items-center gap-1">
                                  <CheckCircle className="h-3 w-3" />
                                  Resolved
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-sm opacity-70 mb-3 flex-wrap">
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {log.timestamp} - {log.shift}
                              </span>
                              <span>•</span>
                              <span>{log.department}</span>
                              <span>•</span>
                              <span>👤 {log.loggedBy}</span>
                              {log.patientIdentifier && (
                                <>
                                  <span>•</span>
                                  <span className="font-semibold text-blue-500">{log.patientIdentifier}</span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getPriorityColor(log.priority)}`}>
                            {log.priority.toUpperCase()}
                          </div>
                        </div>

                        <p className="mb-3 opacity-90">{log.description}</p>

                        {log.resolved && log.resolvedBy && (
                          <div className="p-3 rounded-lg border-l-4 border-green-500 text-sm" style={{ background: 'var(--calendar-bg)' }}>
                            <span className="font-semibold">✓ Resolved by {log.resolvedBy}</span>
                            <span className="opacity-70"> at {log.resolvedTime}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {filteredLogs.length === 0 && (
                <div className="text-center py-16 opacity-60">
                  <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">No logs found matching your filters</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Handover View */}
        {activeView === 'handover' && (
          <div>
            <div className="mb-6 p-6 rounded-xl shadow-lg border-l-4 border-blue-500" style={{ background: 'var(--card-bg)' }}>
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
                Shift Handover Summary
              </h2>
              <p className="opacity-80">Key information for the incoming shift</p>
            </div>

            {/* Urgent & Action Required */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--header-text)' }}>
                <AlertTriangle className="h-6 w-6 text-red-500" />
                Urgent & Action Required
              </h3>
              <div className="space-y-4">
                {filteredLogs.filter(l => (l.priority === 'urgent' || l.actionRequired) && !l.resolved).map(log => {
                  const CategoryIcon = getCategoryIcon(log.category);
                  return (
                    <div
                      key={log.id}
                      className="p-6 rounded-xl shadow-lg border-l-4 border-red-500"
                      style={{ background: 'var(--card-bg)' }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <CategoryIcon className="h-5 w-5 text-red-500" />
                        <h4 className="text-lg font-bold" style={{ color: 'var(--header-text)' }}>{log.title}</h4>
                        <span className="px-2 py-1 rounded text-xs font-bold bg-red-500 text-white">
                          {log.priority.toUpperCase()}
                        </span>
                      </div>
                      <p className="mb-2">{log.description}</p>
                      <div className="text-sm opacity-70">
                        {log.department} • {log.timestamp} • {log.loggedBy}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Department Summaries */}
            {currentBusiness.departments.map(dept => {
              const deptLogs = filteredLogs.filter(l => l.department === dept);
              if (deptLogs.length === 0) return null;

              return (
                <div key={dept} className="mb-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
                    {dept} ({deptLogs.length} {deptLogs.length === 1 ? 'log' : 'logs'})
                  </h3>
                  <div className="grid gap-3">
                    {deptLogs.map(log => (
                      <div
                        key={log.id}
                        className="p-4 rounded-lg flex items-start gap-3"
                        style={{ background: 'var(--calendar-bg)' }}
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 ${getPriorityColor(log.priority)}`}></div>
                        <div className="flex-1">
                          <div className="font-semibold">{log.title}</div>
                          <div className="text-sm opacity-70">{log.description}</div>
                          <div className="text-xs opacity-60 mt-1">{log.timestamp}</div>
                        </div>
                        {log.resolved && <CheckCircle className="h-5 w-5 text-green-500" />}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Add Log View */}
        {activeView === 'add' && (
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl shadow-xl" style={{ background: 'var(--card-bg)' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--header-text)' }}>
                New Log Entry
              </h2>

              {/* HIPAA Reminder for Healthcare */}
              {(selectedBusinessType === 'healthcare' || selectedBusinessType === 'hospital' || selectedBusinessType === 'behavioralHealth') && (
                <div className="mb-6 p-4 rounded-lg border-2 border-yellow-500 bg-yellow-500/10">
                  <div className="flex items-center gap-2 text-yellow-500 font-bold mb-2">
                    <AlertTriangle className="h-5 w-5" />
                    HIPAA Reminder
                  </div>
                  <p className="text-sm">
                    Use only de-identified patient information: room numbers, initials, or last 4 of MRN. Never include full names, DOB, or other identifiers.
                  </p>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Department</label>
                    <select 
                      className="w-full p-4 rounded-xl"
                      style={{ background: 'var(--calendar-bg)', border: '2px solid var(--border-color)' }}
                    >
                      {currentBusiness.departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Shift</label>
                    <select 
                      className="w-full p-4 rounded-xl"
                      style={{ background: 'var(--calendar-bg)', border: '2px solid var(--border-color)' }}
                    >
                      <option>Morning Shift</option>
                      <option>Day Shift</option>
                      <option>Evening Shift</option>
                      <option>Night Shift</option>
                      <option>Closing Shift</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Category</label>
                    <select 
                      className="w-full p-4 rounded-xl"
                      style={{ background: 'var(--calendar-bg)', border: '2px solid var(--border-color)' }}
                    >
                      {currentBusiness.categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Priority</label>
                    <select 
                      className="w-full p-4 rounded-xl"
                      style={{ background: 'var(--calendar-bg)', border: '2px solid var(--border-color)' }}
                    >
                      <option value="low">🟢 Low</option>
                      <option value="medium">🟡 Medium</option>
                      <option value="high">🟠 High</option>
                      <option value="urgent">🔴 Urgent</option>
                    </select>
                  </div>
                </div>

                {/* Patient Identifier for Healthcare */}
                {(selectedBusinessType === 'healthcare' || selectedBusinessType === 'hospital' || selectedBusinessType === 'behavioralHealth') && (
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Patient Identifier (HIPAA-Compliant)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 'Room 305', 'Pt. Initials: J.D.', 'MRN: ****1234'"
                      className="w-full p-4 rounded-xl"
                      style={{ background: 'var(--calendar-bg)', border: '2px solid var(--border-color)' }}
                    />
                    <div className="text-xs opacity-60 mt-2">
                      ℹ️ Use room numbers, patient initials, or last 4 digits of MRN only
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Brief summary of the event..."
                    className="w-full p-4 rounded-xl"
                    style={{ background: 'var(--calendar-bg)', border: '2px solid var(--border-color)' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Description</label>
                  <textarea
                    rows={6}
                    placeholder="Detailed description of what happened, actions taken, and any follow-up needed..."
                    className="w-full p-4 rounded-xl"
                    style={{ background: 'var(--calendar-bg)', border: '2px solid var(--border-color)' }}
                  ></textarea>
                </div>

                {/* Privacy Level for Healthcare */}
                {(selectedBusinessType === 'healthcare' || selectedBusinessType === 'hospital' || selectedBusinessType === 'behavioralHealth') && (
                  <div>
                    <label className="block text-sm font-semibold mb-2">Privacy Level</label>
                    <select 
                      className="w-full p-4 rounded-xl"
                      style={{ background: 'var(--calendar-bg)', border: '2px solid var(--border-color)' }}
                    >
                      <option value="standard">🔓 Standard - Routine care information</option>
                      <option value="sensitive">🔒 Sensitive - Protected details</option>
                      <option value="highly-sensitive">🔒🔒 Highly Sensitive - Mental health, substance use, HIV/AIDS</option>
                    </select>
                  </div>
                )}

                <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'var(--calendar-bg)' }}>
                  <input
                    type="checkbox"
                    id="actionRequired"
                    className="w-5 h-5 rounded"
                  />
                  <label htmlFor="actionRequired" className="flex-1 cursor-pointer">
                    <div className="font-semibold flex items-center gap-2">
                      <Flag className="h-4 w-4" />
                      Action Required
                    </div>
                    <div className="text-sm opacity-70">
                      Flag this log entry as requiring follow-up action
                    </div>
                  </label>
                </div>

                {(selectedBusinessType === 'healthcare' || selectedBusinessType === 'hospital' || selectedBusinessType === 'behavioralHealth') && (
                  <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'var(--calendar-bg)' }}>
                    <input
                      type="checkbox"
                      id="containsPHI"
                      className="w-5 h-5 rounded"
                    />
                    <label htmlFor="containsPHI" className="flex-1 cursor-pointer">
                      <div className="font-semibold flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Contains Protected Health Information (PHI)
                      </div>
                      <div className="text-sm opacity-70">
                        Check if this log contains any patient-specific health information
                      </div>
                    </label>
                  </div>
                )}

                <button
                  className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                  style={{ background: 'var(--primary-btn)' }}
                >
                  <Plus className="h-5 w-5" />
                  Create Log Entry
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
