import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create owner/admin account
  const ownerHash = await bcrypt.hash('Soldier10!', 10);
  await prisma.user.upsert({
    where: { email: 'connie@nyxtitan.com' },
    update: { passwordHash: ownerHash, tier: 'TITAN', isOrgAdmin: true },
    create: {
      email: 'connie@nyxtitan.com',
      name: 'Connie Michelle',
      passwordHash: ownerHash,
      tier: 'TITAN',
      isOrgAdmin: true,
    },
  });
  console.log('✅ Created owner account: connie@nyxtitan.com');

  // Create demo user
  const passwordHash = await bcrypt.hash('demo123456', 10);
  
  const user = await prisma.user.upsert({
    where: { email: 'demo@nyxtitan.com' },
    update: {},
    create: {
      email: 'demo@nyxtitan.com',
      name: 'Demo User',
      passwordHash,
      tier: 'VIP',
    },
  });

  console.log('✅ Created demo user:', user.email);

  // Create demo employees
  const employees = await Promise.all([
    prisma.employee.create({
      data: {
        userId: user.id,
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.johnson@example.com',
        phone: '(555) 123-4567',
        position: 'Registered Nurse',
        hourlyRate: 35.50,
        color: '#3B82F6',
      },
    }),
    prisma.employee.create({
      data: {
        userId: user.id,
        firstName: 'Michael',
        lastName: 'Chen',
        email: 'michael.chen@example.com',
        phone: '(555) 234-5678',
        position: 'Nurse Practitioner',
        hourlyRate: 45.00,
        color: '#8B5CF6',
      },
    }),
    prisma.employee.create({
      data: {
        userId: user.id,
        firstName: 'Emily',
        lastName: 'Rodriguez',
        email: 'emily.rodriguez@example.com',
        phone: '(555) 345-6789',
        position: 'Medical Assistant',
        hourlyRate: 22.00,
        color: '#EC4899',
      },
    }),
    prisma.employee.create({
      data: {
        userId: user.id,
        firstName: 'David',
        lastName: 'Williams',
        email: 'david.williams@example.com',
        phone: '(555) 456-7890',
        position: 'Physician',
        hourlyRate: 95.00,
        color: '#10B981',
      },
    }),
    prisma.employee.create({
      data: {
        userId: user.id,
        firstName: 'Lisa',
        lastName: 'Anderson',
        email: 'lisa.anderson@example.com',
        phone: '(555) 567-8901',
        position: 'Registered Nurse',
        hourlyRate: 33.00,
        color: '#F59E0B',
      },
    }),
  ]);

  console.log(`✅ Created ${employees.length} employees`);

  // Create demo shifts for this week
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const shifts = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    
    // Morning shift for first employee
    shifts.push(
      prisma.shift.create({
        data: {
          userId: user.id,
          employeeId: employees[i % employees.length].id,
          title: 'Morning Shift',
          startTime: new Date(date.setHours(7, 0, 0, 0)),
          endTime: new Date(date.setHours(15, 0, 0, 0)),
          position: employees[i % employees.length].position,
          color: employees[i % employees.length].color,
          isPublished: true,
        },
      })
    );
    
    // Afternoon shift for second employee
    const date2 = new Date(today);
    date2.setDate(date2.getDate() + i);
    shifts.push(
      prisma.shift.create({
        data: {
          userId: user.id,
          employeeId: employees[(i + 1) % employees.length].id,
          title: 'Afternoon Shift',
          startTime: new Date(date2.setHours(15, 0, 0, 0)),
          endTime: new Date(date2.setHours(23, 0, 0, 0)),
          position: employees[(i + 1) % employees.length].position,
          color: employees[(i + 1) % employees.length].color,
          isPublished: true,
        },
      })
    );
  }

  await Promise.all(shifts);
  console.log(`✅ Created ${shifts.length} shifts`);

  // Create demo time-off requests
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);
  
  await prisma.timeOffRequest.create({
    data: {
      userId: user.id,
      employeeId: employees[0].id,
      startDate: nextWeek,
      endDate: new Date(nextWeek.getTime() + 2 * 24 * 60 * 60 * 1000),
      reason: 'Family vacation',
      status: 'PENDING',
    },
  });

  console.log('✅ Created time-off requests');

  // ── Oracle AI: Prophecies + Predictive Insights ──────────────────────────
  await Promise.all([
    prisma.prophecy.create({
      data: {
        userId: user.id,
        prophecyType: 'FLIGHT_RISK',
        severity: 'HIGH',
        title: 'Flight Risk Detected — Sarah Johnson',
        prediction: 'Sarah Johnson shows a 78% probability of leaving within 60 days based on reduced shift pickups, decreased survey sentiment, and 3 consecutive late arrivals.',
        confidence: 78,
        targetEmployeeId: employees[0].id,
        impactDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
        dataPoints: [
          { label: 'Shift pickup rate', value: '40% (down from 85%)', trend: 'DECLINING' },
          { label: 'Survey sentiment', value: '2.1 / 5', trend: 'DECLINING' },
          { label: 'Late arrivals (last 30d)', value: '3', trend: 'INCREASING' },
          { label: 'PTO requests', value: '2 pending', trend: 'INCREASING' },
        ],
        recommendations: [
          'Schedule a 1-on-1 check-in this week',
          'Review compensation benchmarks for her role',
          'Offer flexible scheduling options',
          'Assign a mentor from senior staff',
        ],
        status: 'ACTIVE',
      },
    }),
    prisma.prophecy.create({
      data: {
        userId: user.id,
        prophecyType: 'BURNOUT',
        severity: 'MEDIUM',
        title: 'Burnout Risk — Michael Chen',
        prediction: 'Michael Chen has exceeded 52 hours/week for 4 consecutive weeks. Burnout probability is 65% if workload is not addressed in the next 2 weeks.',
        confidence: 65,
        targetEmployeeId: employees[1].id,
        impactDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        dataPoints: [
          { label: 'Avg weekly hours (last 4wks)', value: '54.2 hrs', trend: 'INCREASING' },
          { label: 'Overtime ratio', value: '38%', trend: 'INCREASING' },
          { label: 'Break compliance', value: '61%', trend: 'DECLINING' },
        ],
        recommendations: [
          'Cap shifts at 40 hours/week for next month',
          'Redistribute 2 upcoming shifts to available staff',
          'Enable auto-approval for time-off requests this quarter',
        ],
        status: 'ACTIVE',
      },
    }),
    prisma.prophecy.create({
      data: {
        userId: user.id,
        prophecyType: 'STAFFING_SHORTAGE',
        severity: 'CRITICAL',
        title: 'Weekend Staffing Shortage Predicted',
        prediction: 'Insufficient coverage projected for Saturday and Sunday next week. Current acceptance rate suggests 2–3 open shifts will go unfilled, risking compliance violations.',
        confidence: 89,
        targetDepartment: 'Nursing',
        impactDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        dataPoints: [
          { label: 'Open weekend shifts', value: '6', trend: 'STABLE' },
          { label: 'Historical acceptance rate (weekends)', value: '52%', trend: 'DECLINING' },
          { label: 'Available staff with weekend availability', value: '3', trend: 'STABLE' },
        ],
        recommendations: [
          'Post overtime incentive for weekend shifts (+15%)',
          'Send push notifications to all available staff now',
          'Consider calling agency staff as backup',
          'Review and update weekend availability requirements',
        ],
        status: 'ACTIVE',
      },
    }),
    prisma.predictiveInsight.create({
      data: {
        userId: user.id,
        insightType: 'RETENTION',
        category: 'Workforce',
        title: 'Turnover Cost Projection: $42,000 at Risk',
        description: '3 employees currently flagged as flight risks. If all three leave, projected replacement cost (recruiting + training + productivity loss) is $42,000 based on your industry benchmarks.',
        impact: 'HIGH',
        likelihood: 72,
        affectedCount: 3,
        costImpact: 42000,
        timeframe: 'Next 90 Days',
        dataSource: JSON.stringify({ models: ['FlightRiskModel v2.1', 'CostCalculator'], dataPoints: 847 }),
        actionRequired: true,
        suggestedActions: JSON.stringify(['Review compensation packages', 'Implement stay interviews', 'Enhance recognition program']),
        priority: 85,
      },
    }),
  ]);
  console.log('✅ Created Oracle AI prophecies & insights');

  // ── Asset Vault ───────────────────────────────────────────────────────────
  const [catIT, catMedical, catVehicle] = await Promise.all([
    prisma.assetCategory.create({
      data: { userId: user.id, name: 'IT Equipment', description: 'Laptops, tablets, and computing devices', icon: 'Laptop', requiresSerial: true, depreciationYears: 3 },
    }),
    prisma.assetCategory.create({
      data: { userId: user.id, name: 'Medical Equipment', description: 'Clinical and patient-care devices', icon: 'Stethoscope', requiresSerial: true, depreciationYears: 7 },
    }),
    prisma.assetCategory.create({
      data: { userId: user.id, name: 'Vehicles', description: 'Company and transport vehicles', icon: 'Car', requiresSerial: true, depreciationYears: 5 },
    }),
  ]);

  await Promise.all([
    prisma.asset.create({
      data: {
        userId: user.id,
        assetTag: 'IT-001',
        name: 'MacBook Pro 14" — Sarah Johnson',
        description: 'Primary laptop for nursing staff documentation',
        categoryId: catIT.id,
        serialNumber: 'C02X3ABCDEF',
        manufacturer: 'Apple',
        model: 'MacBook Pro 14" M3',
        purchaseDate: new Date('2024-03-15'),
        purchasePrice: 1999,
        currentValue: 1650,
        warrantyExpiry: new Date('2027-03-15'),
        status: 'ASSIGNED',
        condition: 'EXCELLENT',
        location: 'Nursing Station A',
        building: 'Main',
        room: '102',
        assignedToId: employees[0].id,
        assignedDate: new Date('2024-03-20'),
      },
    }),
    prisma.asset.create({
      data: {
        userId: user.id,
        assetTag: 'MED-001',
        name: 'Philips IntelliVue Patient Monitor',
        description: 'Bedside patient monitoring system',
        categoryId: catMedical.id,
        serialNumber: 'PH-MX750-2024',
        manufacturer: 'Philips',
        model: 'IntelliVue MX750',
        purchaseDate: new Date('2023-09-01'),
        purchasePrice: 12500,
        currentValue: 10200,
        warrantyExpiry: new Date('2026-09-01'),
        status: 'AVAILABLE',
        condition: 'GOOD',
        location: 'ICU',
        building: 'Main',
        room: 'ICU-3',
      },
    }),
    prisma.asset.create({
      data: {
        userId: user.id,
        assetTag: 'VEH-001',
        name: '2023 Ford Transit — Mobile Unit',
        description: 'Mobile health clinic transport vehicle',
        categoryId: catVehicle.id,
        serialNumber: '1FTBR1C84PKA00001',
        manufacturer: 'Ford',
        model: 'Transit 350',
        purchaseDate: new Date('2023-01-10'),
        purchasePrice: 45000,
        currentValue: 38000,
        warrantyExpiry: new Date('2026-01-10'),
        status: 'AVAILABLE',
        condition: 'GOOD',
        location: 'Parking Lot B',
        building: 'Annex',
      },
    }),
    prisma.asset.create({
      data: {
        userId: user.id,
        assetTag: 'IT-002',
        name: 'iPad Pro 12.9" — Exam Room Tablet',
        description: 'Patient intake and chart review tablet',
        categoryId: catIT.id,
        serialNumber: 'DMPXYZ123456',
        manufacturer: 'Apple',
        model: 'iPad Pro 12.9" M2',
        purchaseDate: new Date('2024-01-05'),
        purchasePrice: 1099,
        currentValue: 920,
        status: 'ASSIGNED',
        condition: 'GOOD',
        location: 'Exam Room 3',
        building: 'Main',
        room: '205',
        assignedToId: employees[2].id,
        assignedDate: new Date('2024-01-10'),
      },
    }),
  ]);
  console.log('✅ Created Asset Vault demo data');

  // ── Sentinel: Visitor Management ─────────────────────────────────────────
  const [visitor1, visitor2] = await Promise.all([
    prisma.visitor.create({
      data: {
        userId: user.id,
        firstName: 'James',
        lastName: 'Hartley',
        email: 'j.hartley@medtech.com',
        phone: '(555) 800-1234',
        company: 'MedTech Solutions',
        idType: 'Driver License',
        isVIP: false,
      },
    }),
    prisma.visitor.create({
      data: {
        userId: user.id,
        firstName: 'Patricia',
        lastName: 'Nguyen',
        email: 'pnguyen@jointcommission.org',
        phone: '(555) 900-5678',
        company: 'Joint Commission',
        idType: 'Employee Badge',
        isVIP: true,
      },
    }),
  ]);

  await Promise.all([
    prisma.visitorLog.create({
      data: {
        userId: user.id,
        visitorId: visitor1.id,
        hostEmployeeId: employees[3].id,
        purpose: 'Medical equipment demonstration and sales consultation',
        checkInTime: new Date(Date.now() - 90 * 60 * 1000), // 90 min ago
        expectedDuration: 120,
        building: 'Main',
        location: 'Conference Room B',
        badgeNumber: 'V-2024-001',
        entryMethod: 'MANUAL',
        healthScreenPassed: true,
        ndaSigned: true,
        status: 'CHECKED_IN',
        hostNotified: true,
        hostNotifiedAt: new Date(Date.now() - 92 * 60 * 1000),
      },
    }),
    prisma.visitorLog.create({
      data: {
        userId: user.id,
        visitorId: visitor2.id,
        hostEmployeeId: employees[3].id,
        purpose: 'Accreditation survey — unannounced inspection',
        checkInTime: new Date(Date.now() - 45 * 60 * 1000),
        expectedDuration: 240,
        building: 'Main',
        location: 'Administration',
        badgeNumber: 'V-2024-002',
        entryMethod: 'MANUAL',
        healthScreenPassed: true,
        ndaSigned: false,
        status: 'CHECKED_IN',
        hostNotified: true,
        hostNotifiedAt: new Date(Date.now() - 46 * 60 * 1000),
      },
    }),
  ]);
  console.log('✅ Created Sentinel visitor management demo data');

  // ── Guild: Gamification ───────────────────────────────────────────────────
  const achievements = await Promise.all([
    prisma.achievement.create({
      data: {
        userId: user.id,
        name: 'Punctuality Pro',
        description: 'Clock in on time 10 shifts in a row',
        icon: '⏰',
        category: 'ATTENDANCE',
        rarity: 'UNCOMMON',
        xpReward: 150,
        requirement: { type: 'STREAK', value: 10, metric: 'ON_TIME_CLOCKIN' },
      },
    }),
    prisma.achievement.create({
      data: {
        userId: user.id,
        name: 'Team Player',
        description: 'Pick up 3 open shifts in a single month',
        icon: '🤝',
        category: 'TEAMWORK',
        rarity: 'RARE',
        xpReward: 300,
        requirement: { type: 'COUNT', value: 3, metric: 'SHIFT_PICKUPS', period: 'MONTH' },
      },
    }),
    prisma.achievement.create({
      data: {
        userId: user.id,
        name: 'Month of Excellence',
        description: 'Achieve perfect attendance for an entire month',
        icon: '🏆',
        category: 'ATTENDANCE',
        rarity: 'EPIC',
        xpReward: 500,
        requirement: { type: 'PERFECT_MONTH', metric: 'ATTENDANCE' },
      },
    }),
  ]);

  const guildMembers = await Promise.all([
    prisma.guildMember.create({
      data: {
        userId: user.id,
        employeeId: employees[0].id,
        currentLevel: 8,
        levelName: 'Expert',
        totalXP: 3240,
        currentXP: 240,
        xpToNextLevel: 500,
        rank: 1,
        title: 'Shift Champion',
        streak: 12,
        longestStreak: 18,
        badges: ['punctuality_pro', 'team_player'],
        lastActivity: new Date(),
      },
    }),
    prisma.guildMember.create({
      data: {
        userId: user.id,
        employeeId: employees[1].id,
        currentLevel: 5,
        levelName: 'Journeyman',
        totalXP: 1820,
        currentXP: 320,
        xpToNextLevel: 400,
        rank: 2,
        title: 'Night Owl',
        streak: 7,
        longestStreak: 14,
        badges: ['team_player'],
        lastActivity: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      },
    }),
    prisma.guildMember.create({
      data: {
        userId: user.id,
        employeeId: employees[2].id,
        currentLevel: 3,
        levelName: 'Apprentice',
        totalXP: 680,
        currentXP: 80,
        xpToNextLevel: 200,
        rank: 3,
        streak: 3,
        longestStreak: 5,
        badges: [],
        lastActivity: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      },
    }),
  ]);

  // Add XP transactions and unlock achievements for top guild member
  await Promise.all([
    prisma.xPTransaction.create({
      data: {
        guildMemberId: guildMembers[0].id,
        amount: 150,
        type: 'EARNED_ACHIEVEMENT',
        source: 'Unlocked: Punctuality Pro',
        multiplier: 1.0,
      },
    }),
    prisma.xPTransaction.create({
      data: {
        guildMemberId: guildMembers[0].id,
        amount: 300,
        type: 'EARNED_ACHIEVEMENT',
        source: 'Unlocked: Team Player',
        multiplier: 1.0,
      },
    }),
    prisma.xPTransaction.create({
      data: {
        guildMemberId: guildMembers[1].id,
        amount: 300,
        type: 'EARNED_ACHIEVEMENT',
        source: 'Unlocked: Team Player',
        multiplier: 1.0,
      },
    }),
    prisma.employeeAchievement.create({
      data: {
        guildMemberId: guildMembers[0].id,
        achievementId: achievements[0].id,
        unlockedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      },
    }),
    prisma.employeeAchievement.create({
      data: {
        guildMemberId: guildMembers[0].id,
        achievementId: achievements[1].id,
        unlockedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      },
    }),
    prisma.employeeAchievement.create({
      data: {
        guildMemberId: guildMembers[1].id,
        achievementId: achievements[1].id,
        unlockedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      },
    }),
  ]);
  console.log('✅ Created Guild gamification demo data');

  console.log('\n🎉 Seeding completed!');
  console.log('\n📋 Demo credentials:');
  console.log('   Email: demo@nyxtitan.com');
  console.log('   Password: demo123456');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
