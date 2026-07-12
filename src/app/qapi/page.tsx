'use client';

import { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle, 
  XCircle,
  Clock,
  FileText,
  BarChart3,
  Target,
  Users,
  Activity,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  AlertCircle,
  Award,
  RefreshCw,
  Calendar,
  Bell,
  Zap,
  ThumbsUp,
  ThumbsDown,
  ArrowRight,
  Info,
  Upload,
  Link,
  Table,
  FileSpreadsheet,
  Key
} from 'lucide-react';

interface Incident {
  id: string;
  date: string;
  type: 'FALL' | 'MEDICATION_ERROR' | 'PRESSURE_ULCER' | 'INFECTION' | 'EQUIPMENT' | 'OTHER';
  severity: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';
  status: 'REPORTED' | 'INVESTIGATING' | 'ACTION_PLAN' | 'RESOLVED';
  department: string;
  description: string;
  reportedBy: string;
  assignedTo?: string;
  rootCause?: string;
  correctiveAction?: string;
  dueDate?: string;
}

interface QualityMetric {
  id: string;
  name: string;
  category: 'CLINICAL' | 'SAFETY' | 'SATISFACTION' | 'OPERATIONAL';
  currentValue: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
  benchmark?: number;
}

interface PerformanceImprovementProject {
  id: string;
  title: string;
  status: 'PLANNING' | 'IMPLEMENTING' | 'MONITORING' | 'COMPLETED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  startDate: string;
  targetDate: string;
  completionDate?: string;
  owner: string;
  goal: string;
  baseline: number;
  target: number;
  current: number;
  milestones: { title: string; completed: boolean; dueDate: string }[];
}

interface RiskAssessment {
  id: string;
  riskArea: string;
  description: string;
  likelihood: 1 | 2 | 3 | 4 | 5;
  impact: 1 | 2 | 3 | 4 | 5;
  riskScore: number;
  mitigationPlan: string;
  owner: string;
  reviewDate: string;
  status: 'ACTIVE' | 'MITIGATED' | 'MONITORING';
}

