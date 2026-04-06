import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  as?: 'button' | 'link';
  target?: string;
}

const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300';

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-primary text-white shadow-soft hover:translate-y-[-1px] hover:shadow-lg',
  secondary: 'bg-white text-dark border border-border hover:-translate-y-[1px] hover:shadow-soft',
  ghost: 'border border-border text-dark hover:bg-light/60',
};

export function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  as = 'link',
  target,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (as === 'button' || !href) {
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }
  return (
    <Link href={href} className={classes} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
      {children}
    </Link>
  );
}
