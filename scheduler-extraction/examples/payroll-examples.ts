// Example: Payroll Calculation Usage
// This demonstrates how to use the payroll utilities

import {
  calculateShiftPayroll,
  calculateWeeklyPayroll,
  isNightShift,
  isWeekendShift,
  calculateShiftHours,
} from '../lib/payroll';

// Example 1: Calculate pay for a single shift
function example1_SingleShiftCalculation() {
  const shift = {
    startTime: new Date('2024-01-15T08:00:00'),  // 8 AM
    endTime: new Date('2024-01-15T17:00:00'),    // 5 PM
    hourlyRate: 25.00,
    breakMinutes: 30,
    isHoliday: false,
    nightDifferential: 1.5,
    weekendDifferential: 1.25,
    holidayDifferential: 2.0,
    overtimeRate: 1.5,
    weeklyHoursWorked: 0, // First shift of the week
  };

  const payroll = calculateShiftPayroll(shift);

  console.log('=== Single Shift Calculation ===');
  console.log('Regular Hours:', payroll.regularHours);        // 8.5 hours
  console.log('Overtime Hours:', payroll.overtimeHours);      // 0 hours
  console.log('Total Pay:', `$${payroll.totalPay.toFixed(2)}`);  // $212.50
  console.log('\nBreakdown:');
  payroll.breakdown.forEach(line => console.log('  ' + line));
}

// Example 2: Calculate pay for a night shift with weekend differential
function example2_NightWeekendShift() {
  const shift = {
    startTime: new Date('2024-01-13T22:00:00'),  // Saturday 10 PM
    endTime: new Date('2024-01-14T06:00:00'),    // Sunday 6 AM
    hourlyRate: 25.00,
    breakMinutes: 30,
    isHoliday: false,
    nightDifferential: 1.5,
    weekendDifferential: 1.25,
    weeklyHoursWorked: 32,
  };

  const payroll = calculateShiftPayroll(shift);

  console.log('\n=== Night + Weekend Shift Calculation ===');
  console.log('Regular Hours:', payroll.regularHours);           // 7.5 hours
  console.log('Night Hours:', payroll.nightHours);               // 8 hours
  console.log('Is Night Shift:', payroll.isNightShift);          // true
  console.log('Is Weekend:', payroll.isWeekend);                 // true
  console.log('Night Premium:', `$${payroll.nightPremium.toFixed(2)}`);      // Extra pay
  console.log('Weekend Premium:', `$${payroll.weekendPremium.toFixed(2)}`);  // Extra pay
  console.log('Total Pay:', `$${payroll.totalPay.toFixed(2)}`);
  console.log('\nBreakdown:');
  payroll.breakdown.forEach(line => console.log('  ' + line));
}

// Example 3: Calculate pay with overtime
function example3_OvertimeShift() {
  const shift = {
    startTime: new Date('2024-01-15T08:00:00'),
    endTime: new Date('2024-01-15T17:00:00'),
    hourlyRate: 25.00,
    breakMinutes: 30,
    isHoliday: false,
    weeklyHoursWorked: 38,  // Already worked 38 hours this week
  };

  const payroll = calculateShiftPayroll(shift);

  console.log('\n=== Overtime Shift Calculation ===');
  console.log('Regular Hours:', payroll.regularHours);      // 2 hours (to reach 40)
  console.log('Overtime Hours:', payroll.overtimeHours);    // 6.5 hours (over 40)
  console.log('Regular Pay:', `$${payroll.regularPay.toFixed(2)}`);
  console.log('Overtime Pay:', `$${payroll.overtimePay.toFixed(2)}`);
  console.log('Total Pay:', `$${payroll.totalPay.toFixed(2)}`);
}

// Example 4: Calculate pay for a holiday shift
function example4_HolidayShift() {
  const shift = {
    startTime: new Date('2024-12-25T08:00:00'),  // Christmas Day
    endTime: new Date('2024-12-25T17:00:00'),
    hourlyRate: 25.00,
    breakMinutes: 30,
    isHoliday: true,  // Holiday flag
    holidayDifferential: 2.0,  // Double time for holidays
    weeklyHoursWorked: 0,
  };

  const payroll = calculateShiftPayroll(shift);

  console.log('\n=== Holiday Shift Calculation ===');
  console.log('Regular Hours:', payroll.regularHours);
  console.log('Holiday Premium:', `$${payroll.holidayPremium.toFixed(2)}`);
  console.log('Total Pay:', `$${payroll.totalPay.toFixed(2)}`);  // Double time!
  console.log('\nBreakdown:');
  payroll.breakdown.forEach(line => console.log('  ' + line));
}

