# NyxTitan API Documentation

## Overview
NyxTitan provides a comprehensive REST API for managing employees, schedules, time-off requests, guild/gamification features, and reporting.

## Authentication
All API endpoints use NextAuth v5 for authentication. Include session credentials in your requests.

### Demo Credentials
- Email: `demo@nyxtitan.com`
- Password: `demo123456`

## Base URL
- Development: `http://localhost:3000`
- Production: `https://your-domain.com`

---

## API Endpoints

### 🔐 Authentication

#### NextAuth Handlers
**GET/POST** `/api/auth/[...nextauth]`
- Handles all NextAuth v5 authentication flows
- Auto-configured for credentials provider

**POST** `/api/auth/signup`
- Create a new user account
- Body: `{ email, password, name }`

---

### 👥 Employees API

#### List All Employees
**GET** `/api/employees`
- Returns all employees for authenticated user
- Requires authentication
- Response: Array of employee objects

#### Create Employee
**POST** `/api/employees`
- Create a new employee
- Requires authentication
- Body:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "(555) 123-4567",
    "position": "Nurse",
    "hourlyRate": 35.50,
    "color": "#3B82F6"
  }
  ```

#### Get Employee by ID
**GET** `/api/employees/[id]`
- Returns specific employee details
- Requires authentication

#### Update Employee
**PUT** `/api/employees/[id]`
- Update employee information
- Requires authentication
- Body: Same as create, partial updates allowed

#### Delete Employee
**DELETE** `/api/employees/[id]`
- Delete an employee
- Requires authentication

---

### 🏖️ Time-Off API

#### List Time-Off Requests
**GET** `/api/time-off`
- Returns all time-off requests
- Includes employee details
- Requires authentication

#### Create Time-Off Request
**POST** `/api/time-off`
- Submit a new time-off request
- Requires authentication
- Body:
  ```json
  {
    "employeeId": "clx...",
    "startDate": "2026-03-01",
    "endDate": "2026-03-05",
    "reason": "Vacation"
  }
  ```

#### Update Time-Off Request
**PUT** `/api/time-off/[id]`
- Approve, deny, or modify a request
- Requires authentication
- Body: `{ status: "APPROVED" | "DENIED" }`

---

### 🎮 Guild/Gamification API

#### Get Activity Log
**GET** `/api/guild/admin/activity`
- Returns XP transaction history
- Includes employee and guild member details
- Requires authentication

#### Grant XP to Employee
**POST** `/api/guild/admin/grant-xp`
- Award XP to an employee
- Auto-creates GuildMember if needed
- Updates levels and ranks
- Requires authentication
- Body:
  ```json
  {
    "employeeId": "clx...",
    "amount": 100,
    "source": "Perfect attendance this week"
  }
  ```

#### Get Leaderboard
**GET** `/api/guild/leaderboard`
- Returns top guild members by XP
- Public endpoint

#### Get Guild Member Profile
**GET** `/api/guild/profile?employeeId=[id]`
- Returns guild member stats and achievements

#### List Achievements
**GET** `/api/guild/achievements`
- Returns available achievements
**GET** `/api/guild/admin/achievements`
- Admin endpoint for managing achievements

---

### 📊 Reports & Analytics API

#### List Reports
**GET** `/api/reports-analytics`
- Returns all generated reports
- Ordered by creation date
- Requires authentication

#### Create Report
**POST** `/api/reports-analytics`
- Generate a new report
- Requires admin or manager role
- Body:
  ```json
  {
    "name": "Monthly Absenteeism Report",
    "type": "absenteeism",
    "description": "Employee absence patterns for March",
    "dateFrom": "2026-03-01",
    "dateTo": "2026-03-31",
    "filters": {
      "department": "Nursing",
      "minAbsences": 2
    },
    "format": "json"
  }
  ```

---

### 🏢 Organization Setup

#### Complete Organization Setup
**POST** `/api/organization/setup`
- Initialize organization settings
- Requires authentication
- Body: Organization configuration object

---

### ⏰ Time Clock API

#### Clock In/Out
**POST** `/api/timeclock`
- Record employee clock in/out
- Body: `{ employeeId, type: "IN" | "OUT", deviceId? }`

#### Break Management
**POST** `/api/timeclock/break`
- Start or end a break
- Body: `{ employeeId, type: "START" | "END" }`

---

### 🛡️ Compliance API

#### List Violations
**GET** `/api/compliance/violations`
- Returns compliance violations
- Filterable by severity and status

---

## Response Formats

### Success Response
```json
{
  "id": "clx123...",
  "field": "value",
  "createdAt": "2026-02-07T23:00:00.000Z"
}
```

### Error Response
```json
{
  "error": "Error message description",
  "code": "ERROR_CODE"
}
```

### Common Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized (not authenticated)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Server Error

---

## Testing the API

### Using the Test Script
```bash
# Start the dev server
npm run dev

# In another terminal, run the API tests
npm run test:api
```

### Using curl
```bash
# Test employees endpoint (will return 401 without auth)
curl http://localhost:3000/api/employees

# Test NextAuth providers
curl http://localhost:3000/api/auth/providers
```

### Using Postman/Insomnia
1. Import the API endpoints
2. Set base URL to `http://localhost:3000`
3. Configure authentication in your session

---

## Rate Limiting
Currently no rate limiting is implemented. Consider adding rate limiting for production deployments.

## Audit Logging
All critical API operations are logged to the `AuditLog` table for compliance and security tracking.

---

## Notes
- All timestamps are in ISO 8601 format (UTC)
- All IDs use cuid format
- File uploads are not yet implemented
- WebSocket support for real-time updates is planned

## Support
For API issues, check:
1. `SETUP_GUIDE.md` for configuration
2. Server logs for detailed error messages
3. Prisma Studio (`npm run db:studio`) for database inspection
