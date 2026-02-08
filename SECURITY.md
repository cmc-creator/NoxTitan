# Security Audit & Best Practices - NyxTitan

## Security Checklist

### Authentication & Authorization
- [x] NextAuth v5 implemented
- [x] Secure password hashing (bcrypt)
- [x] Session management with JWT
- [x] CSRF protection enabled
- [ ] Two-factor authentication (2FA)
- [ ] Password strength requirements
- [ ] Account lockout after failed attempts
- [ ] Password reset flow
- [ ] Session timeout configuration

### API Security
- [x] Authentication required for protected routes
- [x] Role-based access control (RBAC)
- [x] Input validation with Zod
- [ ] Rate limiting
- [ ] API key authentication (for integrations)
- [ ] Request size limits
- [ ] CORS configuration
- [ ] API versioning

### Data Security
- [x] Passwords hashed with bcrypt
- [x] Database connections encrypted (SSL)
- [ ] Data encryption at rest
- [ ] PII data anonymization
- [ ] Secure file uploads
- [ ] SQL injection prevention (Prisma ORM)
- [ ] XSS protection
- [ ] CSRF tokens

### Infrastructure Security
- [ ] HTTPS/SSL certificates
- [ ] Security headers configured
- [ ] DDoS protection
- [ ] Regular security updates
- [ ] Vulnerability scanning
- [ ] Penetration testing
- [ ] Backup encryption
- [ ] Disaster recovery plan

## Implementation

### 1. Rate Limiting

```bash
npm install express-rate-limit
```

```typescript
// /src/middleware/rateLimit.ts
import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // 5 login attempts per 15 minutes
  message: 'Too many login attempts, please try again later.',
  skipSuccessfulRequests: true,
});
```

### 2. Security Headers

Create `next.config.ts`:
```typescript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self' data:;
      connect-src 'self' https:;
    `.replace(/\s{2,}/g, ' ').trim()
  }
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
```

### 3. Input Sanitization

```bash
npm install validator dompurify
```

```typescript
// /src/lib/sanitize.ts
import validator from 'validator';
import DOMPurify from 'dompurify';

export function sanitizeEmail(email: string): string {
  return validator.normalizeEmail(email) || '';
}

export function sanitizeHTML(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href'],
  });
}

