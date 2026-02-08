# CI/CD Pipeline - NyxTitan

## Overview
This document outlines the Continuous Integration and Continuous Deployment setup for NyxTitan.

## GitHub Actions Workflow

### Main Workflow

Create `.github/workflows/ci-cd.yml`:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

env:
  NODE_VERSION: '20'

jobs:
  # Job 1: Lint and Type Check
  lint:
    name: Lint & Type Check
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Type check
        run: npx tsc --noEmit
  
  # Job 2: Run Tests
  test:
    name: Run Tests
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Generate Prisma Client
        run: npx prisma generate
      
      - name: Run unit tests
        run: npm run test:ci
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        if: always()
  
  # Job 3: Build
  build:
    name: Build Application
    runs-on: ubuntu-latest
    needs: [lint, test]
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Generate Prisma Client
        run: npx prisma generate
      
      - name: Build application
        run: npm run build
        env:
          NEXTAUTH_SECRET: ${{ secrets.NEXTAUTH_SECRET }}
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build
          path: .next
  
  # Job 4: Deploy to Staging
  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/develop'
    environment:
      name: staging
      url: https://staging.nyxtitan.com
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel (Staging)
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
          working-directory: ./
  
  # Job 5: Deploy to Production
  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    environment:
      name: production
      url: https://nyxtitan.com
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel (Production)
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
          working-directory: ./
      
      - name: Notify Deployment
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          text: 'NyxTitan deployed to production!'
          webhook_url: ${{ secrets.SLACK_WEBHOOK }}
        if: always()
  
  # Job 6: Security Scan
  security:
    name: Security Scan
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Run Snyk Security Scan
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
      
      - name: Run npm audit
        run: npm audit --audit-level=moderate
        continue-on-error: true
```

### PR Preview Workflow

Create `.github/workflows/pr-preview.yml`:

```yaml
name: PR Preview

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  preview:
    name: Deploy PR Preview
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy Preview
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          github-comment: true
      
      - name: Comment Preview URL
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '🚀 Preview deployed! Check it out at the URL above.'
            })
```

## Required Secrets

Add these in GitHub → Settings → Secrets → Actions:

```
VERCEL_TOKEN=your-vercel-token
VERCEL_ORG_ID=your-org-id
VERCEL_PROJECT_ID=your-project-id
NEXTAUTH_SECRET=your-secret
DATABASE_URL=your-database-url
SNYK_TOKEN=your-snyk-token (optional)
SLACK_WEBHOOK=your-slack-webhook (optional)
```

## Branch Strategy

### GitFlow Model

```
main (production)
  ↑
develop (staging)
  ↑
feature/*, bugfix/*, hotfix/*
```

### Branch Protection Rules

**main branch:**
- Require pull request reviews (2 approvers)
- Require status checks to pass
- Require branches to be up to date
- No force pushes
- No deletions

**develop branch:**
- Require pull request reviews (1 approver)
- Require status checks to pass
- Allow force pushes (with lease)

## Deployment Strategies

### Blue-Green Deployment
```yaml
deploy:
  strategy:
    type: blue-green
    max-surge: 1
    max-unavailable: 0
```

### Canary Deployment
```yaml
deploy:
  strategy:
    type: canary
    steps:
      - 10%  # 10% of traffic
      - 50%  # 50% of traffic
      - 100% # Full rollout
```

## Automated Testing

### Unit Tests
```bash
npm run test:ci
```

### Integration Tests
```bash
npm run test:integration
```

### E2E Tests (Playwright)
```yaml
e2e:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
    - run: npm ci
    - run: npx playwright install
    - run: npm run test:e2e
```

## Performance Monitoring

### Lighthouse CI

```yaml
lighthouse:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: treosh/lighthouse-ci-action@v9
      with:
        urls: |
          https://nyxtitan.com
          https://nyxtitan.com/login
          https://nyxtitan.com/dashboard
        uploadArtifacts: true
```

## Database Migrations

### Automated Migrations

```yaml
migrate:
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main'
  steps:
    - uses: actions/checkout@v4
    - run: npm ci
    - run: npx prisma migrate deploy
      env:
        DATABASE_URL: ${{ secrets.DATABASE_URL }}
```

## Rollback Procedures

### Automatic Rollback

```yaml
rollback:
  if: failure()
  runs-on: ubuntu-latest
  steps:
    - name: Rollback to Previous Version
      run: vercel rollback
```

### Manual Rollback

```bash
# List deployments
vercel ls

# Promote previous deployment
vercel promote deployment-url
```

## Notifications

### Slack Integration

```yaml
- name: Slack Notification
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    fields: repo,message,commit,author
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
  if: always()
```

### Email Notifications

```yaml
- name: Send Email
  uses: dawidd6/action-send-mail@v3
  with:
    server_address: smtp.gmail.com
    server_port: 465
    username: ${{ secrets.EMAIL_USERNAME }}
    password: ${{ secrets.EMAIL_PASSWORD }}
    subject: Build ${{ job.status }}
    body: Deployment completed!
    to: team@nyxtitan.com
```

## Monitoring & Alerts

### Health Checks

```yaml
health-check:
  runs-on: ubuntu-latest
  steps:
    - name: Check Health
      run: |
        response=$(curl -s -o /dev/null -w "%{http_code}" https://nyxtitan.com/api/health)
        if [ $response != "200" ]; then
          exit 1
        fi
```

## Cost Optimization

### Cache Dependencies

```yaml
- uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
```

### Conditional Jobs

```yaml
deploy:
  if: github.event_name == 'push' && github.ref == 'refs/heads/main'
```

## Best Practices

1. **Keep workflows fast** (< 10 minutes)
2. **Use caching** for dependencies
3. **Run tests in parallel**
4. **Fail fast** on critical errors
5. **Notify team** of deployment status
6. **Monitor deployment metrics**
7. **Have rollback plan** ready
8. **Test in staging** first

---

**Last Updated**: February 7, 2026
**Status**: CI/CD pipeline configuration ready for implementation
