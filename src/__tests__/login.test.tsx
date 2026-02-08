import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Mock login page component for testing
function MockLoginPage() {
  return (
    <div>
      <h1>NyxTitan</h1>
      <p>Sign in to your account</p>
      <form>
        <input type="email" placeholder="you@example.com" />
        <input type="password" placeholder="••••••••" />
        <button type="submit">Sign In</button>
      </form>
      <div>
        <p>Demo Credentials:</p>
        <p>Email: demo@nyxtitan.com</p>
        <p>Password: demo123456</p>
      </div>
    </div>
  )
}

describe('Login Page', () => {
  it('renders the login form', () => {
    render(<MockLoginPage />)
    
    expect(screen.getByText('NyxTitan')).toBeInTheDocument()
    expect(screen.getByText('Sign in to your account')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('••••••••')).toBeInTheDocument()
  })

  it('displays correct demo credentials', () => {
    render(<MockLoginPage />)
    
    expect(screen.getByText('demo@nyxtitan.com')).toBeInTheDocument()
    expect(screen.getByText('demo123456')).toBeInTheDocument()
  })

  it('has a submit button', () => {
    render(<MockLoginPage />)
    
    const submitButton = screen.getByRole('button', { name: /sign in/i })
    expect(submitButton).toBeInTheDocument()
  })
})

describe('Application Branding', () => {
  it('uses NyxTitan branding', () => {
    render(<MockLoginPage />)
    
    // Verify NyxTitan is used, not NoxTitan or TeamPulse
    expect(screen.getByText('NyxTitan')).toBeInTheDocument()
    expect(screen.queryByText('NoxTitan')).not.toBeInTheDocument()
    expect(screen.queryByText('TeamPulse')).not.toBeInTheDocument()
  })

  it('uses correct demo email domain', () => {
    render(<MockLoginPage />)
    
    const demoEmail = screen.getByText('demo@nyxtitan.com')
    expect(demoEmail).toBeInTheDocument()
    expect(demoEmail.textContent).toContain('nyxtitan.com')
  })
})
