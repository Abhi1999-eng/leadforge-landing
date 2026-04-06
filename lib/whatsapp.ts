import { COMPANY, WHATSAPP_NUMBER } from './content';

export function buildWhatsAppUrl({ name, phone, business }: { name?: string; phone?: string; business?: string }) {
  const base = WHATSAPP_NUMBER.replace(/\D/g, '');
  const message = `${COMPANY.whatsappMessage}\n\nName: ${name || 'N/A'}\nPhone: ${phone || 'N/A'}\nBusiness: ${business || 'N/A'}`;
  return `https://wa.me/${base}?text=${encodeURIComponent(message)}`;
}
