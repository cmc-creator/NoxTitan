// Central Data Integration Hub - All systems pull from here
// This ensures consistency across QAPI, HR Analytics, Reports, Scheduling, etc.

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  department: string;
  position: string;
  hireDate: string;
  status: 'active' | 'inactive' | 'leave';
  email: string;
  phone: string;
  certifications?: string[];
  performanceScore?: number;
}

export interface Shift {
  id: string;
  employeeId: string;
  date: string;
  startTime: string;
  endTime: string;
  department: string;
  status: 'scheduled' | 'completed' | 'missed' | 'late';
  hoursWorked?: number;
}

export interface TimeOffRequest {
  id: string;
  employeeId: string;
  type: 'PTO' | 'SICK' | 'FMLA' | 'BEREAVEMENT' | 'HOLIDAY';
  startDate: string;
  endDate: string;
  status: 'pending' | 'approved' | 'denied';
  reason?: string;
  approvedBy?: string;
  hours: number;
}

export interface Incident {
  id: string;
  date: string;
  type: 'FALL' | 'MEDICATION_ERROR' | 'PRESSURE_ULCER' | 'INFECTION' | 'EQUIPMENT' | 'WORKPLACE_INJURY' | 'OTHER';
  severity: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';
  status: 'REPORTED' | 'INVESTIGATING' | 'ACTION_PLAN' | 'RESOLVED';
  department: string;
  description: string;
  reportedBy: string;
  assignedTo: string;
  rootCause?: string;
  correctiveAction?: string;
  dueDate?: string;
  employeeId?: string; // Link to employee if workplace injury
  patientId?: string; // Link to patient if patient incident
}

export interface QualityMetric {
  id: string;
  name: string;
  category: 'CLINICAL' | 'SAFETY' | 'SATISFACTION' | 'OPERATIONAL' | 'HR' | 'FINANCIAL';
  currentValue: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
  benchmark?: number;
  dataSource: string; // Which system this comes from
}

export interface ComplianceItem {
  id: string;
  employeeId: string;
  type: 'CERTIFICATION' | 'TRAINING' | 'LICENSE' | 'VACCINATION' | 'BACKGROUND_CHECK';
  name: string;
  status: 'CURRENT' | 'EXPIRING' | 'EXPIRED' | 'PENDING';
  issueDate: string;
  expirationDate: string;
  renewalRequired: boolean;
}

export interface PerformanceReview {
  id: string;
  employeeId: string;
  reviewDate: string;
  reviewerId: string;
  overallScore: number;
  categories: {
    name: string;
    score: number;
    comments: string;
  }[];
  goals: string[];
  status: 'draft' | 'completed' | 'acknowledged';
}

// Central Data Store - In production, this would be your database
class DataIntegrationHub {
  private static instance: DataIntegrationHub;

  private constructor() {}

  public static getInstance(): DataIntegrationHub {
    if (!DataIntegrationHub.instance) {
      DataIntegrationHub.instance = new DataIntegrationHub();
    }
    return DataIntegrationHub.instance;
  }

  // ===== EMPLOYEE DATA =====
  getEmployees(): Employee[] {
    // This would query your database in production
    // For now, returning mock data that's consistent across all systems
    return [
      {
        id: 'EMP001',
        firstName: 'Sarah',
        lastName: 'Johnson',
        department: 'Emergency',
        position: 'RN - Emergency',
        hireDate: '2020-03-15',
        status: 'active',
        email: 'sarah.johnson@hospital.org',
        phone: '555-0101',
        certifications: ['ACLS', 'PALS', 'BLS'],
        performanceScore: 95,
      },
      {
        id: 'EMP002',
        firstName: 'Michael',
        lastName: 'Chen',
        department: 'ICU',
        position: 'RN - Critical Care',
        hireDate: '2019-06-01',
        status: 'active',
        email: 'michael.chen@hospital.org',
        phone: '555-0102',
        certifications: ['CCRN', 'ACLS', 'BLS'],
        performanceScore: 98,
      },
      // Add more as needed
    ];
  }

  getEmployeeById(id: string): Employee | undefined {
    return this.getEmployees().find(emp => emp.id === id);
  }

  getEmployeesByDepartment(department: string): Employee[] {
    return this.getEmployees().filter(emp => emp.department === department);
  }

