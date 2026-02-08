# Real-Time Notifications System - NyxTitan

## Overview
NyxTitan's real-time notification system keeps users instantly informed of important events, changes, and updates across the platform.

## Notification Types

### 1. Shift Notifications
- **Shift Assigned**: New shift assigned to employee
- **Shift Changed**: Schedule modification
- **Shift Swap Request**: Employee requests to swap shifts
- **Shift Swap Approved**: Manager approves swap
- **Shift Reminder**: Upcoming shift reminder (24h, 2h, 30min)

### 2. Time-Off Notifications
- **Request Submitted**: Employee submits time-off request
- **Request Approved**: Manager approves request
- **Request Denied**: Manager denies request
- **Balance Low**: PTO balance running low

### 3. Clock-In/Out Notifications
- **Late Clock-In**: Employee clocks in late
- **Missed Clock-In**: Employee didn't clock in
- **Break Overtime**: Break exceeds allowed time
- **Shift Completed**: Employee completes shift

### 4. Guild/Gamification Notifications
- **XP Earned**: Employee earns experience points
- **Level Up**: Employee reaches new level
- **Achievement Unlocked**: New achievement earned
- **Leaderboard Position**: Rank change notification

### 5. System Notifications
- **Report Ready**: Generated report available
- **Data Import Complete**: Bulk import finished
- **Security Alert**: Unusual activity detected
- **System Maintenance**: Scheduled downtime

## Technology Stack

### WebSocket Server
```typescript
// Option 1: Socket.io (Recommended)
import { Server } from 'socket.io';
import { createServer } from 'http';

// Option 2: Native WebSocket
import { WebSocketServer } from 'ws';

// Option 3: Pusher (Third-party service)
import Pusher from 'pusher';
```

### Client Implementation
```typescript
// Option 1: Socket.io Client
import { io } from 'socket.io-client';

// Option 2: Native WebSocket
const ws = new WebSocket('ws://localhost:3000');

// Option 3: Server-Sent Events (SSE)
const eventSource = new EventSource('/api/notifications/stream');
```

## Architecture

### WebSocket Server Setup

```typescript
// /src/lib/websocket.ts
import { Server } from 'socket.io';
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

export async function startWebSocketServer() {
  await app.prepare();
  
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  });
  
  const io = new Server(server, {
    cors: {
      origin: process.env.NEXTAUTH_URL || 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });
  
  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    
    // Authenticate socket connection
    const userId = socket.handshake.auth.userId;
    if (userId) {
      socket.join(`user:${userId}`);
    }
    
    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
  
  server.listen(3001, () => {
    console.log('> WebSocket server ready on http://localhost:3001');
  });
  
  return io;
}
```

### Client Hook

```typescript
// /src/hooks/useNotifications.ts
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useSession } from 'next-auth/react';

export interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

export function useNotifications() {
  const { data: session } = useSession();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (!session?.user?.id) return;

    const socketInstance = io('http://localhost:3001', {
      auth: {
        userId: session.user.id,
      },
    });

    socketInstance.on('connect', () => {
      console.log('Connected to notification server');
    });

    socketInstance.on('notification', (notification: Notification) => {
      setNotifications(prev => [notification, ...prev]);
      setUnreadCount(prev => prev + 1);
      
      // Show browser notification
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(notification.title, {
          body: notification.message,
          icon: '/nyxtitan-logo.png',
        });
      }
    });

    socketInstance.on('disconnect', () => {
      console.log('Disconnected from notification server');
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, [session]);

  const markAsRead = (notificationId: string) => {
    setNotifications(prev =>
      prev.map(n => n.id === notificationId ? { ...n, read: true } : n)
    );
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
  };
}
```

### Notification Component

