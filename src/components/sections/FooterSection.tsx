import { motion } from 'framer-motion'
import React from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact', prominent: true },
]

export const FooterSection = () => (
  <footer className="bg-bg py-14 text-muted md:py-16">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(12rem,20rem)] md:gap-16"
      >
        <div>
          <a href="/" className="text-lg font-bold tracking-tight text-ink transition-colors hover:text-accent">
            PointX
          </a>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Independent projects, still evolving.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-ink">Navigation</p>
          <ul className="flex flex-col items-start gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={'inline-flex min-h-11 items-center text-sm transition-colors hover:text-ink'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      <div className="mt-10 flex flex-col gap-1 border-t border-line pt-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p>© {new Date().getFullYear()} PointX — independent projects built from curiosity.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </footer>
)