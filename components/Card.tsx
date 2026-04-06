import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}

export function Card({ children, className = '', bordered = false }: CardProps) {
  return (
    <div
      className={`glow-card relative overflow-hidden rounded-2xl bg-white p-6 shadow-card transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-primary/40 border border-border ${
        bordered ? 'bg-gradient-to-b from-blue-50 to-white border-primary/20' : ''
      } ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
