import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 ${className}`}>
      <div className="section-container">
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
            )}
            {title && (
              <h2 className="text-4xl font-semibold sm:text-5xl lg:text-6xl leading-tight text-dark">{title}</h2>
            )}
            {description && <p className="mt-4 text-xl text-slate-500 leading-8">{description}</p>}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
