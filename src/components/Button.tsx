import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'purple' | 'blue' | 'green' | 'red' | 'yellow';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-2 border-purple-600/40 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]',
  secondary: 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-2 border-gray-600/40 hover:border-gray-400 hover:shadow-[0_0_20px_rgba(156,163,175,0.6)]',
  success: 'bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-2 border-green-600/40 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]',
  danger: 'bg-gradient-to-br from-red-900/50 to-rose-900/50 border-2 border-red-600/40 hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]',
  warning: 'bg-gradient-to-br from-yellow-900/50 to-amber-900/50 border-2 border-yellow-600/40 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.6)]',
  purple: 'bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-2 border-purple-600/40 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]',
  blue: 'bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-2 border-blue-600/40 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]',
  green: 'bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-2 border-green-600/40 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]',
  red: 'bg-gradient-to-br from-red-900/50 to-rose-900/50 border-2 border-red-600/40 hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]',
  yellow: 'bg-gradient-to-br from-yellow-900/50 to-amber-900/50 border-2 border-yellow-600/40 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.6)]',
};

const baseStyles = 'px-6 py-3 rounded-xl font-bold shadow-lg transition-all text-white inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  disabled, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href && !disabled) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
