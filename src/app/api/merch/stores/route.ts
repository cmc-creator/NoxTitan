import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

const libsql = createClient({
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
  syncUrl: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const adapter = new PrismaLibSql(libsql);
const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
  authToken: process.env.TURSO_AUTH_TOKEN,
});
const prisma = new PrismaClient({ adapter });

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const stores = await prisma.merchStore.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(stores);
  } catch (error) {
    console.error('Failed to fetch stores:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stores' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { platform, name, storeUrl, apiKey, apiSecret } = await request.json();

    if (!platform || !name || !apiKey) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create webhook URL for this store
    const webhookUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/merch/webhooks/${platform.toLowerCase()}`;

    const store = await prisma.merchStore.create({
      data: {
        name,
        platform: platform as any,
        storeUrl,
        apiKey, // In production, encrypt this!
        apiSecret, // In production, encrypt this!
        webhookUrl,
        syncEnabled: true,
        userId: session.user.id,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.error('Failed to create store:', error);
    return NextResponse.json(
      { error: 'Failed to create store' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id, ...updates } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Store ID required' }, { status: 400 });
    }

    const store = await prisma.merchStore.update({
      where: {
        id,
        userId: session.user.id,
      },
      data: updates,
    });

    return NextResponse.json(store);
  } catch (error) {
    console.error('Failed to update store:', error);
    return NextResponse.json(
      { error: 'Failed to update store' },
      { status: 500 }
    );
  }
}
