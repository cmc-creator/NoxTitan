import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Create or update employee profile with onboarding data
    const profile = await prisma.employeeProfile.upsert({
      where: { email: data.email },
      update: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
        bio: data.bio,
        hometown: data.hometown,
        favoriteFoods: data.favoriteFoods,
        hobbies: data.hobbies,
        favoriteMusic: data.favoriteMusic,
        favoriteMovies: data.favoriteMovies,
        pets: data.pets,
        funFact: data.funFact,
        department: data.department,
        position: data.position,
        startDate: data.startDate ? new Date(data.startDate) : null,
        goals: data.goals,
        role: data.role,
        teamSize: data.teamSize,
        managementStyle: data.managementStyle,
        leadershipGoals: data.leadershipGoals,
        onboardingCompleted: true
      },
      create: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
        bio: data.bio,
        hometown: data.hometown,
        favoriteFoods: data.favoriteFoods,
        hobbies: data.hobbies,
        favoriteMusic: data.favoriteMusic,
        favoriteMovies: data.favoriteMovies,
        pets: data.pets,
        funFact: data.funFact,
        department: data.department,
        position: data.position,
        startDate: data.startDate ? new Date(data.startDate) : null,
        goals: data.goals,
        role: data.role,
        teamSize: data.teamSize,
        managementStyle: data.managementStyle,
        leadershipGoals: data.leadershipGoals,
        onboardingCompleted: true
      }
    });

    return NextResponse.json({ success: true, profile });
  } catch (error) {
    console.error('Error completing onboarding:', error);
    return NextResponse.json({ error: 'Failed to complete onboarding' }, { status: 500 });
  }
}
