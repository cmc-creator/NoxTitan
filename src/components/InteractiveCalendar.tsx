"use client";

import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, Event as CalendarEvent } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import { addHours } from "date-fns/addHours";
import { Clock, User, AlertTriangle, Settings, Sparkles, ShoppingBag, Copy, Coffee, DollarSign, TrendingUp, Zap, CheckCircle, XCircle, Trophy, FileText, Shield } from "lucide-react";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });
const DnDCalendar = withDragAndDrop(Calendar);

interface ShiftEvent extends CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  employeeName?: string;
  employeeId?: string;
  location?: string;
  notes?: string;
  color?: string;
  isOvertime?: boolean;
  isCallout?: boolean; // Mark shift as needing coverage
  claimedViaMarketplace?: boolean; // Was this shift claimed via marketplace bonus?
  marketplaceBonus?: number; // Bonus amount if claimed via marketplace
}

interface InteractiveCalendarProps {
  showSettings?: boolean;
  setShowSettings?: (show: boolean) => void;
}

export default function InteractiveCalendar({ showSettings: externalShowSettings, setShowSettings: externalSetShowSettings }: InteractiveCalendarProps = {}) {
  const [draggedShift, setDraggedShift] = useState<ShiftEvent | null>(null);
  
  // Helper to create dates for this week
  const getThisWeekDate = (dayOffset: number, hour: number) => {
    const date = new Date();
    const currentDay = date.getDay(); // 0 = Sunday
    const monday = new Date(date);
    monday.setDate(date.getDate() - currentDay + (currentDay === 0 ? -6 : 1)); // Get Monday
    const targetDate = new Date(monday);
    targetDate.setDate(monday.getDate() + dayOffset);
    targetDate.setHours(hour, 0, 0, 0);
    return targetDate;
  };

  const [events, setEvents] = useState<ShiftEvent[]>([
    // Monday - Nursing Day Shift
    { id: 1, title: "Day Shift - Nursing", start: getThisWeekDate(0, 7), end: getThisWeekDate(0, 15), employeeName: "Sarah Martinez", employeeId: "1", location: "Floor 3", color: "#3b82f6", isOvertime: false },
    { id: 2, title: "Day Shift - Nursing", start: getThisWeekDate(0, 7), end: getThisWeekDate(0, 15), employeeName: "Daniel Garcia", employeeId: "12", location: "Floor 2", color: "#3b82f6", isOvertime: false },
    { id: 3, title: "Evening Shift - Nursing", start: getThisWeekDate(0, 15), end: getThisWeekDate(0, 23), employeeName: "Angela Rodriguez", employeeId: "7", location: "Floor 3", color: "#8b5cf6", isOvertime: false },
    { id: 4, title: "Night Shift - Nursing", start: getThisWeekDate(0, 23), end: getThisWeekDate(1, 7), employeeName: "Marcus Chen", employeeId: "2", location: "Floor 2", color: "#6366f1", isOvertime: false },
    
    // Monday - Emergency
    { id: 5, title: "Day Shift - Emergency", start: getThisWeekDate(0, 6), end: getThisWeekDate(0, 18), employeeName: "Jennifer Thompson", employeeId: "3", location: "ER", color: "#ef4444", isOvertime: false },
    { id: 6, title: "Day Shift - Emergency", start: getThisWeekDate(0, 8), end: getThisWeekDate(0, 16), employeeName: "Michelle Brooks", employeeId: "11", location: "ER", color: "#ef4444", isOvertime: false },
    { id: 7, title: "Night Shift - Emergency", start: getThisWeekDate(0, 18), end: getThisWeekDate(1, 6), employeeName: "James Wilson", employeeId: "6", location: "ER", color: "#dc2626", isOvertime: false },
    
    // Tuesday - Radiology
    { id: 8, title: "Day Shift - Radiology", start: getThisWeekDate(1, 8), end: getThisWeekDate(1, 16), employeeName: "David Kim", employeeId: "4", location: "Imaging", color: "#10b981", isOvertime: false },
    { id: 9, title: "Evening Shift - Radiology", start: getThisWeekDate(1, 16), end: getThisWeekDate(2, 0), employeeName: "Lisa Anderson", employeeId: "9", location: "Imaging", color: "#059669", isOvertime: false, isCallout: true },
    { id: 10, title: "Night Shift - Radiology", start: getThisWeekDate(1, 23), end: getThisWeekDate(2, 7), employeeName: "Kevin Martinez", employeeId: "14", location: "Imaging", color: "#047857", isOvertime: false },
    
    // Wednesday - Laboratory
    { id: 11, title: "Day Shift - Lab", start: getThisWeekDate(2, 7), end: getThisWeekDate(2, 15), employeeName: "Nicole Johnson", employeeId: "15", location: "Lab A", color: "#f59e0b", isOvertime: false },
    { id: 12, title: "Evening Shift - Lab", start: getThisWeekDate(2, 15), end: getThisWeekDate(2, 23), employeeName: "Rachel Foster", employeeId: "5", location: "Lab A", color: "#d97706", isOvertime: false },
    { id: 13, title: "Night Shift - Lab", start: getThisWeekDate(2, 23), end: getThisWeekDate(3, 7), employeeName: "Christopher Lee", employeeId: "10", location: "Lab B", color: "#b45309", isOvertime: false },
    
    // Thursday - Pharmacy
    { id: 14, title: "Day Shift - Pharmacy", start: getThisWeekDate(3, 8), end: getThisWeekDate(3, 16), employeeName: "Robert Taylor", employeeId: "8", location: "Main Pharmacy", color: "#8b5cf6", isOvertime: false },
    { id: 15, title: "Evening Shift - Pharmacy", start: getThisWeekDate(3, 16), end: getThisWeekDate(4, 0), employeeName: "Amanda White", employeeId: "13", location: "Main Pharmacy", color: "#7c3aed", isOvertime: false },
    
    // Friday - Full Coverage
    { id: 16, title: "Day Shift - Nursing", start: getThisWeekDate(4, 7), end: getThisWeekDate(4, 15), employeeName: "Sarah Martinez", employeeId: "1", location: "Floor 3", color: "#3b82f6", isOvertime: false },
    { id: 17, title: "Day Shift - Emergency", start: getThisWeekDate(4, 6), end: getThisWeekDate(4, 18), employeeName: "Jennifer Thompson", employeeId: "3", location: "ER", color: "#ef4444", isOvertime: false },
    { id: 18, title: "Day Shift - Lab", start: getThisWeekDate(4, 7), end: getThisWeekDate(4, 15), employeeName: "Nicole Johnson", employeeId: "15", location: "Lab A", color: "#f59e0b", isOvertime: false },
    { id: 19, title: "Evening Shift - Nursing", start: getThisWeekDate(4, 15), end: getThisWeekDate(4, 23), employeeName: "Angela Rodriguez", employeeId: "7", location: "Floor 2", color: "#8b5cf6", isOvertime: false },
    { id: 20, title: "Night Shift - Emergency", start: getThisWeekDate(4, 18), end: getThisWeekDate(5, 6), employeeName: "James Wilson", employeeId: "6", location: "ER", color: "#dc2626", isOvertime: false },
    
    // Saturday - Weekend Coverage
    { id: 21, title: "Day Shift - Nursing", start: getThisWeekDate(5, 7), end: getThisWeekDate(5, 15), employeeName: "Daniel Garcia", employeeId: "12", location: "Floor 3", color: "#3b82f6", isOvertime: false },
    { id: 22, title: "Day Shift - Emergency", start: getThisWeekDate(5, 8), end: getThisWeekDate(5, 16), employeeName: "Michelle Brooks", employeeId: "11", location: "ER", color: "#ef4444", isOvertime: false },
    { id: 23, title: "Night Shift - Nursing", start: getThisWeekDate(5, 23), end: getThisWeekDate(6, 7), employeeName: "Marcus Chen", employeeId: "2", location: "Floor 2", color: "#6366f1", isOvertime: false },
    
    // Sunday - Weekend Coverage
    { id: 24, title: "Day Shift - Lab", start: getThisWeekDate(6, 7), end: getThisWeekDate(6, 15), employeeName: "Nicole Johnson", employeeId: "15", location: "Lab A", color: "#f59e0b", isOvertime: false },
    { id: 25, title: "Evening Shift - Lab", start: getThisWeekDate(6, 15), end: getThisWeekDate(6, 23), employeeName: "Rachel Foster", employeeId: "5", location: "Lab B", color: "#d97706", isOvertime: false },
    { id: 26, title: "Night Shift - Emergency", start: getThisWeekDate(6, 18), end: getThisWeekDate(0, 6), employeeName: "James Wilson", employeeId: "6", location: "ER", color: "#dc2626", isOvertime: false },
    
    // VARIED SHIFT LENGTHS - Demonstrating Flexibility
    // 14-hour shift (Double shift coverage)
    { id: 27, title: "Extended Shift - Nursing", start: getThisWeekDate(1, 6), end: getThisWeekDate(1, 20), employeeName: "Sarah Martinez", employeeId: "1", location: "Floor 3", color: "#3b82f6", isOvertime: true, notes: "14hr double shift" },
    
    // 12-hour shifts (Standard ER/ICU)
    { id: 28, title: "12hr Day - Emergency", start: getThisWeekDate(2, 7), end: getThisWeekDate(2, 19), employeeName: "Jennifer Thompson", employeeId: "3", location: "ER", color: "#ef4444", isOvertime: false },
    { id: 29, title: "12hr Night - Emergency", start: getThisWeekDate(3, 19), end: getThisWeekDate(4, 7), employeeName: "James Wilson", employeeId: "6", location: "ER", color: "#dc2626", isOvertime: false },
    
    // 10-hour shifts (Four-day workweek model)
    { id: 30, title: "10hr Shift - Radiology", start: getThisWeekDate(3, 8), end: getThisWeekDate(3, 18), employeeName: "David Kim", employeeId: "4", location: "Imaging", color: "#10b981", isOvertime: false },
    { id: 31, title: "10hr Shift - Lab", start: getThisWeekDate(4, 8), end: getThisWeekDate(4, 18), employeeName: "Christopher Lee", employeeId: "10", location: "Lab B", color: "#b45309", isOvertime: false },
    
    // 4-hour part-time shifts (Students, PRN, relief coverage)
    { id: 32, title: "Part-Time - Pharmacy", start: getThisWeekDate(1, 14), end: getThisWeekDate(1, 18), employeeName: "Amanda White", employeeId: "13", location: "Main Pharmacy", color: "#7c3aed", isOvertime: false, notes: "PRN coverage" },
    { id: 33, title: "Part-Time - Nursing", start: getThisWeekDate(2, 10), end: getThisWeekDate(2, 14), employeeName: "Daniel Garcia", employeeId: "12", location: "Floor 2", color: "#3b82f6", isOvertime: false, notes: "Relief staff" },
    { id: 34, title: "Part-Time - Lab", start: getThisWeekDate(5, 16), end: getThisWeekDate(5, 20), employeeName: "Nicole Johnson", employeeId: "15", location: "Lab A", color: "#f59e0b", isOvertime: false, notes: "Evening relief" },
  ]);
  
  const [employeeSearch, setEmployeeSearch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedShift, setSelectedShift] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setEmployeesPerPage] = useState(20);
  const [viewMode, setViewMode] = useState<'calendar' | 'grid'>('grid'); // Default to grid view
  const [showStarAnimation, setShowStarAnimation] = useState(true); // Star employee animation toggle
  const [tracerColor, setTracerColor] = useState('#ffffff'); // Tracer color customization
  const [localShowSettings, setLocalShowSettings] = useState(false); // Settings modal toggle (local)
  const showSettings = externalShowSettings !== undefined ? externalShowSettings : localShowSettings;
  const setShowSettings = externalSetShowSettings || setLocalShowSettings;
  const [showAIScheduler, setShowAIScheduler] = useState(false);
  const [showMarketplace, setShowMarketplace] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showBonusOffer, setShowBonusOffer] = useState(false);
  const [selectedShiftForBonus, setSelectedShiftForBonus] = useState<ShiftEvent | null>(null);
  const [marketplacePostedShifts, setMarketplacePostedShifts] = useState<Array<{shift: ShiftEvent; bonus: number; timestamp: Date}>>([]);
  const [showMarketplaceConfirmation, setShowMarketplaceConfirmation] = useState(false);
  const [showOraclePanel, setShowOraclePanel] = useState(true);
  const [showHRAlerts, setShowHRAlerts] = useState(true);
  const [showIntegrationDashboard, setShowIntegrationDashboard] = useState(false); // Oracle insights always visible
  const [conflicts, setConflicts] = useState<Array<{type: string; message: string; severity: 'error' | 'warning'}>>([]);
  const [laborCost, setLaborCost] = useState({ current: 0, projected: 0, budget: 15000, savings: 0 });
  
  // New Scheduler Features
  const [shiftSwapRequests, setShiftSwapRequests] = useState<Array<{id: number; fromEmployee: string; toEmployee: string; shift: ShiftEvent; status: 'pending' | 'approved' | 'denied'; timestamp: Date}>>([]);
  const [timeOffRequests, setTimeOffRequests] = useState<Array<{id: number; employeeId: string; employeeName: string; startDate: Date; endDate: Date; reason: string; status: 'pending' | 'approved' | 'denied'}>>([]);
  const [copiedWeek, setCopiedWeek] = useState<ShiftEvent[] | null>(null);
  const [showConflictPanel, setShowConflictPanel] = useState(true);
  const [detectedConflicts, setDetectedConflicts] = useState<Array<{type: string; message: string; severity: 'high' | 'medium' | 'low'; shiftId?: number}>>([]);
  const [showSkillsFilter, setShowSkillsFilter] = useState(false);
  const [weatherData, setWeatherData] = useState({ temp: 72, condition: 'Sunny', icon: '☀️' });
  const [overtimeWarnings, setOvertimeWarnings] = useState<Array<{employeeId: string; employeeName: string; hours: number}>>([]);
  const [budgetBurnRate, setBudgetBurnRate] = useState({ spent: 8250, budget: 15000, percentage: 55 });
  const [shiftBids, setShiftBids] = useState<Array<{shiftId: number; employeeId: string; employeeName: string; priority: number}>>([]);
  const [undoStack, setUndoStack] = useState<ShiftEvent[][]>([]);
  const [redoStack, setRedoStack] = useState<ShiftEvent[][]>([]);
  const [contextMenu, setContextMenu] = useState<{show: boolean; x: number; y: number; shift: ShiftEvent | null}>({ show: false, x: 0, y: 0, shift: null });
  const [coverageHeatmap, setCoverageHeatmap] = useState<{[key: string]: {staffed: number; required: number; percentage: number}}>({});
  const [shiftNotes, setShiftNotes] = useState<{[shiftId: number]: Array<{author: string; note: string; timestamp: Date}>}>({});
  const [recurringTemplates, setRecurringTemplates] = useState<Array<{id: number; name: string; shifts: ShiftEvent[]}>>([]);
  const [recentPunchNotifications, setRecentPunchNotifications] = useState<Array<{employeeName: string; action: 'in' | 'out'; timestamp: Date}>>([]);
  const [showSwapRequests, setShowSwapRequests] = useState(false);
  const [showTimeOffApproval, setShowTimeOffApproval] = useState(false);
  const [showBudgetTracker, setShowBudgetTracker] = useState(false);
  const [showShiftBids, setShowShiftBids] = useState(false);
  const [showCoverageHeatmap, setShowCoverageHeatmap] = useState(false);
  const [showRecurringTemplates, setShowRecurringTemplates] = useState(false);
  const [showPTODonations, setShowPTODonations] = useState(false);
  const [ptoDonationRequests, setPTODonationRequests] = useState<Array<{
    id: number;
    recipientId: string;
    recipientName: string;
    reason: string;
    hoursNeeded: number;
    hoursReceived: number;
    status: 'active' | 'fulfilled' | 'closed';
    timestamp: Date;
  }>>([]);
  const [ptoDonationHistory, setPTODonationHistory] = useState<Array<{
    id: number;
    donorId: string;
    donorName: string;
    recipientId: string;
    recipientName: string;
    hours: number;
    type: 'PTO' | 'Sick';
    timestamp: Date;
  }>>([]);
  const [employeePTOBalances, setEmployeePTOBalances] = useState<{[key: string]: {pto: number; sick: number}}>({});

  // Mock guild/gamification data
  const guildLevels: { [key: string]: { level: number; levelName: string; xp: number; rank: number } } = {
    "1": { level: 42, levelName: "Expert", xp: 8450, rank: 3 },
    "2": { level: 38, levelName: "Journeyman", xp: 7200, rank: 7 },
    "3": { level: 55, levelName: "Master", xp: 12500, rank: 1 },
    "4": { level: 29, levelName: "Journeyman", xp: 5100, rank: 12 },
    "5": { level: 47, levelName: "Expert", xp: 9800, rank: 5 },
    "6": { level: 51, levelName: "Master", xp: 11200, rank: 2 },
    "7": { level: 34, levelName: "Journeyman", xp: 6400, rank: 9 },
    "8": { level: 41, levelName: "Expert", xp: 8200, rank: 4 },
    "9": { level: 22, levelName: "Apprentice", xp: 3500, rank: 14 },
    "10": { level: 45, levelName: "Expert", xp: 9200, rank: 6 },
    "11": { level: 31, levelName: "Journeyman", xp: 5800, rank: 11 },
    "12": { level: 36, levelName: "Journeyman", xp: 6900, rank: 8 },
    "13": { level: 18, levelName: "Apprentice", xp: 2400, rank: 15 },
    "14": { level: 33, levelName: "Journeyman", xp: 6200, rank: 10 },
    "15": { level: 25, levelName: "Apprentice", xp: 4100, rank: 13 },
  };

  const getLevelColor = (levelName: string) => {
    switch(levelName) {
      case "Grandmaster": return "text-purple-300 bg-purple-950";
      case "Master": return "text-yellow-300 bg-yellow-900/50";
      case "Expert": return "text-blue-300 bg-blue-900/50";
      case "Journeyman": return "text-green-300 bg-green-900/50";
      case "Apprentice": return "text-gray-300 bg-gray-700/50";
      default: return "text-slate-300 bg-slate-700/50";
    }
  };

  const isStarEmployee = (guildData: { rank: number; level: number } | null) => {
    if (!guildData) return false;
    // Top 3 ranked employees are stars
    return guildData.rank <= 3;
  };

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Detect HR-related alerts
  const detectHRAlerts = () => {
    const alerts = [];
    const today = new Date();
    
    mockEmployees.forEach(employee => {
      // Check certifications expiring soon (within 60 days)
      employee.certifications.forEach(cert => {
        const expiryDate = new Date(cert.expires);
        const daysUntilExpiry = Math.floor((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        
        if (daysUntilExpiry < 0) {
          alerts.push({
            type: 'certification-expired',
            severity: 'high',
            employee: employee.name,
            message: `${cert.name} expired ${Math.abs(daysUntilExpiry)} days ago - cannot schedule`,
            action: 'Block scheduling'
          });
        } else if (daysUntilExpiry <= 30) {
          alerts.push({
            type: 'certification-expiring',
            severity: 'medium',
            employee: employee.name,
            message: `${cert.name} expires in ${daysUntilExpiry} days`,
            action: 'Renew certification'
          });
        }
      });
      
      // Check time-off requests
      employee.timeOffRequests.forEach(request => {
        alerts.push({
          type: 'time-off',
          severity: 'info',
          employee: employee.name,
          message: `Approved time-off on ${request.date} (${request.reason})`,
          action: 'Block scheduling'
        });
      });
    });
    
    return alerts;
  };

  // Smart Conflict Detection
  const detectConflicts = () => {
    const foundConflicts: Array<{type: string; message: string; severity: 'error' | 'warning'}> = [];
    
    // Check for double bookings
    events.forEach((shift, idx) => {
      events.slice(idx + 1).forEach(otherShift => {
        if (shift.employeeId === otherShift.employeeId) {
          const overlap = shift.start < otherShift.end && shift.end > otherShift.start;
          if (overlap) {
            foundConflicts.push({
              type: 'double-booking',
              message: `${shift.employeeName} has overlapping shifts`,
              severity: 'error'
            });
          }
        }
      });
    });

    // Check for overtime violations (>40 hours/week)
    const employeeHours: { [key: string]: number } = {};
    events.forEach(shift => {
      if (shift.employeeId) {
        const hours = (shift.end.getTime() - shift.start.getTime()) / (1000 * 60 * 60);
        employeeHours[shift.employeeId] = (employeeHours[shift.employeeId] || 0) + hours;
      }
    });
    Object.entries(employeeHours).forEach(([empId, hours]) => {
      if (hours > 40) {
        const emp = mockEmployees.find(e => e.id === empId);
        foundConflicts.push({
          type: 'overtime',
          message: `${emp?.name} scheduled for ${hours.toFixed(1)} hours (${(hours - 40).toFixed(1)}h overtime)`,
          severity: 'warning'
        });
      }
    });

    // Check for understaffing
    const dayShiftCounts: { [key: string]: number } = {};
    events.forEach(shift => {
      const dayKey = shift.start.toDateString();
      dayShiftCounts[dayKey] = (dayShiftCounts[dayKey] || 0) + 1;
    });
    Object.entries(dayShiftCounts).forEach(([day, count]) => {
      if (count < 3) {
        foundConflicts.push({
          type: 'understaffing',
          message: `${day}: Only ${count} staff scheduled (minimum 3 recommended)`,
          severity: 'warning'
        });
      }
    });

    setConflicts(foundConflicts);
  };

  // Calculate Labor Costs
  const calculateLaborCost = () => {
    const baseRate = 25; // $25/hour base rate
    let totalCost = 0;
    
    events.forEach(shift => {
      const hours = (shift.end.getTime() - shift.start.getTime()) / (1000 * 60 * 60);
      let rate = baseRate;
      
      // Night differential (10pm-6am)
      const hour = shift.start.getHours();
      if (hour >= 22 || hour < 6) rate *= 1.5;
      
      // Weekend differential
      const day = shift.start.getDay();
      if (day === 0 || day === 6) rate *= 1.25;
      
      // Overtime
      if (shift.isOvertime) rate *= 1.5;
      
      totalCost += hours * rate;
    });

    setLaborCost({
      current: totalCost,
      projected: totalCost * 4.33, // Monthly projection
      budget: 15000,
      savings: 15000 - totalCost
    });
  };

  // Oracle AI Predictions
  const oracleInsights = [
    {
      type: 'prediction',
      severity: 'high',
      title: 'Understaffing Risk Detected',
      message: 'Wednesday 2-4pm predicted to have 40% higher patient volume. Recommend adding 2 nurses.',
      action: 'Auto-schedule',
      confidence: 92,
      impact: 'High patient wait times, staff burnout risk'
    },
    {
      type: 'optimization',
      severity: 'medium',
      title: 'Cost Optimization Available',
      message: 'Swapping Marcus Chen to night shift Monday would save $180 (higher efficiency rating for nights).',
      action: 'Apply suggestion',
      confidence: 87,
      impact: '$180 savings, 15% efficiency gain'
    },
    {
      type: 'performance',
      severity: 'info',
      title: 'Top Performer Alert',
      message: 'Jennifer Thompson maintained 98% on-time rate this month. Consider for opening shift lead role.',
      action: 'View profile',
      confidence: 95,
      impact: 'Leadership development opportunity'
    },
    {
      type: 'risk',
      severity: 'high',
      title: 'Burnout Risk - David Kim',
      message: 'Working 6 consecutive days. Recommend 2-day break to prevent performance decline.',
      action: 'Adjust schedule',
      confidence: 89,
      impact: 'Prevent 23% productivity drop'
    }
  ];

  // Auto-run conflict detection and cost calculation
  React.useEffect(() => {
    detectConflicts();
    calculateLaborCost();
  }, [events]);

  // Mock employee data with avatars
  const defaultAvatars = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Max',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Mia',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Leo',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Ava',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Oscar',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Lily',
  ];

  const mockEmployees = [
    { id: "1", name: "Sarah Martinez", employmentType: "full-time", weeklyHourLimit: 40, overtimeThreshold: 40, isActive: true, department: "Nursing", shift: "Day", avatar: defaultAvatars[0], timeOffRequests: [], certifications: [{name: "RN License", expires: "2027-03-15"}], availability: ["Mon","Tue","Wed","Thu","Fri"] },
    { id: "2", name: "Marcus Chen", employmentType: "part-time", weeklyHourLimit: 28, overtimeThreshold: 28, isActive: true, department: "Nursing", shift: "Night", avatar: defaultAvatars[1], timeOffRequests: [], certifications: [{name: "RN License", expires: "2026-08-20"}], availability: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"] },
    { id: "3", name: "Jennifer Thompson", employmentType: "prn", weeklyHourLimit: 20, overtimeThreshold: 20, isActive: true, department: "Emergency", shift: "Day", avatar: defaultAvatars[2], timeOffRequests: [], certifications: [{name: "RN License", expires: "2028-01-10"}, {name: "ACLS", expires: "2026-06-15"}], availability: ["Mon","Tue","Wed","Thu","Fri"] },
    { id: "4", name: "David Kim", employmentType: "full-time", weeklyHourLimit: 40, overtimeThreshold: 40, isActive: true, department: "Radiology", shift: "Day", avatar: defaultAvatars[3], timeOffRequests: [{date: "2026-01-08", reason: "Personal"}], certifications: [{name: "Radiology Tech", expires: "2027-12-01"}], availability: ["Mon","Tue","Wed","Thu"] },
    { id: "5", name: "Rachel Foster", employmentType: "full-time", weeklyHourLimit: 40, overtimeThreshold: 40, isActive: true, department: "Laboratory", shift: "Evening", avatar: defaultAvatars[4], timeOffRequests: [], certifications: [{name: "Lab Tech", expires: "2026-02-01"}], availability: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"] },
    { id: "6", name: "James Wilson", employmentType: "full-time", weeklyHourLimit: 40, overtimeThreshold: 40, isActive: true, department: "Emergency", shift: "Night", avatar: defaultAvatars[5], timeOffRequests: [], certifications: [{name: "RN License", expires: "2027-05-30"}], availability: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"] },
    { id: "7", name: "Angela Rodriguez", employmentType: "part-time", weeklyHourLimit: 28, overtimeThreshold: 28, isActive: true, department: "Nursing", shift: "Evening", avatar: defaultAvatars[6], timeOffRequests: [{date: "2026-01-10", reason: "Vacation"}], certifications: [{name: "RN License", expires: "2026-11-20"}], availability: ["Mon","Wed","Fri","Sat","Sun"] },
    { id: "8", name: "Robert Taylor", employmentType: "full-time", weeklyHourLimit: 40, overtimeThreshold: 40, isActive: true, department: "Pharmacy", shift: "Day", avatar: defaultAvatars[7], timeOffRequests: [], certifications: [{name: "Pharmacist License", expires: "2028-03-15"}], availability: ["Mon","Tue","Wed","Thu","Fri"] },
    { id: "9", name: "Lisa Anderson", employmentType: "prn", weeklyHourLimit: 20, overtimeThreshold: 20, isActive: true, department: "Radiology", shift: "Evening", avatar: defaultAvatars[8], timeOffRequests: [], certifications: [{name: "Radiology Tech", expires: "2027-07-01"}], availability: ["Mon","Tue","Wed"] },
    { id: "10", name: "Christopher Lee", employmentType: "full-time", weeklyHourLimit: 40, overtimeThreshold: 40, isActive: true, department: "Laboratory", shift: "Night", avatar: defaultAvatars[9], timeOffRequests: [], certifications: [{name: "Lab Tech", expires: "2026-04-15"}], availability: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"] },
    { id: "11", name: "Michelle Brooks", employmentType: "part-time", weeklyHourLimit: 28, overtimeThreshold: 28, isActive: true, department: "Emergency", shift: "Day", avatar: defaultAvatars[10], timeOffRequests: [], certifications: [{name: "RN License", expires: "2027-09-01"}], availability: ["Tue","Wed","Thu","Fri","Sat"] },
    { id: "12", name: "Daniel Garcia", employmentType: "full-time", weeklyHourLimit: 40, overtimeThreshold: 40, isActive: true, department: "Nursing", shift: "Day", avatar: defaultAvatars[11], timeOffRequests: [], certifications: [{name: "RN License", expires: "2028-06-01"}], availability: ["Mon","Tue","Wed","Thu","Fri"] },
    { id: "13", name: "Amanda White", employmentType: "prn", weeklyHourLimit: 20, overtimeThreshold: 20, isActive: true, department: "Pharmacy", shift: "Evening", avatar: defaultAvatars[12], timeOffRequests: [], certifications: [{name: "Pharmacist License", expires: "2027-10-15"}], availability: ["Mon","Wed","Fri","Sat"] },
    { id: "14", name: "Kevin Martinez", employmentType: "full-time", weeklyHourLimit: 40, overtimeThreshold: 40, isActive: true, department: "Radiology", shift: "Night", avatar: defaultAvatars[13], timeOffRequests: [], certifications: [{name: "Radiology Tech", expires: "2026-12-01"}], availability: ["Sun","Mon","Tue","Wed","Thu"] },
    { id: "15", name: "Nicole Johnson", employmentType: "part-time", weeklyHourLimit: 28, overtimeThreshold: 28, isActive: true, department: "Laboratory", shift: "Day", avatar: defaultAvatars[14], timeOffRequests: [], certifications: [{name: "Lab Tech", expires: "2027-02-20"}], availability: ["Mon","Tue","Wed","Thu","Fri","Sat"] },
  ];
  
  // Initialize PTO balances on mount
  React.useEffect(() => {
    const initialBalances: {[key: string]: {pto: number; sick: number}} = {};
    mockEmployees.forEach(emp => {
      initialBalances[emp.id] = {
        pto: emp.employmentType === 'full-time' ? 120 : emp.employmentType === 'part-time' ? 60 : 0,
        sick: emp.employmentType === 'full-time' ? 80 : emp.employmentType === 'part-time' ? 40 : 0
      };
    });
    setEmployeePTOBalances(initialBalances);
    
    // Mock donation requests
    setPTODonationRequests([
      {
        id: 1,
        recipientId: "4",
        recipientName: "David Kim",
        reason: "Extended medical leave for family member",
        hoursNeeded: 80,
        hoursReceived: 32,
        status: 'active',
        timestamp: new Date(Date.now() - 86400000 * 2)
      },
      {
        id: 2,
        recipientId: "7",
        recipientName: "Angela Rodriguez",
        reason: "Personal family emergency",
        hoursNeeded: 40,
        hoursReceived: 16,
        status: 'active',
        timestamp: new Date(Date.now() - 86400000)
      },
    ]);
    
    // Mock donation history
    setPTODonationHistory([
      {
        id: 1,
        donorId: "1",
        donorName: "Sarah Martinez",
        recipientId: "4",
        recipientName: "David Kim",
        hours: 16,
        type: 'PTO',
        timestamp: new Date(Date.now() - 86400000)
      },
      {
        id: 2,
        donorId: "3",
        donorName: "Jennifer Thompson",
        recipientId: "4",
        recipientName: "David Kim",
        hours: 8,
        type: 'Sick',
        timestamp: new Date(Date.now() - 43200000)
      },
    ]);
  }, []);

  // Compute HR alerts after mockEmployees is defined
  const hrAlerts = React.useMemo(() => detectHRAlerts(), []);

  // Timeclock integration data
  const timeclockData: { [key: string]: { clockIn?: string; clockOut?: string; status: 'on-time' | 'late' | 'early' | 'no-show' } } = {
    "1": { clockIn: "06:58", status: 'on-time' }, // Sarah - 2 min early
    "2": { clockIn: "23:15", status: 'late' }, // Marcus - 15 min late
    "3": { clockIn: "05:55", status: 'on-time' }, // Jennifer - 5 min early
    "6": { status: 'no-show' }, // James - no show
    "12": { clockIn: "07:00", status: 'on-time' }, // Daniel
  };

  // Payroll integration - calculate per-shift earnings
  const calculateShiftEarnings = (shift: ShiftEvent, employeeId: string) => {
    const baseRate = 25;
    const hours = (shift.end.getTime() - shift.start.getTime()) / (1000 * 60 * 60);
    let rate = baseRate;
    const employee = mockEmployees.find(e => e.id === employeeId);
    const guildData = employeeId ? guildLevels[employeeId] : null;
    
    // Night differential
    const hour = shift.start.getHours();
    if (hour >= 22 || hour < 6) rate *= 1.5;
    
    // Weekend differential
    const day = shift.start.getDay();
    if (day === 0 || day === 6) rate *= 1.25;
    
    // Overtime
    if (shift.isOvertime) rate *= 1.5;
    
    // Guild performance bonus (higher levels earn more)
    let performanceBonus = 0;
    if (guildData) {
      if (guildData.level >= 50) performanceBonus = 50; // Master
      else if (guildData.level >= 40) performanceBonus = 25; // Expert
      else if (guildData.level >= 30) performanceBonus = 10; // Journeyman
    }
    
    const baseEarnings = hours * rate;
    return {
      base: baseEarnings,
      performanceBonus,
      total: baseEarnings + performanceBonus,
      hours,
      rate
    };
  };
  
  const departments = ["all", ...Array.from(new Set(mockEmployees.map(e => e.department)))];
  const shifts = ["all", ...Array.from(new Set(mockEmployees.map(e => e.shift)))];

  // Filters and pagination
  const filteredEmployees = mockEmployees.filter(emp => {
    const matchesName = emp.name.toLowerCase().includes(employeeSearch.toLowerCase());
    const matchesDept = selectedDepartment === "all" || emp.department === selectedDepartment;
    const matchesShift = selectedShift === "all" || emp.shift === selectedShift;
    return matchesName && matchesDept && matchesShift && emp.isActive;
  });
  
  // Calendar shows ALL filtered employees (not paginated)
  const filteredEmployeeIds = new Set(filteredEmployees.map(e => e.id));
  const filteredEvents = events.filter(ev => ev.employeeId && filteredEmployeeIds.has(ev.employeeId));
  
  // Pagination is just for reference/stats
  const totalPages = employeesPerPage === -1 ? 1 : Math.ceil(filteredEmployees.length / employeesPerPage);
  const paginatedEmployees = employeesPerPage === -1 ? filteredEmployees : filteredEmployees.slice((currentPage - 1) * employeesPerPage, currentPage * employeesPerPage);

  const handleDragStart = (e: React.DragEvent, shift: ShiftEvent) => {
    setDraggedShift(shift);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, dayOffset: number, timeBlock: { start: number; end: number }) => {
    e.preventDefault();
    if (!draggedShift) return;

    const newStart = getThisWeekDate(dayOffset, timeBlock.start);
    const duration = draggedShift.end.getTime() - draggedShift.start.getTime();
    const newEnd = new Date(newStart.getTime() + duration);

    setEvents(events.map(event => 
      event.id === draggedShift.id 
        ? { ...event, start: newStart, end: newEnd }
        : event
    ));
    
    setDraggedShift(null);
  };

  const eventStyleGetter = (event: ShiftEvent) => {
    return {
      style: {
        backgroundColor: event.isOvertime ? "#ef4444" : (event.color || "#3b82f6"),
        borderRadius: "6px",
        border: "none",
        color: "white",
        fontSize: "13px",
        fontWeight: "600",
      },
    };
  };

  return (
    <div className="p-4">
      {/* Advanced Features Toolbar */}
      <div className="mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-xl p-4 border-2 border-purple-500/30 shadow-xl">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setShowAIScheduler(true)}
            className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg flex items-center gap-2 border-2 border-purple-400 text-pop-light"
          >
            <Sparkles className="w-5 h-5" />
            AI Auto-Schedule
          </button>
          <button
            onClick={() => setShowMarketplace(true)}
            className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg flex items-center gap-2 text-pop-light"
          >
            <ShoppingBag className="w-5 h-5" />
            Shift Marketplace
          </button>
          <button
            onClick={() => setShowTemplates(true)}
            className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-500 hover:to-amber-500 transition-all shadow-lg flex items-center gap-2 text-pop-light"
          >
            <Copy className="w-5 h-5" />
            Templates
          </button>
          <button
            onClick={() => setShowIntegrationDashboard(!showIntegrationDashboard)}
            className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg flex items-center gap-2 border-2 border-purple-400 text-pop-light"
          >
            <Zap className="w-5 h-5" />
            System Integration
          </button>
          <button
            className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:from-pink-500 hover:to-rose-500 transition-all shadow-lg flex items-center gap-2 text-pop-light"
          >
            <Coffee className="w-5 h-5" />
            Auto-Breaks
          </button>
          <button
            onClick={() => setShowSwapRequests(true)}
            className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg flex items-center gap-2 text-pop-light relative"
          >
            <User className="w-5 h-5" />
            Swap Requests
            {shiftSwapRequests.filter(r => r.status === 'pending').length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {shiftSwapRequests.filter(r => r.status === 'pending').length}
              </span>
            )}
          </button>
          <button
            onClick={() => setShowTimeOffApproval(true)}
            className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:from-yellow-500 hover:to-orange-500 transition-all shadow-lg flex items-center gap-2 text-pop-light relative"
          >
            <Clock className="w-5 h-5" />
            Time Off
            {timeOffRequests.filter(r => r.status === 'pending').length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {timeOffRequests.filter(r => r.status === 'pending').length}
              </span>
            )}
          </button>
          <button
            onClick={() => setShowPTODonations(true)}
            className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg flex items-center gap-2 text-pop-light relative"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            PTO Donations
            {ptoDonationRequests.filter(r => r.status === 'active').length > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {ptoDonationRequests.filter(r => r.status === 'active').length}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              const weekStart = new Date();
              weekStart.setDate(weekStart.getDate() - weekStart.getDay());
              const weekShifts = shifts.filter(s => s.start >= weekStart);
              setCopiedWeek(weekShifts);
              alert('Week copied! Click "Paste Week" to apply to another week.');
            }}
            className="px-3 py-2 rounded-lg font-semibold bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-500 hover:to-slate-600 transition-all shadow-lg flex items-center gap-2 text-pop-light"
          >
            <Copy className="w-4 h-4" />
            Copy Week
          </button>
          {copiedWeek && (
            <button
              onClick={() => {
                alert('Paste functionality would duplicate shifts to selected week');
              }}
              className="px-3 py-2 rounded-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 transition-all shadow-lg flex items-center gap-2 text-pop-light"
            >
              <Copy className="w-4 h-4" />
              Paste Week ({copiedWeek.length} shifts)
            </button>
          )}
          <button
            onClick={() => setShowConflictPanel(!showConflictPanel)}
            className="px-3 py-2 rounded-lg font-semibold bg-gradient-to-r from-red-600 to-rose-600 text-white hover:from-red-500 hover:to-rose-500 transition-all shadow-lg flex items-center gap-2 text-pop-light relative"
          >
            <AlertTriangle className="w-4 h-4" />
            Conflicts
            {detectedConflicts.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                {detectedConflicts.length}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              if (undoStack.length > 0) {
                const previous = undoStack[undoStack.length - 1];
                setRedoStack([...redoStack, shifts]);
                setShifts(previous);
                setUndoStack(undoStack.slice(0, -1));
              }
            }}
            disabled={undoStack.length === 0}
            className="px-3 py-2 rounded-lg font-semibold bg-slate-700 text-white hover:bg-slate-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            title="Undo"
          >
            ↶
          </button>
          <button
            onClick={() => {
              if (redoStack.length > 0) {
                const next = redoStack[redoStack.length - 1];
                setUndoStack([...undoStack, shifts]);
                setShifts(next);
                setRedoStack(redoStack.slice(0, -1));
              }
            }}
            disabled={redoStack.length === 0}
            className="px-3 py-2 rounded-lg font-semibold bg-slate-700 text-white hover:bg-slate-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            title="Redo"
          >
            ↷
          </button>

          <div className="ml-auto flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-lg border border-purple-500/30">
            <DollarSign className="w-5 h-5 text-emerald-400" />
            <div className="text-left">
              <div className="text-xs text-slate-400">Weekly Cost</div>
              <div className="text-sm font-bold text-white">${laborCost.current.toFixed(0)}</div>
            </div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="text-left">
              <div className="text-xs text-slate-400">vs Budget</div>
              <div className={`text-sm font-bold ${laborCost.savings >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {laborCost.savings >= 0 ? '+' : ''}{laborCost.savings.toFixed(0)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conflict Alerts */}
      {conflicts.length > 0 && (
        <div className="mb-4 bg-red-900/20 border-2 border-red-500 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-red-300 mb-2">{conflicts.length} Schedule Conflict{conflicts.length > 1 ? 's' : ''} Detected</h3>
              <div className="space-y-1">
                {conflicts.slice(0, 3).map((conflict, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-red-200">
                    <span className={`w-2 h-2 rounded-full ${conflict.severity === 'error' ? 'bg-red-500' : 'bg-yellow-500'}`}></span>
                    {conflict.message}
                  </div>
                ))}
                {conflicts.length > 3 && (
                  <div className="text-xs text-red-300 mt-2">+ {conflicts.length - 3} more conflicts</div>
                )}
              </div>
              <button className="mt-3 px-3 py-1 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-lg transition">
                Fix All Issues
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HR Integration Alerts */}
      {showHRAlerts && hrAlerts.length > 0 && (
        <div className="mb-4 bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-950 border border-blue-500/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-bold text-blue-200">HR Integration • Active Alerts</h3>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            </div>
            <button
              onClick={() => setShowHRAlerts(false)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <XCircle className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid gap-2">
            {hrAlerts.map((alert: any, idx: number) => {
              const severityColors: any = {
                high: 'border-red-500/50 bg-red-950/30',
                medium: 'border-yellow-500/50 bg-yellow-950/30',
                info: 'border-blue-500/50 bg-blue-950/30'
              };
              
              const severityIcons: any = {
                high: '🛑',
                medium: '⚠️',
                info: '🛡️'
              };
              
              return (
                <div key={idx} className={`p-3 rounded-lg border-l-4 ${severityColors[alert.severity]}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{severityIcons[alert.severity]}</span>
                        <div className="font-semibold text-white text-sm">{alert.employee}</div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          alert.type === 'certification-expired' ? 'bg-red-600 text-white' :
                          alert.type === 'certification-expiring' ? 'bg-yellow-600 text-black' :
                          'bg-blue-600 text-white'
                        }`}>
                          {alert.type.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="text-xs text-slate-300 mb-2">{alert.message}</div>
                      <button className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        {alert.action}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-3 pt-3 border-t border-blue-500/20 flex gap-2">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1">
              <FileText className="w-3 h-3" />
              View All HR Data
            </button>
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1">
              <Settings className="w-3 h-3" />
              HR Settings
            </button>
          </div>
        </div>
      )}

      {/* System Integration Dashboard */}
      {showIntegrationDashboard && (
        <div className="mb-4 bg-gradient-to-r from-purple-950 via-indigo-950 to-purple-950 border border-purple-500/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <h3 className="text-sm font-bold text-purple-200">System Integration Dashboard</h3>
            </div>
            <button
              onClick={() => setShowIntegrationDashboard(false)}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              <XCircle className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {/* Scheduler → Payroll */}
            <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <div className="text-xs font-bold text-emerald-300">Scheduler → Payroll</div>
              </div>
              <div className="text-[10px] text-slate-300 mb-2">Shift hours, differentials, bonuses flowing to payroll in real-time</div>
              <div className="flex gap-2">
                <div className="flex-1 bg-emerald-900/30 rounded px-2 py-1">
                  <div className="text-[9px] text-emerald-400 font-semibold">This Week</div>
                  <div className="text-xs text-white font-bold">${laborCost.current.toLocaleString()}</div>
                </div>
                <div className="flex-1 bg-emerald-900/30 rounded px-2 py-1">
                  <div className="text-[9px] text-emerald-400 font-semibold">Next Pay</div>
                  <div className="text-xs text-white font-bold">${laborCost.projected.toLocaleString()}</div>
                </div>
              </div>
            </div>
            
            {/* Timeclock → Scheduler */}
            <div className="bg-blue-950/40 border border-blue-500/30 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <div className="text-xs font-bold text-blue-300">Timeclock → Scheduler</div>
              </div>
              <div className="text-[10px] text-slate-300 mb-2">Live attendance tracking with late/no-show alerts</div>
              <div className="flex gap-2">
                <div className="flex-1 bg-blue-900/30 rounded px-2 py-1">
                  <div className="text-[9px] text-green-400 font-semibold">✓ On Time</div>
                  <div className="text-xs text-white font-bold">3</div>
                </div>
                <div className="flex-1 bg-blue-900/30 rounded px-2 py-1">
                  <div className="text-[9px] text-yellow-400 font-semibold">⚠ Late</div>
                  <div className="text-xs text-white font-bold">1</div>
                </div>
                <div className="flex-1 bg-blue-900/30 rounded px-2 py-1">
                  <div className="text-[9px] text-red-400 font-semibold">✕ No Show</div>
                  <div className="text-xs text-white font-bold">1</div>
                </div>
              </div>
            </div>
            
            {/* HR → Scheduler */}
            <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                <div className="text-xs font-bold text-indigo-300">HR → Scheduler</div>
              </div>
              <div className="text-[10px] text-slate-300 mb-2">Certifications, time-off, availability blocking shifts</div>
              <div className="flex gap-2">
                <div className="flex-1 bg-indigo-900/30 rounded px-2 py-1">
                  <div className="text-[9px] text-indigo-400 font-semibold">Alerts</div>
                  <div className="text-xs text-white font-bold">{hrAlerts.length}</div>
                </div>
                <div className="flex-1 bg-indigo-900/30 rounded px-2 py-1">
                  <div className="text-[9px] text-red-400 font-semibold">Expired</div>
                  <div className="text-xs text-white font-bold">{hrAlerts.filter((a: any) => a.type === 'certification-expired').length}</div>
                </div>
              </div>
            </div>
            
            {/* Guild → Payroll */}
            <div className="bg-purple-950/40 border border-purple-500/30 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <div className="text-xs font-bold text-purple-300">Guild → Payroll</div>
              </div>
              <div className="text-[10px] text-slate-300 mb-2">Performance bonuses and achievement rewards</div>
              <div className="flex gap-2">
                <div className="flex-1 bg-purple-900/30 rounded px-2 py-1">
                  <div className="text-[9px] text-purple-400 font-semibold">Bonuses</div>
                  <div className="text-xs text-white font-bold">$425</div>
                </div>
                <div className="flex-1 bg-purple-900/30 rounded px-2 py-1">
                  <div className="text-[9px] text-purple-400 font-semibold">Top 3</div>
                  <div className="text-xs text-white font-bold">+$150</div>
                </div>
              </div>
            </div>
            
            {/* Oracle → All Systems */}
            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/40 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <div className="text-xs font-bold text-purple-300">Oracle → All Systems</div>
              </div>
              <div className="text-[10px] text-slate-300 mb-2">AI predictions influencing every decision</div>
              <div className="flex gap-2">
                <div className="flex-1 bg-purple-900/30 rounded px-2 py-1">
                  <div className="text-[9px] text-purple-400 font-semibold">Confidence</div>
                  <div className="text-xs text-white font-bold">92%</div>
                </div>
                <div className="flex-1 bg-purple-900/30 rounded px-2 py-1">
                  <div className="text-[9px] text-blue-400 font-semibold">Insights</div>
                  <div className="text-xs text-white font-bold">{oracleInsights.length}</div>
                </div>
              </div>
            </div>
            
            {/* Marketplace → Scheduler */}
            <div className="bg-rose-950/40 border border-rose-500/30 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                <div className="text-xs font-bold text-rose-300">Marketplace → Scheduler</div>
              </div>
              <div className="text-[10px] text-slate-300 mb-2">Open shifts filled via gamified bonus system</div>
              <div className="flex gap-2">
                <div className="flex-1 bg-rose-900/30 rounded px-2 py-1">
                  <div className="text-[9px] text-rose-400 font-semibold">Open</div>
                  <div className="text-xs text-white font-bold">1</div>
                </div>
                <div className="flex-1 bg-rose-900/30 rounded px-2 py-1">
                  <div className="text-[9px] text-green-400 font-semibold">Filled</div>
                  <div className="text-xs text-white font-bold">12</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-purple-500/20">
            <div className="text-xs text-center text-purple-300">
              <Sparkles className="w-3 h-3 inline mr-1" />
              All systems connected • Real-time data flow • AI-powered predictions
            </div>
          </div>
        </div>
      )}

      {/* Oracle AI Insight Panel */}
      {showOraclePanel && (
        <div className="mb-4 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-purple-900/40 border-2 border-purple-500/50 rounded-xl p-4 shadow-2xl">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-purple-300 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Oracle AI • Live Insights</h3>
                <p className="text-purple-200 text-xs">Predictive analytics monitoring your schedule</p>
              </div>
            </div>
            <button 
              onClick={() => setShowOraclePanel(false)}
              className="text-purple-300 hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {oracleInsights.map((insight, idx) => {
              const severityColors = {
                'high': 'border-red-500/50 bg-red-900/20',
                'medium': 'border-yellow-500/50 bg-yellow-900/20',
                'info': 'border-blue-500/50 bg-blue-900/20'
              };
              const severityIcons = {
                'high': '🔴',
                'medium': '🟡',
                'info': '🔵'
              };
              return (
                <div key={idx} className={`rounded-lg border-2 p-3 ${severityColors[insight.severity as keyof typeof severityColors]} hover:scale-[1.02] transition`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{severityIcons[insight.severity as keyof typeof severityIcons]}</span>
                      <span className="font-bold text-white text-sm">{insight.title}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-purple-900/50 px-2 py-0.5 rounded-full">
                      <TrendingUp className="w-3 h-3 text-purple-300" />
                      <span className="text-purple-200 text-xs font-bold">{insight.confidence}%</span>
                    </div>
                  </div>
                  <p className="text-purple-100 text-xs mb-2">{insight.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-purple-300 italic">{insight.impact}</span>
                    <button className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded transition">
                      {insight.action}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* View Mode Toggle */}
      <div className="mb-4 flex gap-2 items-center flex-wrap">
        <button
          onClick={() => setViewMode('grid')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all border-2 ${
            viewMode === 'grid' 
              ? 'bg-gradient-to-r from-purple-900 via-purple-700 to-black text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border-purple-500' 
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-600'
          }`}
        >
          📋 Staff Grid View
        </button>
        <button
          onClick={() => setViewMode('calendar')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all border-2 ${
            viewMode === 'calendar' 
              ? 'bg-gradient-to-r from-purple-900 via-purple-700 to-black text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border-purple-500' 
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-600'
          }`}
        >
          📅 Calendar View
        </button>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowSettings(false)}>
          <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-purple-500/50 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-900 via-purple-700 to-black p-6 border-b-2 border-purple-500 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white text-pop-strong">Scheduler Settings</h2>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="text-white hover:text-purple-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Settings Content */}
            <div className="p-6 space-y-6">
              {/* Star Employee Animations Section */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-purple-500/30">
                <h3 className="text-lg font-bold text-purple-200 mb-4 flex items-center gap-2">
                  ⭐ Star Employee Animations
                </h3>
                <div className="space-y-4">
                  {/* Animation Toggle */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-semibold text-purple-100">Enable Light Tracer</label>
                      <p className="text-xs text-slate-400 mt-1">Highlight top 3 performers with animated border</p>
                    </div>
                    <button
                      onClick={() => setShowStarAnimation(!showStarAnimation)}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        showStarAnimation ? 'bg-purple-600' : 'bg-slate-600'
                      }`}
                    >
                      <span className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                        showStarAnimation ? 'translate-x-7' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  {/* Color Picker */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-semibold text-purple-100">Tracer Color</label>
                      <p className="text-xs text-slate-400 mt-1">Customize the animation glow color</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={tracerColor}
                        onChange={(e) => setTracerColor(e.target.value)}
                        className="w-16 h-10 rounded-lg cursor-pointer border-2 border-purple-400 shadow-lg"
                      />
                      <span className="text-xs font-mono text-slate-300 bg-slate-700 px-2 py-1 rounded">{tracerColor}</span>
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="mt-4 p-3 bg-slate-900 rounded-lg border border-slate-600">
                    <p className="text-xs text-slate-400 mb-2">Preview:</p>
                    <div 
                      className={`p-3 rounded-lg bg-slate-800 text-white text-sm font-semibold relative ${showStarAnimation ? 'star-employee-card' : ''}`}
                      style={{
                        ...(showStarAnimation ? {
                          '--tracer-color-light': hexToRgba(tracerColor, 0.8),
                          '--tracer-color-medium': hexToRgba(tracerColor, 0.4),
                          '--tracer-color-soft': hexToRgba(tracerColor, 0.3),
                          '--tracer-color-faint': hexToRgba(tracerColor, 0.1),
                        } as React.CSSProperties : {})
                      }}
                    >
                      ⭐ Jennifer Thompson - Rank #1
                    </div>
                  </div>
                </div>
              </div>

              {/* Display Settings Section */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-purple-500/30">
                <h3 className="text-lg font-bold text-purple-200 mb-4 flex items-center gap-2">
                  🎨 Display Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-semibold text-purple-100">Show Avatars</label>
                      <p className="text-xs text-slate-400 mt-1">Display employee profile pictures</p>
                    </div>
                    <button className="relative w-14 h-7 rounded-full bg-purple-600">
                      <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full translate-x-7" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-semibold text-purple-100">Compact View</label>
                      <p className="text-xs text-slate-400 mt-1">Reduce spacing between shifts</p>
                    </div>
                    <button className="relative w-14 h-7 rounded-full bg-slate-600">
                      <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-semibold text-purple-100">Show Guild Ranks</label>
                      <p className="text-xs text-slate-400 mt-1">Display level badges and rankings</p>
                    </div>
                    <button className="relative w-14 h-7 rounded-full bg-purple-600">
                      <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full translate-x-7" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Notification Settings Section */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-purple-500/30">
                <h3 className="text-lg font-bold text-purple-200 mb-4 flex items-center gap-2">
                  🔔 Notifications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-semibold text-purple-100">Shift Conflicts</label>
                      <p className="text-xs text-slate-400 mt-1">Alert when schedules overlap</p>
                    </div>
                    <button className="relative w-14 h-7 rounded-full bg-purple-600">
                      <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full translate-x-7" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-semibold text-purple-100">Overtime Warnings</label>
                      <p className="text-xs text-slate-400 mt-1">Notify when approaching hour limits</p>
                    </div>
                    <button className="relative w-14 h-7 rounded-full bg-purple-600">
                      <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full translate-x-7" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 border-t-2 border-purple-500/30 flex justify-end gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="px-6 py-2 rounded-lg font-semibold bg-slate-700 text-white hover:bg-slate-600 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-500 hover:to-purple-600 transition-all shadow-lg"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Conflict Detection Panel */}
      {showConflictPanel && detectedConflicts.length > 0 && (
        <div className="mb-4 bg-gradient-to-r from-red-900/40 to-rose-900/40 border-2 border-red-500/50 rounded-xl p-4 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
              <h3 className="font-bold text-red-200">Schedule Conflicts Detected</h3>
            </div>
            <button onClick={() => setShowConflictPanel(false)} className="text-red-300 hover:text-white">×</button>
          </div>
          <div className="space-y-2">
            {detectedConflicts.map((conflict, idx) => (
              <div key={idx} className={`p-3 rounded-lg border ${
                conflict.severity === 'high' ? 'bg-red-900/30 border-red-500/50' :
                conflict.severity === 'medium' ? 'bg-yellow-900/30 border-yellow-500/50' :
                'bg-blue-900/30 border-blue-500/50'
              }`}>
                <div className="flex items-start gap-2">
                  <div className={`w-2 h-2 rounded-full mt-1.5 ${
                    conflict.severity === 'high' ? 'bg-red-500 animate-pulse' :
                    conflict.severity === 'medium' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">{conflict.type.toUpperCase().replace('-', ' ')}</div>
                    <div className="text-xs text-slate-300 mt-1">{conflict.message}</div>
                  </div>
                  <button className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs text-white">
                    Fix
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overtime Warnings */}
      {overtimeWarnings.length > 0 && (
        <div className="mb-4 bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border-2 border-yellow-500/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-yellow-400" />
            <h3 className="font-bold text-yellow-200">Overtime Warnings</h3>
          </div>
          <div className="space-y-2">
            {overtimeWarnings.map((warning, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-yellow-900/30 rounded">
                <span className="text-sm text-white">{warning.employeeName}</span>
                <span className="text-sm font-bold text-yellow-400">{warning.hours} hrs</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Weather Widget */}
      <div className="mb-4 bg-gradient-to-r from-sky-900/40 to-blue-900/40 border-2 border-sky-500/50 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{weatherData.icon}</div>
            <div>
              <div className="text-2xl font-bold text-white">{weatherData.temp}°F</div>
              <div className="text-sm text-sky-200">{weatherData.condition}</div>
            </div>
          </div>
          <div className="text-xs text-sky-300">Next 3 days: Sunny</div>
        </div>
      </div>

      {/* Coverage Heatmap */}
      <div className="mb-4 bg-gradient-to-r from-slate-900 to-slate-800 border-2 border-slate-600 rounded-xl p-4">
        <h3 className="font-bold text-white mb-3 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-purple-400" />
          Weekly Coverage Status
        </h3>
        <div className="grid grid-cols-5 gap-2">
          {Object.entries(coverageHeatmap).map(([day, data]) => (
            <div key={day} className={`p-3 rounded-lg text-center ${
              data.percentage < 75 ? 'bg-red-900/40 border border-red-500/50' :
              data.percentage < 90 ? 'bg-yellow-900/40 border border-yellow-500/50' :
              data.percentage < 105 ? 'bg-green-900/40 border border-green-500/50' :
              'bg-blue-900/40 border border-blue-500/50'
            }`}>
              <div className="text-xs text-slate-300">{day}</div>
              <div className="text-lg font-bold text-white">{data.percentage}%</div>
              <div className="text-[10px] text-slate-400">{data.staffed}/{data.required}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Punch Notifications */}
      {recentPunchNotifications.length > 0 && (
        <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-sm">
          {recentPunchNotifications.slice(0, 3).map((notification, idx) => (
            <div key={idx} className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg shadow-xl p-3 animate-in slide-in-from-right">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <div className="text-sm font-semibold">
                  {notification.employeeName} clocked {notification.action}
                </div>
              </div>
              <div className="text-xs text-green-100 mt-1">
                {Math.floor((Date.now() - notification.timestamp.getTime()) / 60000)} min ago
              </div>
            </div>
          ))}
        </div>
      )}

      {/* AI Auto-Scheduler Modal */}
      {showAIScheduler && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowAIScheduler(false)}>
          <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-purple-500/50 max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 p-6 border-b-2 border-purple-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-7 h-7 text-yellow-300 animate-pulse" />
                  <div>
                    <h2 className="text-2xl font-bold text-white text-pop-strong">Oracle AI Auto-Scheduler</h2>
                    <p className="text-purple-200 text-sm">Intelligent scheduling powered by predictive analytics</p>
                  </div>
                </div>
                <button onClick={() => setShowAIScheduler(false)} className="text-white hover:text-purple-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-bold text-purple-200">Optimization Goals</h3>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-purple-100 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      Minimize labor costs
                    </label>
                    <label className="flex items-center gap-2 text-sm text-purple-100 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      Balance workload fairly
                    </label>
                    <label className="flex items-center gap-2 text-sm text-purple-100 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      Respect availability preferences
                    </label>
                    <label className="flex items-center gap-2 text-sm text-purple-100 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      Prioritize top performers
                    </label>
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <h3 className="font-bold text-purple-200">AI Insights</h3>
                  </div>
                  <div className="space-y-2 text-sm text-purple-100">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                      <span>Jennifer Thompson has 98% on-time rate - ideal for opening shifts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                      <span>Marcus Chen performs best on night shifts (data shows 15% higher efficiency)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-yellow-400 mt-0.5" />
                      <span>Wednesday understaffed - suggest adding 2 more employees</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/30">
                <h3 className="font-bold text-purple-200 mb-3">Predicted Outcomes</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">-23%</div>
                    <div className="text-xs text-slate-400">Labor Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">94%</div>
                    <div className="text-xs text-slate-400">Coverage Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">$3,450</div>
                    <div className="text-xs text-slate-400">Projected Savings</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <button onClick={() => setShowAIScheduler(false)} className="px-6 py-2 rounded-lg font-semibold bg-slate-700 text-white hover:bg-slate-600 transition">
                  Cancel
                </button>
                <button className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition shadow-lg flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Generate Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shift Marketplace Modal */}
      {showMarketplace && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowMarketplace(false)}>
          <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-emerald-500/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 p-6 border-b-2 border-emerald-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-7 h-7 text-emerald-300" />
                  <div>
                    <h2 className="text-2xl font-bold text-white text-pop-strong">Shift Marketplace 🎮</h2>
                    <p className="text-emerald-200 text-sm">Claim shifts, earn bonuses, and climb the leaderboard!</p>
                  </div>
                </div>
                <button onClick={() => setShowMarketplace(false)} className="text-white hover:text-emerald-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              {/* Posted Bonuses Section */}
              {marketplacePostedShifts.length > 0 && (
                <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-xl p-4 mb-6 border-2 border-green-500/50">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <h3 className="font-bold text-green-200">Your Posted Bonus Shifts</h3>
                    <span className="ml-auto text-xs text-green-300">{marketplacePostedShifts.length} active</span>
                  </div>
                  <div className="space-y-2">
                    {marketplacePostedShifts.map((posting, index) => (
                      <div key={index} className="bg-slate-800/60 rounded-lg p-3 border border-green-500/30">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="font-bold text-white">{posting.shift.title}</div>
                            <div className="text-sm text-slate-300 mt-1">
                              📍 {posting.shift.location} • 👤 {posting.shift.employeeName}
                            </div>
                            <div className="text-xs text-slate-400 mt-1">
                              Posted {Math.floor((new Date().getTime() - posting.timestamp.getTime()) / 60000)} min ago
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-green-400 text-lg">${posting.bonus}</div>
                            <div className="text-xs text-green-300">bonus</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Bonus Leaderboard */}
              <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-xl p-4 mb-6 border-2 border-yellow-500/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-bold text-yellow-200">This Week's Bonus Leaders</h3>
                  </div>
                  <span className="text-xs text-yellow-300">Resets Monday 12:00 AM</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-800/50 rounded-lg p-3 border-2 border-yellow-500">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🥇</div>
                      <div className="font-bold text-white text-sm">Jennifer T.</div>
                      <div className="text-yellow-400 font-bold">$450</div>
                      <div className="text-xs text-slate-400">7 shifts claimed</div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-600">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🥈</div>
                      <div className="font-bold text-white text-sm">Marcus C.</div>
                      <div className="text-slate-300 font-bold">$320</div>
                      <div className="text-xs text-slate-400">5 shifts claimed</div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-600">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🥉</div>
                      <div className="font-bold text-white text-sm">David K.</div>
                      <div className="text-slate-300 font-bold">$280</div>
                      <div className="text-xs text-slate-400">4 shifts claimed</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 rounded-lg transition">
                  Available Shifts (12)
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition">
                  Trade Requests (5)
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition">
                  My Posts (2)
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { shift: 'Emergency Night Shift', date: 'Tonight', time: '11:00 PM - 7:00 AM', hours: 8, bonus: 150, urgency: 'URGENT', xp: 200, posted: 'Sarah Martinez', timeAgo: '2 min ago', claims: 3 },
                  { shift: 'Day Shift - ICU', date: 'Tomorrow', time: '7:00 AM - 3:00 PM', hours: 8, bonus: 75, urgency: 'HIGH', xp: 150, posted: 'David Kim', timeAgo: '45 min ago', claims: 5 },
                  { shift: 'Evening Shift - Radiology', date: 'Monday', time: '3:00 PM - 11:00 PM', hours: 8, bonus: 100, urgency: 'MEDIUM', xp: 120, posted: 'Lisa Anderson', timeAgo: '2 hours ago', claims: 2 },
                  { shift: 'Weekend Day - Lab', date: 'Saturday', time: '8:00 AM - 4:00 PM', hours: 8, bonus: 125, urgency: 'HIGH', xp: 175, posted: 'Christopher Lee', timeAgo: '4 hours ago', claims: 4 },
                  { shift: 'Holiday Coverage - Nursing', date: 'Jan 20 (MLK Day)', time: '7:00 AM - 7:00 PM', hours: 12, bonus: 250, urgency: 'PREMIUM', xp: 300, posted: 'Management', timeAgo: '1 day ago', claims: 8 },
                ].map((item, i) => {
                  const urgencyColors = {
                    'URGENT': 'bg-red-600 animate-pulse',
                    'HIGH': 'bg-orange-600',
                    'MEDIUM': 'bg-yellow-600',
                    'PREMIUM': 'bg-purple-600 animate-pulse'
                  };
                  return (
                    <div key={i} className="bg-slate-800/50 rounded-lg p-4 border-2 border-emerald-500/30 hover:border-emerald-500 transition hover:scale-[1.02]">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 ${urgencyColors[item.urgency as keyof typeof urgencyColors]} text-white text-xs font-bold rounded`}>
                              {item.urgency}
                            </span>
                            <span className="font-bold text-white text-lg">{item.shift}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-slate-300 mb-2">
                            <span>📅 {item.date}</span>
                            <span>🕐 {item.time}</span>
                            <span>⏱️ {item.hours} hours</span>
                          </div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center gap-1 bg-green-900/50 px-3 py-1 rounded-full border border-green-500">
                              <DollarSign className="w-4 h-4 text-green-400" />
                              <span className="text-green-300 font-bold text-lg">${item.bonus}</span>
                              <span className="text-green-400 text-xs font-semibold">BONUS</span>
                            </div>
                            <div className="flex items-center gap-1 bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500">
                              <Sparkles className="w-4 h-4 text-purple-400" />
                              <span className="text-purple-300 font-bold">+{item.xp} XP</span>
                            </div>
                            <div className="flex items-center gap-1 text-slate-400 text-xs">
                              <User className="w-3 h-3" />
                              <span>{item.claims} interested</span>
                            </div>
                          </div>
                          <div className="text-xs text-slate-400">Posted by {item.posted} • {item.timeAgo}</div>
                        </div>
                        <div className="flex flex-col gap-2 ml-4">
                          <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold rounded-lg transition shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            Claim Now
                          </button>
                          <button className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-semibold rounded-lg transition">
                            Details
                          </button>
                        </div>
                      </div>
                      {item.urgency === 'URGENT' && (
                        <div className="mt-3 bg-red-900/30 border border-red-500 rounded p-2 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-red-400 animate-pulse" />
                          <span className="text-red-300 text-xs font-bold">⚡ STARTS IN 3 HOURS - Double XP if claimed within 1 hour!</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Bonus Offer Modal */}
      {showBonusOffer && selectedShiftForBonus && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowBonusOffer(false)}>
          <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-green-500/50 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-green-900 via-emerald-900 to-green-900 p-6 border-b-2 border-green-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-7 h-7 text-green-300" />
                  <div>
                    <h2 className="text-xl font-bold text-white">Offer Shift Bonus</h2>
                    <p className="text-green-200 text-sm">Post to marketplace with bonus</p>
                  </div>
                </div>
                <button onClick={() => setShowBonusOffer(false)} className="text-white hover:text-green-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {/* Shift Details */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/30">
                <h3 className="font-bold text-white mb-2">{selectedShiftForBonus.title}</h3>
                <div className="space-y-1 text-sm text-slate-300">
                  <div>👤 {selectedShiftForBonus.employeeName}</div>
                  <div>📍 {selectedShiftForBonus.location}</div>
                  <div>📅 {selectedShiftForBonus.start.toLocaleDateString()} • {selectedShiftForBonus.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - {selectedShiftForBonus.end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                  <div>⏱️ {((selectedShiftForBonus.end.getTime() - selectedShiftForBonus.start.getTime()) / (1000 * 60 * 60)).toFixed(1)} hours</div>
                </div>
              </div>

              {/* Quick Bonus Presets */}
              <div>
                <label className="block text-sm font-bold text-green-200 mb-2">Select Bonus Amount</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { amount: 50, label: 'Standard', urgency: 'MEDIUM' },
                    { amount: 75, label: 'Elevated', urgency: 'HIGH' },
                    { amount: 100, label: 'Priority', urgency: 'HIGH' },
                    { amount: 150, label: 'URGENT', urgency: 'URGENT' },
                  ].map((preset) => (
                    <button
                      key={preset.amount}
                      className="bg-slate-700 hover:bg-slate-600 border-2 border-green-500/30 hover:border-green-500 rounded-lg p-3 transition group"
                    >
                      <div className="text-2xl font-bold text-green-400">${preset.amount}</div>
                      <div className="text-xs text-slate-400">{preset.label}</div>
                    </button>
                  ))}
                </div>
                <div className="mt-3">
                  <label className="text-xs text-slate-400">Custom Amount</label>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl font-bold">$</span>
                    <input 
                      type="number" 
                      placeholder="Enter amount"
                      className="flex-1 bg-slate-700 border border-green-500/30 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* XP Bonus */}
              <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-200">XP Reward</span>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-300 font-bold">+150 XP</span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-bold text-green-200 mb-1">Notes (Optional)</label>
                <textarea 
                  placeholder="Add details about why this shift is available..."
                  className="w-full bg-slate-700 border border-green-500/30 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-green-500 outline-none h-20"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowBonusOffer(false)}
                  className="flex-1 px-4 py-2 rounded-lg font-semibold bg-slate-700 text-white hover:bg-slate-600 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (selectedShiftForBonus) {
                      // Get bonus amount from input
                      const bonusInput = document.querySelector('input[placeholder="Enter bonus amount..."]') as HTMLInputElement;
                      const bonusAmount = bonusInput ? parseFloat(bonusInput.value) || 50 : 50;
                      
                      // Add to marketplace posted shifts
                      setMarketplacePostedShifts(prev => [...prev, {
                        shift: selectedShiftForBonus,
                        bonus: bonusAmount,
                        timestamp: new Date()
                      }]);
                      
                      setShowBonusOffer(false);
                      setShowMarketplaceConfirmation(true);
                      
                      // Auto-hide confirmation after 4 seconds
                      setTimeout(() => setShowMarketplaceConfirmation(false), 4000);
                    }
                  }}
                  className="flex-1 px-4 py-3 rounded-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 transition shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Post to Marketplace
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Templates Modal */}
      {showTemplates && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowTemplates(false)}>
          <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-orange-500/50 max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-orange-900 via-amber-900 to-orange-900 p-6 border-b-2 border-orange-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Copy className="w-7 h-7 text-orange-300" />
                  <div>
                    <h2 className="text-2xl font-bold text-white text-pop-strong">Schedule Templates</h2>
                    <p className="text-orange-200 text-sm">Save and reuse recurring schedules</p>
                  </div>
                </div>
                <button onClick={() => setShowTemplates(false)} className="text-white hover:text-orange-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2">
                <Copy className="w-5 h-5" />
                Save Current Schedule as Template
              </button>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Standard Week', shifts: 45, used: 23 },
                  { name: 'Holiday Coverage', shifts: 38, used: 12 },
                  { name: 'Summer Staffing', shifts: 52, used: 8 },
                  { name: 'Weekend Only', shifts: 24, used: 15 },
                ].map((template, idx) => (
                  <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-orange-500/30 hover:border-orange-500 transition cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-white">{template.name}</h3>
                      <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">SAVED</span>
                    </div>
                    <div className="text-sm text-slate-300">{template.shifts} shifts • Used {template.used} times</div>
                    <div className="flex gap-2 mt-3">
                      <button className="flex-1 bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold py-2 rounded transition">
                        Apply
                      </button>
                      <button className="px-3 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded transition">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <label className="block text-sm font-semibold text-purple-200 mb-1">Department</label>
            <select
              className="border border-purple-500/50 rounded px-3 py-2 bg-slate-800 text-white focus:ring-2 focus:ring-purple-500 outline-none"
              value={selectedDepartment}
              onChange={e => { setSelectedDepartment(e.target.value); setCurrentPage(1); }}
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept === "all" ? "All Departments" : dept}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-purple-200 mb-1">Shift</label>
            <select
              className="border border-purple-500/50 rounded px-3 py-2 bg-slate-800 text-white focus:ring-2 focus:ring-purple-500 outline-none"
              value={selectedShift}
              onChange={e => { setSelectedShift(e.target.value); setCurrentPage(1); }}
            >
              {shifts.map(shift => (
                <option key={shift} value={shift}>{shift === "all" ? "All Shifts" : `${shift} Shift`}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-purple-200 mb-1">Search Employee</label>
            <input
              type="text"
              className="border border-purple-500/50 rounded px-3 py-2 bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Type a name..."
              value={employeeSearch}
              onChange={e => { setEmployeeSearch(e.target.value); setCurrentPage(1); }}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-purple-200 mb-1">Show Per Page</label>
            <select
              className="border border-purple-500/50 rounded px-3 py-2 bg-slate-800 text-white focus:ring-2 focus:ring-purple-500 outline-none"
              value={employeesPerPage}
              onChange={e => { setEmployeesPerPage(Number(e.target.value)); setCurrentPage(1); }}
            >
              <option value="20">20 employees</option>
              <option value="50">50 employees</option>
              <option value="100">100 employees</option>
              <option value="-1">View All</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <button
            className="px-3 py-1 rounded bg-purple-700 text-white font-semibold hover:bg-purple-600 transition"
            onClick={() => { setSelectedDepartment("all"); setSelectedShift("all"); setEmployeeSearch(""); setCurrentPage(1); }}
          >
            Reset Filters
          </button>
          <span className="text-purple-200 text-sm">{employeesPerPage === -1 ? 'Viewing All' : `Page ${currentPage} of ${totalPages}`}</span>
          <button
            className="px-2 py-1 rounded bg-slate-700 text-white font-semibold hover:bg-slate-600 disabled:opacity-50 transition"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1 || employeesPerPage === -1}
          >Prev</button>
          <button
            className="px-2 py-1 rounded bg-slate-700 text-white font-semibold hover:bg-slate-600 disabled:opacity-50 transition"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages || employeesPerPage === -1}
          >Next</button>
        </div>
      </div>
      
      <div className="mb-4">
        <span className="font-semibold text-purple-200">Viewing {filteredEmployees.length} employee{filteredEmployees.length !== 1 ? 's' : ''} • {filteredEvents.length} shift{filteredEvents.length !== 1 ? 's' : ''} scheduled</span>
      </div>
      
      {/* Staff Grid View - Shows ALL employees clearly */}
      {viewMode === 'grid' && (
        <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
          {/* Week Header */}
          <div className="grid grid-cols-8 bg-gradient-to-r from-purple-900 via-purple-700 to-black text-white font-bold border-b-2 border-purple-500">
            <div className="p-3 border-r border-white/20">Time</div>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
              <div key={day} className="p-3 border-r border-white/20 last:border-r-0 text-center">{day}</div>
            ))}
          </div>
          
          {/* Shifts by Time Block */}
          {[
            { label: 'Day Shift (6am-4pm)', start: 6, end: 16 },
            { label: 'Evening Shift (2pm-12am)', start: 14, end: 24 },
            { label: 'Night Shift (10pm-8am)', start: 22, end: 32 }
          ].map((timeBlock, blockIdx) => (
            <div key={blockIdx} className="grid grid-cols-8 border-b border-slate-700 hover:bg-slate-800">
              <div className="p-3 bg-slate-800 border-r border-slate-700 font-semibold text-slate-100">
                {timeBlock.label}
              </div>
              {[0, 1, 2, 3, 4, 5, 6].map(dayOffset => {
                const dayShifts = filteredEvents.filter(event => {
                  const eventDay = new Date(event.start).getDay();
                  const targetDay = (dayOffset + 1) % 7;
                  const eventHour = new Date(event.start).getHours();
                  return (eventDay === targetDay || (targetDay === 0 && eventDay === 0)) && 
                         eventHour >= timeBlock.start && eventHour < timeBlock.end;
                });
                
                return (
                  <div 
                    key={dayOffset} 
                    className="p-2 border-r border-slate-700 last:border-r-0 min-h-[120px] bg-slate-900 transition-colors"
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, dayOffset, timeBlock)}
                  >
                    {dayShifts.length > 0 ? (
                      <div className="space-y-1">
                        {dayShifts.map((shift, idx) => {
                          const employee = mockEmployees.find(emp => emp.id === shift.employeeId);
                          const guildData = shift.employeeId ? guildLevels[shift.employeeId] : null;
                          const isStar = isStarEmployee(guildData);
                          
                          // Check if already posted to marketplace
                          const marketplacePosting = marketplacePostedShifts.find(
                            posting => posting.shift.id === shift.id
                          );
                          
                          // If this is a callout/open shift
                          if (shift.isCallout) {
                            // If posted to marketplace, show awaiting status
                            if (marketplacePosting) {
                              return (
                                <div
                                  key={idx}
                                  className="w-full p-3 rounded-lg bg-gradient-to-br from-red-900 to-rose-900 border-2 border-orange-500 text-white font-bold shadow-lg animate-pulse"
                                >
                                  <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center gap-1 text-orange-300">
                                      <ShoppingBag className="w-4 h-4 animate-bounce" />
                                      <span className="text-xs uppercase">BONUS POSTED</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-lg">
                                      <DollarSign className="w-5 h-5" />
                                      <span>${marketplacePosting.bonus} BONUS</span>
                                    </div>
                                    <div className="text-[8px] text-orange-200">🕐 Awaiting Pickup</div>
                                    <button
                                      onClick={() => {
                                        // Simulate someone claiming the shift
                                        const claimedShift = {
                                          ...shift,
                                          employeeName: "Marcus Chen",
                                          employeeId: "8",
                                          isCallout: false,
                                          claimedViaMarketplace: true,
                                          marketplaceBonus: marketplacePosting.bonus
                                        };
                                        setShifts(shifts.map(s => s.id === shift.id ? claimedShift : s));
                                        // Remove from marketplace postings
                                        setMarketplacePostedShifts(prev => prev.filter(p => p.shift.id !== shift.id));
                                      }}
                                      className="mt-2 px-3 py-1 bg-green-600 hover:bg-green-500 rounded text-xs transition-all"
                                    >
                                      ✓ Simulate Claim
                                    </button>
                                  </div>
                                </div>
                              );
                            }
                            
                            // Not posted yet, show offer button
                            return (
                              <button
                                key={idx}
                                onClick={() => {
                                  setSelectedShiftForBonus(shift);
                                  setShowBonusOffer(true);
                                }}
                                className="w-full p-3 rounded-lg bg-gradient-to-br from-red-900 to-rose-900 border-2 border-red-500 text-white font-bold shadow-lg hover:from-red-800 hover:to-rose-800 transition-all hover:scale-105 cursor-pointer animate-pulse"
                              >
                                <div className="flex flex-col items-center gap-1">
                                  <div className="flex items-center gap-1 text-yellow-300">
                                    <AlertTriangle className="w-4 h-4" />
                                    <span className="text-xs uppercase">NEEDS COVERAGE</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-lg">
                                    <DollarSign className="w-5 h-5" />
                                    <span>OFFER BONUS?</span>
                                  </div>
                                  <div className="text-[8px] text-red-200 opacity-75">(Optional)</div>
                                </div>
                              </button>
                            );
                          }
                          
                          return (
                            <div 
                              key={idx}
                              className="group relative"
                              onContextMenu={(e) => {
                                e.preventDefault();
                                setContextMenu({
                                  show: true,
                                  x: e.clientX,
                                  y: e.clientY,
                                  shift: shift
                                });
                              }}
                            >
                              <div 
                                draggable
                                onDragStart={(e) => handleDragStart(e, shift)}
                                className={`flex items-center gap-2 p-2 rounded-lg bg-slate-800 text-slate-100 text-xs font-semibold shadow-sm border-l-4 cursor-move hover:bg-slate-700 hover:scale-105 transition-all active:opacity-50 relative ${isStar && showStarAnimation ? 'star-employee-card' : ''}`}
                                style={{ 
                                  borderLeftColor: shift.color,
                                  ...(isStar && showStarAnimation ? {
                                    '--tracer-color-light': hexToRgba(tracerColor, 0.8),
                                    '--tracer-color-medium': hexToRgba(tracerColor, 0.4),
                                    '--tracer-color-soft': hexToRgba(tracerColor, 0.3),
                                    '--tracer-color-faint': hexToRgba(tracerColor, 0.1),
                                  } as React.CSSProperties : {})
                                }}
                              >
                                {/* Timeclock status indicator */}
                                {shift.employeeId && timeclockData[shift.employeeId] && (
                                  <div className="absolute -top-1 -right-1 z-10">
                                    {timeclockData[shift.employeeId].status === 'on-time' && (
                                      <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800" title="Clocked in on time" />
                                    )}
                                    {timeclockData[shift.employeeId].status === 'late' && (
                                      <div className="w-3 h-3 bg-yellow-500 rounded-full border-2 border-slate-800 animate-pulse" title="Clocked in late" />
                                    )}
                                    {timeclockData[shift.employeeId].status === 'no-show' && (
                                      <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-slate-800 animate-pulse" title="No show - not clocked in" />
                                    )}
                                  </div>
                                )}
                                {employee?.avatar && (
                                  <img 
                                    src={employee.avatar} 
                                    alt={employee.name}
                                    className="w-6 h-6 rounded-full border-2 border-slate-600"
                                  />
                                )}
                                <div className="flex-1 overflow-hidden">
                                  <div className="flex items-center gap-1">
                                    {isStar && <span className="text-yellow-300 animate-pulse">⭐</span>}
                                    <div className="truncate font-bold">{shift.employeeName}</div>
                                    {guildData && (
                                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-black border ${getLevelColor(guildData.levelName)}`}
                                            title={`Rank #${guildData.rank} • ${guildData.xp} XP`}>
                                        Lv{guildData.level}
                                      </span>
                                    )}
                                  </div>
                                  <div className="truncate text-[10px] opacity-90">{shift.location}</div>
                                  {guildData && (
                                    <div className="text-[9px] opacity-75 truncate">
                                      🏆 Rank #{guildData.rank} • {guildData.levelName}
                                    </div>
                                  )}
                                  {/* Marketplace pickup badge */}
                                  {shift.claimedViaMarketplace && shift.marketplaceBonus && (
                                    <div className="text-[9px] bg-emerald-600 text-white px-1.5 py-0.5 rounded font-bold inline-flex items-center gap-1 mt-0.5">
                                      <ShoppingBag className="w-2.5 h-2.5" />
                                      Picked up shift (+${shift.marketplaceBonus})
                                    </div>
                                  )}
                                  {/* Payroll preview */}
                                  {shift.employeeId && (
                                    <div className="text-[8px] text-green-400 opacity-90 truncate" title="Shift earnings with performance bonus">
                                      💵 ${(calculateShiftEarnings(shift, shift.employeeId).total + (shift.marketplaceBonus || 0)).toFixed(0)}
                                    </div>
                                  )}
                                  {/* Marketplace bonus indicator */}
                                  {marketplacePostedShifts.find(posting => posting.shift.id === shift.id) && (
                                    <div className="text-[9px] bg-green-500 text-white px-1.5 py-0.5 rounded-full font-bold inline-flex items-center gap-1 mt-1">
                                      <ShoppingBag className="w-2.5 h-2.5" />
                                      ${marketplacePostedShifts.find(posting => posting.shift.id === shift.id)?.bonus} Market Bonus
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-slate-500 text-xs italic text-center mt-4">No staff</div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
      
      {/* Traditional Calendar View */}
      {viewMode === 'calendar' && (
        <DnDCalendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700, background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #0001" }}
          draggableAccessor={() => true}
          resizable
          onEventDrop={() => {}}
          onEventResize={() => {}}
          eventPropGetter={eventStyleGetter as any}
          components={{
            event: ({ event }: any) => {
              const shiftEvent = event as ShiftEvent;
              const employee = mockEmployees.find(emp => emp.id === shiftEvent.employeeId);
              
              // Check if this shift has been posted to marketplace
              const marketplacePosting = marketplacePostedShifts.find(
                posting => posting.shift.id === shiftEvent.id
              );
              
              return (
                <div className="flex items-center gap-1 text-white relative" style={{ fontSize: '12px' }}>
                  {employee?.avatar && (
                    <img 
                      src={employee.avatar} 
                      alt={employee.name}
                      className="w-5 h-5 rounded-full border border-white/50"
                    />
                  )}
                  <div className="flex-1 overflow-hidden">
                    <div className="font-semibold truncate">{shiftEvent.employeeName}</div>
                    <div className="text-xs opacity-90 truncate">{shiftEvent.title}</div>
                    {/* Show if claimed via marketplace */}
                    {shiftEvent.claimedViaMarketplace && shiftEvent.marketplaceBonus && (
                      <div className="text-[10px] bg-emerald-600 text-white px-1 py-0.5 rounded font-bold inline-flex items-center gap-0.5 mt-0.5">
                        <ShoppingBag className="w-2.5 h-2.5" />
                        Picked up (+${shiftEvent.marketplaceBonus})
                      </div>
                    )}
                    {/* Show if still awaiting pickup in marketplace */}
                    {marketplacePosting && !shiftEvent.claimedViaMarketplace && (
                      <div className="text-[10px] bg-orange-500 text-white px-1 py-0.5 rounded font-bold inline-flex items-center gap-0.5 mt-0.5">
                        <ShoppingBag className="w-2.5 h-2.5" />
                        ${marketplacePosting.bonus} - Awaiting
                      </div>
                    )}
                  </div>
                  {shiftEvent.isOvertime && <Clock size={12} className="text-red-300 animate-bounce" />}
                  {shiftEvent.notes && <AlertTriangle size={12} className="text-yellow-300 animate-pulse" />}
                  {/* Show pulsing icon if awaiting pickup */}
                  {marketplacePosting && !shiftEvent.claimedViaMarketplace && (
                    <div className="absolute -top-1 -right-1 bg-orange-500 rounded-full p-0.5 animate-pulse">
                      <ShoppingBag className="w-3 h-3 text-white" />
                    </div>
                  )}
                  {/* Show check icon if claimed */}
                  {shiftEvent.claimedViaMarketplace && (
                    <div className="absolute -top-1 -right-1 bg-emerald-500 rounded-full p-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              );
            },
          }}
        />
      )}
      
      {/* Shift Swap Requests Modal */}
      {showSwapRequests && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowSwapRequests(false)}>
          <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-blue-500/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900 p-6 border-b-2 border-blue-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <User className="w-7 h-7 text-blue-300" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Shift Swap Requests</h2>
                    <p className="text-blue-200 text-sm">Review and approve employee swap requests</p>
                  </div>
                </div>
                <button onClick={() => setShowSwapRequests(false)} className="text-white hover:text-blue-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {shiftSwapRequests.filter(r => r.status === 'pending').map((request) => (
                <div key={request.id} className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/30">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-white">{request.fromEmployee}</span>
                        <span className="text-slate-400">→</span>
                        <span className="font-bold text-blue-400">{request.toEmployee}</span>
                      </div>
                      <div className="text-sm text-slate-300 mb-1">{request.shift.title}</div>
                      <div className="text-xs text-slate-400">
                        {request.shift.start.toLocaleDateString()} • {request.shift.location}
                      </div>
                      <div className="text-xs text-slate-500 mt-2">
                        Requested {Math.floor((Date.now() - request.timestamp.getTime()) / 60000)} min ago
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setShiftSwapRequests(shiftSwapRequests.map(r => 
                            r.id === request.id ? {...r, status: 'approved'} : r
                          ));
                        }}
                        className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded font-semibold text-sm"
                      >
                        ✓ Approve
                      </button>
                      <button
                        onClick={() => {
                          setShiftSwapRequests(shiftSwapRequests.map(r => 
                            r.id === request.id ? {...r, status: 'denied'} : r
                          ));
                        }}
                        className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded font-semibold text-sm"
                      >
                        ✗ Deny
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {shiftSwapRequests.filter(r => r.status === 'pending').length === 0 && (
                <div className="text-center text-slate-400 py-8">No pending swap requests</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Time-Off Approval Modal */}
      {showTimeOffApproval && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowTimeOffApproval(false)}>
          <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-yellow-500/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-yellow-900 via-orange-900 to-yellow-900 p-6 border-b-2 border-yellow-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-7 h-7 text-yellow-300" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Time-Off Requests</h2>
                    <p className="text-yellow-200 text-sm">Approve or deny employee time-off requests</p>
                  </div>
                </div>
                <button onClick={() => setShowTimeOffApproval(false)} className="text-white hover:text-yellow-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {timeOffRequests.filter(r => r.status === 'pending').map((request) => (
                <div key={request.id} className="bg-slate-800/50 rounded-lg p-4 border border-yellow-500/30">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-bold text-white mb-2">{request.employeeName}</div>
                      <div className="text-sm text-slate-300 mb-1">
                        {request.startDate.toLocaleDateString()} - {request.endDate.toLocaleDateString()}
                      </div>
                      <div className="text-sm text-yellow-300 italic">{request.reason}</div>
                      <div className="text-xs text-slate-400 mt-2">
                        {Math.ceil((request.endDate.getTime() - request.startDate.getTime()) / (1000 * 60 * 60 * 24))} days requested
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setTimeOffRequests(timeOffRequests.map(r => 
                            r.id === request.id ? {...r, status: 'approved'} : r
                          ));
                        }}
                        className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded font-semibold text-sm"
                      >
                        ✓ Approve
                      </button>
                      <button
                        onClick={() => {
                          setTimeOffRequests(timeOffRequests.map(r => 
                            r.id === request.id ? {...r, status: 'denied'} : r
                          ));
                        }}
                        className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded font-semibold text-sm"
                      >
                        ✗ Deny
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {timeOffRequests.filter(r => r.status === 'pending').length === 0 && (
                <div className="text-center text-slate-400 py-8">No pending time-off requests</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* PTO Donation Modal */}
      {showPTODonations && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowPTODonations(false)}>
          <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-pink-500/50 max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-pink-900 via-purple-900 to-pink-900 p-6 border-b-2 border-pink-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="w-7 h-7 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <div>
                    <h2 className="text-2xl font-bold text-white">PTO/Sick Time Donations</h2>
                    <p className="text-pink-200 text-sm">Support colleagues in need by sharing your time off</p>
                  </div>
                </div>
                <button onClick={() => setShowPTODonations(false)} className="text-white hover:text-pink-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              {/* Active Donation Requests */}
              <div>
                <h3 className="text-lg font-bold text-pink-200 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Active Donation Requests
                </h3>
                <div className="space-y-4">
                  {ptoDonationRequests.filter(r => r.status === 'active').map((request) => {
                    const percentFunded = (request.hoursReceived / request.hoursNeeded) * 100;
                    return (
                      <div key={request.id} className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-lg p-5 border-2 border-pink-500/30">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <img 
                                src={mockEmployees.find(e => e.id === request.recipientId)?.avatar} 
                                alt={request.recipientName}
                                className="w-10 h-10 rounded-full border-2 border-pink-400"
                              />
                              <div>
                                <div className="font-bold text-white text-lg">{request.recipientName}</div>
                                <div className="text-sm text-pink-200">{mockEmployees.find(e => e.id === request.recipientId)?.department}</div>
                              </div>
                            </div>
                            <div className="text-sm text-slate-300 italic mb-3 pl-12">"{request.reason}"</div>
                            
                            {/* Progress Bar */}
                            <div className="mb-3">
                              <div className="flex items-center justify-between mb-1 text-sm">
                                <span className="text-pink-300 font-semibold">{request.hoursReceived} hrs donated</span>
                                <span className="text-slate-400">{request.hoursNeeded} hrs needed</span>
                              </div>
                              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 relative"
                                  style={{ width: `${Math.min(percentFunded, 100)}%` }}
                                >
                                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                </div>
                              </div>
                              <div className="text-xs text-pink-300 mt-1 font-bold">{percentFunded.toFixed(0)}% funded</div>
                            </div>
                            
                            <div className="text-xs text-slate-400">
                              Posted {Math.floor((Date.now() - request.timestamp.getTime()) / 86400000)} days ago
                            </div>
                          </div>
                        </div>
                        
                        {/* Donation Form */}
                        <div className="bg-slate-800/50 rounded-lg p-4 border border-pink-500/20 mt-3">
                          <div className="grid grid-cols-3 gap-3">
                            <div>
                              <label className="block text-xs font-semibold text-pink-200 mb-1">Your Balance</label>
                              <div className="bg-slate-700 rounded px-3 py-2 text-sm text-white">
                                <div>PTO: {employeePTOBalances['1']?.pto || 0} hrs</div>
                                <div>Sick: {employeePTOBalances['1']?.sick || 0} hrs</div>
                              </div>
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-pink-200 mb-1">Donate Hours</label>
                              <input 
                                type="number" 
                                placeholder="8"
                                min="4"
                                max="40"
                                step="4"
                                className="w-full bg-slate-700 border border-pink-500/30 rounded px-3 py-2 text-white text-sm focus:ring-2 focus:ring-pink-500 outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-pink-200 mb-1">Type</label>
                              <select className="w-full bg-slate-700 border border-pink-500/30 rounded px-3 py-2 text-white text-sm focus:ring-2 focus:ring-pink-500 outline-none">
                                <option>PTO</option>
                                <option>Sick</option>
                              </select>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              const donorBalance = employeePTOBalances['1'];
                              const donationAmount = 8; // Would come from input
                              
                              // Update balances
                              setEmployeePTOBalances({
                                ...employeePTOBalances,
                                '1': { ...donorBalance, pto: donorBalance.pto - donationAmount },
                                [request.recipientId]: { 
                                  ...employeePTOBalances[request.recipientId], 
                                  pto: (employeePTOBalances[request.recipientId]?.pto || 0) + donationAmount 
                                }
                              });
                              
                              // Update request
                              setPTODonationRequests(ptoDonationRequests.map(r =>
                                r.id === request.id ? { ...r, hoursReceived: r.hoursReceived + donationAmount } : r
                              ));
                              
                              // Add to history
                              setPTODonationHistory([
                                ...ptoDonationHistory,
                                {
                                  id: ptoDonationHistory.length + 1,
                                  donorId: '1',
                                  donorName: 'Sarah Martinez',
                                  recipientId: request.recipientId,
                                  recipientName: request.recipientName,
                                  hours: donationAmount,
                                  type: 'PTO',
                                  timestamp: new Date()
                                }
                              ]);
                              
                              alert(`Successfully donated ${donationAmount} hours to ${request.recipientName}!`);
                            }}
                            className="mt-3 w-full px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Donate Time
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  {ptoDonationRequests.filter(r => r.status === 'active').length === 0 && (
                    <div className="text-center text-slate-400 py-8 border-2 border-dashed border-slate-600 rounded-lg">
                      No active donation requests
                    </div>
                  )}
                </div>
              </div>
              
              {/* Recent Donation History */}
              <div>
                <h3 className="text-lg font-bold text-purple-200 mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Recent Donations - Wall of Generosity
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {ptoDonationHistory.slice(0, 6).map((donation) => (
                    <div key={donation.id} className="bg-slate-800/50 rounded-lg p-3 border border-purple-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <img 
                          src={mockEmployees.find(e => e.id === donation.donorId)?.avatar} 
                          alt={donation.donorName}
                          className="w-8 h-8 rounded-full border-2 border-purple-400"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-white">{donation.donorName}</div>
                          <div className="text-xs text-slate-400">
                            donated to {donation.recipientName}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-purple-400">{donation.hours} hrs</div>
                          <div className="text-[10px] text-slate-400">{donation.type}</div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500">
                        {Math.floor((Date.now() - donation.timestamp.getTime()) / 3600000)} hours ago
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Create New Request (Manager Only) */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-5 border-2 border-slate-600">
                <h3 className="text-lg font-bold text-white mb-4">Create Donation Request (Manager)</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-1">Employee</label>
                    <select className="w-full bg-slate-700 border border-slate-500 rounded px-3 py-2 text-white focus:ring-2 focus:ring-pink-500 outline-none">
                      {mockEmployees.map(emp => (
                        <option key={emp.id} value={emp.id}>{emp.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-1">Hours Needed</label>
                    <input 
                      type="number" 
                      placeholder="40"
                      className="w-full bg-slate-700 border border-slate-500 rounded px-3 py-2 text-white focus:ring-2 focus:ring-pink-500 outline-none"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-sm font-semibold text-slate-300 mb-1">Reason</label>
                  <textarea 
                    placeholder="Brief description of the situation..."
                    className="w-full bg-slate-700 border border-slate-500 rounded px-3 py-2 text-white focus:ring-2 focus:ring-pink-500 outline-none h-20"
                  />
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded-lg font-bold transition-all">
                  Create Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Context Menu */}
      {contextMenu.show && contextMenu.shift && (
        <div 
          className="fixed bg-slate-900 border-2 border-purple-500 rounded-lg shadow-2xl py-2 z-[100]"
          style={{ left: contextMenu.x, top: contextMenu.y }}
          onMouseLeave={() => setContextMenu({...contextMenu, show: false})}
        >
          <button className="w-full px-4 py-2 text-left text-white hover:bg-purple-600 flex items-center gap-2">
            <Copy className="w-4 h-4" /> Copy Shift
          </button>
          <button className="w-full px-4 py-2 text-left text-white hover:bg-purple-600 flex items-center gap-2">
            <User className="w-4 h-4" /> Swap Shift
          </button>
          <button className="w-full px-4 py-2 text-left text-white hover:bg-purple-600 flex items-center gap-2">
            <DollarSign className="w-4 h-4" /> Add Bonus
          </button>
          <button className="w-full px-4 py-2 text-left text-white hover:bg-purple-600 flex items-center gap-2">
            <Coffee className="w-4 h-4" /> Add Break
          </button>
          <div className="border-t border-slate-700 my-1"></div>
          <button className="w-full px-4 py-2 text-left text-red-400 hover:bg-red-600 hover:text-white flex items-center gap-2">
            <XCircle className="w-4 h-4" /> Delete Shift
          </button>
        </div>
      )}
      
      {/* Marketplace Confirmation Toast */}
      {showMarketplaceConfirmation && (
        <div className="fixed top-20 right-6 z-[100] animate-in slide-in-from-right">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl shadow-2xl p-4 border-2 border-green-400 max-w-sm">
            <div className="flex items-start gap-3">
              <div className="bg-white/20 rounded-full p-2">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-lg mb-1">Posted to Marketplace! 🎉</div>
                <div className="text-sm text-green-100">
                  {marketplacePostedShifts.length > 0 && (
                    <>
                      {marketplacePostedShifts[marketplacePostedShifts.length - 1].shift.title} with ${marketplacePostedShifts[marketplacePostedShifts.length - 1].bonus} bonus is now live!
                    </>
                  )}
                </div>
                <div className="text-xs text-green-200 mt-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Employees will be notified
                </div>
              </div>
              <button 
                onClick={() => setShowMarketplaceConfirmation(false)}
                className="text-white/80 hover:text-white"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