  // ===== SCHEDULING DATA =====
  getShifts(startDate?: string, endDate?: string): Shift[] {
    // Returns shifts, filtered by date if provided
    const allShifts: Shift[] = [
      {
        id: 'SHIFT001',
        employeeId: 'EMP001',
        date: '2026-01-06',
        startTime: '07:00',
        endTime: '19:00',
        department: 'Emergency',
        status: 'scheduled',
        hoursWorked: 12,
      },
      // Add more shifts
    ];

    if (startDate && endDate) {
      return allShifts.filter(shift => shift.date >= startDate && shift.date <= endDate);
    }

    return allShifts;
  }

  getShiftsByEmployee(employeeId: string): Shift[] {
    return this.getShifts().filter(shift => shift.employeeId === employeeId);
  }

  // ===== TIME OFF DATA =====
  getTimeOffRequests(status?: TimeOffRequest['status']): TimeOffRequest[] {
    const allRequests: TimeOffRequest[] = [
      {
        id: 'TO001',
        employeeId: 'EMP001',
        type: 'PTO',
        startDate: '2026-01-15',
        endDate: '2026-01-17',
        status: 'pending',
        reason: 'Family vacation',
        hours: 24,
      },
      {
        id: 'TO002',
        employeeId: 'EMP002',
        type: 'SICK',
        startDate: '2026-01-05',
        endDate: '2026-01-05',
        status: 'approved',
        approvedBy: 'MGR001',
        hours: 12,
      },
      // Add more
    ];

    if (status) {
      return allRequests.filter(req => req.status === status);
    }

    return allRequests;
  }

  // ===== INCIDENT DATA =====
  getIncidents(status?: Incident['status']): Incident[] {
    const allIncidents: Incident[] = [
      {
        id: 'INC-001',
        date: '2025-12-15',
        type: 'FALL',
        severity: 'MODERATE',
        status: 'INVESTIGATING',
        department: 'Medical-Surgical',
        description: 'Patient fall in room 304 during ambulation',
        reportedBy: 'Sarah Johnson',
        assignedTo: 'Quality Team',
        dueDate: '2026-01-15',
      },
      {
        id: 'INC-002',
        date: '2025-12-20',
        type: 'MEDICATION_ERROR',
        severity: 'HIGH',
        status: 'ACTION_PLAN',
        department: 'Emergency',
        description: 'Wrong dose administered - caught before harm',
        reportedBy: 'Michael Chen',
        assignedTo: 'Pharmacy Director',
        rootCause: 'Verbal order miscommunication',
        correctiveAction: 'Implement barcode scanning verification',
        dueDate: '2026-01-30',
      },
      // Add more incidents
    ];

    if (status) {
      return allIncidents.filter(inc => inc.status === status);
    }

    return allIncidents;
  }

  // ===== QUALITY METRICS =====
  getQualityMetrics(category?: QualityMetric['category']): QualityMetric[] {
    const allMetrics: QualityMetric[] = [
      {
        id: 'QM001',
        name: 'Patient Fall Rate',
        category: 'SAFETY',
        currentValue: 2.8,
        target: 3.5,
        unit: 'per 1000 patient days',
        trend: 'down',
        lastUpdated: '2026-01-05',
        benchmark: 3.2,
        dataSource: 'Incident Management System',
      },
      {
        id: 'QM002',
        name: 'Medication Error Rate',
        category: 'SAFETY',
        currentValue: 4.2,
        target: 5.0,
        unit: 'per 1000 doses',
        trend: 'down',
        lastUpdated: '2026-01-05',
        benchmark: 4.5,
        dataSource: 'Pharmacy System',
      },
      {
        id: 'QM003',
        name: 'Staff Turnover Rate',
        category: 'HR',
        currentValue: 12.5,
        target: 15.0,
        unit: '%',
        trend: 'down',
        lastUpdated: '2026-01-05',
        benchmark: 18.0,
        dataSource: 'HR Analytics',
      },
      {
        id: 'QM004',
        name: 'Absenteeism Rate',
        category: 'HR',
        currentValue: 4.2,
        target: 5.0,
        unit: '%',
        trend: 'stable',
        lastUpdated: '2026-01-05',
        benchmark: 5.5,
        dataSource: 'Time & Attendance',
      },
      // Add more metrics
    ];

    if (category) {
      return allMetrics.filter(metric => metric.category === category);
    }

    return allMetrics;
  }

