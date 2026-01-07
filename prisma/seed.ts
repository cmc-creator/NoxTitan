import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

const config = {
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db'
};

console.log('Database URL:', config.url);

const adapter = new PrismaLibSql(config);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  // Create demo user
  const passwordHash = await bcrypt.hash('demo123456', 10);
  
  const user = await prisma.user.upsert({
    where: { email: 'demo@noxtitan.com' },
    update: {},
    create: {
      email: 'demo@noxtitan.com',
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

  console.log('\n🎉 Seeding completed!');
  console.log('\n📋 Demo credentials:');
  console.log('   Email: demo@noxtitan.com');
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
