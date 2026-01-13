# Project Structure Guide

This repository contains **two separate products**:

## 1. 📺 Demo Site (Static HTML)
**Location:** Root directory  
**Files:**
- `index.html` - Main demo page (GitHub Pages entry point)
- `demo-interactive.html`
- `demo-noxtitan-final.html` 
- `demo-self-contained.html`
- `demo-music.mp3`
- `/demo/` directory
- `/landing/` directory

**Deployment:** GitHub Pages (automatic via `.github/workflows/deploy-pages.yml`)  
**Live URL:** https://cmc-creator.github.io/NoxTitan/

**Purpose:** Interactive presentation and demo for showcasing NoxTitan features

---

## 2. 🚀 Full Application (Next.js)
**Location:** 
- `/src/` - Application source code
- `/prisma/` - Database schema and migrations
- `/public/` - Static assets for the app
- Configuration files: `next.config.ts`, `tsconfig.json`, `package.json`, etc.

**Deployment:** Vercel (or similar Node.js hosting)  
**Live URL:** Coming soon (see DEPLOYMENT.md)

**Purpose:** Production-ready employee scheduling application with full backend

---

## Key Files

| File/Folder | Purpose | Used By |
|-------------|---------|---------|
| `index.html` | Demo homepage | GitHub Pages |
| `demo-*.html` | Demo variants | GitHub Pages |
| `/src/` | Application code | Vercel/Production |
| `/prisma/` | Database schema | Vercel/Production |
| `vercel.json` | Vercel config | Vercel/Production |
| `.vercelignore` | Files to exclude from Vercel | Vercel/Production |
| `.github/workflows/deploy-pages.yml` | GitHub Pages deployment | GitHub Pages |
| `DEPLOYMENT.md` | Deployment instructions | Documentation |
| `QUICK_START.md` | Getting started guide | Documentation |

---

## Development Workflow

### Working on the Demo:
1. Edit HTML files in root or `/demo/` directory
2. Test by opening HTML files in browser
3. Push to `main` branch → Auto-deploys to GitHub Pages

### Working on the Application:
1. Edit files in `/src/` directory
2. Test locally: `npm run dev`
3. Push to repository
4. Deploy to Vercel (manual or automatic)

---

## Quick Links

- 📖 [README.md](./README.md) - Main project documentation
- 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions
- ⚡ [QUICK_START.md](./QUICK_START.md) - Getting started guide
- 📺 [Demo Site](https://cmc-creator.github.io/NoxTitan/)

---

**Questions?** Check the documentation files or contact support.