  // ===== COMPLIANCE DATA =====
  getComplianceItems(status?: ComplianceItem['status']): ComplianceItem[] {
    const allItems: ComplianceItem[] = [
      {
        id: 'COMP001',
        employeeId: 'EMP001',
        type: 'CERTIFICATION',
        name: 'ACLS',
        status: 'CURRENT',
        issueDate: '2024-01-15',
        expirationDate: '2026-01-15',
        renewalRequired: true,
      },
      {
        id: 'COMP002',
        employeeId: 'EMP001',
        type: 'LICENSE',
        name: 'RN License',
        status: 'CURRENT',
        issueDate: '2020-01-01',
        expirationDate: '2026-12-31',
        renewalRequired: true,
      },
      // Add more
    ];

    if (status) {
      return allItems.filter(item => item.status === status);
    }

    return allItems;
  }

  getExpiringCompliance(daysAhead: number = 30): ComplianceItem[] {
    const today = new Date();
    const futureDate = new Date(today.getTime() + daysAhead * 24 * 60 * 60 * 1000);
    
    return this.getComplianceItems().filter(item => {
      const expDate = new Date(item.expirationDate);
      return expDate > today && expDate <= futureDate;
    });
  }

  // ===== ANALYTICS & CALCULATIONS =====
  calculateDepartmentMetrics(department: string) {
    const employees = this.getEmployeesByDepartment(department);
    const shifts = this.getShifts();
    const incidents = this.getIncidents();

    const deptShifts = shifts.filter(s => s.department === department);
    const deptIncidents = incidents.filter(i => i.department === department);

    return {
      totalEmployees: employees.length,
      activeEmployees: employees.filter(e => e.status === 'active').length,
      avgPerformanceScore: employees.reduce((sum, e) => sum + (e.performanceScore || 0), 0) / employees.length,
      totalShifts: deptShifts.length,
      completedShifts: deptShifts.filter(s => s.status === 'completed').length,
      missedShifts: deptShifts.filter(s => s.status === 'missed').length,
      incidentCount: deptIncidents.length,
      criticalIncidents: deptIncidents.filter(i => i.severity === 'CRITICAL').length,
    };
  }

  calculateAbsenteeismRate(employeeId?: string): number {
    const shifts = employeeId ? this.getShiftsByEmployee(employeeId) : this.getShifts();
    const totalShifts = shifts.length;
    const missedShifts = shifts.filter(s => s.status === 'missed').length;
    
    return totalShifts > 0 ? (missedShifts / totalShifts) * 100 : 0;
  }

  calculateTurnoverRate(department?: string): number {
    const employees = department ? this.getEmployeesByDepartment(department) : this.getEmployees();
    const inactiveCount = employees.filter(e => e.status === 'inactive').length;
    const totalCount = employees.length;
    
    return totalCount > 0 ? (inactiveCount / totalCount) * 100 : 0;
  }

  // ===== CROSS-SYSTEM QUERIES =====
  getEmployeeRiskProfile(employeeId: string) {
    const employee = this.getEmployeeById(employeeId);
    const shifts = this.getShiftsByEmployee(employeeId);
    const timeOff = this.getTimeOffRequests().filter(req => req.employeeId === employeeId);
    const compliance = this.getComplianceItems().filter(item => item.employeeId === employeeId);
    const incidents = this.getIncidents().filter(inc => inc.employeeId === employeeId);

    const missedShifts = shifts.filter(s => s.status === 'missed').length;
    const lateShifts = shifts.filter(s => s.status === 'late').length;
    const expiredCompliance = compliance.filter(c => c.status === 'EXPIRED').length;
    const expiringCompliance = compliance.filter(c => c.status === 'EXPIRING').length;
    const totalIncidents = incidents.length;

    let riskScore = 0;
    if (missedShifts > 3) riskScore += 20;
    if (lateShifts > 5) riskScore += 15;
    if (expiredCompliance > 0) riskScore += 25;
    if (expiringCompliance > 0) riskScore += 10;
    if (totalIncidents > 2) riskScore += 20;
    if (employee?.performanceScore && employee.performanceScore < 70) riskScore += 30;

    return {
      employee,
      riskScore,
      riskLevel: riskScore >= 50 ? 'HIGH' : riskScore >= 25 ? 'MODERATE' : 'LOW',
      flags: {
        missedShifts,
        lateShifts,
        expiredCompliance,
        expiringCompliance,
        incidents: totalIncidents,
      },
      recommendations: this.generateEmployeeRecommendations(riskScore, {
        missedShifts,
        lateShifts,
        expiredCompliance,
        expiringCompliance,
        totalIncidents,
      }),
    };
  }

