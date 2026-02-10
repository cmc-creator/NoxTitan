/**
 * Payroll Calculation Utilities
 * Handles shift differentials, overtime, and total pay calculations
 */

export interface ShiftPayrollData {
  startTime: Date;
  endTime: Date;
  hourlyRate: number;
  breakMinutes?: number;
  isHoliday?: boolean;
  nightDifferential?: number;
  weekendDifferential?: number;
  holidayDifferential?: number;
  overtimeRate?: number;
  weeklyHoursWorked?: number; // For overtime calculation
}

export interface PayrollCalculation {
  regularHours: number;
  overtimeHours: number;
  nightHours: number;
  weekendHours: number;
  isNightShift: boolean;
  isWeekend: boolean;
  regularPay: number;
  nightPremium: number;
  weekendPremium: number;
  holidayPremium: number;
  overtimePay: number;
  totalPay: number;
  breakdown: string[];
}

/**
 * Calculate if shift is during night hours (10 PM - 6 AM)
 */
export function isNightShift(startTime: Date, endTime: Date): boolean {
  const startHour = startTime.getHours();
  const endHour = endTime.getHours();
  
  // Night shift if starts after 10 PM or before 6 AM
  return startHour >= 22 || startHour < 6 || endHour <= 6;
}

/**
 * Calculate if shift is on weekend (Saturday or Sunday)
 */
export function isWeekendShift(startTime: Date): boolean {
  const day = startTime.getDay();
  return day === 0 || day === 6; // Sunday = 0, Saturday = 6
}

/**
 * Calculate hours worked in shift (excluding breaks)
 */
export function calculateShiftHours(
  startTime: Date, 
  endTime: Date, 
  breakMinutes: number = 0
): number {
  const milliseconds = endTime.getTime() - startTime.getTime();
  const hours = milliseconds / (1000 * 60 * 60);
  const breakHours = breakMinutes / 60;
  return Math.max(0, hours - breakHours);
}

/**
 * Calculate how many hours of a shift fall during night hours
 */
export function calculateNightHours(startTime: Date, endTime: Date): number {
  let nightHours = 0;
  const current = new Date(startTime);
  
  while (current < endTime) {
    const hour = current.getHours();
    
    // Count hours between 10 PM (22:00) and 6 AM (06:00)
    if (hour >= 22 || hour < 6) {
      nightHours += 1;
    }
    
    current.setHours(current.getHours() + 1);
  }
  
  return nightHours;
}

/**
 * Calculate comprehensive payroll for a shift
 */
