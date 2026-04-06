import Link from 'next/link';
import { Button } from './Button';
import { NAV_LINKS, WHATSAPP_NUMBER, COMPANY } from '../lib/content';
import Image from 'next/image';
import { Logo } from './Logo';

export function Header() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(
    COMPANY.whatsappMessage
  )}`;

  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl backdrop-saturate-150 border-b border-border bg-white/90">
      <div className="section-container flex items-center justify-between py-4">
        <Link href="#" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition text-dark hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={whatsappUrl}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-soft hover:brightness-110 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/icons-whatsapp.svg" alt="WhatsApp" width={18} height={18} />
          Chat on WhatsApp
        </Link>
        <Link
          href={whatsappUrl}
          className="md:hidden inline-flex items-center gap-1 text-sm font-semibold text-[#25D366]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/icons-whatsapp.svg" alt="WhatsApp" width={16} height={16} />
          WhatsApp
        </Link>
      </div>
    </header>
  );
}
