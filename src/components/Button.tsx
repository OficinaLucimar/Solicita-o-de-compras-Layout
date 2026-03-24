import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const variants = {
    primary: 'primary-gradient text-white shadow-lg hover:opacity-90 active:scale-[0.98]',
    secondary: 'bg-surface-highest text-primary hover:bg-outline-variant/20',
    ghost: 'text-on-surface-variant hover:bg-surface-low',
    outline: 'border-2 border-outline-variant/30 text-on-surface-variant hover:bg-surface-low',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-6 py-3 text-sm font-bold',
    lg: 'px-8 py-4 text-lg font-bold',
  };

  return (
    <button
      className={cn(
        'rounded-xl transition-all flex items-center justify-center gap-2 font-headline',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