export default function QAPIPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'incidents' | 'metrics' | 'projects' | 'risks' | 'audits' | 'reports' | 'import'>('dashboard');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReportType, setSelectedReportType] = useState('executive');
  const [reportDateRange, setReportDateRange] = useState('last-month');
  const [importType, setImportType] = useState<'file' | 'integration' | 'manual'>('file');
  const [selectedFileType, setSelectedFileType] = useState('csv');

  // Mock Data - Incidents
  const incidents: Incident[] = [
    {
      id: 'INC-001',
      date: '2026-01-05',
      type: 'FALL',
      severity: 'MODERATE',
      status: 'INVESTIGATING',
      department: 'Nursing - 3rd Floor',
      description: 'Patient fell while attempting to use restroom unassisted',
      reportedBy: 'Jane Smith, RN',
      assignedTo: 'Quality Team',
      dueDate: '2026-01-12'
    },
    {
      id: 'INC-002',
      date: '2026-01-04',
      type: 'MEDICATION_ERROR',
      severity: 'HIGH',
      status: 'ACTION_PLAN',
      department: 'Emergency',
      description: 'Wrong dosage administered - caught before patient harm',
      reportedBy: 'Michael Chen, PharmD',
      assignedTo: 'Dr. Sarah Williams',
      rootCause: 'Similar medication names, insufficient double-check process',
      correctiveAction: 'Implement barcode scanning for all medications',
      dueDate: '2026-01-15'
    },
    {
      id: 'INC-003',
      date: '2026-01-03',
      type: 'INFECTION',
      severity: 'MODERATE',
      status: 'RESOLVED',
      department: 'ICU',
      description: 'Hospital-acquired infection (HAI) - catheter-associated UTI',
      reportedBy: 'Lisa Johnson, Infection Control',
      assignedTo: 'Infection Control Team',
      rootCause: 'Catheter left in place longer than protocol',
      correctiveAction: 'Daily catheter necessity review implemented'
    },
    {
      id: 'INC-004',
      date: '2026-01-02',
      type: 'PRESSURE_ULCER',
      severity: 'MODERATE',
      status: 'ACTION_PLAN',
      department: 'Medical-Surgical',
      description: 'Stage 2 pressure ulcer developed during hospital stay',
      reportedBy: 'Nancy Davis, WOCN',
      assignedTo: 'Wound Care Team',
      rootCause: 'Inadequate turning schedule documentation',
      correctiveAction: 'Implement electronic turning reminders',
      dueDate: '2026-01-20'
    }
  ];

  // Quality Metrics
  const qualityMetrics: QualityMetric[] = [
    {
      id: 'QM-001',
      name: 'Patient Fall Rate',
      category: 'SAFETY',
      currentValue: 2.8,
      target: 3.5,
      unit: 'per 1,000 patient days',
      trend: 'down',
      lastUpdated: '2026-01-05',
      benchmark: 3.2
    },
    {
      id: 'QM-002',
      name: 'Medication Error Rate',
      category: 'SAFETY',
      currentValue: 4.2,
      target: 5.0,
      unit: 'per 1,000 doses',
      trend: 'stable',
      lastUpdated: '2026-01-05',
      benchmark: 4.8
    },
    {
      id: 'QM-003',
      name: 'HCAHPS Overall Rating',
      category: 'SATISFACTION',
      currentValue: 87,
      target: 85,
      unit: '% Top Box',
      trend: 'up',
      lastUpdated: '2026-01-04',
      benchmark: 82
    },
    {
      id: 'QM-004',
      name: 'Hospital-Acquired Infections',
      category: 'CLINICAL',
      currentValue: 1.2,
      target: 1.5,
      unit: 'per 1,000 patient days',
      trend: 'down',
      lastUpdated: '2026-01-05',
      benchmark: 1.8
    },
    {
      id: 'QM-005',
      name: 'Readmission Rate (30-day)',
      category: 'CLINICAL',
      currentValue: 11.5,
      target: 12.0,
      unit: '%',
      trend: 'down',
      lastUpdated: '2026-01-03',
      benchmark: 13.2
    },
    {
      id: 'QM-006',
      name: 'Emergency Department Wait Time',
      category: 'OPERATIONAL',
      currentValue: 28,
      target: 30,
      unit: 'minutes',
      trend: 'stable',
      lastUpdated: '2026-01-05',
      benchmark: 35
    }
  ];

  // Performance Improvement Projects
  const pipProjects: PerformanceImprovementProject[] = [
    {
      id: 'PIP-001',
      title: 'Reduce Patient Fall Rate in Medical-Surgical Units',
      status: 'IMPLEMENTING',
      priority: 'HIGH',
      startDate: '2025-11-01',
      targetDate: '2026-04-30',
      owner: 'Sarah Chen, VP Quality',
      goal: 'Reduce falls from 3.2 to 2.5 per 1,000 patient days',
      baseline: 3.2,
      target: 2.5,
      current: 2.8,
      milestones: [
        { title: 'Conduct root cause analysis', completed: true, dueDate: '2025-11-15' },
        { title: 'Implement hourly rounding', completed: true, dueDate: '2025-12-01' },
        { title: 'Install bed alarms in all rooms', completed: true, dueDate: '2025-12-15' },
        { title: 'Train staff on fall prevention', completed: false, dueDate: '2026-01-15' },
        { title: 'Monitor and adjust interventions', completed: false, dueDate: '2026-03-30' }
      ]
    },
    {
      id: 'PIP-002',
      title: 'Improve Medication Administration Safety',
      status: 'IMPLEMENTING',
      priority: 'HIGH',
      startDate: '2025-12-01',
      targetDate: '2026-05-31',
      owner: 'Dr. Michael Torres',
      goal: 'Reduce medication errors from 4.8 to 3.5 per 1,000 doses',
      baseline: 4.8,
      target: 3.5,
      current: 4.2,
      milestones: [
        { title: 'Implement barcode scanning', completed: true, dueDate: '2025-12-31' },
        { title: 'Update medication formulary', completed: false, dueDate: '2026-01-31' },
        { title: 'Conduct medication safety training', completed: false, dueDate: '2026-02-28' },
        { title: 'Install smart infusion pumps', completed: false, dueDate: '2026-04-30' }
      ]
    },
    {
      id: 'PIP-003',
      title: 'Enhance Patient Satisfaction Scores',
      status: 'MONITORING',
      priority: 'MEDIUM',
      startDate: '2025-10-01',
      targetDate: '2026-03-31',
      owner: 'Jennifer Lee, Patient Experience',
      goal: 'Increase HCAHPS overall rating from 82% to 88%',
      baseline: 82,
      target: 88,
      current: 87,
      milestones: [
        { title: 'Implement bedside shift report', completed: true, dueDate: '2025-11-01' },
        { title: 'Create patient comfort rounding', completed: true, dueDate: '2025-12-01' },
        { title: 'Improve discharge communication', completed: true, dueDate: '2026-01-01' },
        { title: 'Staff customer service training', completed: false, dueDate: '2026-02-15' }
      ]
    }
  ];

  // Risk Assessments
  const riskAssessments: RiskAssessment[] = [
    {
      id: 'RISK-001',
      riskArea: 'Staffing Shortages',
      description: 'Critical staffing shortages in nursing leading to increased patient-to-nurse ratios',
      likelihood: 4,
      impact: 5,
      riskScore: 20,
      mitigationPlan: 'Accelerate hiring, implement retention bonuses, utilize travel nurses',
      owner: 'HR Director',
      reviewDate: '2026-02-01',
      status: 'ACTIVE'
    },
    {
      id: 'RISK-002',
      riskArea: 'Cybersecurity Breach',
      description: 'Potential ransomware attack on EHR system',
      likelihood: 3,
      impact: 5,
      riskScore: 15,
      mitigationPlan: 'Enhanced firewalls, staff training, backup systems, incident response plan',
      owner: 'IT Director',
      reviewDate: '2026-01-15',
      status: 'MONITORING'
    },
    {
      id: 'RISK-003',
      riskArea: 'Medical Equipment Failure',
      description: 'Aging medical equipment increasing failure rates',
      likelihood: 3,
      impact: 4,
      riskScore: 12,
      mitigationPlan: 'Equipment replacement schedule, preventive maintenance program',
      owner: 'Biomedical Engineering',
      reviewDate: '2026-03-01',
      status: 'MONITORING'
    },
    {
      id: 'RISK-004',
      riskArea: 'Infection Control Protocols',
      description: 'Risk of outbreak due to non-compliance with hand hygiene',
      likelihood: 2,
      impact: 5,
      riskScore: 10,
      mitigationPlan: 'Hand hygiene audits, staff education, sanitizer availability improvements',
      owner: 'Infection Control',
      reviewDate: '2026-01-20',
      status: 'MITIGATED'
    }
  ];

  // Calculate statistics
  const openIncidents = incidents.filter(i => i.status !== 'RESOLVED').length;
  const criticalIncidents = incidents.filter(i => i.severity === 'CRITICAL').length;
  const highIncidents = incidents.filter(i => i.severity === 'HIGH').length;
  const overdueIncidents = incidents.filter(i => i.dueDate && new Date(i.dueDate) < new Date()).length;

  const activePIPs = pipProjects.filter(p => p.status === 'IMPLEMENTING').length;
  const metricsOnTarget = qualityMetrics.filter(m => m.currentValue <= m.target).length;
  const highRisks = riskAssessments.filter(r => r.riskScore >= 15).length;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'bg-red-500 text-white';
      case 'HIGH': return 'bg-[rgba(201,168,76,0.12)] text-white';
      case 'MODERATE': return 'bg-[rgba(201,168,76,0.12)] text-white';
      case 'LOW': return 'bg-amber-600 text-white';
      default: return 'bg-[rgba(201,168,76,0.04)]0 text-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'RESOLVED': case 'COMPLETED': case 'MITIGATED': return 'bg-[rgba(201,168,76,0.04)] text-green-400';
      case 'ACTION_PLAN': case 'IMPLEMENTING': case 'MONITORING': return 'bg-amber-900/30 text-[#E8C060]';
      case 'INVESTIGATING': case 'PLANNING': case 'ACTIVE': return 'bg-[rgba(201,168,76,0.04)] text-[#5A5040]';
      case 'REPORTED': return 'bg-[rgba(201,168,76,0.04)] text-[#9E8F75]';
      default: return 'bg-[rgba(201,168,76,0.04)] text-[#9E8F75]';
    }
  };

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-400" />;
    if (trend === 'down') return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />;
    return <ArrowRight className="w-4 h-4 text-[#9E8F75]" />;
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#9E8F75] mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-amber-400" />
              QAPI - Quality Assurance & Performance Improvement
            </h1>
            <p className="text-[#9E8F75]">Comprehensive quality management, risk assessment, and performance improvement tracking</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Incident
            </button>
            <button className="px-4 py-2 bg-green-500 hover:bg-green-500 text-white rounded-lg font-medium transition-all flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6 flex gap-2 overflow-x-auto border-b border-[rgba(201,168,76,0.22)]">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`px-6 py-3 font-medium transition-all whitespace-nowrap border-b-2 ${
            activeTab === 'dashboard'
              ? 'border-amber-600/40 text-amber-400'
              : 'border-transparent text-[#9E8F75] hover:text-[#9E8F75]'
          }`}
        >
          <Activity className="w-5 h-5 inline mr-2" />
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('incidents')}
          className={`px-6 py-3 font-medium transition-all whitespace-nowrap border-b-2 ${
            activeTab === 'incidents'
              ? 'border-amber-600/40 text-amber-400'
              : 'border-transparent text-[#9E8F75] hover:text-[#9E8F75]'
          }`}
        >
          <AlertTriangle className="w-5 h-5 inline mr-2" />
          Incidents ({openIncidents})
        </button>
        <button
          onClick={() => setActiveTab('metrics')}
          className={`px-6 py-3 font-medium transition-all whitespace-nowrap border-b-2 ${
            activeTab === 'metrics'
              ? 'border-amber-600/40 text-amber-400'
              : 'border-transparent text-[#9E8F75] hover:text-[#9E8F75]'
          }`}
        >
          <BarChart3 className="w-5 h-5 inline mr-2" />
          Quality Metrics
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-6 py-3 font-medium transition-all whitespace-nowrap border-b-2 ${
            activeTab === 'projects'
              ? 'border-amber-600/40 text-amber-400'
              : 'border-transparent text-[#9E8F75] hover:text-[#9E8F75]'
          }`}
        >
          <Target className="w-5 h-5 inline mr-2" />
          PIP Projects ({activePIPs})
        </button>
        <button
          onClick={() => setActiveTab('risks')}
          className={`px-6 py-3 font-medium transition-all whitespace-nowrap border-b-2 ${
            activeTab === 'risks'
              ? 'border-amber-600/40 text-amber-400'
              : 'border-transparent text-[#9E8F75] hover:text-[#9E8F75]'
          }`}
        >
          <Shield className="w-5 h-5 inline mr-2" />
          Risk Assessment
        </button>
        <button
          onClick={() => setActiveTab('audits')}
          className={`px-6 py-3 font-medium transition-all whitespace-nowrap border-b-2 ${
            activeTab === 'audits'
              ? 'border-amber-600/40 text-amber-400'
              : 'border-transparent text-[#9E8F75] hover:text-[#9E8F75]'
          }`}
        >
          <CheckCircle className="w-5 h-5 inline mr-2" />
          Audits & Compliance
        </button>
        <button
          onClick={() => setActiveTab('reports')}
          className={`px-6 py-3 font-medium transition-all whitespace-nowrap border-b-2 ${
            activeTab === 'reports'
              ? 'border-amber-600/40 text-amber-400'
              : 'border-transparent text-[#9E8F75] hover:text-[#9E8F75]'
          }`}
        >
          <FileText className="w-5 h-5 inline mr-2" />
          Reports & Charts
        </button>
        <button
          onClick={() => setActiveTab('import')}
          className={`px-6 py-3 font-medium transition-all whitespace-nowrap border-b-2 ${
            activeTab === 'import'
              ? 'border-amber-600/40 text-amber-400'
              : 'border-transparent text-[#9E8F75] hover:text-[#9E8F75]'
          }`}
        >
          <Upload className="w-5 h-5 inline mr-2" />
          Import Data
        </button>
      </div>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div className="space-y-8">
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[rgba(201,168,76,0.04)] rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-[#9E8F75]" />
                </div>
                {openIncidents > 0 && <span className="text-xs font-semibold text-[#9E8F75]">ACTIVE</span>}
              </div>
              <h3 className="text-sm font-medium text-[#9E8F75] mb-1">Open Incidents</h3>
              <p className="text-3xl font-bold text-[#9E8F75]">{openIncidents}</p>
              <p className="text-xs text-[#9E8F75] mt-1">
                {criticalIncidents} critical, {highIncidents} high priority
              </p>
            </div>

            <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[rgba(201,168,76,0.04)] rounded-lg">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-sm font-medium text-[#9E8F75] mb-1">Metrics On Target</h3>
              <p className="text-3xl font-bold text-[#9E8F75]">{metricsOnTarget}/{qualityMetrics.length}</p>
              <p className="text-xs text-[#9E8F75] mt-1">
                {((metricsOnTarget / qualityMetrics.length) * 100).toFixed(0)}% meeting goals
              </p>
            </div>

            <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-amber-900/30 rounded-lg">
                  <Activity className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-xs font-semibold text-amber-400">IN PROGRESS</span>
              </div>
              <h3 className="text-sm font-medium text-[#9E8F75] mb-1">Active PIP Projects</h3>
              <p className="text-3xl font-bold text-[#9E8F75]">{activePIPs}</p>
              <p className="text-xs text-[#9E8F75] mt-1">
                {pipProjects.length} total projects
              </p>
            </div>

            <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[rgba(201,168,76,0.04)] rounded-lg">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                {highRisks > 0 && <AlertCircle className="w-5 h-5 text-red-400" />}
              </div>
              <h3 className="text-sm font-medium text-[#9E8F75] mb-1">High-Risk Items</h3>
              <p className="text-3xl font-bold text-[#9E8F75]">{highRisks}</p>
              <p className="text-xs text-[#9E8F75] mt-1">
                Score ≥15 requires immediate attention
              </p>
            </div>
          </div>

          {/* Quality Metrics Overview */}
          <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
            <h2 className="text-xl font-bold text-[#9E8F75] mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-amber-400" />
              Quality Metrics Snapshot
            </h2>
            <div className="space-y-4">
              {qualityMetrics.slice(0, 4).map((metric) => {
                const percentage = (metric.currentValue / metric.target) * 100;
                const isOnTarget = metric.currentValue <= metric.target;
                
                return (
                  <div key={metric.id} className="border-b border-[rgba(201,168,76,0.22)] pb-4 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-[#9E8F75]">{metric.name}</span>
                        {getTrendIcon(metric.trend)}
                      </div>
                      <div className="text-right">
                        <span className={`text-lg font-bold ${isOnTarget ? 'text-green-400' : 'text-red-400'}`}>
                          {metric.currentValue}{metric.unit === '%' ? '%' : ''}
                        </span>
                        <span className="text-sm text-[#9E8F75] ml-2">/ {metric.target} target</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-[rgba(201,168,76,0.08)] rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${isOnTarget ? 'bg-green-500' : 'bg-red-500'}`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-[#9E8F75] mt-1">
                      <span>Benchmark: {metric.benchmark}{metric.unit === '%' ? '%' : ''}</span>
                      <span>Updated: {new Date(metric.lastUpdated).toLocaleDateString()}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Incidents & Active PIPs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Incidents */}
            <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
              <h2 className="text-xl font-bold text-[#9E8F75] mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#9E8F75]" />
                Recent Incidents
              </h2>
              <div className="space-y-3">
                {incidents.slice(0, 3).map((incident) => (
                  <div key={incident.id} className="p-4 bg-[#110F0B] rounded-lg hover:bg-[rgba(201,168,76,0.04)] transition-all cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                        <span className="text-xs text-[#9E8F75] ml-2">{incident.id}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                        {incident.status.replace('_', ' ')}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#9E8F75] mb-1">{incident.type.replace('_', ' ')}</h3>
                    <p className="text-sm text-[#9E8F75] mb-2">{incident.description}</p>
                    <div className="flex items-center justify-between text-xs text-[#9E8F75]">
                      <span>{incident.department}</span>
                      <span>{new Date(incident.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 text-amber-400 hover:bg-amber-900/20 rounded-lg font-medium transition-all">
                View All Incidents →
              </button>
            </div>

            {/* Active PIP Projects */}
            <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
              <h2 className="text-xl font-bold text-[#9E8F75] mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-400" />
                Active PIP Projects
              </h2>
              <div className="space-y-3">
                {pipProjects.filter(p => p.status === 'IMPLEMENTING').map((project) => {
                  const progress = ((project.current - project.baseline) / (project.target - project.baseline)) * 100;
                  const completedMilestones = project.milestones.filter(m => m.completed).length;
                  
                  return (
                    <div key={project.id} className="p-4 bg-[#110F0B] rounded-lg hover:bg-[rgba(201,168,76,0.04)] transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.priority === 'HIGH' ? 'bg-[rgba(201,168,76,0.04)] text-red-400' :
                          project.priority === 'MEDIUM' ? 'bg-[rgba(201,168,76,0.04)] text-[#5A5040]' :
                          'bg-amber-900/30 text-[#E8C060]'
                        }`}>
                          {project.priority}
                        </span>
                        <span className="text-xs text-[#9E8F75]">{project.id}</span>
                      </div>
                      <h3 className="font-semibold text-[#9E8F75] mb-2">{project.title}</h3>
                      <div className="mb-2">
                        <div className="flex justify-between text-xs text-[#9E8F75] mb-1">
                          <span>Progress: {progress.toFixed(0)}%</span>
                          <span>Milestones: {completedMilestones}/{project.milestones.length}</span>
                        </div>
                        <div className="w-full h-2 bg-[rgba(201,168,76,0.08)] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-amber-600"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#9E8F75]">
                        <span>{project.owner}</span>
                        <span>Due: {new Date(project.targetDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="w-full mt-4 px-4 py-2 text-amber-400 hover:bg-amber-900/20 rounded-lg font-medium transition-all">
                View All Projects →
              </button>
            </div>
          </div>

          {/* Risk Heat Map */}
          <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
            <h2 className="text-xl font-bold text-[#9E8F75] mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-400" />
              Risk Heat Map
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[rgba(201,168,76,0.22)]">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#9E8F75]">Risk Area</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-[#9E8F75]">Likelihood</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-[#9E8F75]">Impact</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-[#9E8F75]">Risk Score</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#9E8F75]">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#9E8F75]">Owner</th>
                  </tr>
                </thead>
                <tbody>
                  {riskAssessments.sort((a, b) => b.riskScore - a.riskScore).map((risk) => (
                    <tr key={risk.id} className="border-b border-[rgba(201,168,76,0.22)] hover:bg-[#110F0B]">
                      <td className="py-4 px-4">
                        <div className="font-medium text-[#9E8F75]">{risk.riskArea}</div>
                        <div className="text-xs text-[#9E8F75]">{risk.id}</div>
                      </td>
                      <td className="text-center py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          risk.likelihood >= 4 ? 'bg-[rgba(201,168,76,0.04)] text-red-400' :
                          risk.likelihood >= 3 ? 'bg-[rgba(201,168,76,0.04)] text-[#5A5040]' :
                          'bg-[rgba(201,168,76,0.04)] text-green-400'
                        }`}>
                          {risk.likelihood}
                        </span>
                      </td>
                      <td className="text-center py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          risk.impact >= 4 ? 'bg-[rgba(201,168,76,0.04)] text-red-400' :
                          risk.impact >= 3 ? 'bg-[rgba(201,168,76,0.04)] text-[#5A5040]' :
                          'bg-[rgba(201,168,76,0.04)] text-green-400'
                        }`}>
                          {risk.impact}
                        </span>
                      </td>
                      <td className="text-center py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-lg font-bold ${
                          risk.riskScore >= 15 ? 'bg-red-500 text-white' :
                          risk.riskScore >= 10 ? 'bg-[rgba(201,168,76,0.12)] text-white' :
                          'bg-[rgba(201,168,76,0.12)] text-white'
                        }`}>
                          {risk.riskScore}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(risk.status)}`}>
                          {risk.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-[#9E8F75]">{risk.owner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Incidents Tab */}
      {activeTab === 'incidents' && (
        <div className="space-y-6">
          {/* Filters */}
          <div className="bg-[#110F0B] p-4 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-[#9E8F75]" />
                  <input
                    type="text"
                    placeholder="Search incidents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-[rgba(201,168,76,0.22)] rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)] focus:border-transparent"
                  />
                </div>
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-[rgba(201,168,76,0.22)] rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
              >
                <option value="all">All Status</option>
                <option value="REPORTED">Reported</option>
                <option value="INVESTIGATING">Investigating</option>
                <option value="ACTION_PLAN">Action Plan</option>
                <option value="RESOLVED">Resolved</option>
              </select>
            </div>
          </div>

          {/* Incidents List */}
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)] hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>
                      {incident.status.replace('_', ' ')}
                    </span>
                    <span className="text-sm text-[#9E8F75]">{incident.id}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-[rgba(201,168,76,0.04)] rounded-lg transition-all">
                      <Eye className="w-4 h-4 text-[#9E8F75]" />
                    </button>
                    <button className="p-2 hover:bg-[rgba(201,168,76,0.04)] rounded-lg transition-all">
                      <Edit className="w-4 h-4 text-[#9E8F75]" />
                    </button>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#9E8F75] mb-2">{incident.type.replace('_', ' ')}</h3>
                <p className="text-[#9E8F75] mb-4">{incident.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <span className="text-xs text-[#9E8F75]">Department</span>
                    <p className="text-sm font-medium text-[#9E8F75]">{incident.department}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#9E8F75]">Date</span>
                    <p className="text-sm font-medium text-[#9E8F75]">{new Date(incident.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#9E8F75]">Reported By</span>
                    <p className="text-sm font-medium text-[#9E8F75]">{incident.reportedBy}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#9E8F75]">Assigned To</span>
                    <p className="text-sm font-medium text-[#9E8F75]">{incident.assignedTo || 'Unassigned'}</p>
                  </div>
                </div>

                {incident.rootCause && (
                  <div className="bg-[rgba(201,168,76,0.04)] border-l-4 border-[rgba(201,168,76,0.22)] p-3 rounded mb-3">
                    <p className="text-xs font-semibold text-[#5A5040] mb-1">Root Cause</p>
                    <p className="text-sm text-[#5A5040]">{incident.rootCause}</p>
                  </div>
                )}

                {incident.correctiveAction && (
                  <div className="bg-amber-900/20 border-l-4 border-[rgba(201,168,76,0.22)] p-3 rounded mb-3">
                    <p className="text-xs font-semibold text-[#9E8F75] mb-1">Corrective Action</p>
                    <p className="text-sm text-[#E8C060]">{incident.correctiveAction}</p>
                  </div>
                )}

                {incident.dueDate && (
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-[#9E8F75]" />
                    <span className="text-[#9E8F75]">Due: {new Date(incident.dueDate).toLocaleDateString()}</span>
                    {new Date(incident.dueDate) < new Date() && (
                      <span className="px-2 py-0.5 bg-[rgba(201,168,76,0.04)] text-red-400 rounded-full text-xs font-medium">OVERDUE</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quality Metrics Tab */}
      {activeTab === 'metrics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityMetrics.map((metric) => {
              const isOnTarget = metric.currentValue <= metric.target;
              const percentage = (metric.currentValue / metric.target) * 100;
              const vsBenchmark = ((metric.currentValue - metric.benchmark) / metric.benchmark * 100).toFixed(1);
              
              return (
                <div key={metric.id} className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        metric.category === 'SAFETY' ? 'bg-[rgba(201,168,76,0.04)] text-red-400' :
                        metric.category === 'CLINICAL' ? 'bg-amber-900/30 text-[#E8C060]' :
                        metric.category === 'SATISFACTION' ? 'bg-[rgba(201,168,76,0.04)] text-green-400' :
                        'bg-[rgba(201,168,76,0.04)] text-amber-700'
                      }`}>
                        {metric.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {getTrendIcon(metric.trend)}
                      {isOnTarget ? (
                        <ThumbsUp className="w-5 h-5 text-green-400" />
                      ) : (
                        <ThumbsDown className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#9E8F75] mb-2">{metric.name}</h3>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl font-bold ${isOnTarget ? 'text-green-400' : 'text-red-400'}`}>
                        {metric.currentValue}
                      </span>
                      <span className="text-[#9E8F75]">{metric.unit}</span>
                    </div>
                    <div className="text-sm text-[#9E8F75]">Target: {metric.target} {metric.unit}</div>
                  </div>

                  <div className="w-full h-3 bg-[rgba(201,168,76,0.08)] rounded-full overflow-hidden mb-4">
                    <div 
                      className={`h-full ${isOnTarget ? 'bg-green-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-[#9E8F75]">Benchmark: </span>
                      <span className="font-medium text-[#9E8F75]">{metric.benchmark} {metric.unit}</span>
                    </div>
                    <div>
                      <span className={`font-medium ${parseFloat(vsBenchmark) > 0 ? 'text-red-400' : 'text-green-400'}`}>
                        {parseFloat(vsBenchmark) > 0 ? '+' : ''}{vsBenchmark}%
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[rgba(201,168,76,0.22)] text-xs text-[#9E8F75]">
                    Last updated: {new Date(metric.lastUpdated).toLocaleDateString()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* PIP Projects Tab */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          {pipProjects.map((project) => {
            const progress = ((project.current - project.baseline) / (project.target - project.baseline)) * 100;
            const completedMilestones = project.milestones.filter(m => m.completed).length;
            const totalMilestones = project.milestones.length;
            
            return (
              <div key={project.id} className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.priority === 'HIGH' ? 'bg-[rgba(201,168,76,0.04)] text-red-400' :
                      project.priority === 'MEDIUM' ? 'bg-[rgba(201,168,76,0.04)] text-[#5A5040]' :
                      'bg-amber-900/30 text-[#E8C060]'
                    }`}>
                      {project.priority} PRIORITY
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-sm text-[#9E8F75]">{project.id}</span>
                  </div>
                  <button className="p-2 hover:bg-[rgba(201,168,76,0.04)] rounded-lg transition-all">
                    <Eye className="w-5 h-5 text-[#9E8F75]" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-[#9E8F75] mb-2">{project.title}</h3>
                <p className="text-[#9E8F75] mb-4">{project.goal}</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-[#110F0B] p-3 rounded-lg">
                    <span className="text-xs text-[#9E8F75]">Baseline</span>
                    <p className="text-lg font-bold text-[#9E8F75]">{project.baseline}</p>
                  </div>
                  <div className="bg-amber-900/20 p-3 rounded-lg">
                    <span className="text-xs text-amber-400">Current</span>
                    <p className="text-lg font-bold text-[#9E8F75]">{project.current}</p>
                  </div>
                  <div className="bg-[rgba(201,168,76,0.04)] p-3 rounded-lg">
                    <span className="text-xs text-green-400">Target</span>
                    <p className="text-lg font-bold text-green-400">{project.target}</p>
                  </div>
                  <div className="bg-[rgba(201,168,76,0.04)] p-3 rounded-lg">
                    <span className="text-xs text-amber-600">Progress</span>
                    <p className="text-lg font-bold text-[#9E8F75]">{progress.toFixed(0)}%</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-[#9E8F75] mb-2">
                    <span>Overall Progress</span>
                    <span>{progress.toFixed(0)}%</span>
                  </div>
                  <div className="w-full h-3 bg-[rgba(201,168,76,0.08)] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[rgba(201,168,76,0.08)]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-[#9E8F75] mb-3">Milestones ({completedMilestones}/{totalMilestones})</h4>
                  <div className="space-y-2">
                    {project.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center ${
                          milestone.completed ? 'bg-green-500' : 'bg-gray-300'
                        }`}>
                          {milestone.completed && <CheckCircle className="w-4 h-4 text-white" />}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm ${milestone.completed ? 'text-[#9E8F75] line-through' : 'text-[#9E8F75] font-medium'}`}>
                            {milestone.title}
                          </p>
                          <p className="text-xs text-[#9E8F75]">Due: {new Date(milestone.dueDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[rgba(201,168,76,0.22)]">
                  <div className="text-sm">
                    <span className="text-[#9E8F75]">Owner: </span>
                    <span className="font-medium text-[#9E8F75]">{project.owner}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-[#9E8F75]">Target Date: </span>
                    <span className="font-medium text-[#9E8F75]">{new Date(project.targetDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Risks Tab */}
      {activeTab === 'risks' && (
        <div className="space-y-6">
          <div className="bg-amber-900/20 border-l-4 border-[rgba(201,168,76,0.22)] p-4 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-[#9E8F75] mb-1">Risk Score Formula</h3>
                <p className="text-sm text-[#E8C060]">
                  Risk Score = Likelihood (1-5) × Impact (1-5). Scores ≥15 are critical, 10-14 are high, 5-9 are moderate, &lt;5 are low.
                </p>
              </div>
            </div>
          </div>

          {riskAssessments.map((risk) => (
            <div key={risk.id} className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className={`px-4 py-2 rounded-full text-xl font-bold ${
                    risk.riskScore >= 15 ? 'bg-red-500 text-white' :
                    risk.riskScore >= 10 ? 'bg-[rgba(201,168,76,0.12)] text-white' :
                    'bg-[rgba(201,168,76,0.12)] text-white'
                  }`}>
                    {risk.riskScore}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#9E8F75]">{risk.riskArea}</h3>
                    <span className="text-sm text-[#9E8F75]">{risk.id}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(risk.status)}`}>
                  {risk.status}
                </span>
              </div>

              <p className="text-[#9E8F75] mb-4">{risk.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-[#110F0B] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#9E8F75]">Likelihood</span>
                    <span className={`px-2 py-1 rounded text-sm font-bold ${
                      risk.likelihood >= 4 ? 'bg-[rgba(201,168,76,0.04)] text-red-400' :
                      risk.likelihood >= 3 ? 'bg-[rgba(201,168,76,0.04)] text-[#5A5040]' :
                      'bg-[rgba(201,168,76,0.04)] text-green-400'
                    }`}>
                      {risk.likelihood}/5
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[rgba(201,168,76,0.08)] rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        risk.likelihood >= 4 ? 'bg-red-500' :
                        risk.likelihood >= 3 ? 'bg-[rgba(201,168,76,0.12)]' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${(risk.likelihood / 5) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="bg-[#110F0B] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#9E8F75]">Impact</span>
                    <span className={`px-2 py-1 rounded text-sm font-bold ${
                      risk.impact >= 4 ? 'bg-[rgba(201,168,76,0.04)] text-red-400' :
                      risk.impact >= 3 ? 'bg-[rgba(201,168,76,0.04)] text-[#5A5040]' :
                      'bg-[rgba(201,168,76,0.04)] text-green-400'
                    }`}>
                      {risk.impact}/5
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[rgba(201,168,76,0.08)] rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        risk.impact >= 4 ? 'bg-red-500' :
                        risk.impact >= 3 ? 'bg-[rgba(201,168,76,0.12)]' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${(risk.impact / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-amber-900/20 border-l-4 border-[rgba(201,168,76,0.22)] p-4 rounded mb-4">
                <p className="text-xs font-semibold text-[#9E8F75] mb-1">Mitigation Plan</p>
                <p className="text-sm text-[#E8C060]">{risk.mitigationPlan}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[rgba(201,168,76,0.22)] text-sm">
                <div>
                  <span className="text-[#9E8F75]">Owner: </span>
                  <span className="font-medium text-[#9E8F75]">{risk.owner}</span>
                </div>
                <div>
                  <span className="text-[#9E8F75]">Next Review: </span>
                  <span className="font-medium text-[#9E8F75]">{new Date(risk.reviewDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Audits Tab */}
      {activeTab === 'audits' && (
        <div className="space-y-6">
          <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
            <h2 className="text-xl font-bold text-[#9E8F75] mb-4">Audit & Compliance Management</h2>
            <p className="text-[#9E8F75] mb-6">Comprehensive audit tracking, compliance monitoring, and regulatory readiness tools.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[rgba(201,168,76,0.04)] p-6 rounded-lg border border-[rgba(201,168,76,0.22)]">
                <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="font-bold text-[#9E8F75] mb-2">Compliance Score</h3>
                <p className="text-4xl font-bold text-green-400 mb-2">94%</p>
                <p className="text-sm text-[#9E8F75]">18 out of 19 standards met</p>
              </div>

              <div className="bg-amber-900/20 p-6 rounded-lg border border-[rgba(201,168,76,0.22)]">
                <Calendar className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-bold text-[#9E8F75] mb-2">Upcoming Audits</h3>
                <p className="text-4xl font-bold text-amber-400 mb-2">3</p>
                <p className="text-sm text-[#9E8F75]">Next audit in 12 days</p>
              </div>

              <div className="bg-[rgba(201,168,76,0.04)] p-6 rounded-lg border border-[rgba(201,168,76,0.22)]">
                <AlertCircle className="w-8 h-8 text-[#5A5040] mb-3" />
                <h3 className="font-bold text-[#9E8F75] mb-2">Open Findings</h3>
                <p className="text-4xl font-bold text-[#5A5040] mb-2">2</p>
                <p className="text-sm text-[#9E8F75]">Require corrective action</p>
              </div>
            </div>
          </div>

          <div className="bg-[rgba(201,168,76,0.08)] p-6 rounded border-2 border-[rgba(201,168,76,0.22)]">
            <Award className="w-8 h-8 text-amber-600 mb-3" />
            <h3 className="text-xl font-bold text-[#9E8F75] mb-2">Audit Readiness Dashboard</h3>
            <p className="text-[#9E8F75] mb-4">
              Full audit management features coming soon. Track CMS, Joint Commission, OSHA, and internal audits with automated checklist generation, finding tracking, and corrective action plans.
            </p>
            <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all">
              Learn More
            </button>
          </div>
        </div>
      )}

      {/* Reports & Charts Tab - NEW */}
      {activeTab === 'reports' && (
        <div className="space-y-6">
          {/* Data Integration Status */}
          <div className="bg-[#110F0B] p-6 rounded border-2 border-[rgba(201,168,76,0.22)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-amber-600 rounded-lg">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-[#9E8F75] mb-2">Data Integration Hub</h2>
                <p className="text-[#9E8F75] mb-4">
                  This QAPI portal automatically pulls real-time data from all systems to generate comprehensive reports and charts.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-[#110F0B] p-3 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <CheckCircle className="w-5 h-5 text-green-400 mb-1" />
                    <p className="text-xs font-semibold text-[#9E8F75]">HR Analytics</p>
                    <p className="text-xs text-[#9E8F75]">Connected</p>
                  </div>
                  <div className="bg-[#110F0B] p-3 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <CheckCircle className="w-5 h-5 text-green-400 mb-1" />
                    <p className="text-xs font-semibold text-[#9E8F75]">Time & Attendance</p>
                    <p className="text-xs text-[#9E8F75]">Connected</p>
                  </div>
                  <div className="bg-[#110F0B] p-3 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <CheckCircle className="w-5 h-5 text-green-400 mb-1" />
                    <p className="text-xs font-semibold text-[#9E8F75]">Incidents</p>
                    <p className="text-xs text-[#9E8F75]">Connected</p>
                  </div>
                  <div className="bg-[#110F0B] p-3 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <CheckCircle className="w-5 h-5 text-green-400 mb-1" />
                    <p className="text-xs font-semibold text-[#9E8F75]">Compliance</p>
                    <p className="text-xs text-[#9E8F75]">Connected</p>
                  </div>
                  <div className="bg-[#110F0B] p-3 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <CheckCircle className="w-5 h-5 text-green-400 mb-1" />
                    <p className="text-xs font-semibold text-[#9E8F75]">Scheduling</p>
                    <p className="text-xs text-[#9E8F75]">Connected</p>
                  </div>
                  <div className="bg-[#110F0B] p-3 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <CheckCircle className="w-5 h-5 text-green-400 mb-1" />
                    <p className="text-xs font-semibold text-[#9E8F75]">Patient Satisfaction</p>
                    <p className="text-xs text-[#9E8F75]">Connected</p>
                  </div>
                  <div className="bg-[#110F0B] p-3 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <CheckCircle className="w-5 h-5 text-green-400 mb-1" />
                    <p className="text-xs font-semibold text-[#9E8F75]">Financial Data</p>
                    <p className="text-xs text-[#9E8F75]">Connected</p>
                  </div>
                  <div className="bg-[#110F0B] p-3 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <CheckCircle className="w-5 h-5 text-green-400 mb-1" />
                    <p className="text-xs font-semibold text-[#9E8F75]">Clinical Metrics</p>
                    <p className="text-xs text-[#9E8F75]">Connected</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#9E8F75]">
              <Clock className="w-4 h-4" />
              <span>Last synchronized: 5 minutes ago</span>
              <button className="ml-auto px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all text-sm">
                Sync Now
              </button>
            </div>
          </div>

          {/* Report Type Selection */}
          <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
            <h2 className="text-xl font-bold text-[#9E8F75] mb-4">Generate Meeting Report</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#9E8F75] mb-2">Report Type</label>
                <select
                  value={selectedReportType}
                  onChange={(e) => setSelectedReportType(e.target.value)}
                  className="w-full px-4 py-2 border border-[rgba(201,168,76,0.22)] rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
                >
                  <option value="executive">Executive Summary (Board Meeting)</option>
                  <option value="quality-committee">Quality Committee Report</option>
                  <option value="safety-huddle">Safety Huddle Report</option>
                  <option value="compliance">Compliance & Regulatory</option>
                  <option value="performance">Performance Dashboard</option>
                  <option value="department">Department Scorecard</option>
                  <option value="custom">Custom Report Builder</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#9E8F75] mb-2">Date Range</label>
                <select
                  value={reportDateRange}
                  onChange={(e) => setReportDateRange(e.target.value)}
                  className="w-full px-4 py-2 border border-[rgba(201,168,76,0.22)] rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
                >
                  <option value="today">Today</option>
                  <option value="last-7-days">Last 7 Days</option>
                  <option value="last-month">Last Month</option>
                  <option value="last-quarter">Last Quarter</option>
                  <option value="ytd">Year to Date</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Preview Report
              </button>
              <button className="px-6 py-3 bg-green-500 hover:bg-green-500 text-white rounded-lg font-medium transition-all flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export PowerPoint
              </button>
              <button className="px-6 py-3 bg-red-500 hover:bg-red-500 text-white rounded-lg font-medium transition-all flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export PDF
              </button>
              <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export Excel
              </button>
            </div>
          </div>

          {/* Executive Summary Report Preview */}
          {selectedReportType === 'executive' && (
            <div className="bg-[#110F0B] p-8 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[#9E8F75] mb-2">Executive Quality & Safety Summary</h1>
                <p className="text-[#9E8F75]">December 2025 • Board of Directors Meeting</p>
                <div className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-[rgba(201,168,76,0.04)] text-green-400 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Overall Performance: EXCEEDING TARGETS
                </div>
              </div>

              {/* Key Performance Indicators */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#9E8F75] mb-4 border-b-2 border-[rgba(201,168,76,0.22)] pb-2">Key Performance Indicators</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-[#110F0B] from-REMOVED-50 to-green-100 p-4 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-green-400">Patient Safety</span>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                    <p className="text-3xl font-bold text-green-400">98.2%</p>
                    <p className="text-xs text-green-400 mt-1">+2.5% vs. last month</p>
                  </div>

                  <div className="bg-[rgba(201,168,76,0.08)] p-4 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#E8C060]">Patient Satisfaction</span>
                      <TrendingUp className="w-4 h-4 text-amber-400" />
                    </div>
                    <p className="text-3xl font-bold text-[#9E8F75]">87%</p>
                    <p className="text-xs text-[#E8C060] mt-1">+5% vs. target</p>
                  </div>

                  <div className="bg-[rgba(201,168,76,0.08)] p-4 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#9E8F75]">Staff Compliance</span>
                      <TrendingUp className="w-4 h-4 text-amber-600" />
                    </div>
                    <p className="text-3xl font-bold text-[#9E8F75]">94%</p>
                    <p className="text-xs text-amber-700 mt-1">Within target range</p>
                  </div>

                  <div className="bg-[rgba(201,168,76,0.08)] p-4 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#9E8F75]">Quality Metrics</span>
                      <TrendingUp className="w-4 h-4 text-[#9E8F75]" />
                    </div>
                    <p className="text-3xl font-bold text-[#9E8F75]">6/6</p>
                    <p className="text-xs text-[#9E8F75] mt-1">All targets met</p>
                  </div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#9E8F75] mb-4 border-b-2 border-[rgba(201,168,76,0.22)] pb-2">Visual Analytics</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Incident Trend Chart */}
                  <div className="bg-[#110F0B] p-6 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <h3 className="font-bold text-[#9E8F75] mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-amber-400" />
                      Incident Trend (Last 6 Months)
                    </h3>
                    <div className="space-y-3">
                      {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => {
                        const values = [12, 10, 8, 9, 7, 5];
                        const value = values[index];
                        const maxValue = Math.max(...values);
                        
                        return (
                          <div key={month}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-[#9E8F75]">{month}</span>
                              <span className="text-sm font-bold text-[#9E8F75]">{value} incidents</span>
                            </div>
                            <div className="w-full h-6 bg-[#110F0B] rounded-full overflow-hidden border border-[rgba(201,168,76,0.22)]">
                              <div 
                                className="h-full bg-[rgba(201,168,76,0.08)] flex items-center justify-end pr-2"
                                style={{ width: `${(value / maxValue) * 100}%` }}
                              >
                                {value > 8 && <span className="text-xs font-bold text-white">{value}</span>}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-xs text-green-400 font-medium mt-3 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 rotate-180" />
                      58% reduction from peak in July
                    </p>
                  </div>

                  {/* Quality Metrics Performance */}
                  <div className="bg-[#110F0B] p-6 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <h3 className="font-bold text-[#9E8F75] mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-green-400" />
                      Quality Metrics vs. Target
                    </h3>
                    <div className="space-y-4">
                      {[
                        { name: 'Patient Falls', current: 2.8, target: 3.5, percentage: 80 },
                        { name: 'Med Errors', current: 4.2, target: 5.0, percentage: 84 },
                        { name: 'HAI Rate', current: 1.2, target: 1.5, percentage: 80 },
                        { name: 'Readmissions', current: 11.5, target: 12.0, percentage: 96 },
                        { name: 'HCAHPS', current: 87, target: 85, percentage: 102 },
                      ].map((metric) => (
                        <div key={metric.name}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-[#9E8F75]">{metric.name}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-[#9E8F75]">{metric.current} / {metric.target}</span>
                              {metric.percentage >= 100 ? (
                                <CheckCircle className="w-4 h-4 text-green-400" />
                              ) : (
                                <CheckCircle className="w-4 h-4 text-green-400" />
                              )}
                            </div>
                          </div>
                          <div className="w-full h-3 bg-[#110F0B] rounded-full overflow-hidden border border-[rgba(201,168,76,0.22)]">
                            <div 
                              className={`h-full ${metric.percentage >= 100 ? 'bg-green-500' : 'bg-green-500'}`}
                              style={{ width: `${Math.min(metric.percentage, 100)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-green-400 font-medium mt-3 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      All metrics meeting or exceeding targets
                    </p>
                  </div>
                </div>
              </div>

              {/* Department Scorecard */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#9E8F75] mb-4 border-b-2 border-[rgba(201,168,76,0.22)] pb-2">Department Performance Scorecard</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#110F0B]">
                      <tr>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-[#9E8F75]">Department</th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-[#9E8F75]">Safety Score</th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-[#9E8F75]">Quality Score</th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-[#9E8F75]">Incidents</th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-[#9E8F75]">Compliance</th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-[#9E8F75]">Overall</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { dept: 'Emergency', safety: 96, quality: 94, incidents: 1, compliance: 98, overall: 'A' },
                        { dept: 'Nursing', safety: 98, quality: 96, incidents: 2, compliance: 95, overall: 'A' },
                        { dept: 'ICU', safety: 97, quality: 98, incidents: 0, compliance: 99, overall: 'A+' },
                        { dept: 'Radiology', safety: 99, quality: 97, incidents: 0, compliance: 97, overall: 'A+' },
                        { dept: 'Laboratory', safety: 95, quality: 93, incidents: 1, compliance: 94, overall: 'A' },
                      ].map((dept, index) => (
                        <tr key={index} className="border-b border-[rgba(201,168,76,0.22)] hover:bg-[#110F0B]">
                          <td className="py-3 px-4 font-medium text-[#9E8F75]">{dept.dept}</td>
                          <td className="text-center py-3 px-4">
                            <span className={`px-2 py-1 rounded text-sm font-medium ${
                              dept.safety >= 95 ? 'bg-[rgba(201,168,76,0.04)] text-green-400' : 'bg-[rgba(201,168,76,0.04)] text-[#5A5040]'
                            }`}>
                              {dept.safety}%
                            </span>
                          </td>
                          <td className="text-center py-3 px-4">
                            <span className={`px-2 py-1 rounded text-sm font-medium ${
                              dept.quality >= 95 ? 'bg-[rgba(201,168,76,0.04)] text-green-400' : 'bg-[rgba(201,168,76,0.04)] text-[#5A5040]'
                            }`}>
                              {dept.quality}%
                            </span>
                          </td>
                          <td className="text-center py-3 px-4 text-[#9E8F75]">{dept.incidents}</td>
                          <td className="text-center py-3 px-4">
                            <span className={`px-2 py-1 rounded text-sm font-medium ${
                              dept.compliance >= 95 ? 'bg-[rgba(201,168,76,0.04)] text-green-400' : 'bg-[rgba(201,168,76,0.04)] text-[#5A5040]'
                            }`}>
                              {dept.compliance}%
                            </span>
                          </td>
                          <td className="text-center py-3 px-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                              dept.overall === 'A+' ? 'bg-green-500 text-white' :
                              dept.overall === 'A' ? 'bg-green-500 text-white' :
                              'bg-[rgba(201,168,76,0.12)] text-white'
                            }`}>
                              {dept.overall}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Action Items */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#9E8F75] mb-4 border-b-2 border-[rgba(201,168,76,0.22)] pb-2">Action Items & Recommendations</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-[rgba(201,168,76,0.04)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-400">Continue Fall Prevention Program</p>
                      <p className="text-sm text-green-400">Program showing excellent results with 58% reduction in incidents. Recommend expansion to all units.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-amber-900/20 rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#9E8F75]">Monitor Medication Safety Project</p>
                      <p className="text-sm text-[#E8C060]">Barcode scanning implementation on track. Next milestone: Smart pump integration by Q2 2026.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[rgba(201,168,76,0.04)] rounded-lg border border-[rgba(201,168,76,0.22)]">
                    <AlertCircle className="w-5 h-5 text-[#5A5040] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#5A5040]">Address Staffing Risk</p>
                      <p className="text-sm text-[#5A5040]">Critical staffing shortage remains highest risk (score: 20). Accelerate recruitment and retention initiatives.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-[rgba(201,168,76,0.22)]">
                <div className="flex items-center justify-between text-sm text-[#9E8F75]">
                  <div>
                    <p>Report generated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    <p>Data sources: HR Analytics, Clinical Systems, Incident Management, Compliance Database</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[#9E8F75]">Prepared by: Quality & Safety Department</p>
                    <p>Contact: quality@hospital.org</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Available Report Templates */}
          <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
            <h2 className="text-xl font-bold text-[#9E8F75] mb-4">Available Report Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Monthly Quality Dashboard', desc: 'Comprehensive quality metrics and trends', icon: BarChart3, color: 'blue' },
                { name: 'Safety Committee Report', desc: 'Incident analysis and safety initiatives', icon: Shield, color: 'red' },
                { name: 'Regulatory Compliance', desc: 'CMS, Joint Commission, OSHA status', icon: CheckCircle, color: 'green' },
                { name: 'Patient Experience', desc: 'HCAHPS scores and satisfaction trends', icon: Users, color: 'purple' },
                { name: 'Risk Management', desc: 'Risk assessments and mitigation status', icon: AlertTriangle, color: 'orange' },
                { name: 'PIP Project Status', desc: 'Performance improvement initiatives', icon: Target, color: 'indigo' },
              ].map((template, index) => (
                <div key={index} className="p-4 border-2 border-[rgba(201,168,76,0.22)] rounded-lg hover:border-[rgba(201,168,76,0.22)] hover:shadow-md transition-all cursor-pointer">
                  <div className={`p-2 bg-${template.color}-100 rounded-lg inline-block mb-3`}>
                    <template.icon className={`w-6 h-6 text-${template.color}-600`} />
                  </div>
                  <h3 className="font-bold text-[#9E8F75] mb-1">{template.name}</h3>
                  <p className="text-sm text-[#9E8F75]">{template.desc}</p>
                  <button className="mt-3 text-sm text-amber-400 hover:text-[#E8C060] font-medium">
                    Generate Report →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Chart Builder */}
          <div className="bg-[rgba(201,168,76,0.08)] p-6 rounded border-2 border-[rgba(201,168,76,0.22)]">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-amber-600" />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-[#9E8F75] mb-2">Custom Chart Builder</h2>
                <p className="text-[#9E8F75] mb-4">
                  Build custom visualizations by selecting data from any system. Choose from bar charts, line graphs, pie charts, heat maps, and trend analysis. Drag and drop to create your perfect meeting presentation.
                </p>
                <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all">
                  Launch Chart Builder
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Import Data Tab - NEW */}
      {activeTab === 'import' && (
        <div className="space-y-6">
          {/* Import Type Selection */}
          <div className="bg-[rgba(201,168,76,0.08)] p-6 rounded border-2 border-[rgba(201,168,76,0.22)]">
            <h2 className="text-2xl font-bold text-[#9E8F75] mb-2">Import External Data</h2>
            <p className="text-[#9E8F75] mb-4">
              Easily import data from SurveyMonkey, spreadsheets, or other external sources into your QAPI system.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setImportType('file')}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  importType === 'file' ? 'bg-amber-600 text-white shadow-lg' : 'bg-[#110F0B] text-[#9E8F75] hover:bg-[#110F0B]'
                }`}
              >
                <Upload className="w-5 h-5" />
                Upload File
              </button>
              <button
                onClick={() => setImportType('integration')}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  importType === 'integration' ? 'bg-amber-600 text-white shadow-lg' : 'bg-[#110F0B] text-[#9E8F75] hover:bg-[#110F0B]'
                }`}
              >
                <Link className="w-5 h-5" />
                Connect Integration
              </button>
              <button
                onClick={() => setImportType('manual')}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  importType === 'manual' ? 'bg-amber-600 text-white shadow-lg' : 'bg-[#110F0B] text-[#9E8F75] hover:bg-[#110F0B]'
                }`}
              >
                <Edit className="w-5 h-5" />
                Manual Entry
              </button>
            </div>
          </div>

          {/* File Upload Section */}
          {importType === 'file' && (
            <div className="space-y-6">
              {/* File Format Selector */}
              <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
                <h3 className="text-xl font-bold text-[#9E8F75] mb-4">Select File Format</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { type: 'csv', name: 'CSV File', icon: Table, desc: 'Comma-separated values' },
                    { type: 'excel', name: 'Excel', icon: FileSpreadsheet, desc: '.xlsx, .xls files' },
                    { type: 'json', name: 'JSON', icon: FileText, desc: 'JavaScript Object Notation' },
                    { type: 'surveymonkey', name: 'SurveyMonkey', icon: BarChart3, desc: 'Direct export' },
                  ].map((format) => (
                    <button
                      key={format.type}
                      onClick={() => setSelectedFileType(format.type)}
                      className={`p-4 border-2 rounded-lg transition-all text-left ${
                        selectedFileType === format.type
                          ? 'border-amber-500/40 bg-amber-900/20'
                          : 'border-[rgba(201,168,76,0.22)] hover:border-[rgba(201,168,76,0.22)]'
                      }`}
                    >
                      <format.icon className={`w-8 h-8 mb-2 ${
                        selectedFileType === format.type ? 'text-amber-400' : 'text-[#9E8F75]'
                      }`} />
                      <p className="font-semibold text-[#9E8F75]">{format.name}</p>
                      <p className="text-xs text-[#9E8F75]">{format.desc}</p>
                    </button>
                  ))}
                </div>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-[rgba(201,168,76,0.22)] rounded p-8 text-center hover:border-[rgba(201,168,76,0.22)] transition-all cursor-pointer bg-[#110F0B]">
                  <Upload className="w-12 h-12 text-[#9E8F75] mx-auto mb-3" />
                  <p className="text-lg font-semibold text-[#9E8F75] mb-1">Drag and drop your file here</p>
                  <p className="text-sm text-[#9E8F75] mb-4">or click to browse</p>
                  <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all">
                    Choose File
                  </button>
                  <p className="text-xs text-[#9E8F75] mt-3">Max file size: 10MB</p>
                </div>
              </div>

              {/* Data Type Selection */}
              <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
                <h3 className="text-xl font-bold text-[#9E8F75] mb-4">What type of data are you importing?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { type: 'patient-satisfaction', name: 'Patient Satisfaction', icon: Users, desc: 'Survey results, HCAHPS scores', color: 'blue' },
                    { type: 'incidents', name: 'Safety Incidents', icon: AlertTriangle, desc: 'Event reports, near misses', color: 'red' },
                    { type: 'quality-metrics', name: 'Quality Metrics', icon: TrendingUp, desc: 'Performance indicators, KPIs', color: 'green' },
                    { type: 'compliance', name: 'Compliance Data', icon: Shield, desc: 'Audit results, certifications', color: 'purple' },
                    { type: 'employee-feedback', name: 'Employee Feedback', icon: Users, desc: 'Engagement surveys, suggestions', color: 'orange' },
                    { type: 'clinical-outcomes', name: 'Clinical Outcomes', icon: Activity, desc: 'Patient outcomes, readmissions', color: 'indigo' },
                  ].map((dataType) => (
                    <div
                      key={dataType.type}
                      className="p-4 border-2 border-[rgba(201,168,76,0.22)] rounded-lg hover:border-[rgba(201,168,76,0.22)] hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className={`p-2 bg-${dataType.color}-100 rounded-lg inline-block mb-3`}>
                        <dataType.icon className={`w-6 h-6 text-${dataType.color}-600`} />
                      </div>
                      <h4 className="font-bold text-[#9E8F75] mb-1">{dataType.name}</h4>
                      <p className="text-sm text-[#9E8F75]">{dataType.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Field Mapping Preview */}
              <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
                <h3 className="text-xl font-bold text-[#9E8F75] mb-4">Field Mapping (Preview)</h3>
                <p className="text-sm text-[#9E8F75] mb-4">After uploading, you&apos;ll map your data fields to our system fields</p>
                <div className="bg-[#110F0B] p-4 rounded-lg border border-[rgba(201,168,76,0.22)]">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-[#110F0B] rounded border border-[rgba(201,168,76,0.22)]">
                      <span className="font-medium text-[#9E8F75]">Your Field: &quot;Satisfaction Score&quot;</span>
                      <ArrowRight className="w-5 h-5 text-[#9E8F75]" />
                      <span className="font-medium text-amber-400">QAPI Field: &quot;Current Value&quot;</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#110F0B] rounded border border-[rgba(201,168,76,0.22)]">
                      <span className="font-medium text-[#9E8F75]">Your Field: &quot;Date Collected&quot;</span>
                      <ArrowRight className="w-5 h-5 text-[#9E8F75]" />
                      <span className="font-medium text-amber-400">QAPI Field: &quot;Last Updated&quot;</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#110F0B] rounded border border-[rgba(201,168,76,0.22)]">
                      <span className="font-medium text-[#9E8F75]">Your Field: &quot;Department&quot;</span>
                      <ArrowRight className="w-5 h-5 text-[#9E8F75]" />
                      <span className="font-medium text-amber-400">QAPI Field: &quot;Department&quot;</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Templates */}
              <div className="bg-amber-900/20 p-6 rounded border-2 border-[rgba(201,168,76,0.22)]">
                <div className="flex items-start gap-4">
                  <Download className="w-8 h-8 text-amber-400 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#9E8F75] mb-2">Download Import Templates</h3>
                    <p className="text-[#9E8F75] mb-4">
                      Use our pre-formatted templates to ensure smooth data imports. Templates include all required fields and formatting.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Patient Satisfaction Template
                      </button>
                      <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Incident Report Template
                      </button>
                      <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Quality Metrics Template
                      </button>
                      <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Employee Feedback Template
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Integration Section */}
          {importType === 'integration' && (
            <div className="space-y-6">
              <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
                <h3 className="text-xl font-bold text-[#9E8F75] mb-4">Connect External Platforms</h3>
                <p className="text-[#9E8F75] mb-6">Set up automatic data sync from your favorite tools</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { 
                      name: 'SurveyMonkey', 
                      status: 'Available', 
                      desc: 'Import patient satisfaction surveys automatically',
                      icon: BarChart3,
                      color: 'green'
                    },
                    { 
                      name: 'Google Forms', 
                      status: 'Available', 
                      desc: 'Sync form responses for incidents and feedback',
                      icon: FileText,
                      color: 'blue'
                    },
                    { 
                      name: 'Typeform', 
                      status: 'Available', 
                      desc: 'Pull survey data and quality metrics',
                      icon: BarChart3,
                      color: 'purple'
                    },
                    { 
                      name: 'Microsoft Forms', 
                      status: 'Available', 
                      desc: 'Connect Office 365 survey data',
                      icon: FileText,
                      color: 'orange'
                    },
                    { 
                      name: 'Qualtrics', 
                      status: 'Coming Soon', 
                      desc: 'Enterprise survey platform integration',
                      icon: BarChart3,
                      color: 'gray'
                    },
                    { 
                      name: 'Custom API', 
                      status: 'Available', 
                      desc: 'Connect any system with our REST API',
                      icon: Link,
                      color: 'indigo'
                    },
                  ].map((integration, index) => (
                    <div key={index} className="p-4 border-2 border-[rgba(201,168,76,0.22)] rounded-lg hover:border-[rgba(201,168,76,0.22)] hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`p-2 bg-${integration.color}-100 rounded-lg`}>
                          <integration.icon className={`w-6 h-6 text-${integration.color}-600`} />
                        </div>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          integration.status === 'Available' ? 'bg-[rgba(201,168,76,0.04)] text-green-400' : 'bg-[rgba(201,168,76,0.04)] text-[#9E8F75]'
                        }`}>
                          {integration.status}
                        </span>
                      </div>
                      <h4 className="font-bold text-[#9E8F75] mb-1">{integration.name}</h4>
                      <p className="text-sm text-[#9E8F75] mb-3">{integration.desc}</p>
                      <button 
                        className={`w-full py-2 rounded-lg font-medium transition-all ${
                          integration.status === 'Available' 
                            ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                            : 'bg-[rgba(201,168,76,0.08)] text-[#9E8F75] cursor-not-allowed'
                        }`}
                        disabled={integration.status !== 'Available'}
                      >
                        {integration.status === 'Available' ? 'Connect Now' : 'Coming Soon'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* API Documentation */}
              <div className="bg-[rgba(201,168,76,0.08)] p-6 rounded border-2 border-[rgba(201,168,76,0.22)]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-600 rounded-lg">
                    <Link className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#9E8F75] mb-2">Custom API Integration</h3>
                    <p className="text-[#9E8F75] mb-4">
                      For Titan tier customers: Full API access to push data directly from your custom systems. Perfect for EHR integrations, proprietary tools, or enterprise data warehouses.
                    </p>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        View API Docs
                      </button>
                      <button className="px-4 py-2 bg-[#110F0B] hover:bg-[rgba(201,168,76,0.04)] text-[#9E8F75] border border-[rgba(201,168,76,0.22)] rounded-lg font-medium transition-all flex items-center gap-2">
                        <Key className="w-4 h-4" />
                        Get API Key
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Manual Entry Section */}
          {importType === 'manual' && (
            <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
              <h3 className="text-xl font-bold text-[#9E8F75] mb-4">Quick Data Entry</h3>
              <p className="text-[#9E8F75] mb-6">Manually enter data from external sources</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#9E8F75] mb-2">Data Type</label>
                  <select className="w-full px-4 py-2 border border-[rgba(201,168,76,0.22)] rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]">
                    <option>Patient Satisfaction Score</option>
                    <option>Safety Incident</option>
                    <option>Quality Metric</option>
                    <option>Employee Feedback</option>
                    <option>Clinical Outcome</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#9E8F75] mb-2">Source</label>
                    <input 
                      type="text" 
                      placeholder="e.g., SurveyMonkey Report #12345"
                      className="w-full px-4 py-2 border border-[rgba(201,168,76,0.22)] rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#9E8F75] mb-2">Date Collected</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-[rgba(201,168,76,0.22)] rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#9E8F75] mb-2">Department</label>
                  <select className="w-full px-4 py-2 border border-[rgba(201,168,76,0.22)] rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]">
                    <option>Emergency</option>
                    <option>ICU</option>
                    <option>Nursing</option>
                    <option>Radiology</option>
                    <option>Laboratory</option>
                    <option>All Departments</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#9E8F75] mb-2">Value/Score</label>
                    <input 
                      type="number" 
                      placeholder="85"
                      className="w-full px-4 py-2 border border-[rgba(201,168,76,0.22)] rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#9E8F75] mb-2">Target</label>
                    <input 
                      type="number" 
                      placeholder="90"
                      className="w-full px-4 py-2 border border-[rgba(201,168,76,0.22)] rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#9E8F75] mb-2">Unit</label>
                    <input 
                      type="text" 
                      placeholder="%"
                      className="w-full px-4 py-2 border border-[rgba(201,168,76,0.22)] rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#9E8F75] mb-2">Notes</label>
                  <textarea 
                    rows={4}
                    placeholder="Additional context or details about this data..."
                    className="w-full px-4 py-2 border border-[rgba(201,168,76,0.22)] rounded-lg focus:ring-2 focus:ring-[rgba(201,168,76,0.45)]"
                  />
                </div>

                <div className="flex gap-3">
                  <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Save Data
                  </button>
                  <button className="px-6 py-3 bg-[#110F0B] hover:bg-[rgba(201,168,76,0.04)] text-[#9E8F75] border border-[rgba(201,168,76,0.22)] rounded-lg font-medium transition-all">
                    Reset Form
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Recent Imports */}
          <div className="bg-[#110F0B] p-6 rounded shadow-md border border-[rgba(201,168,76,0.22)]">
            <h3 className="text-xl font-bold text-[#9E8F75] mb-4">Recent Imports</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#110F0B]">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#9E8F75]">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#9E8F75]">Source</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#9E8F75]">Data Type</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-[#9E8F75]">Records</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-[#9E8F75]">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#9E8F75]">Imported By</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: '2026-01-06', source: 'SurveyMonkey', type: 'Patient Satisfaction', records: 145, status: 'Complete', user: 'Admin User' },
                    { date: '2026-01-05', source: 'Excel Upload', type: 'Safety Incidents', records: 8, status: 'Complete', user: 'Quality Manager' },
                    { date: '2026-01-03', source: 'Manual Entry', type: 'Quality Metrics', records: 1, status: 'Complete', user: 'Sarah Johnson' },
                    { date: '2026-01-02', source: 'Google Forms', type: 'Employee Feedback', records: 52, status: 'Complete', user: 'HR Director' },
                  ].map((import_, index) => (
                    <tr key={index} className="border-b border-[rgba(201,168,76,0.22)] hover:bg-[#110F0B]">
                      <td className="py-3 px-4 text-sm text-[#9E8F75]">{import_.date}</td>
                      <td className="py-3 px-4 text-sm font-medium text-[#9E8F75]">{import_.source}</td>
                      <td className="py-3 px-4 text-sm text-[#9E8F75]">{import_.type}</td>
                      <td className="text-center py-3 px-4 text-sm font-semibold text-[#9E8F75]">{import_.records}</td>
                      <td className="text-center py-3 px-4">
                        <span className="px-3 py-1 bg-[rgba(201,168,76,0.04)] text-green-400 rounded-full text-xs font-semibold">
                          {import_.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-[#9E8F75]">{import_.user}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



