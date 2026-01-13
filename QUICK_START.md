# NoxTitan™ - Quick Start Guide

## Two Ways to Experience NoxTitan

### 🎭 1. Interactive Demo (GitHub Pages)
**Perfect for:** Showcasing features, presentations, sales demos

**URL:** [https://cmc-creator.github.io/NoxTitan/](https://cmc-creator.github.io/NoxTitan/)

**What it includes:**
- Animated presentation of features
- Executive overview
- Subscription tier comparisons
- No backend required
- Static HTML files

**Files:**
- `index.html` - Main demo page
- `demo-interactive.html` - Interactive variant
- `demo-noxtitan-final.html` - Final demo version
- `/demo/` directory - Demo resources

---

### 🚀 2. Full Application (Next.js)
**Perfect for:** Actual business use, development, customization

**Local Development:**
```bash
# Install dependencies
npm install

# Set up database
npx prisma generate
npx prisma migrate dev

# Seed with demo data (optional)
npm run db:seed

# Run development server
npm run dev

# Open http://localhost:3000
```

**What it includes:**
- Complete employee scheduling system
- Real-time calendar with drag-and-drop
- Employee management (CRUD)
- Time-off request system
- Shift swapping
- Analytics dashboard
- Multi-tier subscription system
- Database-backed (SQLite/PostgreSQL)
- API endpoints
- Authentication ready (NextAuth)

**Deployment:**
See [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment to Vercel.

---

## Feature Comparison

| Feature | Demo Site | Full App |
|---------|-----------|----------|
| **Purpose** | Presentation & showcase | Production use |
| **Technology** | Static HTML/CSS/JS | Next.js + React + TypeScript |
| **Database** | None | SQLite/PostgreSQL via Prisma |
| **User Interaction** | View-only demo | Full CRUD operations |
| **Authentication** | Not required | Can be implemented |
| **Deployment** | GitHub Pages | Vercel/Netlify/etc |
| **Customization** | Limited | Fully customizable |
| **Backend** | No server | Next.js API routes |
| **Real-time Updates** | No | Yes |
| **Data Persistence** | No | Yes |

---

## When to Use Each

### Use the Demo Site when:
✅ Showing NoxTitan to potential clients  
✅ Presenting at conferences or meetings  
✅ Creating promotional materials  
✅ No technical setup required  
✅ Need instant access via URL  
✅ Want to share quickly via link  

### Use the Full App when:
✅ Actually managing employee schedules  
✅ Need real data persistence  
✅ Require user authentication  
✅ Want to customize features  
✅ Developing new functionality  
✅ Need API integrations  
✅ Running in production for a business  

---

## Quick Links

- **📺 Demo Site:** [https://cmc-creator.github.io/NoxTitan/](https://cmc-creator.github.io/NoxTitan/)
- **📖 Full Documentation:** [README.md](./README.md)
- **🚀 Deployment Guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- **🔧 Development Setup:** See README.md "Getting Started" section
- **📋 Feature Documentation:** See various `*_FEATURES.md` files

---

## Need Help?

- **Demo not loading?** Check GitHub Pages deployment status in Actions tab
- **App not running locally?** Verify Node.js 18+ is installed and run `npm install`
- **Database issues?** Run `npx prisma migrate reset` and `npm run db:seed`
- **Deployment questions?** See [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Copyright © 2026 Connie Michelle Consulting & Business Solutions LLC. All Rights Reserved.**
