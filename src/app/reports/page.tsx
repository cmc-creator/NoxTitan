'use client';

import { useState } from 'react';
import { 
  FileText, 
  Download, 
  Filter, 
  Calendar,
  Users,
  TrendingUp,
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle,
  Timer,
  BarChart3,
  PieChart,
  FileSpreadsheet,
  FileDown,
  Search,
  ChevronDown,
  Activity,
  Briefcase,
  Heart
} from 'lucide-react';

interface AbsenteeismRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  date: string;
  type: 'PTO' | 'SICK' | 'UNPAID' | 'FMLA' | 'BEREAVEMENT' | 'JURY_DUTY';
  hours: number;
  status: 'PENDING' | 'APPROVED' | 'DENIED' | 'NO_RESPONSE';
  requestedDate: string;
  approvedBy?: string;
  approvedDate?: string;
  deniedReason?: string;
  responseTime?: number; // hours until response
  notes?: string;
}

interface EmployeeStats {
  employeeId: string;
  employeeName: string;
  department: string;
  totalPTO: number;
  totalSick: number;
  totalUnpaid: number;
  totalAbsences: number;
  absenceRate: number; // percentage
  averageRequestsPerMonth: number;
  pendingRequests: number;
  lastAbsenceDate: string;
  pattern?: 'frequent' | 'normal' | 'rare';
}

