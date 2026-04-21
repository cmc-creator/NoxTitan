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
  primary:   'bg-[rgba(201,168,76,0.12)] border border-[#C9A84C] text-[#E8C060] hover:bg-[rgba(201,168,76,0.22)] hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]',
  secondary: 'bg-transparent border border-[rgba(201,168,76,0.35)] text-[#9E8F75] hover:border-[rgba(201,168,76,0.6)] hover:text-[#C9A84C]',
  success:   'bg-[rgba(201,168,76,0.12)] border border-[#C9A84C] text-[#E8C060] hover:bg-[rgba(201,168,76,0.22)] hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]',
  danger:    'bg-transparent border border-[rgba(201,168,76,0.35)] text-[#9E8F75] hover:border-[rgba(201,168,76,0.6)] hover:text-[#C9A84C]',
  warning:   'bg-transparent border border-[rgba(201,168,76,0.35)] text-[#9E8F75] hover:border-[rgba(201,168,76,0.6)] hover:text-[#C9A84C]',
  purple:    'bg-[rgba(201,168,76,0.12)] border border-[#C9A84C] text-[#E8C060] hover:bg-[rgba(201,168,76,0.22)] hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]',
  blue:      'bg-transparent border border-[rgba(201,168,76,0.35)] text-[#9E8F75] hover:border-[rgba(201,168,76,0.6)] hover:text-[#C9A84C]',
  green:     'bg-transparent border border-[rgba(201,168,76,0.35)] text-[#9E8F75] hover:border-[rgba(201,168,76,0.6)] hover:text-[#C9A84C]',
  red:       'bg-transparent border border-[rgba(201,168,76,0.35)] text-[#9E8F75] hover:border-[rgba(201,168,76,0.6)] hover:text-[#C9A84C]',
  yellow:    'bg-[rgba(201,168,76,0.12)] border border-[#C9A84C] text-[#E8C060] hover:bg-[rgba(201,168,76,0.22)] hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]',
};

const baseStyles = 'px-6 py-3 rounded font-bold transition-all inline-flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed';

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


