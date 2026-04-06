import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2 font-bold text-lg tracking-tight', className)}>
      <span className="text-white">Lead</span>
      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Forge</span>
      <span className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-primary">
        ↑
      </span>
    </div>
  );
}
