# Scheduler/Calendar Extraction Package

This package contains all the code and documentation needed to recreate the NoxTitan scheduler/calendar system in another program.

## 📦 Package Contents

```
scheduler-extraction/
├── README.md (this file)
├── components/
│   └── BigCalendar.tsx                  # React Big Calendar wrapper component
├── api/
│   └── shifts-route.ts                  # API route for shift CRUD operations
├── lib/
│   └── payroll.ts                       # Payroll calculation utilities
├── database/
│   └── core-models.prisma               # Essential database models
├── examples/
│   ├── simple-calendar.tsx              # Basic calendar implementation
│   ├── payroll-examples.ts              # Payroll calculation examples
│   └── api-implementation.ts            # Simplified API patterns
└── SCHEDULER_EXTRACTION_GUIDE.md        # Complete documentation (32KB)

Total: 8 files + comprehensive documentation
```

## 🎯 What's Included

### 1. Complete Documentation
- **SCHEDULER_EXTRACTION_GUIDE.md** - 32KB comprehensive guide covering:
  - Architecture overview with diagrams
  - Complete tech stack details
  - Full database schema with all models
  - Core component breakdowns
  - API endpoint specifications
  - Utility library documentation
  - Features checklist (25+ features)
  - Step-by-step implementation guide
  - Code examples for common tasks

### 2. Production-Ready Components
- **BigCalendar.tsx** - React Big Calendar wrapper with:
  - Date-fns localizer configuration
  - Custom event styling
  - Multiple views (month/week/day)
  - Event handlers for CRUD operations
  
### 3. Backend Code
- **shifts-route.ts** - Complete API implementation:
  - GET: Fetch shifts with date filtering
  - POST: Create shifts with automatic payroll calculation
  - Shift differential detection (night/weekend/holiday)
  - Overtime tracking
  - Notification triggers

### 4. Utility Libraries
- **payroll.ts** - Production-ready payroll calculations:
  - `isNightShift()` - Night shift detection (10 PM - 6 AM)
  - `isWeekendShift()` - Weekend detection
  - `calculateShiftHours()` - Hours with break deduction
  - `calculateNightHours()` - Count night hours
  - `calculateShiftPayroll()` - Comprehensive payroll with all differentials
  - `calculateWeeklyPayroll()` - Multi-shift payroll aggregation

### 5. Database Schema
- **core-models.prisma** - Complete Prisma schema including:
  - User (with differential settings)
  - Employee (with hourly rate)
  - Shift (with payroll fields)
  - ShiftSwap (employee swap requests)
  - TimeOffRequest (PTO management)
  - TimeClockEntry (punch in/out)
  - Availability (employee availability patterns)

### 6. Working Examples
- **simple-calendar.tsx** - Minimal calendar implementation
- **payroll-examples.ts** - 6 examples demonstrating:
  - Regular shift calculation
  - Night + weekend differentials
  - Overtime calculations
  - Holiday pay
  - Weekly payroll aggregation
  - Helper function usage
- **api-implementation.ts** - Simplified API patterns

## 🚀 Quick Start

### Option 1: Use as Reference
Open `SCHEDULER_EXTRACTION_GUIDE.md` and follow the implementation steps. The guide includes:
- Complete architecture explanation
- Step-by-step setup instructions
- Copy-paste ready code examples
- Integration patterns

### Option 2: Copy Files Directly
1. Copy database schema: `database/core-models.prisma`
2. Copy components: `components/BigCalendar.tsx`
3. Copy utilities: `lib/payroll.ts`
4. Copy API routes: `api/shifts-route.ts`
5. Adapt to your framework/language

### Option 3: Run Examples
1. Review example files in `examples/`
2. See working implementations
3. Understand patterns and adapt

## 📋 Features Included

### Core Scheduling
✅ Drag-and-drop scheduling  
✅ Multiple calendar views (month/week/day)  
✅ Color-coded shifts by employee  
✅ Shift templates and recurring shifts  
✅ Copy/paste week functionality  
✅ Bulk operations  

### Payroll & Time Tracking
✅ Automatic payroll calculation  
✅ Night shift differential (1.5x)  
✅ Weekend differential (1.25x)  
✅ Holiday differential (2.0x)  
✅ Overtime calculation (>40 hrs/week)  
✅ Break time deduction  
✅ Time clock integration  

### Advanced Features
✅ Conflict detection  
✅ Overtime warnings  
✅ Budget tracking  
✅ Coverage heatmaps  
✅ Shift swap requests  
✅ Time-off management  
✅ Shift marketplace  
✅ AI scheduling suggestions  
✅ Real-time notifications  
✅ Audit logging  

## 🛠 Technology Stack

### Frontend
- React 19
- Next.js 15 (App Router)
- TypeScript 5.9
- Tailwind CSS 4.0
- React Big Calendar 1.15.0
- date-fns 3.3.1

### Backend
- Next.js API Routes
- Prisma ORM 5.20.0
- PostgreSQL (or SQLite via LibSQL)
- Zod 3.23.8 (validation)

### Key Dependencies
```json
{
  "react-big-calendar": "^1.15.0",
  "date-fns": "^3.3.1",
  "@prisma/client": "^5.20.0",
  "zod": "^3.23.8"
}
```