// Example 5: Calculate weekly payroll for multiple shifts
function example5_WeeklyPayroll() {
  const shifts = [
    {
      startTime: new Date('2024-01-15T08:00:00'),
      endTime: new Date('2024-01-15T17:00:00'),
      hourlyRate: 25.00,
      breakMinutes: 30,
    },
    {
      startTime: new Date('2024-01-16T08:00:00'),
      endTime: new Date('2024-01-16T17:00:00'),
      hourlyRate: 25.00,
      breakMinutes: 30,
    },
    {
      startTime: new Date('2024-01-17T08:00:00'),
      endTime: new Date('2024-01-17T17:00:00'),
      hourlyRate: 25.00,
      breakMinutes: 30,
    },
    {
      startTime: new Date('2024-01-18T08:00:00'),
      endTime: new Date('2024-01-18T17:00:00'),
      hourlyRate: 25.00,
      breakMinutes: 30,
    },
    {
      startTime: new Date('2024-01-19T08:00:00'),
      endTime: new Date('2024-01-19T17:00:00'),
      hourlyRate: 25.00,
      breakMinutes: 30,
    },
    {
      startTime: new Date('2024-01-20T08:00:00'),
      endTime: new Date('2024-01-20T17:00:00'),
      hourlyRate: 25.00,
      breakMinutes: 30,
    },
  ];

  const userSettings = {
    nightDifferential: 1.5,
    weekendDifferential: 1.25,
    holidayDifferential: 2.0,
    overtimeRate: 1.5,
  };

  const weeklyPayroll = calculateWeeklyPayroll(shifts, userSettings);

  console.log('\n=== Weekly Payroll Summary ===');
  console.log('Total Hours:', weeklyPayroll.totalHours);          // 51 hours
  console.log('Regular Hours:', weeklyPayroll.regularHours);      // 40 hours
  console.log('Overtime Hours:', weeklyPayroll.overtimeHours);    // 11 hours
  console.log('Total Pay:', `$${weeklyPayroll.totalPay.toFixed(2)}`);
  console.log('\nPer-Shift Breakdown:');
  weeklyPayroll.shifts.forEach((shift, idx) => {
    console.log(`  Shift ${idx + 1}: $${shift.totalPay.toFixed(2)} (${shift.regularHours}h regular, ${shift.overtimeHours}h OT)`);
  });
}

// Example 6: Helper functions
function example6_HelperFunctions() {
  const nightStart = new Date('2024-01-15T22:00:00');   // 10 PM
  const nightEnd = new Date('2024-01-16T06:00:00');     // 6 AM
  
  const dayStart = new Date('2024-01-15T08:00:00');     // 8 AM
  const dayEnd = new Date('2024-01-15T17:00:00');       // 5 PM
  
  const saturdayDate = new Date('2024-01-13T08:00:00'); // Saturday
  const mondayDate = new Date('2024-01-15T08:00:00');   // Monday

  console.log('\n=== Helper Functions ===');
  console.log('Is night shift (10 PM - 6 AM):', isNightShift(nightStart, nightEnd));    // true
  console.log('Is day shift (8 AM - 5 PM):', isNightShift(dayStart, dayEnd));           // false
  console.log('Is weekend (Saturday):', isWeekendShift(saturdayDate));                  // true
  console.log('Is weekday (Monday):', isWeekendShift(mondayDate));                      // false
  console.log('Shift hours (8.5h with 30min break):', calculateShiftHours(dayStart, dayEnd, 30)); // 8.5
}

// Run all examples
export function runAllPayrollExamples() {
  example1_SingleShiftCalculation();
  example2_NightWeekendShift();
  example3_OvertimeShift();
  example4_HolidayShift();
  example5_WeeklyPayroll();
  example6_HelperFunctions();
}

// Export for use in other files
export {
  example1_SingleShiftCalculation,
  example2_NightWeekendShift,
  example3_OvertimeShift,
  example4_HolidayShift,
  example5_WeeklyPayroll,
  example6_HelperFunctions,
};
