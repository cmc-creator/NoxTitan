/**
 * Time Clock Integration Library
 * Supports 15+ major time clock brands with unified API
 */

export interface TimeClockIntegration {
  brand: string;
  models: string[];
  protocols: string[];
  capabilities: string[];
  webhookSupported: boolean;
  apiDocUrl?: string;
}

// Supported time clock brands and their capabilities
export const SUPPORTED_TIME_CLOCKS: TimeClockIntegration[] = [
  {
    brand: 'Kronos/UKG',
    models: ['InTouch', 'InTouch DX', '4500', '8609'],
    protocols: ['REST API', 'SOAP', 'Webhook'],
    capabilities: ['biometric', 'badge', 'mobile', 'geofence', 'photo'],
    webhookSupported: true,
    apiDocUrl: 'https://developer.ukg.com/',
  },
  {
    brand: 'ADP',
    models: ['TotalSource', 'Workforce Now', 'ezLaborManager'],
    protocols: ['REST API', 'Webhook'],
    capabilities: ['biometric', 'badge', 'mobile'],
    webhookSupported: true,
    apiDocUrl: 'https://developers.adp.com/',
  },
  {
    brand: 'Lathem',
    models: ['PayClock Pro', 'PC700', 'FR700', '900E'],
    protocols: ['TCP/IP', 'Serial', 'USB'],
    capabilities: ['biometric', 'badge', 'web'],
    webhookSupported: false,
  },
  {
    brand: 'Acroprint',
    models: ['ATR480', 'ES900', 'timeQplus'],
    protocols: ['TCP/IP', 'USB', 'WiFi'],
    capabilities: ['badge', 'web'],
    webhookSupported: false,
  },
  {
    brand: 'Icon Time Systems',
    models: ['TotalPass', 'TimeTracker', 'Biometric'],
    protocols: ['TCP/IP', 'USB'],
    capabilities: ['biometric', 'badge', 'proximity'],
    webhookSupported: false,
  },
  {
    brand: 'Pyramid',
    models: ['TimeTrax Elite', '5000HD', '3700'],
    protocols: ['TCP/IP', 'USB'],
    capabilities: ['badge', 'biometric'],
    webhookSupported: false,
  },
  {
    brand: 'Amano',
    models: ['TimeGuardian', 'MJR-8000', 'ATX-30'],
    protocols: ['TCP/IP', 'Serial'],
    capabilities: ['badge', 'magnetic'],
    webhookSupported: false,
  },
  {
    brand: 'uAttend',
    models: ['BN6500', 'CB6500', 'JR4000'],
    protocols: ['WiFi', 'Cloud API'],
    capabilities: ['biometric', 'web', 'mobile', 'photo'],
    webhookSupported: true,
    apiDocUrl: 'https://api.uattend.com/',
  },
  {
    brand: 'TSheets/QuickBooks Time',
    models: ['Clock', 'Kiosk'],
    protocols: ['REST API', 'Webhook'],
    capabilities: ['mobile', 'geofence', 'photo', 'web'],
    webhookSupported: true,
    apiDocUrl: 'https://developers.intuit.com/',
  },
  {
    brand: 'Deputy',
    models: ['Kiosk', 'Mobile App'],
    protocols: ['REST API', 'Webhook'],
    capabilities: ['mobile', 'kiosk', 'facial-recognition', 'geofence'],
    webhookSupported: true,
    apiDocUrl: 'https://developer.deputy.com/',
  },
  {
    brand: 'When I Work',
    models: ['Clock In/Out'],
    protocols: ['REST API', 'Webhook'],
    capabilities: ['mobile', 'web', 'geofence'],
    webhookSupported: true,
    apiDocUrl: 'https://apidocs.wheniwork.com/',
  },
  {
    brand: 'Buddy Punch',
    models: ['Time Clock'],
    protocols: ['REST API', 'Webhook'],
    capabilities: ['mobile', 'web', 'geofence', 'photo'],
    webhookSupported: true,
    apiDocUrl: 'https://www.buddypunch.com/api/',
  },
  {
    brand: 'Homebase',
    models: ['Time Clock'],
    protocols: ['REST API'],
    capabilities: ['mobile', 'web', 'geofence'],
    webhookSupported: true,
  },
  {
    brand: 'ZKTeco',
    models: ['F18', 'ZK4500', 'K40'],
    protocols: ['TCP/IP', 'USB', 'RS485'],
    capabilities: ['biometric', 'rfid', 'facial-recognition'],
    webhookSupported: false,
  },
  {
    brand: 'TimeTrex',
    models: ['Time Clock'],
    protocols: ['REST API', 'SOAP'],
    capabilities: ['web', 'mobile', 'biometric'],
    webhookSupported: true,
    apiDocUrl: 'https://www.timetrex.com/api/',
  },
];

