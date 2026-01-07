'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'employee' | 'manager' | 'admin';
  employeeId?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (data: SignupData) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  employeeId?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call - in production, this would call your backend
    try {
      // Mock authentication - check against stored users
      const storedUsers = localStorage.getItem('registeredUsers');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      
      const foundUser = users.find((u: any) => u.email === email && u.password === password);
      
      if (foundUser) {
        const userSession = {
          id: foundUser.id,
          email: foundUser.email,
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          role: foundUser.role || 'employee',
          employeeId: foundUser.employeeId,
        };
        setUser(userSession);
        localStorage.setItem('user', JSON.stringify(userSession));
        return true;
      }
      
      // Demo admin account
      if (email === 'admin@scheduler.com' && password === 'admin123') {
        const adminUser = {
          id: 'admin-1',
          email: 'admin@scheduler.com',
          firstName: 'Admin',
          lastName: 'User',
          role: 'admin' as const,
        };
        setUser(adminUser);
        localStorage.setItem('user', JSON.stringify(adminUser));
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const signup = async (data: SignupData): Promise<boolean> => {
    try {
      // Get existing users
      const storedUsers = localStorage.getItem('registeredUsers');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      
      // Check if email already exists
      if (users.some((u: any) => u.email === data.email)) {
        return false;
      }
      
      // Create new user
      const newUser = {
        id: `user-${Date.now()}`,
        email: data.email,
        password: data.password, // In production, this would be hashed on the backend
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        employeeId: data.employeeId,
        role: 'employee' as const,
        createdAt: new Date().toISOString(),
      };
      
      // Save to storage
      users.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(users));
      
      // Auto-login after signup
      const userSession = {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        role: newUser.role,
        employeeId: newUser.employeeId,
      };
      setUser(userSession);
      localStorage.setItem('user', JSON.stringify(userSession));
      
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
