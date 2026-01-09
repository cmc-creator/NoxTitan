# Getting Started with NoxTitan™

This guide will help you access and use NoxTitan, whether you want to see a quick demo or run the full application.

## ⚠️ IMPORTANT: Understanding What's Available

**The full NoxTitan application is NOT available as a live website.** Here's why:

- **GitHub Pages (https://cmc-creator.github.io/NoxTitan/)** = Only shows a **presentation/slideshow** of features
- **The actual working program** = Must be **run on your own computer** (requires Node.js and setup)

If you visited the GitHub Pages link and only saw a demo presentation, that's expected! To use the actual working program with calendar, employees, database, etc., you need to follow Path 2 below.

---

## 🎯 Choose Your Path

### Path 1: Presentation Demo (No Installation) ⚡
**Best for:** Quick preview, sharing with others, first-time visitors

**What you get:** A slideshow presentation showcasing NoxTitan's features (NOT the working program)

**How to access:**
1. Click here: **[https://cmc-creator.github.io/NoxTitan/](https://cmc-creator.github.io/NoxTitan/)**
2. That's it! The demo presentation loads instantly in your browser

**⚠️ This is just a presentation.** To use the actual working application, see Path 2 below.

---

### Path 2: Full Application (Local Setup) 💻 ⭐ *This is the actual program*
**Best for:** Using NoxTitan for real work, testing all features, development

**What you get:** The complete working NoxTitan application with database, scheduling, employee management, and all features

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

| Feature | GitHub Pages Demo | Full Application (The Actual Program) |
|---------|-------------------|---------------------------------------|
| **What is it?** | Slideshow presentation | Working web application |
| **Access Method** | Web browser (any device) | Must run on your computer |
| **Setup Time** | Instant | 5-10 minutes |
| **Features** | Presentation/showcase only | Fully functional with all features |
| **Database** | No | Yes (SQLite) |
| **Can Add Employees** | No | Yes |
| **Can Create Shifts** | No | Yes |
| **Can Edit Data** | No | Yes |
| **Interactive Calendar** | No (just images) | Yes (drag & drop) |
| **URL** | https://cmc-creator.github.io/NoxTitan/ | http://localhost:3000 |
| **Best For** | Quick preview, sharing | Actual use, development, testing |

**Bottom line:** The GitHub Pages demo is like watching a video of the program. To actually USE the program, you must run it locally on your computer.

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
