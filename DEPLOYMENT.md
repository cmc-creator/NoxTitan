# NoxTitan™ Deployment Guide

This guide covers deploying both the demo site and the full NoxTitan application.

---

## 📺 Demo Site (GitHub Pages)

**Current URL:** [https://cmc-creator.github.io/NoxTitan/](https://cmc-creator.github.io/NoxTitan/)

The demo site showcases NoxTitan's features with an interactive presentation. It's automatically deployed via GitHub Actions when changes are pushed to the `main` branch.

### What Gets Deployed
- `index.html` - Main demo page
- `demo-interactive.html` - Interactive demo variant
- `demo-noxtitan-final.html` - Final demo version
- `demo-self-contained.html` - Self-contained demo
- `demo-music.mp3` - Background music
- `/demo/` directory - Additional demo resources
- `/landing/` directory - Landing page resources

### Manual Trigger
You can manually trigger a deployment from the GitHub Actions tab:
1. Go to the repository on GitHub
2. Click "Actions"
3. Select "Deploy to GitHub Pages"
4. Click "Run workflow"

---

## 🚀 Full Application Deployment (Vercel)

The full NoxTitan Next.js application should be deployed to Vercel for optimal performance and automatic scaling.

### Prerequisites
- Vercel account (sign up at [vercel.com](https://vercel.com))
- GitHub repository access
- Database setup (SQLite for local, PostgreSQL/Turso for production)

### Step 1: Prepare Environment Variables

Create a `.env.local` file (already in `.gitignore`) with:

```env
# Database
DATABASE_URL="your-database-url-here"

# NextAuth (if implementing authentication)
NEXTAUTH_URL="https://your-app-url.vercel.app"
NEXTAUTH_SECRET="your-secret-here"

# Optional: External integrations
# Add any API keys for integrations here
```

### Step 2: Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended)

1. **Connect Repository:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import the `cmc-creator/NoxTitan` repository
   - Select the repository and click "Import"

2. **Configure Project:**
   - **Project Name:** `noxtitan` (or your preferred name)
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)

3. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add `DATABASE_URL` with your production database URL
   - Add any other required environment variables
   - Ensure variables are set for Production, Preview, and Development environments

4. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete (2-5 minutes)
   - Your app will be live at `https://your-project-name.vercel.app`

#### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd /path/to/NoxTitan
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account/team)
# - Link to existing project? No
# - Project name? noxtitan
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

### Step 3: Database Setup for Production

#### Option A: Turso (Recommended for SQLite)

1. **Install Turso CLI:**
   ```bash
   curl -sSfL https://get.tur.so/install.sh | bash
   ```

2. **Create Database:**
   ```bash
   turso db create noxtitan-prod-[your-name]
   ```
   
   > **Note:** Replace `[your-name]` with your own identifier to ensure a unique database name.

3. **Get Connection URL:**
   ```bash
   turso db show noxtitan-prod-[your-name] --url
   ```

4. **Create Auth Token:**
   ```bash
   turso db tokens create noxtitan-prod-[your-name]
   ```

5. **Update Vercel Environment Variables:**
   - `DATABASE_URL`: `libsql://[your-database-url]`
   - `DATABASE_AUTH_TOKEN`: (token from step 4)

6. **Run Migrations:**
   ```bash
   # Update your DATABASE_URL locally to point to Turso
   npx prisma migrate deploy
   npx prisma db seed
   ```

#### Option B: PostgreSQL (Neon, Supabase, or Vercel Postgres)

1. **Create PostgreSQL Database:**
   - Sign up for [Neon](https://neon.tech), [Supabase](https://supabase.com), or use Vercel Postgres
   - Create a new database
   - Copy the connection string

2. **Update Prisma Schema:**
   In `prisma/schema.prisma`, change:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

3. **Update Vercel Environment Variables:**
   - `DATABASE_URL`: Your PostgreSQL connection string

4. **Run Migrations:**
   ```bash
   npx prisma migrate deploy
   npx prisma db seed
   ```

### Step 4: Post-Deployment

1. **Verify Deployment:**
   - Visit your Vercel URL
   - Test key features (login, calendar, employee management)
   - Check that database connections work

2. **Set Up Custom Domain (Optional):**
   - In Vercel dashboard, go to Project Settings → Domains
   - Add your custom domain (e.g., `app.noxtitan.com`)
   - Follow DNS configuration instructions

3. **Enable Analytics (Optional):**
   - In Vercel dashboard, enable Web Analytics
   - Monitor performance and usage

4. **Configure CORS (If needed for external API access):**
   
   > **Security Warning:** Only configure CORS if your API needs to be accessed from external domains. For most applications, this is not necessary.
   
   In `next.config.ts`:
   ```typescript
   const nextConfig: NextConfig = {
     async headers() {
       return [
         {
           source: '/api/:path*',
           headers: [
             // Replace '*' with your specific domain(s) in production
             { key: 'Access-Control-Allow-Origin', value: 'https://yourdomain.com' },
             { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
             { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
           ],
         },
       ];
     },
   };
   ```
   
   **Security Best Practices:**
   - Never use `'*'` for `Access-Control-Allow-Origin` in production
   - Only allow specific trusted domains
   - Consider removing CORS headers entirely if not needed

---

## 🔄 Continuous Deployment

Both deployments are configured for automatic updates:

### Demo Site (GitHub Pages)
- **Trigger:** Push to `main` branch
- **Workflow:** `.github/workflows/deploy-pages.yml`
- **Build Time:** ~1 minute
- **URL:** https://cmc-creator.github.io/NoxTitan/

### Full App (Vercel)
- **Trigger:** Push to any branch
- **Production:** Push to `main` branch
- **Preview:** Push to any other branch
- **Build Time:** 2-5 minutes
- **URL:** https://your-project-name.vercel.app

---

## 🔍 Monitoring & Troubleshooting

### Check Deployment Status

**GitHub Pages:**
- Go to repository → Actions tab
- Check latest workflow run
- View logs for any errors

**Vercel:**
- Go to [vercel.com/dashboard](https://vercel.com/dashboard)
- Select your project
- View deployment logs and runtime logs

### Common Issues

#### Build Failures
- **Check environment variables** are set correctly
- **Verify database connection** string is valid
- **Check Node.js version** matches project requirements
- **Review build logs** for specific error messages

#### Runtime Errors
- **Database connection issues:** Verify DATABASE_URL and permissions
- **Missing dependencies:** Ensure all packages are in `package.json`
- **API route errors:** Check API logs in Vercel dashboard

#### Performance Issues
- **Enable caching** for static assets
- **Optimize images** using Next.js Image component
- **Use ISR** (Incremental Static Regeneration) for pages that don't change often
- **Monitor with Vercel Analytics**

---

## 📚 Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Prisma Deployment Guide](https://www.prisma.io/docs/guides/deployment)
- [Turso Documentation](https://docs.turso.tech/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

## 🆘 Support

For deployment issues or questions:
- Check the CHECKPOINT files for recent updates and implementation notes
- Review [README.md](./README.md) for project structure
- Contact Connie Michelle Consulting & Business Solutions LLC

---

**Copyright © 2026 Connie Michelle Consulting & Business Solutions LLC. All Rights Reserved.**