```typescript
// /src/components/NotificationCenter.tsx
import { Bell } from 'lucide-react';
import { useNotifications } from '@/hooks/useNotifications';

export function NotificationCenter() {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 hover:bg-slate-700 rounded-lg transition-colors"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-50">
          <div className="p-4 border-b border-slate-700 flex items-center justify-between">
            <h3 className="font-semibold text-white">Notifications</h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Mark all as read
              </button>
            )}
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-slate-400">
                No notifications
              </div>
            ) : (
              notifications.map(notification => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-slate-700 hover:bg-slate-750 cursor-pointer ${
                    !notification.read ? 'bg-slate-750/50' : ''
                  }`}
                  onClick={() => {
                    markAsRead(notification.id);
                    if (notification.actionUrl) {
                      window.location.href = notification.actionUrl;
                    }
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      !notification.read ? 'bg-blue-500' : 'bg-transparent'
                    }`} />
                    <div className="flex-1">
                      <h4 className="font-medium text-white">
                        {notification.title}
                      </h4>
                      <p className="text-sm text-slate-400 mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-slate-500 mt-2">
                        {formatRelativeTime(notification.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
```

## Server-Side Emission

### Emit Notification Function

```typescript
// /src/lib/notifications.ts
import { Server } from 'socket.io';

export async function emitNotification(
  io: Server,
  userId: string,
  notification: {
    type: string;
    title: string;
    message: string;
    actionUrl?: string;
  }
) {
  // Save to database
  const savedNotification = await prisma.notification.create({
    data: {
      userId,
      type: notification.type,
      title: notification.title,
      message: notification.message,
      actionUrl: notification.actionUrl,
      read: false,
    },
  });

  // Emit via WebSocket
  io.to(`user:${userId}`).emit('notification', {
    id: savedNotification.id,
    ...notification,
    timestamp: savedNotification.createdAt,
    read: false,
  });

  return savedNotification;
}
```

### Usage Examples

```typescript
// When shift is assigned
await emitNotification(io, employeeUserId, {
  type: 'SHIFT_ASSIGNED',
  title: 'New Shift Assigned',
  message: `You have been assigned to work ${shiftDate} from ${startTime} to ${endTime}`,
  actionUrl: '/calendar',
});

// When time-off is approved
await emitNotification(io, employeeUserId, {
  type: 'TIME_OFF_APPROVED',
  title: 'Time-Off Request Approved',
  message: `Your time-off request for ${dates} has been approved`,
  actionUrl: '/time-off',
});

// When achievement is unlocked
await emitNotification(io, employeeUserId, {
  type: 'ACHIEVEMENT_UNLOCKED',
  title: '🏆 Achievement Unlocked!',
  message: `You've earned "${achievementName}"! +${xpReward} XP`,
  actionUrl: '/guild',
});
```

## Browser Notifications

### Request Permission

```typescript
// /src/lib/browserNotifications.ts
export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    console.log('Browser does not support notifications');
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
}

export function showBrowserNotification(
  title: string,
  options: NotificationOptions = {}
) {
  if (Notification.permission === 'granted') {
    return new Notification(title, {
      icon: '/nyxtitan-logo.png',
      badge: '/notification-badge.png',
      ...options,
    });
  }
}
```

## Database Schema

```prisma
// Add to prisma/schema.prisma
model Notification {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  type      String   // SHIFT_ASSIGNED, TIME_OFF_APPROVED, etc.
  title     String
  message   String
  actionUrl String?
  read      Boolean  @default(false)
  createdAt DateTime @default(now())
  
  @@index([userId, read])
  @@index([userId, createdAt])
}
```

## API Endpoints

```typescript
// GET /api/notifications - List all notifications
// PATCH /api/notifications/:id - Mark as read
// PATCH /api/notifications/mark-all-read - Mark all as read
// DELETE /api/notifications/:id - Delete notification
```

## Implementation Checklist

### Backend
- [ ] Install socket.io (`npm install socket.io`)
- [ ] Create WebSocket server setup
- [ ] Add Notification model to Prisma schema
- [ ] Run `prisma db push` and `prisma generate`
- [ ] Create notification emission utilities
- [ ] Add notification API endpoints

### Frontend
- [ ] Install socket.io-client (`npm install socket.io-client`)
- [ ] Create useNotifications hook
- [ ] Create NotificationCenter component
- [ ] Add to main layout/navbar
- [ ] Request browser notification permission
- [ ] Test real-time updates

### Integration Points
- [ ] Shift assignments → Emit notification
- [ ] Time-off approvals → Emit notification
- [ ] XP/achievements → Emit notification
- [ ] Clock-in/out events → Emit notification
- [ ] Report generation → Emit notification

## Testing

```typescript
describe('Notifications', () => {
  it('receives real-time notifications', (done) => {
    const socket = io('http://localhost:3001');
    
    socket.on('notification', (notification) => {
      expect(notification).toHaveProperty('title');
      expect(notification).toHaveProperty('message');
      done();
    });
    
    // Trigger notification from server
  });
});
```

## Performance Considerations

- **Connection Pooling**: Reuse connections
- **Message Queuing**: Use Redis for scaling
- **Load Balancing**: Sticky sessions for WebSocket
- **Fallback**: Long polling for older browsers
- **Compression**: Enable WebSocket compression

## Security

- ✅ Authenticate WebSocket connections
- ✅ Validate user permissions before emitting
- ✅ Rate limit notifications per user
- ✅ Sanitize notification content
- ✅ Use secure WebSocket (wss://) in production

---

**Last Updated**: February 7, 2026
**Status**: Real-time notification system documented and ready for implementation
