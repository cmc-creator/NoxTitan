import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { handleTimeClockWebhook } from '@/lib/timeclock-integrations';

/**
 * Webhook endpoint for time clock hardware
 * Receives punch events from Kronos, ADP, Lathem, and other systems
 * 
 * POST /api/timeclock/webhook?deviceId=xxx&brand=kronos
 */
export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const deviceId = searchParams.get('deviceId');
    const brand = searchParams.get('brand');

    if (!deviceId) {
      return NextResponse.json(
        { error: 'deviceId parameter required' },
        { status: 400 }
      );
    }

    // Verify device exists and is active
    const device = await prisma.timeClockDevice.findFirst({
      where: { id: deviceId, isActive: true },
    });

    if (!device) {
      return NextResponse.json(
        { error: 'Device not found or inactive' },
        { status: 404 }
      );
    }

    // Parse webhook payload based on brand
    const payload = await request.json();
    const result = await handleTimeClockWebhook(
      brand || device.brand,
      payload
    );

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    // Find employee by badge number or biometric ID
    let employee = null;

    if (result.data?.badgeNumber) {
      // Look up employee by badge number (stored in employee's notes/custom field)
      employee = await prisma.employee.findFirst({
        where: {
          userId: device.userId,
          // Badge numbers can be stored in a custom field - adjust as needed
          OR: [
            { email: { contains: result.data.badgeNumber } },
            { phone: { contains: result.data.badgeNumber } },
          ],
        },
      });
    }

    if (!employee && result.data?.employeeId) {
      employee = await prisma.employee.findFirst({
        where: {
          id: result.data.employeeId,
          userId: device.userId,
        },
      });
    }

    if (!employee) {
      return NextResponse.json(
        { error: 'Employee not found for this punch' },
        { status: 404 }
      );
    }

    // Create or update time clock entry
    if (result.data?.clockIn) {
      // Check if already clocked in
      const existingEntry = await prisma.timeClockEntry.findFirst({
        where: {
          employeeId: employee.id,
          status: { in: ['CLOCKED_IN', 'ON_BREAK'] },
        },
      });

      if (existingEntry) {
        return NextResponse.json(
          { error: 'Employee already clocked in', entry: existingEntry },
          { status: 400 }
        );
      }

      // Clock in
      const entry = await prisma.timeClockEntry.create({
        data: {
          userId: device.userId,
          employeeId: employee.id,
          clockIn: result.data.clockIn,
          deviceType: 'hardware',
          deviceId: device.id,
          deviceBrand: device.brand,
          badgeNumber: result.data.badgeNumber,
          biometricId: result.data.biometricId,
          status: 'CLOCKED_IN',
        },
      });

      // Update device last sync time
      await prisma.timeClockDevice.update({
        where: { id: deviceId },
        data: { lastSync: new Date() },
      });

      return NextResponse.json({
        success: true,
        action: 'clocked_in',
        entry,
      });
    }

    if (result.data?.clockOut) {
      // Clock out
      const entry = await prisma.timeClockEntry.findFirst({
        where: {
          employeeId: employee.id,
          status: { in: ['CLOCKED_IN', 'ON_BREAK'] },
        },
        orderBy: { clockIn: 'desc' },
      });

      if (!entry) {
        return NextResponse.json(
          { error: 'No active clock-in found for this employee' },
          { status: 404 }
        );
      }

      // Calculate hours
      const totalMilliseconds = result.data.clockOut.getTime() - entry.clockIn.getTime();
      const totalHours = totalMilliseconds / (1000 * 60 * 60);

      const updated = await prisma.timeClockEntry.update({
        where: { id: entry.id },
        data: {
          clockOut: result.data.clockOut,
          totalHours,
          status: 'CLOCKED_OUT',
        },
      });

      // Update device last sync time
      await prisma.timeClockDevice.update({
        where: { id: deviceId },
        data: { lastSync: new Date() },
      });

      return NextResponse.json({
        success: true,
        action: 'clocked_out',
        entry: updated,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Webhook received but no action taken',
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook', details: String(error) },
      { status: 500 }
    );
  }
}