export function calculateShiftPayroll(data: ShiftPayrollData): PayrollCalculation {
  const {
    startTime,
    endTime,
    hourlyRate,
    breakMinutes = 0,
    isHoliday = false,
    nightDifferential = 1.5,
    weekendDifferential = 1.25,
    holidayDifferential = 2.0,
    overtimeRate = 1.5,
    weeklyHoursWorked = 0,
  } = data;

  const breakdown: string[] = [];
  
  // Calculate total hours
  const totalHours = calculateShiftHours(startTime, endTime, breakMinutes);
  const nightHours = calculateNightHours(startTime, endTime);
  const isNight = isNightShift(startTime, endTime);
  const isWeekend = isWeekendShift(startTime);
  
  // Determine overtime hours (over 40 hours per week)
  let overtimeHours = 0;
  let regularHours = totalHours;
  
  if (weeklyHoursWorked + totalHours > 40) {
    overtimeHours = Math.min(totalHours, (weeklyHoursWorked + totalHours) - 40);
    regularHours = totalHours - overtimeHours;
  }
  
  // Base pay for regular hours
  let regularPay = regularHours * hourlyRate;
  breakdown.push(`Regular: ${regularHours.toFixed(2)} hrs × $${hourlyRate.toFixed(2)} = $${regularPay.toFixed(2)}`);
  
  // Overtime pay
  let overtimePay = 0;
  if (overtimeHours > 0) {
    overtimePay = overtimeHours * hourlyRate * overtimeRate;
    breakdown.push(`Overtime: ${overtimeHours.toFixed(2)} hrs × $${hourlyRate.toFixed(2)} × ${overtimeRate}x = $${overtimePay.toFixed(2)}`);
  }
  
  // Holiday premium (applies to all hours)
  let holidayPremium = 0;
  if (isHoliday) {
    holidayPremium = totalHours * hourlyRate * (holidayDifferential - 1);
    breakdown.push(`Holiday Premium: ${totalHours.toFixed(2)} hrs × $${hourlyRate.toFixed(2)} × ${holidayDifferential - 1}x = $${holidayPremium.toFixed(2)}`);
  }
  
  // Night differential (only for night hours)
  let nightPremium = 0;
  if (isNight && nightHours > 0 && !isHoliday) {
    nightPremium = nightHours * hourlyRate * (nightDifferential - 1);
    breakdown.push(`Night Differential: ${nightHours.toFixed(2)} hrs × $${hourlyRate.toFixed(2)} × ${nightDifferential - 1}x = $${nightPremium.toFixed(2)}`);
  }
  
  // Weekend differential (only if not holiday)
  let weekendPremium = 0;
  if (isWeekend && !isHoliday) {
    weekendPremium = totalHours * hourlyRate * (weekendDifferential - 1);
    breakdown.push(`Weekend Differential: ${totalHours.toFixed(2)} hrs × $${hourlyRate.toFixed(2)} × ${weekendDifferential - 1}x = $${weekendPremium.toFixed(2)}`);
  }
  
  // Total pay
  const totalPay = regularPay + overtimePay + holidayPremium + nightPremium + weekendPremium;
  breakdown.push(`Total: $${totalPay.toFixed(2)}`);
  
  return {
    regularHours,
    overtimeHours,
    nightHours,
    weekendHours: isWeekend ? totalHours : 0,
    isNightShift: isNight,
    isWeekend,
    regularPay,
    nightPremium,
    weekendPremium,
    holidayPremium,
    overtimePay,
    totalPay,
    breakdown,
  };
}

/**
 * Format payroll calculation for display
 */
export function formatPayrollSummary(calc: PayrollCalculation): string {
  return calc.breakdown.join('\n');
}

/**
 * Calculate weekly payroll for multiple shifts
 */
export function calculateWeeklyPayroll(
  shifts: Array<{
    startTime: Date;
    endTime: Date;
    hourlyRate: number;
    breakMinutes?: number;
    isHoliday?: boolean;
  }>,
  userSettings: {
    nightDifferential?: number;
    weekendDifferential?: number;
    holidayDifferential?: number;
    overtimeRate?: number;
  }
): {
  totalHours: number;
  regularHours: number;
  overtimeHours: number;
  totalPay: number;
  shifts: PayrollCalculation[];
} {
  let totalHours = 0;
  let cumulativeHours = 0;
  const calculations: PayrollCalculation[] = [];
  
  // Sort shifts by start time
  const sortedShifts = [...shifts].sort((a, b) => 
    a.startTime.getTime() - b.startTime.getTime()
  );
  
  for (const shift of sortedShifts) {
    const calc = calculateShiftPayroll({
      ...shift,
      ...userSettings,
      weeklyHoursWorked: cumulativeHours,
    });
    
    calculations.push(calc);
    const shiftHours = calc.regularHours + calc.overtimeHours;
    totalHours += shiftHours;
    cumulativeHours += shiftHours;
  }
  
  const totalPay = calculations.reduce((sum, calc) => sum + calc.totalPay, 0);
  const regularHours = calculations.reduce((sum, calc) => sum + calc.regularHours, 0);
  const overtimeHours = calculations.reduce((sum, calc) => sum + calc.overtimeHours, 0);
  
  return {
    totalHours,
    regularHours,
    overtimeHours,
    totalPay,
    shifts: calculations,
  };
}