## 📖 Documentation Structure

The main guide (`SCHEDULER_EXTRACTION_GUIDE.md`) contains:

1. **Architecture Overview** - System design and data flow
2. **Tech Stack** - Complete dependency list
3. **Database Schema** - All models with relationships
4. **Core Components** - Component breakdown and interfaces
5. **API Endpoints** - Complete API specification
6. **Utilities & Libraries** - Payroll calculation deep-dive
7. **Features Checklist** - All 25+ features documented
8. **Implementation Steps** - 7-step setup guide
9. **Code Examples** - 5+ working examples

## 💡 Key Algorithms

### Payroll Calculation
The system uses a sophisticated multi-factor payroll algorithm:

```
Total Pay = Regular Pay + Overtime Pay + Night Premium + Weekend Premium + Holiday Premium

Where:
- Regular Pay = Regular Hours × Hourly Rate
- Overtime Pay = Overtime Hours × Hourly Rate × OT Rate (1.5x)
- Night Premium = Night Hours × Hourly Rate × (Night Diff - 1)
- Weekend Premium = Total Hours × Hourly Rate × (Weekend Diff - 1)
- Holiday Premium = Total Hours × Hourly Rate × (Holiday Diff - 1)

Note: Premiums stack intelligently (holiday takes precedence)
```

### Shift Differential Rules
1. **Night Shift**: 10 PM - 6 AM (any portion = night shift)
2. **Weekend**: Saturday or Sunday
3. **Overtime**: > 40 hours per week
4. **Priority**: Holiday > Night > Weekend

## 🔧 Customization

All values are configurable per user:
- Night differential (default 1.5x)
- Weekend differential (default 1.25x)
- Holiday differential (default 2.0x)
- Overtime rate (default 1.5x)
- Night hours (default 22:00-06:00)

## 📝 Code Quality

All code includes:
- ✅ TypeScript type safety
- ✅ Input validation with Zod
- ✅ Error handling
- ✅ Audit logging
- ✅ Comments and documentation
- ✅ Production-ready patterns

## 🎓 Learning Path

1. **Start Here**: Read `SCHEDULER_EXTRACTION_GUIDE.md` (20 min)
2. **Understand Models**: Review `database/core-models.prisma` (10 min)
3. **See Examples**: Run through `examples/payroll-examples.ts` (15 min)
4. **Build Basic**: Implement `examples/simple-calendar.tsx` (30 min)
5. **Add Features**: Use guide to add advanced features (iterative)

## 🤝 Integration Guide

### Adapting to Other Frameworks

#### For Django (Python)
- Convert Prisma models to Django models
- Use Django REST Framework for API
- Adapt payroll.ts logic to Python functions
- Use Django templates or React frontend

#### For Ruby on Rails
- Convert Prisma models to ActiveRecord
- Use Rails API mode
- Adapt payroll calculations to Ruby
- Use React frontend or Rails views

#### For Laravel (PHP)
- Convert Prisma models to Eloquent models
- Use Laravel API routes
- Adapt payroll logic to PHP
- Use Blade templates or React frontend

#### For .NET (C#)
- Convert Prisma models to Entity Framework
- Use ASP.NET Core API
- Adapt payroll calculations to C#
- Use Blazor or React frontend

## 📊 Database Diagram (Simplified)

```
User
  ├── employees[] (Employee)
  ├── shifts[] (Shift)
  └── timeOffRequests[] (TimeOffRequest)

Employee
  ├── shifts[] (Shift)
  ├── swapRequests[] (ShiftSwap)
  ├── timeClockEntries[] (TimeClockEntry)
  └── availability[] (Availability)

Shift
  ├── employee (Employee)
  ├── timeClockEntries[] (TimeClockEntry)
  └── swapRequests[] (ShiftSwap)
```

## 🔍 File Sizes

- `SCHEDULER_EXTRACTION_GUIDE.md`: 32 KB (comprehensive)
- `components/BigCalendar.tsx`: 2 KB (wrapper)
- `lib/payroll.ts`: 7 KB (utilities)
- `api/shifts-route.ts`: 8 KB (API)
- `database/core-models.prisma`: 6 KB (schema)
- `examples/`: 15 KB total (3 files)

**Total Package Size**: ~70 KB of documentation and code

## 🎯 Next Steps

1. ✅ **Read the Guide**: Start with `SCHEDULER_EXTRACTION_GUIDE.md`
2. ✅ **Review Examples**: Check `examples/` directory
3. ✅ **Copy Schema**: Use `database/core-models.prisma`
4. ✅ **Implement Basic**: Start with `examples/simple-calendar.tsx`
5. ✅ **Add Features**: Follow the guide's implementation steps
6. ✅ **Customize**: Adapt to your specific needs

## 📞 Support

This extraction package includes:
- Complete source code (production-ready)
- Comprehensive documentation (32 KB guide)
- Working examples (6 examples)
- Database schema (7 models)
- Implementation guide (7 steps)

Everything you need to recreate the scheduler in your own program! 🚀

---

**Created from**: NoxTitan Repository  
**Source Components**: InteractiveCalendar (2639 lines), BigCalendar, Shift API  
**Documentation**: 32 KB comprehensive guide  
**Ready for**: Production use in any framework
