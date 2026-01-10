import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const members = await prisma.guildMember.findMany({
      include: {
        employee: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      },
      orderBy: {
        totalXP: 'desc'
      }
    });

    return NextResponse.json(members);
  } catch (error) {
    console.error('Error fetching guild members:', error);
    return NextResponse.json({ error: 'Failed to fetch guild members' }, { status: 500 });
  }
}
