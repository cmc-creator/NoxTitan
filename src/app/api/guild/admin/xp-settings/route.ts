import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Fetch XP settings from database (or return defaults if not set)
    const settings = await prisma.xPSettings.findFirst();
    
    if (!settings) {
      // Return default values
      return NextResponse.json({
        activityEasy: 25,
        activityMedium: 75,
        activityHard: 150,
        achievementCommon: 50,
        achievementUncommon: 100,
        achievementRare: 250,
        achievementEpic: 500,
        achievementLegendary: 1000,
        clockIn: 10,
        onTimeClockIn: 25,
        perfectWeek: 200,
        trainingCompletion: 100,
        shiftCompletion: 50,
        recognitionReceived: 30,
        recognitionGiven: 20,
        levelUpBonus: 500,
        streakDailyBonus: 15
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error fetching XP settings:', error);
    return NextResponse.json({ error: 'Failed to fetch XP settings' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const settings = await request.json();

    // Upsert settings in database
    const updated = await prisma.xPSettings.upsert({
      where: { id: 1 }, // Single settings record
      update: settings,
      create: { id: 1, ...settings }
    });

    return NextResponse.json({ success: true, settings: updated });
  } catch (error) {
    console.error('Error saving XP settings:', error);
    return NextResponse.json({ error: 'Failed to save XP settings' }, { status: 500 });
  }
}
