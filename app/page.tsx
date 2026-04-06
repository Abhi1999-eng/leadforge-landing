'use client';

import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { COMPANY, PORTFOLIO, PRICING, SERVICES, WHY_US } from '../lib/content';
import { buildWhatsAppUrl } from '../lib/whatsapp';

const heroStats = [
  { label: 'Avg. uplift in leads', value: '+42%' },
  { label: 'Projects launched', value: '130+' },
  { label: 'Avg. page speed score', value: '95/100' },
];

export default function Page() {
  const [form, setForm] = useState({ name: '', phone: '', business: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start end', 'end start'] });
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const whatsappUrl = useMemo(
    () => buildWhatsAppUrl({ name: form.name, phone: form.phone, business: form.business }),
    [form.business, form.name, form.phone]
  );

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!form.phone.trim()) nextErrors.phone = 'Phone is required';
    if (form.phone && !/^\+?[0-9\s-]{7,15}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Enter a valid phone number';
    }
    if (!form.business.trim()) nextErrors.business = 'Business type is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <Section id="hero" className="pt-8 sm:pt-12">
        <div ref={heroRef} className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">LeadForge</p>
            <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              We build websites that turn visitors into paying customers
            </h1>
            <p className="mt-6 text-xl text-slate-600 sm:max-w-3xl leading-8">
              LeadForge helps businesses grow with high-converting websites, SEO, and digital marketing strategies.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#contact">Get Free Consultation</Button>
              <Button
                href={whatsappUrl}
                target="_blank"
                variant="secondary"
                className="bg-[#25D366] text-white border-none hover:brightness-110"
              >
                Chat on WhatsApp
              </Button>
            </div>
            <p className="mt-6 text-sm font-semibold text-slate-300">Trusted by growing businesses</p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <Card key={stat.label} className="bg-white">
                  <p className="text-2xl font-semibold text-dark">{stat.value}</p>
                  <p className="text-base text-slate-500">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            style={{ y: floatY }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#fef6ec] via-white to-[#ecf7fe] p-8 shadow-card animated-gradient">
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-secondary/15 blur-3xl" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Active projects</p>
                    <p className="text-3xl font-semibold text-dark">12</p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">On track</span>
                </div>
                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-600">Conversion lift</p>
                  <p className="text-3xl font-semibold text-dark">+42% in 60 days</p>
                </div>
                <div className="grid gap-3">
                  {['Design Sprint', 'SEO Sprints', 'Ad Launch'].map((item, idx) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl border border-border bg-white p-3 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-lg font-semibold text-primary">
                          {idx + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-dark">{item}</p>
                          <p className="text-xs text-slate-600">Weekly progress</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-primary">+12%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="Services"
        title="Turning clicks into customers"
        description="Strategy, execution, and optimization under one team. No hand-offs, just outcomes."
        className="pt-6"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <Card key={service.title} bordered>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg text-primary shadow-sm">
                {service.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-dark">{service.title}</h3>
              <p className="mt-2 text-base text-slate-600 leading-7">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="portfolio"
        eyebrow="Portfolio"
        title="Recent outcomes"
        description="Growth stories that blend design, engineering, and marketing impact."
        className="pt-6"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {PORTFOLIO.map((item) => (
            <Card key={item.title} bordered className="flex flex-col gap-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-light">
                <Image src={item.image} alt={item.title} fill className="object-contain p-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-base text-slate-600 leading-7">{item.result}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="why" eyebrow="Why Choose Us" title="Built for conversions">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((point) => (
            <Card key={point} className="bg-white">
              <p className="text-lg font-semibold text-dark">{point}</p>
              <p className="mt-2 text-base text-slate-600 leading-7">We bake this into every engagement.</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="pricing" eyebrow="Pricing" title="Pick a plan that matches your goals" className="bg-light">
        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING.map((tier) => (
            <Card
              key={tier.name}
              bordered={tier.popular}
              className={`${tier.popular ? 'bg-blue-50 border-primary/30' : ''} flex flex-col gap-4`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.1em] text-slate-400">
                    {tier.popular ? 'Most Popular' : 'Plan'}
                  </p>
                  <h3 className="text-2xl font-semibold text-dark">{tier.name}</h3>
                  <p className="text-sm text-slate-600">{tier.subtitle}</p>
                </div>
                {tier.popular && <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">Top pick</span>}
              </div>
              <p className="text-4xl font-semibold text-dark">{tier.price}</p>
              <ul className="space-y-2 text-base text-slate-600 leading-7">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="#contact" variant={tier.popular ? 'primary' : 'secondary'} className="mt-auto">
                Book this plan
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Ready to grow your business online?"
        description="Let LeadForge build your next growth engine."
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card bordered className="bg-white">
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="text-base text-slate-600" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-dark outline-none focus:border-primary"
                  placeholder="Jane Doe"
                  required
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label className="text-base text-slate-600" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-dark outline-none focus:border-primary"
                  placeholder="+1 555 123 4567"
                  required
                />
                {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
              </div>
              <div>
                <label className="text-base text-slate-600" htmlFor="business">
                  Business Type
                </label>
                <input
                  id="business"
                  name="business"
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-dark outline-none focus:border-primary"
                  placeholder="Gym, real estate, SaaS, etc."
                  required
                />
                {errors.business && <p className="mt-1 text-xs text-red-400">{errors.business}</p>}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button as="button" variant="primary" className="w-full sm:w-auto">
                  Send Request
                </Button>
                <Button href={whatsappUrl} target="_blank" variant="ghost" className="w-full sm:w-auto">
                  Chat on WhatsApp
                </Button>
              </div>
              {submitted && <p className="text-sm text-green-400">Thanks! We will contact you within one business day.</p>}
              <p className="text-sm text-slate-500">
                Prefer email? Reach us at <a className="underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </p>
            </form>
          </Card>
          <div className="space-y-4">
            <Card className="bg-blue-50">
              <h3 className="text-xl font-semibold text-dark">What happens next?</h3>
              <ul className="mt-3 space-y-2 text-base text-slate-700 leading-7">
                <li>• 15-minute discovery call</li>
                <li>• Quick roadmap & quote in 24 hours</li>
                <li>• Launch timeline and success metrics</li>
              </ul>
            </Card>
            <Card className="bg-white">
              <h3 className="text-xl font-semibold text-dark">Email fallback</h3>
              <p className="mt-2 text-base text-slate-600 leading-7">Prefer email? We respond within one business day.</p>
              <Button href={`mailto:${COMPANY.email}`} variant="secondary" className="mt-4 w-full">
                Email us
              </Button>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