/**
 * Webhook handler for time clock punch events
 * Supports different webhook formats from various vendors
 */
export async function handleTimeClockWebhook(
  brand: string,
  payload: any
): Promise<{
  success: boolean;
  data?: {
    employeeId: string;
    badgeNumber?: string;
    biometricId?: string;
    clockIn?: Date;
    clockOut?: Date;
    deviceId?: string;
  };
  error?: string;
}> {
  try {
    switch (brand.toLowerCase()) {
      case 'kronos':
      case 'ukg':
        return parseKronosWebhook(payload);
      
      case 'adp':
        return parseADPWebhook(payload);
      
      case 'tsheets':
      case 'quickbooks time':
        return parseTSheetsWebhook(payload);
      
      case 'deputy':
        return parseDeputyWebhook(payload);
      
      case 'uattend':
        return parseUAttendWebhook(payload);
      
      default:
        return parseGenericWebhook(payload);
    }
  } catch (error) {
    return {
      success: false,
      error: `Failed to parse ${brand} webhook: ${error}`,
    };
  }
}

// Brand-specific webhook parsers
function parseKronosWebhook(payload: any) {
  return {
    success: true,
    data: {
      employeeId: payload.employee?.id || payload.personNumber,
      badgeNumber: payload.badge,
      clockIn: payload.punchTime ? new Date(payload.punchTime) : undefined,
      deviceId: payload.deviceId,
    },
  };
}

function parseADPWebhook(payload: any) {
  return {
    success: true,
    data: {
      employeeId: payload.worker?.associateOID,
      clockIn: payload.eventTime ? new Date(payload.eventTime) : undefined,
      deviceId: payload.device?.id,
    },
  };
}

function parseTSheetsWebhook(payload: any) {
  return {
    success: true,
    data: {
      employeeId: payload.user_id?.toString(),
      clockIn: payload.clock_in_time ? new Date(payload.clock_in_time) : undefined,
      clockOut: payload.clock_out_time ? new Date(payload.clock_out_time) : undefined,
      deviceId: payload.device_id,
    },
  };
}

function parseDeputyWebhook(payload: any) {
  return {
    success: true,
    data: {
      employeeId: payload.Employee?.toString(),
      clockIn: payload.StartTime ? new Date(payload.StartTime) : undefined,
      clockOut: payload.EndTime ? new Date(payload.EndTime) : undefined,
      deviceId: payload.Kiosk?.toString(),
    },
  };
}

function parseUAttendWebhook(payload: any) {
  return {
    success: true,
    data: {
      employeeId: payload.employeeId,
      badgeNumber: payload.badgeId,
      biometricId: payload.fingerprintId,
      clockIn: payload.punchDateTime ? new Date(payload.punchDateTime) : undefined,
      deviceId: payload.terminalId,
    },
  };
}

function parseGenericWebhook(payload: any) {
  // Generic parser for custom integrations
  return {
    success: true,
    data: {
      employeeId: payload.employeeId || payload.employee_id || payload.userId,
      badgeNumber: payload.badgeNumber || payload.badge_number,
      biometricId: payload.biometricId || payload.biometric_id,
      clockIn: payload.clockIn || payload.clock_in || payload.timestamp 
        ? new Date(payload.clockIn || payload.clock_in || payload.timestamp) 
        : undefined,
      deviceId: payload.deviceId || payload.device_id,
    },
  };
}

/**
 * Get integration instructions for a specific time clock brand
 */
export function getIntegrationInstructions(brand: string): string {
  const integration = SUPPORTED_TIME_CLOCKS.find(
    (tc) => tc.brand.toLowerCase() === brand.toLowerCase()
  );

  if (!integration) {
    return 'Time clock brand not found in supported list.';
  }

  return `
## ${integration.brand} Integration Instructions

### Supported Models
${integration.models.map(m => `- ${m}`).join('\n')}

### Communication Protocols
${integration.protocols.map(p => `- ${p}`).join('\n')}

### Capabilities
${integration.capabilities.map(c => `- ${c}`).join('\n')}

### Setup Steps
1. Register device in TeamPulse (Settings > Time Clocks > Add Device)
2. Configure device with TeamPulse API endpoint
3. ${integration.webhookSupported ? 'Set up webhook URL for real-time sync' : 'Enable polling for periodic sync'}
4. Test connection with a sample punch
5. Map employee badge numbers to TeamPulse employee records

${integration.apiDocUrl ? `\n### Developer Documentation\n${integration.apiDocUrl}` : ''}

### Need Help?
Contact TeamPulse support for assistance with your ${integration.brand} integration.
  `.trim();
}
