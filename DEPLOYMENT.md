# Production Deployment Guide - NyxTitan

## Deployment Options

NyxTitan can be deployed to various platforms. We recommend Vercel for the easiest deployment experience with Next.js.

## Option 1: Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- PostgreSQL or Turso database for production

### Steps

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Next.js

3. **Configure Environment Variables**
   Add these in Vercel dashboard → Settings → Environment Variables:
   
   ```env
   DATABASE_URL=postgresql://user:pass@host:5432/nyxtitan
   NEXTAUTH_SECRET=your-secure-secret-here
   NEXTAUTH_URL=https://your-app.vercel.app
   ```

4. **Deploy**
   - Vercel automatically builds and deploys
   - Each push to main triggers a new deployment
   - Preview deployments for PRs

### Vercel Configuration

Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "DATABASE_URL": "@database-url",
    "NEXTAUTH_SECRET": "@nextauth-secret",
    "NEXTAUTH_URL": "@nextauth-url"
  }
}
```

## Option 2: Netlify

### Steps

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Initialize**
   ```bash
   netlify init
   ```

4. **Configure Build**
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

5. **Set Environment Variables**
   ```bash
   netlify env:set DATABASE_URL "your-database-url"
   netlify env:set NEXTAUTH_SECRET "your-secret"
   netlify env:set NEXTAUTH_URL "https://your-app.netlify.app"
   ```

6. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## Option 3: Docker + Any Cloud Platform

### Dockerfile

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build Next.js
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
      - NEXTAUTH_URL=${NEXTAUTH_URL}
    depends_on:
      - db
  
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=nyxtitan
      - POSTGRES_PASSWORD=your-secure-password
      - POSTGRES_DB=nyxtitan
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

### Deploy to Cloud Platforms

**AWS ECS:**
```bash
aws ecr get-login-password | docker login --username AWS --password-stdin
docker build -t nyxtitan .
docker tag nyxtitan:latest your-ecr-repo/nyxtitan:latest
docker push your-ecr-repo/nyxtitan:latest
```

**Google Cloud Run:**
```bash
gcloud builds submit --tag gcr.io/your-project/nyxtitan
gcloud run deploy nyxtitan --image gcr.io/your-project/nyxtitan --platform managed
```

**Azure Container Apps:**
```bash
az acr build --registry yourregistry --image nyxtitan .
az containerapp create --name nyxtitan --resource-group your-rg --image yourregistry.azurecr.io/nyxtitan
```

## Database Setup

### PostgreSQL (Recommended for Production)

1. **Create Database**
   - Use Supabase, Neon, PlanetScale, or AWS RDS
   
2. **Run Migrations**
   ```bash
   DATABASE_URL="your-production-url" npx prisma db push
   ```

3. **Seed Data (Optional)**
   ```bash
   DATABASE_URL="your-production-url" npm run db:seed
   ```

### Turso (Serverless SQLite)

1. **Install Turso CLI**
   ```bash
   curl -sSfL https://get.tur.so/install.sh | bash
   ```

2. **Create Database**
   ```bash
   turso db create nyxtitan
   turso db show nyxtitan
   ```

3. **Get Connection String**
   ```bash
   turso db show nyxtitan --url
   turso db tokens create nyxtitan
   ```

4. **Configure**
   ```env
   DATABASE_URL=libsql://your-db.turso.io
   DATABASE_AUTH_TOKEN=your-token
   ```

## Environment Variables

### Required
```env
# Database
DATABASE_URL=your-database-url

# Authentication
NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32
NEXTAUTH_URL=https://your-production-domain.com

# Optional: Email (for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### Generate Secrets
```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32
```

## Domain Setup

### Custom Domain on Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown
4. Wait for SSL certificate (automatic)

### Custom Domain on Netlify
1. Go to Domain Settings
2. Add custom domain
3. Update DNS or Netlify DNS
4. SSL enabled automatically

## Pre-Deployment Checklist

- [ ] Update `NEXTAUTH_URL` to production domain
- [ ] Generate new `NEXTAUTH_SECRET`
- [ ] Set up production database
- [ ] Run database migrations
- [ ] Test authentication flow
- [ ] Configure environment variables
- [ ] Set up error monitoring (Sentry)
- [ ] Enable analytics (if desired)
- [ ] Test mobile responsiveness
- [ ] Check API endpoints
- [ ] Verify HTTPS/SSL
- [ ] Set up backups
- [ ] Configure CORS if needed

## Post-Deployment

### Health Checks
```bash
# Check if app is running
curl https://your-app.com/api/health

# Test authentication
curl https://your-app.com/api/auth/providers
```

### Monitor Logs
- **Vercel**: Dashboard → Deployments → Logs
- **Netlify**: Dashboard → Functions → Logs
- **Docker**: `docker logs container-name`

### Performance
- Enable caching headers
- Use CDN for static assets
- Optimize images with Next.js Image
- Enable compression

## Rollback

### Vercel
- Go to Deployments
- Click previous deployment
- Click "Promote to Production"

### Netlify
```bash
netlify rollback
```

### Docker
```bash
docker pull your-image:previous-tag
docker-compose up -d
```

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Verify all dependencies installed
- Check environment variables
- Review build logs

### Database Connection Issues
- Verify `DATABASE_URL` format
- Check firewall/security groups
- Test connection locally first
- Ensure database exists

### Authentication Not Working
- Verify `NEXTAUTH_URL` matches domain
- Check `NEXTAUTH_SECRET` is set
- Test callback URLs
- Check session configuration

## Scaling

### Horizontal Scaling
- Vercel: Automatic
- Netlify: Automatic
- Docker: Use Kubernetes or Docker Swarm

### Database Scaling
- Connection pooling (PgBouncer)
- Read replicas
- Caching (Redis)

---

**Last Updated**: February 7, 2026
**Status**: Production deployment guide complete and ready to use
