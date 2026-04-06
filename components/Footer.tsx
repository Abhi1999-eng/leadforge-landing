import Link from 'next/link';
import { COMPANY, NAV_LINKS } from '../lib/content';

export function Footer() {
  return (
    <footer className="border-t border-border bg-light py-10">
      <div className="section-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-dark">
        <div>
          <p className="text-xl font-semibold text-dark">{COMPANY.name}</p>
          <p className="text-base text-dark/80">Websites, SEO, and marketing that grow revenue.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-base">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-primary">
              {link.label}
            </Link>
          ))}
          <Link href={`mailto:${COMPANY.email}`} className="transition hover:text-primary">
            {COMPANY.email}
          </Link>
        </div>
        <div className="flex items-center gap-4 text-2xl">
          <Link href="#" aria-label="LinkedIn" className="hover:text-primary text-dark">↗</Link>
          <Link href="#" aria-label="Twitter" className="hover:text-primary text-dark">✕</Link>
          <Link href="#" aria-label="Instagram" className="hover:text-primary text-dark">◎</Link>
        </div>
      </div>
    </footer>
  );
}
