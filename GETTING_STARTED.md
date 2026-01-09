# Getting Started with NoxTitan™

This guide will help you access and use NoxTitan, whether you want to see a quick demo or run the full application.

## 🎯 Choose Your Path

### Path 1: Quick Demo (No Installation) ⚡
**Best for:** Quick preview, sharing with others, first-time visitors

**What you get:** Interactive presentation showcasing NoxTitan's features

**How to access:**
1. Click here: **[https://cmc-creator.github.io/NoxTitan/](https://cmc-creator.github.io/NoxTitan/)**
2. That's it! The demo loads instantly in your browser

---

### Path 2: Full Application (Development Setup) 💻
**Best for:** Development, testing all features, full functionality

**What you get:** Complete NoxTitan application with database, scheduling, employee management, and all features

## Prerequisites
Before you start, make sure you have:
- **Node.js 18 or higher** - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, if cloning the repo)

### Check if you have Node.js:
```bash
node --version
# Should show v18.0.0 or higher
```

## Step-by-Step Setup

### Step 1: Get the Code
If you haven't already cloned the repository:
```bash
git clone https://github.com/cmc-creator/NoxTitan.git
cd NoxTitan
```

Or if you already have it:
```bash
cd /path/to/NoxTitan
```

### Step 2: Install Dependencies
This downloads all the necessary packages:
```bash
npm install
```

**Expected time:** 2-3 minutes
**What happens:** Downloads React, Next.js, Prisma, and other dependencies

### Step 3: Set Up the Database
NoxTitan uses SQLite with Prisma ORM. Initialize it:
```bash
npx prisma generate
npx prisma migrate dev --name init
```

**Expected time:** 30 seconds
**What happens:** 
- Creates the database file (`dev.db`)
- Sets up all tables (Users, Employees, Shifts, etc.)

### Step 4: Start the Development Server
```bash
npm run dev
```

**Expected time:** 10-15 seconds
**What happens:** Starts the Next.js development server

You should see output like:
```
▲ Next.js 16.1.1
- Local:        http://localhost:3000
- Ready in 3.2s
```

### Step 5: Open the Application
1. Open your web browser
2. Navigate to: **http://localhost:3000**
3. You should see the NoxTitan landing page!

## 🎉 You're In!

### What to Explore First:

1. **Landing Page** (`/`) - See pricing tiers and features
2. **Dashboard** (`/dashboard`) - Overview of your workspace
3. **Calendar** (`/calendar`) - Interactive scheduling calendar
4. **Employees** (`/employees`) - Manage your team
5. **Settings** (`/settings`) - Configure your subscription

## Common Issues & Solutions

### Issue: "Command not found: npm"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: "Port 3000 is already in use"
**Solution:** Either:
- Stop the other application using port 3000, or
- Run on a different port: `npm run dev -- -p 3001`

### Issue: Database errors
**Solution:** Reset the database:
```bash
npm run db:reset
```

### Issue: Page won't load or shows errors
**Solution:** 
1. Stop the server (Ctrl+C)
2. Clear the `.next` folder: `rm -rf .next`
3. Restart: `npm run dev`

## Need More Help?

- **Documentation:** Check the [README.md](README.md) for detailed information
- **Features Guide:** See feature-specific documentation in the repo
- **Issues:** Report problems on [GitHub Issues](https://github.com/cmc-creator/NoxTitan/issues)

## What's the Difference?

| Feature | Live Demo | Full Application |
|---------|-----------|------------------|
| Access Method | Web browser (any device) | Local setup required |
| Setup Time | Instant | 5-10 minutes |
| Features | Presentation/showcase | Fully functional |
| Database | No | Yes (SQLite) |
| Can Edit Data | No | Yes |
| Offline Use | Yes (some versions) | Yes (after setup) |
| Best For | Quick preview, sharing | Development, testing |

## Next Steps

Once you have the application running:

1. **Explore the Features** - Navigate through all pages
2. **Add Test Data** - Create employees and shifts
3. **Try the Calendar** - Schedule some shifts
4. **Check Settings** - Explore subscription tiers
5. **Review the Code** - Learn how it's built

## Development Tips

### Useful Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Check for code issues
npm run lint

# Open database GUI
npx prisma studio

# Reset database with seed data
npm run db:reset
```

### Project Structure
```
NoxTitan/
├── src/
│   ├── app/          # Next.js pages and routes
│   ├── components/   # React components
│   └── lib/          # Utilities and helpers
├── prisma/           # Database schema and migrations
├── public/           # Static assets
└── index.html        # GitHub Pages demo
```

---

**Ready to build the future of workforce management? Let's go! 🚀**
