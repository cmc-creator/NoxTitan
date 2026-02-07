# NoxTitan™ Deployment Guide

## Understanding the Setup

NoxTitan consists of two parts:

1. **Static Demo** (`index.html`) - A presentation/demo showcasing features
2. **Full Next.js Application** (`src/` directory) - The complete product with all functionality

## Current GitHub Pages Setup

**What's deployed:** The static demo HTML files  
**URL:** https://cmc-creator.github.io/NoxTitan/  
**Deployed by:** `.github/workflows/nextjs.yml` workflow on push to `main`

### ⚠️ Important Limitation

**GitHub Pages only supports static content.** The full NoxTitan application requires:
- Node.js server runtime
- API routes for backend functionality
- Database connections
- Server-side rendering

These features **cannot run on GitHub Pages**, which only serves static HTML/CSS/JS files.

## Deploying the Full NoxTitan Application

To deploy the complete NoxTitan application with all features, use one of these platforms:

### Option 1: Vercel (Recommended - Free Tier Available)

**Why Vercel?**
- Created by the Next.js team
- Zero-configuration deployment
- Automatic HTTPS
- Free tier includes:
  - Unlimited deployments
  - 100GB bandwidth/month
  - Serverless functions

**Steps:**

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import your repository**
   - Click "Add New Project"
   - Select your `NoxTitan` repository
   - Vercel auto-detects it's a Next.js app

3. **Configure environment variables** (if needed)
   - Add any required environment variables
   - For example: database URLs, API keys, etc.

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your app will be live at `your-project.vercel.app`

5. **Automatic deployments**
   - Every push to `main` automatically deploys
   - Pull requests get preview deployments

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy!

### Option 3: Railway

1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Railway auto-detects Next.js
4. Deploy!

### Option 4: Self-Hosted VPS

**Requirements:**
- Node.js 20+
- 1GB+ RAM
- Ubuntu/Debian Linux (recommended)

**Steps:**

```bash
# On your server
git clone https://github.com/cmc-creator/NoxTitan.git
cd NoxTitan
npm install
npm run build
npm start
```

**Use PM2 for process management:**
```bash
npm install -g pm2
pm2 start npm --name "noxtitan" -- start
pm2 save
pm2 startup
```

## Local Development

To run NoxTitan locally:

```bash
# Clone the repository
git clone https://github.com/cmc-creator/NoxTitan.git
cd NoxTitan

# Install dependencies
npm install

# Set up the database
npm run db:push

# Run development server
npm run dev
```

Open http://localhost:3000 in your browser.

## Environment Variables

Create a `.env` file in the root directory:

```env
# Database (for production)
DATABASE_URL="your-database-url"

# NextAuth (for authentication)
NEXTAUTH_SECRET="generate-a-random-secret"
NEXTAUTH_URL="https://your-domain.com"

# Optional: Email configuration
EMAIL_SERVER="smtp://username:password@smtp.example.com:587"
EMAIL_FROM="noreply@yourdomain.com"
```

## Comparison: GitHub Pages vs Full Deployment

| Feature | GitHub Pages | Vercel/Netlify/Railway |
|---------|--------------|------------------------|
| Static demo/presentation | ✅ Yes | ✅ Yes |
| Full Next.js app | ❌ No | ✅ Yes |
| API routes | ❌ No | ✅ Yes |
| Database connections | ❌ No | ✅ Yes |
| Server-side rendering | ❌ No | ✅ Yes |
| Authentication | ❌ No | ✅ Yes |
| Real-time features | ❌ No | ✅ Yes |
| Cost | Free | Free tier available |
| Custom domain | ✅ Yes | ✅ Yes |

## Recommended Setup

**For production use:**
1. Deploy the full application to **Vercel** (or similar)
2. Use that URL for your actual product
3. Keep GitHub Pages for the demo/presentation

**Example setup:**
- **Demo:** https://cmc-creator.github.io/NoxTitan/ (static demo)
- **Production:** https://noxtitan.vercel.app (full application)
- **Custom Domain:** https://app.noxtitan.com (point to Vercel)

## Troubleshooting

### "Why is the GitHub Pages link showing the demo?"

GitHub Pages is configured to deploy the static demo HTML files. This is intentional because:
1. The full Next.js app requires a Node.js server
2. GitHub Pages only supports static files
3. The demo provides a quick preview of features

### "How do I deploy the product I pushed this morning?"

The code you pushed is in the repository, but to run it you need to:
1. Deploy to Vercel/Netlify (recommended)
2. Or run it locally with `npm run dev`
3. GitHub Pages cannot run the full application

### "Can I make GitHub Pages show the Next.js app?"

No. Next.js applications with API routes require a server runtime that GitHub Pages doesn't provide. You must use Vercel, Netlify, or similar platforms.

## Questions?

For deployment assistance:
- Email: hello@noxtitan.com
- Check the README.md for development instructions
- See Next.js deployment docs: https://nextjs.org/docs/deployment

## Quick Start Checklist

- [ ] Code pushed to GitHub repository
- [ ] Sign up for Vercel account
- [ ] Import NoxTitan repository to Vercel
- [ ] Configure environment variables (if any)
- [ ] Deploy!
- [ ] Share your Vercel URL (not GitHub Pages URL) for the full app

**Remember:** GitHub Pages = Static Demo | Vercel/Netlify = Full Application