export function escapeSQL(input: string): string {
  return input.replace(/['";\\]/g, '\\$&');
}

export function validatePhoneNumber(phone: string): boolean {
  return validator.isMobilePhone(phone, 'any');
}
```

### 4. Password Policy

```typescript
// /src/lib/passwordPolicy.ts
export interface PasswordRequirements {
  minLength: number;
  requireUppercase: boolean;
  requireLowercase: boolean;
  requireNumbers: boolean;
  requireSpecialChars: boolean;
}

export const DEFAULT_PASSWORD_REQUIREMENTS: PasswordRequirements = {
  minLength: 12,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: true,
};

export function validatePassword(
  password: string,
  requirements: PasswordRequirements = DEFAULT_PASSWORD_REQUIREMENTS
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (password.length < requirements.minLength) {
    errors.push(`Password must be at least ${requirements.minLength} characters long`);
  }
  
  if (requirements.requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (requirements.requireLowercase && !/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (requirements.requireNumbers && !/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (requirements.requireSpecialChars && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
}

export function checkCommonPasswords(password: string): boolean {
  const commonPasswords = [
    'password', '123456', '12345678', 'qwerty', 'abc123',
    'password123', 'admin', 'letmein', 'welcome', '123456789'
  ];
  
  return commonPasswords.includes(password.toLowerCase());
}
```

### 5. Two-Factor Authentication

```bash
npm install otplib qrcode
```

```typescript
// /src/lib/2fa.ts
import { authenticator } from 'otplib';
import QRCode from 'qrcode';

export async function generateSecret(email: string) {
  const secret = authenticator.generateSecret();
  const otpauth = authenticator.keyuri(email, 'NyxTitan', secret);
  const qrCode = await QRCode.toDataURL(otpauth);
  
  return { secret, qrCode };
}

export function verifyToken(token: string, secret: string): boolean {
  return authenticator.verify({ token, secret });
}
```

### 6. SQL Injection Prevention

```typescript
// ✅ GOOD: Using Prisma (parameterized queries)
const user = await prisma.user.findUnique({
  where: { email: userEmail }, // Safe
});

// ❌ BAD: Raw SQL without parameterization
const users = await prisma.$queryRawUnsafe(
  `SELECT * FROM User WHERE email = '${userEmail}'` // VULNERABLE!
);

// ✅ GOOD: Raw SQL with parameterization
const users = await prisma.$queryRaw`
  SELECT * FROM User WHERE email = ${userEmail}
`; // Safe
```

### 7. XSS Protection

```typescript
// Client-side XSS prevention
export function escapeHTML(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// React automatically escapes content
<div>{userInput}</div> // Safe

// Dangerous: dangerouslySetInnerHTML
<div dangerouslySetInnerHTML={{ __html: sanitizeHTML(userInput) }} />
```

### 8. CSRF Protection

NextAuth v5 includes CSRF protection by default. For custom forms:

```typescript
// /src/lib/csrf.ts
import { randomBytes } from 'crypto';

export function generateCSRFToken(): string {
  return randomBytes(32).toString('hex');
}

export function validateCSRFToken(token: string, expected: string): boolean {
  return token === expected;
}
```

## Vulnerability Scanning

### 1. npm audit

```bash
# Run security audit
npm audit

# Fix automatically
npm audit fix

# Fix including breaking changes
npm audit fix --force
```

### 2. Snyk

```bash
# Install Snyk CLI
npm install -g snyk

# Authenticate
snyk auth

# Test for vulnerabilities
snyk test

# Monitor project
snyk monitor
```

### 3. OWASP Dependency Check

```bash
npm install -g dependency-check

dependency-check --project nyxtitan --scan .
```

## Penetration Testing

### Tools
- **Burp Suite**: Web vulnerability scanner
- **OWASP ZAP**: Security testing tool
- **Metasploit**: Penetration testing framework
- **Nmap**: Network scanning

### Testing Checklist
- [ ] SQL Injection
- [ ] XSS (Cross-Site Scripting)
- [ ] CSRF (Cross-Site Request Forgery)
- [ ] Authentication bypass
- [ ] Session management
- [ ] Access control
- [ ] File upload vulnerabilities
- [ ] API security
- [ ] Information disclosure

## Compliance

### GDPR Compliance
- [ ] Privacy policy
- [ ] Cookie consent
- [ ] Data portability
- [ ] Right to be forgotten
- [ ] Data breach notification
- [ ] Privacy by design

### HIPAA Compliance (if applicable)
- [ ] Access controls
- [ ] Audit logs
- [ ] Data encryption
- [ ] Business associate agreements
- [ ] Security risk assessment
- [ ] Incident response plan

### SOC 2 Compliance
- [ ] Security policies
- [ ] Access controls
- [ ] System monitoring
- [ ] Incident response
- [ ] Vendor management
- [ ] Change management

## Incident Response Plan

### 1. Detection
- Monitor logs and alerts
- Security scanning
- User reports

### 2. Analysis
- Determine severity
- Identify affected systems
- Document timeline

### 3. Containment
- Isolate affected systems
- Revoke compromised credentials
- Apply temporary fixes

### 4. Eradication
- Remove malware/backdoors
- Patch vulnerabilities
- Update credentials

### 5. Recovery
- Restore from backups
- Verify system integrity
- Monitor for recurrence

### 6. Post-Incident
- Document lessons learned
- Update security policies
- Improve detection methods

## Security Contacts

- **Security Team**: security@nyxtitan.com
- **Bug Bounty**: bugbounty@nyxtitan.com
- **Emergency**: +1-XXX-XXX-XXXX

## Regular Security Tasks

### Daily
- [ ] Monitor error logs
- [ ] Review failed login attempts
- [ ] Check system health

### Weekly
- [ ] Review access logs
- [ ] Update dependencies
- [ ] Scan for vulnerabilities

### Monthly
- [ ] Security audit
- [ ] Review user permissions
- [ ] Update security policies
- [ ] Penetration testing

### Quarterly
- [ ] Full security assessment
- [ ] Third-party audit
- [ ] Disaster recovery drill
- [ ] Staff security training

---

**Last Updated**: February 7, 2026
**Status**: Security audit documentation complete - ready for implementation