  private generateEmployeeRecommendations(riskScore: number, flags: any): string[] {
    const recommendations: string[] = [];

    if (flags.missedShifts > 3) {
      recommendations.push('Schedule attendance counseling session');
    }
    if (flags.expiredCompliance > 0) {
      recommendations.push('Immediate compliance renewal required - may affect scheduling');
    }
    if (flags.expiringCompliance > 0) {
      recommendations.push('Schedule compliance renewal training');
    }
    if (flags.totalIncidents > 2) {
      recommendations.push('Review incident patterns and provide additional training');
    }
    if (riskScore >= 50) {
      recommendations.push('Create performance improvement plan');
    }

    return recommendations;
  }

  // ===== DASHBOARD DATA AGGREGATION =====
  getDashboardData() {
    const employees = this.getEmployees();
    const shifts = this.getShifts();
    const timeOff = this.getTimeOffRequests();
    const incidents = this.getIncidents();
    const metrics = this.getQualityMetrics();
    const compliance = this.getComplianceItems();

    return {
      employees: {
        total: employees.length,
        active: employees.filter(e => e.status === 'active').length,
        onLeave: employees.filter(e => e.status === 'leave').length,
        avgPerformance: employees.reduce((sum, e) => sum + (e.performanceScore || 0), 0) / employees.length,
      },
      scheduling: {
        totalShifts: shifts.length,
        completedShifts: shifts.filter(s => s.status === 'completed').length,
        upcomingShifts: shifts.filter(s => s.status === 'scheduled').length,
        missedShifts: shifts.filter(s => s.status === 'missed').length,
        coverageRate: ((shifts.filter(s => s.status === 'completed').length / shifts.length) * 100).toFixed(1),
      },
      timeOff: {
        total: timeOff.length,
        pending: timeOff.filter(r => r.status === 'pending').length,
        approved: timeOff.filter(r => r.status === 'approved').length,
        denied: timeOff.filter(r => r.status === 'denied').length,
      },
      quality: {
        totalIncidents: incidents.length,
        openIncidents: incidents.filter(i => i.status !== 'RESOLVED').length,
        criticalIncidents: incidents.filter(i => i.severity === 'CRITICAL').length,
        metricsOnTarget: metrics.filter(m => m.currentValue <= m.target).length,
        totalMetrics: metrics.length,
      },
      compliance: {
        total: compliance.length,
        current: compliance.filter(c => c.status === 'CURRENT').length,
        expiring: compliance.filter(c => c.status === 'EXPIRING').length,
        expired: compliance.filter(c => c.status === 'EXPIRED').length,
        complianceRate: ((compliance.filter(c => c.status === 'CURRENT').length / compliance.length) * 100).toFixed(1),
      },
    };
  }

  // ===== REPORT GENERATION =====
  generateExecutiveReport(dateRange: { start: string; end: string }) {
    const dashboardData = this.getDashboardData();
    const incidents = this.getIncidents();
    const metrics = this.getQualityMetrics();

    return {
      period: dateRange,
      generatedAt: new Date().toISOString(),
      summary: dashboardData,
      incidentTrend: this.calculateIncidentTrend(incidents),
      qualityPerformance: this.calculateQualityPerformance(metrics),
      departmentScores: this.calculateDepartmentScores(),
      actionItems: this.generateActionItems(),
    };
  }

  private calculateIncidentTrend(incidents: Incident[]) {
    // Group incidents by month and calculate trend
    const monthlyData: { [key: string]: number } = {};
    
    incidents.forEach(incident => {
      const month = incident.date.substring(0, 7); // YYYY-MM
      monthlyData[month] = (monthlyData[month] || 0) + 1;
    });

    const months = Object.keys(monthlyData).sort();
    const values = months.map(m => monthlyData[m]);
    
    const trend = values.length >= 2 
      ? ((values[values.length - 1] - values[0]) / values[0]) * 100
      : 0;

    return {
      months,
      values,
      trend: trend > 0 ? 'increasing' : trend < 0 ? 'decreasing' : 'stable',
      percentChange: Math.abs(trend).toFixed(1),
    };
  }

  private calculateQualityPerformance(metrics: QualityMetric[]) {
    return metrics.map(metric => ({
      name: metric.name,
      performance: ((metric.currentValue / metric.target) * 100).toFixed(1),
      status: metric.currentValue <= metric.target ? 'on-target' : 'needs-improvement',
      trend: metric.trend,
    }));
  }

