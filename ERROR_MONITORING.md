# Error Monitoring & Logging - NyxTitan

## Error Monitoring Setup

### Sentry Integration (Recommended)

#### 1. Install Sentry

```bash
npm install --save @sentry/nextjs
```

#### 2. Initialize Sentry

```bash
npx @sentry/wizard@latest -i nextjs
```

#### 3. Configuration

**sentry.client.config.ts:**
```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
```

**sentry.server.config.ts:**
```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});
```

**sentry.edge.config.ts:**
```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

#### 4. Environment Variables

```env
SENTRY_DSN=https://your-key@sentry.io/project-id
NEXT_PUBLIC_SENTRY_DSN=https://your-key@sentry.io/project-id
SENTRY_ORG=your-org
SENTRY_PROJECT=nyxtitan
SENTRY_AUTH_TOKEN=your-auth-token
```

#### 5. Error Boundary

```typescript
// /src/components/ErrorBoundary.tsx
'use client';

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-4">
          {error.message || "An unexpected error occurred"}
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
```

#### 6. Custom Error Tracking

```typescript
// /src/lib/errorTracking.ts
import * as Sentry from "@sentry/nextjs";

export function trackError(error: Error, context?: Record<string, any>) {
  Sentry.captureException(error, {
    contexts: { additional: context },
  });
}

export function trackMessage(message: string, level: 'info' | 'warning' | 'error' = 'info') {
  Sentry.captureMessage(message, level);
}

export function setUserContext(user: { id: string; email: string; name?: string }) {
  Sentry.setUser({
    id: user.id,
    email: user.email,
    username: user.name,
  });
}

export function clearUserContext() {
  Sentry.setUser(null);
}
```

### Alternative: LogRocket

```bash
npm install --save logrocket
```

```typescript
// /src/lib/logrocket.ts
import LogRocket from 'logrocket';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_APP_ID!);
}

export default LogRocket;
```

## Application Logging

### Winston Logger Setup

```bash
npm install winston winston-daily-rotate-file
```

```typescript
// /src/lib/logger.ts
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  winston.format.json()
);

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: logFormat,
  defaultMeta: { service: 'nyxtitan' },
  transports: [
    // Console output
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    
    // Error logs
    new DailyRotateFile({
      filename: 'logs/error-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      level: 'error',
      maxSize: '20m',
      maxFiles: '14d',
    }),
    
    // Combined logs
    new DailyRotateFile({
      filename: 'logs/combined-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

export default logger;

// Helper functions
export const logInfo = (message: string, meta?: any) => {
  logger.info(message, meta);
};

export const logError = (message: string, error?: Error, meta?: any) => {
  logger.error(message, { error: error?.message, stack: error?.stack, ...meta });
};

export const logWarn = (message: string, meta?: any) => {
  logger.warn(message, meta);
};

export const logDebug = (message: string, meta?: any) => {
  logger.debug(message, meta);
};
```

### Usage Examples

```typescript
// In API routes
import { logInfo, logError } from '@/lib/logger';

export async function POST(request: Request) {
  try {
    logInfo('Creating new employee', { userId: session.user.id });
    
    const employee = await prisma.employee.create({ data });
    
    logInfo('Employee created successfully', { 
      employeeId: employee.id,
      userId: session.user.id 
    });
    
    return NextResponse.json(employee);
  } catch (error) {
    logError('Failed to create employee', error as Error, {
      userId: session.user.id,
      requestData: data
    });
    
    return NextResponse.json({ error: 'Failed to create employee' }, { status: 500 });
  }
}
```

## Performance Monitoring

### Web Vitals Tracking

```typescript
// /src/app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
```

### Custom Performance Tracking

```typescript
// /src/lib/performance.ts
export function measurePerformance(metricName: string) {
  if (typeof window === 'undefined') return;
  
  const startTime = performance.now();
  
  return {
    end: () => {
      const duration = performance.now() - startTime;
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${metricName}: ${duration.toFixed(2)}ms`);
      }
      
      // Send to analytics
      if (window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: metricName,
          value: Math.round(duration),
          event_category: 'Performance',
        });
      }
      
      return duration;
    },
  };
}

// Usage
const timer = measurePerformance('API: Fetch Employees');
await fetchEmployees();
timer.end();
```

## Alert Configuration

### Sentry Alerts

1. Go to Sentry → Alerts
2. Create alert rules:
   - **High Error Rate**: > 50 errors in 5 minutes
   - **New Issue**: Any new error type
   - **Performance**: API response > 2 seconds
   - **Crash**: Any unhandled exception

### Notification Channels

- **Email**: team@nyxtitan.com
- **Slack**: #nyxtitan-alerts
- **PagerDuty**: For critical issues
- **Discord**: Development team channel

## Error Response Standards

### API Error Format

```typescript
// /src/lib/apiError.ts
export class APIError extends Error {
  statusCode: number;
  code: string;
  
  constructor(message: string, statusCode: number, code: string) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
  }
}

export function formatErrorResponse(error: Error) {
  if (error instanceof APIError) {
    return {
      error: {
        message: error.message,
        code: error.code,
        statusCode: error.statusCode,
      },
    };
  }
  
  return {
    error: {
      message: 'An unexpected error occurred',
      code: 'INTERNAL_SERVER_ERROR',
      statusCode: 500,
    },
  };
}
```

## Log Aggregation

### CloudWatch (AWS)

```bash
npm install aws-sdk
```

```typescript
// Configure winston to send to CloudWatch
import { CloudWatchLogs } from 'aws-sdk';

const cloudwatchTransport = new WinstonCloudWatch({
  logGroupName: 'nyxtitan',
  logStreamName: 'application',
  awsRegion: 'us-east-1',
});
```

### Datadog

```bash
npm install dd-trace
```

```typescript
// /instrumentation.ts
import tracer from 'dd-trace';

tracer.init({
  service: 'nyxtitan',
  env: process.env.NODE_ENV,
  analytics: true,
});

export function register() {
  // Runs on server start
}
```

## Monitoring Dashboard

### Key Metrics to Track

1. **Error Rate**: Errors per minute
2. **Response Time**: P50, P95, P99
3. **Uptime**: 99.9% target
4. **Database Queries**: Slow query detection
5. **Memory Usage**: Prevent leaks
6. **CPU Usage**: Optimize hot paths
7. **Request Volume**: Traffic patterns
8. **User Sessions**: Active users

### Health Check Endpoint

```typescript
// /src/app/api/health/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    checks: {
      database: 'unknown',
      memory: 'unknown',
    },
  };
  
  try {
    // Check database
    await prisma.$queryRaw`SELECT 1`;
    health.checks.database = 'healthy';
  } catch (error) {
    health.status = 'unhealthy';
    health.checks.database = 'unhealthy';
  }
  
  // Check memory
  const memUsage = process.memoryUsage();
  health.checks.memory = memUsage.heapUsed < 500 * 1024 * 1024 ? 'healthy' : 'warning';
  
  const statusCode = health.status === 'healthy' ? 200 : 503;
  return NextResponse.json(health, { status: statusCode });
}
```

## Best Practices

1. **Log Levels**: Use appropriate levels (debug, info, warn, error)
2. **PII Protection**: Never log passwords, tokens, or sensitive data
3. **Structured Logging**: Use JSON format for easier parsing
4. **Context**: Include user ID, request ID, timestamps
5. **Rate Limiting**: Prevent log flooding
6. **Retention**: Keep logs for 30-90 days
7. **Monitoring**: Set up alerts for critical errors
8. **Performance**: Don't log in hot paths

---

**Last Updated**: February 7, 2026
**Status**: Error monitoring and logging documentation complete
