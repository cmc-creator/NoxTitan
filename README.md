# NoxTitan™ - Business Management Platform

**Copyright © 2026 Connie Michelle Consulting & Business Solutions LLC. All Rights Reserved.**

## 🚀 About NoxTitan™

NoxTitan is a comprehensive business management platform forged for titans—covering scheduling, HR, payroll, compliance, accounting, and more.

### Developed by:
**Connie Michelle Consulting & Business Solutions LLC**

---

## 📍 Where to Access NoxTitan

> **⚠️ IMPORTANT**: The full NoxTitan application is **NOT available online**. It must be run locally on your computer. The GitHub Pages link below shows only a presentation demo, not the actual working program.

### 🎭 Option 1: View the Presentation Demo (No Setup Required)
**→ [Launch Demo Presentation](https://cmc-creator.github.io/NoxTitan/)**

**This is NOT the actual program** - it's a slideshow presentation that showcases NoxTitan's features. Perfect for:
- Getting a quick overview of capabilities
- Sharing with stakeholders
- Viewing from any device without installation

**To access the actual working program**, see Option 2 below.

### 💻 Option 2: Run the Full Application Locally ⭐ *This is the actual program*
To access the **full working NoxTitan application** with all features, you must run it on your own computer:

1. **Prerequisites:** Node.js 18+ and npm
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up the database:**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser

The full application includes:
- ✅ Interactive calendar with drag-and-drop
- ✅ Employee management system
- ✅ Time-off requests and approvals
- ✅ Dashboard with analytics
- ✅ All subscription tier features
- ✅ Complete database functionality

---

A comprehensive employee scheduling application built with Next.js, featuring subscription tiers (VIP, Professional, Enterprise, Titan) and a beautiful, user-friendly calendar interface.

## Features

### 🎯 Core Features
- **Large, Intuitive Calendar Interface** - Beautiful calendar with day, week, and month views
- **Employee Management** - Complete CRUD operations for managing team members
- **Shift Scheduling** - Easy shift creation and assignment
- **Drag-and-Drop** - Visual shift management (Professional+ tiers)
- **Time-Off Management** - Request and approve employee time off (Professional+ tiers)
- **Shift Swapping** - Employee-initiated shift trades (Professional+ tiers)
- **Availability Management** - Track employee availability (Enterprise+ tiers)
- **Advanced Analytics** - Detailed reporting and insights (Enterprise+ tiers)

### 💎 Subscription Tiers

#### VIP Access (Free with exclusive code)
- All features unlocked
- Lifetime access for founding members

#### Professional Tier ($499/month)
- Up to 50 employees
- Advanced scheduling & calendar
- Time & attendance
- Employee management
- Payroll calculations
- Basic reporting
- 10 core integrations

#### Enterprise Tier ($1,499/month)
- Up to 250 employees
- All Professional features
- Oracle AI (predictive analytics)
- Compliance Suite (OSHA, CMS, Joint Commission)
- Asset Vault
- Sentinel visitor management
- Guild gamification
- All 60+ integrations
- Advanced analytics

#### Titan Tier ($2,999/month or Custom)
- Unlimited employees
- All Enterprise features
- White-glove implementation
- Dedicated account manager
- 24/7 priority support
- Custom integrations & development
- White-labeling options
- Export/import capabilities
- Custom branding

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** SQLite with Prisma ORM
- **Calendar:** React Big Calendar
- **UI Components:** Custom components with Lucide icons
- **Drag & Drop:** @dnd-kit (Gold/Platinum tiers)

## Getting Started

👉 **[See detailed setup guide: GETTING_STARTED.md](GETTING_STARTED.md)**

For detailed setup instructions, see **[Where to Access NoxTitan](#-where-to-access-noxtitan)** above.

**Quick Commands:**
```bash
# Install dependencies
npm install

# Set up database
npx prisma generate
npx prisma migrate dev --name init

# Start development server
npm run dev

# Access at http://localhost:3000
```

## Project Structure

```
NoxTitan/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── employees/    # Employee CRUD endpoints
│   │   │   ├── shifts/       # Shift management endpoints
│   │   │   └── time-off/     # Time-off request endpoints
│   │   ├── calendar/         # Calendar page
│   │   ├── dashboard/        # Dashboard with analytics
│   │   ├── employees/        # Employee management page
│   │   ├── time-off/         # Time-off requests page
│   │   ├── settings/         # Settings and subscription page
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Landing page with pricing
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── BigCalendar.tsx   # Main calendar component
│   │   ├── Sidebar.tsx       # Navigation sidebar
│   │   └── TopBar.tsx        # Top navigation bar
│   └── lib/
│       ├── prisma.ts         # Prisma client
│       ├── subscription.ts   # Subscription tier logic
│       └── utils.ts          # Utility functions
├── prisma/
│   ├── schema.prisma         # Database schema
│   └── migrations/           # Database migrations
├── .github/
│   └── copilot-instructions.md
├── package.json
└── README.md
```

## Database Schema

The application uses a comprehensive database schema with the following models:

- **User** - Account and subscription management
- **Employee** - Employee information
- **Shift** - Scheduled shifts
- **Schedule** - Grouped schedules
- **Availability** - Employee availability
- **TimeOffRequest** - Time-off requests
- **ShiftSwap** - Shift swap requests
- **Notification** - User notifications

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma generate` - Regenerate Prisma Client
- `npx prisma migrate dev` - Create and apply migrations

## Key Pages

### Landing Page (/)
Beautiful pricing page showcasing all three subscription tiers with features and benefits.

### Dashboard (/dashboard)
Overview of scheduling metrics, recent activity, quick actions, and upcoming schedules.

### Calendar (/calendar)
Large, interactive calendar with day/week/month views for managing all shifts.

### Employees (/employees)
Complete employee management with search, filtering, and CRUD operations.

### Time Off (/time-off)
Manage employee time-off requests with approval/rejection workflow.

### Settings (/settings)
Account settings, subscription management, and notification preferences.

## API Endpoints

### Employees
- `GET /api/employees` - Get all employees
- `POST /api/employees` - Create new employee
- `GET /api/employees/[id]` - Get employee by ID
- `PUT /api/employees/[id]` - Update employee
- `DELETE /api/employees/[id]` - Delete employee

### Shifts
- `GET /api/shifts` - Get all shifts
- `POST /api/shifts` - Create new shift

### Time Off
- `GET /api/time-off` - Get all time-off requests
- `POST /api/time-off` - Create new time-off request

## Customization

### Changing Subscription Limits
Edit `src/lib/subscription.ts` to modify tier limits and features.

### Styling
The application uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.ts` - Tailwind configuration
- `src/app/globals.css` - Global CSS and calendar styles

### Database
To modify the database schema:
1. Edit `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name your_migration_name`
3. Run `npx prisma generate`

## Future Enhancements

- [ ] User authentication with NextAuth.js
- [ ] Real-time notifications with WebSockets
- [ ] Mobile app with React Native
- [ ] Advanced AI scheduling algorithms
- [ ] Multi-language support
- [ ] Export to PDF/Excel
- [ ] Integration with payroll systems
- [ ] Shift templates and recurring schedules
- [ ] Employee mobile app for shift viewing

## Contributing

This is a personal project, but suggestions and feedback are welcome!

## License

ISC

## Support

For questions or issues, please check the documentation or contact support.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
