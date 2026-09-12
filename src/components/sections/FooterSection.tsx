import { motion } from 'framer-motion'
import React from 'react'

export const FooterSection = () => (
  <footer className="bg-bg py-20 md:py-24 text-muted">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-sm leading-relaxed"
      >
        © {new Date().getFullYear()} PointX — software engineering studio. All rights reserved.
      </motion.p>

      <nav aria-label="Footer" className="grid gap-8 mx-auto max-w-2xl sm:grid-cols-2">
        <div>
          <a href="#services" className="inline-flex min-h-11 items-center hover:text-ink transition-colors block mb-2">
            Services
          </a>
          <a href="#projects" className="inline-flex min-h-11 items-center hover:text-ink transition-colors block mb-2">
            Projects
          </a>
          <a href="#about" className="inline-flex min-h-11 items-center hover:text-ink transition-colors block mb-2">
            About
          </a>
        </div>
        <div>
          <a href="#faq" className="inline-flex min-h-11 items-center hover:text-ink transition-colors block mb-2">
            FAQ
          </a>
          <a href="#final-cta" className="inline-flex min-h-11 items-center hover:text-accent transition-colors block mb-2">
            Contact
          </a>
        </div>
      </nav>
    </div>
  </footer>
)