export default function ReportsPage() {
  const [dateFrom, setDateFrom] = useState('2025-01-01');
  const [dateTo, setDateTo] = useState('2026-01-06');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [employeeSearch, setEmployeeSearch] = useState('');
  const [reportType, setReportType] = useState<'absenteeism' | 'pto' | 'sick' | 'approvals'>('absenteeism');

  // Mock data - would come from database
  const absenteeismData: AbsenteeismRecord[] = [
    {
      id: '1',
      employeeId: 'E001',
      employeeName: 'John Doe',
      department: 'Nursing',
      date: '2025-12-15',
      type: 'PTO',
      hours: 8,
      status: 'APPROVED',
      requestedDate: '2025-12-01',
      approvedBy: 'Sarah Chen',
      approvedDate: '2025-12-02',
      responseTime: 24
    },
    {
      id: '2',
      employeeId: 'E002',
      employeeName: 'Jane Smith',
      department: 'Emergency',
      date: '2025-12-18',
      type: 'SICK',
      hours: 8,
      status: 'APPROVED',
      requestedDate: '2025-12-17',
      approvedBy: 'Sarah Chen',
      approvedDate: '2025-12-17',
      responseTime: 4
    },
    {
      id: '3',
      employeeId: 'E003',
      employeeName: 'Mike Johnson',
      department: 'Radiology',
      date: '2026-01-10',
      type: 'PTO',
      hours: 16,
      status: 'PENDING',
      requestedDate: '2025-12-20',
      responseTime: 0
    },
    {
      id: '4',
      employeeId: 'E004',
      employeeName: 'Sarah Williams',
      department: 'Laboratory',
      date: '2025-11-22',
      type: 'SICK',
      hours: 4,
      status: 'NO_RESPONSE',
      requestedDate: '2025-11-20',
      responseTime: 168, // 7 days
      notes: 'Manager on vacation during request period'
    },
    {
      id: '5',
      employeeId: 'E005',
      employeeName: 'David Brown',
      department: 'Emergency',
      date: '2025-12-01',
      type: 'FMLA',
      hours: 40,
      status: 'APPROVED',
      requestedDate: '2025-11-15',
      approvedBy: 'HR Director',
      approvedDate: '2025-11-17',
      responseTime: 48
    },
    {
      id: '6',
      employeeId: 'E006',
      employeeName: 'Emily Davis',
      department: 'Nursing',
      date: '2025-12-10',
      type: 'BEREAVEMENT',
      hours: 24,
      status: 'APPROVED',
      requestedDate: '2025-12-08',
      approvedBy: 'Sarah Chen',
      approvedDate: '2025-12-08',
      responseTime: 2
    },
    {
      id: '7',
      employeeId: 'E001',
      employeeName: 'John Doe',
      department: 'Nursing',
      date: '2025-11-05',
      type: 'SICK',
      hours: 8,
      status: 'APPROVED',
      requestedDate: '2025-11-04',
      approvedBy: 'Sarah Chen',
      approvedDate: '2025-11-04',
      responseTime: 3
    },
    {
      id: '8',
      employeeId: 'E007',
      employeeName: 'Chris Wilson',
      department: 'Administration',
      date: '2025-12-24',
      type: 'PTO',
      hours: 8,
      status: 'DENIED',
      requestedDate: '2025-12-10',
      deniedReason: 'Coverage shortage during holiday week',
      responseTime: 24
    },
    {
      id: '9',
      employeeId: 'E002',
      employeeName: 'Jane Smith',
      department: 'Emergency',
      date: '2025-10-15',
      type: 'SICK',
      hours: 8,
      status: 'APPROVED',
      requestedDate: '2025-10-14',
      approvedBy: 'Sarah Chen',
      approvedDate: '2025-10-14',
      responseTime: 5
    },
    {
      id: '10',
      employeeId: 'E002',
      employeeName: 'Jane Smith',
      department: 'Emergency',
      date: '2025-09-22',
      type: 'SICK',
      hours: 8,
      status: 'APPROVED',
      requestedDate: '2025-09-21',
      approvedBy: 'Sarah Chen',
      approvedDate: '2025-09-21',
      responseTime: 6
    },
  ];

  // Employee statistics
  const employeeStats: EmployeeStats[] = [
    {
      employeeId: 'E001',
      employeeName: 'John Doe',
      department: 'Nursing',
      totalPTO: 8,
      totalSick: 8,
      totalUnpaid: 0,
      totalAbsences: 16,
      absenceRate: 3.2,
      averageRequestsPerMonth: 0.5,
      pendingRequests: 0,
      lastAbsenceDate: '2025-12-15',
      pattern: 'normal'
    },
    {
      employeeId: 'E002',
      employeeName: 'Jane Smith',
      department: 'Emergency',
      totalPTO: 0,
      totalSick: 24,
      totalUnpaid: 0,
      totalAbsences: 24,
      absenceRate: 4.8,
      averageRequestsPerMonth: 0.75,
      pendingRequests: 0,
      lastAbsenceDate: '2025-12-18',
      pattern: 'frequent'
    },
    {
      employeeId: 'E003',
      employeeName: 'Mike Johnson',
      department: 'Radiology',
      totalPTO: 16,
      totalSick: 0,
      totalUnpaid: 0,
      totalAbsences: 16,
      absenceRate: 3.2,
      averageRequestsPerMonth: 0.25,
      pendingRequests: 1,
      lastAbsenceDate: 'N/A',
      pattern: 'normal'
    },
  ];

  // Filtering logic
  const filteredData = absenteeismData.filter(record => {
    const matchesDepartment = departmentFilter === 'all' || record.department === departmentFilter;
    const matchesType = typeFilter === 'all' || record.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || record.status === statusFilter;
    const matchesEmployee = employeeSearch === '' || 
      record.employeeName.toLowerCase().includes(employeeSearch.toLowerCase()) ||
      record.employeeId.toLowerCase().includes(employeeSearch.toLowerCase());
    
    return matchesDepartment && matchesType && matchesStatus && matchesEmployee;
  });

  // Analytics calculations
  const totalRecords = filteredData.length;
  const totalHours = filteredData.reduce((sum, r) => sum + r.hours, 0);
  const pendingCount = filteredData.filter(r => r.status === 'PENDING').length;
  const noResponseCount = filteredData.filter(r => r.status === 'NO_RESPONSE').length;
  const approvedCount = filteredData.filter(r => r.status === 'APPROVED').length;
  const deniedCount = filteredData.filter(r => r.status === 'DENIED').length;
  const avgResponseTime = filteredData
    .filter(r => r.responseTime && r.responseTime > 0)
    .reduce((sum, r) => sum + (r.responseTime || 0), 0) / 
    Math.max(1, filteredData.filter(r => r.responseTime && r.responseTime > 0).length);

  // Type breakdown
  const ptoHours = filteredData.filter(r => r.type === 'PTO').reduce((sum, r) => sum + r.hours, 0);
  const sickHours = filteredData.filter(r => r.type === 'SICK').reduce((sum, r) => sum + r.hours, 0);
  const unpaidHours = filteredData.filter(r => r.type === 'UNPAID').reduce((sum, r) => sum + r.hours, 0);
  const fmlaHours = filteredData.filter(r => r.type === 'FMLA').reduce((sum, r) => sum + r.hours, 0);

  // Export functions
  const exportToPDF = () => {
    alert('PDF export would generate a comprehensive report with all filtered data, charts, and statistics.');
  };

  const exportToExcel = () => {
    alert('Excel export would create a spreadsheet with all filtered records in a tabular format.');
  };

  const exportToCSV = () => {
    const headers = ['Employee ID', 'Employee Name', 'Department', 'Date', 'Type', 'Hours', 'Status', 'Requested Date', 'Approved By', 'Response Time (hrs)', 'Notes'];
    const rows = filteredData.map(r => [
      r.employeeId,
      r.employeeName,
      r.department,
      r.date,
      r.type,
      r.hours,
      r.status,
      r.requestedDate,
      r.approvedBy || '',
      r.responseTime || '',
      r.notes || ''
    ]);
    
    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `absenteeism-report-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'APPROVED': return 'text-green-600 bg-green-100';
      case 'DENIED': return 'text-red-600 bg-red-100';
      case 'PENDING': return 'text-yellow-600 bg-yellow-100';
      case 'NO_RESPONSE': return 'text-orange-600 bg-orange-100';
      default: return 'text-stone-500 bg-stone-900';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PTO': return 'text-amber-400 bg-amber-900/30';
      case 'SICK': return 'text-red-600 bg-red-100';
      case 'FMLA': return 'text-amber-600 bg-purple-100';
      case 'BEREAVEMENT': return 'text-stone-500 bg-stone-900';
      case 'JURY_DUTY': return 'text-amber-400 bg-indigo-100';
      case 'UNPAID': return 'text-orange-600 bg-orange-100';
      default: return 'text-stone-500 bg-stone-900';
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-100 mb-2">Reports & Analytics</h1>
        <p className="text-stone-500">Comprehensive absenteeism, PTO, sick leave tracking, and approval analytics</p>
      </div>

      {/* Report Type Selector */}
      <div className="mb-6 flex gap-3">
        <button
          onClick={() => setReportType('absenteeism')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            reportType === 'absenteeism'
              ? 'bg-amber-600 text-white shadow-lg'
              : 'bg-stone-950 text-stone-300 border border-stone-700 hover:bg-stone-950'
          }`}
        >
          <BarChart3 className="w-5 h-5 inline mr-2" />
          Absenteeism Overview
        </button>
        <button
          onClick={() => setReportType('pto')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            reportType === 'pto'
              ? 'bg-amber-600 text-white shadow-lg'
              : 'bg-stone-950 text-stone-300 border border-stone-700 hover:bg-stone-950'
          }`}
        >
          <Calendar className="w-5 h-5 inline mr-2" />
          PTO Analysis
        </button>
        <button
          onClick={() => setReportType('sick')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            reportType === 'sick'
              ? 'bg-amber-600 text-white shadow-lg'
              : 'bg-stone-950 text-stone-300 border border-stone-700 hover:bg-stone-950'
          }`}
        >
          <Heart className="w-5 h-5 inline mr-2" />
          Sick Leave Patterns
        </button>
        <button
          onClick={() => setReportType('approvals')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            reportType === 'approvals'
              ? 'bg-amber-600 text-white shadow-lg'
              : 'bg-stone-950 text-stone-300 border border-stone-700 hover:bg-stone-950'
          }`}
        >
          <CheckCircle className="w-5 h-5 inline mr-2" />
          Approval Tracking
        </button>
      </div>

      {/* Filters Section */}
      <div className="bg-stone-950 rounded-xl shadow-md border border-stone-800 p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-amber-400" />
          <h2 className="text-lg font-bold text-stone-100">Filters</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Date Range */}
          <div>
            <label className="block text-sm font-medium text-stone-300 mb-2">From Date</label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="w-full px-3 py-2 border border-stone-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-300 mb-2">To Date</label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full px-3 py-2 border border-stone-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          {/* Department Filter */}
          <div>
            <label className="block text-sm font-medium text-stone-300 mb-2">Department</label>
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="w-full px-3 py-2 border border-stone-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="all">All Departments</option>
              <option value="Nursing">Nursing</option>
              <option value="Emergency">Emergency</option>
              <option value="Radiology">Radiology</option>
              <option value="Laboratory">Laboratory</option>
              <option value="Administration">Administration</option>
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-stone-300 mb-2">Type</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full px-3 py-2 border border-stone-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="PTO">PTO</option>
              <option value="SICK">Sick Leave</option>
              <option value="UNPAID">Unpaid</option>
              <option value="FMLA">FMLA</option>
              <option value="BEREAVEMENT">Bereavement</option>
              <option value="JURY_DUTY">Jury Duty</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-stone-300 mb-2">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-stone-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="PENDING">Pending</option>
              <option value="APPROVED">Approved</option>
              <option value="DENIED">Denied</option>
              <option value="NO_RESPONSE">No Response</option>
            </select>
          </div>
        </div>

        {/* Employee Search */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-stone-300 mb-2">Search Employee</label>
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-stone-400" />
            <input
              type="text"
              value={employeeSearch}
              onChange={(e) => setEmployeeSearch(e.target.value)}
              placeholder="Search by name or employee ID..."
              className="w-full pl-10 pr-4 py-2 border border-stone-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Export Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={exportToPDF}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all flex items-center gap-2"
          >
            <FileDown className="w-4 h-4" />
            Export PDF
          </button>
          <button
            onClick={exportToExcel}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all flex items-center gap-2"
          >
            <FileSpreadsheet className="w-4 h-4" />
            Export Excel
          </button>
          <button
            onClick={exportToCSV}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-stone-950 p-6 rounded-xl shadow-md border border-stone-800">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-amber-900/30 rounded-lg">
              <FileText className="w-6 h-6 text-amber-400" />
            </div>
            <TrendingUp className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-sm font-medium text-stone-500 mb-1">Total Records</h3>
          <p className="text-3xl font-bold text-stone-100">{totalRecords}</p>
          <p className="text-xs text-stone-500 mt-1">{totalHours} total hours</p>
        </div>

        <div className="bg-stone-950 p-6 rounded-xl shadow-md border border-stone-800">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
          </div>
          <h3 className="text-sm font-medium text-stone-500 mb-1">Pending Approvals</h3>
          <p className="text-3xl font-bold text-stone-100">{pendingCount}</p>
          <p className="text-xs text-stone-500 mt-1">Awaiting response</p>
        </div>

        <div className="bg-stone-950 p-6 rounded-xl shadow-md border border-stone-800">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Timer className="w-6 h-6 text-orange-600" />
            </div>
            <AlertTriangle className="w-5 h-5 text-orange-600" />
          </div>
          <h3 className="text-sm font-medium text-stone-500 mb-1">No Response</h3>
          <p className="text-3xl font-bold text-stone-100">{noResponseCount}</p>
          <p className="text-xs text-stone-500 mt-1">Overdue requests</p>
        </div>

        <div className="bg-stone-950 p-6 rounded-xl shadow-md border border-stone-800">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Activity className="w-6 h-6 text-amber-600" />
            </div>
            <TrendingUp className="w-5 h-5 text-amber-600" />
          </div>
          <h3 className="text-sm font-medium text-stone-500 mb-1">Avg Response Time</h3>
          <p className="text-3xl font-bold text-stone-100">{avgResponseTime.toFixed(1)}h</p>
          <p className="text-xs text-stone-500 mt-1">Hours to approval</p>
        </div>
      </div>

      {/* Approval Status Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-stone-950 p-6 rounded-xl shadow-md border border-stone-800">
          <h2 className="text-xl font-bold text-stone-100 mb-4 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-amber-400" />
            Approval Status Breakdown
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm font-medium text-stone-300">Approved</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 w-48 h-2 bg-stone-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500"
                    style={{ width: `${totalRecords > 0 ? (approvedCount / totalRecords) * 100 : 0}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-stone-100 w-20 text-right">
                  {approvedCount} ({totalRecords > 0 ? ((approvedCount / totalRecords) * 100).toFixed(0) : 0}%)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span className="text-sm font-medium text-stone-300">Pending</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 w-48 h-2 bg-stone-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-500"
                    style={{ width: `${totalRecords > 0 ? (pendingCount / totalRecords) * 100 : 0}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-stone-100 w-20 text-right">
                  {pendingCount} ({totalRecords > 0 ? ((pendingCount / totalRecords) * 100).toFixed(0) : 0}%)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-sm font-medium text-stone-300">Denied</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 w-48 h-2 bg-stone-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-500"
                    style={{ width: `${totalRecords > 0 ? (deniedCount / totalRecords) * 100 : 0}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-stone-100 w-20 text-right">
                  {deniedCount} ({totalRecords > 0 ? ((deniedCount / totalRecords) * 100).toFixed(0) : 0}%)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-sm font-medium text-stone-300">No Response</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 w-48 h-2 bg-stone-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-orange-500"
                    style={{ width: `${totalRecords > 0 ? (noResponseCount / totalRecords) * 100 : 0}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-stone-100 w-20 text-right">
                  {noResponseCount} ({totalRecords > 0 ? ((noResponseCount / totalRecords) * 100).toFixed(0) : 0}%)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-950 p-6 rounded-xl shadow-md border border-stone-800">
          <h2 className="text-xl font-bold text-stone-100 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-amber-600" />
            Time-Off Type Distribution
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-amber-600 rounded"></div>
                <span className="text-sm font-medium text-stone-300">PTO</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 w-48 h-2 bg-stone-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-600"
                    style={{ width: `${totalHours > 0 ? (ptoHours / totalHours) * 100 : 0}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-stone-100 w-20 text-right">
                  {ptoHours}h ({totalHours > 0 ? ((ptoHours / totalHours) * 100).toFixed(0) : 0}%)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-sm font-medium text-stone-300">Sick Leave</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 w-48 h-2 bg-stone-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-500"
                    style={{ width: `${totalHours > 0 ? (sickHours / totalHours) * 100 : 0}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-stone-100 w-20 text-right">
                  {sickHours}h ({totalHours > 0 ? ((sickHours / totalHours) * 100).toFixed(0) : 0}%)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-amber-500 rounded"></div>
                <span className="text-sm font-medium text-stone-300">FMLA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 w-48 h-2 bg-stone-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500"
                    style={{ width: `${totalHours > 0 ? (fmlaHours / totalHours) * 100 : 0}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-stone-100 w-20 text-right">
                  {fmlaHours}h ({totalHours > 0 ? ((fmlaHours / totalHours) * 100).toFixed(0) : 0}%)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-sm font-medium text-stone-300">Unpaid</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 w-48 h-2 bg-stone-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-orange-500"
                    style={{ width: `${totalHours > 0 ? (unpaidHours / totalHours) * 100 : 0}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-stone-100 w-20 text-right">
                  {unpaidHours}h ({totalHours > 0 ? ((unpaidHours / totalHours) * 100).toFixed(0) : 0}%)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Absenteeism Patterns */}
      {reportType === 'absenteeism' && (
        <div className="bg-stone-950 p-6 rounded-xl shadow-md border border-stone-800 mb-8">
          <h2 className="text-xl font-bold text-stone-100 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-400" />
            Employee Absenteeism Patterns
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stone-800">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-stone-300">Employee</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-stone-300">Department</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-stone-300">PTO Hours</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-stone-300">Sick Hours</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-stone-300">Total Absences</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-stone-300">Absence Rate</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-stone-300">Avg/Month</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-stone-300">Pattern</th>
                </tr>
              </thead>
              <tbody>
                {employeeStats.map((emp, index) => (
                  <tr key={index} className="border-b border-stone-800 hover:bg-stone-950">
                    <td className="py-4 px-4">
                      <div className="font-medium text-stone-100">{emp.employeeName}</div>
                      <div className="text-xs text-stone-500">{emp.employeeId}</div>
                    </td>
                    <td className="py-4 px-4 text-stone-300">{emp.department}</td>
                    <td className="text-right py-4 px-4 text-stone-300">{emp.totalPTO}h</td>
                    <td className="text-right py-4 px-4 text-stone-300">{emp.totalSick}h</td>
                    <td className="text-right py-4 px-4 font-semibold text-stone-100">{emp.totalAbsences}h</td>
                    <td className="text-right py-4 px-4">
                      <span className={`font-medium ${
                        emp.absenceRate > 5 ? 'text-red-600' :
                        emp.absenceRate > 3 ? 'text-yellow-600' :
                        'text-green-600'
                      }`}>
                        {emp.absenceRate.toFixed(1)}%
                      </span>
                    </td>
                    <td className="text-right py-4 px-4 text-stone-300">{emp.averageRequestsPerMonth.toFixed(1)}</td>
                    <td className="text-center py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        emp.pattern === 'frequent' ? 'bg-red-100 text-red-700' :
                        emp.pattern === 'normal' ? 'bg-amber-900/30 text-amber-300' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {emp.pattern?.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detailed Records Table */}
      <div className="bg-stone-950 p-6 rounded-xl shadow-md border border-stone-800">
        <h2 className="text-xl font-bold text-stone-100 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-stone-500" />
          Detailed Records ({filteredData.length})
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stone-800">
                <th className="text-left py-3 px-4 text-sm font-semibold text-stone-300">Employee</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-stone-300">Department</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-stone-300">Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-stone-300">Type</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-stone-300">Hours</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-stone-300">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-stone-300">Requested</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-stone-300">Approved By</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-stone-300">Response Time</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-stone-300">Notes</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((record) => (
                <tr key={record.id} className="border-b border-stone-800 hover:bg-stone-950">
                  <td className="py-4 px-4">
                    <div className="font-medium text-stone-100">{record.employeeName}</div>
                    <div className="text-xs text-stone-500">{record.employeeId}</div>
                  </td>
                  <td className="py-4 px-4 text-stone-300">{record.department}</td>
                  <td className="py-4 px-4 text-stone-300">
                    {new Date(record.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(record.type)}`}>
                      {record.type}
                    </span>
                  </td>
                  <td className="text-right py-4 px-4 font-semibold text-stone-100">{record.hours}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                      {record.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-stone-300">
                    {new Date(record.requestedDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </td>
                  <td className="py-4 px-4 text-sm text-stone-300">{record.approvedBy || '—'}</td>
                  <td className="text-right py-4 px-4 text-sm">
                    {record.responseTime ? (
                      <span className={`font-medium ${
                        record.responseTime > 48 ? 'text-red-600' :
                        record.responseTime > 24 ? 'text-yellow-600' :
                        'text-green-600'
                      }`}>
                        {record.responseTime}h
                      </span>
                    ) : (
                      <span className="text-stone-400">—</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-xs text-stone-500 max-w-xs truncate">
                    {record.notes || record.deniedReason || '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <AlertTriangle className="w-12 h-12 text-stone-400 mx-auto mb-4" />
              <p className="text-stone-500 font-medium">No records found</p>
              <p className="text-sm text-stone-500 mt-1">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Alerts for Action Required */}
      {noResponseCount > 0 && (
        <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-stone-100 mb-2">Action Required: Overdue Approvals</h3>
              <p className="text-sm text-stone-300 mb-3">
                There are <strong>{noResponseCount}</strong> time-off requests with no response. These requests may be
                overdue and require immediate attention to avoid compliance issues and employee dissatisfaction.
              </p>
              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-all">
                Review Overdue Requests
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



