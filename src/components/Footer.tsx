'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#0D0B08',
      borderTop: '1px solid rgba(201,168,76,0.18)',
      marginTop: 'auto',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 40px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>

          {/* Branding */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <img
                src="/titanlogo.png"
                alt="NyxTitan"
                style={{
                  height: '28px',
                  width: 'auto',
                  filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.35))',
                }}
              />
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: '1.1rem',
                letterSpacing: '3px',
                background: 'linear-gradient(135deg, #C9A84C, #E8C060, #C9A84C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                NyxTitan™
              </span>
            </div>
            <p style={{ fontSize: '0.72rem', color: '#5A5040', letterSpacing: '0.5px' }}>
              by <strong style={{ color: '#9E8F75' }}>Connie Michelle Consulting &amp; Business Solutions LLC</strong>
            </p>
          </div>

          {/* Links & Copyright */}
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.72rem', color: '#5A5040', marginBottom: '6px' }}>
              © {currentYear} Connie Michelle Consulting &amp; Business Solutions LLC. All rights reserved.
            </p>
            <p style={{ fontSize: '0.7rem', color: '#3a3020', marginBottom: '10px' }}>
              NyxTitan™ is a trademark of Connie Michelle Consulting &amp; Business Solutions LLC
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
              {[
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }, i, arr) => (
                <span key={href} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <a
                    href={href}
                    style={{ fontSize: '0.72rem', color: '#9E8F75', textDecoration: 'none', letterSpacing: '0.5px', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#E8C060'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#9E8F75'; }}
                  >
                    {label}
                  </a>
                  {i < arr.length - 1 && <span style={{ color: '#3a3020' }}>·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Legal notice */}
        <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(201,168,76,0.08)', textAlign: 'center' }}>
          <p style={{ fontSize: '0.68rem', color: '#3a3020', lineHeight: 1.7 }}>
            This software and all associated materials are proprietary to Connie Michelle Consulting &amp; Business Solutions LLC.
            Unauthorized reproduction, distribution, or use is strictly prohibited and may result in civil and criminal penalties.
          </p>
        </div>
      </div>
    </footer>
  );
}

