import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const profileSchema = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  email: z.string().email().optional(),
});

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { id: true, email: true, name: true, tier: true },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const nameParts = (user.name || '').split(' ');
    return NextResponse.json({
      id: user.id,
      email: user.email,
      firstName: nameParts[0] || '',
      lastName: nameParts.slice(1).join(' ') || '',
      tier: user.tier,
    });
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validation = profileSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const { firstName, lastName, email } = validation.data;
    const updateData: { name?: string; email?: string } = {};

    if (firstName !== undefined || lastName !== undefined) {
      // Fetch current name to fill in whichever side wasn't provided
      const current = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { name: true },
      });
      const parts = (current?.name || '').split(' ');
      const currentFirst = parts[0] || '';
      const currentLast = parts.slice(1).join(' ') || '';
      updateData.name = `${firstName ?? currentFirst} ${lastName ?? currentLast}`.trim();
    }

    if (email) {
      // Check email uniqueness
      const conflict = await prisma.user.findFirst({
        where: { email, NOT: { id: session.user.id } },
      });
      if (conflict) {
        return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
      }
      updateData.email = email;
    }

    const updated = await prisma.user.update({
      where: { id: session.user.id },
      data: updateData,
      select: { id: true, email: true, name: true, tier: true },
    });

    const nameParts = (updated.name || '').split(' ');
    return NextResponse.json({
      id: updated.id,
      email: updated.email,
      firstName: nameParts[0] || '',
      lastName: nameParts.slice(1).join(' ') || '',
      tier: updated.tier,
    });
  } catch (error) {
    console.error('Failed to update profile:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}