  private calculateDepartmentScores() {
    const departments = ['Emergency', 'ICU', 'Nursing', 'Radiology', 'Laboratory'];
    
    return departments.map(dept => {
      const metrics = this.calculateDepartmentMetrics(dept);
      const overallScore = (
        (metrics.activeEmployees / metrics.totalEmployees) * 25 +
        (metrics.avgPerformanceScore / 100) * 25 +
        (metrics.completedShifts / metrics.totalShifts) * 25 +
        ((1 - metrics.criticalIncidents / Math.max(metrics.incidentCount, 1)) * 25)
      );

      return {
        department: dept,
        safetyScore: 95 + Math.random() * 5,
        qualityScore: 93 + Math.random() * 7,
        complianceScore: 94 + Math.random() * 6,
        overallScore: overallScore.toFixed(1),
        grade: overallScore >= 95 ? 'A+' : overallScore >= 90 ? 'A' : overallScore >= 85 ? 'B+' : 'B',
      };
    });
  }

  private generateActionItems() {
    const incidents = this.getIncidents();
    const metrics = this.getQualityMetrics();
    const compliance = this.getComplianceItems();

    const actionItems: Array<{ priority: string; action: string; reason: string }> = [];

    // High priority incidents
    const criticalIncidents = incidents.filter(i => i.severity === 'CRITICAL' && i.status !== 'RESOLVED');
    if (criticalIncidents.length > 0) {
      actionItems.push({
        priority: 'HIGH',
        action: `Address ${criticalIncidents.length} critical incident(s)`,
        reason: 'Patient safety concern requiring immediate attention',
      });
    }

    // Metrics not meeting targets
    const underperformingMetrics = metrics.filter(m => m.currentValue > m.target);
    if (underperformingMetrics.length > 0) {
      actionItems.push({
        priority: 'MEDIUM',
        action: `Improve ${underperformingMetrics.length} quality metric(s)`,
        reason: 'Performance below target - implement improvement initiatives',
      });
    }

    // Expired compliance items
    const expiredItems = compliance.filter(c => c.status === 'EXPIRED');
    if (expiredItems.length > 0) {
      actionItems.push({
        priority: 'HIGH',
        action: `Renew ${expiredItems.length} expired certification(s)`,
        reason: 'Regulatory compliance requirement - may affect staff scheduling',
      });
    }

    return actionItems;
  }

  // ===== REAL-TIME NOTIFICATIONS =====
  getNotifications() {
    const notifications: Array<{
      id: string;
      type: 'alert' | 'warning' | 'info';
      title: string;
      message: string;
      timestamp: string;
      link?: string;
    }> = [];

    // Check for urgent items across all systems
    const pendingTimeOff = this.getTimeOffRequests('pending');
    if (pendingTimeOff.length > 5) {
      notifications.push({
        id: 'NOTIF001',
        type: 'warning',
        title: 'Pending Time Off Requests',
        message: `${pendingTimeOff.length} time off requests awaiting approval`,
        timestamp: new Date().toISOString(),
        link: '/time-off',
      });
    }

    const openIncidents = this.getIncidents().filter(i => i.status !== 'RESOLVED');
    if (openIncidents.length > 0) {
      notifications.push({
        id: 'NOTIF002',
        type: 'alert',
        title: 'Open Incidents',
        message: `${openIncidents.length} incidents requiring attention`,
        timestamp: new Date().toISOString(),
        link: '/qapi',
      });
    }

    const expiringCompliance = this.getExpiringCompliance(30);
    if (expiringCompliance.length > 0) {
      notifications.push({
        id: 'NOTIF003',
        type: 'warning',
        title: 'Expiring Certifications',
        message: `${expiringCompliance.length} certifications expiring within 30 days`,
        timestamp: new Date().toISOString(),
        link: '/compliance',
      });
    }

    return notifications;
  }
}

// Export singleton instance
export const dataHub = DataIntegrationHub.getInstance();

// Export helper hooks for React components
export function useDataHub() {
  return dataHub;
}

// Export helper for getting integrated dashboard data
export function useIntegratedDashboard() {
  const hub = useDataHub();
  return hub.getDashboardData();
}

// Export helper for cross-system search
export function searchAcrossSystems(query: string) {
  const hub = dataHub;
  const results: any[] = [];

  // Search employees
  const employees = hub.getEmployees().filter(e => 
    `${e.firstName} ${e.lastName}`.toLowerCase().includes(query.toLowerCase()) ||
    e.department.toLowerCase().includes(query.toLowerCase())
  );
  results.push(...employees.map(e => ({ type: 'employee', data: e })));

  // Search incidents
  const incidents = hub.getIncidents().filter(i => 
    i.description.toLowerCase().includes(query.toLowerCase()) ||
    i.department.toLowerCase().includes(query.toLowerCase())
  );
  results.push(...incidents.map(i => ({ type: 'incident', data: i })));

  return results;
}
